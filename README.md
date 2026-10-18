# 角色陪伴番茄钟（Roche 插件）

专注计时 + 五种专注模式 + 角色监督 + 记录统计。当前版本 **0.1.2**：A/B1/B2/C1/C2 五种模式、四项独立监督权限（回应/加时/禁言/锁房间）、加时上下限、禁言倒计时、锁房间遮罩与紧急退出，以及角色绑定选择。立绘点触、AI、语音、主聊天注入在后续阶段。

## 安装

在「小手机 → Settings → 插件 App 管理」里填 Manifest 链接：

```
https://raw.githubusercontent.com/chu-bing-yu/focus-companion/main/manifest.json
```

镜像（国内更稳）：

```
https://cdn.jsdelivr.net/gh/chu-bing-yu/focus-companion@main/manifest.json
```

## 本地开发

```bash
npm install          # 只装 esbuild（devDependency）
npm run build        # src/ → plugin.js（单文件 IIFE）
npm test             # 核心逻辑单测（node --test）
```

浏览器预览（免安装）：

```
dev/preview.html            正式版
dev/preview.html?src=probe  宿主能力探针
```

预览使用 `dev/mock-host.js` 模拟 `roche.*`，数据存在 localStorage，卸载不影响真机数据。

## 目录

```
src/
  main.js            插件注册与生命周期
  app/container.js   装配：宿主适配 + 存储 + 计时 + 监督动作
  app/shell.js       页面路由、底部 Dock、锁房间遮罩挂载
  core/              纯逻辑（无 DOM、无宿主调用，可单测）
    timer.js         计时状态机（绝对时间、禁言/锁房间状态）
    modes.js         五种模式的能力矩阵
    permissions.js   四项监督权限的校验与加时/禁言上限
    records.js       记录模型与归一化
    stats.js         聚合、月历、连续天数
    settings.js      默认值、校验、v1→v2 迁移
    phrases.js       内置备用台词（断网兜底）
    format.js        时间格式化
  services/
    host.js          唯一接触 roche.* 的适配层
    store.js         持久化：key 规划、导入导出
    supervisor.js    监督动作唯一入口（校验后执行）
  ui/
    theme.css        主题变量（仅根容器内）
    base.css         布局与通用控件
    views.css        页面样式
    dom.js           h()/SVG/事件工具
    components.js    图标、卡片、弹层
    lock.js          锁房间遮罩与紧急退出
    views/           focus / stats / history / settings
  lib/
    bus.js           事件总线与事件名
    mt.js            统一文案与拒绝原因
tests/               计时、统计、记录、模式、权限单测
probe/               宿主能力探针（一次性）
```

## 数据

全部保存在 `roche.storage` 的四个 key：`fc:settings` / `fc:session` / `fc:records` / `fc:meta`。

**卸载插件时宿主会清空这些数据**，请在设置页定期「导出备份」。

## 约定

- 所有 `roche.*` 调用只允许出现在 `src/services/host.js`
- `src/core/*` 不碰 DOM、不读系统时间（时间由参数传入）
- 样式选择器全部以 `.fc-root` 开头，不改 `body/html`
- `mount` 里创建的定时器、监听、样式必须在 `unmount` 清理
- 监督动作（加时/禁言/锁房间/说话）只允许走 `services/supervisor.js`，规则在 `core/permissions.js`
- A 模式永不调用角色能力、永不锁房间；锁房间始终保留紧急退出
