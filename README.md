# 角色陪伴番茄钟（Roche 插件）

首页待办清单 + 每日目标 → 点待办进入番茄钟 → 聊天单独一屏。
五种角色模式、四项监督权限、AI 聊天（自定义提示词）。
当前版本 **0.3.3**。语音、立绘点触、主聊天注入在后续阶段。

界面分三屏，都在「专注」这个 App 内：

- **首页**：今日目标进度、待办清单、进行中的计时条，不含计时环
- **计时页**：计时环、本轮设置（时长/休息/轮数）、模式切换、角色监督
- **聊天页**：C1/C2 可用，微信式气泡；**回车只把消息放进聊天室**，点小飞机才请求角色回复（没字时让角色主动开口）；点角色气泡可改这一轮回复
- **聊天设置**（聊天页右上角齿轮）：开始后默认进计时页/聊天室、主动说话开关与频率、聊天/主动说话提示词、按角色保存的兜底语句、控制台（完整 SYSTEM + 聊天室上下文 + token 估算）
- 提示词占位符可点击插入，记忆分四项：`{{memory_core}}` 核心记忆、`{{memory_long}}` 长期记忆、`{{memory_short}}` 短期记忆、`{{memory_vector}}` 向量记忆；不会自动注入宿主聊天
- 计时页监督只有加时 / 禁言 / 锁房间；角色主动说话在聊天室，未读时「聊天」按钮显示红点

## 安装

在「小手机 → Settings → 插件 App 管理」里填 Manifest 链接：

```
https://raw.githubusercontent.com/chu-bing-yu/focus-companion/main/manifest.json
```

镜像（国内更稳，但有缓存延迟）：

```
https://cdn.jsdelivr.net/gh/chu-bing-yu/focus-companion@main/manifest.json
```

## 本地开发

```bash
npm install          # 只装 esbuild（devDependency）
npm run build        # src/ → plugin.js（单文件 IIFE），并自动归档到 releases/
npm test             # 核心逻辑单测（node --test）
npm run deploy       # 发布到 GitHub（需要 GITHUB_TOKEN 环境变量）
```

浏览器预览（免安装）：

```
dev/preview.html            正式版
dev/preview.html?src=probe  宿主能力探针
```

预览使用 `dev/mock-host.js` 模拟 `roche.*`，数据存在 localStorage，不影响真机。

## 版本与回退

每次 `npm run build` 都会把产物复制到 `releases/v<版本号>/`（`plugin.js` / `manifest.json` / `README.md`），并刷新 `releases/index.json`。

```bash
npm run releases                     # 列出所有归档
npm run rollback -- 0.1.2            # 用 0.1.2 的产物回退，版本号自动 +1 patch
npm run rollback -- 0.1.2 --as 0.3.0 # 指定发布版本号
npm run deploy                       # 回退后同样要发布
```

说明：

- 回退只替换 `plugin.js` / `manifest.json` / `README.md`，**不改 `src/`**；之后继续开发时 `npm run build` 会回到当前源码。
- 宿主按版本号判断更新，所以回退时会自动把版本号改成更大的数（发布的是旧代码，版本号继续递增）。
- 修改版本号时要同时改 `package.json` 与 `manifest.json`，构建会校验两者一致。

## 目录

```
src/
  main.js            插件注册与生命周期
  app/container.js   装配：宿主 + 存储 + 计时 + 待办 + 监督 + AI
  app/shell.js       Dock、路由、锁房间遮罩挂载
  core/              纯逻辑（无 DOM、无宿主调用，可单测）
    timer.js         计时状态机（绝对时间、禁言/锁房间）
    modes.js         五种模式的能力矩阵
    permissions.js   四项监督权限与加时/禁言上限
    tasks.js         待办清单模型
    prompts.js       提示词模板与占位符渲染
    records.js       记录模型与归一化
    stats.js         聚合、月历、连续天数
    settings.js      默认值、校验、v1→v3 迁移
    phrases.js       内置备用台词（断网兜底）
    format.js        时间格式化
  services/
    host.js          唯一接触 roche.* 的适配层
    store.js         持久化：key 规划、导入导出
    supervisor.js    监督动作唯一入口（校验后执行）
    dialogue.js      拼上下文 → 调宿主 AI → 清理输出
  ui/
    theme.css / base.css / views.css
    dom.js           h()/SVG/事件工具
    components.js    图标、卡片、弹层
    lock.js          锁房间遮罩与紧急退出
    views/           focus / stats / history / settings
  lib/
    bus.js           事件总线与事件名
    mt.js            统一文案与拒绝原因
tests/               计时、统计、记录、模式、权限、待办、提示词单测
releases/            每个版本的构建产物（回退用）
probe/               宿主能力探针（一次性）
```

## 数据

`roche.storage` 六个 key：`fc:settings` / `fc:session` / `fc:records` / `fc:tasks` / `fc:phrases` / `fc:meta`。

**卸载插件时宿主会清空这些数据**，请在设置页定期「导出备份」。AI 聊天记录只保存在内存里，关闭 App 不保留；兜底语句按角色 ID 存在 `fc:phrases`。

## 约定

- 所有 `roche.*` 调用只允许出现在 `src/services/host.js`
- `src/core/*` 不碰 DOM、不读系统时间（时间由参数传入）
- 样式选择器全部以 `.fc-root` 开头，不改 `body/html`
- `mount` 里创建的定时器、监听、样式必须在 `unmount` 清理
- 监督动作（加时/禁言/锁房间/说话）只允许走 `services/supervisor.js`，规则在 `core/permissions.js`
- A 模式永不调用角色能力、永不锁房间；锁房间始终保留紧急退出
- AI 只走宿主 `ai.chat`，插件不保存任何 Key；提示词只存在本机存储
