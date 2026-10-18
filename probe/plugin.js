/* 专注插件 · 宿主能力探针 (P0)
 * 用途：一次性验证宿主真实能力，输出可复制的文本报告。
 * 说明：这不是产品代码，验证完成后即可卸载/删除。
 */
(function () {
  'use strict';

  var STYLE_ID = 'focus-probe-style';
  var LOG_PREFIX = 'probe:';

  var CSS = [
    '.focus-probe{display:flex;flex-direction:column;width:100%;height:100%;background:#fff;color:#1d1d1f;',
    'font:13px/1.6 -apple-system,"PingFang SC","Microsoft YaHei",sans-serif;overflow:hidden}',
    '.focus-probe *{box-sizing:border-box}',
    '.focus-probe__head{display:flex;align-items:center;justify-content:space-between;gap:8px;',
    'padding:calc(12px + env(safe-area-inset-top)) 16px 10px;border-bottom:1px solid #eee;flex:0 0 auto}',
    '.focus-probe__title{font-size:15px;font-weight:600}',
    '.focus-probe__body{flex:1 1 auto;min-height:0;overflow:auto;padding:12px 16px calc(24px + env(safe-area-inset-bottom))}',
    '.focus-probe__btn{border:1px solid #ddd;background:#fff;border-radius:98px;padding:6px 12px;font-size:12px;color:#333}',
    '.focus-probe__btn:active{background:#f5f5f5}',
    '.focus-probe__btn[disabled]{opacity:.5}',
    '.focus-probe__row{display:flex;gap:8px;align-items:flex-start;padding:5px 0;border-bottom:1px dashed #f1f1f1}',
    '.focus-probe__k{flex:0 0 34%;color:#888;word-break:break-all}',
    '.focus-probe__v{flex:1 1 auto;word-break:break-all;white-space:pre-wrap}',
    '.focus-probe__ok{color:#128a3a}',
    '.focus-probe__bad{color:#c0392b}',
    '.focus-probe__sect{margin:14px 0 4px;font-size:12px;font-weight:600;color:#666;letter-spacing:.04em}',
    '.focus-probe__actions{display:flex;flex-wrap:wrap;gap:6px;margin:10px 0}',
    '.focus-probe__pre{margin:10px 0 0;padding:10px;background:#fafafa;border:1px solid #eee;border-radius:8px;',
    'font:11px/1.55 ui-monospace,Consolas,monospace;white-space:pre-wrap;word-break:break-all;max-height:40vh;overflow:auto}',
    '.focus-probe__hint{color:#999;font-size:11.5px;margin:6px 0 0}'
  ].join('');

  function ensureStyle() {
    if (document.getElementById(STYLE_ID)) return;
    var s = document.createElement('style');
    s.id = STYLE_ID;
    s.textContent = CSS;
    document.head.appendChild(s);
  }

  function removeStyle() {
    var s = document.getElementById(STYLE_ID);
    if (s && s.parentNode) s.parentNode.removeChild(s);
  }

  function now() {
    var d = new Date();
    function p(n) { return n < 10 ? '0' + n : '' + n; }
    return d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate()) + ' ' +
      p(d.getHours()) + ':' + p(d.getMinutes()) + ':' + p(d.getSeconds());
  }

  function short(v, max) {
    max = max || 120;
    var s;
    if (v === null) s = 'null';
    else if (v === undefined) s = 'undefined';
    else if (typeof v === 'string') s = v;
    else {
      try { s = JSON.stringify(v); } catch (e) { s = String(v); }
    }
    if (s == null) s = String(v);
    return s.length > max ? s.slice(0, max) + '…(' + s.length + ')' : s;
  }

  function createReporter(appId) {
    var lines = [];
    return {
      raw: [],
      push: function (k, v) { this.raw.push({ k: k, v: v }); },
      section: function (name) { lines.push('', '--- ' + name + ' ---'); },
      line: function (s) { lines.push(s); },
      build: function (roche) {
        var head = [
          '=== 专注插件能力探针报告 ===',
          '时间: ' + now(),
          'App: ' + appId,
          'UA: ' + (navigator.userAgent || ''),
          '协议: ' + location.protocol + ' | 可见性: ' + document.visibilityState,
          '容器尺寸: ' + window.innerWidth + 'x' + window.innerHeight
        ];
        return head.concat(lines).join('\n');
      }
    };
  }

  function listKeys(obj) {
    if (!obj || typeof obj !== 'object') return [];
    try { return Object.keys(obj); } catch (e) { return []; }
  }

  function probeEnv(rep) {
    rep.section('环境');
    rep.line('RochePlugin: ' + typeof window.RochePlugin + ' | keys: ' + listKeys(window.RochePlugin).join(','));
    rep.line('window.Roche: ' + typeof window.Roche);
    var names = listKeys(window).filter(function (k) {
      return /^(roche|noir|Roche|Noir)/.test(k);
    });
    rep.line('window 上相关全局: ' + (names.join(',') || '(无)'));
  }

  function probeApi(roche, rep) {
    rep.section('roche API 清单');
    var ns = listKeys(roche);
    rep.line('roche 命名空间: ' + (ns.join(',') || '(空)'));
    ns.forEach(function (name) {
      var v = roche[name];
      if (v && typeof v === 'object') {
        rep.line('  ' + name + ': ' + listKeys(v).join(','));
      } else if (typeof v === 'function') {
        rep.line('  ' + name + ': <function>');
      } else {
        rep.line('  ' + name + ': ' + typeof v);
      }
    });
  }

  async function probeStorage(roche, rep, appId) {
    rep.section('存储');
    var st = roche && roche.storage;
    if (!st) { rep.line('roche.storage 不存在'); return; }
    rep.line('storage 方法: ' + listKeys(st).join(','));

    var key = LOG_PREFIX + 'roundtrip';
    var payload = { hello: 'world', n: 42, list: [1, 2, 3], at: Date.now() };
    try {
      await st.set(key, payload);
      var back = await st.get(key);
      rep.line('set/get 往返: ' + (back && back.hello === 'world' && back.n === 42 ? 'OK' : 'FAIL ' + short(back)));
      rep.line('读回类型: ' + typeof back + ' | 是否自动反序列化: ' + (typeof back === 'object' ? '是' : '否'));
    } catch (e) {
      rep.line('set/get 异常: ' + e.message);
    }
    try {
      await st.delete(key);
      var gone = await st.get(key);
      rep.line('delete 后读回: ' + short(gone));
    } catch (e) {
      rep.line('delete 异常: ' + e.message);
    }

    try {
      if (appId === 'probe-main') {
        await st.set(LOG_PREFIX + 'marker', { appId: appId, at: Date.now() });
        rep.line('已写入归属标记 probe:marker（本 App）');
      } else {
        rep.line('本 App 不写入，只读取 probe:marker，用于验证跨 App 隔离');
      }
      var other = await st.get(LOG_PREFIX + 'marker');
      rep.line('读标记 probe:marker: ' + short(other));
    } catch (e) {
      rep.line('标记读取异常: ' + e.message);
    }
  }

  async function probeCharacter(roche, rep) {
    rep.section('角色 / 人设 / 会话');
    var chars = null;
    try {
      chars = await roche.character.list();
      rep.line('character.list: ' + (Array.isArray(chars) ? chars.length + ' 个' : typeof chars));
      if (chars && chars.length) {
        var c = chars[0];
        rep.line('首项字段: ' + listKeys(c).join(','));
        rep.line('示例: name=' + short(c.name, 20) + ' handle=' + short(c.handle, 20) + ' conversationId=' + short(c.conversationId, 40));
        rep.line('音色字段: minimax=' + short(c.minimaxVoiceId, 24) + ' elevenlabs=' + short(c.elevenLabsVoiceId, 24));
        var got = await roche.character.get(c.id);
        rep.line('character.get: ' + (got && got.id === c.id ? 'OK' : 'FAIL'));
      }
    } catch (e) {
      rep.line('character.list 异常: ' + e.message);
    }

    try {
      var p = await roche.persona.getActiveUserPersona();
      rep.line('getActiveUserPersona: ' + (p ? 'OK 字段=' + listKeys(p).slice(0, 8).join(',') : 'null'));
    } catch (e) {
      rep.line('getActiveUserPersona 异常: ' + e.message);
    }

    try {
      var all = await roche.persona.getUserPersonas();
      rep.line('getUserPersonas: ' + (Array.isArray(all) ? all.length + ' 个' : typeof all));
    } catch (e) {
      rep.line('getUserPersonas 异常: ' + e.message);
    }

    var convs = null;
    try {
      convs = await roche.conversation.list();
      rep.line('conversation.list: ' + (Array.isArray(convs) ? convs.length + ' 个' : typeof convs));
      if (convs && convs.length) rep.line('会话字段: ' + listKeys(convs[0]).join(','));
    } catch (e) {
      rep.line('conversation.list 异常: ' + e.message);
    }

    try {
      if (convs && convs.length && roche.memory) {
        var st = await roche.memory.getShortTerm({ conversationId: convs[0].id, limit: 3 });
        rep.line('memory.getShortTerm: ' + (Array.isArray(st) ? st.length + ' 条' : typeof st));
      }
      if (convs && convs.length && roche.memory) {
        var lt = await roche.memory.getLongTerm({ conversationId: convs[0].id, limit: 5 });
        rep.line('memory.getLongTerm: ' + (lt ? 'core=' + typeof lt.core + ' facts=' + (lt.facts || []).length : 'null'));
      }
    } catch (e) {
      rep.line('memory 读取异常: ' + e.message);
    }

    try {
      var wb = await roche.worldbook.list();
      rep.line('worldbook.list: ' + (Array.isArray(wb) ? wb.length + ' 项' : typeof wb));
    } catch (e) {
      rep.line('worldbook.list 异常: ' + e.message);
    }

    return chars;
  }

  async function probeVoiceEnv(roche, rep) {
    rep.section('语音环境（不发请求）');
    try {
      var prov = await roche.voice.getProvider();
      rep.line('getProvider: ' + short(prov));
    } catch (e) {
      rep.line('getProvider 异常: ' + e.message);
    }
    try {
      var s = await roche.voice.getSettings();
      rep.line('getSettings: ' + short(s, 200));
    } catch (e) {
      rep.line('getSettings 异常: ' + e.message);
    }
    rep.line('voice 方法: ' + listKeys(roche.voice).join(','));
  }

  function buildUI(container, roche, appId) {
    ensureStyle();
    container.innerHTML = '';

    var root = document.createElement('div');
    root.className = 'focus-probe';

    var head = document.createElement('div');
    head.className = 'focus-probe__head';
    var title = document.createElement('div');
    title.className = 'focus-probe__title';
    title.textContent = appId === 'probe-compare' ? '存储对照' : '宿主能力探针';
    var copyBtn = document.createElement('button');
    copyBtn.className = 'focus-probe__btn';
    copyBtn.textContent = '复制报告';
    head.appendChild(title);
    head.appendChild(copyBtn);

    var body = document.createElement('div');
    body.className = 'focus-probe__body';

    var sect = document.createElement('div');
    sect.className = 'focus-probe__sect';
    sect.textContent = '自动检测结果';
    body.appendChild(sect);

    var list = document.createElement('div');
    body.appendChild(list);

    var actions = document.createElement('div');
    actions.className = 'focus-probe__actions';
    body.appendChild(actions);

    var hint = document.createElement('p');
    hint.className = 'focus-probe__hint';
    hint.textContent = '带费用的按钮请各点一次即可；报告生成后点右上角复制，粘贴回开发对话。';
    body.appendChild(hint);

    var pre = document.createElement('pre');
    pre.className = 'focus-probe__pre';
    pre.textContent = '正在检测…';
    body.appendChild(pre);

    root.appendChild(head);
    root.appendChild(body);
    container.appendChild(root);

    function row(k, v, state) {
      var r = document.createElement('div');
      r.className = 'focus-probe__row';
      var kk = document.createElement('div');
      kk.className = 'focus-probe__k';
      kk.textContent = k;
      var vv = document.createElement('div');
      vv.className = 'focus-probe__v' + (state === 'ok' ? ' focus-probe__ok' : state === 'bad' ? ' focus-probe__bad' : '');
      vv.textContent = v;
      r.appendChild(kk);
      r.appendChild(vv);
      list.appendChild(r);
    }

    var rep = createReporter(appId);
    var reportText = '';

    function refresh() {
      reportText = rep.build(roche);
      pre.textContent = reportText;
    }

    copyBtn.addEventListener('click', function () {
      var text = reportText || rep.build(roche);
      var done = function () { copyBtn.textContent = '已复制'; setTimeout(function () { copyBtn.textContent = '复制报告'; }, 1200); };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, function () { fallbackCopy(text, done); });
      } else {
        fallbackCopy(text, done);
      }
    });

    function fallbackCopy(text, cb) {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); cb(); } catch (e) { copyBtn.textContent = '请手动复制'; }
      document.body.removeChild(ta);
    }

    function addButton(label, fn, warn) {
      var b = document.createElement('button');
      b.className = 'focus-probe__btn';
      b.textContent = label;
      b.addEventListener('click', async function () {
        if (warn && !window.confirm(warn)) return;
        b.disabled = true;
        var old = b.textContent;
        b.textContent = '执行中…';
        try { await fn(); } catch (e) { row(label, '异常: ' + e.message, 'bad'); }
        b.textContent = old;
        b.disabled = false;
        refresh();
      });
      actions.appendChild(b);
      return b;
    }

    (async function run() {
      probeEnv(rep);
      probeApi(roche, rep);
      row('roche 命名空间', listKeys(roche).join(', ') || '(空)', listKeys(roche).length ? 'ok' : 'bad');

      await probeStorage(roche, rep, appId);

      if (appId === 'probe-compare') {
        rep.line('');
        rep.line('对照结论：若上面“本 App 读标记”为空/undefined，说明 storage 按 appId 隔离。');
      }

      var chars = await probeCharacter(roche, rep);
      await probeVoiceEnv(roche, rep);

      rep.section('待手动测试');
      rep.line('AI / TTS 需要点击按钮触发，结果会追加到本报告。');
      refresh();
    })();

    addButton('测试 AI', async function () {
      var t0 = Date.now();
      var r = await roche.ai.chat({
        messages: [{ role: 'user', content: '只回复两个字：收到' }],
        temperature: 0
      });
      var text = r && (r.text || r.content || (typeof r === 'string' ? r : ''));
      row('ai.chat', (text ? '返回: ' + short(text, 60) : '返回结构: ' + short(r, 160)) + ' | ' + (Date.now() - t0) + 'ms', text ? 'ok' : 'bad');
      rep.line('ai.chat 耗时 ' + (Date.now() - t0) + 'ms，返回 ' + short(r, 200));
      refresh();
    }, '会消耗一次 AI 额度，确定继续？');

    addButton('测试 TTS', async function () {
      var prov = await roche.voice.getProvider();
      var list = await roche.character.list();
      var c = list && list[0];
      var voiceId = c ? (prov === 'elevenlabs' ? (c.elevenLabsVoiceId || c.voiceIds && c.voiceIds.elevenlabs) : (c.minimaxVoiceId || c.voiceIds && c.voiceIds.minimax)) : '';
      if (!voiceId) {
        row('voice.tts', '角色未绑定 ' + prov + ' 音色，无法测试', 'bad');
        rep.line('voice.tts 跳过：无 voiceId');
        refresh();
        return;
      }
      var t0 = Date.now();
      var url = await roche.voice.tts({ text: '测试语音', voiceId: voiceId, language: 'Chinese' });
      row('voice.tts', '返回类型 ' + typeof url + ' | ' + short(url, 80) + ' | ' + (Date.now() - t0) + 'ms', 'ok');
      rep.line('voice.tts 返回: ' + short(url, 200));
      try {
        var a = new Audio(url);
        await a.play();
        row('Audio 播放', '可播放', 'ok');
        rep.line('Audio 播放: OK');
        setTimeout(function () { try { a.pause(); } catch (e) {} }, 1500);
      } catch (e) {
        row('Audio 播放', '失败: ' + e.message, 'bad');
        rep.line('Audio 播放失败: ' + e.message);
      }
      refresh();
    }, '会消耗一次 TTS 额度，确定继续？');

    addButton('测试 UI', async function () {
      await roche.ui.toast('探针：toast 正常');
      row('ui.toast', '已调用（看是否出现提示）', 'ok');
      var ok = await roche.ui.confirm({ title: '探针', message: '点确定，测试 confirm 返回值' });
      row('ui.confirm', '返回: ' + ok, ok ? 'ok' : 'bad');
      rep.line('ui.confirm 返回: ' + ok);
      refresh();
    });

    addButton('测试聊天上下文', async function () {
      row('chat.promptOnly', '无法从插件内自检；请到单聊里问一句，看模型是否提到「探针标记」', 'bad');
      rep.line('chat 字段自检说明：插件已注册 chat.promptOnly="PROBE_MARKER_2026"。');
      rep.line('验证方法：去单聊发「你看到 PROBE_MARKER_2026 了吗」，若模型复述则说明 chat 注入生效。');
      refresh();
    });

    addButton('清空探针数据', async function () {
      await roche.storage.delete(LOG_PREFIX + 'roundtrip');
      await roche.storage.delete(LOG_PREFIX + 'marker');
      row('清理', '已删除探针写入的键', 'ok');
      rep.line('已清理探针键');
      refresh();
    });
  }

  window.RochePlugin.register({
    id: 'focus-companion-probe',
    name: '专注插件·能力探针',
    version: '0.1.0',
    description: '一次性验证宿主公开能力，验证完成后可卸载',
    chat: {
      promptOnly: 'PROBE_MARKER_2026 是插件注入测试标记，仅在用户询问时提及。'
    },
    apps: [
      {
        id: 'probe-main',
        name: '能力探针',
        icon: 'settings',
        async mount(container, roche) {
          buildUI(container, roche, 'probe-main');
        },
        async unmount(container) {
          container.replaceChildren();
          removeStyle();
        }
      },
      {
        id: 'probe-compare',
        name: '存储对照',
        icon: 'database',
        async mount(container, roche) {
          buildUI(container, roche, 'probe-compare');
        },
        async unmount(container) {
          container.replaceChildren();
          removeStyle();
        }
      }
    ]
  });
})();
