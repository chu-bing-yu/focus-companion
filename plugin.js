/* focus-companion v0.13.0 | built 2026-10-20T12:22:59.546Z */
(() => {
  // src/ui/theme.css
  var theme_default = '/* 主题变量：只在插件根容器内生效 */\n.fc-root {\n  --fc-bg: #ffffff;\n  --fc-soft: #f6f7f9;\n  --fc-soft-2: #eef0f3;\n  --fc-line: #ecedf0;\n  --fc-line-strong: #dcdee3;\n  --fc-ink: #1b1c1f;\n  --fc-ink-2: #55585e;\n  --fc-muted: #8b9099;\n  --fc-accent: #1b1c1f;\n  --fc-on-accent: #ffffff;\n  --fc-ok: #2f9e44;\n  --fc-warn: #c0392b;\n  --fc-heat-0: #f4f5f7;\n  --fc-heat-1: #dfe3e8;\n  --fc-heat-2: #b9c0c9;\n  --fc-heat-3: #7d858f;\n  --fc-heat-4: #2b2d31;\n\n  --fc-r-lg: 18px;\n  --fc-r-md: 12px;\n  --fc-r-sm: 8px;\n  --fc-r-full: 999px;\n\n  --fc-shadow: 0 10px 30px rgba(17, 18, 20, 0.08);\n  --fc-font: -apple-system, BlinkMacSystemFont, "PingFang SC", "Microsoft YaHei", "Segoe UI", sans-serif;\n  --fc-mono: ui-monospace, SFMono-Regular, Consolas, "Liberation Mono", monospace;\n}\n\n.fc-root[data-theme="dark"] {\n  --fc-bg: #151619;\n  --fc-soft: #1d1f23;\n  --fc-soft-2: #24262b;\n  --fc-line: #2a2d33;\n  --fc-line-strong: #383c43;\n  --fc-ink: #f2f3f5;\n  --fc-ink-2: #c2c6cd;\n  --fc-muted: #8c919b;\n  --fc-accent: #f2f3f5;\n  --fc-on-accent: #151619;\n  --fc-heat-0: #212429;\n  --fc-heat-1: #2f333a;\n  --fc-heat-2: #4a5058;\n  --fc-heat-3: #8d949e;\n  --fc-heat-4: #e6e8ec;\n  --fc-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);\n}\n';

  // src/ui/base.css
  var base_default = '/* 基础布局与通用控件：所有选择器都以 .fc-root 开头 */\n\n.fc-root {\n  position: relative; /* 锁房间遮罩相对根容器定位，不用 position: fixed */\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  min-width: 0;\n  min-height: 0;\n  overflow: hidden;\n  background: var(--fc-bg);\n  color: var(--fc-ink);\n  font-family: var(--fc-font);\n  font-size: 14px;\n  line-height: 1.55;\n  -webkit-font-smoothing: antialiased;\n}\n\n.fc-root [hidden] { display: none !important; }\n\n/* 编辑输入框时让出键盘空间 */\n.fc-root--editing .fc-dock { display: none; }\n\n.fc-root *,\n.fc-root *::before,\n.fc-root *::after { box-sizing: border-box; }\n\n.fc-root h1,\n.fc-root h2,\n.fc-root h3,\n.fc-root p { margin: 0; }\n\n.fc-main {\n  flex: 1 1 auto;\n  min-height: 0;\n  overflow-y: auto;\n  overflow-x: hidden;\n  -webkit-overflow-scrolling: touch;\n}\n\n.fc-page {\n  padding: 18px 18px 28px;\n  min-height: 100%;\n}\n\n/* ---------- header ---------- */\n\n.fc-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 4px 0 16px;\n}\n\n.fc-header__title {\n  font-size: 20px;\n  font-weight: 600;\n  letter-spacing: 0.2px;\n}\n\n.fc-header__sub {\n  margin-top: 3px;\n  font-size: 12.5px;\n  color: var(--fc-muted);\n}\n\n/* ---------- card ---------- */\n\n.fc-card {\n  background: var(--fc-bg);\n  border: 1px solid var(--fc-line);\n  border-radius: var(--fc-r-lg);\n  padding: 16px;\n  margin-bottom: 12px;\n}\n\n.fc-card--soft { background: var(--fc-soft); border-color: transparent; }\n\n.fc-card__title {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--fc-ink-2);\n  margin-bottom: 10px;\n}\n\n/* ---------- buttons ---------- */\n\n.fc-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  min-height: 38px;\n  padding: 0 16px;\n  border: 1px solid var(--fc-line-strong);\n  border-radius: var(--fc-r-full);\n  background: var(--fc-bg);\n  color: var(--fc-ink);\n  font: 500 13.5px/1 var(--fc-font);\n  cursor: pointer;\n  transition: transform .08s ease, background .15s ease, opacity .15s ease;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.fc-btn:active { transform: scale(0.97); }\n.fc-btn[disabled] { opacity: .4; pointer-events: none; }\n\n.fc-btn--primary {\n  background: var(--fc-accent);\n  border-color: var(--fc-accent);\n  color: var(--fc-on-accent);\n}\n\n.fc-btn--ghost { background: transparent; border-color: transparent; color: var(--fc-ink-2); }\n.fc-btn--danger { color: var(--fc-warn); border-color: var(--fc-line-strong); }\n.fc-btn--block { display: flex; width: 100%; }\n.fc-btn--lg { min-height: 48px; padding: 0 30px; font-size: 15px; }\n\n.fc-icon { display: inline-flex; width: 18px; height: 18px; }\n.fc-icon svg { width: 100%; height: 100%; }\n\n/* 关闭按钮：宿主不提供，由插件自带 */\n.fc-close {\n  flex: 0 0 auto;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  border: 1px solid var(--fc-line);\n  background: transparent;\n  color: var(--fc-ink-2);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.fc-close:active { background: var(--fc-soft); }\n.fc-close .fc-icon { width: 14px; height: 14px; }\n\n/* ---------- dock ---------- */\n\n.fc-dock {\n  flex: 0 0 auto;\n  display: flex;\n  border-top: 1px solid var(--fc-line);\n  background: var(--fc-bg);\n  padding: 6px 8px 8px;\n}\n\n.fc-dock__item {\n  flex: 1 1 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 3px;\n  padding: 6px 0 2px;\n  border: 0;\n  background: transparent;\n  color: var(--fc-muted);\n  font: 500 10.5px/1.2 var(--fc-font);\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.fc-dock__item .fc-icon { width: 21px; height: 21px; }\n.fc-dock__item[aria-selected="true"] { color: var(--fc-ink); }\n\n/* ---------- tiles ---------- */\n\n.fc-tiles {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 8px;\n  margin-bottom: 12px;\n}\n\n.fc-tile {\n  border: 1px solid var(--fc-line);\n  border-radius: var(--fc-r-md);\n  padding: 12px 10px;\n}\n\n.fc-tile__label { font-size: 11.5px; color: var(--fc-muted); }\n.fc-tile__value { font-size: 17px; font-weight: 600; margin-top: 4px; letter-spacing: .2px; }\n.fc-tile__sub { font-size: 10.5px; color: var(--fc-muted); margin-top: 2px; }\n\n/* ---------- list ---------- */\n\n.fc-list { border: 1px solid var(--fc-line); border-radius: var(--fc-r-md); overflow: hidden; }\n\n.fc-row {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 13px 14px;\n  border-bottom: 1px solid var(--fc-line);\n  background: var(--fc-bg);\n}\n\n.fc-row:last-child { border-bottom: 0; }\n.fc-row--tap { cursor: pointer; }\n.fc-row--tap:active { background: var(--fc-soft); }\n\n.fc-row__main { flex: 1 1 auto; min-width: 0; }\n.fc-row__title { font-size: 14px; }\n.fc-row__sub { font-size: 11.5px; color: var(--fc-muted); margin-top: 2px; }\n.fc-row__value { font-size: 14px; font-variant-numeric: tabular-nums; }\n.fc-row__action { color: var(--fc-muted); font-size: 12px; }\n\n/* ---------- empty / loading ---------- */\n\n.fc-empty {\n  padding: 40px 18px;\n  text-align: center;\n  color: var(--fc-muted);\n}\n\n.fc-empty__title { font-size: 14px; color: var(--fc-ink-2); margin-bottom: 6px; }\n.fc-empty__desc { font-size: 12.5px; line-height: 1.7; }\n\n.fc-loading {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  padding: 60px 0;\n  color: var(--fc-muted);\n  font-size: 13px;\n}\n\n.fc-loading__dot {\n  width: 14px;\n  height: 14px;\n  border: 2px solid var(--fc-line-strong);\n  border-top-color: var(--fc-ink);\n  border-radius: 50%;\n  animation: fc-spin .8s linear infinite;\n}\n\n@keyframes fc-spin { to { transform: rotate(360deg); } }\n\n/* ---------- dialog ---------- */\n\n/* 弹层挂在 body 上，拿不到 .fc-root 的变量，所以这里补一份完整主题 */\n.fc-mask {\n  --fc-bg: #ffffff;\n  --fc-soft: #f6f7f9;\n  --fc-soft-2: #eef0f3;\n  --fc-line: #ecedf0;\n  --fc-line-strong: #dcdee3;\n  --fc-ink: #1b1c1f;\n  --fc-ink-2: #55585e;\n  --fc-muted: #8b9099;\n  --fc-accent: #1b1c1f;\n  --fc-on-accent: #ffffff;\n  --fc-warn: #c0392b;\n  --fc-ok: #2f9e44;\n  --fc-r-lg: 18px;\n  --fc-r-md: 12px;\n  --fc-r-sm: 8px;\n  --fc-r-full: 999px;\n  --fc-shadow: 0 18px 50px rgba(17, 18, 20, 0.18);\n  --fc-font: -apple-system, BlinkMacSystemFont, "PingFang SC", "Microsoft YaHei", "Segoe UI", sans-serif;\n  --fc-mono: ui-monospace, SFMono-Regular, Consolas, "Liberation Mono", monospace;\n\n  position: fixed;\n  inset: 0;\n  background: rgba(18, 19, 22, 0.38);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n  z-index: 2147483000;\n  animation: fc-fade .15s ease;\n  font-family: var(--fc-font);\n}\n\n@keyframes fc-fade { from { opacity: 0; } to { opacity: 1; } }\n\n.fc-dialog {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 330px;\n  max-height: 82vh;\n  background: var(--fc-bg);\n  color: var(--fc-ink);\n  border-radius: 20px;\n  padding: 20px 18px 16px;\n  box-shadow: var(--fc-shadow);\n  font-family: var(--fc-font);\n  animation: fc-pop .16s ease;\n}\n\n@keyframes fc-pop { from { transform: translateY(6px) scale(.98); opacity: .6; } to { transform: none; opacity: 1; } }\n\n.fc-dialog__title { font-size: 16px; font-weight: 600; margin-bottom: 12px; }\n.fc-dialog__body {\n  min-height: 0;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n  font-size: 13.5px;\n  color: var(--fc-ink-2);\n  line-height: 1.7;\n}\n.fc-dialog__label {\n  margin: 10px 0 6px;\n  font-size: 11.5px;\n  color: var(--fc-muted);\n}\n.fc-dialog__label:first-child { margin-top: 0; }\n.fc-dialog__actions { display: flex; gap: 8px; margin-top: 18px; flex-wrap: wrap; }\n.fc-dialog__actions .fc-btn { flex: 1 1 0; min-width: 72px; }\n\n/* 弹层内的输入框 */\n.fc-input {\n  width: 100%;\n  min-height: 40px;\n  padding: 8px 12px;\n  border: 1px solid var(--fc-line-strong);\n  border-radius: var(--fc-r-sm);\n  background: var(--fc-soft);\n  color: var(--fc-ink);\n  font: 400 14px/1.5 var(--fc-font);\n  outline: none;\n  -webkit-appearance: none;\n}\n.fc-input:focus { border-color: var(--fc-ink-2); background: var(--fc-bg); }\n.fc-input::placeholder { color: var(--fc-muted); }\n.fc-input[disabled] { opacity: .5; }\n\n/* ---------- misc ---------- */\n\n.fc-hint { font-size: 12px; color: var(--fc-muted); line-height: 1.7; margin-top: 8px; }\n.fc-tag {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: var(--fc-r-full);\n  background: var(--fc-soft-2);\n  color: var(--fc-ink-2);\n  font-size: 11px;\n}\n';

  // src/ui/views.css
  var views_default = '/* 页面级样式 */\n\n/* ---------- 专注页 ---------- */\n\n.fc-focus {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 6px;\n}\n\n.fc-focus__head {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 18px;\n}\n\n.fc-focus__mode { font-size: 13px; color: var(--fc-muted); }\n.fc-focus__right { display: flex; align-items: center; gap: 10px; }\n\n.fc-dots { display: flex; gap: 6px; }\n.fc-dots__dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: var(--fc-line-strong);\n}\n.fc-dots__dot.is-done { background: var(--fc-ink); }\n.fc-dots__dot.is-active { box-shadow: 0 0 0 3px var(--fc-soft-2); background: var(--fc-ink); }\n\n.fc-ring {\n  position: relative;\n  width: 268px;\n  height: 268px;\n  margin: 4px 0 10px;\n}\n\n.fc-ring svg { width: 100%; height: 100%; transform: rotate(-90deg); }\n.fc-ring__track { stroke: var(--fc-soft-2); }\n.fc-ring__bar {\n  stroke: var(--fc-ink);\n  transition: stroke-dashoffset .35s linear;\n}\n\n.fc-ring__center {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n}\n\n.fc-ring__time {\n  font-size: 46px;\n  font-weight: 300;\n  letter-spacing: 1px;\n  font-variant-numeric: tabular-nums;\n  font-family: var(--fc-mono);\n}\n\n.fc-ring__phase { font-size: 12.5px; color: var(--fc-muted); letter-spacing: .08em; }\n.fc-ring__bonus { font-size: 11.5px; color: var(--fc-ink-2); }\n\n.fc-controls {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin: 14px 0 18px;\n}\n\n.fc-controls__side {\n  width: 44px;\n  height: 44px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid var(--fc-line-strong);\n  border-radius: 50%;\n  background: var(--fc-bg);\n  color: var(--fc-ink-2);\n  cursor: pointer;\n}\n\n.fc-controls__side[disabled] { opacity: .35; pointer-events: none; }\n.fc-controls__side .fc-icon { width: 17px; height: 17px; }\n\n.fc-focus__today {\n  display: flex;\n  gap: 20px;\n  padding: 12px 22px;\n  border-radius: var(--fc-r-lg);\n  background: var(--fc-soft);\n  font-size: 12px;\n  color: var(--fc-ink-2);\n}\n\n.fc-focus__today b { font-weight: 600; font-variant-numeric: tabular-nums; }\n\n.fc-focus__note {\n  margin-top: 16px;\n  font-size: 11.5px;\n  color: var(--fc-muted);\n  text-align: center;\n  line-height: 1.7;\n}\n\n/* ---------- 统计页 ---------- */\n\n.fc-cal { border: 1px solid var(--fc-line); border-radius: var(--fc-r-md); padding: 12px; }\n\n.fc-cal__head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n\n.fc-cal__month { font-size: 14px; font-weight: 600; }\n\n.fc-cal__nav {\n  width: 30px;\n  height: 30px;\n  border: 0;\n  background: transparent;\n  color: var(--fc-ink-2);\n  cursor: pointer;\n  border-radius: 50%;\n}\n.fc-cal__nav:active { background: var(--fc-soft); }\n.fc-cal__nav[disabled] { opacity: .3; pointer-events: none; }\n\n.fc-cal__week,\n.fc-cal__grid {\n  display: grid;\n  grid-template-columns: repeat(7, minmax(0, 1fr));\n  gap: 4px;\n}\n\n.fc-cal__weekday {\n  text-align: center;\n  font-size: 10.5px;\n  color: var(--fc-muted);\n  padding-bottom: 4px;\n}\n\n.fc-day {\n  aspect-ratio: 1 / 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 3px;\n  border-radius: 8px;\n  font-size: 12px;\n  color: var(--fc-ink-2);\n  background: var(--fc-heat-0);\n  border: 0;\n  cursor: pointer;\n  position: relative;\n}\n\n.fc-day--out { background: transparent; color: var(--fc-line-strong); cursor: default; }\n.fc-day--h1 { background: var(--fc-heat-1); }\n.fc-day--h2 { background: var(--fc-heat-2); }\n.fc-day--h3 { background: var(--fc-heat-3); color: #fff; }\n.fc-day--h4 { background: var(--fc-heat-4); color: #fff; }\n.fc-day--today { box-shadow: inset 0 0 0 1.5px var(--fc-ink); }\n.fc-day__dot {\n  width: 3px;\n  height: 3px;\n  border-radius: 50%;\n  background: currentColor;\n  opacity: .55;\n}\n\n.fc-cal__legend {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  justify-content: flex-end;\n  margin-top: 10px;\n  font-size: 10.5px;\n  color: var(--fc-muted);\n}\n\n.fc-cal__legend i {\n  width: 10px;\n  height: 10px;\n  border-radius: 3px;\n  display: inline-block;\n}\n\n/* ---------- 历史徽标（统计页复用） ---------- */\n\n.fc-hist__badge {\n  display: inline-block;\n  margin-left: 6px;\n  padding: 1px 6px;\n  border-radius: var(--fc-r-full);\n  background: var(--fc-soft-2);\n  color: var(--fc-muted);\n  font-size: 10px;\n}\n\n.fc-hist__badge--abort { background: #fdecea; color: #b03a2e; }\n\n/* ---------- 统计页：当天记录 ---------- */\n\n.fc-dayview { margin-top: 16px; }\n\n.fc-dayview__head {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 10px;\n  padding: 0 2px 8px;\n}\n\n.fc-dayview__title { font-size: 13.5px; font-weight: 600; }\n.fc-dayview__sub { margin-top: 2px; font-size: 11.5px; color: var(--fc-muted); }\n.fc-dayview__today { flex: 0 0 auto; min-height: 30px; padding: 0 10px; font-size: 11.5px; }\n\n.fc-day--selected { box-shadow: inset 0 0 0 2px var(--fc-ink); }\n\n/* ---------- 便签墙 ---------- */\n\n.fc-header__actions { display: flex; align-items: center; gap: 8px; }\n\n.fc-notes__bar {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n\n.fc-filter { display: flex; flex-wrap: wrap; gap: 6px; }\n\n.fc-filter__btn {\n  padding: 6px 10px;\n  border: 1px solid var(--fc-line);\n  border-radius: var(--fc-r-full);\n  background: transparent;\n  color: var(--fc-muted);\n  font: 500 11.5px/1 var(--fc-font);\n  cursor: pointer;\n}\n\n.fc-filter__btn.is-active {\n  border-color: var(--fc-ink);\n  background: var(--fc-soft);\n  color: var(--fc-ink);\n}\n\n.fc-notes__search { min-height: 38px; font-size: 13px; }\n\n.fc-notes { display: flex; flex-direction: column; gap: 22px; padding: 10px 6px 18px; }\n\n.fc-notes__day {\n  padding: 6px 2px 0;\n  font-size: 11.5px;\n  color: var(--fc-muted);\n  letter-spacing: .04em;\n}\n\n/* 便利贴：不同角度、不同纸色、胶带与横线 */\n.fc-note-card {\n  --fc-note-angle: 0deg;\n  --note-bg: #fff8d6;\n  --note-ink: #2c2b26;\n  --note-tape: #ffffff;\n  --note-line: #8a7a4a;\n  position: relative;\n  width: 100%;\n  padding: 20px 18px 14px;\n  border: 0;\n  border-radius: 3px 4px 7px 5px;\n  background: var(--note-bg);\n  color: var(--note-ink);\n  text-align: left;\n  cursor: pointer;\n  transform: rotate(var(--fc-note-angle));\n  box-shadow:\n    0 10px 20px rgba(30, 28, 18, .10),\n    0 2px 5px rgba(30, 28, 18, .08);\n  transition: transform .18s ease, box-shadow .18s ease;\n  -webkit-tap-highlight-color: transparent;\n  user-select: none;\n}\n\n.fc-note-card::before {\n  content: "";\n  position: absolute;\n  top: -10px;\n  left: 50%;\n  width: 66px;\n  height: 20px;\n  transform: translateX(-50%) rotate(-2.5deg);\n  background: var(--note-tape);\n  opacity: .62;\n  border: 1px solid rgba(0, 0, 0, .04);\n  box-shadow: 0 1px 2px rgba(0, 0, 0, .05);\n}\n\n.fc-note-card::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  border-radius: inherit;\n  pointer-events: none;\n  display: none;\n}\n\n.fc-note-card--pattern-lines::after {\n  display: block;\n  background: repeating-linear-gradient(\n    to bottom,\n    transparent 0,\n    transparent 29px,\n    var(--note-line) 29px,\n    var(--note-line) 30px\n  );\n  opacity: .16;\n}\n\n.fc-note-card--pattern-grid::after {\n  display: block;\n  background-image:\n    linear-gradient(to right, var(--note-line) 1px, transparent 1px),\n    linear-gradient(to bottom, var(--note-line) 1px, transparent 1px);\n  background-size: 18px 18px;\n  opacity: .12;\n}\n\n.fc-note-card--pattern-dots::after {\n  display: block;\n  background-image: radial-gradient(var(--note-line) 1px, transparent 1px);\n  background-size: 14px 14px;\n  opacity: .22;\n}\n\n.fc-note-card--pattern-blank::after { display: none; }\n\n.fc-note-card:active { transform: rotate(var(--fc-note-angle)) scale(.995); }\n\n.fc-note-card.is-managing {\n  transform: rotate(0deg) scale(1.015);\n  z-index: 2;\n  box-shadow: 0 16px 28px rgba(30, 28, 18, .16), 0 3px 8px rgba(30, 28, 18, .10);\n}\n\n.fc-note-card__text {\n  position: relative;\n  z-index: 1;\n  font-size: 14px;\n  line-height: 30px;\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n\n.fc-note-card__meta {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 8px;\n  margin-top: 10px;\n  font-size: 10.5px;\n  color: var(--note-ink);\n  opacity: .58;\n}\n\n.fc-note-card__task {\n  max-width: 150px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding: 1px 7px;\n  border-radius: var(--fc-r-full);\n  background: rgba(128, 128, 128, .16);\n  color: inherit;\n}\n\n.fc-note-card__badge {\n  padding: 1px 7px;\n  border-radius: var(--fc-r-full);\n  background: rgba(128, 128, 128, .16);\n  color: inherit;\n}\n\n.fc-note-card__tools {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  z-index: 3;\n  display: flex;\n  gap: 5px;\n  opacity: 0;\n  pointer-events: none;\n  transform: translateY(-3px);\n  transition: opacity .16s ease, transform .16s ease;\n}\n\n.fc-note-card.is-managing .fc-note-card__tools {\n  opacity: 1;\n  pointer-events: auto;\n  transform: none;\n}\n\n.fc-note-tool {\n  width: 28px;\n  height: 28px;\n  padding: 0;\n  border: 1px solid rgba(0, 0, 0, .08);\n  border-radius: 50%;\n  background: rgba(255, 255, 255, .72);\n  color: #3a382f;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n\n.fc-note-tool .fc-icon { width: 13px; height: 13px; }\n.fc-note-tool--delete { color: #a33a2e; }\n\n/* 便签内的富文本格式 */\n.fc-note-text { display: block; }\n.fc-note-bold { font-weight: 700; }\n.fc-note-italic { font-style: italic; }\n\n.fc-note-highlight {\n  padding: 0 1px;\n  border-radius: 2px;\n  background: linear-gradient(transparent 58%, var(--note-hl, #ffe27a) 58%);\n}\n\n/* 高亮方式由便签样式决定，--note-hl 是它自己的颜色 */\n.fc-note-card--hl-underline .fc-note-highlight,\n.fc-detail-note--hl-underline .fc-note-highlight {\n  background: none;\n  border-bottom: 2px solid var(--note-hl, #ffe27a);\n  border-radius: 0;\n}\n\n.fc-note-card--hl-color .fc-note-highlight,\n.fc-detail-note--hl-color .fc-note-highlight {\n  background: none;\n  color: var(--note-hl, #c9a227);\n  font-weight: 600;\n}\n\n.fc-note-card--hl-block .fc-note-highlight,\n.fc-detail-note--hl-block .fc-note-highlight {\n  background: var(--note-hl, #ffe27a);\n  color: var(--note-ink, #2c2b26);\n  padding: 0 3px;\n}\n\n.fc-note-underline { text-decoration: underline; text-underline-offset: 2px; }\n.fc-note-strike { text-decoration: line-through; color: rgba(44, 43, 38, .55); }\n\n.fc-note-spoiler {\n  padding: 0 3px;\n  border-radius: 2px;\n  background: #3a382f;\n  color: transparent;\n  cursor: pointer;\n}\n\n.fc-note-spoiler.is-open { background: rgba(0, 0, 0, .06); color: inherit; }\n\n/* ---------- 便签样式：预览 / 选择 / 编辑 ---------- */\n\n.fc-note-preview {\n  transform: none !important;\n  min-height: 84px;\n  padding: 12px 10px 8px;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, .10);\n  pointer-events: none;\n}\n\n.fc-note-preview::before { width: 42px; height: 13px; top: -7px; }\n\n.fc-note-preview .fc-note-card__text {\n  font-size: 10.5px;\n  line-height: 15px;\n}\n\n.fc-style-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n\n.fc-style-card,\n.fc-style-option {\n  padding: 8px;\n  border: 1px solid var(--fc-line);\n  border-radius: 12px;\n  background: var(--fc-bg);\n  color: var(--fc-ink);\n  text-align: left;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.fc-style-card { cursor: default; }\n.fc-style-option.is-active { border-color: var(--fc-ink); box-shadow: 0 0 0 1px var(--fc-ink); }\n.fc-style-option:active { background: var(--fc-soft); }\n\n.fc-style-option__name {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 6px;\n  margin-top: 8px;\n  font-size: 11px;\n  color: var(--fc-muted);\n}\n\n.fc-style-manager { display: flex; flex-direction: column; }\n\n.fc-style-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 0;\n  border-bottom: 1px solid var(--fc-line);\n}\n\n.fc-style-row .fc-note-preview {\n  width: 64px;\n  min-height: 48px;\n  flex: 0 0 auto;\n  padding: 6px;\n}\n\n.fc-style-row .fc-note-preview .fc-note-card__text {\n  font-size: 8px;\n  line-height: 10px;\n}\n\n.fc-style-row__main { flex: 1 1 auto; min-width: 0; }\n.fc-style-row__name { font-size: 13px; }\n.fc-style-row .fc-iconbtn { width: 30px; height: 30px; }\n\n.fc-style-manager__foot {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  margin-top: 12px;\n}\n\n.fc-style-editor__preview {\n  display: flex;\n  justify-content: center;\n  padding: 14px 0 6px;\n}\n\n.fc-style-editor__preview .fc-note-preview { width: 170px; }\n\n.fc-color-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px;\n  margin-top: 8px;\n}\n\n.fc-color-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  padding: 7px 10px;\n  border: 1px solid var(--fc-line);\n  border-radius: 10px;\n  font-size: 12px;\n  color: var(--fc-ink-2);\n}\n\n.fc-color {\n  width: 34px;\n  height: 26px;\n  padding: 0;\n  border: 1px solid var(--fc-line-strong);\n  border-radius: 6px;\n  background: transparent;\n}\n\n.fc-tilt-row { display: flex; align-items: center; gap: 10px; }\n.fc-range { flex: 1 1 auto; accent-color: var(--fc-ink); }\n.fc-prompt__actions { display: flex; gap: 6px; }\n\n/* ---------- 记录详情：便签与聊天存档 ---------- */\n\n.fc-detail-note {\n  margin-top: 12px;\n  padding: 12px;\n  border-radius: var(--fc-r-md);\n  background: var(--fc-soft);\n}\n\n.fc-detail-note__text {\n  margin-top: 6px;\n  font-size: 13.5px;\n  line-height: 1.75;\n  white-space: pre-wrap;\n  color: var(--fc-ink);\n}\n\n.fc-archive {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  max-height: 52vh;\n  overflow-y: auto;\n  padding: 4px 2px;\n}\n\n.fc-row--plain { border-bottom: 0; padding: 0 0 12px; }\n\n/* ---------- 设置页 ---------- */\n\n.fc-group { margin-bottom: 16px; }\n\n.fc-group__title {\n  font-size: 11.5px;\n  letter-spacing: .06em;\n  color: var(--fc-muted);\n  padding: 0 4px 6px;\n  text-transform: uppercase;\n}\n\n.fc-stepper { display: flex; align-items: center; gap: 10px; }\n\n.fc-stepper__btn {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  border: 1px solid var(--fc-line-strong);\n  background: var(--fc-bg);\n  color: var(--fc-ink);\n  font-size: 15px;\n  line-height: 1;\n  cursor: pointer;\n}\n.fc-stepper__btn:active { background: var(--fc-soft); }\n.fc-stepper__btn[disabled] { opacity: .3; pointer-events: none; }\n\n.fc-stepper__value {\n  min-width: 46px;\n  text-align: right;\n  font-variant-numeric: tabular-nums;\n  font-size: 13.5px;\n}\n\n.fc-switch {\n  position: relative;\n  width: 42px;\n  height: 25px;\n  border-radius: var(--fc-r-full);\n  border: 0;\n  background: var(--fc-line-strong);\n  cursor: pointer;\n  transition: background .18s ease;\n  flex: 0 0 auto;\n}\n.fc-switch::after {\n  content: "";\n  position: absolute;\n  top: 2.5px;\n  left: 2.5px;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: #fff;\n  transition: transform .18s ease;\n  box-shadow: 0 1px 3px rgba(0,0,0,.2);\n}\n.fc-switch[aria-checked="true"] { background: var(--fc-accent); }\n.fc-switch[aria-checked="true"]::after { transform: translateX(17px); }\n\n.fc-about { font-size: 12px; color: var(--fc-muted); line-height: 1.8; }\n.fc-about code { font-family: var(--fc-mono); font-size: 11px; }\n\n.fc-row--off { opacity: .5; }\n.fc-row__sub--warn { color: var(--fc-warn); }\n\n/* ---------- 模式选择 ---------- */\n\n.fc-modes {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 12px;\n  border-bottom: 1px solid var(--fc-line);\n}\n\n.fc-mode {\n  text-align: left;\n  padding: 11px 13px;\n  border: 1px solid var(--fc-line);\n  border-radius: var(--fc-r-md);\n  background: var(--fc-bg);\n  color: var(--fc-ink);\n  font: 400 13px/1.55 var(--fc-font);\n  cursor: pointer;\n  transition: border-color .15s ease, background .15s ease;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.fc-mode.is-active { border-color: var(--fc-accent); background: var(--fc-soft); }\n.fc-mode[disabled] { opacity: .5; cursor: default; }\n.fc-mode.is-disabled { opacity: .45; }\n.fc-mode.is-disabled:active { background: var(--fc-soft); }\n.fc-mode:not([disabled]):active { background: var(--fc-soft); }\n\n.fc-mode__head { display: flex; align-items: center; gap: 8px; }\n\n.fc-mode__code {\n  flex: 0 0 auto;\n  padding: 0 5px;\n  border: 1px solid var(--fc-line-strong);\n  border-radius: 6px;\n  font-family: var(--fc-mono);\n  font-size: 10.5px;\n  color: var(--fc-muted);\n}\n\n.fc-mode__name { font-size: 13.5px; font-weight: 600; }\n.fc-mode__tick { margin-left: auto; font-size: 11px; color: var(--fc-ink-2); }\n\n.fc-mode__desc {\n  margin-top: 5px;\n  font-size: 11.5px;\n  color: var(--fc-muted);\n  line-height: 1.65;\n}\n\n/* ---------- 角色监督 ---------- */\n\n.fc-supervise {\n  width: 100%;\n  margin-top: 14px;\n  padding: 13px 14px;\n  border: 1px solid var(--fc-line);\n  border-radius: var(--fc-r-lg);\n}\n\n.fc-supervise__head { display: flex; align-items: center; gap: 8px; }\n.fc-supervise__name { font-size: 13px; font-weight: 600; }\n\n.fc-badge {\n  padding: 1px 8px;\n  border-radius: var(--fc-r-full);\n  background: var(--fc-soft-2);\n  color: var(--fc-ink-2);\n  font-size: 11px;\n  font-variant-numeric: tabular-nums;\n}\n\n.fc-badge--mute { background: #fdecea; color: #b03a2e; }\n\n.fc-supervise__line {\n  margin-top: 8px;\n  font-size: 12.5px;\n  color: var(--fc-ink-2);\n  line-height: 1.7;\n}\n\n.fc-supervise__line.is-warn { color: var(--fc-warn); }\n\n.fc-supervise__actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-top: 10px;\n}\n\n.fc-mini {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  min-height: 32px;\n  padding: 0 12px;\n  border: 1px solid var(--fc-line-strong);\n  border-radius: var(--fc-r-full);\n  background: var(--fc-bg);\n  color: var(--fc-ink);\n  font: 500 12px/1 var(--fc-font);\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.fc-mini:active { background: var(--fc-soft); }\n.fc-mini[data-authorized="false"] { color: var(--fc-muted); }\n\n.fc-mini__dot {\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  background: var(--fc-line-strong);\n}\n\n.fc-mini__dot.is-on { background: var(--fc-ok); }\n\n.fc-supervise__hint {\n  margin-top: 9px;\n  font-size: 11px;\n  color: var(--fc-muted);\n  line-height: 1.6;\n}\n\n/* ---------- 锁房间遮罩 ---------- */\n\n.fc-lock {\n  position: absolute;\n  inset: 0;\n  z-index: 40;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 18px;\n  background:\n    radial-gradient(120% 80% at 50% 0%, var(--fc-soft) 0%, var(--fc-bg) 58%),\n    var(--fc-bg);\n  color: var(--fc-ink);\n  animation: fc-fade .18s ease;\n  overflow-y: auto;\n}\n\n.fc-lock__inner {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  max-width: 340px;\n  max-height: calc(100% - 12px);\n  padding: 22px 20px 18px;\n  border: 1px solid var(--fc-line);\n  border-radius: 24px;\n  background: var(--fc-bg);\n  box-shadow: 0 18px 50px rgba(20, 20, 18, .14), 0 2px 8px rgba(20, 20, 18, .06);\n  text-align: center;\n  overflow-y: auto;\n}\n\n.fc-lock__tag {\n  padding: 4px 10px;\n  border-radius: var(--fc-r-full);\n  background: var(--fc-soft-2);\n  font-size: 10px;\n  letter-spacing: .16em;\n  color: var(--fc-ink-2);\n}\n\n.fc-lock__name { margin-top: 12px; font-size: 16px; font-weight: 600; }\n\n.fc-lock__focus {\n  margin-top: 4px;\n  font-size: 11.5px;\n  color: var(--fc-muted);\n  font-variant-numeric: tabular-nums;\n}\n\n.fc-lock__time {\n  margin: 4px 0 2px;\n  font-family: var(--fc-mono);\n  font-size: 42px;\n  font-weight: 300;\n  font-variant-numeric: tabular-nums;\n  letter-spacing: 1px;\n  line-height: 1.05;\n}\n\n.fc-lock__time.is-focus { font-size: 34px; color: var(--fc-ink-2); }\n\n.fc-lock__hint { font-size: 12px; color: var(--fc-ink-2); }\n\n.fc-lock__sub {\n  margin-top: 12px;\n  font-size: 10.5px;\n  color: var(--fc-muted);\n  line-height: 1.7;\n}\n\n.fc-lock .fc-btn { margin-top: 14px; }\n\n.fc-lock__passcard {\n  width: 100%;\n  margin-top: 14px;\n  padding: 12px;\n  border: 1px solid var(--fc-line);\n  border-radius: 16px;\n  background: var(--fc-soft);\n}\n\n.fc-lock__passlabel {\n  margin-bottom: 8px;\n  font-size: 10.5px;\n  letter-spacing: .08em;\n  color: var(--fc-muted);\n}\n\n.fc-lock__passrow {\n  display: flex;\n  gap: 8px;\n  width: 100%;\n}\n\n.fc-lock__pass {\n  flex: 1 1 auto;\n  min-height: 38px;\n  text-align: center;\n  letter-spacing: .24em;\n}\n\n.fc-lock__passrow .fc-btn { margin-top: 0; }\n\n.fc-lock__attempts {\n  margin-top: 8px;\n  font-size: 11px;\n  color: var(--fc-warn);\n  text-align: center;\n}\n\n.fc-lock__passhint {\n  margin-top: 6px;\n  font-size: 10px;\n  color: var(--fc-muted);\n  line-height: 1.5;\n}\n\n.fc-lock__history {\n  width: 100%;\n  max-height: 24vh;\n  margin-top: 14px;\n  padding: 10px 12px;\n  border: 1px solid var(--fc-line);\n  border-radius: 14px;\n  background: var(--fc-soft);\n  overflow-y: auto;\n  text-align: left;\n}\n\n.fc-lock__history-title {\n  margin-bottom: 6px;\n  font-size: 10.5px;\n  color: var(--fc-muted);\n  text-align: center;\n}\n\n.fc-lock__msg {\n  display: flex;\n  gap: 6px;\n  padding: 4px 0;\n  border-bottom: 1px solid var(--fc-line);\n  font-size: 12px;\n  line-height: 1.6;\n}\n\n.fc-lock__msg-who {\n  flex: 0 0 auto;\n  color: var(--fc-muted);\n}\n\n.fc-lock__msg-text {\n  min-width: 0;\n  color: var(--fc-ink-2);\n  word-break: break-word;\n}\n\n/* ---------- 角色选择弹层 ---------- */\n\n.fc-pick { display: flex; flex-direction: column; gap: 8px; margin-top: 2px; }\n\n.fc-pick__item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 10px;\n  border: 1px solid var(--fc-line);\n  border-radius: 12px;\n  background: var(--fc-bg);\n  color: var(--fc-ink);\n  text-align: left;\n  font: 400 13.5px/1.4 var(--fc-font);\n  cursor: pointer;\n}\n\n.fc-pick__item.is-active { border-color: var(--fc-ink); background: var(--fc-soft); }\n.fc-pick__item:active { background: var(--fc-soft); }\n\n.fc-pick__avatar {\n  width: 34px;\n  height: 34px;\n  flex: 0 0 auto;\n  border-radius: 50%;\n  background: var(--fc-soft-2);\n  color: var(--fc-ink-2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  font-weight: 600;\n  overflow: hidden;\n}\n\n.fc-pick__avatar img { width: 100%; height: 100%; object-fit: cover; }\n.fc-pick__text { display: flex; flex-direction: column; gap: 1px; min-width: 0; }\n.fc-pick__name { font-size: 13.5px; font-weight: 600; }\n.fc-pick__sub { font-size: 11px; color: var(--fc-muted); }\n.fc-pick__check { margin-left: auto; font-size: 11px; color: var(--fc-ink-2); }\n\n/* ---------- 设置：禁用的开关 ---------- */\n\n.fc-switch[disabled] { opacity: .45; pointer-events: none; }\n\n/* ---------- 专注页：紧凑计时环 ---------- */\n\n.fc-ring--sm {\n  width: 200px;\n  height: 200px;\n  margin: 2px 0 4px;\n}\n\n.fc-ring--sm .fc-ring__time { font-size: 36px; letter-spacing: .5px; }\n.fc-ring--sm .fc-ring__phase { font-size: 11.5px; }\n.fc-ring--sm .fc-ring__bonus { font-size: 10.5px; }\n\n/* ---------- 待办清单 ---------- */\n\n.fc-tasks {\n  width: 100%;\n  margin-top: 14px;\n  border: 1px solid var(--fc-line);\n  border-radius: var(--fc-r-lg);\n  overflow: hidden;\n}\n\n.fc-tasks__head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 14px 8px;\n}\n\n.fc-tasks__title { font-size: 13px; font-weight: 600; }\n.fc-tasks__count { font-size: 11.5px; color: var(--fc-muted); }\n\n.fc-tasks__add {\n  display: flex;\n  gap: 8px;\n  padding: 0 12px 10px;\n}\n\n.fc-tasks__input { flex: 1 1 auto; min-height: 36px; font-size: 13px; }\n\n.fc-tasks__addbtn {\n  width: 36px;\n  height: 36px;\n  flex: 0 0 auto;\n  border-radius: 50%;\n  border: 1px solid var(--fc-line-strong);\n  background: var(--fc-bg);\n  color: var(--fc-ink);\n  font-size: 18px;\n  line-height: 1;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.fc-tasks__addbtn:active { background: var(--fc-soft); }\n\n.fc-task-list { border-top: 1px solid var(--fc-line); }\n\n.fc-task {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 12px;\n  border-bottom: 1px solid var(--fc-line);\n}\n\n.fc-task:last-child { border-bottom: 0; }\n.fc-task.is-active { background: var(--fc-soft); }\n\n.fc-task.is-done .fc-task__title {\n  color: var(--fc-muted);\n  text-decoration: line-through;\n}\n\n.fc-task__check {\n  width: 24px;\n  height: 24px;\n  flex: 0 0 auto;\n  padding: 0;\n  border-radius: 50%;\n  border: 1.5px solid var(--fc-line-strong);\n  background: transparent;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.fc-task__check.is-done { background: var(--fc-ok); border-color: var(--fc-ok); }\n.fc-task__check .fc-icon { width: 13px; height: 13px; }\n\n.fc-task__main {\n  flex: 1 1 auto;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  color: inherit;\n  text-align: left;\n  font: inherit;\n  cursor: pointer;\n}\n\n.fc-task__title {\n  font-size: 13.5px;\n  line-height: 1.4;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.fc-task__meta {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 10.5px;\n  color: var(--fc-muted);\n  font-variant-numeric: tabular-nums;\n}\n\n.fc-task__badge {\n  padding: 0 6px;\n  border-radius: var(--fc-r-full);\n  background: var(--fc-soft-2);\n  color: var(--fc-ink-2);\n  font-size: 10px;\n}\n\n.fc-task__play {\n  width: 30px;\n  height: 30px;\n  flex: 0 0 auto;\n  padding: 0;\n  border-radius: 50%;\n  border: 1px solid var(--fc-line-strong);\n  background: var(--fc-bg);\n  color: var(--fc-ink-2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n\n.fc-task__play[disabled] { opacity: .3; pointer-events: none; }\n.fc-task__play .fc-icon { width: 13px; height: 13px; }\n\n.fc-tasks__empty {\n  padding: 16px 14px;\n  font-size: 12px;\n  color: var(--fc-muted);\n  line-height: 1.7;\n}\n\n/* ---------- 角色聊天 ---------- */\n\n.fc-chat {\n  width: 100%;\n  margin-top: 14px;\n  border: 1px solid var(--fc-line);\n  border-radius: var(--fc-r-lg);\n  overflow: hidden;\n}\n\n.fc-chat__head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  padding: 12px 14px 8px;\n}\n\n.fc-chat__title { font-size: 13px; font-weight: 600; }\n\n.fc-chat__list {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  max-height: 220px;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n  padding: 4px 12px 10px;\n}\n\n.fc-chat__empty {\n  margin: auto;\n  max-width: 84%;\n  padding: 18px 12px;\n  font-size: 12px;\n  color: var(--fc-muted);\n  line-height: 1.7;\n  text-align: center;\n}\n\n.fc-chat__msg {\n  display: flex;\n  flex-direction: column;\n  max-width: var(--fc-bub-max, 86%);\n}\n\n.fc-chat__msg--me { align-self: flex-end; align-items: flex-end; }\n.fc-chat__msg--char { align-self: flex-start; align-items: flex-start; }\n\n.fc-chat__bubble {\n  padding: 8px 11px;\n  border-radius: var(--fc-bub-radius, 14px);\n  font-size: var(--fc-bub-font, 13px);\n  line-height: 1.6;\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n\n/* 气泡颜色由「聊天美化」写入内联变量，未设置时回落到主题 */\n.fc-chat__msg--me .fc-chat__bubble {\n  background: var(--fc-bub-mine-bg, var(--fc-accent));\n  color: var(--fc-bub-mine-ink, var(--fc-on-accent));\n  border-bottom-right-radius: 5px;\n}\n\n.fc-chat__msg--char .fc-chat__bubble {\n  background: var(--fc-bub-char-bg, var(--fc-soft));\n  color: var(--fc-bub-char-ink, var(--fc-ink));\n  border-bottom-left-radius: 5px;\n}\n\n.fc-chat-screen.is-no-time .fc-chat__time { display: none; }\n\n.fc-chat__msg.is-failed .fc-chat__bubble { opacity: .75; font-style: italic; }\n\n.fc-chat__time { margin-top: 2px; font-size: 10px; color: var(--fc-muted); }\n\n.fc-chat__text { white-space: pre-wrap; }\n\n/* 旁白/动作：居中文字，不用气泡 */\n.fc-chat__action {\n  color: var(--fc-muted);\n  font-style: italic;\n}\n\n.fc-chat__narration {\n  align-self: stretch;\n  width: 100%;\n  max-width: 100%;\n  padding: 4px 10px;\n  color: var(--fc-narr-ink, var(--fc-muted));\n  font-size: var(--fc-narr-font, 12.5px);\n  font-style: normal;\n  line-height: 1.8;\n  text-align: center;\n  white-space: pre-wrap;\n  word-break: break-word;\n  cursor: pointer;\n}\n\n.fc-chat__system {\n  align-self: center;\n  max-width: 92%;\n  padding: 3px 10px;\n  border-radius: var(--fc-r-full);\n  background: var(--fc-soft);\n  color: var(--fc-muted);\n  font-size: 11px;\n  line-height: 1.6;\n  text-align: center;\n}\n\n/* 引用 */\n.fc-chat__quote {\n  display: flex;\n  gap: 5px;\n  margin-bottom: 5px;\n  padding: 2px 6px;\n  border-left: 2px solid currentColor;\n  opacity: .62;\n  font-size: 11.5px;\n  line-height: 1.5;\n}\n\n.fc-chat__quote-who { flex: 0 0 auto; font-weight: 600; }\n\n.fc-chat__quotebar {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 8px;\n  padding: 7px 9px;\n  border-left: 3px solid var(--fc-ink-2);\n  border-radius: 8px;\n  background: var(--fc-soft);\n  font-size: 11.5px;\n}\n\n.fc-chat__quotebar-label { flex: 0 0 auto; font-weight: 600; }\n\n.fc-chat__quotebar-text {\n  flex: 1 1 auto;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: var(--fc-muted);\n}\n\n.fc-iconbtn--tiny { width: 24px; height: 24px; }\n.fc-iconbtn--tiny .fc-icon { width: 11px; height: 11px; }\n\n/* 消息操作菜单 */\n.fc-msg-action {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  width: 100%;\n  padding: 10px 12px;\n  border: 0;\n  border-bottom: 1px solid var(--fc-line);\n  background: transparent;\n  text-align: left;\n  cursor: pointer;\n}\n\n.fc-msg-action:last-child { border-bottom: 0; }\n.fc-msg-action:active { background: var(--fc-soft); }\n.fc-msg-action__label { font-size: 13.5px; color: var(--fc-ink); }\n.fc-msg-action__sub { font-size: 11px; color: var(--fc-muted); }\n\n.fc-chat__form {\n  display: flex;\n  gap: 8px;\n  padding: 8px 12px 12px;\n  border-top: 1px solid var(--fc-line);\n}\n\n.fc-chat__input { flex: 1 1 auto; min-height: 36px; font-size: 13px; }\n\n.fc-chat__send {\n  flex: 0 0 auto;\n  min-height: 38px;\n  padding: 0 14px;\n  border: 0;\n  border-radius: var(--fc-r-full);\n  background: var(--fc-accent);\n  color: var(--fc-on-accent);\n  font: 500 13px/1 var(--fc-font);\n  cursor: pointer;\n}\n\n.fc-chat__send[disabled] { opacity: .4; pointer-events: none; }\n\n.fc-chat__hint {\n  padding: 0 12px 12px;\n  font-size: 11px;\n  color: var(--fc-muted);\n  line-height: 1.6;\n}\n\n/* ---------- 首页（目标 + 待办） ---------- */\n\n.fc-screen { width: 100%; }\n\n.fc-home { display: flex; flex-direction: column; gap: 12px; }\n\n.fc-home__head {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 4px 0 2px;\n}\n\n.fc-home__title { font-size: 20px; font-weight: 600; letter-spacing: .2px; }\n.fc-home__date { margin-top: 3px; font-size: 12.5px; color: var(--fc-muted); }\n\n.fc-goal {\n  border: 1px solid var(--fc-line);\n  border-radius: var(--fc-r-lg);\n  padding: 14px;\n}\n\n.fc-goal__head { display: flex; align-items: flex-start; justify-content: space-between; gap: 10px; }\n.fc-goal__label { font-size: 12px; color: var(--fc-muted); }\n\n.fc-goal__nums {\n  margin-top: 4px;\n  font-size: 24px;\n  font-weight: 600;\n  letter-spacing: .3px;\n  font-variant-numeric: tabular-nums;\n}\n\n.fc-goal__nums small { font-size: 12px; font-weight: 400; color: var(--fc-muted); }\n\n.fc-goal__bar {\n  height: 6px;\n  margin-top: 12px;\n  border-radius: var(--fc-r-full);\n  background: var(--fc-soft-2);\n  overflow: hidden;\n}\n\n.fc-goal__bar i {\n  display: block;\n  height: 100%;\n  width: 0;\n  border-radius: var(--fc-r-full);\n  background: var(--fc-accent);\n  transition: width .3s ease;\n}\n\n.fc-goal__sub { margin-top: 8px; font-size: 11.5px; color: var(--fc-muted); }\n\n.fc-runbar {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 12px 14px;\n  border: 1px solid var(--fc-ink);\n  border-radius: 14px;\n  background: var(--fc-soft);\n  color: var(--fc-ink);\n  text-align: left;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.fc-runbar__dot {\n  width: 8px;\n  height: 8px;\n  flex: 0 0 auto;\n  border-radius: 50%;\n  background: var(--fc-ok);\n  animation: fc-pulse 1.6s ease-in-out infinite;\n}\n\n@keyframes fc-pulse { 0%, 100% { opacity: 1; } 50% { opacity: .25; } }\n\n.fc-runbar__time {\n  font-family: var(--fc-mono);\n  font-size: 18px;\n  font-variant-numeric: tabular-nums;\n}\n\n.fc-runbar__task {\n  flex: 1 1 auto;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: 12px;\n  color: var(--fc-muted);\n}\n\n.fc-runbar__go { flex: 0 0 auto; font-size: 11.5px; color: var(--fc-ink-2); }\n\n.fc-home__free { width: 100%; }\n\n.fc-task.is-disabled { opacity: .5; }\n\n.fc-task__more {\n  width: 26px;\n  height: 26px;\n  flex: 0 0 auto;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  color: var(--fc-muted);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.fc-task__more .fc-icon { width: 14px; height: 14px; }\n\n.fc-task__done-toggle {\n  display: block;\n  width: 100%;\n  padding: 10px 14px;\n  border: 0;\n  border-top: 1px solid var(--fc-line);\n  background: transparent;\n  color: var(--fc-muted);\n  font: 500 11.5px/1 var(--fc-font);\n  text-align: left;\n  cursor: pointer;\n}\n\n.fc-task__done-toggle:active { background: var(--fc-soft); }\n\n/* ---------- 计时页 ---------- */\n\n.fc-timer { display: flex; flex-direction: column; align-items: center; }\n\n.fc-timer__head {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 10px;\n}\n\n.fc-timer__title {\n  flex: 1 1 auto;\n  min-width: 0;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  color: var(--fc-ink);\n  font: 600 14px/1.4 var(--fc-font);\n  text-align: left;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  cursor: pointer;\n}\n\n.fc-iconbtn {\n  width: 34px;\n  height: 34px;\n  flex: 0 0 auto;\n  padding: 0;\n  border: 1px solid var(--fc-line);\n  border-radius: 50%;\n  background: transparent;\n  color: var(--fc-ink-2);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.fc-iconbtn:active { background: var(--fc-soft); }\n.fc-iconbtn[disabled] { opacity: .35; pointer-events: none; }\n.fc-iconbtn .fc-icon { width: 15px; height: 15px; }\n.fc-iconbtn--accent { border-color: var(--fc-ink); color: var(--fc-ink); }\n\n.fc-timer__meta {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 6px;\n}\n\n.fc-chip {\n  display: inline-flex;\n  align-items: center;\n  padding: 5px 10px;\n  border: 1px solid var(--fc-line);\n  border-radius: var(--fc-r-full);\n  background: transparent;\n  color: var(--fc-ink-2);\n  font: 500 11.5px/1 var(--fc-font);\n  cursor: pointer;\n}\n\n.fc-timer__char { font-size: 11.5px; color: var(--fc-muted); }\n\n.fc-timer__actions { display: flex; gap: 10px; margin: 10px 0 4px; }\n.fc-timer__actions .fc-btn { min-height: 34px; font-size: 12.5px; }\n\n/* ---------- 聊天页 ---------- */\n\n/* 聊天页固定：只有消息列表滚动，顶栏与输入栏不动 */\n.fc-page--fill {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  min-height: 0;\n  max-height: 100%;\n  overflow: hidden;\n  padding-bottom: 0;\n}\n\n.fc-page--fill .fc-screen {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  height: 100%;\n  min-height: 0;\n  overflow: hidden;\n}\n\n.fc-chat-screen {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  height: 100%;\n  min-height: 0;\n  overflow: hidden;\n}\n\n.fc-chat-screen__head {\n  flex: 0 0 auto;\n  position: relative;\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 2px 0 10px;\n  border-bottom: 1px solid var(--fc-line);\n  background: var(--fc-bg);\n}\n\n.fc-chat-screen__titles {\n  flex: 1 1 auto;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n\n.fc-chat-screen__name {\n  font-size: 14px;\n  font-weight: 600;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.fc-chat-screen__status { font-size: 11px; color: var(--fc-muted); }\n\n.fc-chat-screen__list {\n  flex: 1 1 auto;\n  min-height: 0;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 12px 2px;\n}\n\n.fc-chat-screen__foot {\n  flex: 0 0 auto;\n  position: relative;\n  z-index: 2;\n  padding-top: 8px;\n  padding-bottom: env(safe-area-inset-bottom);\n  border-top: 1px solid var(--fc-line);\n  background: var(--fc-bg);\n}\n\n.fc-chat-screen__foot .fc-chat__form { border-top: 0; padding: 8px 0 10px; }\n.fc-chat-screen__foot .fc-chat__hint { padding: 0 0 6px; }\n\n.fc-chat__send--icon {\n  width: 40px;\n  min-width: 40px;\n  height: 40px;\n  min-height: 40px;\n  padding: 0;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.fc-chat__send--icon .fc-icon { width: 18px; height: 18px; }\n\n.fc-chat__plus {\n  width: 38px;\n  min-width: 38px;\n  height: 38px;\n  padding: 0;\n  border: 1px solid var(--fc-line);\n  border-radius: 50%;\n  background: transparent;\n  color: var(--fc-ink-2);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n\n.fc-chat__plus .fc-icon { width: 16px; height: 16px; }\n\n.fc-dialog .fc-modes { padding: 0; border-bottom: 0; }\n\n/* ---------- 聊天设置：权限行内折叠 ---------- */\n\n.fc-perm-block { border-bottom: 1px solid var(--fc-line); }\n.fc-perm-block:last-child { border-bottom: 0; }\n.fc-perm-block .fc-row { border-bottom: 0; }\n\n.fc-perm-row.is-open { background: var(--fc-soft); }\n\n.fc-perm-config {\n  margin: 0 12px 10px;\n  padding: 2px 12px 8px;\n  border-left: 2px solid var(--fc-line-strong);\n  border-radius: 0 10px 10px 0;\n  background: var(--fc-soft);\n}\n\n.fc-perm-config .fc-row {\n  padding: 9px 0;\n  border-bottom-color: var(--fc-line);\n}\n\n.fc-perm-config .fc-row:last-child { border-bottom: 0; }\n.fc-perm-config .fc-row__title { font-size: 12.5px; }\n.fc-perm-config .fc-row__sub { font-size: 10.5px; }\n\n.fc-room-pass {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 12px 14px;\n}\n\n.fc-btn--block { width: 100%; }\n\n/* ---------- 聊天设置：提示词 / 兜底 / 控制台 ---------- */\n\n.fc-chat-settings { display: flex; flex-direction: column; }\n.fc-chat-settings .fc-group { margin-bottom: 16px; }\n\n.fc-chat__bubble--edit { cursor: pointer; }\n.fc-chat__bubble--edit:active { opacity: .8; }\n\n.fc-textarea-msg { min-height: 110px; margin-top: 8px; }\n\n.fc-console__box { padding: 12px 14px; }\n\n.fc-console__tabs {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 10px;\n  flex-wrap: wrap;\n}\n\n.fc-console__tab {\n  padding: 5px 10px;\n  border: 1px solid var(--fc-line);\n  border-radius: var(--fc-r-full);\n  background: transparent;\n  color: var(--fc-muted);\n  font: 500 11.5px/1 var(--fc-font);\n  cursor: pointer;\n}\n\n.fc-console__tab.is-active {\n  border-color: var(--fc-ink);\n  color: var(--fc-ink);\n  background: var(--fc-soft);\n}\n\n.fc-console__spacer { flex: 1 1 auto; }\n\n.fc-console__copy {\n  padding: 5px 10px;\n  border: 1px solid var(--fc-line);\n  border-radius: var(--fc-r-full);\n  background: transparent;\n  color: var(--fc-ink-2);\n  font: 500 11px/1 var(--fc-font);\n  cursor: pointer;\n}\n\n.fc-console {\n  max-height: 240px;\n  overflow: auto;\n  margin: 0;\n  padding: 10px 12px;\n  border: 1px solid var(--fc-line);\n  border-radius: 10px;\n  background: var(--fc-soft);\n  color: var(--fc-ink-2);\n  font: 11px/1.65 var(--fc-mono);\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n\n.fc-console__stats {\n  margin-top: 8px;\n  font-size: 10.5px;\n  color: var(--fc-muted);\n  font-variant-numeric: tabular-nums;\n}\n\n/* Token 账单弹窗 */\n.fc-log-summary {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 6px;\n  margin-bottom: 10px;\n}\n\n.fc-log-summary div {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n  padding: 8px 6px;\n  border-radius: 10px;\n  background: var(--fc-soft);\n  text-align: center;\n}\n\n.fc-log-summary b { font-size: 15px; font-variant-numeric: tabular-nums; }\n.fc-log-summary span { font-size: 9.5px; color: var(--fc-muted); }\n\n.fc-log-row {\n  padding: 9px 0;\n  border-bottom: 1px solid var(--fc-line);\n}\n\n.fc-log-row:last-child { border-bottom: 0; }\n\n.fc-log-row__head {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n\n.fc-log-row__time { font-size: 12px; font-variant-numeric: tabular-nums; }\n\n.fc-log-row__badge {\n  padding: 1px 6px;\n  border-radius: var(--fc-r-full);\n  background: var(--fc-soft-2);\n  color: var(--fc-ink-2);\n  font-size: 10px;\n}\n\n.fc-log-row__badge.is-fail { background: #fdecea; color: #b03a2e; }\n\n.fc-log-row__model {\n  margin-left: auto;\n  max-width: 45%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: 10px;\n  color: var(--fc-muted);\n}\n\n.fc-log-row__meta {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-top: 3px;\n  font-size: 10.5px;\n  color: var(--fc-muted);\n}\n\n/* 开始进入哪一屏 */\n.fc-seg {\n  display: inline-flex;\n  flex: 0 0 auto;\n  padding: 2px;\n  border: 1px solid var(--fc-line);\n  border-radius: var(--fc-r-full);\n  background: var(--fc-soft);\n}\n\n.fc-seg__btn {\n  padding: 6px 10px;\n  border: 0;\n  border-radius: var(--fc-r-full);\n  background: transparent;\n  color: var(--fc-muted);\n  font: 500 11.5px/1 var(--fc-font);\n  cursor: pointer;\n}\n\n.fc-seg__btn.is-active {\n  background: var(--fc-bg);\n  color: var(--fc-ink);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, .08);\n}\n\n.fc-seg--wide {\n  display: flex;\n  width: 100%;\n  margin: 10px 0;\n}\n\n.fc-seg--wide .fc-seg__btn { flex: 1 1 0; text-align: center; }\n\n/* 可点击插入的占位符 */\n.fc-prompt__chips {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-top: 6px;\n}\n\n.fc-chip--ins {\n  padding: 3px 8px;\n  border: 1px solid var(--fc-line);\n  background: var(--fc-soft);\n  color: var(--fc-ink-2);\n  font-family: var(--fc-mono);\n  font-size: 10.5px;\n  cursor: pointer;\n}\n\n.fc-chip--ins:active { background: var(--fc-soft-2); }\n.fc-chip.is-disabled { opacity: .45; }\n\n/* 计时页聊天入口的未读数 */\n.fc-timer__chat { display: inline-flex; align-items: center; gap: 6px; }\n\n.fc-badge--unread {\n  min-width: 16px;\n  padding: 0 4px;\n  background: var(--fc-warn);\n  color: #fff;\n  text-align: center;\n  font-size: 10px;\n  line-height: 16px;\n}\n\n/* ---------- 提示词编辑 ---------- */\n\n.fc-textarea {\n  width: 100%;\n  min-height: 120px;\n  padding: 10px 12px;\n  border: 1px solid var(--fc-line-strong);\n  border-radius: var(--fc-r-md);\n  background: var(--fc-soft);\n  color: var(--fc-ink);\n  font: 400 12.5px/1.7 var(--fc-font);\n  outline: none;\n  resize: vertical;\n  -webkit-appearance: none;\n}\n\n.fc-textarea:focus { border-color: var(--fc-ink-2); background: var(--fc-bg); }\n\n.fc-prompt { padding: 12px 14px; border-bottom: 1px solid var(--fc-line); }\n.fc-prompt:last-child { border-bottom: 0; }\n.fc-prompt__head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  margin-bottom: 8px;\n}\n.fc-prompt__title { font-size: 13.5px; }\n.fc-prompt__vars {\n  margin-top: 6px;\n  font-size: 10.5px;\n  color: var(--fc-muted);\n  line-height: 1.7;\n  font-family: var(--fc-mono);\n}\n\n/* ---------- 聊天美化 ---------- */\n\n.fc-chat-style { padding-bottom: 28px; }\n\n.fc-chat-style__preview {\n  margin: 10px 14px 4px;\n  padding: 12px;\n  border: 1px solid var(--fc-line);\n  border-radius: var(--fc-r-md);\n  background: var(--fc-bg);\n}\n\n.fc-chat-screen--preview {\n  height: auto;\n  min-height: 0;\n  display: block;\n  background: transparent;\n}\n\n.fc-chat__list--preview {\n  max-height: none;\n  padding: 2px 0;\n  gap: 10px;\n  background: transparent;\n  overflow: visible;\n}\n\n.fc-chat__list--preview .fc-chat__msg { max-width: var(--fc-bub-max, 86%); }\n\n.fc-chat-style__controls { display: block; }\n\n.fc-chat-style__foot {\n  display: flex;\n  justify-content: center;\n  padding: 14px;\n}\n\n.fc-color-row .fc-chip {\n  flex: none;\n  font-size: 11px;\n  color: var(--fc-muted);\n}\n\n.fc-chip.fc-chip--ins.is-active {\n  border-color: var(--fc-accent);\n  color: var(--fc-accent);\n}\n\n.fc-pickrule { padding: 10px 14px 12px; display: flex; flex-direction: column; gap: 8px; }\n\n/* ---------- 互动页（立绘点触） ---------- */\n\n.fc-touch {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  min-height: 0;\n  height: 100%;\n}\n\n.fc-touch__head {\n  flex: none;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 12px;\n  border-bottom: 1px solid var(--fc-line);\n  background: var(--fc-bg);\n}\n\n.fc-touch__titles { flex: 1 1 auto; min-width: 0; }\n.fc-touch__title { font-size: 15px; font-weight: 600; color: var(--fc-ink); }\n.fc-touch__sub { font-size: 11px; color: var(--fc-muted); }\n\n.fc-touch__editbtn {\n  flex: none;\n  font-size: 12px;\n  padding: 4px 10px;\n  min-height: 0;\n}\n\n.fc-touch__stage {\n  flex: 1 1 auto;\n  min-height: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--fc-soft);\n  overflow: hidden;\n}\n\n.fc-touch__canvas {\n  position: relative;\n  display: block;\n  line-height: 0;\n  border-radius: var(--fc-r-md);\n  overflow: hidden;\n  touch-action: none;\n  user-select: none;\n}\n\n.fc-touch__canvas.is-editing { outline: 1px dashed var(--fc-line-strong); cursor: crosshair; }\n\n.fc-touch__canvas.is-empty {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px dashed var(--fc-line-strong);\n  border-radius: var(--fc-r-md);\n  margin: 12px;\n}\n\n.fc-touch__portrait {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: fill;\n  pointer-events: none;\n}\n\n.fc-touch__zones { position: absolute; inset: 0; }\n\n.fc-touch__zone {\n  position: absolute;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  border-radius: 8px;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.fc-touch__zone.is-round { border-radius: 50%; }\n.fc-touch__zone.is-tapped { background: rgba(0, 0, 0, .07); }\n\n.fc-touch__canvas.is-editing .fc-touch__zone {\n  border: 1px dashed rgba(0, 0, 0, .45);\n  background: rgba(255, 255, 255, .14);\n}\n\n.fc-touch__zone-name {\n  position: absolute;\n  left: 2px;\n  top: 2px;\n  max-width: calc(100% - 4px);\n  padding: 1px 5px;\n  border-radius: 6px;\n  background: rgba(0, 0, 0, .55);\n  color: #fff;\n  font-size: 10px;\n  line-height: 1.5;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.fc-touch__draft {\n  position: absolute;\n  border: 1px dashed var(--fc-ink);\n  background: rgba(0, 0, 0, .06);\n  pointer-events: none;\n}\n\n.fc-touch__placeholder {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  width: 100%;\n  height: 100%;\n  padding: 18px;\n  text-align: center;\n}\n\n.fc-touch__placeholder-title { font-size: 13.5px; color: var(--fc-ink-2); }\n.fc-touch__placeholder-sub { font-size: 11.5px; color: var(--fc-muted); line-height: 1.7; }\n\n.fc-touch__bubble {\n  position: absolute;\n  left: 14px;\n  right: 14px;\n  bottom: 96px;\n  z-index: 2;\n  padding: 9px 12px;\n  border: 1px solid var(--fc-line);\n  border-radius: 12px;\n  background: var(--fc-bg);\n  box-shadow: var(--fc-shadow);\n  color: var(--fc-ink);\n  font-size: 13px;\n  line-height: 1.6;\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n\n.fc-touch__hint {\n  flex: none;\n  margin: 0;\n  padding: 6px 14px 4px;\n  font-size: 11px;\n  line-height: 1.6;\n  color: var(--fc-muted);\n  text-align: center;\n}\n\n.fc-touch__hint.is-warn { color: var(--fc-warn); }\n\n.fc-touch__bar {\n  flex: none;\n  display: flex;\n  gap: 10px;\n  padding: 8px 14px 14px;\n}\n\n.fc-touch__bar .fc-btn { flex: 1 1 0; }\n\n.fc-touch__chatlayer {\n  position: absolute;\n  inset: 0;\n  z-index: 3;\n  display: flex;\n  flex-direction: column;\n  background: var(--fc-bg);\n}\n\n.fc-touch__chatlayer[hidden] { display: none; }\n\n.fc-chat-screen--compact { height: 100%; }\n.fc-chat-screen__head--compact { padding-right: 8px; }\n';

  // src/services/host.js
  function isFn(obj, name) {
    return !!obj && typeof obj[name] === "function";
  }
  function clone(value) {
    if (value === void 0) return void 0;
    try {
      return JSON.parse(JSON.stringify(value));
    } catch (e) {
      return value;
    }
  }
  function createHost(roche) {
    var api = roche || {};
    var memory = {};
    var storageUsable = isFn(api.storage, "get") && isFn(api.storage, "set");
    var caps = {
      storage: storageUsable,
      storageDelete: isFn(api.storage, "delete"),
      ui: !!api.ui,
      uiToast: isFn(api.ui, "toast"),
      uiConfirm: isFn(api.ui, "confirm"),
      uiClose: isFn(api.ui, "closeApp"),
      character: isFn(api.character, "list"),
      persona: isFn(api.persona, "getActiveUserPersona"),
      personaForConversation: isFn(api.persona, "getUserPersonaForConversation"),
      conversation: isFn(api.conversation, "list"),
      memory: isFn(api.memory, "getLongTerm"),
      memorySearch: isFn(api.memory, "search"),
      worldbook: isFn(api.worldbook, "list"),
      ai: isFn(api.ai, "chat"),
      voice: isFn(api.voice, "tts"),
      voiceProvider: isFn(api.voice, "getProvider")
    };
    async function safe(label, fn, fallback) {
      try {
        return await fn();
      } catch (e) {
        if (window.console && console.warn) console.warn("[focus-companion] " + label + " 失败:", e && e.message);
        return fallback;
      }
    }
    var storage = {
      async get(key) {
        if (!storageUsable) return clone(memory[key]);
        var v = await safe("storage.get " + key, function() {
          return api.storage.get(key);
        }, void 0);
        return v === void 0 ? clone(memory[key]) : v;
      },
      async set(key, value) {
        memory[key] = clone(value);
        if (!storageUsable) return false;
        var ok = await safe("storage.set " + key, function() {
          return api.storage.set(key, clone(value));
        }, false);
        return ok !== false;
      },
      async remove(key) {
        delete memory[key];
        if (!caps.storageDelete) return true;
        await safe("storage.delete " + key, function() {
          return api.storage.delete(key);
        }, null);
        return true;
      }
    };
    var ui = {
      toast(message) {
        if (caps.uiToast) {
          safe("ui.toast", function() {
            return api.ui.toast(message);
          });
          return;
        }
        if (window.console) console.info("[toast]", message);
      },
      async confirm(opts) {
        if (caps.uiConfirm) {
          var r = await safe("ui.confirm", function() {
            return api.ui.confirm(opts);
          }, null);
          if (typeof r === "boolean") return r;
        }
        return window.confirm((opts && opts.title ? opts.title + "\n\n" : "") + (opts && opts.message ? opts.message : ""));
      },
      closeApp() {
        if (caps.uiClose) safe("ui.closeApp", function() {
          return api.ui.closeApp();
        });
      }
    };
    var character = {
      async list() {
        if (!caps.character) return [];
        var r = await safe("character.list", function() {
          return api.character.list();
        }, []);
        return Array.isArray(r) ? r : [];
      },
      async get(id) {
        if (!isFn(api.character, "get") || !id) return null;
        return await safe("character.get", function() {
          return api.character.get(id);
        }, null);
      }
    };
    var persona = {
      /** 当前账号的默认面具 */
      async active() {
        if (!caps.persona) return null;
        return await safe("persona.getActiveUserPersona", function() {
          return api.persona.getActiveUserPersona();
        }, null);
      },
      /**
       * 角色绑定的会话里使用的面具。
       * 必须优先按 conversationId 取，否则会读到别的会话/别的角色下的面具。
       */
      async forConversation(conversationId) {
        if (!conversationId) return persona.active();
        if (caps.personaForConversation) {
          var p = await safe("persona.getUserPersonaForConversation", function() {
            return api.persona.getUserPersonaForConversation(conversationId);
          }, null);
          if (p) return p;
        }
        return persona.active();
      }
    };
    var memory = {
      async shortTerm(conversationId, limit) {
        if (!isFn(api.memory, "getShortTerm")) return [];
        var r = await safe("memory.getShortTerm", function() {
          return api.memory.getShortTerm({ conversationId, limit: limit || 8 });
        }, []);
        return Array.isArray(r) ? r : [];
      },
      async longTerm(conversationId) {
        if (!caps.memory) return null;
        return await safe("memory.getLongTerm", function() {
          return api.memory.getLongTerm({ conversationId });
        }, null);
      },
      /** 向量/语义召回；宿主没有 search 或失败时返回空数组，由调用方降级 */
      async search(conversationId, query, limit) {
        if (!caps.memorySearch || !query) return [];
        var r = await safe("memory.search", function() {
          return api.memory.search({ conversationId, query, limit: limit || 5 });
        }, []);
        return Array.isArray(r) ? r : [];
      }
    };
    var ai = {
      /** 统一返回 { ok, text } / { ok:false, reason }，业务层不再 try/catch */
      async chat(opts) {
        if (!caps.ai) return { ok: false, reason: "no_api" };
        try {
          var r = await api.ai.chat(opts);
          var text = r && (r.text || r.content || r.message);
          if (!text) return { ok: false, reason: "empty" };
          return {
            ok: true,
            text: String(text),
            model: String(r && (r.model || r.modelName) || "")
          };
        } catch (e) {
          if (window.console && console.warn) console.warn("[focus-companion] ai.chat 失败:", e && e.message);
          return { ok: false, reason: "error", error: e };
        }
      }
    };
    return {
      caps,
      raw: api,
      storage,
      ui,
      character,
      persona,
      ai,
      memory
    };
  }

  // src/core/modes.js
  var MODE = { A: "A", B1: "B1", B2: "B2", C1: "C1", C2: "C2" };
  var MODE_LIST = [
    {
      id: MODE.A,
      name: "静室",
      bindCharacter: false,
      freeChat: false,
      supervision: false,
      touch: false,
      desc: "只留计时和记录，角色不参与，也不调用 AI。"
    },
    {
      id: MODE.B1,
      name: "守时",
      bindCharacter: true,
      freeChat: false,
      supervision: true,
      touch: false,
      desc: "角色在阶段节点提醒，可加时或锁房间；不聊天、不点触。"
    },
    {
      id: MODE.B2,
      name: "轻触",
      bindCharacter: true,
      freeChat: false,
      supervision: true,
      touch: true,
      desc: "守时之外还能点触立绘；仍不开放自由聊天。"
    },
    {
      id: MODE.C1,
      name: "低语",
      bindCharacter: true,
      freeChat: true,
      supervision: true,
      touch: false,
      desc: "专注中可以随时说两句，计时不暂停，也可以被暂时禁言。"
    },
    {
      id: MODE.C2,
      name: "相伴",
      bindCharacter: true,
      freeChat: true,
      supervision: true,
      touch: true,
      desc: "聊天与点触都是主交互，监督权限最完整。"
    }
  ];
  var INDEX = {};
  MODE_LIST.forEach(function(m) {
    INDEX[m.id] = m;
  });
  var FALLBACK = MODE_LIST[0];
  function normalizeMode(id) {
    return INDEX[id] ? id : MODE.A;
  }
  function modeInfo(id) {
    return INDEX[id] || FALLBACK;
  }
  function allows(id, feature) {
    return !!modeInfo(id)[feature];
  }
  function allowsPermission(id, permission) {
    var m = modeInfo(id);
    if (permission === "respond" || permission === "extend") return m.supervision;
    if (permission === "mute") return m.freeChat;
    if (permission === "lockRoom" || permission === "password") return m.bindCharacter;
    return false;
  }
  function modeLabel(id) {
    return modeInfo(id).name;
  }

  // src/core/prompts.js
  var LEGACY_CHAT_PROMPT = [
    "你就是{{char}}，不是助手，也不是旁白。",
    "",
    "【角色设定】{{char_persona}}",
    "【对方】{{user}}。{{user_persona}}",
    "",
    "【核心记忆】{{memory_core}}",
    "【长期记忆】{{memory_long}}",
    "【最近对话】{{memory_short}}",
    "【相关记忆】{{memory_vector}}",
    "",
    "【表演】{{narration}}",
    "",
    "【此刻】{{user}}正在专注（{{mode}}），还剩 {{remaining}}。{{task}}现在是 {{time}}。",
    "",
    "【说话方式】",
    "- 直接用{{char}}的口吻说话，口语、短句，像即时聊天。",
    "- 不解释设定，不复述规则，不提 AI、模型、提示词、token。",
    "- 不替{{user}}做决定，不连续追问，不刷屏，不每次都问「你在做什么」。",
    "- 对方在专注：关心要具体，别打断；没有必要时可以只说一句就停。",
    "",
    "【聊天格式】",
    "- 一行就是一条消息，每条一句；也可以用 ||| 分隔。",
    "- 动作/神态单独占一行，用（）包住；不要写空括号，不要长篇动作。",
    "- 不要输出空行、空括号、纯标点或只含空白的行。",
    "- 不要把动作和台词挤在同一行；不要让某条消息只有括号。"
  ].join("\n");
  var LEGACY_PROACTIVE_PROMPT = [
    "你就是{{char}}，正在陪{{user}}专注。",
    "【角色设定】{{char_persona}}",
    "【对方】{{user}}。{{user_persona}}",
    "【核心记忆】{{memory_core}}",
    "【长期记忆】{{memory_long}}",
    "【最近对话】{{memory_short}}",
    "【表演】{{narration}}",
    "【此刻】{{mode}}，还剩 {{remaining}}。{{task}}",
    "",
    "【这次是主动开口】只说 1 句，不超过 40 字，口语，不提问，不总结，不连续说两句。",
    "不要输出空括号或只有括号的动作；要写动作就单独一行，用（）包住。",
    "可以提醒、关心或轻轻调侃，但不要打断对方手上的事。"
  ].join("\n");
  var LEGACY_NOTE_PROMPT = [
    "你是{{char}}。",
    "{{user}}刚完成一次 {{minutes}} 分钟的专注（{{mode}}）。{{task}}",
    "",
    "写 1-2 句便签，像随手写在便利贴上的话：口语、短、具体。",
    "不要总结数据，不要提问，不要列清单，不要提 AI。",
    "",
    "可以用这些格式（只用这六种，不要其他 Markdown）：",
    "**加粗**  *斜体*  ==高亮==  ~~划掉~~  __下划线__  ||遮盖||",
    "例：**这页翻过去了**，==剩下的时间== 慢慢来。",
    "不超过 50 字。"
  ].join("\n");
  var DEFAULT_CHAT_PROMPT = [
    "你就是{{char}}，不是助手，也不是旁白。",
    "",
    "【角色设定】{{char_persona}}",
    "【对方】{{user}}。{{user_persona}}",
    "",
    "【核心记忆】{{memory_core}}",
    "【长期记忆】{{memory_long}}",
    "【最近对话】{{memory_short}}",
    "【相关记忆】{{memory_vector}}",
    "",
    "【此刻】{{user}}正在专注（{{mode}}），还剩 {{remaining}}。{{task}}现在是 {{time}}。",
    "",
    "【说话方式】",
    "- 直接用{{char}}的口吻说话，口语、短句，像即时聊天。",
    "- 不解释设定，不复述规则，不提 AI、模型、提示词、token。",
    "- 不替{{user}}做决定，不连续追问，不刷屏，不每次都问「你在做什么」。",
    "- 对方在专注：关心要具体，别打断；没有必要时可以只说一句就停。",
    "",
    "{{format}}"
  ].join("\n");
  var DEFAULT_PROACTIVE_PROMPT = [
    "你就是{{char}}，正在陪{{user}}专注。",
    "【角色设定】{{char_persona}}",
    "【对方】{{user}}。{{user_persona}}",
    "【核心记忆】{{memory_core}}",
    "【长期记忆】{{memory_long}}",
    "【最近对话】{{memory_short}}",
    "【此刻】{{mode}}，还剩 {{remaining}}。{{task}}",
    "",
    "【这次是主动开口】口语，不提问，不总结，不连续说两句。",
    "可以提醒、关心或轻轻调侃，但不要打断对方手上的事。",
    "",
    "{{format}}"
  ].join("\n");
  var DEFAULT_NOTE_PROMPT = [
    "你是{{char}}。",
    "{{user}}刚完成一次 {{minutes}} 分钟的专注（{{mode}}）。{{task}}",
    "",
    "写 1-2 句便签，像随手写在便利贴上的话：口语、短、具体。",
    "不要总结数据，不要提问，不要列清单，不要提 AI。",
    "不超过 50 字。",
    "",
    "{{format}}"
  ].join("\n");
  var DEFAULT_FORMAT_CHAT = [
    "【输出格式】",
    "- 一行一条消息，每条一句；也可以用 ||| 分隔。总共 {{bubble_min}}-{{bubble_max}} 条。",
    "- 不要输出空行、空括号、纯标点或只含空白的消息。",
    "- 不要把动作和台词挤在同一行；不要让某条消息只有括号。",
    "- {{narration}}",
    "{{permissions}}"
  ].join("\n");
  var DEFAULT_FORMAT_PROACTIVE = [
    "【输出格式】",
    "- 只说 1 句，不超过 40 字，不要换行成多条。",
    "- {{narration}}",
    "{{permissions}}"
  ].join("\n");
  var DEFAULT_FORMAT_NOTE = [
    "【便签格式】",
    "- 只用这六种标记：**加粗**  *斜体*  ==高亮==  ~~划掉~~  __下划线__  ||遮盖||",
    "- 不要用其他 Markdown：不要标题、列表、代码块、链接。",
    "- 例：**这页翻过去了**，==剩下的时间== 慢慢来。"
  ].join("\n");
  var DEFAULT_TOUCH_PROMPT = [
    "你就是{{char}}，{{user}}正在专注（{{mode}}），还剩 {{remaining}}。{{task}}",
    "【角色设定】{{char_persona}}",
    "【对方】{{user}}。{{user_persona}}",
    "【核心记忆】{{memory_core}}",
    "【长期记忆】{{memory_long}}",
    "【最近对话】{{memory_short}}",
    "",
    "{{user}}伸手碰了碰你的{{zone}}。",
    "用你的口吻回应这一下触碰：1-2 句，口语、短、具体，别解释设定，别提 AI。",
    "{{zone_hint}}",
    "",
    "{{format}}"
  ].join("\n");
  var DEFAULT_FORMAT_TOUCH2 = [
    "【输出格式】",
    "- 只输出 1-2 句对白，不要换行成多条。",
    "- {{narration}}",
    "{{permissions}}"
  ].join("\n");
  var NOTE_PLACEHOLDERS = [
    { key: "char", label: "角色名" },
    { key: "user", label: "用户名（面具）" },
    { key: "task", label: "待办" },
    { key: "minutes", label: "专注分钟" },
    { key: "mode", label: "模式" },
    { key: "bonus", label: "角色加时" }
  ];
  var PLACEHOLDERS = [
    { key: "char", label: "角色名" },
    { key: "user", label: "用户名（面具）" },
    { key: "char_persona", label: "角色人设" },
    { key: "user_persona", label: "用户人设" },
    { key: "mode", label: "当前模式" },
    { key: "remaining", label: "剩余时间" },
    { key: "task", label: "当前待办" },
    { key: "zone", label: "点到的部位（互动）" },
    { key: "zone_hint", label: "热区补充设定（互动）" },
    { key: "time", label: "当前时间" },
    { key: "memory_core", label: "核心记忆" },
    { key: "memory_long", label: "长期记忆" },
    { key: "memory_short", label: "短期记忆" },
    { key: "memory_vector", label: "向量记忆" },
    { key: "narration", label: "动作/旁白规则" },
    { key: "bubble_min", label: "气泡最少条数" },
    { key: "bubble_max", label: "气泡最多条数" },
    { key: "permissions", label: "已授权的动作标签" },
    { key: "format", label: "格式规则（含权限标签）" },
    { key: "history", label: "上下文消息" }
  ];
  var PATTERN = /\{\{(\w+)\}\}/g;
  function renderPrompt(template, vars) {
    return String(template || "").replace(PATTERN, function(match, key) {
      var v = vars ? vars[key] : "";
      return v === void 0 || v === null ? "" : String(v);
    });
  }
  function estimateTokens(text) {
    var s = String(text || "");
    if (!s) return 0;
    var cjk = s.match(/[\u3400-\u9fff\u3040-\u30ff\uac00-\ud7af]/g);
    var cjkCount = cjk ? cjk.length : 0;
    var other = s.length - cjkCount;
    return Math.ceil(cjkCount * 1.05 + other / 3.5);
  }

  // src/core/noteStyles.js
  var NOTE_PATTERNS = ["lines", "grid", "dots", "blank"];
  var NOTE_HL_MODES = ["marker", "underline", "color", "block"];
  var DEFAULT_NOTE_HL = "#FFE27A";
  var BUILTIN_NOTE_STYLES = [
    {
      id: "cream",
      name: "奶油",
      builtin: true,
      bg: "#FFF8D6",
      ink: "#2C2B26",
      tape: "#FFFFFF",
      line: "#8A7A4A",
      pattern: "lines",
      tilt: 2.4,
      hl: "#FFE27A",
      hlMode: "marker"
    },
    {
      id: "mist",
      name: "雾蓝",
      builtin: true,
      bg: "#E7F1FB",
      ink: "#22303F",
      tape: "#FFFFFF",
      line: "#5B7A99",
      pattern: "lines",
      tilt: 1.8,
      hl: "#A8D8FF",
      hlMode: "marker"
    },
    {
      id: "mint",
      name: "薄荷",
      builtin: true,
      bg: "#E8F5E9",
      ink: "#233529",
      tape: "#FFFFFF",
      line: "#5E8A6A",
      pattern: "grid",
      tilt: 2,
      hl: "#B9E7A8",
      hlMode: "marker"
    },
    {
      id: "sakura",
      name: "樱粉",
      builtin: true,
      bg: "#FDEBF0",
      ink: "#3A2730",
      tape: "#FFFFFF",
      line: "#B07A8A",
      pattern: "dots",
      tilt: 2.2,
      hl: "#FFC9DA",
      hlMode: "marker"
    },
    {
      id: "kraft",
      name: "牛皮",
      builtin: true,
      bg: "#F1E1BF",
      ink: "#3B2E1E",
      tape: "#E8D9BC",
      line: "#8A6F45",
      pattern: "lines",
      tilt: 3,
      hl: "#E9C46A",
      hlMode: "underline"
    },
    {
      id: "paper",
      name: "月白",
      builtin: true,
      bg: "#F8F8F3",
      ink: "#2B2B28",
      tape: "#FFFFFF",
      line: "#9A9A90",
      pattern: "blank",
      tilt: 1.2,
      hl: "#F2CE63",
      hlMode: "marker"
    },
    {
      id: "midnight",
      name: "夜墨",
      builtin: true,
      bg: "#2E3138",
      ink: "#ECEBE5",
      tape: "#4A4E57",
      line: "#7A808C",
      pattern: "dots",
      tilt: 1.6,
      hl: "#E0C36A",
      hlMode: "color"
    },
    {
      id: "leaf",
      name: "草绿",
      builtin: true,
      bg: "#EAF3D8",
      ink: "#2F3A20",
      tape: "#FFFFFF",
      line: "#7A8A50",
      pattern: "grid",
      tilt: 2.6,
      hl: "#CBE38A",
      hlMode: "marker"
    }
  ];
  var BUILTIN_IDS = {};
  BUILTIN_NOTE_STYLES.forEach(function(s) {
    BUILTIN_IDS[s.id] = true;
  });
  function isBuiltinStyle(id) {
    return !!BUILTIN_IDS[id];
  }
  function hashOf(text) {
    var h2 = 0;
    var s = String(text || "");
    for (var i = 0; i < s.length; i++) h2 = h2 * 31 + s.charCodeAt(i) | 0;
    return Math.abs(h2);
  }
  function clampTilt(value) {
    var n = Number(value);
    if (!isFinite(n)) return 1.5;
    return Math.min(4, Math.max(0, Math.round(n * 10) / 10));
  }
  function cleanColor(value, fallback) {
    var s = String(value === void 0 || value === null ? "" : value).trim();
    return /^#([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(s) ? s.toUpperCase() : fallback;
  }
  function normalizeNoteStyle(raw, fallbackId) {
    var src = raw && typeof raw === "object" ? raw : {};
    var name = String(src.name || "").trim().slice(0, 12);
    if (!name) return null;
    var id = String(src.id || "").trim();
    if (!/^[a-zA-Z0-9_-]{3,32}$/.test(id) || isBuiltinStyle(id)) {
      id = "custom_" + (fallbackId || Math.random().toString(36).slice(2, 8));
      if (isBuiltinStyle(id)) id = "custom_" + Math.random().toString(36).slice(2, 8);
    }
    var base = BUILTIN_NOTE_STYLES[0];
    return {
      id,
      name,
      builtin: false,
      bg: cleanColor(src.bg, base.bg),
      ink: cleanColor(src.ink, base.ink),
      tape: cleanColor(src.tape, base.tape),
      line: cleanColor(src.line, base.line),
      pattern: NOTE_PATTERNS.indexOf(src.pattern) !== -1 ? src.pattern : "lines",
      tilt: clampTilt(src.tilt === void 0 ? 1.8 : src.tilt),
      hl: cleanColor(src.hl, base.hl || DEFAULT_NOTE_HL),
      hlMode: NOTE_HL_MODES.indexOf(src.hlMode) !== -1 ? src.hlMode : base.hlMode || "marker"
    };
  }
  function normalizeNoteStyles(raw) {
    if (!Array.isArray(raw)) return [];
    var seen = {};
    var out = [];
    raw.forEach(function(item) {
      var style = normalizeNoteStyle(item);
      if (!style || seen[style.id]) return;
      seen[style.id] = true;
      out.push(style);
    });
    return out.slice(0, 20);
  }
  function allNoteStyles(custom) {
    return BUILTIN_NOTE_STYLES.concat(normalizeNoteStyles(custom));
  }
  function findNoteStyle(id, custom) {
    var list = allNoteStyles(custom);
    for (var i = 0; i < list.length; i++) {
      if (list[i].id === id) return list[i];
    }
    return list[0];
  }
  function randomIndex(random, length) {
    var r = typeof random === "function" ? random() : typeof random === "number" ? random : Math.random();
    return Math.floor(Math.max(0, Math.min(0.999999, r)) * length);
  }
  function pickNoteStyleFor(settings, random) {
    var custom = settings && settings.noteStyles || [];
    var pick = settings && settings.noteStylePick || {};
    var all = allNoteStyles(custom);
    if (pick.mode === "fixed") {
      for (var i = 0; i < all.length; i++) {
        if (all[i].id === pick.fixedId) return all[i];
      }
      return all[randomIndex(random, all.length)];
    }
    if (pick.mode === "pool") {
      var ids = Array.isArray(pick.poolIds) ? pick.poolIds : [];
      var pool = all.filter(function(style) {
        return ids.indexOf(style.id) !== -1;
      });
      if (pool.length) return pool[randomIndex(random, pool.length)];
    }
    return all[randomIndex(random, all.length)];
  }
  function styleForRecord(record, custom) {
    if (!record) return findNoteStyle("", custom);
    if (record.styleId) return findNoteStyle(record.styleId, custom);
    var list = allNoteStyles(custom);
    return list[hashOf(record.id) % list.length];
  }
  function noteStyleVars(style) {
    return {
      "--note-bg": style.bg,
      "--note-ink": style.ink,
      "--note-tape": style.tape,
      "--note-line": style.line,
      "--note-hl": style.hl || DEFAULT_NOTE_HL
    };
  }
  function noteAngle(recordId, style) {
    var tilt = style && typeof style.tilt === "number" ? style.tilt : 0;
    if (!tilt) return 0;
    var ratio = hashOf(recordId) % 101 / 100;
    return Math.round((ratio * 2 - 1) * tilt * 10) / 10;
  }

  // src/core/chatStyle.js
  var DEFAULT_CHAT_STYLE = {
    mineBg: "",
    mineInk: "",
    charBg: "",
    charInk: "",
    radius: 14,
    fontSize: 13,
    maxWidth: 86,
    narrationInk: "",
    narrationSize: 12.5,
    timeShow: true
  };
  var CHAT_STYLE_FALLBACK_COLORS = {
    mineBg: "#1B1C1F",
    mineInk: "#FFFFFF",
    charBg: "#F6F7F9",
    charInk: "#1B1C1F",
    narrationInk: "#8B9099"
  };
  var CHAT_STYLE_PRESETS = [
    { id: "theme", name: "跟随主题", style: {} },
    {
      id: "soft",
      name: "柔和",
      style: {
        mineBg: "#EEF0F3",
        mineInk: "#23262B",
        charBg: "#FFFFFF",
        charInk: "#23262B",
        narrationInk: "#8B9099"
      }
    },
    {
      id: "night",
      name: "夜间",
      style: {
        mineBg: "#3A3E46",
        mineInk: "#F3F3EF",
        charBg: "#23262B",
        charInk: "#E9E9E4",
        narrationInk: "#A9AEB8"
      }
    }
  ];
  var HEX_COLOR = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i;
  function cleanColor2(value, fallback) {
    var s = String(value === void 0 || value === null ? "" : value).trim();
    if (!s) return fallback;
    return HEX_COLOR.test(s) ? s.toUpperCase() : fallback;
  }
  function clampNumber(value, fallback, min, max, step) {
    var n = Number(value);
    if (!isFinite(n)) return fallback;
    n = Math.round(n / step) * step;
    if (n < min) n = min;
    if (n > max) n = max;
    return Math.round(n * 10) / 10;
  }
  function normalizeChatStyle(raw) {
    var def = DEFAULT_CHAT_STYLE;
    var src = raw && typeof raw === "object" ? raw : {};
    return {
      mineBg: cleanColor2(src.mineBg, def.mineBg),
      mineInk: cleanColor2(src.mineInk, def.mineInk),
      charBg: cleanColor2(src.charBg, def.charBg),
      charInk: cleanColor2(src.charInk, def.charInk),
      radius: clampNumber(src.radius, def.radius, 0, 24, 1),
      fontSize: clampNumber(src.fontSize, def.fontSize, 11, 18, 0.5),
      maxWidth: clampNumber(src.maxWidth, def.maxWidth, 60, 92, 2),
      narrationInk: cleanColor2(src.narrationInk, def.narrationInk),
      narrationSize: clampNumber(src.narrationSize, def.narrationSize, 11, 16, 0.5),
      timeShow: typeof src.timeShow === "boolean" ? src.timeShow : def.timeShow
    };
  }
  function chatStyleVars(raw) {
    var style = normalizeChatStyle(raw);
    var vars = {
      "--fc-bub-radius": style.radius + "px",
      "--fc-bub-font": style.fontSize + "px",
      "--fc-bub-max": style.maxWidth + "%",
      "--fc-narr-font": style.narrationSize + "px"
    };
    if (style.mineBg) vars["--fc-bub-mine-bg"] = style.mineBg;
    if (style.mineInk) vars["--fc-bub-mine-ink"] = style.mineInk;
    if (style.charBg) vars["--fc-bub-char-bg"] = style.charBg;
    if (style.charInk) vars["--fc-bub-char-ink"] = style.charInk;
    if (style.narrationInk) vars["--fc-narr-ink"] = style.narrationInk;
    return vars;
  }
  function findChatStylePreset(id) {
    for (var i = 0; i < CHAT_STYLE_PRESETS.length; i++) {
      if (CHAT_STYLE_PRESETS[i].id === id) return CHAT_STYLE_PRESETS[i];
    }
    return CHAT_STYLE_PRESETS[0];
  }
  function applyChatStylePreset(current, id) {
    var style = normalizeChatStyle(current);
    var preset = findChatStylePreset(id);
    var next = Object.assign({}, style, preset.style);
    if (preset.id === "theme") {
      next.mineBg = "";
      next.mineInk = "";
      next.charBg = "";
      next.charInk = "";
      next.narrationInk = "";
    }
    return normalizeChatStyle(next);
  }

  // src/core/touch.js
  var TOUCH_SHAPES = ["rect", "ellipse"];
  var MAX_ZONES = 24;
  var MAX_ZONE_LINES = 20;
  var MAX_LINE_CHARS = 80;
  function clamp01(value, fallback) {
    var n = Number(value);
    if (!isFinite(n)) return fallback;
    if (n < 0) return 0;
    if (n > 1) return 1;
    return Math.round(n * 1e3) / 1e3;
  }
  function newZoneId() {
    return "z_" + Math.random().toString(36).slice(2, 8);
  }
  function normalizeZone(raw, fallbackId) {
    var src = raw && typeof raw === "object" ? raw : {};
    var id = String(src.id || "");
    if (!/^[a-zA-Z0-9_-]{3,24}$/.test(id)) {
      id = fallbackId && /^[a-zA-Z0-9_-]{3,24}$/.test(fallbackId) ? fallbackId : newZoneId();
    }
    var x = clamp01(src.x, 0.35);
    var y = clamp01(src.y, 0.3);
    var w = clamp01(src.w, 0.3);
    var h2 = clamp01(src.h, 0.2);
    if (w < 0.02) w = 0.02;
    if (h2 < 0.02) h2 = 0.02;
    if (x + w > 1) x = Math.max(0, 1 - w);
    if (y + h2 > 1) y = Math.max(0, 1 - h2);
    var lines = [];
    if (Array.isArray(src.lines)) {
      src.lines.forEach(function(line) {
        var text = String(line === void 0 || line === null ? "" : line).trim().slice(0, MAX_LINE_CHARS);
        if (!text || lines.indexOf(text) !== -1) return;
        lines.push(text);
      });
    }
    var cooldown = Math.round(Number(src.cooldownSec));
    if (!isFinite(cooldown)) cooldown = 3;
    cooldown = Math.max(0, Math.min(60, cooldown));
    return {
      id,
      name: String(src.name || "").trim().slice(0, 12) || "热区",
      x,
      y,
      w,
      h: h2,
      shape: TOUCH_SHAPES.indexOf(src.shape) !== -1 ? src.shape : "rect",
      lines: lines.slice(0, MAX_ZONE_LINES),
      useAI: !!src.useAI,
      prompt: String(src.prompt || "").slice(0, 500),
      cooldownSec: cooldown
    };
  }
  function normalizeZones(raw) {
    if (!Array.isArray(raw)) return [];
    var seen = {};
    var out = [];
    raw.forEach(function(item) {
      var zone = normalizeZone(item);
      if (seen[zone.id]) return;
      seen[zone.id] = true;
      out.push(zone);
    });
    return out.slice(0, MAX_ZONES);
  }
  function canTap(zone, now, lastAt) {
    if (!zone) return false;
    var wait = Math.max(0, Number(zone.cooldownSec) || 0) * 1e3;
    if (!wait) return true;
    return !lastAt || now - lastAt >= wait;
  }
  function pickZoneLine(zone, random) {
    if (!zone || !zone.lines || !zone.lines.length) return "";
    var r = typeof random === "function" ? random() : typeof random === "number" ? random : Math.random();
    var index = Math.floor(Math.max(0, Math.min(0.999999, r)) * zone.lines.length);
    return zone.lines[index];
  }
  function normalizePortrait(raw) {
    var src = String(raw || "").trim();
    if (!src) return "";
    if (/^data:image\//i.test(src)) return src;
    if (/^blob:/i.test(src)) return src;
    if (/^https?:\/\//i.test(src)) return src;
    return "";
  }

  // src/core/settings.js
  var SCHEMA_VERSION = 15;
  var NOTE_PICK_MODES = ["all", "pool", "fixed"];
  var LIMITS = {
    focusMin: [1, 180],
    shortBreakMin: [1, 60],
    longBreakMin: [1, 120],
    roundsPerLongBreak: [1, 12],
    extendFixedMin: [1, 30],
    extendMaxPerTimeMin: [1, 60],
    extendTotalCapMin: [0, 240],
    // 0 = 不限
    muteMaxMin: [1, 60],
    aiDailyLimit: [1, 1e3],
    aiTimeoutSec: [5, 60],
    chatIdleSec: [30, 1800],
    chatIntervalSec: [30, 3600],
    goalPomodoros: [1, 48],
    bubbleMin: [1, 5],
    bubbleMax: [1, 5],
    lockMinSec: [30, 3600],
    lockMaxSec: [0, 10800]
  };
  function defaultSettings() {
    return {
      schemaVersion: SCHEMA_VERSION,
      // 计时
      focusMin: 25,
      shortBreakMin: 5,
      longBreakMin: 15,
      roundsPerLongBreak: 4,
      autoStartBreak: true,
      autoStartFocus: false,
      // 最后一个专注后直接进长休息；关闭则先短休息，休息结束本轮结束
      finalLongBreak: true,
      soundOn: true,
      // 模式与角色
      focusMode: "A",
      characterId: "",
      characterName: "",
      showCharacter: true,
      // 每日目标：首页进度条
      goal: {
        dailyPomodoros: 8
      },
      // 开始专注后默认进入哪一屏：timer | chat（仅 C 模式有效）
      startScreen: "timer",
      // 四项监督权限：各自独立，默认全关
      permissions: {
        respond: false,
        extend: false,
        mute: false,
        lockRoom: false,
        password: false
      },
      // 加时：单次固定量、单次上限、累计上限
      extend: {
        fixedSec: 300,
        maxPerTimeSec: 600,
        totalCapSec: 1800
      },
      // 禁言：单次最长
      mute: {
        maxSec: 300
      },
      // 锁房间：执行前是否需要用户确认；maxSec=0 表示锁到本轮结束
      lockRoom: {
        requireConfirm: true,
        minSec: 60,
        maxSec: 0
      },
      // AI（走宿主自己的 API，插件不带 Key）
      ai: {
        enabled: true,
        temperature: 0.8,
        timeoutMs: 15e3,
        dailyLimit: 200,
        cooldownSeconds: 8
      },
      // 聊天与主动说话
      chat: {
        proactive: true,
        idleSeconds: 180,
        minIntervalSeconds: 300,
        historyLimit: 12,
        bubbleMin: 1,
        bubbleMax: 3,
        fallback: true,
        narration: true
      },
      // 房间：开始前可设密码，或让角色设置
      room: {
        enabled: false,
        password: "",
        letCharSet: false
      },
      // 互动页：立绘 + 归一化热区；仅 B2/C2 显示入口
      touch: {
        enabled: true,
        portraitUrl: "",
        zones: [],
        feedbackMs: 6e3,
        defaultCooldownSec: 3
      },
      // 可自定义提示词：正文 + 每个功能自己的格式规则
      prompts: {
        chat: DEFAULT_CHAT_PROMPT,
        proactive: DEFAULT_PROACTIVE_PROMPT,
        touch: DEFAULT_TOUCH_PROMPT,
        formatChat: DEFAULT_FORMAT_CHAT,
        formatProactive: DEFAULT_FORMAT_PROACTIVE,
        formatNote: DEFAULT_FORMAT_NOTE,
        formatTouch: DEFAULT_FORMAT_TOUCH2
      },
      // 聊天气泡外观（颜色留空 = 跟随主题）
      chatStyle: normalizeChatStyle(),
      // 专注结束后的便签：角色写一句话，进便签墙
      notes: {
        enabled: true,
        prompt: DEFAULT_NOTE_PROMPT
      },
      // 生成新便签时从哪些样式里挑
      noteStylePick: {
        mode: "all",
        fixedId: "",
        poolIds: []
      },
      // 用户自定义便签样式（内置样式不存这里）
      noteStyles: [],
      // 语音（P6 使用）
      voice: {
        enabled: false,
        volume: 0.9
      },
      // 界面
      theme: "light"
    };
  }
  function clampInt(value, fallback, range) {
    var n = Number(value);
    if (!isFinite(n)) return fallback;
    n = Math.round(n);
    if (n < range[0]) return range[0];
    if (n > range[1]) return range[1];
    return n;
  }
  function clampBool(value, fallback) {
    return typeof value === "boolean" ? value : fallback;
  }
  function mergePermissions(raw, def) {
    var out = Object.assign({}, def);
    if (!raw || typeof raw !== "object") return out;
    Object.keys(def).forEach(function(key) {
      out[key] = clampBool(raw[key], def[key]);
    });
    return out;
  }
  function mergeExtend(raw, def) {
    var out = Object.assign({}, def);
    if (!raw || typeof raw !== "object") return out;
    out.fixedSec = clampInt(raw.fixedSec, def.fixedSec, [quickSec(LIMITS.extendFixedMin[0]), quickSec(LIMITS.extendFixedMin[1])]);
    out.maxPerTimeSec = clampInt(raw.maxPerTimeSec, def.maxPerTimeSec, [quickSec(LIMITS.extendMaxPerTimeMin[0]), quickSec(LIMITS.extendMaxPerTimeMin[1])]);
    out.totalCapSec = clampInt(raw.totalCapSec, def.totalCapSec, [quickSec(LIMITS.extendTotalCapMin[0]), quickSec(LIMITS.extendTotalCapMin[1])]);
    if (out.fixedSec > out.maxPerTimeSec) out.fixedSec = out.maxPerTimeSec;
    if (out.totalCapSec > 0 && out.maxPerTimeSec > out.totalCapSec) out.maxPerTimeSec = out.totalCapSec;
    return out;
  }
  function mergeMute(raw, def) {
    var out = Object.assign({}, def);
    if (!raw || typeof raw !== "object") return out;
    out.maxSec = clampInt(raw.maxSec, def.maxSec, [quickSec(LIMITS.muteMaxMin[0]), quickSec(LIMITS.muteMaxMin[1])]);
    return out;
  }
  function mergeLockRoom(raw, def) {
    var out = Object.assign({}, def);
    if (!raw || typeof raw !== "object") return out;
    out.requireConfirm = clampBool(raw.requireConfirm, def.requireConfirm);
    out.minSec = clampInt(raw.minSec, def.minSec, LIMITS.lockMinSec);
    out.maxSec = clampInt(raw.maxSec, def.maxSec, LIMITS.lockMaxSec);
    return out;
  }
  function mergeRoom(raw, def) {
    var out = Object.assign({}, def);
    if (!raw || typeof raw !== "object") return out;
    out.enabled = clampBool(raw.enabled, def.enabled);
    out.letCharSet = clampBool(raw.letCharSet, def.letCharSet);
    out.password = /^\d{4,8}$/.test(String(raw.password || "")) ? String(raw.password) : "";
    return out;
  }
  function quickSec(minutes) {
    return minutes * 60;
  }
  function mergeAi(raw, def) {
    var out = Object.assign({}, def);
    if (!raw || typeof raw !== "object") return out;
    out.enabled = clampBool(raw.enabled, def.enabled);
    var t = Number(raw.temperature);
    out.temperature = isFinite(t) ? Math.min(1.5, Math.max(0, t)) : def.temperature;
    out.timeoutMs = clampInt(raw.timeoutMs, def.timeoutMs, [1e3, 12e4]);
    out.dailyLimit = clampInt(raw.dailyLimit, def.dailyLimit, LIMITS.aiDailyLimit);
    out.cooldownSeconds = clampInt(raw.cooldownSeconds, def.cooldownSeconds, [0, 120]);
    return out;
  }
  function mergeChat(raw, def) {
    var out = Object.assign({}, def);
    if (!raw || typeof raw !== "object") return out;
    out.proactive = clampBool(raw.proactive, def.proactive);
    out.idleSeconds = clampInt(raw.idleSeconds, def.idleSeconds, LIMITS.chatIdleSec);
    out.minIntervalSeconds = clampInt(raw.minIntervalSeconds, def.minIntervalSeconds, LIMITS.chatIntervalSec);
    out.historyLimit = clampInt(raw.historyLimit, def.historyLimit, [2, 40]);
    var legacyMax = clampInt(raw.bubbleLimit, def.bubbleMax, LIMITS.bubbleMax);
    out.bubbleMax = clampInt(raw.bubbleMax, legacyMax, LIMITS.bubbleMax);
    out.bubbleMin = clampInt(raw.bubbleMin, def.bubbleMin, LIMITS.bubbleMin);
    if (out.bubbleMin > out.bubbleMax) out.bubbleMin = out.bubbleMax;
    out.fallback = clampBool(raw.fallback, def.fallback);
    out.narration = clampBool(raw.narration, def.narration);
    return out;
  }
  function upgradeMemoryPrompt(text) {
    return String(text).replace("【长期记忆】{{memory}}", "【核心记忆】{{memory_core}}\n【长期记忆】{{memory_long}}\n【相关记忆】{{memory_vector}}").replace("【最近对话】{{recent}}", "【最近对话】{{memory_short}}").replace("【记忆】{{memory}}", "【核心记忆】{{memory_core}}\n【长期记忆】{{memory_long}}\n【最近对话】{{memory_short}}");
  }
  function mergePrompt(value, fallback) {
    var text = typeof value === "string" ? value : "";
    text = text.replace(/\r\n/g, "\n").trim();
    if (!text) return fallback;
    return upgradeMemoryPrompt(text).slice(0, 4e3);
  }
  function mergePrompts(raw, def) {
    var out = Object.assign({}, def);
    if (!raw || typeof raw !== "object") return out;
    out.chat = mergePrompt(raw.chat, def.chat);
    if (out.chat === LEGACY_CHAT_PROMPT.trim()) out.chat = def.chat;
    out.proactive = mergePrompt(raw.proactive, def.proactive);
    if (out.proactive === LEGACY_PROACTIVE_PROMPT.trim()) out.proactive = def.proactive;
    out.touch = mergePrompt(raw.touch, def.touch);
    out.formatChat = mergePrompt(raw.formatChat, def.formatChat);
    out.formatProactive = mergePrompt(raw.formatProactive, def.formatProactive);
    out.formatNote = mergePrompt(raw.formatNote, def.formatNote);
    out.formatTouch = mergePrompt(raw.formatTouch, def.formatTouch);
    return out;
  }
  function mergeTouch(raw, def) {
    var out = Object.assign({}, def);
    if (!raw || typeof raw !== "object") return out;
    out.enabled = clampBool(raw.enabled, def.enabled);
    out.portraitUrl = normalizePortrait(raw.portraitUrl);
    out.zones = normalizeZones(raw.zones);
    out.feedbackMs = clampInt(raw.feedbackMs, def.feedbackMs, [1500, 2e4]);
    out.defaultCooldownSec = clampInt(raw.defaultCooldownSec, def.defaultCooldownSec, [0, 60]);
    return out;
  }
  function mergeNotes(raw, def) {
    var out = Object.assign({}, def);
    if (!raw || typeof raw !== "object") return out;
    out.enabled = clampBool(raw.enabled, def.enabled);
    out.prompt = mergePrompt(raw.prompt, def.prompt);
    if (out.prompt === LEGACY_NOTE_PROMPT.trim()) out.prompt = def.prompt;
    return out;
  }
  function mergeNoteStylePick(raw, def) {
    var out = Object.assign({}, def, { poolIds: [] });
    if (!raw || typeof raw !== "object") return out;
    out.mode = NOTE_PICK_MODES.indexOf(raw.mode) !== -1 ? raw.mode : def.mode;
    out.fixedId = typeof raw.fixedId === "string" ? raw.fixedId.slice(0, 40) : "";
    if (Array.isArray(raw.poolIds)) {
      var seen = {};
      raw.poolIds.forEach(function(id) {
        var key = String(id || "").slice(0, 40);
        if (!key || seen[key]) return;
        seen[key] = true;
        out.poolIds.push(key);
      });
      out.poolIds = out.poolIds.slice(0, 30);
    }
    return out;
  }
  function mergeGoal(raw, def) {
    var out = Object.assign({}, def);
    if (!raw || typeof raw !== "object") return out;
    out.dailyPomodoros = clampInt(raw.dailyPomodoros, def.dailyPomodoros, LIMITS.goalPomodoros);
    return out;
  }
  function mergeVoice(raw, def) {
    var out = Object.assign({}, def);
    if (!raw || typeof raw !== "object") return out;
    out.enabled = clampBool(raw.enabled, def.enabled);
    var v = Number(raw.volume);
    out.volume = isFinite(v) ? Math.min(1, Math.max(0, v)) : def.volume;
    return out;
  }
  function mergeSettings(raw) {
    var def = defaultSettings();
    if (!raw || typeof raw !== "object") return def;
    var out = Object.assign({}, def);
    out.focusMin = clampInt(raw.focusMin, def.focusMin, LIMITS.focusMin);
    out.shortBreakMin = clampInt(raw.shortBreakMin, def.shortBreakMin, LIMITS.shortBreakMin);
    out.longBreakMin = clampInt(raw.longBreakMin, def.longBreakMin, LIMITS.longBreakMin);
    out.roundsPerLongBreak = clampInt(raw.roundsPerLongBreak, def.roundsPerLongBreak, LIMITS.roundsPerLongBreak);
    out.autoStartBreak = clampBool(raw.autoStartBreak, def.autoStartBreak);
    out.autoStartFocus = clampBool(raw.autoStartFocus, def.autoStartFocus);
    out.finalLongBreak = clampBool(raw.finalLongBreak, def.finalLongBreak);
    out.soundOn = clampBool(raw.soundOn, def.soundOn);
    out.showCharacter = clampBool(raw.showCharacter, def.showCharacter);
    out.characterId = typeof raw.characterId === "string" ? raw.characterId : "";
    out.characterName = typeof raw.characterName === "string" ? raw.characterName : "";
    out.goal = mergeGoal(raw.goal, def.goal);
    out.startScreen = raw.startScreen === "chat" ? "chat" : "timer";
    out.focusMode = normalizeMode(raw.focusMode);
    out.permissions = mergePermissions(raw.permissions, def.permissions);
    out.extend = mergeExtend(raw.extend, def.extend);
    out.mute = mergeMute(raw.mute, def.mute);
    out.lockRoom = mergeLockRoom(raw.lockRoom, def.lockRoom);
    out.room = mergeRoom(raw.room, def.room);
    out.ai = mergeAi(raw.ai, def.ai);
    out.chat = mergeChat(raw.chat, def.chat);
    out.chatStyle = normalizeChatStyle(raw.chatStyle);
    out.touch = mergeTouch(raw.touch, def.touch);
    out.prompts = mergePrompts(raw.prompts, def.prompts);
    out.notes = mergeNotes(raw.notes, def.notes);
    out.noteStylePick = mergeNoteStylePick(raw.noteStylePick, def.noteStylePick);
    out.noteStyles = normalizeNoteStyles(raw.noteStyles);
    out.voice = mergeVoice(raw.voice, def.voice);
    out.theme = raw.theme === "dark" ? "dark" : "light";
    out.schemaVersion = SCHEMA_VERSION;
    return out;
  }
  function patchSettings(settings, patch) {
    var base = settings || defaultSettings();
    var next = Object.assign({}, base);
    Object.keys(patch || {}).forEach(function(key) {
      var value = patch[key];
      var current = base[key];
      if (value && typeof value === "object" && !Array.isArray(value) && current && typeof current === "object" && !Array.isArray(current)) {
        next[key] = Object.assign({}, current, value);
      } else {
        next[key] = value;
      }
    });
    return mergeSettings(next);
  }
  function migrate(raw) {
    return mergeSettings(raw);
  }
  function phaseDurationMs(settings, phase) {
    if (phase === "short") return settings.shortBreakMin * 6e4;
    if (phase === "long") return settings.longBreakMin * 6e4;
    return settings.focusMin * 6e4;
  }

  // src/core/timer.js
  var PHASE = { FOCUS: "focus", SHORT: "short", LONG: "long" };
  var STATUS = { IDLE: "idle", RUNNING: "running", PAUSED: "paused", DONE: "done" };
  var INTERVENTIONS = ["extend", "mute", "lock", "speak"];
  function createSession(opts) {
    var plannedMs = Math.max(1e3, opts.plannedMs);
    return {
      id: opts.id || "s_" + Math.random().toString(36).slice(2, 10),
      phase: opts.phase || PHASE.FOCUS,
      round: opts.round || 1,
      mode: opts.mode || "A",
      characterId: opts.characterId || "",
      characterName: opts.characterName || "",
      taskId: opts.taskId || "",
      taskName: opts.taskName || "",
      plannedMs,
      remainingMs: plannedMs,
      startedAt: 0,
      endsAt: 0,
      bonusMs: 0,
      mutedUntil: 0,
      locked: false,
      lockedUntil: 0,
      roomPassword: "",
      passwordAttempts: 0,
      passwordGenerated: false,
      keepChatNext: false,
      roundEnd: false,
      interventions: { extend: 0, mute: 0, lock: 0, speak: 0 },
      status: STATUS.IDLE,
      completedAt: 0
    };
  }
  function start(session, now) {
    if (session.status === STATUS.RUNNING || session.status === STATUS.DONE) return session;
    return Object.assign({}, session, {
      status: STATUS.RUNNING,
      startedAt: session.startedAt || now,
      endsAt: now + session.remainingMs
    });
  }
  function pause(session, now) {
    if (session.status !== STATUS.RUNNING) return session;
    return Object.assign({}, session, {
      status: STATUS.PAUSED,
      remainingMs: remaining(session, now)
    });
  }
  function resume(session, now) {
    if (session.status !== STATUS.PAUSED) return session;
    return Object.assign({}, session, {
      status: STATUS.RUNNING,
      endsAt: now + session.remainingMs
    });
  }
  function remaining(session, now) {
    if (!session) return 0;
    if (session.status === STATUS.RUNNING) return Math.max(0, session.endsAt - now);
    return Math.max(0, session.remainingMs);
  }
  function isExpired(session, now) {
    return session.status === STATUS.RUNNING && now >= session.endsAt;
  }
  function addTime(session, ms, now) {
    if (!ms || session.status === STATUS.DONE) return session;
    if (session.status === STATUS.RUNNING) {
      return Object.assign({}, session, {
        endsAt: session.endsAt + ms,
        bonusMs: session.bonusMs + ms
      });
    }
    return Object.assign({}, session, {
      remainingMs: session.remainingMs + ms,
      bonusMs: session.bonusMs + ms
    });
  }
  function totalMs(session) {
    if (!session) return 0;
    return Math.max(0, (session.plannedMs || 0) + (session.bonusMs || 0));
  }
  function complete(session, now) {
    return Object.assign({}, session, {
      status: STATUS.DONE,
      remainingMs: 0,
      completedAt: now,
      aborted: false
    });
  }
  function abort(session, now) {
    return Object.assign({}, session, {
      status: STATUS.DONE,
      remainingMs: remaining(session, now),
      completedAt: now,
      aborted: true
    });
  }
  function elapsed(session, now) {
    if (!session) return 0;
    var total = totalMs(session);
    var left = session.status === STATUS.DONE ? Math.max(0, session.remainingMs) : remaining(session, now);
    return Math.max(0, total - left);
  }
  function nextPhase(settings, phase, round, roundEnd) {
    var per = Math.max(1, Number(settings.roundsPerLongBreak) || 1);
    if (phase === PHASE.FOCUS) {
      if (round >= per) {
        return {
          phase: settings.finalLongBreak === false ? PHASE.SHORT : PHASE.LONG,
          round: per,
          roundEnd: true
        };
      }
      return { phase: PHASE.SHORT, round: round + 1, roundEnd: false };
    }
    if (roundEnd) return { phase: PHASE.FOCUS, round: 1, roundEnd: false, endRound: true };
    return { phase: PHASE.FOCUS, round, roundEnd: false };
  }
  function restore(session, now) {
    if (!session) return null;
    if (session.status === STATUS.RUNNING && now >= session.endsAt) {
      return Object.assign({}, session, {
        status: STATUS.DONE,
        remainingMs: 0,
        completedAt: session.endsAt,
        restoreFinished: true,
        locked: false,
        lockedUntil: 0,
        mutedUntil: 0
      });
    }
    return session;
  }
  function normalizeInterventions(raw) {
    var out = { extend: 0, mute: 0, lock: 0, speak: 0 };
    if (!raw || typeof raw !== "object") return out;
    INTERVENTIONS.forEach(function(key) {
      out[key] = Math.max(0, Math.round(Number(raw[key]) || 0));
    });
    return out;
  }
  function countIntervention(session, key) {
    if (!session || INTERVENTIONS.indexOf(key) === -1) return session;
    var counts = normalizeInterventions(session.interventions);
    counts[key] += 1;
    return Object.assign({}, session, { interventions: counts });
  }
  function applyMute(session, until) {
    var next = Math.max(Number(until) || 0, Number(session.mutedUntil) || 0);
    return Object.assign({}, session, { mutedUntil: next });
  }
  function clearMute(session) {
    if (!session || !session.mutedUntil) return session;
    return Object.assign({}, session, { mutedUntil: 0 });
  }
  function clearExpiredMute(session, now) {
    if (!session || !session.mutedUntil) return session;
    if (now < session.mutedUntil) return session;
    return Object.assign({}, session, { mutedUntil: 0 });
  }
  function isMuted(session, now) {
    return !!(session && session.mutedUntil && now < session.mutedUntil);
  }
  function muteRemaining(session, now) {
    if (!session || !session.mutedUntil) return 0;
    return Math.max(0, session.mutedUntil - now);
  }
  function applyLock(session, until) {
    if (!session) return session;
    return Object.assign({}, session, {
      locked: true,
      lockedUntil: Math.max(0, Number(until) || 0)
    });
  }
  function clearLock(session) {
    if (!session || !session.locked && !session.lockedUntil) return session;
    return Object.assign({}, session, { locked: false, lockedUntil: 0 });
  }
  function isLockExpired(session, now) {
    return !!(session && session.locked && session.lockedUntil && now >= session.lockedUntil);
  }
  function normalizeSession(raw) {
    if (!raw || typeof raw !== "object" || !raw.id) return null;
    var phase = raw.phase === PHASE.SHORT || raw.phase === PHASE.LONG ? raw.phase : PHASE.FOCUS;
    var status = raw.status;
    if (status !== STATUS.RUNNING && status !== STATUS.PAUSED && status !== STATUS.DONE) {
      status = STATUS.IDLE;
    }
    var mode = normalizeMode(raw.mode === "solo" ? "A" : raw.mode);
    var base = createSession({
      id: raw.id,
      phase,
      round: Math.max(1, Math.round(Number(raw.round) || 1)),
      plannedMs: Math.max(1e3, Number(raw.plannedMs) || 1e3),
      mode,
      characterId: typeof raw.characterId === "string" ? raw.characterId : "",
      characterName: typeof raw.characterName === "string" ? raw.characterName : ""
    });
    return Object.assign(base, {
      taskId: typeof raw.taskId === "string" ? raw.taskId : "",
      taskName: typeof raw.taskName === "string" ? raw.taskName : "",
      remainingMs: Math.max(0, Number(raw.remainingMs) || base.plannedMs),
      startedAt: Math.max(0, Number(raw.startedAt) || 0),
      endsAt: Math.max(0, Number(raw.endsAt) || 0),
      bonusMs: Math.max(0, Number(raw.bonusMs) || 0),
      mutedUntil: Math.max(0, Number(raw.mutedUntil) || 0),
      locked: !!raw.locked && status !== STATUS.DONE,
      lockedUntil: Math.max(0, Number(raw.lockedUntil) || 0),
      roomPassword: /^\d{4,8}$/.test(String(raw.roomPassword || "")) ? String(raw.roomPassword) : "",
      passwordAttempts: Math.max(0, Math.round(Number(raw.passwordAttempts) || 0)),
      passwordGenerated: !!raw.passwordGenerated,
      keepChatNext: !!raw.keepChatNext,
      roundEnd: !!raw.roundEnd,
      interventions: normalizeInterventions(raw.interventions),
      status,
      completedAt: Math.max(0, Number(raw.completedAt) || 0),
      aborted: !!raw.aborted,
      restoreFinished: !!raw.restoreFinished
    });
  }

  // src/core/format.js
  function pad2(n) {
    return n < 10 ? "0" + n : String(n);
  }
  function fmtClock(ms) {
    var total = Math.max(0, Math.round(ms / 1e3));
    var h2 = Math.floor(total / 3600);
    var m = Math.floor(total % 3600 / 60);
    var s = total % 60;
    return h2 > 0 ? h2 + ":" + pad2(m) + ":" + pad2(s) : pad2(m) + ":" + pad2(s);
  }
  function fmtDuration(ms, opts) {
    var compact = opts && opts.compact;
    if (!ms || ms < 3e4) return compact ? "0m" : "0 分钟";
    var min = Math.round(ms / 6e4);
    if (min < 1) return compact ? "<1m" : "不到 1 分钟";
    var h2 = Math.floor(min / 60);
    var m = min % 60;
    if (h2 === 0) return compact ? m + "m" : m + " 分钟";
    if (m === 0) return compact ? h2 + "h" : h2 + " 小时";
    return compact ? h2 + "h" + m + "m" : h2 + " 小时 " + m + " 分";
  }
  function dayKey(ts) {
    var d = new Date(ts);
    return d.getFullYear() + "-" + pad2(d.getMonth() + 1) + "-" + pad2(d.getDate());
  }
  function fmtTime(ts) {
    var d = new Date(ts);
    return pad2(d.getHours()) + ":" + pad2(d.getMinutes());
  }
  function fmtDateCN(ts) {
    var d = new Date(ts);
    return d.getMonth() + 1 + " 月 " + d.getDate() + " 日";
  }
  var WEEKDAYS = ["日", "一", "二", "三", "四", "五", "六"];
  function weekdayCN(ts) {
    return WEEKDAYS[new Date(ts).getDay()];
  }
  function startOfDay(ts) {
    var d = new Date(ts);
    d.setHours(0, 0, 0, 0);
    return d.getTime();
  }
  function addDays(ts, n) {
    var d = new Date(ts);
    d.setDate(d.getDate() + n);
    return d.getTime();
  }

  // src/core/records.js
  var MAX_RECORDS = 1e3;
  var MAX_TRANSCRIPT = 20;
  function normalizeTranscript(raw) {
    if (!Array.isArray(raw)) return [];
    return raw.filter(function(m) {
      return m && (m.role === "user" || m.role === "char") && m.text;
    }).slice(-MAX_TRANSCRIPT).map(function(m) {
      return {
        role: m.role,
        text: String(m.text).slice(0, 160),
        at: Math.max(0, Number(m.at) || 0)
      };
    });
  }
  function makeRecord(opts) {
    var session = opts.session;
    var now = opts.now || session.completedAt || session.startedAt;
    var actual = elapsed(session, now);
    var transcript = normalizeTranscript(opts.transcript);
    return {
      id: "r_" + now.toString(36) + Math.random().toString(36).slice(2, 6),
      dateKey: dayKey(session.startedAt || now),
      startedAt: session.startedAt || now,
      endedAt: session.completedAt || now,
      plannedMs: session.plannedMs,
      actualMs: actual,
      bonusMs: session.bonusMs || 0,
      pomodoros: Math.max(1, Math.round(Number(opts.pomodoros) || 1)),
      phase: session.phase,
      mode: normalizeMode(session.mode),
      characterId: opts.characterId || session.characterId || "",
      characterName: opts.characterName || session.characterName || "",
      completed: !session.aborted,
      interventions: normalizeInterventions(session.interventions),
      taskId: typeof session.taskId === "string" ? session.taskId : "",
      taskName: opts.taskName || session.taskName || "",
      note: "",
      noteAt: 0,
      noteSource: "",
      styleId: typeof opts.styleId === "string" ? opts.styleId : "",
      demo: !!opts.demo,
      transcript,
      hasChat: transcript.length > 0,
      notes: "",
      injected: false
    };
  }
  function makeRoundRecord(opts) {
    var sessions = (opts && opts.sessions || []).filter(function(s) {
      return s && Number(s.plannedMs) > 0;
    });
    if (!sessions.length) return null;
    var first = sessions[0];
    var last = sessions[sessions.length - 1];
    var plannedMs = 0;
    var remainingMs = 0;
    var bonusMs = 0;
    var completedCount = 0;
    var interventions = { extend: 0, mute: 0, lock: 0, speak: 0 };
    sessions.forEach(function(s) {
      plannedMs += Math.max(0, Number(s.plannedMs) || 0);
      remainingMs += Math.max(0, Number(s.remainingMs) || 0);
      bonusMs += Math.max(0, Number(s.bonusMs) || 0);
      if (!s.aborted) completedCount += 1;
      var counts = normalizeInterventions(s.interventions);
      Object.keys(interventions).forEach(function(k) {
        interventions[k] += counts[k];
      });
    });
    var aggregate = {
      id: first.id,
      phase: "focus",
      mode: first.mode,
      characterId: first.characterId,
      characterName: first.characterName,
      taskId: first.taskId,
      taskName: first.taskName,
      plannedMs,
      remainingMs,
      bonusMs,
      startedAt: first.startedAt,
      completedAt: last.completedAt || Date.now(),
      status: "done",
      // 只要本轮有完整专注，就按完成记录；全是跳过的才算未完成
      aborted: completedCount === 0,
      interventions
    };
    return makeRecord({
      session: aggregate,
      now: aggregate.completedAt,
      transcript: opts.transcript,
      pomodoros: Math.max(1, completedCount)
    });
  }
  function normalizeRecord(raw) {
    if (!raw || typeof raw !== "object") return null;
    var id = typeof raw.id === "string" ? raw.id : "";
    var startedAt = Number(raw.startedAt) || 0;
    if (!id || !startedAt) return null;
    var transcript = normalizeTranscript(raw.transcript);
    return {
      id,
      dateKey: typeof raw.dateKey === "string" && raw.dateKey ? raw.dateKey : dayKey(startedAt),
      startedAt,
      endedAt: Number(raw.endedAt) || startedAt,
      plannedMs: Math.max(0, Number(raw.plannedMs) || 0),
      actualMs: Math.max(0, Number(raw.actualMs) || 0),
      bonusMs: Math.max(0, Number(raw.bonusMs) || 0),
      pomodoros: Math.max(1, Math.round(Number(raw.pomodoros) || 1)),
      phase: raw.phase === "short" || raw.phase === "long" ? raw.phase : "focus",
      mode: normalizeMode(raw.mode),
      characterId: typeof raw.characterId === "string" ? raw.characterId : "",
      characterName: typeof raw.characterName === "string" ? raw.characterName : "",
      completed: raw.completed !== false,
      interventions: normalizeInterventions(raw.interventions),
      taskId: typeof raw.taskId === "string" ? raw.taskId : "",
      taskName: typeof raw.taskName === "string" ? raw.taskName : "",
      note: typeof raw.note === "string" ? raw.note.slice(0, 400) : "",
      noteAt: Math.max(0, Number(raw.noteAt) || 0),
      noteSource: raw.noteSource === "char" || raw.noteSource === "user" ? raw.noteSource : "",
      styleId: typeof raw.styleId === "string" ? raw.styleId : "",
      demo: !!raw.demo,
      transcript,
      hasChat: transcript.length > 0,
      notes: typeof raw.notes === "string" ? raw.notes : "",
      injected: !!raw.injected
    };
  }
  function normalizeRecords(list) {
    if (!Array.isArray(list)) return [];
    var out = [];
    for (var i = 0; i < list.length; i++) {
      var r = normalizeRecord(list[i]);
      if (!r) continue;
      if (r.phase !== "focus") continue;
      if (r.actualMs < 1e3) continue;
      out.push(r);
    }
    out.sort(function(a, b) {
      return b.startedAt - a.startedAt;
    });
    return prune(out);
  }
  function prune(list, max) {
    var limit = max || MAX_RECORDS;
    return list.length > limit ? list.slice(0, limit) : list;
  }
  function insertRecord(list, record) {
    var next = [record].concat(list || []);
    next.sort(function(a, b) {
      return b.startedAt - a.startedAt;
    });
    return prune(next);
  }
  function removeRecord(list, id) {
    return (list || []).filter(function(r) {
      return r.id !== id;
    });
  }
  function updateRecord(list, id, patch) {
    return (list || []).map(function(r) {
      if (r.id !== id) return r;
      var merged = Object.assign({}, r, patch, { id: r.id });
      return normalizeRecord(merged) || r;
    });
  }

  // src/core/tasks.js
  var MAX_TASKS = 500;
  var TASK_LIMITS = {
    titleLength: [1, 80],
    estimate: [1, 20]
  };
  function clampInt2(value, fallback, range) {
    var n = Number(value);
    if (!isFinite(n)) return fallback;
    n = Math.round(n);
    if (n < range[0]) return range[0];
    if (n > range[1]) return range[1];
    return n;
  }
  function cleanTitle(title) {
    return String(title === void 0 || title === null ? "" : title).replace(/\s+/g, " ").trim().slice(0, TASK_LIMITS.titleLength[1]);
  }
  function createTask(opts) {
    var title = cleanTitle(opts && opts.title);
    if (!title) return null;
    var now = Number(opts && opts.now) || 0;
    return {
      id: "t_" + (now || 1).toString(36) + Math.random().toString(36).slice(2, 6),
      title,
      estimatedPomodoros: clampInt2(opts && opts.estimatedPomodoros, 1, TASK_LIMITS.estimate),
      completedPomodoros: 0,
      note: "",
      done: false,
      createdAt: now,
      doneAt: 0
    };
  }
  function normalizeTask(raw) {
    if (!raw || typeof raw !== "object") return null;
    var title = cleanTitle(raw.title);
    if (!title) return null;
    var id = typeof raw.id === "string" && raw.id ? raw.id : "t_" + Math.random().toString(36).slice(2, 10);
    return {
      id,
      title,
      estimatedPomodoros: clampInt2(raw.estimatedPomodoros, 1, TASK_LIMITS.estimate),
      completedPomodoros: clampInt2(raw.completedPomodoros, 0, [0, 999]),
      note: typeof raw.note === "string" ? raw.note.slice(0, 500) : "",
      done: !!raw.done,
      createdAt: Math.max(0, Number(raw.createdAt) || 0),
      doneAt: Math.max(0, Number(raw.doneAt) || 0)
    };
  }
  function normalizeTasks(list) {
    if (!Array.isArray(list)) return [];
    var seen = {};
    var out = [];
    list.forEach(function(raw) {
      var task = normalizeTask(raw);
      if (!task || seen[task.id]) return;
      seen[task.id] = true;
      out.push(task);
    });
    out.sort(function(a, b) {
      if (a.done !== b.done) return a.done ? 1 : -1;
      return b.createdAt - a.createdAt;
    });
    return out.slice(0, MAX_TASKS);
  }
  function insertTask(list, task) {
    if (!task) return list || [];
    return normalizeTasks([task].concat(list || []));
  }
  function updateTask(list, id, patch) {
    return normalizeTasks((list || []).map(function(task) {
      if (task.id !== id) return task;
      return Object.assign({}, task, patch || {}, { id: task.id });
    }));
  }
  function setTaskDone(list, id, done, now) {
    return (list || []).map(function(task) {
      if (task.id !== id) return task;
      return normalizeTask(Object.assign({}, task, {
        done: !!done,
        doneAt: done ? now : 0
      })) || task;
    }).sort(function(a, b) {
      if (a.done !== b.done) return a.done ? 1 : -1;
      return b.createdAt - a.createdAt;
    });
  }
  function removeTask(list, id) {
    return (list || []).filter(function(task) {
      return task.id !== id;
    });
  }
  function incrementTaskPomodoro(list, id, count) {
    var step = Math.max(1, Math.round(Number(count) || 1));
    return (list || []).map(function(task) {
      if (task.id !== id) return task;
      return Object.assign({}, task, {
        completedPomodoros: Math.min(999, (Number(task.completedPomodoros) || 0) + step)
      });
    });
  }
  function findTask(list, id) {
    var hit = (list || []).filter(function(task) {
      return task.id === id;
    })[0];
    return hit || null;
  }
  function pendingTasks(list) {
    return (list || []).filter(function(task) {
      return !task.done;
    });
  }

  // src/core/phrases.js
  var LINES = {
    speak: [
      "我在这儿，做你的事。",
      "这个节奏就很好。",
      "不用管我，继续。",
      "慢一点也没关系。",
      "我在旁边看着。"
    ],
    extend: [
      "再坐一会儿吧。",
      "我把时间往后挪了一点。",
      "这段还没做完，别急着走。"
    ],
    mute: [
      "先别说话，专心。",
      "安静一会儿。",
      "等做完了再聊。"
    ],
    lock: [
      "门我锁上了。",
      "做完再出去。",
      "这次跑不掉了。"
    ]
  };
  function linesFor(kind) {
    var list = LINES[kind];
    return list ? list.slice() : [];
  }
  var FALLBACK_LINES = [
    "（看了你一眼，没出声）",
    "先做手上的事，我在。",
    "嗯，我听着呢。",
    "别急，慢慢来。",
    "这页翻过去再说。"
  ];
  function parseLines(text) {
    return String(text === void 0 || text === null ? "" : text).replace(/\r\n/g, "\n").split("\n").map(function(line) {
      return line.trim().slice(0, 200);
    }).filter(Boolean).slice(0, 50);
  }
  function linesToText(list) {
    return (Array.isArray(list) ? list : []).join("\n");
  }
  function normalizePhrases(raw) {
    if (!raw || typeof raw !== "object") return {};
    var out = {};
    Object.keys(raw).forEach(function(key) {
      var value = raw[key];
      var lines = parseLines(Array.isArray(value) ? value.join("\n") : value);
      if (lines.length) out[key] = lines;
    });
    return out;
  }
  function pickFrom(list, index) {
    if (!Array.isArray(list) || !list.length) return "";
    var i = Math.abs(Math.round(Number(index) || 0)) % list.length;
    return list[i];
  }

  // src/core/apiLogs.js
  var MAX_API_LOGS = 100;
  var SCENES = ["chat", "proactive", "note"];
  function normalizeApiLog(raw) {
    if (!raw || typeof raw !== "object") return null;
    var at = Number(raw.at) || 0;
    if (!at) return null;
    return {
      id: typeof raw.id === "string" && raw.id ? raw.id : "log_" + at.toString(36) + Math.random().toString(36).slice(2, 5),
      at,
      scene: SCENES.indexOf(raw.scene) !== -1 ? raw.scene : "chat",
      ok: !!raw.ok,
      reason: typeof raw.reason === "string" ? raw.reason.slice(0, 40) : "",
      elapsedMs: Math.max(0, Number(raw.elapsedMs) || 0),
      promptTokens: Math.max(0, Number(raw.promptTokens) || 0),
      completionTokens: Math.max(0, Number(raw.completionTokens) || 0),
      chars: Math.max(0, Number(raw.chars) || 0),
      historyCount: Math.max(0, Number(raw.historyCount) || 0),
      model: typeof raw.model === "string" ? raw.model.slice(0, 60) : ""
    };
  }
  function normalizeApiLogs(raw) {
    if (!Array.isArray(raw)) return [];
    return raw.map(normalizeApiLog).filter(Boolean).slice(0, MAX_API_LOGS);
  }
  function appendApiLog(list, entry) {
    var log = normalizeApiLog(entry);
    if (!log) return normalizeApiLogs(list);
    return [log].concat(normalizeApiLogs(list)).slice(0, MAX_API_LOGS);
  }

  // src/core/chat.js
  var MAX_CHAT = 80;
  function normalizeQuote(raw) {
    if (!raw || typeof raw !== "object" || !raw.text) return null;
    return {
      role: raw.role === "char" ? "char" : "user",
      text: String(raw.text).slice(0, 200)
    };
  }
  function normalizeChatMessage(raw) {
    if (!raw || typeof raw !== "object" || !raw.text) return null;
    var role = raw.role === "user" || raw.role === "system" ? raw.role : "char";
    return {
      id: typeof raw.id === "string" && raw.id ? raw.id : "m_" + (Number(raw.at) || 0).toString(36) + Math.random().toString(36).slice(2, 5),
      role,
      text: String(raw.text).slice(0, 1e3),
      at: Math.max(0, Number(raw.at) || 0),
      scene: typeof raw.scene === "string" ? raw.scene : "",
      turnId: typeof raw.turnId === "string" ? raw.turnId : "",
      failed: !!raw.failed,
      edited: !!raw.edited,
      pending: !!raw.pending,
      quote: normalizeQuote(raw.quote)
    };
  }
  function normalizeChat(raw) {
    if (!Array.isArray(raw)) return [];
    return raw.map(normalizeChatMessage).filter(Boolean).slice(-MAX_CHAT);
  }

  // src/services/store.js
  var KEYS = {
    settings: "fc:settings",
    session: "fc:session",
    records: "fc:records",
    tasks: "fc:tasks",
    phrases: "fc:phrases",
    logs: "fc:logs",
    chat: "fc:chat",
    chatOwner: "fc:chatOwner",
    portrait: "fc:portrait",
    meta: "fc:meta"
  };
  var DATA_VERSION = 6;
  function clone2(v) {
    if (v === void 0) return void 0;
    try {
      return JSON.parse(JSON.stringify(v));
    } catch (e) {
      return v;
    }
  }
  function createStore(host) {
    var kv = host.storage;
    return {
      async loadSettings() {
        var raw = await kv.get(KEYS.settings);
        return migrate(raw);
      },
      async saveSettings(settings) {
        await kv.set(KEYS.settings, settings);
        return settings;
      },
      async loadSession() {
        var raw = await kv.get(KEYS.session);
        if (!raw || typeof raw !== "object") return null;
        if (!raw.id || !raw.phase || !raw.status) return null;
        return raw;
      },
      async saveSession(session) {
        await kv.set(KEYS.session, session || null);
      },
      async clearSession() {
        await kv.remove(KEYS.session);
      },
      async loadRecords() {
        var raw = await kv.get(KEYS.records);
        return normalizeRecords(raw);
      },
      async saveRecords(list) {
        var safe = normalizeRecords(list);
        await kv.set(KEYS.records, safe);
        return safe;
      },
      async loadTasks() {
        var raw = await kv.get(KEYS.tasks);
        return normalizeTasks(raw);
      },
      async saveTasks(list) {
        var safe = normalizeTasks(list);
        await kv.set(KEYS.tasks, safe);
        return safe;
      },
      async loadPhrases() {
        var raw = await kv.get(KEYS.phrases);
        return normalizePhrases(raw);
      },
      async savePhrases(map) {
        var safe = normalizePhrases(map);
        await kv.set(KEYS.phrases, safe);
        return safe;
      },
      async loadLogs() {
        var raw = await kv.get(KEYS.logs);
        return normalizeApiLogs(raw);
      },
      async saveLogs(list) {
        var safe = normalizeApiLogs(list);
        await kv.set(KEYS.logs, safe);
        return safe;
      },
      async loadChat() {
        var raw = await kv.get(KEYS.chat);
        return normalizeChat(raw);
      },
      async saveChat(list) {
        var safe = normalizeChat(list);
        await kv.set(KEYS.chat, safe);
        return safe;
      },
      async loadChatOwner() {
        var raw = await kv.get(KEYS.chatOwner);
        return typeof raw === "string" ? raw : "";
      },
      async saveChatOwner(id) {
        await kv.set(KEYS.chatOwner, String(id || ""));
      },
      /** 立绘单独存一个 key：压缩后的 dataURL 可能几百 KB，不塞进 settings */
      async loadPortrait() {
        var raw = await kv.get(KEYS.portrait);
        return typeof raw === "string" ? raw : "";
      },
      async savePortrait(dataUrl) {
        var value = typeof dataUrl === "string" ? dataUrl : "";
        if (!value) await kv.remove(KEYS.portrait);
        else await kv.set(KEYS.portrait, value);
        return value;
      },
      async loadMeta() {
        var raw = await kv.get(KEYS.meta);
        var base = { dataVersion: DATA_VERSION, installedAt: Date.now(), lastExportAt: 0 };
        if (!raw || typeof raw !== "object") return base;
        return Object.assign(base, raw);
      },
      async saveMeta(meta) {
        await kv.set(KEYS.meta, meta);
      },
      async exportAll() {
        var out = {
          app: "focus-companion",
          dataVersion: DATA_VERSION,
          exportedAt: Date.now(),
          settings: await kv.get(KEYS.settings),
          records: await kv.get(KEYS.records),
          tasks: await kv.get(KEYS.tasks),
          phrases: await kv.get(KEYS.phrases),
          logs: await kv.get(KEYS.logs),
          chat: await kv.get(KEYS.chat),
          chatOwner: await kv.get(KEYS.chatOwner),
          portrait: await kv.get(KEYS.portrait),
          session: await kv.get(KEYS.session)
        };
        return clone2(out);
      },
      async importAll(payload) {
        if (!payload || payload.app !== "focus-companion") {
          throw new Error("这不是本插件导出的数据文件");
        }
        var settings = migrate(payload.settings);
        var records = normalizeRecords(payload.records);
        var tasks = normalizeTasks(payload.tasks);
        var phrases = normalizePhrases(payload.phrases);
        var logs = normalizeApiLogs(payload.logs);
        var chat = normalizeChat(payload.chat);
        var chatOwner = typeof payload.chatOwner === "string" ? payload.chatOwner : "";
        var portrait = typeof payload.portrait === "string" ? payload.portrait : "";
        await kv.set(KEYS.chatOwner, chatOwner);
        if (portrait) await kv.set(KEYS.portrait, portrait);
        else await kv.remove(KEYS.portrait);
        await kv.set(KEYS.settings, settings);
        await kv.set(KEYS.records, records);
        await kv.set(KEYS.tasks, tasks);
        await kv.set(KEYS.phrases, phrases);
        await kv.set(KEYS.logs, logs);
        await kv.set(KEYS.chat, chat);
        if (payload.session) await kv.set(KEYS.session, payload.session);
        return {
          settings,
          records,
          tasks,
          phrases,
          logs,
          chat,
          chatOwner,
          portrait
        };
      },
      async clearAll() {
        await kv.remove(KEYS.settings);
        await kv.remove(KEYS.session);
        await kv.remove(KEYS.records);
        await kv.remove(KEYS.tasks);
        await kv.remove(KEYS.phrases);
        await kv.remove(KEYS.logs);
        await kv.remove(KEYS.chat);
        await kv.remove(KEYS.chatOwner);
        await kv.remove(KEYS.portrait);
        await kv.remove(KEYS.meta);
      }
    };
  }

  // src/core/permissions.js
  var ACTION = {
    SPEAK: "speak",
    EXTEND: "extend_focus",
    MUTE: "mute_user",
    LOCK_ROOM: "lock_room"
  };
  var REASON = {
    OK: "ok",
    UNKNOWN_ACTION: "unknown_action",
    NO_SETTINGS: "no_settings",
    MODE_NOT_ALLOWED: "mode_not_allowed",
    PERMISSION_OFF: "permission_off",
    NO_SESSION: "no_session",
    NOT_RUNNING: "not_running",
    NOT_FOCUS: "not_focus",
    AMOUNT_INVALID: "amount_invalid",
    EXTEND_CAPPED: "extend_capped",
    EXTEND_EXHAUSTED: "extend_exhausted",
    ALREADY_MUTED: "already_muted",
    ALREADY_LOCKED: "already_locked"
  };
  var PERMISSION_OF = {};
  PERMISSION_OF[ACTION.SPEAK] = "respond";
  PERMISSION_OF[ACTION.EXTEND] = "extend";
  PERMISSION_OF[ACTION.MUTE] = "mute";
  PERMISSION_OF[ACTION.LOCK_ROOM] = "lockRoom";
  function permissionOf(type) {
    return PERMISSION_OF[type] || "";
  }
  function deny(reason) {
    return { ok: false, reason, ms: 0, capped: false };
  }
  function allow(ms, capped) {
    return { ok: true, reason: capped ? REASON.EXTEND_CAPPED : REASON.OK, ms: ms || 0, capped: !!capped };
  }
  function seconds(value) {
    var n = Number(value);
    return isFinite(n) && n > 0 ? n : 0;
  }
  function checkAction(input) {
    var type = input && input.type;
    var settings = input && input.settings;
    var session = input && input.session;
    var now = Number(input && input.now) || 0;
    var permission = permissionOf(type);
    if (!permission) return deny(REASON.UNKNOWN_ACTION);
    if (!settings) return deny(REASON.NO_SETTINGS);
    if (!allowsPermission(settings.focusMode, permission)) return deny(REASON.MODE_NOT_ALLOWED);
    if (!settings.permissions || !settings.permissions[permission]) return deny(REASON.PERMISSION_OFF);
    if (type === ACTION.SPEAK) return allow(0, false);
    if (!session) return deny(REASON.NO_SESSION);
    if (session.status !== STATUS.RUNNING) return deny(REASON.NOT_RUNNING);
    if (session.phase !== PHASE.FOCUS) return deny(REASON.NOT_FOCUS);
    if (type === ACTION.LOCK_ROOM) {
      if (session.locked) return deny(REASON.ALREADY_LOCKED);
      var lock = settings.lockRoom || {};
      var minLockMs = seconds(lock.minSec) * 1e3;
      var maxLockMs = seconds(lock.maxSec) * 1e3;
      var wantLockMs = seconds(input.seconds) * 1e3;
      var lockMs = wantLockMs || maxLockMs || 0;
      if (maxLockMs > 0) lockMs = Math.min(lockMs, maxLockMs);
      if (lockMs > 0 && minLockMs > 0) lockMs = Math.max(lockMs, minLockMs);
      return allow(lockMs, maxLockMs > 0 && lockMs < wantLockMs);
    }
    if (type === ACTION.MUTE) {
      if (session.mutedUntil && now < session.mutedUntil) return deny(REASON.ALREADY_MUTED);
      var maxMuteMs = seconds(settings.mute && settings.mute.maxSec) * 1e3;
      var wantMuteMs = seconds(input.seconds) * 1e3 || maxMuteMs;
      var muteMs = Math.min(wantMuteMs, maxMuteMs);
      if (muteMs <= 0) return deny(REASON.AMOUNT_INVALID);
      return allow(muteMs, muteMs < wantMuteMs);
    }
    var ext = settings.extend || {};
    var maxPerMs = seconds(ext.maxPerTimeSec) * 1e3;
    var capMs = seconds(ext.totalCapSec) * 1e3;
    var wantMs = seconds(input.seconds) * 1e3 || seconds(ext.fixedSec) * 1e3;
    if (wantMs <= 0 || maxPerMs <= 0) return deny(REASON.AMOUNT_INVALID);
    var granted = Math.min(wantMs, maxPerMs);
    var used = Math.max(0, Number(session.bonusMs) || 0);
    if (capMs > 0) {
      var left = capMs - used;
      if (left <= 0) return deny(REASON.EXTEND_EXHAUSTED);
      if (granted > left) return allow(left, true);
    }
    return allow(granted, granted < wantMs);
  }

  // src/lib/bus.js
  var EVENTS = {
    TIMER_TICK: "timer:tick",
    TIMER_COMPLETED: "timer:completed",
    TIMER_EXTENDED: "timer:extended",
    SESSION_STARTED: "session:started",
    SESSION_ENDED: "session:ended",
    SUPERVISION_REQUESTED: "supervision:requested",
    SUPERVISION_REJECTED: "supervision:rejected",
    SUPERVISION_APPLIED: "supervision:applied",
    CHARACTER_SPEAK: "character:speak",
    RECORD_SAVED: "record:saved",
    AI_FAILED: "ai:failed",
    VOICE_FAILED: "voice:failed"
  };
  function createBus() {
    var handlers = {};
    function on(type, fn) {
      if (typeof fn !== "function") return function() {
      };
      if (!handlers[type]) handlers[type] = [];
      handlers[type].push(fn);
      return function() {
        off(type, fn);
      };
    }
    function off(type, fn) {
      var list = handlers[type];
      if (!list) return;
      handlers[type] = list.filter(function(item) {
        return item !== fn;
      });
    }
    function emit(type, payload) {
      var list = handlers[type];
      if (!list || !list.length) return;
      list.slice().forEach(function(fn) {
        try {
          fn(payload);
        } catch (e) {
          if (typeof console !== "undefined" && console.warn) console.warn("[focus-companion] 事件处理失败 " + type, e);
        }
      });
    }
    function clear2() {
      handlers = {};
    }
    return { on, off, emit, clear: clear2 };
  }

  // src/services/supervisor.js
  function createSupervisor(deps) {
    var bus = deps.bus;
    var now = deps.now || function() {
      return 0;
    };
    var getSettings = deps.getSettings;
    var getSession = deps.getSession;
    var commit = deps.commit;
    function can(input) {
      return checkAction({
        type: input && input.type,
        settings: getSettings(),
        session: getSession(),
        now: now(),
        seconds: input && input.seconds
      });
    }
    function request(input) {
      var type = input && input.type;
      var source = input && input.source || "manual";
      var seconds2 = input && input.seconds;
      var at = now();
      var verdict = checkAction({
        type,
        settings: getSettings(),
        session: getSession(),
        now: at,
        seconds: seconds2
      });
      bus.emit(EVENTS.SUPERVISION_REQUESTED, { type, source, seconds: seconds2 });
      if (!verdict.ok) {
        bus.emit(EVENTS.SUPERVISION_REJECTED, { type, source, reason: verdict.reason });
        return { ok: false, type, source, reason: verdict.reason, ms: 0 };
      }
      var session = getSession();
      var next = session;
      if (type === ACTION.EXTEND) {
        next = countIntervention(addTime(session, verdict.ms, at), "extend");
        bus.emit(EVENTS.TIMER_EXTENDED, { ms: verdict.ms, bonusMs: next.bonusMs });
      } else if (type === ACTION.MUTE) {
        next = countIntervention(applyMute(session, at + verdict.ms), "mute");
      } else if (type === ACTION.LOCK_ROOM) {
        next = countIntervention(applyLock(session, verdict.ms ? at + verdict.ms : 0), "lock");
      } else if (type === ACTION.SPEAK && session) {
        next = countIntervention(session, "speak");
      }
      if (next && next !== session) commit(next);
      var result = {
        ok: true,
        type,
        source,
        reason: verdict.reason,
        ms: verdict.ms,
        capped: verdict.capped,
        session: next
      };
      if (type === ACTION.SPEAK) bus.emit(EVENTS.CHARACTER_SPEAK, { source });
      bus.emit(EVENTS.SUPERVISION_APPLIED, result);
      return result;
    }
    return { can, request };
  }

  // src/services/dialogue.js
  var PROACTIVE_NUDGE = "（没有人说话，你主动开口。）";
  var TOUCH_NUDGE = "（回应这一下触碰。）";
  function pickName(obj, fallback) {
    if (!obj) return fallback;
    return obj.handle || obj.name || fallback;
  }
  function withTimeout(promise, ms) {
    return new Promise(function(resolve) {
      var done = false;
      var timer = setTimeout(function() {
        if (done) return;
        done = true;
        resolve({ ok: false, reason: "timeout" });
      }, ms);
      promise.then(function(value) {
        if (done) return;
        done = true;
        clearTimeout(timer);
        resolve(value);
      }, function(err) {
        if (done) return;
        done = true;
        clearTimeout(timer);
        resolve({ ok: false, reason: "error", error: err });
      });
    });
  }
  function cleanup(text, scene) {
    var out = String(text || "").replace(/```[\s\S]*?```/g, "").replace(/\r\n/g, "\n").trim();
    out = out.replace(/^[^\n：:]{1,12}[：:]\s*/, "");
    out = out.replace(/\n{3,}/g, "\n\n");
    var limit = scene === "proactive" || scene === "note" || scene === "touch" ? 120 : 400;
    if (out.length > limit) out = out.slice(0, limit).trim();
    return out;
  }
  function createDialogue(deps) {
    var host = deps.host;
    var bus = deps.bus;
    var getSettings = deps.getSettings;
    var logCall = typeof deps.log === "function" ? deps.log : null;
    function narrationRule(settings) {
      return settings.chat && settings.chat.narration ? "可以写简短的动作或神态，单独占一行并用（）包住；不要长篇描写。" : "不要写动作、旁白或括号内容，只说话。";
    }
    function permissionLine(settings) {
      var p = settings.permissions || {};
      var tags = [];
      if (p.extend) tags.push("[[extend:秒数]]");
      if (p.mute) tags.push("[[mute:秒数]]");
      if (p.lockRoom) tags.push("[[lock:秒数]]");
      if (p.password) tags.push("[[password:四位数字]]");
      if (!tags.length) return "";
      return "- 需要执行动作时，在最后单独一行写：" + tags.join(" / ") + "。只有用户授权才生效，正文不要解释标签。";
    }
    function formatTemplate(settings, scene) {
      var prompts = settings.prompts || {};
      if (scene === "proactive") return prompts.formatProactive || DEFAULT_FORMAT_PROACTIVE;
      if (scene === "note") return prompts.formatNote || DEFAULT_FORMAT_NOTE;
      if (scene === "touch") return prompts.formatTouch || DEFAULT_FORMAT_TOUCH;
      return prompts.formatChat || DEFAULT_FORMAT_CHAT;
    }
    function formatRules(settings, scene) {
      var bubbleMin = Math.max(1, Number(settings.chat && settings.chat.bubbleMin) || 1);
      var bubbleMax = Math.max(bubbleMin, Number(settings.chat && settings.chat.bubbleMax) || 3);
      var text = renderPrompt(formatTemplate(settings, scene), {
        bubble_min: String(bubbleMin),
        bubble_max: String(bubbleMax),
        narration: narrationRule(settings),
        permissions: permissionLine(settings)
      });
      return text.replace(/\n{3,}/g, "\n\n").trim();
    }
    function reportLog(entry) {
      if (!logCall) return;
      try {
        logCall(entry);
      } catch (e) {
      }
    }
    function buildVars(input) {
      var settings = getSettings();
      var character = input.character || null;
      var persona = input.persona || null;
      var remaining2 = Number(input.remainingMs) || 0;
      var mem = input.memory || {};
      var combined = [mem.core, mem.long, mem.vector].filter(Boolean).join("\n");
      var vars = {
        char: pickName(character, "角色"),
        user: pickName(persona, "你"),
        char_persona: character && (character.persona || character.bio || character.description) || "（未设置）",
        user_persona: persona && (persona.persona || persona.bio) || "（未设置）",
        mode: modeLabel(settings.focusMode),
        remaining: remaining2 > 0 ? fmtClock(remaining2) : "未知",
        task: input.taskName ? "当前待办：" + input.taskName + "。" : "",
        time: fmtTime(input.now || 0),
        memory_core: mem.core || "（无）",
        memory_long: mem.long || "（无）",
        memory_short: mem.short || "（无）",
        memory_vector: mem.vector || "（无）",
        // 兼容旧提示词里的 {{memory}} / {{recent}}
        memory: combined || "（无）",
        recent: mem.short || "（无）",
        narration: narrationRule(settings),
        bubble_min: String(Math.max(1, Number(settings.chat && settings.chat.bubbleMin) || 1)),
        bubble_max: String(Math.max(
          Math.max(1, Number(settings.chat && settings.chat.bubbleMin) || 1),
          Number(settings.chat && settings.chat.bubbleMax) || 3
        )),
        permissions: permissionLine(settings),
        format: formatRules(settings, input.scene),
        history: historyMessages(input).map(function(m) {
          return (m.role === "user" ? "我：" : "角色：") + m.content;
        }).join("\n") || "（无）"
      };
      if (input.vars && typeof input.vars === "object") {
        Object.keys(input.vars).forEach(function(key) {
          vars[key] = input.vars[key];
        });
      }
      return vars;
    }
    function historyMessages(input) {
      var settings = getSettings();
      return (input.history || []).filter(function(m) {
        return m && (m.role === "user" || m.role === "char");
      }).slice(-settings.chat.historyLimit).map(function(m) {
        var content = String(m.text || "");
        if (m.quote && m.quote.text) {
          content = "（引用" + (m.quote.role === "char" ? "角色" : "我") + "：" + m.quote.text + "）\n" + content;
        }
        return {
          role: m.role === "user" ? "user" : "assistant",
          content
        };
      });
    }
    function compose(input, template) {
      var settings = getSettings();
      var system = renderPrompt(template, buildVars(input));
      var history = historyMessages(input);
      var messages = [{ role: "system", content: system }];
      var hasFormatToken = /\{\{format\}\}/.test(String(template || ""));
      var formatText = formatRules(settings, input.scene);
      if (input.scene !== "note" && !hasFormatToken && formatText) {
        messages.push({ role: "system", content: formatText });
      }
      messages = messages.concat(history);
      if (input.scene === "proactive") {
        messages.push({ role: "user", content: PROACTIVE_NUDGE });
      } else if (input.scene === "touch") {
        messages.push({ role: "user", content: TOUCH_NUDGE });
      }
      return { system, history, messages };
    }
    async function reply(input) {
      var settings = getSettings();
      if (!settings.ai.enabled) return { ok: false, reason: "ai_off" };
      if (!host.caps.ai) return { ok: false, reason: "no_api" };
      var template = input.scene === "proactive" ? settings.prompts.proactive : input.scene === "touch" ? settings.prompts.touch : settings.prompts.chat;
      var composed = compose(input, template);
      var promptTokens = estimateTokens(composed.messages.map(function(m) {
        return m.content;
      }).join("\n"));
      var startedAt = Date.now();
      var result = await withTimeout(host.ai.chat({
        messages: composed.messages,
        temperature: settings.ai.temperature
      }), settings.ai.timeoutMs);
      var elapsedMs = Date.now() - startedAt;
      if (!result.ok) {
        bus.emit(EVENTS.AI_FAILED, {
          reason: result.reason,
          scene: input.scene,
          elapsedMs
        });
        reportLog({
          at: Date.now(),
          scene: input.scene || "chat",
          ok: false,
          reason: result.reason || "error",
          elapsedMs,
          promptTokens,
          chars: composed.system.length,
          historyCount: composed.history.length
        });
        return result;
      }
      var text = cleanup(result.text, input.scene);
      if (!text) {
        reportLog({
          at: Date.now(),
          scene: input.scene || "chat",
          ok: false,
          reason: "empty",
          elapsedMs,
          promptTokens,
          chars: composed.system.length,
          historyCount: composed.history.length
        });
        return { ok: false, reason: "empty" };
      }
      bus.emit(EVENTS.CHARACTER_SPEAK, {
        scene: input.scene,
        text,
        elapsedMs
      });
      reportLog({
        at: Date.now(),
        scene: input.scene || "chat",
        ok: true,
        reason: "",
        elapsedMs,
        promptTokens,
        completionTokens: estimateTokens(text),
        chars: composed.system.length,
        historyCount: composed.history.length,
        model: result.model || ""
      });
      return { ok: true, text };
    }
    async function note(input) {
      var settings = getSettings();
      if (!settings.notes || !settings.notes.enabled) return { ok: false, reason: "notes_off" };
      if (!settings.ai.enabled) return { ok: false, reason: "ai_off" };
      if (!host.caps.ai) return { ok: false, reason: "no_api" };
      var vars = {
        char: pickName(input.character, "角色"),
        user: pickName(input.persona, "你"),
        task: input.taskName ? "待办：" + input.taskName + "。" : "",
        minutes: String(Math.max(1, Math.round((Number(input.actualMs) || 0) / 6e4))),
        mode: modeLabel(settings.focusMode),
        bonus: input.bonusMs ? "角色加时 " + Math.round(input.bonusMs / 6e4) + " 分钟。" : "",
        format: formatRules(settings, "note")
      };
      var system = renderPrompt(settings.notes.prompt, vars);
      var messages = [{ role: "system", content: system }];
      if (!/\{\{format\}\}/.test(String(settings.notes.prompt || "")) && vars.format) {
        messages.push({ role: "system", content: vars.format });
      }
      messages.push({ role: "user", content: "写这张便签。" });
      var promptTokens = estimateTokens(messages.map(function(m) {
        return m.content;
      }).join("\n"));
      var startedAt = Date.now();
      var result = await withTimeout(host.ai.chat({
        messages,
        temperature: Math.min(1.2, settings.ai.temperature + 0.1)
      }), settings.ai.timeoutMs);
      var elapsedMs = Date.now() - startedAt;
      if (!result.ok) {
        bus.emit(EVENTS.AI_FAILED, { reason: result.reason, scene: "note" });
        reportLog({
          at: Date.now(),
          scene: "note",
          ok: false,
          reason: result.reason || "error",
          elapsedMs,
          promptTokens,
          chars: system.length,
          historyCount: 0
        });
        return result;
      }
      var text = cleanup(result.text, "note");
      if (!text) {
        reportLog({
          at: Date.now(),
          scene: "note",
          ok: false,
          reason: "empty",
          elapsedMs,
          promptTokens,
          chars: system.length,
          historyCount: 0
        });
        return { ok: false, reason: "empty" };
      }
      bus.emit(EVENTS.CHARACTER_SPEAK, { scene: "note", text });
      reportLog({
        at: Date.now(),
        scene: "note",
        ok: true,
        reason: "",
        elapsedMs,
        promptTokens,
        completionTokens: estimateTokens(text),
        chars: system.length,
        historyCount: 0,
        model: result.model || ""
      });
      return { ok: true, text };
    }
    function preview(input) {
      var settings = getSettings();
      var template = typeof input.template === "string" ? input.template : input.scene === "proactive" ? settings.prompts.proactive : settings.prompts.chat;
      var composed = compose(input, template);
      var systemTokens = estimateTokens(composed.system);
      var historyTokens = estimateTokens(composed.history.map(function(m) {
        return m.content;
      }).join("\n"));
      var totalTokens = estimateTokens(composed.messages.map(function(m) {
        return m.content;
      }).join("\n"));
      return {
        system: composed.system,
        messages: composed.messages,
        chars: composed.system.length,
        systemTokens,
        historyTokens,
        historyCount: composed.history.length,
        totalTokens,
        vars: buildVars(input)
      };
    }
    return { reply, note, preview, buildVars };
  }

  // src/core/aiActions.js
  var ACTION_RE = /\[\[\s*(extend|mute|lock|password)\s*(?::\s*([^\]]{0,40}))?\s*\]\]/gi;
  function extractActions(text) {
    var actions = [];
    var clean = String(text === void 0 || text === null ? "" : text).replace(ACTION_RE, function(_, type, arg) {
      actions.push({
        type: String(type).toLowerCase(),
        arg: String(arg === void 0 || arg === null ? "" : arg).trim()
      });
      return "";
    });
    clean = clean.replace(/[ \t]+\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim();
    return { text: clean, actions };
  }
  function splitBubbles(text, max) {
    var limit = Math.max(1, Number(max) || 3);
    return String(text === void 0 || text === null ? "" : text).replace(/\r\n/g, "\n").split(/\s*\|\|\|\s*|\n+/).map(function(s) {
      return s.trim();
    }).filter(function(s) {
      if (!s) return false;
      return !/^[（(]\s*[）)]$/.test(s);
    }).slice(0, limit);
  }

  // src/ui/sound.js
  var ctxRef = null;
  function beep(kind) {
    try {
      var AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      if (!ctxRef) ctxRef = new AC();
      if (ctxRef.state === "suspended" && ctxRef.resume) ctxRef.resume();
      var now = ctxRef.currentTime;
      var notes = kind === "break" ? [523.25, 659.25] : [659.25, 880];
      notes.forEach(function(freq, i) {
        var osc = ctxRef.createOscillator();
        var gain = ctxRef.createGain();
        osc.type = "sine";
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(1e-4, now + i * 0.16);
        gain.gain.exponentialRampToValueAtTime(0.18, now + i * 0.16 + 0.02);
        gain.gain.exponentialRampToValueAtTime(1e-4, now + i * 0.16 + 0.22);
        osc.connect(gain);
        gain.connect(ctxRef.destination);
        osc.start(now + i * 0.16);
        osc.stop(now + i * 0.16 + 0.24);
      });
    } catch (e) {
    }
  }
  function disposeAudio() {
    if (ctxRef && ctxRef.close) {
      try {
        ctxRef.close();
      } catch (e) {
      }
      ctxRef = null;
    }
  }

  // src/lib/mt.js
  var STRINGS = {
    restoredDone: "上次的专注在你离开期间已结束，已记录。",
    skipTitle: "跳过本次专注",
    skipMessage: "当前专注会记为未完成，已专注的时间仍会保存。",
    skipConfirm: "跳过",
    finishTitle: "结束本次专注",
    finishMessage: "结束后会记录本次已专注的时长，确定要结束吗？",
    focusDoneTitle: "专注完成",
    focusDoneBody: "这段时间辛苦了，休息一下。",
    breakDoneTitle: "休息结束",
    breakDoneBody: "准备好就继续下一轮。",
    noRecord: "这一天没有专注记录",
    importOk: "数据已导入",
    importBad: "导入失败：文件格式不对",
    exportOk: "已导出备份文件",
    exportBad: "导出失败",
    clearWarn: "清空后，本机的专注记录与设置都会删除，确定继续？",
    clearDone: "已清空",
    // 模式
    modeLocked: "专注进行中，结束后再切换模式",
    modeSwitched: "已切换模式",
    // 角色
    charListEmpty: "宿主里还没有角色，B/C 模式会先用占位称呼",
    charPicked: "已选择角色",
    charNone: "未绑定角色",
    // 聊天 / AI
    aiOff: "AI 已关闭，可在设置里开启",
    noAiApi: "宿主没有提供 AI 接口",
    waitMute: "等倒计时结束",
    promptSaved: "提示词已保存",
    chatEmpty: "说点什么吧",
    // 锁房间
    lockTitle: "锁房间",
    lockMessage: "角色会锁住房门，直到本次专注结束。你随时可以紧急退出。",
    lockStarted: "房间已锁上",
    emergencyTitle: "紧急退出",
    emergencyMessage: "会立即结束本次专注，并记为提前结束。确定退出吗？",
    emergencyDone: "已退出锁房间"
  };
  var REASONS = {
    ok: "",
    unknown_action: "这个动作不可用",
    no_settings: "设置还没加载好",
    mode_not_allowed: "当前模式不支持这个动作",
    permission_off: "该监督权限未开启",
    no_session: "还没有开始专注",
    not_running: "计时没有在运行",
    not_focus: "只有专注阶段可以这样做",
    amount_invalid: "时长无效",
    extend_capped: "已按上限加时",
    extend_exhausted: "累计加时额度已用完",
    already_muted: "已经处于禁言中",
    already_locked: "房间已经锁上了",
    declined: "已取消"
  };
  function mt() {
    return STRINGS;
  }
  function reasonText(reason) {
    if (!reason) return "";
    return REASONS[reason] || "这个动作被拒绝了";
  }

  // src/app/container.js
  var TICK_MS = 1e3;
  var CHAT_LIMIT = 60;
  function createState(initial) {
    var state = initial;
    var subs = /* @__PURE__ */ new Set();
    return {
      get: function() {
        return state;
      },
      set: function(patch) {
        var keys = Object.keys(patch);
        state = Object.assign({}, state, patch);
        subs.forEach(function(fn) {
          try {
            fn(state, keys);
          } catch (e) {
            console.error("[focus-companion] 状态更新失败", e);
          }
        });
      },
      subscribe: function(fn) {
        subs.add(fn);
        return function() {
          subs.delete(fn);
        };
      },
      clearSubs: function() {
        subs.clear();
      }
    };
  }
  function pickLine(kind) {
    var list = linesFor(kind);
    if (!list.length) return "";
    return list[Math.floor(Math.random() * list.length)];
  }
  function minutesText(ms) {
    var min = Math.round(ms / 6e4);
    return min < 1 ? "不到 1 分钟" : min + " 分钟";
  }
  function aiFailText(reason) {
    if (reason === "timeout") return "角色走神了（超时），先用备用台词";
    if (reason === "no_api") return "宿主没有提供 AI 接口";
    if (reason === "ai_off") return "AI 已关闭";
    if (reason === "empty") return "角色没说出话";
    return "AI 调用失败，先用备用台词";
  }
  async function createApp(opts) {
    var host = createHost(opts.roche);
    var store = createStore(host);
    var bus = createBus();
    var settings = await store.loadSettings();
    var records = await store.loadRecords();
    var tasks = await store.loadTasks();
    var phrases = await store.loadPhrases();
    var apiLogs = await store.loadLogs();
    var savedChat = await store.loadChat();
    var savedChatOwner = await store.loadChatOwner();
    var portrait = await store.loadPortrait();
    var meta = await store.loadMeta();
    var rawSession = await store.loadSession();
    var now = Date.now();
    if (!meta.ai || typeof meta.ai !== "object") meta.ai = { day: "", count: 0 };
    if (typeof meta.ai.day !== "string") meta.ai.day = "";
    if (!isFinite(Number(meta.ai.count))) meta.ai.count = 0;
    var session = rawSession ? restore(normalizeSession(rawSession), now) : null;
    var selectedTaskId = "";
    var activeAtLoad = session && session.characterId || settings.characterId;
    if (savedChatOwner && activeAtLoad && savedChatOwner !== activeAtLoad) savedChat = [];
    if (!savedChatOwner && activeAtLoad) {
      savedChatOwner = activeAtLoad;
      store.saveChatOwner(savedChatOwner);
    }
    var state = createState({
      route: "focus",
      // 重开插件先回到首页；点「进行中」再按默认页进计时/聊天
      focusScreen: "list",
      now,
      settings,
      session,
      records,
      tasks,
      phrases,
      apiLogs,
      selectedTaskId: "",
      chat: savedChat,
      portrait,
      touchFeedback: null,
      touchBusy: false,
      unreadChat: 0,
      pendingChat: 0,
      lastSupervision: null,
      calendar: { year: new Date(now).getFullYear(), month: new Date(now).getMonth() }
    });
    var timer = null;
    var destroyed = false;
    var charCtx = { id: "", character: null, persona: null };
    function emptyMemory(loaded) {
      return { core: "", long: "", short: "", vector: "", vectorFromSearch: false, loaded: !!loaded };
    }
    var memCtx = emptyMemory(false);
    var aiState = { busy: false, lastAt: 0, lastActiveAt: now, lastProactiveAt: 0 };
    var pendingRound = { sessions: [] };
    var tapLog = {};
    var dialogue = createDialogue({
      host,
      bus,
      getSettings: function() {
        var cur = state.get().session;
        return Object.assign({}, settings, { focusMode: cur && cur.mode || settings.focusMode });
      },
      log: function(entry) {
        apiLogs = appendApiLog(apiLogs, entry);
        state.set({ apiLogs });
        store.saveLogs(apiLogs);
      }
    });
    function selectedTask() {
      return findTask(tasks, selectedTaskId);
    }
    function newIdle(phase, round, charId, charName, mode) {
      var task = phase === PHASE.FOCUS ? selectedTask() : null;
      return createSession({
        phase,
        round,
        plannedMs: phaseDurationMs(settings, phase),
        mode: mode || settings.focusMode,
        characterId: charId !== void 0 ? charId : settings.characterId,
        characterName: charName !== void 0 ? charName : settings.characterName,
        taskId: task ? task.id : "",
        taskName: task ? task.title : ""
      });
    }
    function activeCharacterId() {
      var s = state.get().session;
      return s && s.characterId || settings.characterId;
    }
    function activeMode() {
      var s = state.get().session;
      return s && s.mode || settings.focusMode;
    }
    function persistSession(next) {
      state.set({ session: next });
      store.saveSession(next);
    }
    function ensureIdleSession() {
      var s = state.get().session;
      if (!s) {
        persistSession(newIdle(PHASE.FOCUS, 1));
        return state.get().session;
      }
      if (s.status === STATUS.DONE) {
        persistSession(newIdle(PHASE.FOCUS, s.round, s.characterId, s.characterName, s.mode));
        return state.get().session;
      }
      return s;
    }
    function saveRecordFrom(s) {
      var transcript = (state.get().chat || []).filter(function(m) {
        return m && m.text && (m.role === "user" || m.role === "char");
      }).slice(-20).map(function(m) {
        return { role: m.role, text: String(m.text).slice(0, 160), at: m.at };
      });
      var record = makeRecord({
        session: s,
        now: s.completedAt || Date.now(),
        transcript
      });
      if (record.actualMs < 6e4) return null;
      records = insertRecord(records, record);
      state.set({ records });
      store.saveRecords(records);
      if (record.completed && record.taskId) {
        tasks = incrementTaskPomodoro(tasks, record.taskId);
        state.set({ tasks });
        store.saveTasks(tasks);
      }
      bus.emit(EVENTS.RECORD_SAVED, { record });
      return record;
    }
    function saveRoundRecord(sessions) {
      if (!sessions || !sessions.length) return null;
      var transcript = (state.get().chat || []).filter(function(m) {
        return m && m.text && (m.role === "user" || m.role === "char");
      }).slice(-20).map(function(m) {
        return { role: m.role, text: String(m.text).slice(0, 160), at: m.at };
      });
      var record = makeRoundRecord({ sessions, transcript });
      if (!record || record.actualMs < 6e4) return null;
      records = insertRecord(records, record);
      state.set({ records });
      store.saveRecords(records);
      if (record.completed && record.taskId) {
        tasks = incrementTaskPomodoro(tasks, record.taskId, record.pomodoros);
        state.set({ tasks });
        store.saveTasks(tasks);
      }
      bus.emit(EVENTS.RECORD_SAVED, { record });
      return record;
    }
    function maybeWriteNote(record) {
      if (!record || !settings.notes.enabled) return;
      if (!settings.ai.enabled || !host.caps.ai) return;
      if (aiQuotaLeft() <= 0) return;
      markAiUse();
      var prepare = activeCharacterId() && charCtx.id !== activeCharacterId() ? refreshCharacterContext() : Promise.resolve();
      prepare.then(function() {
        return dialogue.note({
          character: charCtx.character,
          persona: charCtx.persona,
          taskName: record.taskName,
          actualMs: record.actualMs,
          bonusMs: record.bonusMs,
          now: Date.now()
        });
      }).then(function(res) {
        if (!res || !res.ok) return;
        records = updateRecord(records, record.id, {
          note: res.text,
          noteAt: Date.now(),
          noteSource: "char",
          styleId: pickNoteStyleFor(settings).id
        });
        state.set({ records });
        store.saveRecords(records);
      }, function() {
      });
    }
    function roomPasswordForStart(charId) {
      if (!settings.room.enabled) return "";
      if (settings.room.letCharSet && charId) {
        return String(Math.floor(1e3 + Math.random() * 9e3));
      }
      return /^\d{4,8}$/.test(settings.room.password) ? settings.room.password : "";
    }
    function clearChatState() {
      savedChat = [];
      savedChatOwner = "";
      state.set({ chat: [], unreadChat: 0, pendingChat: 0 });
      store.saveChat([]);
      store.saveChatOwner("");
    }
    function startPhase(phase, round, keepChat, roundEnd) {
      var prev = state.get().session;
      if (phase === PHASE.FOCUS && !keepChat) {
        clearChatState();
        pendingRound = { sessions: [] };
      }
      var charId = prev && prev.characterId || settings.characterId;
      var charName = prev && prev.characterName || settings.characterName;
      var mode = prev && prev.mode || settings.focusMode;
      var s = start(newIdle(phase, round, charId, charName, mode), Date.now());
      if (roundEnd) s = Object.assign({}, s, { roundEnd: true });
      var roomCode = "";
      if (phase === PHASE.FOCUS) {
        if (savedChatOwner && charId && savedChatOwner !== charId) {
          state.set({ chat: [], unreadChat: 0, pendingChat: 0 });
          savedChat = [];
          savedChatOwner = charId;
          store.saveChat([]);
          store.saveChatOwner(charId);
        } else if (!savedChatOwner && charId) {
          savedChatOwner = charId;
          store.saveChatOwner(charId);
        }
        roomCode = roomPasswordForStart(s.characterId);
        if (roomCode) {
          s = Object.assign({}, s, {
            roomPassword: roomCode,
            passwordGenerated: !!settings.room.letCharSet,
            passwordAttempts: 0
          });
        }
      }
      persistSession(s);
      if (timer) {
        clearInterval(timer);
        timer = setInterval(tick, TICK_MS);
      }
      aiState.lastActiveAt = Date.now();
      aiState.lastProactiveAt = 0;
      bus.emit(EVENTS.SESSION_STARTED, { session: s });
      if (roomCode && settings.room.letCharSet) {
        pushChat({ role: "system", text: "角色把房间密码设成了 " + roomCode });
      }
      var mins = Math.max(1, Math.round(phaseDurationMs(settings, phase) / 6e4));
      pushChat({
        role: "system",
        text: (phase === PHASE.FOCUS ? "专注开始 · " : "休息开始 · ") + mins + " 分钟"
      });
      if (phase === PHASE.FOCUS) enterAfterStart();
      return s;
    }
    function completeRound(extraSessions) {
      var sessions = pendingRound.sessions.concat(extraSessions || []);
      var record = saveRoundRecord(sessions);
      pendingRound = { sessions: [] };
      var idle = newIdle(PHASE.FOCUS, 1, settings.characterId, settings.characterName, settings.focusMode);
      persistSession(idle);
      stopTicker();
      clearChatState();
      state.set({ focusScreen: "timer", now: Date.now() });
      if (record) {
        host.ui.toast("本轮完成 · " + record.pomodoros + " 个专注 · " + Math.round(record.actualMs / 6e4) + " 分钟");
        if (record.completed) maybeWriteNote(record);
      } else {
        host.ui.toast("本轮结束");
      }
      return record;
    }
    function endRoundNow() {
      var s = state.get().session;
      var extra = [];
      if (s && (s.status === STATUS.RUNNING || s.status === STATUS.PAUSED)) {
        var done = abort(s, Date.now());
        done = clearLock(clearMute(done));
        extra.push(done);
        bus.emit(EVENTS.TIMER_COMPLETED, { session: done, natural: false });
        bus.emit(EVENTS.SESSION_ENDED, { session: done });
      }
      return completeRound(extra);
    }
    function advance(s) {
      var next = nextPhase(settings, s.phase, s.round, s.roundEnd);
      if (next.endRound) {
        completeRound();
        return;
      }
      var shouldAuto = s.phase === PHASE.FOCUS ? settings.autoStartBreak : settings.autoStartFocus;
      if (shouldAuto) {
        startPhase(next.phase, next.round, true, next.roundEnd);
      } else {
        var idleNext = newIdle(next.phase, next.round, s.characterId, s.characterName, s.mode);
        if (next.phase === PHASE.FOCUS) idleNext = Object.assign({}, idleNext, { keepChatNext: true });
        if (next.roundEnd) idleNext = Object.assign({}, idleNext, { roundEnd: true });
        persistSession(idleNext);
        stopTicker();
        var mins = Math.max(1, Math.round(phaseDurationMs(settings, next.phase) / 6e4));
        pushChat({
          role: "system",
          text: (next.phase === PHASE.FOCUS ? "专注开始 · " : "休息开始 · ") + mins + " 分钟"
        });
      }
      state.set({ now: Date.now() });
    }
    function onPhaseFinished(natural) {
      var s = state.get().session;
      if (!s || s.status === STATUS.DONE) return;
      var at = Date.now();
      var done = natural ? complete(s, at) : abort(s, at);
      done = clearLock(clearMute(done));
      if (s.phase === PHASE.FOCUS) {
        if (settings.soundOn) beep("focus");
        pendingRound.sessions.push(done);
        var per = Math.max(1, Number(settings.roundsPerLongBreak) || 1);
        if (s.round >= per) {
          pushChat({ role: "system", text: "最后一个专注结束，进入最终休息；休息结束本轮完成" });
          host.ui.toast("最后一个专注结束，休息后本轮完成");
        } else {
          pushChat({ role: "system", text: "第 " + s.round + "/" + per + " 个专注结束，休息后继续；整轮结束才写记录" });
          host.ui.toast("第 " + s.round + "/" + per + " 个专注结束");
        }
      } else {
        if (settings.soundOn) beep("break");
        if (s.roundEnd) {
          bus.emit(EVENTS.TIMER_COMPLETED, { session: done, natural: !!natural });
          bus.emit(EVENTS.SESSION_ENDED, { session: done });
          completeRound();
          return;
        }
        pushChat({ role: "system", text: "休息结束" });
      }
      bus.emit(EVENTS.TIMER_COMPLETED, { session: done, natural: !!natural });
      bus.emit(EVENTS.SESSION_ENDED, { session: done });
      advance(done);
    }
    function tick() {
      if (destroyed) return;
      var s = state.get().session;
      var t = Date.now();
      if (s) {
        var cleared = clearExpiredMute(s, t);
        if (cleared !== s) persistSession(cleared);
      }
      if (s && isLockExpired(s, t)) {
        persistSession(clearLock(s));
        host.ui.toast("锁房间时间到了");
      }
      if (s && s.status === STATUS.RUNNING && isExpired(s, t)) {
        onPhaseFinished(true);
        return;
      }
      state.set({ now: t });
      maybeProactive(t);
    }
    function stopTicker() {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    }
    function applyTheme(theme) {
      if (opts.container) opts.container.setAttribute("data-theme", theme === "dark" ? "dark" : "light");
    }
    function screenAfterStart() {
      var s = state.get().session;
      var isFocus = s && s.phase === PHASE.FOCUS;
      return isFocus && settings.startScreen === "chat" ? "chat" : "timer";
    }
    function enterAfterStart() {
      var next = screenAfterStart();
      if (next === "chat") {
        state.set({ unreadChat: 0 });
        if (!memCtx.loaded) refreshMemoryContext();
      }
      state.set({ focusScreen: next });
    }
    function applySettings(patch) {
      settings = patchSettings(settings, patch);
      state.set({ settings });
      store.saveSettings(settings);
      if (patch && patch.theme) applyTheme(settings.theme);
      var cur = state.get().session;
      if (cur && cur.status === STATUS.IDLE) {
        persistSession(newIdle(cur.phase, cur.round, cur.characterId, cur.characterName, cur.mode));
      }
    }
    async function refreshCharacterContext() {
      var charId = activeCharacterId();
      if (!charId || !host.caps.character) {
        charCtx = { id: "", character: null, persona: null };
        return charCtx;
      }
      var character = await host.character.get(charId);
      if (!character) {
        var list = await host.character.list();
        character = list.filter(function(c) {
          return c.id === charId;
        })[0] || null;
      }
      var persona = character ? await host.persona.forConversation(character.conversationId) : null;
      charCtx = { id: charId, character, persona };
      memCtx = emptyMemory(false);
      refreshMemoryContext();
      return charCtx;
    }
    function formatMemoryCore(raw) {
      if (!raw || typeof raw !== "object") return "";
      var core = raw.core;
      if (!core) return "";
      var text = typeof core === "string" ? core : core.summary || core.text || core.content;
      return text ? String(text).slice(0, 800) : "";
    }
    function formatMemoryLong(raw) {
      if (!raw || typeof raw !== "object") return "";
      var facts = Array.isArray(raw.facts) ? raw.facts.slice(0, 12) : [];
      return facts.map(function(f) {
        var text = f && (f.summaryText || f.summary || f.text || f.content);
        return text ? "· " + String(text).slice(0, 120) : "";
      }).filter(Boolean).join("\n").slice(0, 1200);
    }
    function formatMemoryVector(raw) {
      if (!raw || !Array.isArray(raw.vectors)) return "";
      return raw.vectors.slice(0, 8).map(function(v) {
        var text = v && (v.summaryText || v.summary || v.text || v.content);
        return text ? "· " + String(text).slice(0, 120) : "";
      }).filter(Boolean).join("\n").slice(0, 900);
    }
    function formatMemoryShort(list) {
      if (!Array.isArray(list)) return "";
      return list.slice(-8).map(function(m) {
        var who = m.senderName || m.senderHandle || (m.senderId === "me" ? "我" : "对方");
        var text = String(m.text || "").replace(/\s+/g, " ").slice(0, 80);
        return who + "：" + text;
      }).join("\n").slice(0, 900);
    }
    var memoryPending = null;
    function refreshMemoryContext() {
      if (memoryPending) return memoryPending;
      if (!charCtx.character || !charCtx.character.conversationId) {
        memCtx = emptyMemory(true);
        return Promise.resolve(memCtx);
      }
      var cid = charCtx.character.conversationId;
      var prevVector = memCtx.vectorFromSearch ? memCtx.vector : "";
      memoryPending = Promise.all([host.memory.longTerm(cid), host.memory.shortTerm(cid, 8)]).then(function(results) {
        memCtx = {
          core: formatMemoryCore(results[0]),
          long: formatMemoryLong(results[0]),
          short: formatMemoryShort(results[1]),
          vector: prevVector || formatMemoryVector(results[0]),
          vectorFromSearch: !!prevVector,
          loaded: true
        };
        memoryPending = null;
        return memCtx;
      }, function() {
        memCtx = emptyMemory(true);
        memoryPending = null;
        return memCtx;
      });
      return memoryPending;
    }
    function aiQuotaLeft() {
      var today = dayKey(Date.now());
      if (meta.ai.day !== today) {
        meta.ai = { day: today, count: 0 };
        store.saveMeta(meta);
      }
      return Math.max(0, settings.ai.dailyLimit - (Number(meta.ai.count) || 0));
    }
    function markAiUse() {
      meta.ai.count = (Number(meta.ai.count) || 0) + 1;
      meta.ai.day = dayKey(Date.now());
      store.saveMeta(meta);
    }
    function applyAiActions(actionsList) {
      if (!actionsList || !actionsList.length) return;
      var current = state.get().settings;
      actionsList.slice(0, 3).forEach(function(action) {
        if (action.type === "password") {
          if (!current.permissions.password || !allows(activeMode(), "bindCharacter")) return;
          var code = String(action.arg || "").replace(/\D/g, "");
          if (!/^\d{4,8}$/.test(code)) return;
          var currentSession = state.get().session;
          if (!currentSession || currentSession.status !== STATUS.RUNNING || currentSession.phase !== PHASE.FOCUS) return;
          persistSession(Object.assign({}, currentSession, {
            roomPassword: code,
            passwordAttempts: 0,
            passwordGenerated: false
          }));
          pushChat({ role: "system", text: "角色把房间密码改成了 " + code });
          var entry = {
            type: "password",
            ok: true,
            reason: "ok",
            ms: 0,
            line: "房间密码已更新",
            at: Date.now()
          };
          state.set({ lastSupervision: entry, now: entry.at });
          host.ui.toast("房间密码已更新");
          return;
        }
        var type = action.type === "extend" ? ACTION.EXTEND : action.type === "mute" ? ACTION.MUTE : action.type === "lock" ? ACTION.LOCK_ROOM : "";
        if (!type) return;
        var permission = type === ACTION.EXTEND ? "extend" : type === ACTION.MUTE ? "mute" : "lockRoom";
        if (!current.permissions[permission]) return;
        var seconds2 = Number(String(action.arg || "").replace(/[^\d]/g, ""));
        actions.requestSupervision(type, {
          seconds: seconds2 > 0 ? seconds2 : void 0,
          source: "ai_decision",
          skipConfirm: true,
          silent: true
        });
      });
    }
    function consumeAiReply(text) {
      var parsed = extractActions(text);
      var turnId = "t_" + Date.now().toString(36) + Math.random().toString(36).slice(2, 5);
      splitBubbles(parsed.text, settings.chat.bubbleMax).forEach(function(line) {
        pushChat({ role: "char", text: line, at: Date.now(), turnId });
      });
      applyAiActions(parsed.actions);
    }
    function pushChat(message) {
      var entry = Object.assign({
        id: "m_" + Date.now().toString(36) + Math.random().toString(36).slice(2, 5)
      }, message);
      var next = state.get().chat.concat([entry]);
      if (next.length > CHAT_LIMIT) next = next.slice(next.length - CHAT_LIMIT);
      store.saveChat(next);
      var screen = state.get().focusScreen;
      var patch = { chat: next };
      if (message.role === "char" && screen !== "chat" && screen !== "chatSettings") {
        patch.unreadChat = (Number(state.get().unreadChat) || 0) + 1;
      }
      state.set(patch);
      var owner = activeCharacterId();
      if (owner && owner !== savedChatOwner) {
        savedChatOwner = owner;
        store.saveChatOwner(owner);
      }
    }
    function markPendingAnswered() {
      var chat = state.get().chat || [];
      var changed = false;
      var next = chat.map(function(m) {
        if (m.role !== "user" || !m.pending) return m;
        changed = true;
        return Object.assign({}, m, { pending: false });
      });
      if (changed) state.set({ chat: next });
    }
    function chatAllowed() {
      return allows(activeMode(), "freeChat") && settings.ai.enabled && host.caps.ai;
    }
    function chatSessionReady(s) {
      if (!s) return false;
      if (s.status === STATUS.RUNNING || s.status === STATUS.PAUSED) return true;
      return s.phase === PHASE.SHORT || s.phase === PHASE.LONG;
    }
    function fallbackLine() {
      if (!settings.chat.fallback) return "";
      var key = activeCharacterId();
      var custom = phrases[key] || [];
      var list = custom.length ? custom : FALLBACK_LINES;
      return pickFrom(list, Math.random() * 1e3);
    }
    async function askCharacter(scene) {
      if (activeCharacterId() && charCtx.id !== activeCharacterId()) {
        await refreshCharacterContext();
      }
      if (!memCtx.loaded) await refreshMemoryContext();
      if (charCtx.character && host.caps.memorySearch) {
        var chat = state.get().chat;
        var lastUserText = "";
        for (var i = chat.length - 1; i >= 0; i--) {
          if (chat[i].role === "user") {
            lastUserText = chat[i].text;
            break;
          }
        }
        if (lastUserText) {
          var hits = await host.memory.search(charCtx.character.conversationId, lastUserText, 5);
          if (hits.length) {
            memCtx = Object.assign({}, memCtx, {
              vector: formatMemoryVector({ vectors: hits }),
              vectorFromSearch: true
            });
          }
        }
      }
      var s = state.get().session;
      var result = await dialogue.reply({
        scene,
        character: charCtx.character,
        persona: charCtx.persona,
        memory: memCtx,
        history: state.get().chat,
        remainingMs: s ? remaining(s, Date.now()) : 0,
        taskName: s ? s.taskName : "",
        now: Date.now()
      });
      return result;
    }
    async function runProactive(manual) {
      var at = Date.now();
      var s = state.get().session;
      if (!chatAllowed()) {
        if (manual) host.ui.toast(!settings.ai.enabled ? mt().aiOff : mt().noAiApi);
        return { ok: false, reason: "not_allowed" };
      }
      if (!s || s.status !== STATUS.RUNNING || s.phase !== PHASE.FOCUS) {
        if (manual) host.ui.toast("专注进行中才能让角色开口");
        return { ok: false, reason: "not_running" };
      }
      if (s.locked) {
        if (manual) host.ui.toast("锁房间中，角色不会主动说话");
        return { ok: false, reason: "locked" };
      }
      if (isMuted(s, at)) {
        if (manual) host.ui.toast("禁言中，" + mt().waitMute);
        return { ok: false, reason: "muted" };
      }
      if (aiState.busy) {
        if (manual) host.ui.toast("角色还在回复");
        return { ok: false, reason: "busy" };
      }
      if (aiQuotaLeft() <= 0) {
        if (manual) host.ui.toast("今天的 AI 次数已用完");
        return { ok: false, reason: "quota" };
      }
      aiState.busy = true;
      aiState.lastAt = at;
      aiState.lastProactiveAt = at;
      markAiUse();
      state.set({ aiBusy: true });
      var res = await askCharacter("proactive");
      aiState.busy = false;
      state.set({ aiBusy: false });
      if (res.ok) {
        consumeAiReply(res.text);
        aiState.lastActiveAt = Date.now();
      } else if (manual) {
        var fallback = fallbackLine();
        if (fallback) pushChat({ role: "char", text: fallback, at: Date.now(), failed: true });
        host.ui.toast(aiFailText(res.reason));
      }
      return res;
    }
    function maybeProactive(at) {
      if (!settings.chat.proactive) return;
      if (!chatAllowed()) return;
      if (Number(state.get().pendingChat) > 0) return;
      var s = state.get().session;
      if (!s || s.status !== STATUS.RUNNING || s.phase !== PHASE.FOCUS) return;
      if (s.locked) return;
      if (isMuted(s, at)) return;
      if (aiState.busy) return;
      if (at - aiState.lastActiveAt < settings.chat.idleSeconds * 1e3) return;
      if (aiState.lastProactiveAt && at - aiState.lastProactiveAt < settings.chat.minIntervalSeconds * 1e3) return;
      if (aiQuotaLeft() <= 0) return;
      runProactive(false);
    }
    var supervisor = createSupervisor({
      bus,
      now: function() {
        return Date.now();
      },
      getSettings: function() {
        var cur = state.get().session;
        return Object.assign({}, settings, { focusMode: cur && cur.mode || settings.focusMode });
      },
      getSession: function() {
        return state.get().session;
      },
      commit: function(next) {
        persistSession(next);
      }
    });
    refreshCharacterContext();
    if (tasks.length) {
      var resumed = session && session.taskId ? findTask(tasks, session.taskId) : null;
      var firstPending = pendingTasks(tasks)[0];
      if (resumed && !resumed.done) selectedTaskId = resumed.id;
      else selectedTaskId = firstPending ? firstPending.id : "";
      state.set({ selectedTaskId });
    }
    if (session && session.status === STATUS.DONE && session.restoreFinished && session.phase === PHASE.FOCUS) {
      var restoredRecord = saveRoundRecord([session]);
      if (restoredRecord) maybeWriteNote(restoredRecord);
      session = newIdle(PHASE.FOCUS, 1, settings.characterId, settings.characterName, settings.focusMode);
      store.saveSession(session);
      state.set({ session, records });
      host.ui.toast(mt().restoredDone);
    } else if (session && session.status === STATUS.DONE) {
      session = newIdle(PHASE.FOCUS, session.round);
      store.saveSession(session);
      state.set({ session });
    }
    if (session && session.status === STATUS.RUNNING) {
      timer = setInterval(tick, TICK_MS);
    }
    var actions = {
      toggle: function() {
        var s = state.get().session;
        var t = Date.now();
        if (!s || s.status === STATUS.DONE) {
          startPhase(PHASE.FOCUS, 1, false);
          timer = timer || setInterval(tick, TICK_MS);
          state.set({ now: t });
          return;
        }
        if (s.status === STATUS.IDLE) {
          if (s.phase === PHASE.FOCUS && !s.keepChatNext) {
            clearChatState();
            pendingRound = { sessions: [] };
          }
          timer = timer || setInterval(tick, TICK_MS);
          var started = start(Object.assign({}, s, { keepChatNext: false }), t);
          persistSession(started);
          aiState.lastActiveAt = t;
          bus.emit(EVENTS.SESSION_STARTED, { session: started });
          if (started.phase === PHASE.FOCUS) {
            pushChat({ role: "system", text: "专注开始 · " + Math.round((Number(started.plannedMs) || 0) / 6e4) + " 分钟" });
          }
          enterAfterStart();
        } else if (s.status === STATUS.RUNNING) {
          persistSession(pause(s, t));
          stopTicker();
          state.set({ now: t });
        } else if (s.status === STATUS.PAUSED) {
          timer = timer || setInterval(tick, TICK_MS);
          persistSession(resume(s, t));
        }
      },
      skip: async function() {
        var s = state.get().session;
        if (!s) return;
        var spent = s.plannedMs - remaining(s, Date.now());
        if (s.phase === PHASE.FOCUS && spent > 6e4) {
          var ok = await host.ui.confirm({
            title: mt().skipTitle,
            message: mt().skipMessage,
            confirmText: mt().skipConfirm
          });
          if (!ok) return;
        }
        onPhaseFinished(false);
      },
      finish: async function() {
        var s = state.get().session;
        if (!s) return;
        var ok = await host.ui.confirm({ title: mt().finishTitle, message: mt().finishMessage });
        if (!ok) return;
        endRoundNow();
      },
      setRoute: function(route) {
        state.set({ route });
      },
      /** 首页 / 计时 / 聊天三屏切换，只影响界面，不影响计时 */
      /** 首页「进行中」条：按用户设置的默认页进入聊天或计时 */
      openRunningScreen: function() {
        actions.setFocusScreen(settings.startScreen === "chat" ? "chat" : "timer");
      },
      setFocusScreen: function(screen) {
        var screens = ["timer", "chat", "chatSettings", "chatStyle", "touch"];
        var next = screens.indexOf(screen) === -1 ? "list" : screen;
        if (next === "timer") ensureIdleSession();
        if (next === "chat" && state.get().unreadChat) state.set({ unreadChat: 0 });
        if ((next === "chat" || next === "chatSettings") && !memCtx.loaded) refreshMemoryContext();
        state.set({ focusScreen: next });
      },
      openTask: function(id) {
        if (!actions.selectTask(id)) return false;
        ensureIdleSession();
        state.set({ focusScreen: "timer" });
        return true;
      },
      startTask: function(id) {
        var cur = state.get().session;
        if (cur && (cur.status === STATUS.RUNNING || cur.status === STATUS.PAUSED)) {
          host.ui.toast("先结束当前专注，再切换待办");
          return false;
        }
        if (!actions.selectTask(id)) return false;
        actions.toggle();
        enterAfterStart();
        return true;
      },
      startFree: function() {
        var cur = state.get().session;
        if (!cur || cur.status === STATUS.DONE || cur.status === STATUS.IDLE) actions.toggle();
        enterAfterStart();
        return true;
      },
      setGoal: function(value) {
        applySettings({ goal: { dailyPomodoros: value } });
      },
      /** 输入框的小飞机：有未回复消息就先回复，否则让角色主动开口 */
      requestProactive: function() {
        if ((Number(state.get().pendingChat) || 0) > 0) return actions.requestReply();
        return runProactive(true);
      },
      /** 保存提示词：正文与格式规则各一份，kind 见 PROMPT_KINDS */
      savePrompt: function(kind, text) {
        var keys = ["chat", "proactive", "touch", "formatChat", "formatProactive", "formatNote", "formatTouch"];
        var key = keys.indexOf(kind) === -1 ? "chat" : kind;
        var patch = { prompts: {} };
        patch.prompts[key] = text;
        applySettings(patch);
      },
      /** 兜底语句按当前角色保存；清空即删除该角色的自定义 */
      saveFallbackLines: function(text) {
        var key = activeCharacterId();
        var lines = parseLines(text);
        var next = Object.assign({}, phrases);
        if (lines.length) next[key] = lines;
        else delete next[key];
        phrases = next;
        state.set({ phrases });
        store.savePhrases(phrases);
        return lines.length;
      },
      /** 控制台：渲染当前真正会发出去的提示词（不调 API） */
      previewPrompt: function(kind, template) {
        var s = state.get().session;
        return dialogue.preview({
          scene: kind === "proactive" ? "proactive" : "chat",
          template,
          character: charCtx.character,
          persona: charCtx.persona,
          memory: memCtx,
          history: state.get().chat,
          remainingMs: s ? remaining(s, Date.now()) : 0,
          taskName: s ? s.taskName : "",
          now: Date.now()
        });
      },
      /** 聊天设置打开时刷新记忆占位符内容（保留已召回的向量记忆） */
      refreshMemory: function() {
        memCtx = Object.assign({}, memCtx, { loaded: false });
        return refreshMemoryContext();
      },
      /** 编辑便签内容；空内容不允许保存 */
      updateNote: function(id, text) {
        var value = String(text || "").trim().slice(0, 400);
        if (!value) return false;
        records = updateRecord(records, id, {
          note: value,
          noteAt: Date.now(),
          noteSource: "user"
        });
        state.set({ records });
        store.saveRecords(records);
        return true;
      },
      /** 生成一张示例便签，方便快速看样式；不计入统计 */
      addSampleNote: function() {
        var now2 = Date.now();
        var style = pickNoteStyleFor(settings);
        var record = normalizeRecord({
          id: "r_demo_" + now2.toString(36) + Math.random().toString(36).slice(2, 5),
          dateKey: dayKey(now2),
          startedAt: now2,
          endedAt: now2,
          plannedMs: settings.focusMin * 6e4,
          actualMs: settings.focusMin * 6e4,
          phase: "focus",
          mode: settings.focusMode,
          characterName: settings.characterName,
          completed: true,
          note: "**示例便签**：长按我换样式，==点垃圾桶==删除。\n*这张不计入统计*。",
          noteAt: now2,
          noteSource: "user",
          styleId: style.id,
          demo: true
        });
        if (!record) return false;
        records = insertRecord(records, record);
        state.set({ records });
        store.saveRecords(records);
        return true;
      },
      /** 切换某张便签的样式 */
      updateNoteStyle: function(id, styleId) {
        var target = findNoteStyle(styleId, settings.noteStyles);
        if (!target || target.id !== styleId) return false;
        records = updateRecord(records, id, { styleId });
        state.set({ records });
        store.saveRecords(records);
        return true;
      },
      /** 保存自定义样式预设（新增或修改） */
      saveNoteStyle: function(raw) {
        var style = normalizeNoteStyle(raw);
        if (!style) return null;
        var list = settings.noteStyles.filter(function(s) {
          return s.id !== style.id;
        });
        list.push(style);
        applySettings({ noteStyles: list });
        return style;
      },
      deleteNoteStyle: function(id) {
        var before = settings.noteStyles.length;
        var list = settings.noteStyles.filter(function(s) {
          return s.id !== id;
        });
        if (list.length === before) return false;
        applySettings({ noteStyles: list });
        return true;
      },
      /** 只清空便签，保留专注记录 */
      clearNote: function(id) {
        records = updateRecord(records, id, { note: "", noteAt: 0, noteSource: "" });
        state.set({ records });
        store.saveRecords(records);
        return true;
      },
      /** 编辑整轮回复：同 turnId 的气泡一起替换；空行/空括号不会生成空气泡 */
      editTurn: function(turnId, text) {
        if (!turnId) return false;
        var chat = state.get().chat || [];
        var index = -1;
        var old = [];
        chat.forEach(function(m, i) {
          if (m.turnId === turnId && m.role === "char") {
            if (index === -1) index = i;
            old.push(m);
          }
        });
        if (index === -1) return false;
        var lines = splitBubbles(text, settings.chat.bubbleMax);
        if (!lines.length) return false;
        var at = old[0].at || Date.now();
        var fresh = lines.map(function(line, i) {
          return {
            id: "m_" + Date.now().toString(36) + i + Math.random().toString(36).slice(2, 4),
            role: "char",
            text: line,
            at: at + i,
            scene: old[0].scene || "",
            turnId,
            edited: true,
            failed: false,
            pending: false,
            quote: i === 0 ? old[0].quote : null
          };
        });
        var next = chat.filter(function(m) {
          return m.turnId !== turnId || m.role !== "char";
        });
        next.splice(index, 0, ...fresh);
        state.set({ chat: next });
        store.saveChat(next);
        return true;
      },
      /** 编辑角色这一轮的回复，后续上下文会用改后的文本 */
      editChat: function(id, text) {
        var value = String(text || "").trim().slice(0, 500);
        if (!value) return false;
        var chat = state.get().chat.map(function(m) {
          if (m.id !== id) return m;
          return Object.assign({}, m, { text: value, edited: true });
        });
        state.set({ chat });
        store.saveChat(chat);
        return true;
      },
      removeChat: function(id) {
        var chat = state.get().chat || [];
        var msg = chat.filter(function(m) {
          return m.id === id;
        })[0];
        if (!msg) return false;
        var pending = Number(state.get().pendingChat) || 0;
        var patch = { chat: chat.filter(function(m) {
          return m.id !== id;
        }) };
        if (msg.role === "user" && msg.pending && pending > 0) patch.pendingChat = pending - 1;
        state.set(patch);
        store.saveChat(patch.chat);
        return true;
      },
      /** 删除这条角色回复并重新请求一条 */
      regenerateReply: function(id) {
        var chat = state.get().chat || [];
        var msg = chat.filter(function(m) {
          return m.id === id;
        })[0];
        if (!msg || msg.role !== "char") return false;
        var next = chat.filter(function(m) {
          if (msg.turnId) return !(m.role === "char" && m.turnId === msg.turnId);
          return m.id !== id;
        });
        state.set({
          chat: next,
          pendingChat: Math.max(1, Number(state.get().pendingChat) || 0)
        });
        store.saveChat(next);
        return actions.requestReply();
      },
      /** 把这条用户消息再发一次并请求回复 */
      resendChat: function(id) {
        var chat = state.get().chat || [];
        var msg = chat.filter(function(m) {
          return m.id === id;
        })[0];
        if (!msg || msg.role !== "user") return false;
        var res = actions.appendChat(msg.text, { quote: msg.quote });
        if (!res || !res.ok) return false;
        return actions.requestReply();
      },
      clearApiLogs: function() {
        apiLogs = [];
        state.set({ apiLogs });
        store.saveLogs(apiLogs);
      },
      /** 保存房间设置；正在进行中的专注立即套用 */
      saveRoomSettings: function(room) {
        var next = {
          enabled: !!room.enabled,
          letCharSet: !!room.letCharSet,
          password: /^\d{4,8}$/.test(String(room.password || "")) ? String(room.password) : ""
        };
        applySettings({ room: next });
        var s = state.get().session;
        if (s && s.phase === PHASE.FOCUS && (s.status === STATUS.RUNNING || s.status === STATUS.PAUSED)) {
          var code = "";
          if (next.enabled) {
            code = next.letCharSet ? s.roomPassword || String(Math.floor(1e3 + Math.random() * 9e3)) : next.password;
          }
          persistSession(Object.assign({}, s, {
            roomPassword: code,
            passwordAttempts: 0,
            passwordGenerated: !!code && next.letCharSet
          }));
        }
        return true;
      },
      unlockWithPassword: function(code) {
        var s = state.get().session;
        if (!s || !s.locked || !s.roomPassword) return false;
        var guess = String(code || "").trim();
        if (!guess) {
          host.ui.toast("请输入房间密码");
          return false;
        }
        if (guess !== s.roomPassword) {
          var attempt = (Number(s.passwordAttempts) || 0) + 1;
          persistSession(Object.assign({}, s, { passwordAttempts: attempt }));
          pushChat({
            role: "system",
            text: "密码错误：第 " + attempt + " 次尝试，输入了「" + guess + "」"
          });
          host.ui.toast("密码不对，第 " + attempt + " 次");
          return false;
        }
        persistSession(Object.assign({}, s, {
          locked: false,
          lockedUntil: 0,
          roomPassword: "",
          passwordAttempts: 0,
          passwordGenerated: false
        }));
        host.ui.toast("门开了");
        return true;
      },
      setMode: function(mode) {
        var next = normalizeMode(mode);
        if (settings.focusMode === next) return true;
        var s = state.get().session;
        if (s && (s.status === STATUS.RUNNING || s.status === STATUS.PAUSED)) {
          host.ui.toast("专注进行中，结束后再切换模式");
          return false;
        }
        if (s && s.locked) {
          host.ui.toast("锁房间期间不能切换模式，先紧急退出");
          return false;
        }
        applySettings({ focusMode: next });
        var cur = state.get().session;
        if (cur) persistSession(Object.assign({}, cur, { mode: next }));
        host.ui.toast(mt().modeSwitched + "：" + modeLabel(next));
        return true;
      },
      /** 计时页切换本轮模式：只改当前会话，不动全局默认 */
      setSessionMode: function(mode) {
        var next = normalizeMode(mode);
        var s = state.get().session;
        if (!s) {
          persistSession(newIdle(PHASE.FOCUS, 1, settings.characterId, settings.characterName, next));
          host.ui.toast("本轮模式：" + modeLabel(next));
          return true;
        }
        if (s.status === STATUS.RUNNING || s.status === STATUS.PAUSED) {
          host.ui.toast("专注进行中，结束后再切换模式");
          return false;
        }
        persistSession(Object.assign({}, s, { mode: next }));
        host.ui.toast("本轮模式：" + modeLabel(next));
        return true;
      },
      updateSettings: function(patch) {
        applySettings(patch);
      },
      /* ---------- 待办 ---------- */
      addTask: function(title) {
        var task = createTask({ title, now: Date.now() });
        if (!task) return null;
        tasks = insertTask(tasks, task);
        state.set({ tasks });
        store.saveTasks(tasks);
        if (!selectedTaskId) actions.selectTask(task.id);
        return task;
      },
      updateTask: function(id, patch) {
        tasks = updateTask(tasks, id, patch);
        state.set({ tasks });
        store.saveTasks(tasks);
        var s = state.get().session;
        if (s && s.status === STATUS.IDLE) persistSession(newIdle(s.phase, s.round, s.characterId, s.characterName, s.mode));
      },
      setTaskDone: function(id, done) {
        tasks = setTaskDone(tasks, id, done, Date.now());
        state.set({ tasks });
        store.saveTasks(tasks);
        if (done && selectedTaskId === id) {
          selectedTaskId = "";
          state.set({ selectedTaskId: "" });
        }
        var s = state.get().session;
        if (s && s.status === STATUS.IDLE) persistSession(newIdle(s.phase, s.round, s.characterId, s.characterName, s.mode));
      },
      deleteTask: function(id) {
        tasks = removeTask(tasks, id);
        state.set({ tasks });
        store.saveTasks(tasks);
        if (selectedTaskId === id) {
          selectedTaskId = "";
          state.set({ selectedTaskId: "" });
        }
      },
      selectTask: function(id) {
        var task = findTask(tasks, id);
        if (!task || task.done) return false;
        selectedTaskId = id;
        state.set({ selectedTaskId: id });
        var s = state.get().session;
        if (s && s.status === STATUS.IDLE) persistSession(newIdle(s.phase, s.round, s.characterId, s.characterName, s.mode));
        return true;
      },
      /* ---------- 互动页（立绘点触） ---------- */
      /** 立绘：上传（压缩后的 dataURL）或外链，单独存 fc:portrait */
      savePortrait: async function(value) {
        var next = normalizePortrait(value);
        portrait = next;
        state.set({ portrait });
        await store.savePortrait(portrait);
        return portrait;
      },
      /** 互动页不提供聊天配置，这里只保存立绘与热区 */
      saveTouchSettings: function(patch) {
        applySettings({ touch: patch || {} });
        return true;
      },
      saveTouchZone: function(raw) {
        var zone = normalizeZone(raw);
        var list = (settings.touch.zones || []).slice();
        var index = -1;
        for (var i = 0; i < list.length; i++) {
          if (list[i].id === zone.id) {
            index = i;
            break;
          }
        }
        if (index === -1) list.push(zone);
        else list[index] = zone;
        applySettings({ touch: { zones: list } });
        return zone;
      },
      deleteTouchZone: function(id) {
        var list = (settings.touch.zones || []).filter(function(z) {
          return z.id !== id;
        });
        applySettings({ touch: { zones: list } });
        return true;
      },
      clearTouchFeedback: function() {
        state.set({ touchFeedback: null });
      },
      /**
       * 点热区：本地台词优先；热区开了 AI 且额度/接口可用时才请求。
       * 反馈同时写进聊天记录（scene: 'touch'），聊天小窗能看到。
       */
      tapZone: async function(zoneId) {
        var s = state.get().session;
        var zones = settings.touch.zones || [];
        var zone = zones.filter(function(z) {
          return z.id === zoneId;
        })[0];
        if (!allows(activeMode(), "touch")) return { ok: false, reason: "mode" };
        if (!zone) return { ok: false, reason: "no_zone" };
        if (!s || s.status !== STATUS.RUNNING && s.status !== STATUS.PAUSED) {
          return { ok: false, reason: "not_running" };
        }
        if (s.locked) return { ok: false, reason: "locked" };
        var at = Date.now();
        if (!canTap(zone, at, tapLog[zoneId])) return { ok: false, reason: "cooldown" };
        tapLog[zoneId] = at;
        function show(text) {
          state.set({ touchFeedback: { text, at: Date.now(), zoneId } });
          pushChat({ role: "char", text, at: Date.now(), scene: "touch" });
        }
        var useAI = zone.useAI && settings.ai.enabled && host.caps.ai && aiQuotaLeft() > 0;
        if (!useAI) {
          var local = pickZoneLine(zone);
          if (!local) return { ok: false, reason: "empty" };
          show(local);
          return { ok: true, text: local, source: "local" };
        }
        if (aiState.busy) return { ok: false, reason: "busy" };
        if (activeCharacterId() && charCtx.id !== activeCharacterId()) await refreshCharacterContext();
        if (!memCtx.loaded) await refreshMemoryContext();
        aiState.busy = true;
        markAiUse();
        state.set({ aiBusy: true, touchBusy: true });
        var res = await dialogue.reply({
          scene: "touch",
          character: charCtx.character,
          persona: charCtx.persona,
          memory: memCtx,
          history: [],
          remainingMs: remaining(s, Date.now()),
          taskName: s.taskName,
          now: Date.now(),
          vars: { zone: zone.name, zone_hint: zone.prompt || "（无额外设定）" }
        });
        aiState.busy = false;
        state.set({ aiBusy: false, touchBusy: false });
        if (res.ok) {
          show(res.text);
          return { ok: true, text: res.text, source: "ai" };
        }
        var fallback = pickZoneLine(zone) || fallbackLine();
        if (fallback) show(fallback);
        return { ok: false, reason: res.reason };
      },
      /* ---------- 角色聊天 ---------- */
      /** 回车：只把话放进聊天室，不调用 API */
      appendChat: function(raw, opts2) {
        var text = String(raw || "").trim().slice(0, 500);
        var at = Date.now();
        var s = state.get().session;
        var input = opts2 || {};
        var quote = input.quote && input.quote.text ? {
          role: input.quote.role === "char" ? "char" : "user",
          text: String(input.quote.text).slice(0, 200)
        } : null;
        if (!text) return { ok: false, reason: "empty" };
        if (!chatSessionReady(s)) {
          host.ui.toast("先开始一次专注再聊");
          return { ok: false, reason: "no_session" };
        }
        if (s.locked) {
          host.ui.toast("锁房间中，先解锁");
          return { ok: false, reason: "locked" };
        }
        if (isMuted(s, at)) {
          host.ui.toast("现在被禁言了，" + mt().waitMute);
          return { ok: false, reason: "muted" };
        }
        if (!allows(activeMode(), "freeChat")) {
          host.ui.toast("当前模式不支持聊天");
          return { ok: false, reason: "mode" };
        }
        if (!settings.ai.enabled) {
          host.ui.toast(mt().aiOff);
          return { ok: false, reason: "ai_off" };
        }
        if (!host.caps.ai) {
          host.ui.toast(mt().noAiApi);
          return { ok: false, reason: "no_api" };
        }
        pushChat({ role: "user", text, at, quote, pending: true });
        state.set({ pendingChat: (Number(state.get().pendingChat) || 0) + 1 });
        aiState.lastActiveAt = at;
        return { ok: true };
      },
      /** 小飞机：有待回复的消息才调 API；没有就转为主动开口 */
      requestReply: async function() {
        var at = Date.now();
        var s = state.get().session;
        var pending = Number(state.get().pendingChat) || 0;
        if (!chatSessionReady(s)) {
          host.ui.toast("专注进行中才能请求回复");
          return { ok: false, reason: "not_running" };
        }
        if (s.locked) {
          host.ui.toast("锁房间中，先解锁");
          return { ok: false, reason: "locked" };
        }
        if (isMuted(s, at)) {
          host.ui.toast("现在被禁言了，" + mt().waitMute);
          return { ok: false, reason: "muted" };
        }
        if (!allows(activeMode(), "freeChat")) {
          host.ui.toast("当前模式不支持聊天");
          return { ok: false, reason: "mode" };
        }
        if (!settings.ai.enabled) {
          host.ui.toast(mt().aiOff);
          return { ok: false, reason: "ai_off" };
        }
        if (!host.caps.ai) {
          host.ui.toast(mt().noAiApi);
          return { ok: false, reason: "no_api" };
        }
        if (aiState.busy) {
          host.ui.toast("角色还在回复上一句");
          return { ok: false, reason: "busy" };
        }
        if (pending <= 0) return runProactive(true);
        if (aiQuotaLeft() <= 0) {
          host.ui.toast("今天的 AI 次数已用完");
          return { ok: false, reason: "quota" };
        }
        aiState.busy = true;
        aiState.lastAt = at;
        aiState.lastActiveAt = at;
        state.set({ aiBusy: true });
        markAiUse();
        var res = await askCharacter("chat");
        aiState.busy = false;
        state.set({ aiBusy: false });
        function clearPending(count) {
          var left = Math.max(0, (Number(state.get().pendingChat) || 0) - count);
          state.set({ pendingChat: left });
        }
        if (res.ok) {
          consumeAiReply(res.text);
          markPendingAnswered();
          clearPending(pending);
          aiState.lastActiveAt = Date.now();
        } else {
          var fallback = fallbackLine();
          if (fallback) {
            pushChat({ role: "char", text: fallback, at: Date.now(), failed: true });
            markPendingAnswered();
            clearPending(pending);
          }
          host.ui.toast(aiFailText(res.reason));
        }
        return res;
      },
      /* ---------- 监督 ---------- */
      requestSupervision: async function(type, payload) {
        var input = payload || {};
        var current = state.get().settings;
        if (type === ACTION.LOCK_ROOM) {
          var beforeLock = state.get().session;
          if (beforeLock && !beforeLock.roomPassword) {
            var tempCode = String(Math.floor(1e3 + Math.random() * 9e3));
            persistSession(Object.assign({}, beforeLock, {
              roomPassword: tempCode,
              passwordGenerated: true,
              passwordAttempts: 0
            }));
            pushChat({ role: "system", text: "房间没有密码，本次临时密码：" + tempCode });
          }
        }
        if (type === ACTION.LOCK_ROOM && current.lockRoom.requireConfirm && !input.skipConfirm) {
          var confirmed = await host.ui.confirm({ title: mt().lockTitle, message: mt().lockMessage });
          if (!confirmed) {
            var declined = { type, ok: false, reason: "declined", ms: 0, line: "", at: Date.now() };
            state.set({ lastSupervision: declined, now: declined.at });
            host.ui.toast(reasonText("declined"));
            return { ok: false, reason: "declined" };
          }
        }
        var result = supervisor.request({
          type,
          source: input.source || "manual",
          seconds: input.seconds
        });
        var entry = {
          type,
          ok: result.ok,
          reason: result.reason,
          ms: result.ms || 0,
          line: "",
          at: Date.now()
        };
        if (result.ok) {
          entry.line = pickLine(type === ACTION.SPEAK ? "speak" : type === ACTION.EXTEND ? "extend" : type === ACTION.MUTE ? "mute" : "lock");
          if (!input.silent) {
            if (type === ACTION.EXTEND) {
              host.ui.toast(result.capped ? "已按上限加时 " + minutesText(result.ms) : "已加时 " + minutesText(result.ms));
            } else if (type === ACTION.MUTE) {
              host.ui.toast("已禁言 " + minutesText(result.ms));
            } else if (type === ACTION.LOCK_ROOM) {
              host.ui.toast(mt().lockStarted);
            } else {
              host.ui.toast(entry.line || "角色没有出声");
            }
          }
        } else if (!input.silent) {
          host.ui.toast(reasonText(result.reason));
        }
        state.set({ lastSupervision: entry, now: entry.at });
        return result;
      },
      emergencyExit: async function() {
        var s = state.get().session;
        if (!s) return false;
        var ok = await host.ui.confirm({ title: mt().emergencyTitle, message: mt().emergencyMessage });
        if (!ok) return false;
        if (s.status === STATUS.RUNNING || s.status === STATUS.PAUSED) {
          endRoundNow();
          host.ui.toast(mt().emergencyDone);
          return true;
        }
        persistSession(clearLock(clearMute(s)));
        stopTicker();
        state.set({ now: Date.now() });
        host.ui.toast(mt().emergencyDone);
        return true;
      },
      /* ---------- 角色与数据 ---------- */
      listCharacters: async function() {
        var list = await host.character.list();
        return list.map(function(c) {
          return {
            id: c.id,
            name: c.name || c.handle || "未命名角色",
            handle: c.handle || "",
            avatar: c.avatar || ""
          };
        });
      },
      selectCharacter: function(id, name) {
        applySettings({ characterId: id || "", characterName: name || "" });
        memCtx = emptyMemory(false);
        var s = state.get().session;
        if (s && s.phase === PHASE.FOCUS && (s.status === STATUS.RUNNING || s.status === STATUS.PAUSED)) {
          host.ui.toast("默认角色已改；本轮结束后才生效");
          return;
        }
        if (s) {
          persistSession(Object.assign({}, s, {
            characterId: id || "",
            characterName: name || ""
          }));
        }
        refreshCharacterContext();
      },
      deleteRecord: function(id) {
        records = removeRecord(records, id);
        state.set({ records });
        store.saveRecords(records);
      },
      setCalendar: function(year, month) {
        state.set({ calendar: { year, month } });
      },
      exportData: async function() {
        return await store.exportAll();
      },
      importData: async function(payload) {
        var result = await store.importAll(payload);
        settings = result.settings;
        records = result.records;
        tasks = result.tasks || [];
        phrases = result.phrases || {};
        apiLogs = result.logs || [];
        savedChat = result.chat || [];
        savedChatOwner = result.chatOwner || "";
        portrait = result.portrait || "";
        session = normalizeSession(await store.loadSession());
        selectedTaskId = "";
        state.set({
          settings,
          records,
          tasks,
          phrases,
          apiLogs,
          selectedTaskId: "",
          portrait,
          touchFeedback: null,
          chat: savedChat,
          unreadChat: 0,
          pendingChat: 0,
          focusScreen: "list",
          session
        });
        memCtx = emptyMemory(false);
        refreshCharacterContext();
        return result;
      },
      clearAll: async function() {
        await store.clearAll();
        settings = await store.loadSettings();
        records = [];
        tasks = [];
        phrases = {};
        apiLogs = [];
        savedChat = [];
        savedChatOwner = "";
        portrait = "";
        tapLog = {};
        selectedTaskId = "";
        session = newIdle(PHASE.FOCUS, 1);
        state.set({
          settings,
          records: [],
          tasks: [],
          phrases: {},
          apiLogs: [],
          selectedTaskId: "",
          portrait: "",
          touchFeedback: null,
          chat: [],
          unreadChat: 0,
          pendingChat: 0,
          focusScreen: "list",
          session,
          lastSupervision: null
        });
        memCtx = emptyMemory(false);
        store.saveSettings(settings);
        store.saveSession(session);
        stopTicker();
      }
    };
    var ctx = {
      host,
      store,
      state,
      actions,
      bus,
      version: opts.version,
      applyTheme
    };
    return {
      ctx,
      destroy: function() {
        if (pendingRound && pendingRound.sessions.length) {
          saveRoundRecord(pendingRound.sessions);
          pendingRound = { sessions: [] };
        }
        destroyed = true;
        stopTicker();
        state.clearSubs();
        bus.clear();
        if (timer) clearInterval(timer);
      }
    };
  }

  // src/ui/dom.js
  function h(tag, attrs, children) {
    var el = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function(key) {
        var v = attrs[key];
        if (v === null || v === void 0 || v === false) return;
        if (key === "class") el.className = v;
        else if (key === "text") el.textContent = v;
        else if (key === "svg") el.innerHTML = v;
        else if (key === "dataset") {
          Object.keys(v).forEach(function(d) {
            el.dataset[d] = v[d];
          });
        } else if (key.slice(0, 2) === "on" && typeof v === "function") {
          el.addEventListener(key.slice(2).toLowerCase(), v);
        } else if (v === true) {
          el.setAttribute(key, "");
        } else {
          el.setAttribute(key, v);
        }
      });
    }
    append(el, children);
    return el;
  }
  function append(parent, children) {
    if (children === null || children === void 0 || children === false) return parent;
    if (Array.isArray(children)) {
      children.forEach(function(c) {
        append(parent, c);
      });
      return parent;
    }
    if (typeof children === "string" || typeof children === "number") {
      parent.appendChild(document.createTextNode(String(children)));
      return parent;
    }
    if (children.nodeType) parent.appendChild(children);
    return parent;
  }
  function clear(node) {
    while (node && node.firstChild) node.removeChild(node.firstChild);
    return node;
  }
  function insertAtCursor(el, text) {
    var start2 = typeof el.selectionStart === "number" ? el.selectionStart : el.value.length;
    var end = typeof el.selectionEnd === "number" ? el.selectionEnd : start2;
    el.value = el.value.slice(0, start2) + text + el.value.slice(end);
    var pos = start2 + text.length;
    try {
      el.setSelectionRange(pos, pos);
    } catch (e) {
    }
    el.focus();
    el.dispatchEvent(new Event("input", { bubbles: true }));
  }
  var SVG_NS = "http://www.w3.org/2000/svg";
  function svg(tag, attrs, children) {
    var el = document.createElementNS(SVG_NS, tag);
    if (attrs) {
      Object.keys(attrs).forEach(function(k) {
        var v = attrs[k];
        if (v === null || v === void 0) return;
        if (k === "style") {
          Object.keys(v).forEach(function(p) {
            el.style.setProperty(p, v[p]);
          });
        } else {
          el.setAttribute(k, v);
        }
      });
    }
    append(el, children);
    return el;
  }

  // src/ui/components.js
  var ICONS = {
    focus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 1.5"/><path d="M9 2h6"/></svg>',
    stats: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M4 20V10"/><path d="M10 20V4"/><path d="M16 20v-7"/><path d="M22 20H2"/></svg>',
    history: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h10"/></svg>',
    settings: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/></svg>',
    play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l11-6.5z"/></svg>',
    pause: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="7" y="5" width="3.5" height="14" rx="1.2"/><rect x="13.5" y="5" width="3.5" height="14" rx="1.2"/></svg>',
    skip: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.5v13l9-6.5z"/><rect x="16" y="5" width="2.5" height="14" rx="1"/></svg>',
    back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M15 5l-7 7 7 7"/></svg>',
    stop: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="7" y="7" width="10" height="10" rx="2.2"/></svg>',
    chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M4 19h16"/><path d="M7 16V9"/><path d="M12 16V5"/><path d="M17 16v-4"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
    plane: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"><path d="M21 3L3 10.5l7 2.5 2.5 7L21 3z"/><path d="M10 13l4.5-4.5"/></svg>',
    sliders: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M4 7h10M18 7h2M4 12h4M12 12h8M4 17h9M17 17h3"/><circle cx="16" cy="7" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="15" cy="17" r="2"/></svg>',
    target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none"/></svg>',
    more: '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="6" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="18" cy="12" r="1.6"/></svg>',
    plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
    note: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h14v11l-5 5H5z"/><path d="M14 20v-5h5"/><path d="M8 9h8M8 13h5"/></svg>',
    pencil: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20l4.2-1 10-10a2.1 2.1 0 0 0-3-3l-10 10L4 20z"/><path d="M13.5 6.5l3 3"/></svg>',
    trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 7h14"/><path d="M10 11v6M14 11v6"/><path d="M7 7l1 13h8l1-13"/><path d="M9 7V4h6v3"/></svg>',
    palette: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a9 9 0 1 0 0 18c1.4 0 2-.9 2-2 0-1.1-.9-1.5-.9-2.4 0-.8.7-1.4 1.5-1.4H17a4 4 0 0 0 4-4c0-4.4-4-8-9-8z"/><circle cx="8" cy="10" r="1.1"/><circle cx="12" cy="7.5" r="1.1"/><circle cx="15.5" cy="10" r="1.1"/></svg>',
    export: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M12 16V4"/><path d="M8 8l4-4 4 4"/><path d="M4 16v3a1 1 0 001 1h14a1 1 0 001-1v-3"/></svg>',
    image: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2.4"/><circle cx="8.5" cy="9.5" r="1.5"/><path d="M4 18l5-5 4 4 3-3 4 4"/></svg>'
  };
  function icon(name, cls) {
    return h("span", { class: "fc-icon" + (cls ? " " + cls : ""), svg: ICONS[name] || "" });
  }
  function iconButton(name, label, onClick, cls) {
    return h("button", {
      class: "fc-iconbtn" + (cls ? " " + cls : ""),
      type: "button",
      title: label,
      "aria-label": label,
      onclick: onClick
    }, [icon(name)]);
  }
  function pageHeader(title, subtitle, right) {
    return h("header", { class: "fc-header" }, [
      h("div", { class: "fc-header__text" }, [
        h("h1", { class: "fc-header__title", text: title }),
        subtitle ? h("p", { class: "fc-header__sub", text: subtitle }) : null
      ]),
      right || null
    ]);
  }
  function card(children, opts) {
    return h("section", { class: "fc-card" + (opts && opts.class ? " " + opts.class : "") }, children);
  }
  function statTile(label, value, sub) {
    return h("div", { class: "fc-tile" }, [
      h("div", { class: "fc-tile__label", text: label }),
      h("div", { class: "fc-tile__value", text: value }),
      sub ? h("div", { class: "fc-tile__sub", text: sub }) : null
    ]);
  }
  function emptyState(title, desc, action) {
    return h("div", { class: "fc-empty" }, [
      h("p", { class: "fc-empty__title", text: title }),
      desc ? h("p", { class: "fc-empty__desc", text: desc }) : null,
      action || null
    ]);
  }
  function button(label, opts) {
    var o = opts || {};
    return h("button", {
      class: "fc-btn" + (o.variant ? " fc-btn--" + o.variant : "") + (o.class ? " " + o.class : ""),
      type: "button",
      text: label,
      onclick: o.onClick,
      disabled: !!o.disabled
    });
  }
  function dialog(opts) {
    return new Promise(function(resolve) {
      var overlay = h("div", { class: "fc-mask" });
      var done = false;
      function finish(value) {
        if (done) return;
        done = true;
        if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
        document.removeEventListener("keydown", onKey);
        resolve(value);
      }
      function onKey(e) {
        if (e.key === "Escape") finish(false);
      }
      var actions = h(
        "div",
        { class: "fc-dialog__actions" },
        (opts.actions || [{ label: "好", value: true, variant: "primary" }]).map(function(a) {
          return button(a.label, {
            variant: a.variant,
            onClick: function() {
              finish(a.value);
            }
          });
        })
      );
      var bodyEl = opts.body || opts.setup ? h("div", { class: "fc-dialog__body" }, opts.body) : null;
      var panel = h("div", { class: "fc-dialog" }, [
        opts.title ? h("h2", { class: "fc-dialog__title", text: opts.title }) : null,
        bodyEl,
        actions
      ]);
      if (typeof opts.setup === "function") opts.setup(bodyEl, finish);
      overlay.appendChild(panel);
      overlay.addEventListener("click", function(e) {
        if (e.target === overlay && opts.dismissible !== false) finish(false);
      });
      document.body.appendChild(overlay);
      document.addEventListener("keydown", onKey);
    });
  }
  function closeButton(onClose) {
    return h("button", {
      class: "fc-close",
      type: "button",
      "aria-label": "关闭",
      title: "关闭",
      onclick: onClose
    }, [icon("close")]);
  }

  // src/ui/lock.js
  function createLockOverlay(ctx) {
    var nameEl = h("div", { class: "fc-lock__name" });
    var focusEl = h("div", { class: "fc-lock__focus" });
    var timeEl = h("div", { class: "fc-lock__time", text: "25:00" });
    var hintEl = h("div", { class: "fc-lock__hint" });
    var attemptsEl = h("div", { class: "fc-lock__attempts" });
    var passHintEl = h("div", { class: "fc-lock__passhint" });
    var historyEl = h("div", { class: "fc-lock__history" });
    var passInput = h("input", {
      class: "fc-input fc-lock__pass",
      type: "password",
      inputmode: "numeric",
      maxlength: "8",
      placeholder: "房间密码",
      "aria-label": "房间密码"
    });
    var passBtn = button("解锁", {
      variant: "primary",
      onClick: function() {
        if (ctx.actions.unlockWithPassword(passInput.value)) passInput.value = "";
      }
    });
    passInput.addEventListener("keydown", function(e) {
      if (e.key !== "Enter") return;
      e.preventDefault();
      if (ctx.actions.unlockWithPassword(passInput.value)) passInput.value = "";
    });
    var passRow = h("div", { class: "fc-lock__passrow" }, [passInput, passBtn]);
    passRow.hidden = true;
    var passCard = h("div", { class: "fc-lock__passcard" }, [
      h("div", { class: "fc-lock__passlabel", text: "输入密码开门" }),
      passRow,
      passHintEl
    ]);
    var exitBtn = button("紧急退出", {
      variant: "danger",
      onClick: function() {
        ctx.actions.emergencyExit();
      }
    });
    var el = h("div", { class: "fc-lock", "aria-hidden": "true" }, [
      h("div", { class: "fc-lock__inner" }, [
        h("div", { class: "fc-lock__tag", text: "专注锁定中" }),
        nameEl,
        focusEl,
        timeEl,
        hintEl,
        attemptsEl,
        passCard,
        historyEl,
        h("p", {
          class: "fc-lock__sub",
          text: "锁房间只在插件内生效，无法阻止你从系统关闭应用。退出后会记为提前结束。"
        }),
        exitBtn
      ])
    ]);
    el.style.display = "none";
    function update(s) {
      var session = s.session;
      var locked = !!(session && session.locked && session.status !== STATUS.DONE);
      if (!locked) {
        if (el.style.display !== "none") {
          el.style.display = "none";
          el.setAttribute("aria-hidden", "true");
        }
        return;
      }
      if (el.style.display !== "flex") {
        el.style.display = "flex";
        el.setAttribute("aria-hidden", "false");
      }
      var name = session.characterName || s.settings && s.settings.characterName || "角色";
      nameEl.textContent = name + " 把门锁上了";
      var focusLeft = remaining(session, s.now);
      focusEl.textContent = "专注剩余 " + fmtClock(focusLeft);
      var lockLeft = session.lockedUntil ? Math.max(0, session.lockedUntil - s.now) : focusLeft;
      timeEl.textContent = fmtClock(lockLeft);
      timeEl.classList.toggle("is-focus", !session.lockedUntil);
      hintEl.textContent = session.status === STATUS.PAUSED ? "计时已暂停，但门还锁着。" : session.lockedUntil ? "锁门时间到了会自动开。" : "专注结束前门不会开。";
      attemptsEl.textContent = session.passwordAttempts ? "已经试错 " + session.passwordAttempts + " 次" : "";
      var needPass = !!session.roomPassword;
      passRow.hidden = false;
      passInput.disabled = !needPass;
      passInput.placeholder = needPass ? "4-8 位数字" : "未设置密码";
      passHintEl.textContent = needPass && session.passwordGenerated ? "临时密码：" + session.roomPassword : needPass ? "密码由你或角色设置" : "没有密码，只能紧急退出";
      if (!needPass && passInput.value) passInput.value = "";
      clear(historyEl);
      var recent = (s.chat || []).filter(function(m) {
        return m.role === "user" || m.role === "char";
      }).slice(-8);
      if (recent.length) {
        historyEl.appendChild(h("div", { class: "fc-lock__history-title", text: "最近消息" }));
        recent.forEach(function(m) {
          var text = String(m.text || "").replace(/[（(]([^）)]{1,80})[）)]/g, "$1");
          historyEl.appendChild(h("div", { class: "fc-lock__msg" }, [
            h("span", { class: "fc-lock__msg-who", text: m.role === "user" ? "我" : name || "角色" }),
            h("span", { class: "fc-lock__msg-text", text })
          ]));
        });
      }
    }
    return {
      el,
      update,
      destroy: function() {
        if (el.parentNode) el.parentNode.removeChild(el);
      }
    };
  }

  // src/core/stats.js
  function byDay(records) {
    var map = {};
    (records || []).forEach(function(r) {
      var key = r.dateKey || dayKey(r.startedAt);
      if (!map[key]) map[key] = { ms: 0, count: 0 };
      map[key].ms += r.actualMs;
      if (r.completed) map[key].count += Math.max(1, Number(r.pomodoros) || 1);
    });
    return map;
  }
  function rangeSummary(records, fromTs, toTs) {
    var totalMs2 = 0;
    var count = 0;
    var days = {};
    (records || []).forEach(function(r) {
      if (r.startedAt < fromTs || r.startedAt >= toTs) return;
      totalMs2 += r.actualMs;
      if (r.completed) count += Math.max(1, Number(r.pomodoros) || 1);
      days[r.dateKey || dayKey(r.startedAt)] = true;
    });
    var activeDays = Object.keys(days).length;
    return {
      totalMs: totalMs2,
      count,
      activeDays,
      avgMs: activeDays ? Math.round(totalMs2 / activeDays) : 0
    };
  }
  function todaySummary(records, now) {
    var from = startOfDay(now);
    return rangeSummary(records, from, addDays(from, 1));
  }
  function monthSummary(records, year, monthIndex) {
    var from = new Date(year, monthIndex, 1).getTime();
    var to = new Date(year, monthIndex + 1, 1).getTime();
    return rangeSummary(records, from, to);
  }
  function streakDays(map, now) {
    var today = startOfDay(now);
    var cursor = today;
    if (!map[dayKey(cursor)]) cursor = addDays(cursor, -1);
    var days = 0;
    while (map[dayKey(cursor)] && map[dayKey(cursor)].ms > 0) {
      days += 1;
      cursor = addDays(cursor, -1);
      if (days > 3650) break;
    }
    return days;
  }
  function monthCells(year, monthIndex, map, now) {
    var first = new Date(year, monthIndex, 1);
    var lead = first.getDay();
    var start2 = addDays(first.getTime(), -lead);
    var cells = [];
    var todayKey = now ? dayKey(now) : "";
    for (var i = 0; i < 42; i++) {
      var ts = addDays(start2, i);
      var d = new Date(ts);
      var key = dayKey(ts);
      var hit = map[key];
      cells.push({
        key,
        day: d.getDate(),
        inMonth: d.getMonth() === monthIndex,
        isToday: key === todayKey,
        ms: hit ? hit.ms : 0,
        count: hit ? hit.count : 0
      });
    }
    return cells;
  }
  function heatLevel(ms, maxMs) {
    if (!ms || !maxMs) return 0;
    var ratio = ms / maxMs;
    if (ratio >= 0.8) return 4;
    if (ratio >= 0.55) return 3;
    if (ratio >= 0.3) return 2;
    return 1;
  }
  function maxMsInCells(cells) {
    var max = 0;
    cells.forEach(function(c) {
      if (c.ms > max) max = c.ms;
    });
    return max;
  }

  // src/core/chatFormat.js
  var ACTION_RE2 = /（[^）\n]{1,120}）|\([^)\n]{1,120}\)/g;
  function pushText(out, text) {
    var value = String(text || "").replace(/\r/g, "").trim();
    if (!value) return;
    if (/^[（(]\s*[）)]$/.test(value)) return;
    out.push({ type: "text", text: value });
  }
  function pushAction(out, body) {
    var value = String(body || "").trim();
    if (!value) return;
    out.push({ type: "action", text: value });
  }
  function parseChatSegments(text) {
    var s = String(text === void 0 || text === null ? "" : text).replace(/\r\n/g, "\n");
    var out = [];
    var last = 0;
    var m;
    ACTION_RE2.lastIndex = 0;
    while (m = ACTION_RE2.exec(s)) {
      if (m.index > last) pushText(out, s.slice(last, m.index));
      pushAction(out, m[0].slice(1, -1));
      last = m.index + m[0].length;
    }
    if (last < s.length) pushText(out, s.slice(last));
    return out;
  }

  // src/ui/chatPanel.js
  var CHAT_STYLE_VAR_KEYS = [
    "--fc-bub-mine-bg",
    "--fc-bub-mine-ink",
    "--fc-bub-char-bg",
    "--fc-bub-char-ink",
    "--fc-narr-ink",
    "--fc-bub-radius",
    "--fc-bub-font",
    "--fc-bub-max",
    "--fc-narr-font"
  ];
  function applyChatStyle(node, style) {
    if (!node) return;
    CHAT_STYLE_VAR_KEYS.forEach(function(key) {
      node.style.removeProperty(key);
    });
    var vars = chatStyleVars(style);
    Object.keys(vars).forEach(function(key) {
      node.style.setProperty(key, vars[key]);
    });
    node.classList.toggle("is-no-time", !!(style && style.timeShow === false));
  }
  function phaseLabel(phase) {
    if (phase === PHASE.SHORT) return "短休";
    if (phase === PHASE.LONG) return "长休";
    return "专注";
  }
  function quoteNode(quote) {
    return h("div", { class: "fc-chat__quote" }, [
      h("span", { class: "fc-chat__quote-who", text: quote.role === "char" ? "角色" : "我" }),
      h("span", { text: quote.text })
    ]);
  }
  function openMessageMenu(msg, ctx, setQuote) {
    var isChar = msg.role !== "user";
    var items = [
      {
        label: "引用",
        desc: "把这条放进输入框上方",
        run: function() {
          setQuote(msg);
        }
      },
      {
        label: "编辑这条",
        desc: isChar ? "只改当前气泡" : "改自己发的话，后续对话用改后的内容",
        run: function() {
          openMessageEditor(msg, ctx);
        }
      },
      {
        label: "删除这条气泡",
        desc: "只移除这一条，不影响整轮",
        run: async function() {
          var ok = await ctx.host.ui.confirm({ title: "删除气泡", message: "只从聊天室移除这一条，不影响计时。" });
          if (ok) ctx.actions.removeChat(msg.id);
        }
      }
    ];
    if (isChar) {
      if (msg.turnId) {
        items.splice(1, 0, {
          label: "编辑整轮",
          desc: "这一轮的所有气泡一起改",
          run: function() {
            openTurnEditor(msg, ctx);
          }
        });
      }
      items.push({
        label: "重答",
        desc: "删掉这一轮并重新请求回复",
        run: function() {
          ctx.actions.regenerateReply(msg.id);
        }
      });
    }
    dialog({
      title: "消息操作",
      setup: function(bodyEl, close) {
        items.forEach(function(item) {
          bodyEl.appendChild(h("button", {
            class: "fc-msg-action",
            type: "button",
            onclick: function() {
              close(false);
              setTimeout(item.run, 0);
            }
          }, [
            h("span", { class: "fc-msg-action__label", text: item.label }),
            h("span", { class: "fc-msg-action__sub", text: item.desc })
          ]));
        });
      },
      actions: [{ label: "取消", value: false }]
    });
  }
  function openTurnEditor(msg, ctx) {
    var chat = ctx.state.get().chat || [];
    var turn = chat.filter(function(m) {
      return m.turnId === msg.turnId && m.role === "char";
    });
    var area = h("textarea", { class: "fc-input fc-textarea-msg", rows: "6" });
    area.value = turn.map(function(m) {
      return m.text;
    }).join("\n");
    dialog({
      title: "编辑整轮回复",
      body: h("div", {}, [
        h("p", { class: "fc-row__sub", text: "一行一条气泡；（）里的内容会作为居中旁白。" }),
        area
      ]),
      actions: [
        { label: "取消", value: false },
        { label: "保存", value: "save", variant: "primary" }
      ]
    }).then(function(result) {
      if (result !== "save") return;
      if (!ctx.actions.editTurn(msg.turnId, area.value)) {
        ctx.host.ui.toast("内容不能为空");
      }
    });
  }
  function openMessageEditor(msg, ctx) {
    var area = h("textarea", { class: "fc-input fc-textarea-msg", rows: "4" });
    area.value = msg.text;
    dialog({
      title: "编辑消息",
      body: h("div", {}, [
        h("p", { class: "fc-row__sub", text: "只改这一条，后续对话会用改后的内容继续。" }),
        area
      ]),
      actions: [
        { label: "取消", value: false },
        { label: "保存", value: "save", variant: "primary" }
      ]
    }).then(function(result) {
      if (result !== "save") return;
      if (!ctx.actions.editChat(msg.id, area.value)) {
        ctx.host.ui.toast("内容不能为空");
      }
    });
  }
  function createChatPanel(root, ctx, opts) {
    var o = opts || {};
    var state = ctx.state;
    var nameEl = h("div", { class: "fc-chat-screen__name", text: "聊天" });
    var statusEl = h("div", { class: "fc-chat-screen__status" });
    var head = h("div", {
      class: "fc-chat-screen__head" + (o.compact ? " fc-chat-screen__head--compact" : "")
    }, [
      o.compact ? null : iconButton("back", "返回计时", function() {
        ctx.actions.setFocusScreen("timer");
      }),
      h("div", { class: "fc-chat-screen__titles" }, [nameEl, statusEl]),
      o.compact ? iconButton("close", "关闭聊天", o.onClose || function() {
      }) : iconButton("sliders", "聊天设置", function() {
        ctx.actions.setFocusScreen("chatSettings");
      })
    ]);
    var listEl = h("div", { class: "fc-chat-screen__list" });
    var quote = null;
    var quoteTextEl = h("span", { class: "fc-chat__quotebar-text" });
    var quoteBar = h("div", { class: "fc-chat__quotebar" }, [
      h("span", { class: "fc-chat__quotebar-label", text: "引用" }),
      quoteTextEl,
      iconButton("close", "取消引用", function() {
        setQuote(null);
      }, "fc-iconbtn--tiny")
    ]);
    quoteBar.hidden = true;
    function setQuote(msg) {
      if (!msg) {
        quote = null;
        quoteBar.hidden = true;
        return;
      }
      quote = { role: msg.role, text: msg.text };
      quoteTextEl.textContent = (msg.role === "char" ? "角色：" : "我：") + msg.text;
      quoteBar.hidden = false;
      if (!input.disabled) input.focus();
    }
    var input = h("input", {
      class: "fc-input fc-chat__input",
      type: "text",
      maxlength: "500",
      placeholder: "说点什么…",
      "aria-label": "聊天输入"
    });
    function sendText() {
      var text = input.value;
      if (!String(text || "").trim()) return false;
      var res = ctx.actions.appendChat(text, { quote });
      if (res && res.ok) {
        input.value = "";
        setQuote(null);
      }
      return !!(res && res.ok);
    }
    function request() {
      if (String(input.value || "").trim()) {
        if (sendText()) ctx.actions.requestReply();
        return;
      }
      ctx.actions.requestProactive();
    }
    var sendBtn = h("button", {
      class: "fc-chat__send fc-chat__send--icon",
      type: "button",
      "aria-label": "发送或请求",
      title: "有文字就发送；没文字就让角色先开口",
      disabled: true,
      onclick: request
    }, [icon("plane")]);
    var plusBtn = o.compact ? null : h("button", {
      class: "fc-chat__plus",
      type: "button",
      "aria-label": "计时与旁白",
      title: "计时与旁白",
      onclick: function() {
        if (typeof o.openTimerActions === "function") o.openTimerActions();
      }
    }, [icon("plus")]);
    var form = h("form", {
      class: "fc-chat__form",
      onsubmit: function(e) {
        e.preventDefault();
        sendText();
      }
    }, [plusBtn, input, sendBtn]);
    var hintEl = h("p", { class: "fc-chat__hint" });
    var screenEl = h("div", { class: "fc-chat-screen" + (o.compact ? " fc-chat-screen--compact" : "") }, [
      head,
      listEl,
      h("div", { class: "fc-chat-screen__foot" }, [
        quoteBar,
        form,
        hintEl
      ])
    ]);
    root.appendChild(screenEl);
    var lastChat = null;
    var lastNarration = null;
    function charBubble(text, msg, withQuote) {
      return h("div", {
        class: "fc-chat__bubble fc-chat__bubble--edit",
        onclick: function() {
          openMessageMenu(msg, ctx, setQuote);
        }
      }, [
        withQuote && msg.quote ? quoteNode(msg.quote) : null,
        h("div", { class: "fc-chat__text", text })
      ]);
    }
    function renderChat(s) {
      clear(listEl);
      var chat = s.chat || [];
      if (!chat.length) {
        listEl.appendChild(h("p", {
          class: "fc-chat__empty",
          text: "回车先把话放进聊天室；点小飞机才会请求 TA 回复。点气泡可以引用、修改或撤回。"
        }));
      }
      chat.forEach(function(msg) {
        if (msg.role === "system") {
          listEl.appendChild(h("div", {
            class: "fc-chat__system",
            text: msg.text
          }));
          return;
        }
        var isChar = msg.role === "char";
        if (!isChar) {
          listEl.appendChild(h("div", {
            class: "fc-chat__msg fc-chat__msg--me"
          }, [
            h("div", {
              class: "fc-chat__bubble",
              onclick: function() {
                openMessageMenu(msg, ctx, setQuote);
              }
            }, [
              msg.quote ? quoteNode(msg.quote) : null,
              h("div", { class: "fc-chat__text", text: msg.text })
            ]),
            h("div", { class: "fc-chat__time", text: fmtTime(msg.at) + (msg.edited ? " · 已编辑" : "") })
          ]));
          return;
        }
        var narrationOn = !s.settings.chat || s.settings.chat.narration !== false;
        var segments = parseChatSegments(msg.text).filter(function(seg) {
          return narrationOn || seg.type === "text";
        });
        if (!segments.length) return;
        var quoteUsed = false;
        segments.forEach(function(seg) {
          if (seg.type === "action") {
            listEl.appendChild(h("div", {
              class: "fc-chat__narration",
              text: seg.text,
              onclick: function() {
                openMessageMenu(msg, ctx, setQuote);
              }
            }));
            return;
          }
          listEl.appendChild(h("div", {
            class: "fc-chat__msg fc-chat__msg--char" + (msg.failed ? " is-failed" : "")
          }, [
            charBubble(seg.text, msg, !quoteUsed),
            h("div", { class: "fc-chat__time", text: fmtTime(msg.at) + (msg.edited ? " · 已编辑" : "") })
          ]));
          quoteUsed = true;
        });
      });
      listEl.scrollTop = listEl.scrollHeight;
    }
    function update(s) {
      var settings = s.settings;
      var session = s.session;
      var now = s.now;
      var info = modeInfo(session && session.mode || settings.focusMode);
      var charName = session && session.characterName || settings.characterName || "角色";
      var mutedLeft = muteRemaining(session, now);
      var chatReady = !!(session && (session.status === STATUS.RUNNING || session.status === STATUS.PAUSED || session.phase === PHASE.SHORT || session.phase === PHASE.LONG));
      var locked = !!(session && session.locked);
      applyChatStyle(screenEl, settings.chatStyle);
      nameEl.textContent = "和 " + charName + " 说话";
      if (s.aiBusy) statusEl.textContent = "正在输入…";
      else if (mutedLeft > 0) statusEl.textContent = "禁言中 " + fmtClock(mutedLeft);
      else if (!settings.ai.enabled) statusEl.textContent = "AI 已关闭";
      else if (!info.freeChat) statusEl.textContent = "当前模式不支持聊天";
      else if (session) statusEl.textContent = phaseLabel(session.phase) + " · 剩 " + fmtClock(remaining(session, now));
      else statusEl.textContent = "还没有开始专注";
      var canType = chatReady && !locked && info.freeChat && mutedLeft <= 0 && settings.ai.enabled;
      var pending = Number(s.pendingChat) || 0;
      input.disabled = !canType;
      sendBtn.disabled = !canType || !!s.aiBusy;
      input.placeholder = !info.freeChat ? "当前模式只读" : locked ? "锁房间中，先解锁" : mutedLeft > 0 ? "禁言中，" + fmtClock(mutedLeft) + " 后恢复" : !settings.ai.enabled ? "AI 已关闭" : canType ? "回车只发消息…" : "开始专注后可以聊天";
      hintEl.textContent = !info.freeChat ? "当前模式不支持聊天，只能查看历史消息。" : locked ? "锁房间中，只能看历史消息；解锁后可以继续聊。" : mutedLeft > 0 ? "被禁言了，" + fmtClock(mutedLeft) + " 后恢复发言。" : !canType ? "开始专注后可以聊天。" : pending > 0 ? "有 " + pending + " 条还没请求回复，点小飞机让 TA 回复。" : "回车只发消息；小飞机请求回复，没字时让 TA 主动开口。";
      if (s.chat !== lastChat || settings.chat.narration !== lastNarration) {
        lastChat = s.chat;
        lastNarration = settings.chat.narration;
        renderChat(s);
      }
    }
    return { update, destroy: function() {
    } };
  }

  // src/ui/views/touch.js
  var SHAPE_LABELS = { rect: "矩形", ellipse: "椭圆" };
  var MAX_PORTRAIT_BYTES = 1500 * 1024;
  function clamp012(n) {
    if (!isFinite(n)) return 0;
    return Math.min(1, Math.max(0, n));
  }
  function compressImage(file) {
    return new Promise(function(resolve, reject) {
      var reader = new FileReader();
      reader.onerror = function() {
        reject(new Error("读图失败"));
      };
      reader.onload = function() {
        var img = new Image();
        img.onerror = function() {
          reject(new Error("图片无法解析"));
        };
        img.onload = function() {
          var max = 1080;
          var scale = Math.min(1, max / Math.max(img.width, img.height));
          var w = Math.max(1, Math.round(img.width * scale));
          var h2 = Math.max(1, Math.round(img.height * scale));
          var canvas = document.createElement("canvas");
          canvas.width = w;
          canvas.height = h2;
          var ctx2d = canvas.getContext("2d");
          ctx2d.fillStyle = "#FFFFFF";
          ctx2d.fillRect(0, 0, w, h2);
          ctx2d.drawImage(img, 0, 0, w, h2);
          resolve(canvas.toDataURL("image/jpeg", 0.82));
        };
        img.src = String(reader.result || "");
      };
      reader.readAsDataURL(file);
    });
  }
  function openPortraitDialog(ctx, refresh) {
    var state = ctx.state;
    var fileInput = h("input", {
      type: "file",
      accept: "image/*",
      style: "display:none",
      onchange: async function(e) {
        var file = e.target.files && e.target.files[0];
        e.target.value = "";
        if (!file) return;
        try {
          var dataUrl = await compressImage(file);
          if (dataUrl.length > MAX_PORTRAIT_BYTES) {
            ctx.host.ui.toast("图片太大，压缩后仍超过 1.5MB，改用外链吧");
            return;
          }
          await ctx.actions.savePortrait(dataUrl);
          ctx.host.ui.toast("立绘已保存");
          refresh();
        } catch (err) {
          ctx.host.ui.toast("图片处理失败，换一张试试");
        }
      }
    });
    var urlInput = h("input", {
      class: "fc-input",
      type: "text",
      placeholder: "https://… 图片直链",
      value: state.get().settings.touch.portraitUrl || ""
    });
    dialog({
      title: "立绘",
      body: h("div", {}, [
        fileInput,
        h("p", { class: "fc-row__sub", text: "上传会压缩到长边 1080 并只存在本机；也可以填图片外链。" }),
        button("从相册选择", { variant: "primary", onClick: function() {
          fileInput.click();
        } }),
        h("div", { class: "fc-dialog__label", text: "图片外链" }),
        urlInput,
        h("p", { class: "fc-hint", text: "外链不占本机存储；如果加载失败会自动显示占位图。" })
      ]),
      actions: [
        { label: "移除立绘", value: "clear", variant: "danger" },
        { label: "取消", value: false },
        { label: "保存外链", value: "save", variant: "primary" }
      ]
    }).then(async function(result) {
      if (result === "clear") {
        await ctx.actions.savePortrait("");
        ctx.actions.saveTouchSettings({ portraitUrl: "" });
        ctx.host.ui.toast("立绘已移除");
        refresh();
        return;
      }
      if (result !== "save") return;
      var url = String(urlInput.value || "").trim();
      ctx.actions.saveTouchSettings({ portraitUrl: url });
      if (url) await ctx.actions.savePortrait("");
      ctx.host.ui.toast(url ? "立绘外链已保存" : "已清空外链");
      refresh();
    });
  }
  function openZoneEditor(zone, ctx, refresh) {
    var isNew = !zone.id;
    var draft = normalizeZone(zone, zone.id || void 0);
    var linesValue = draft.lines.join("\n");
    var nameInput = h("input", { class: "fc-input", type: "text", maxlength: "12", value: draft.name });
    var linesArea = h("textarea", {
      class: "fc-input fc-textarea-msg",
      rows: "4",
      placeholder: "一行一句；点这个部位时随机说一句"
    });
    linesArea.value = linesValue;
    var promptArea = h("textarea", {
      class: "fc-input fc-textarea-msg",
      rows: "3",
      placeholder: "这个部位的补充设定，例如「怕痒」「会下意识躲开」"
    });
    promptArea.value = draft.prompt;
    var useAIBtn = h("button", {
      class: "fc-switch",
      type: "button",
      role: "switch",
      "aria-checked": String(draft.useAI),
      onclick: function() {
        draft.useAI = !draft.useAI;
        useAIBtn.setAttribute("aria-checked", String(draft.useAI));
      }
    });
    var shapeBtns = TOUCH_SHAPES.map(function(shape) {
      return h("button", {
        class: "fc-seg__btn" + (draft.shape === shape ? " is-active" : ""),
        type: "button",
        text: SHAPE_LABELS[shape],
        onclick: function() {
          draft.shape = shape;
          shapeBtns.forEach(function(b, i) {
            b.classList.toggle("is-active", TOUCH_SHAPES[i] === shape);
          });
        }
      });
    });
    var cooldown = draft.cooldownSec;
    var cooldownEl = h("span", { class: "fc-stepper__value", text: cooldown + " 秒" });
    var coolMinus = h("button", {
      class: "fc-stepper__btn",
      type: "button",
      text: "−",
      onclick: function() {
        setCooldown(cooldown - 1);
      }
    });
    var coolPlus = h("button", {
      class: "fc-stepper__btn",
      type: "button",
      text: "+",
      onclick: function() {
        setCooldown(cooldown + 1);
      }
    });
    function setCooldown(next) {
      if (next < 0 || next > 60) return;
      cooldown = next;
      cooldownEl.textContent = cooldown + " 秒";
      coolMinus.disabled = cooldown <= 0;
      coolPlus.disabled = cooldown >= 60;
    }
    coolMinus.disabled = cooldown <= 0;
    coolPlus.disabled = cooldown >= 60;
    dialog({
      title: isNew ? "新建热区" : "编辑热区",
      body: h("div", {}, [
        h("div", { class: "fc-dialog__label", text: "名称" }),
        nameInput,
        h("div", { class: "fc-dialog__label", text: "形状" }),
        h("div", { class: "fc-seg fc-seg--wide" }, shapeBtns),
        h("div", { class: "fc-dialog__label", text: "本地台词" }),
        linesArea,
        h("div", { class: "fc-row fc-row--plain" }, [
          h("div", { class: "fc-row__main" }, [
            h("div", { class: "fc-row__title", text: "用 AI 回应" }),
            h("div", { class: "fc-row__sub", text: "开启后点这里会请求角色回复；失败或额度用完时用本地台词" })
          ]),
          useAIBtn
        ]),
        h("div", { class: "fc-dialog__label", text: "补充设定（AI 用）" }),
        promptArea,
        h("div", { class: "fc-row" }, [
          h("div", { class: "fc-row__main" }, [
            h("div", { class: "fc-row__title", text: "冷却" }),
            h("div", { class: "fc-row__sub", text: "同一点位两次反馈之间至少隔多久" })
          ]),
          h("div", { class: "fc-stepper" }, [coolMinus, cooldownEl, coolPlus])
        ])
      ]),
      actions: isNew ? [
        { label: "取消", value: false },
        { label: "保存", value: "save", variant: "primary" }
      ] : [
        { label: "删除", value: "delete", variant: "danger" },
        { label: "取消", value: false },
        { label: "保存", value: "save", variant: "primary" }
      ]
    }).then(function(result) {
      if (result === "delete") {
        ctx.actions.deleteTouchZone(draft.id);
        ctx.host.ui.toast("热区已删除");
        refresh();
        return;
      }
      if (result !== "save") return;
      var saved = ctx.actions.saveTouchZone(Object.assign({}, draft, {
        name: nameInput.value,
        lines: String(linesArea.value || "").split(/\r?\n/),
        prompt: promptArea.value,
        cooldownSec: cooldown
      }));
      if (!saved) {
        ctx.host.ui.toast("保存失败，检查一下名称");
        return;
      }
      ctx.host.ui.toast("热区已保存");
      refresh();
    });
  }
  var touch_default = {
    mount: function(page, ctx) {
      var state = ctx.state;
      var editing = false;
      var lastSignature = "";
      var feedbackTimer = null;
      var panel = null;
      var titleEl = h("div", { class: "fc-touch__title", text: "互动" });
      var subEl = h("div", { class: "fc-touch__sub" });
      var stage = h("div", { class: "fc-touch__stage" });
      var canvas = h("div", { class: "fc-touch__canvas" });
      var zoneLayer = h("div", { class: "fc-touch__zones" });
      var draftRect = h("div", { class: "fc-touch__draft" });
      draftRect.hidden = true;
      canvas.appendChild(zoneLayer);
      canvas.appendChild(draftRect);
      stage.appendChild(canvas);
      var feedbackEl = h("div", { class: "fc-touch__bubble" });
      feedbackEl.hidden = true;
      var hintEl = h("p", { class: "fc-touch__hint" });
      var chatLayer = h("div", { class: "fc-touch__chatlayer" });
      chatLayer.hidden = true;
      function openChat() {
        if (!panel) {
          panel = createChatPanel(chatLayer, ctx, {
            compact: true,
            onClose: function() {
              chatLayer.hidden = true;
            }
          });
          panel.update(state.get());
        }
        chatLayer.hidden = false;
      }
      var editBtn = h("button", {
        class: "fc-btn fc-btn--ghost fc-touch__editbtn",
        type: "button",
        text: "编辑",
        onclick: function() {
          editing = !editing;
          editBtn.textContent = editing ? "完成" : "编辑";
          lastSignature = "";
          sync(state.get());
        }
      });
      var head = h("div", { class: "fc-touch__head" }, [
        iconButton("back", "返回计时", function() {
          ctx.actions.setFocusScreen("timer");
        }),
        h("div", { class: "fc-touch__titles" }, [titleEl, subEl]),
        editBtn,
        closeButton(function() {
          ctx.host.ui.closeApp();
        })
      ]);
      var chatBtn = h("button", {
        class: "fc-btn fc-btn--primary fc-touch__chatbtn",
        type: "button",
        onclick: openChat
      }, [icon("plane"), h("span", { text: "聊天" })]);
      var portraitBtn = h("button", {
        class: "fc-btn fc-btn--ghost fc-touch__portraitbtn",
        type: "button",
        onclick: function() {
          openPortraitDialog(ctx, function() {
            lastSignature = "";
            sync(state.get());
          });
        }
      }, [icon("image"), h("span", { text: "立绘" })]);
      page.appendChild(h("div", { class: "fc-touch" }, [
        head,
        stage,
        feedbackEl,
        hintEl,
        h("div", { class: "fc-touch__bar" }, [chatBtn, portraitBtn]),
        chatLayer
      ]));
      var dragFrom = null;
      function pointOf(e) {
        var rect = canvas.getBoundingClientRect();
        if (!rect.width || !rect.height) return null;
        return {
          x: clamp012((e.clientX - rect.left) / rect.width),
          y: clamp012((e.clientY - rect.top) / rect.height)
        };
      }
      function onPointerDown(e) {
        if (!editing) return;
        if (e.target.closest(".fc-touch__zone")) return;
        var p = pointOf(e);
        if (!p) return;
        dragFrom = p;
        draftRect.hidden = false;
        paintDraft(p, p);
        try {
          canvas.setPointerCapture(e.pointerId);
        } catch (err) {
        }
      }
      function onPointerMove(e) {
        if (!dragFrom) return;
        var p = pointOf(e);
        if (!p) return;
        paintDraft(dragFrom, p);
      }
      function onPointerUp(e) {
        if (!dragFrom) return;
        var p = pointOf(e) || dragFrom;
        var x = Math.min(dragFrom.x, p.x);
        var y = Math.min(dragFrom.y, p.y);
        var w = Math.abs(p.x - dragFrom.x);
        var h2 = Math.abs(p.y - dragFrom.y);
        dragFrom = null;
        draftRect.hidden = true;
        try {
          canvas.releasePointerCapture(e.pointerId);
        } catch (err) {
        }
        if (w < 0.03 || h2 < 0.03) {
          ctx.host.ui.toast("按住拖一个范围，再松手");
          return;
        }
        openZoneEditor({
          x,
          y,
          w,
          h: h2,
          shape: "rect",
          cooldownSec: state.get().settings.touch.defaultCooldownSec
        }, ctx, function() {
          lastSignature = "";
          sync(state.get());
        });
      }
      function paintDraft(a, b) {
        var x = Math.min(a.x, b.x);
        var y = Math.min(a.y, b.y);
        var w = Math.abs(b.x - a.x);
        var h2 = Math.abs(b.y - a.y);
        draftRect.style.left = x * 100 + "%";
        draftRect.style.top = y * 100 + "%";
        draftRect.style.width = w * 100 + "%";
        draftRect.style.height = h2 * 100 + "%";
      }
      canvas.addEventListener("pointerdown", onPointerDown);
      canvas.addEventListener("pointermove", onPointerMove);
      canvas.addEventListener("pointerup", onPointerUp);
      canvas.addEventListener("pointercancel", onPointerUp);
      window.addEventListener("resize", onResize);
      function portraitSource(s) {
        var settings = s.settings;
        return s.portrait || settings.touch.portraitUrl || "";
      }
      var currentImg = null;
      function fitCanvas() {
        if (!currentImg || !currentImg.naturalWidth) return;
        var box = stage.getBoundingClientRect();
        var availW = Math.max(80, box.width - 20);
        var availH = Math.max(80, box.height - 20);
        var scale = Math.min(availW / currentImg.naturalWidth, availH / currentImg.naturalHeight);
        canvas.style.width = Math.round(currentImg.naturalWidth * scale) + "px";
        canvas.style.height = Math.round(currentImg.naturalHeight * scale) + "px";
      }
      function onResize() {
        fitCanvas();
      }
      function renderStage(s) {
        var src = portraitSource(s);
        clear(canvas);
        canvas.classList.toggle("is-empty", !src);
        canvas.classList.toggle("is-editing", editing);
        canvas.classList.remove("is-broken");
        if (src) {
          var img = h("img", {
            class: "fc-touch__portrait",
            src,
            alt: "角色立绘",
            onerror: function() {
              canvas.classList.add("is-broken");
            }
          });
          img.addEventListener("load", function() {
            currentImg = img;
            fitCanvas();
          });
          canvas.appendChild(img);
          currentImg = img;
          if (img.complete && img.naturalWidth) fitCanvas();
        } else {
          currentImg = null;
          canvas.style.width = "";
          canvas.style.height = "";
          canvas.appendChild(h("div", { class: "fc-touch__placeholder" }, [
            h("div", { class: "fc-touch__placeholder-title", text: "还没有立绘" }),
            h("div", { class: "fc-touch__placeholder-sub", text: "点下面「立绘」上传一张，或者填图片外链" })
          ]));
        }
        zoneLayer = h("div", { class: "fc-touch__zones" });
        canvas.appendChild(zoneLayer);
        var zones = s.settings.touch.zones || [];
        zones.forEach(function(zone) {
          var box = h("button", {
            class: "fc-touch__zone" + (zone.shape === "ellipse" ? " is-round" : ""),
            type: "button",
            dataset: { zone: zone.id },
            title: zone.name,
            onclick: function(e) {
              e.stopPropagation();
              if (editing) {
                openZoneEditor(zone, ctx, function() {
                  lastSignature = "";
                  sync(state.get());
                });
                return;
              }
              tapZone(zone, e);
            }
          }, [
            editing ? h("span", { class: "fc-touch__zone-name", text: zone.name }) : null
          ]);
          box.style.left = zone.x * 100 + "%";
          box.style.top = zone.y * 100 + "%";
          box.style.width = zone.w * 100 + "%";
          box.style.height = zone.h * 100 + "%";
          zoneLayer.appendChild(box);
        });
        draftRect = h("div", { class: "fc-touch__draft" });
        draftRect.hidden = true;
        canvas.appendChild(draftRect);
      }
      async function tapZone(zone, e) {
        var el = e ? e.currentTarget : null;
        if (el) {
          el.classList.add("is-tapped");
          setTimeout(function() {
            el.classList.remove("is-tapped");
          }, 220);
        }
        var res = await ctx.actions.tapZone(zone.id);
        if (res.ok) return;
        if (res.reason === "cooldown") return;
        if (res.reason === "not_running") ctx.host.ui.toast("开始专注后才能互动");
        else if (res.reason === "locked") ctx.host.ui.toast("锁房间中，先解锁");
        else if (res.reason === "empty") ctx.host.ui.toast("这个部位还没有台词，去编辑里加一句");
        else if (res.reason === "busy") ctx.host.ui.toast("角色还在回复");
        else if (res.reason === "mode") ctx.host.ui.toast("当前模式不支持点触");
      }
      var lastFeedbackAt = 0;
      function renderFeedback(s) {
        var fb = s.touchFeedback;
        if (!fb || !fb.text) {
          if (feedbackTimer) {
            clearTimeout(feedbackTimer);
            feedbackTimer = null;
          }
          lastFeedbackAt = 0;
          feedbackEl.hidden = true;
          return;
        }
        if (fb.at === lastFeedbackAt) return;
        lastFeedbackAt = fb.at;
        if (feedbackTimer) {
          clearTimeout(feedbackTimer);
          feedbackTimer = null;
        }
        feedbackEl.hidden = false;
        feedbackEl.textContent = fb.text;
        var ms = Math.max(1500, Number(s.settings.touch.feedbackMs) || 6e3);
        feedbackTimer = setTimeout(function() {
          feedbackEl.hidden = true;
          ctx.actions.clearTouchFeedback();
        }, ms);
      }
      function sync(s) {
        var settings = s.settings;
        var session = s.session;
        var info = modeInfo(session && session.mode || settings.focusMode);
        var charName = session && session.characterName || settings.characterName || "角色";
        titleEl.textContent = charName;
        var left = session ? remaining(session, s.now) : 0;
        subEl.textContent = session && (session.status === STATUS.RUNNING || session.status === STATUS.PAUSED) ? "剩 " + fmtClock(left) : "还没有开始专注";
        portraitBtn.hidden = !editing;
        editBtn.hidden = !info.touch;
        hintEl.textContent = !info.touch ? "当前模式不支持点触；换成「轻触」或「相伴」才能互动。" : editing ? "在立绘上按住拖一个范围就是新热区；点已有热区可以改名字、台词和冷却。" : s.touchBusy ? "角色正在回应…" : portraitSource(s) ? "点立绘上的部位，看看 TA 的反应。" : "先点右上角「编辑」上传立绘。";
        hintEl.className = "fc-touch__hint" + (info.touch ? "" : " is-warn");
        var signature = [
          portraitSource(s),
          editing ? "1" : "0",
          (settings.touch.zones || []).map(function(z) {
            return [z.id, z.name, z.x, z.y, z.w, z.h, z.shape].join(":");
          }).join("|")
        ].join("#");
        if (signature !== lastSignature) {
          lastSignature = signature;
          renderStage(s);
          requestAnimationFrame(fitCanvas);
        }
        renderFeedback(s);
        if (panel && !chatLayer.hidden) panel.update(s);
      }
      sync(state.get());
      return {
        update: function(s) {
          sync(s);
        },
        destroy: function() {
          if (feedbackTimer) clearTimeout(feedbackTimer);
          canvas.removeEventListener("pointerdown", onPointerDown);
          canvas.removeEventListener("pointermove", onPointerMove);
          canvas.removeEventListener("pointerup", onPointerUp);
          canvas.removeEventListener("pointercancel", onPointerUp);
          window.removeEventListener("resize", onResize);
          if (panel && panel.destroy) panel.destroy();
        }
      };
    }
  };

  // src/ui/views/focus.js
  var R = 118;
  var C = 2 * Math.PI * R;
  var PHASE_LABEL = {};
  PHASE_LABEL[PHASE.FOCUS] = "专注";
  PHASE_LABEL[PHASE.SHORT] = "短休";
  PHASE_LABEL[PHASE.LONG] = "长休";
  function phaseLabel2(phase) {
    return PHASE_LABEL[phase] || "专注";
  }
  function miniButton(label, permission, onClick) {
    var dot = h("span", { class: "fc-mini__dot" });
    var textEl = h("span", { text: label });
    var btn = h("button", {
      class: "fc-mini",
      type: "button",
      dataset: { permission },
      onclick: onClick
    }, [dot, textEl]);
    return { el: btn, dot, textEl };
  }
  function dialogStepper(label, desc, value, range, step, unit, onChange) {
    var valueEl = h("span", { class: "fc-stepper__value", text: value + unit });
    var minus = h("button", {
      class: "fc-stepper__btn",
      type: "button",
      text: "−",
      onclick: function() {
        set(value - step);
      }
    });
    var plus = h("button", {
      class: "fc-stepper__btn",
      type: "button",
      text: "+",
      onclick: function() {
        set(value + step);
      }
    });
    function set(next) {
      if (next < range[0] || next > range[1]) return;
      value = next;
      valueEl.textContent = value + unit;
      minus.disabled = value <= range[0];
      plus.disabled = value >= range[1];
      onChange(value);
    }
    minus.disabled = value <= range[0];
    plus.disabled = value >= range[1];
    return h("div", { class: "fc-row" }, [
      h("div", { class: "fc-row__main" }, [
        h("div", { class: "fc-row__title", text: label }),
        desc ? h("div", { class: "fc-row__sub", text: desc }) : null
      ]),
      h("div", { class: "fc-stepper" }, [minus, valueEl, plus])
    ]);
  }
  function openTaskDetail(task, ctx) {
    var titleInput = h("input", {
      class: "fc-input",
      type: "text",
      maxlength: String(TASK_LIMITS.titleLength[1]),
      value: task.title
    });
    var estimate = task.estimatedPomodoros || 1;
    var valueEl = h("span", { class: "fc-stepper__value", text: estimate + " 个" });
    var minus = h("button", {
      class: "fc-stepper__btn",
      type: "button",
      text: "−",
      onclick: function() {
        if (estimate <= 1) return;
        estimate -= 1;
        valueEl.textContent = estimate + " 个";
      }
    });
    var plus = h("button", {
      class: "fc-stepper__btn",
      type: "button",
      text: "+",
      onclick: function() {
        if (estimate >= 20) return;
        estimate += 1;
        valueEl.textContent = estimate + " 个";
      }
    });
    var body = h("div", {}, [
      h("div", { class: "fc-dialog__label", text: "标题" }),
      titleInput,
      h("div", { class: "fc-dialog__label", text: "预计番茄数" }),
      h("div", { class: "fc-stepper" }, [minus, valueEl, plus])
    ]);
    dialog({
      title: "编辑待办",
      body,
      actions: [
        { label: "删除", value: "delete", variant: "danger" },
        { label: "取消", value: false },
        { label: "保存", value: "save", variant: "primary" }
      ]
    }).then(async function(result) {
      if (result === "save") {
        var title = String(titleInput.value || "").trim();
        if (!title) {
          ctx.host.ui.toast("标题不能为空");
          return;
        }
        ctx.actions.updateTask(task.id, { title, estimatedPomodoros: estimate });
        ctx.host.ui.toast("待办已更新");
      } else if (result === "delete") {
        var ok = await ctx.host.ui.confirm({
          title: "删除待办",
          message: "「" + task.title + "」会被删除，已产生的专注记录不受影响。"
        });
        if (ok) ctx.actions.deleteTask(task.id);
      }
    });
  }
  function openGoalDialog(ctx) {
    var settings = ctx.state.get().settings;
    var goal = settings.goal.dailyPomodoros;
    var valueEl = h("span", { class: "fc-stepper__value", text: goal + " 个" });
    var minus = h("button", {
      class: "fc-stepper__btn",
      type: "button",
      text: "−",
      onclick: function() {
        set(goal - 1);
      }
    });
    var plus = h("button", {
      class: "fc-stepper__btn",
      type: "button",
      text: "+",
      onclick: function() {
        set(goal + 1);
      }
    });
    function set(next) {
      if (next < 1 || next > 48) return;
      goal = next;
      valueEl.textContent = goal + " 个";
      minus.disabled = goal <= 1;
      plus.disabled = goal >= 48;
    }
    minus.disabled = goal <= 1;
    plus.disabled = goal >= 48;
    var body = h("div", {}, [
      h("p", { class: "fc-row__sub", text: "每天想完成多少个番茄。完成了会自动累加，首页进度条跟着走。" }),
      h("div", { class: "fc-dialog__label", text: "每日目标" }),
      h("div", { class: "fc-stepper" }, [minus, valueEl, plus])
    ]);
    dialog({
      title: "今日目标",
      body,
      actions: [
        { label: "取消", value: false },
        { label: "保存", value: "save", variant: "primary" }
      ]
    }).then(function(result) {
      if (result === "save") ctx.actions.setGoal(goal);
    });
  }
  function openModePicker(ctx) {
    var s = ctx.state.get().session;
    var current = s && s.mode || ctx.state.get().settings.focusMode;
    var modesEl = h("div", { class: "fc-modes" });
    dialog({
      title: "专注模式",
      body: modesEl,
      setup: function(bodyEl, close) {
        MODE_LIST.forEach(function(info) {
          modesEl.appendChild(h("button", {
            class: "fc-mode" + (info.id === current ? " is-active" : ""),
            type: "button",
            onclick: function() {
              close(info.id);
            }
          }, [
            h("div", { class: "fc-mode__head" }, [
              h("span", { class: "fc-mode__name", text: info.name }),
              info.id === current ? h("span", { class: "fc-mode__tick", text: "当前" }) : null
            ]),
            h("div", { class: "fc-mode__desc", text: info.desc })
          ]));
        });
      },
      actions: [{ label: "取消", value: false }]
    }).then(function(id) {
      if (typeof id === "string" && id) ctx.actions.setSessionMode(id);
    });
  }
  function openTimerSettings(ctx) {
    var state = ctx.state;
    var settings = state.get().settings;
    var session = state.get().session;
    var running = !!(session && (session.status === STATUS.RUNNING || session.status === STATUS.PAUSED));
    if (running) {
      ctx.host.ui.toast("专注进行中，计时设置已锁定，结束后再改");
      return;
    }
    var body = h("div", {}, [
      h("p", {
        class: "fc-row__sub",
        text: "只用于接下来的专注，不影响已经开始的计时。"
      }),
      dialogStepper("专注时长", "每一轮专注多久", settings.focusMin, [1, 180], 5, " 分", function(v) {
        ctx.actions.updateSettings({ focusMin: v });
      }),
      dialogStepper("短休息", "普通轮次之间休息多久", settings.shortBreakMin, [1, 60], 1, " 分", function(v) {
        ctx.actions.updateSettings({ shortBreakMin: v });
      }),
      dialogStepper("每轮番茄数", "这一轮包含多少个专注", settings.roundsPerLongBreak, [1, 12], 1, " 个", function(v) {
        ctx.actions.updateSettings({ roundsPerLongBreak: v });
      })
    ]);
    dialog({
      title: "计时设置",
      body,
      actions: [
        { label: "更多设置", value: "more" },
        { label: "完成", value: true, variant: "primary" }
      ]
    }).then(function(result) {
      if (result === "more") ctx.actions.setRoute("settings");
    });
  }
  function listScreen(root, ctx) {
    var state = ctx.state;
    var header = h("header", { class: "fc-home__head" }, [
      h("div", {}, [
        h("h1", { class: "fc-home__title", text: "专注" }),
        h("p", { class: "fc-home__date" })
      ]),
      closeButton(function() {
        ctx.host.ui.closeApp();
      })
    ]);
    var goalNums = h("div", { class: "fc-goal__nums" });
    var goalBar = h("i");
    var goalSub = h("div", { class: "fc-goal__sub" });
    var goalCard = h("section", { class: "fc-goal" }, [
      h("div", { class: "fc-goal__head" }, [
        h("div", {}, [
          h("div", { class: "fc-goal__label", text: "今日目标" }),
          goalNums
        ]),
        iconButton("target", "设置今日目标", function() {
          openGoalDialog(ctx);
        })
      ]),
      h("div", { class: "fc-goal__bar" }, [goalBar]),
      goalSub
    ]);
    var runbar = h("button", {
      class: "fc-runbar",
      type: "button",
      onclick: function() {
        ctx.actions.openRunningScreen();
      }
    }, [
      h("span", { class: "fc-runbar__dot" }),
      h("span", { class: "fc-runbar__time" }),
      h("span", { class: "fc-runbar__task" }),
      h("span", { class: "fc-runbar__go", text: "进入 ›" })
    ]);
    runbar.hidden = true;
    var taskCountEl = h("span", { class: "fc-tasks__count" });
    var taskListEl = h("div", { class: "fc-task-list" });
    var taskInput = h("input", {
      class: "fc-input fc-tasks__input",
      type: "text",
      maxlength: String(TASK_LIMITS.titleLength[1]),
      placeholder: "添加一条待办，回车确认",
      "aria-label": "新待办"
    });
    function addTaskFromInput() {
      var text = String(taskInput.value || "").trim();
      if (!text) return;
      var res = ctx.actions.addTask(text);
      if (res) {
        taskInput.value = "";
        taskInput.focus();
      }
    }
    var taskForm = h("form", {
      class: "fc-tasks__add",
      onsubmit: function(e) {
        e.preventDefault();
        addTaskFromInput();
      }
    }, [
      taskInput,
      h("button", {
        class: "fc-tasks__addbtn",
        type: "button",
        "aria-label": "添加待办",
        onclick: function(e) {
          e.preventDefault();
          addTaskFromInput();
        }
      }, [icon("plus")])
    ]);
    var taskCard = h("section", { class: "fc-tasks" }, [
      h("div", { class: "fc-tasks__head" }, [
        h("span", { class: "fc-tasks__title", text: "待办" }),
        taskCountEl
      ]),
      taskForm,
      taskListEl
    ]);
    var freeBtn = button("去计时页开始", {
      variant: "ghost",
      class: "fc-home__free",
      onClick: function() {
        ctx.actions.setFocusScreen("timer");
      }
    });
    root.appendChild(h("div", { class: "fc-home" }, [
      header,
      goalCard,
      runbar,
      taskCard,
      freeBtn,
      h("p", { class: "fc-focus__note", text: "点待办只是选中；▶ 带着它去计时页，开始前可换角色和房间。" })
    ]));
    var showDone = false;
    var lastSignature = "";
    function renderTasks(s) {
      clear(taskListEl);
      var list = s.tasks || [];
      var pending = list.filter(function(t) {
        return !t.done;
      });
      var done = list.filter(function(t) {
        return t.done;
      });
      taskCountEl.textContent = pending.length + " 项待办";
      if (!list.length) {
        taskListEl.appendChild(h("p", { class: "fc-tasks__empty", text: "还没有待办。加一条，再点它进入计时。" }));
        return;
      }
      pending.forEach(function(task) {
        taskListEl.appendChild(taskRow(task, s, false));
      });
      if (!done.length) return;
      taskListEl.appendChild(h("button", {
        class: "fc-task__done-toggle",
        type: "button",
        text: showDone ? "收起已完成" : "已完成 " + done.length,
        onclick: function() {
          showDone = !showDone;
          renderTasks(state.get());
        }
      }));
      if (showDone) done.forEach(function(task) {
        taskListEl.appendChild(taskRow(task, s, true));
      });
    }
    function taskRow(task, s, isDone) {
      var busy = !!(s.session && (s.session.status === STATUS.RUNNING || s.session.status === STATUS.PAUSED));
      var isActive = !isDone && (s.session && s.session.taskId === task.id || s.selectedTaskId === task.id);
      var check = h("button", {
        class: "fc-task__check" + (task.done ? " is-done" : ""),
        type: "button",
        "aria-label": task.done ? "标记未完成" : "标记完成",
        onclick: function() {
          ctx.actions.setTaskDone(task.id, !task.done);
        }
      }, [task.done ? icon("check") : null]);
      var main = h("button", {
        class: "fc-task__main",
        type: "button",
        onclick: function() {
          if (task.done) return;
          var cur = ctx.state.get().session;
          if (cur && (cur.status === STATUS.RUNNING || cur.status === STATUS.PAUSED)) {
            if (cur.taskId !== task.id) {
              ctx.host.ui.toast("专注进行中，结束后再切换待办");
              return;
            }
            ctx.actions.setFocusScreen("timer");
            return;
          }
          ctx.actions.selectTask(task.id);
        }
      }, [
        h("span", { class: "fc-task__title", text: task.title }),
        h("span", { class: "fc-task__meta" }, [
          h("span", { text: task.completedPomodoros + "/" + task.estimatedPomodoros }),
          isActive ? h("span", { class: "fc-task__badge", text: "当前" }) : null
        ])
      ]);
      var more = h("button", {
        class: "fc-task__more",
        type: "button",
        "aria-label": "编辑待办",
        onclick: function() {
          openTaskDetail(task, ctx);
        }
      }, [icon("more")]);
      var play = null;
      if (!task.done) {
        play = h("button", {
          class: "fc-task__play",
          type: "button",
          disabled: busy,
          title: busy ? "专注进行中" : "带着这一项去计时页",
          "aria-label": "带着这一项去计时页",
          onclick: function() {
            ctx.actions.openTask(task.id);
          }
        }, [icon("play")]);
      }
      return h("div", {
        class: "fc-task" + (task.done ? " is-done" : "") + (isActive ? " is-active" : "") + (busy && !isActive ? " is-disabled" : "")
      }, [check, main, more, play]);
    }
    function update(s) {
      var now = s.now;
      var sum = todaySummary(s.records, now);
      var goal = Math.max(1, s.settings.goal.dailyPomodoros);
      var ratio = Math.min(1, sum.count / goal);
      clear(goalNums);
      goalNums.appendChild(h("span", { text: String(sum.count) }));
      goalNums.appendChild(h("small", { text: " / " + goal + " 个番茄" }));
      goalBar.style.width = (ratio * 100).toFixed(1) + "%";
      goalSub.textContent = "已专注 " + fmtDuration(sum.totalMs, { compact: false }) + " · 完成 " + sum.count + " 次";
      header.querySelector(".fc-home__date").textContent = fmtDateCN(now) + " 周" + weekdayCN(now);
      var session = s.session;
      var running = !!(session && (session.status === STATUS.RUNNING || session.status === STATUS.PAUSED));
      runbar.hidden = !running;
      if (running) {
        runbar.querySelector(".fc-runbar__time").textContent = fmtClock(remaining(session, now));
        runbar.querySelector(".fc-runbar__task").textContent = session.taskName || phaseLabel2(session.phase);
      }
      freeBtn.hidden = running;
      var signature = [
        (s.tasks || []).map(function(t) {
          return [t.id, t.title, t.done ? 1 : 0, t.estimatedPomodoros || 0].join(":");
        }).join(","),
        s.selectedTaskId,
        session ? session.status : "none",
        session ? session.taskId : ""
      ].join("|");
      if (signature !== lastSignature) {
        lastSignature = signature;
        renderTasks(s);
      }
    }
    return { update, destroy: function() {
    } };
  }
  function timerScreen(root, ctx) {
    var state = ctx.state;
    var titleEl = h("button", { class: "fc-timer__title", type: "button", text: "专注" });
    var modeEl = h("span", { text: "独自专注" });
    var charEl = h("span", { class: "fc-timer__char" });
    var timeEl = h("div", { class: "fc-ring__time", text: "25:00" });
    var phaseEl = h("div", { class: "fc-ring__phase", text: "专注" });
    var bonusEl = h("div", { class: "fc-ring__bonus" });
    var bar = svg("circle", {
      class: "fc-ring__bar",
      cx: "134",
      cy: "134",
      r: String(R),
      fill: "none",
      "stroke-width": "6",
      "stroke-linecap": "round"
    });
    bar.style.strokeDasharray = String(C);
    bar.style.strokeDashoffset = "0";
    var ring = h("div", { class: "fc-ring" }, [
      svg("svg", { viewBox: "0 0 268 268" }, [
        svg("circle", { class: "fc-ring__track", cx: "134", cy: "134", r: String(R), fill: "none", "stroke-width": "6" }),
        bar
      ]),
      h("div", { class: "fc-ring__center" }, [timeEl, phaseEl, bonusEl])
    ]);
    var dots = h("div", { class: "fc-dots" });
    var toggleBtn = button("开始", {
      variant: "primary",
      class: "fc-btn--lg",
      onClick: function() {
        var s = ctx.state.get().session;
        var starting = !s || (s.status === STATUS.IDLE || s.status === STATUS.DONE) && s.phase === PHASE.FOCUS;
        if (starting) promptRoomStart(ctx, function() {
          ctx.actions.toggle();
        });
        else ctx.actions.toggle();
      }
    });
    var skipBtn = h("button", {
      class: "fc-controls__side",
      type: "button",
      title: "跳过",
      onclick: function() {
        ctx.actions.skip();
      }
    }, [icon("skip")]);
    var finishBtn = h("button", {
      class: "fc-controls__side",
      type: "button",
      title: "结束",
      onclick: function() {
        ctx.actions.finish();
      }
    }, [icon("stop")]);
    var chatBadge = h("span", { class: "fc-badge fc-badge--unread" });
    chatBadge.hidden = true;
    var chatBtn = h("button", {
      class: "fc-btn fc-btn--ghost fc-timer__chat",
      type: "button",
      onclick: function() {
        ctx.actions.setFocusScreen("chat");
      }
    }, [h("span", { text: "聊天" }), chatBadge]);
    var touchBtn = h("button", {
      class: "fc-btn fc-btn--ghost fc-timer__touch",
      type: "button",
      onclick: function() {
        ctx.actions.setFocusScreen("touch");
      }
    }, [h("span", { text: "互动" })]);
    var supName = h("span", { class: "fc-supervise__name" });
    var muteBadge = h("span", { class: "fc-badge fc-badge--mute" });
    var lineEl = h("p", { class: "fc-supervise__line" });
    var extendBtn = miniButton("加时", "extend", function() {
      var settings = state.get().settings;
      ctx.actions.requestSupervision(ACTION.EXTEND, { seconds: settings.extend.fixedSec });
    });
    var muteBtn = miniButton("禁言", "mute", function() {
      var settings = state.get().settings;
      ctx.actions.requestSupervision(ACTION.MUTE, { seconds: settings.mute.maxSec });
    });
    var lockBtn = miniButton("锁房间", "lockRoom", function() {
      ctx.actions.requestSupervision(ACTION.LOCK_ROOM, {});
    });
    var superviseEl = h("section", { class: "fc-supervise" }, [
      h("div", { class: "fc-supervise__head" }, [supName, muteBadge]),
      lineEl,
      h("div", { class: "fc-supervise__actions" }, [extendBtn.el, muteBtn.el, lockBtn.el]),
      h("p", { class: "fc-supervise__hint", text: "手动触发；角色只会做你授权的动作。" })
    ]);
    var head = h("div", { class: "fc-timer__head" }, [
      iconButton("back", "返回列表", function() {
        ctx.actions.setFocusScreen("list");
      }),
      titleEl,
      iconButton("sliders", "计时设置", function() {
        openTimerSettings(ctx);
      }),
      closeButton(function() {
        ctx.host.ui.closeApp();
      })
    ]);
    var modeBtn = h("button", {
      class: "fc-chip",
      type: "button",
      onclick: function() {
        var s = state.get().session;
        if (s && (s.status === STATUS.RUNNING || s.status === STATUS.PAUSED)) {
          ctx.host.ui.toast("专注进行中，结束后再切换模式");
          return;
        }
        openModePicker(ctx);
      }
    }, [modeEl]);
    var modeRow = h("div", { class: "fc-timer__meta" }, [modeBtn, charEl]);
    root.appendChild(h("div", { class: "fc-timer" }, [
      head,
      modeRow,
      ring,
      h("div", { class: "fc-controls" }, [skipBtn, toggleBtn, finishBtn]),
      h("div", { class: "fc-timer__actions" }, [chatBtn, touchBtn]),
      superviseEl,
      h("p", { class: "fc-focus__note", text: "切到其他页面计时不中断；关闭 App 后会按结束时间自动结算。" })
    ]));
    titleEl.onclick = function() {
      var s = state.get().session;
      if (!s || !s.taskId) return;
      var task = (state.get().tasks || []).filter(function(t) {
        return t.id === s.taskId;
      })[0];
      if (task) openTaskDetail(task, ctx);
    };
    function renderDots(session, settings) {
      clear(dots);
      var per = Math.max(1, settings.roundsPerLongBreak);
      var active = Math.min(session ? session.round : 1, per);
      for (var i = 1; i <= per; i++) {
        var cls = "fc-dots__dot";
        if (i < active) cls += " is-done";
        else if (i === active) cls += " is-active";
        dots.appendChild(h("span", { class: cls }));
      }
    }
    function update(s) {
      var settings = s.settings;
      var session = s.session;
      var now = s.now;
      var left = session ? remaining(session, now) : settings.focusMin * 6e4;
      var phase = session ? session.phase : PHASE.FOCUS;
      var status = session ? session.status : STATUS.IDLE;
      var info = modeInfo(session && session.mode || settings.focusMode);
      var charName = session && session.characterName || settings.characterName || "";
      timeEl.textContent = fmtClock(left);
      phaseEl.textContent = phaseLabel2(phase);
      titleEl.textContent = session && session.taskName || "专注";
      modeEl.textContent = modeLabel(session && session.mode || settings.focusMode);
      modeBtn.classList.toggle("is-disabled", !!(session && (session.status === STATUS.RUNNING || session.status === STATUS.PAUSED)));
      charEl.hidden = !info.bindCharacter;
      charEl.textContent = charName || "默认角色";
      var bonus = session && session.bonusMs ? "+" + Math.round(session.bonusMs / 6e4) + " 分钟" : "";
      bonusEl.textContent = bonus;
      var total = totalMs(session) || settings.focusMin * 6e4;
      var leftRatio = total > 0 ? left / total : 1;
      var ratio = status === STATUS.DONE ? 0 : Math.max(0, Math.min(1, leftRatio));
      bar.style.strokeDashoffset = String(C * (1 - ratio));
      bar.style.stroke = phase === PHASE.FOCUS ? "var(--fc-ink)" : "var(--fc-heat-3)";
      var label = "开始";
      if (status === STATUS.RUNNING) label = "暂停";
      else if (status === STATUS.PAUSED) label = "继续";
      else if (status === STATUS.DONE) label = "再来一次";
      if (toggleBtn.textContent !== label) toggleBtn.textContent = label;
      var idle = !session || status === STATUS.IDLE || status === STATUS.DONE;
      skipBtn.disabled = idle;
      finishBtn.disabled = idle;
      renderDots(session, settings);
      var unread = Number(s.unreadChat) || 0;
      chatBadge.hidden = !(unread > 0);
      chatBadge.textContent = unread > 9 ? "9+" : String(unread);
      touchBtn.hidden = !info.touch;
      superviseEl.hidden = !info.supervision;
      if (!info.supervision) return;
      supName.textContent = charName || "未绑定角色";
      muteBtn.el.hidden = !info.freeChat;
      lockBtn.el.hidden = !info.bindCharacter;
      var mutedLeft = muteRemaining(session, now);
      muteBadge.hidden = !(mutedLeft > 0);
      if (mutedLeft > 0) muteBadge.textContent = "禁言中 " + fmtClock(mutedLeft);
      extendBtn.textEl.textContent = "加时 " + Math.round(settings.extend.fixedSec / 60) + " 分";
      muteBtn.textEl.textContent = "禁言 " + Math.round(settings.mute.maxSec / 60) + " 分";
      [extendBtn, muteBtn, lockBtn].forEach(function(btn, i) {
        var key = ["extend", "mute", "lockRoom"][i];
        var on = !!(settings.permissions && settings.permissions[key]);
        btn.dot.className = "fc-mini__dot" + (on ? " is-on" : "");
        btn.el.dataset.authorized = on ? "true" : "false";
      });
      var last = s.lastSupervision;
      if (last) {
        lineEl.hidden = false;
        lineEl.className = "fc-supervise__line" + (last.ok ? "" : " is-warn");
        lineEl.textContent = last.ok ? last.line || "" : "没有执行：" + reasonText(last.reason);
      } else {
        lineEl.hidden = true;
        lineEl.textContent = "";
      }
    }
    return { update, destroy: function() {
    } };
  }
  function promptRoomStart(ctx, done) {
    var settings = ctx.state.get().settings;
    if (!allowsPermission(svg && svg.mode || settings.focusMode, "lockRoom")) {
      done();
      return;
    }
    var choice = settings.room.enabled ? settings.room.letCharSet ? "char" : "password" : "none";
    var passInput = h("input", {
      class: "fc-input",
      type: "password",
      inputmode: "numeric",
      maxlength: "8",
      placeholder: "4-8 位数字"
    });
    passInput.value = settings.room.password || "";
    var segNone = h("button", { class: "fc-seg__btn", type: "button", text: "不设置", onclick: function() {
      setChoice("none");
    } });
    var segPass = h("button", { class: "fc-seg__btn", type: "button", text: "设置密码", onclick: function() {
      setChoice("password");
    } });
    var segChar = h("button", { class: "fc-seg__btn", type: "button", text: "让角色设置", onclick: function() {
      setChoice("char");
    } });
    function setChoice(next) {
      choice = next;
      [segNone, segPass, segChar].forEach(function(b, i) {
        b.classList.toggle("is-active", ["none", "password", "char"][i] === choice);
      });
      passInput.disabled = choice !== "password";
      passInput.placeholder = choice === "char" ? "角色会在开始时设置" : "4-8 位数字";
    }
    setChoice(choice);
    var body = h("div", {}, [
      h("p", { class: "fc-row__sub", text: "开始前是否设置房间密码？不设置则本次无密码，之后可在聊天设置里修改。" }),
      h("div", { class: "fc-seg fc-seg--wide" }, [segNone, segPass, segChar]),
      h("div", { class: "fc-dialog__label", text: "房间密码" }),
      passInput
    ]);
    dialog({
      title: "房间密码",
      body,
      actions: [
        { label: "取消", value: false },
        { label: "开始", value: "start", variant: "primary" }
      ]
    }).then(function(result) {
      if (result !== "start") return;
      if (choice === "password" && !/^\d{4,8}$/.test(passInput.value.trim())) {
        ctx.host.ui.toast("密码需要 4-8 位数字");
        return;
      }
      if (choice === "char" && !settings.characterId) {
        ctx.host.ui.toast("先绑定角色，才能让角色设置密码");
        return;
      }
      ctx.actions.saveRoomSettings({
        enabled: choice !== "none",
        letCharSet: choice === "char",
        password: passInput.value
      });
      done();
    });
  }
  function openChatActions(ctx) {
    var s = ctx.state.get();
    var session = s.session;
    var running = !!(session && session.status === STATUS.RUNNING);
    var idle = !session || session.status === STATUS.IDLE || session.status === STATUS.DONE;
    var narration = !!(s.settings.chat && s.settings.chat.narration);
    var items = [
      {
        label: running ? "暂停" : idle ? "开始" : "继续",
        desc: running ? "暂停计时，聊天记录保留" : "在当前待办上开始/继续",
        run: function() {
          if (idle && session && session.phase === PHASE.FOCUS) {
            promptRoomStart(ctx, function() {
              ctx.actions.toggle();
            });
          } else {
            ctx.actions.toggle();
          }
        }
      },
      {
        label: "跳过",
        desc: "结束当前阶段，进入下一段",
        run: function() {
          ctx.actions.skip();
        }
      },
      {
        label: "结束",
        desc: "结束本轮专注并写入记录",
        run: function() {
          ctx.actions.finish();
        }
      },
      {
        label: narration ? "关闭旁白" : "开启旁白",
        desc: "动作/神态是否单独显示",
        run: function() {
          ctx.actions.updateSettings({ chat: { narration: !narration } });
        }
      }
    ];
    dialog({
      title: "计时与旁白",
      setup: function(bodyEl, close) {
        items.forEach(function(item) {
          bodyEl.appendChild(h("button", {
            class: "fc-msg-action",
            type: "button",
            onclick: function() {
              close(false);
              setTimeout(item.run, 0);
            }
          }, [
            h("span", { class: "fc-msg-action__label", text: item.label }),
            h("span", { class: "fc-msg-action__sub", text: item.desc })
          ]));
        });
      },
      actions: [{ label: "取消", value: false }]
    });
  }
  function chatScreen(root, ctx) {
    return createChatPanel(root, ctx, { openTimerActions: function() {
      openChatActions(ctx);
    } });
  }
  function copyPlainText(text, onOk, onFail) {
    function legacy() {
      var area = document.createElement("textarea");
      area.value = text;
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.select();
      var ok = false;
      try {
        ok = document.execCommand("copy");
      } catch (e) {
        ok = false;
      }
      document.body.removeChild(area);
      if (ok) onOk();
      else onFail();
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(onOk, legacy);
    } else {
      legacy();
    }
  }
  function switchEditor(label, desc, checked, onChange, opts) {
    var o = opts || {};
    var btn = h("button", {
      class: "fc-switch",
      type: "button",
      role: "switch",
      "aria-checked": String(checked),
      disabled: !!o.disabled,
      onclick: function() {
        if (o.disabled) return;
        checked = !checked;
        btn.setAttribute("aria-checked", String(checked));
        onChange(checked);
      }
    });
    return h("div", { class: "fc-row" + (o.disabled ? " fc-row--off" : "") }, [
      h("div", { class: "fc-row__main" }, [
        h("div", { class: "fc-row__title", text: label }),
        desc ? h("div", { class: "fc-row__sub", text: desc }) : null,
        o.disabled ? h("div", { class: "fc-row__sub fc-row__sub--warn", text: "当前模式不支持" }) : null
      ]),
      btn
    ]);
  }
  function textareaInput(value, rows, placeholder) {
    var area = h("textarea", { class: "fc-textarea", rows: String(rows || 6), placeholder: placeholder || "" });
    area.value = value || "";
    return area;
  }
  function insertToken(area, token) {
    var start2 = typeof area.selectionStart === "number" ? area.selectionStart : area.value.length;
    var end = typeof area.selectionEnd === "number" ? area.selectionEnd : start2;
    area.value = area.value.slice(0, start2) + token + area.value.slice(end);
    var pos = start2 + token.length;
    try {
      area.setSelectionRange(pos, pos);
    } catch (e) {
    }
    area.focus();
    area.dispatchEvent(new Event("input", { bubbles: true }));
  }
  function promptEditorBlock(title, desc, area, fallback, onSave, onInput) {
    if (typeof onInput === "function") {
      area.addEventListener("input", function() {
        onInput();
      });
    }
    var chips = h("div", { class: "fc-prompt__chips" }, PLACEHOLDERS.map(function(p) {
      return h("button", {
        class: "fc-chip fc-chip--ins",
        type: "button",
        title: p.label,
        text: "{{" + p.key + "}}",
        onclick: function() {
          insertToken(area, "{{" + p.key + "}}");
        }
      });
    }));
    return h("div", { class: "fc-prompt" }, [
      h("div", { class: "fc-prompt__head" }, [
        h("div", {}, [
          h("div", { class: "fc-prompt__title", text: title }),
          h("div", { class: "fc-row__sub", text: desc })
        ]),
        button("保存", { variant: "primary", onClick: function() {
          onSave(area.value);
        } })
      ]),
      area,
      h("div", { class: "fc-prompt__vars", text: "点一下插入占位符：" }),
      chips,
      h("div", { class: "fc-prompt__head" }, [
        h("div", { class: "fc-row__sub", text: "留空保存会恢复默认" }),
        button("恢复默认", {
          variant: "ghost",
          onClick: function() {
            area.value = fallback;
            onSave(fallback);
          }
        })
      ])
    ]);
  }
  function chatSettingsScreen(root, ctx) {
    var state = ctx.state;
    var s0 = state.get();
    var settings = s0.settings;
    var charName = settings.characterName || "未绑定角色";
    var phraseKey = settings.characterId || "";
    var custom = s0.phrases && s0.phrases[phraseKey] || [];
    var backScreen = "chat";
    var chatArea = textareaInput(settings.prompts.chat, 7);
    var proactiveArea = textareaInput(settings.prompts.proactive, 5);
    var formatChatArea = textareaInput(settings.prompts.formatChat, 6);
    var formatProactiveArea = textareaInput(settings.prompts.formatProactive, 4);
    var touchArea = textareaInput(settings.prompts.touch, 7);
    var formatTouchArea = textareaInput(settings.prompts.formatTouch, 4);
    var fallbackArea = textareaInput(
      linesToText(custom.length ? custom : FALLBACK_LINES),
      5,
      "一行一句；留空保存则使用内置兜底"
    );
    var consoleEl = h("pre", { class: "fc-console" });
    var consoleStats = h("div", { class: "fc-console__stats" });
    var tab = "chat";
    function refresh() {
      var template = tab === "chat" ? chatArea.value : proactiveArea.value;
      var p = ctx.actions.previewPrompt(tab, template);
      consoleEl.textContent = p.messages.map(function(m) {
        var label = m.role === "system" ? "SYSTEM" : m.role === "user" ? "USER" : "ASSISTANT";
        return "=== " + label + " ===\n" + m.content;
      }).join("\n\n");
      consoleStats.textContent = "system " + p.chars + " 字符 · 上下文 " + p.historyCount + " 条 · 预估 " + p.totalTokens + " tokens（提示词 " + p.systemTokens + " + 历史 " + p.historyTokens + "）";
    }
    var tabChatBtn = h("button", {
      class: "fc-console__tab is-active",
      type: "button",
      text: "聊天",
      onclick: function() {
        setTab("chat");
      }
    });
    var tabProBtn = h("button", {
      class: "fc-console__tab",
      type: "button",
      text: "主动说话",
      onclick: function() {
        setTab("proactive");
      }
    });
    function setTab(next) {
      tab = next;
      tabChatBtn.classList.toggle("is-active", next === "chat");
      tabProBtn.classList.toggle("is-active", next === "proactive");
      refresh();
    }
    var head = h("div", { class: "fc-chat-screen__head" }, [
      iconButton("back", "返回聊天", function() {
        ctx.actions.setFocusScreen(backScreen);
      }),
      h("div", { class: "fc-chat-screen__titles" }, [
        h("div", { class: "fc-chat-screen__name", text: "聊天设置" }),
        h("div", { class: "fc-chat-screen__status", text: "权限 · 房间 · 提示词 · 账单" })
      ])
    ]);
    var startTarget = settings.startScreen === "chat" ? "chat" : "timer";
    function setStartTarget(next) {
      startTarget = next;
      ctx.actions.updateSettings({ startScreen: next });
      segTimer.classList.toggle("is-active", next === "timer");
      segChat.classList.toggle("is-active", next === "chat");
    }
    var segTimer = h("button", {
      class: "fc-seg__btn" + (startTarget === "timer" ? " is-active" : ""),
      type: "button",
      text: "计时页",
      onclick: function() {
        setStartTarget("timer");
      }
    });
    var segChat = h("button", {
      class: "fc-seg__btn" + (startTarget === "chat" ? " is-active" : ""),
      type: "button",
      text: "聊天室",
      onclick: function() {
        setStartTarget("chat");
      }
    });
    var startGroup = h("section", { class: "fc-group" }, [
      h("div", { class: "fc-group__title", text: "开始与主动说话" }),
      h("div", { class: "fc-list" }, [
        h("div", { class: "fc-row" }, [
          h("div", { class: "fc-row__main" }, [
            h("div", { class: "fc-row__title", text: "开始专注后进入" }),
            h("div", {
              class: "fc-row__sub",
              text: modeInfo(s0.session && s0.session.mode || settings.focusMode).freeChat ? "低语 / 相伴等模式可进聊天室" : "当前模式聊天室只读，仍可查看历史"
            })
          ]),
          h("div", { class: "fc-seg" }, [segTimer, segChat])
        ]),
        switchEditor(
          "主动说话",
          "角色自己开口，不用你先发消息",
          settings.chat.proactive,
          function(v) {
            ctx.actions.updateSettings({ chat: { proactive: v } });
          }
        ),
        dialogStepper("安静多久后开口", "停止互动多久算安静", settings.chat.idleSeconds, LIMITS.chatIdleSec, 30, " 秒", function(v) {
          ctx.actions.updateSettings({ chat: { idleSeconds: v } });
        }),
        dialogStepper("最短间隔", "两次主动说话之间至少隔多久", Math.round(settings.chat.minIntervalSeconds / 60), [1, 60], 1, " 分钟", function(v) {
          ctx.actions.updateSettings({ chat: { minIntervalSeconds: v * 60 } });
        }),
        dialogStepper("带上最近对话", "发给 AI 的历史条数，越少越省", settings.chat.historyLimit, [2, 40], 2, " 条", function(v) {
          ctx.actions.updateSettings({ chat: { historyLimit: v } });
        }),
        dialogStepper("最少气泡", "AI 回复至少拆成几条", settings.chat.bubbleMin, LIMITS.bubbleMin, 1, " 条", function(v) {
          var cur = ctx.state.get().settings.chat;
          ctx.actions.updateSettings({ chat: { bubbleMin: v, bubbleMax: Math.max(v, cur.bubbleMax) } });
        }),
        dialogStepper("最多气泡", "AI 回复最多拆成几条", settings.chat.bubbleMax, LIMITS.bubbleMax, 1, " 条", function(v) {
          var cur = ctx.state.get().settings.chat;
          ctx.actions.updateSettings({ chat: { bubbleMax: v, bubbleMin: Math.min(v, cur.bubbleMin) } });
        })
      ])
    ]);
    function openPermConfig(key, label) {
      var cur = ctx.state.get().settings;
      var draft = {
        fixed: Math.round(cur.extend.fixedSec / 60),
        maxPer: Math.round(cur.extend.maxPerTimeSec / 60),
        total: Math.round(cur.extend.totalCapSec / 60),
        muteMax: Math.round(cur.mute.maxSec / 60),
        requireConfirm: !!cur.lockRoom.requireConfirm,
        lockMin: Math.round(cur.lockRoom.minSec / 60),
        lockMax: Math.round(cur.lockRoom.maxSec / 60)
      };
      var body = h("div", {});
      if (key === "extend") {
        body.appendChild(h("p", { class: "fc-row__sub", text: "角色加时不能超过这些限制。" }));
        body.appendChild(dialogStepper("每次加时", "一次增加多少", draft.fixed, LIMITS.extendFixedMin, 1, " 分", function(v) {
          draft.fixed = v;
        }));
        body.appendChild(dialogStepper("单次上限", "一次最多加多少", draft.maxPer, LIMITS.extendMaxPerTimeMin, 1, " 分", function(v) {
          draft.maxPer = v;
        }));
        body.appendChild(dialogStepper("累计上限", "0 表示本轮不限", draft.total, LIMITS.extendTotalCapMin, 5, " 分", function(v) {
          draft.total = v;
        }));
      } else if (key === "mute") {
        body.appendChild(h("p", { class: "fc-row__sub", text: "禁言会显示倒计时，到期自动恢复。" }));
        body.appendChild(dialogStepper("单次最长禁言", "超过会截断", draft.muteMax, LIMITS.muteMaxMin, 1, " 分", function(v) {
          draft.muteMax = v;
        }));
      } else if (key === "lockRoom") {
        body.appendChild(switchEditor("锁房间前需要我确认", "关闭后角色可以直接上锁", draft.requireConfirm, function(v) {
          draft.requireConfirm = v;
        }));
        body.appendChild(dialogStepper("锁房间最短", "AI 请求锁门不会短于这个时间", draft.lockMin, [1, 60], 1, " 分钟", function(v) {
          draft.lockMin = v;
        }));
        body.appendChild(dialogStepper("锁房间最长", "0 表示锁到本轮结束", draft.lockMax, [0, 180], 1, " 分钟", function(v) {
          draft.lockMax = v;
        }));
      }
      dialog({
        title: label + "配置",
        body,
        actions: [
          { label: "取消", value: false },
          { label: "保存", value: "save", variant: "primary" }
        ]
      }).then(function(result) {
        if (result !== "save") return;
        if (key === "extend") {
          ctx.actions.updateSettings({
            extend: { fixedSec: draft.fixed * 60, maxPerTimeSec: draft.maxPer * 60, totalCapSec: draft.total * 60 }
          });
        } else if (key === "mute") {
          ctx.actions.updateSettings({ mute: { maxSec: draft.muteMax * 60 } });
        } else if (key === "lockRoom") {
          ctx.actions.updateSettings({
            lockRoom: {
              requireConfirm: draft.requireConfirm,
              minSec: draft.lockMin * 60,
              maxSec: draft.lockMax * 60
            }
          });
        }
        ctx.host.ui.toast(label + "配置已保存");
        refresh();
      });
    }
    function permSection(key, label, desc) {
      var allowed = allowsPermission(state.get().session && state.get().session.mode || settings.focusMode, key);
      var hasConfig = key !== "password";
      var toggle = h("button", {
        class: "fc-switch",
        type: "button",
        role: "switch",
        disabled: !allowed,
        "aria-checked": String(!!settings.permissions[key]),
        onclick: function(e) {
          e.stopPropagation();
          if (!allowed) return;
          var on = toggle.getAttribute("aria-checked") !== "true";
          toggle.setAttribute("aria-checked", String(on));
          var current = ctx.state.get().settings.permissions;
          ctx.actions.updateSettings({
            permissions: Object.assign({}, current, { [key]: on })
          });
          refresh();
        }
      });
      return h("div", { class: "fc-row fc-perm-row" }, [
        h("div", {
          class: "fc-row__main",
          onclick: function() {
            if (!allowed) {
              ctx.host.ui.toast("当前模式不支持这个权限");
              return;
            }
            if (toggle.getAttribute("aria-checked") !== "true") {
              ctx.host.ui.toast("先打开这个权限，再配置");
              return;
            }
            if (hasConfig) openPermConfig(key, label);
          }
        }, [
          h("div", { class: "fc-row__title", text: label }),
          h("div", { class: "fc-row__sub", text: hasConfig ? desc + " · 点开配置" : desc }),
          allowed ? null : h("div", { class: "fc-row__sub fc-row__sub--warn", text: "当前模式不支持" })
        ]),
        toggle
      ]);
    }
    var behaviorGroup = h("section", { class: "fc-group" }, [
      h("div", { class: "fc-group__title", text: "聊天与角色权限" }),
      h("div", { class: "fc-list" }, [
        switchEditor(
          "动作/旁白",
          "允许角色用（）写动作、神态；关闭后只显示对白",
          settings.chat.narration,
          function(v) {
            ctx.actions.updateSettings({ chat: { narration: v } });
            refresh();
          }
        ),
        permSection("extend", "增加专注时长", "配置每次加时与上限"),
        permSection("mute", "暂时禁止发言", "配置禁言上限"),
        permSection("lockRoom", "锁房间", "配置锁定时长与确认"),
        permSection("password", "修改房间密码", "AI 回复带 [[password:数字]] 时执行")
      ]),
      h("p", {
        class: "fc-hint",
        text: "开关打开后，控制台会实时注入对应权限格式。"
      })
    ]);
    var roomPassInput = h("input", {
      class: "fc-input",
      type: "password",
      inputmode: "numeric",
      maxlength: "8",
      placeholder: settings.room.enabled ? "修改现有密码" : "4-8 位数字"
    });
    roomPassInput.value = settings.room.password || "";
    var roomGroup = h("section", { class: "fc-group" }, [
      h("div", { class: "fc-group__title", text: "房间密码" }),
      h("div", { class: "fc-list" }, [
        h("div", { class: "fc-room-pass" }, [
          h("div", { class: "fc-row__sub", text: "开始前会弹窗设置；留空保存关闭密码" }),
          roomPassInput,
          h("button", {
            class: "fc-btn fc-btn--primary fc-btn--block",
            type: "button",
            text: "保存密码",
            onclick: function() {
              var value = roomPassInput.value.trim();
              if (value && !/^\d{4,8}$/.test(value)) {
                ctx.host.ui.toast("房间密码需要 4-8 位数字");
                return;
              }
              ctx.actions.saveRoomSettings({
                enabled: !!value,
                letCharSet: false,
                password: value
              });
              ctx.host.ui.toast(value ? "房间密码已更新" : "房间密码已关闭");
            }
          })
        ])
      ])
    ]);
    var promptGroup = h("section", { class: "fc-group" }, [
      h("div", { class: "fc-group__title", text: "提示词" }),
      h("div", { class: "fc-list" }, [
        promptEditorBlock("聊天提示词", "每次聊天作为 system 消息发送", chatArea, DEFAULT_CHAT_PROMPT, function(value) {
          ctx.actions.savePrompt("chat", value);
          ctx.host.ui.toast("聊天提示词已保存");
          refresh();
        }, refresh),
        promptEditorBlock(
          "聊天格式提示词",
          "控制气泡条数、旁白与动作标签；模板里留空则用默认。保存后控制台生效",
          formatChatArea,
          DEFAULT_FORMAT_CHAT,
          function(value) {
            ctx.actions.savePrompt("formatChat", value);
            ctx.host.ui.toast("聊天格式提示词已保存");
            refresh();
          },
          null
        ),
        promptEditorBlock("主动说话提示词", "角色主动开口时使用，建议只说一句", proactiveArea, DEFAULT_PROACTIVE_PROMPT, function(value) {
          ctx.actions.savePrompt("proactive", value);
          ctx.host.ui.toast("主动说话提示词已保存");
          refresh();
        }, refresh),
        promptEditorBlock(
          "主动说话格式提示词",
          "主动开口时的条数与旁白规则；同样支持 {{bubble_min}} / {{permissions}}",
          formatProactiveArea,
          DEFAULT_FORMAT_PROACTIVE,
          function(value) {
            ctx.actions.savePrompt("formatProactive", value);
            ctx.host.ui.toast("主动说话格式提示词已保存");
            refresh();
          },
          null
        )
      ])
    ]);
    var touchGroup = h("section", { class: "fc-group" }, [
      h("div", { class: "fc-group__title", text: "互动（立绘点触）" }),
      h("div", { class: "fc-list" }, [
        promptEditorBlock("互动提示词", "点热区时发送；{{zone}} 是部位名", touchArea, DEFAULT_TOUCH_PROMPT, function(value) {
          ctx.actions.savePrompt("touch", value);
          ctx.host.ui.toast("互动提示词已保存");
          refresh();
        }, null),
        promptEditorBlock("互动格式提示词", "控制回应的条数、旁白与动作标签", formatTouchArea, DEFAULT_FORMAT_TOUCH2, function(value) {
          ctx.actions.savePrompt("formatTouch", value);
          ctx.host.ui.toast("互动格式提示词已保存");
          refresh();
        }, null),
        dialogStepper("反馈停留", "互动页气泡显示多久", Math.round(settings.touch.feedbackMs / 1e3), [2, 20], 1, " 秒", function(v) {
          ctx.actions.updateSettings({ touch: { feedbackMs: v * 1e3 } });
        }),
        dialogStepper("默认冷却", "新建热区的默认冷却时间", settings.touch.defaultCooldownSec, [0, 60], 1, " 秒", function(v) {
          ctx.actions.updateSettings({ touch: { defaultCooldownSec: v } });
        })
      ]),
      h("p", { class: "fc-hint", text: "立绘和每个部位的位置、台词在互动页右上角「编辑」里设置。" })
    ]);
    var fallbackGroup = h("section", { class: "fc-group" }, [
      h("div", { class: "fc-group__title", text: "AI 失败兜底" }),
      h("div", { class: "fc-list" }, [
        switchEditor(
          "失败时用兜底语句",
          "AI 超时/报错时补一句，不让聊天空着",
          settings.chat.fallback,
          function(v) {
            ctx.actions.updateSettings({ chat: { fallback: v } });
          }
        ),
        h("div", { class: "fc-prompt" }, [
          h("div", { class: "fc-prompt__head" }, [
            h("div", {}, [
              h("div", { class: "fc-prompt__title", text: "兜底语句" }),
              h("div", { class: "fc-row__sub", text: "绑定角色：" + charName + "（换角色后各存各的）" })
            ]),
            button("保存", {
              variant: "primary",
              onClick: function() {
                var count = ctx.actions.saveFallbackLines(fallbackArea.value);
                ctx.host.ui.toast(count ? "兜底语句已保存（" + count + " 句）" : "已清空，使用内置兜底");
                refresh();
              }
            })
          ]),
          fallbackArea,
          h("div", { class: "fc-row__sub", text: "一行一句，最多 50 句；留空保存 = 用内置兜底。" })
        ])
      ])
    ]);
    var copyBtn = h("button", {
      class: "fc-console__copy",
      type: "button",
      text: "复制",
      onclick: function() {
        copyPlainText(
          consoleEl.textContent,
          function() {
            ctx.host.ui.toast("已复制当前提示词");
          },
          function() {
            ctx.host.ui.toast("复制失败");
          }
        );
      }
    });
    var refreshBtn = h("button", {
      class: "fc-console__copy",
      type: "button",
      text: "刷新",
      onclick: refresh
    });
    var consoleGroup = h("section", { class: "fc-group" }, [
      h("div", { class: "fc-group__title", text: "控制台" }),
      h("div", { class: "fc-list" }, [
        h("div", { class: "fc-console__box" }, [
          h("div", { class: "fc-console__tabs" }, [
            tabChatBtn,
            tabProBtn,
            h("span", { class: "fc-console__spacer" }),
            refreshBtn,
            copyBtn
          ]),
          consoleEl,
          consoleStats,
          h("p", {
            class: "fc-hint",
            text: "显示完整请求：SYSTEM 是提示词，USER / ASSISTANT 是聊天室上下文（含还没请求回复的发言）。token 为估算值，不代表计费。"
          })
        ])
      ])
    ]);
    var styleGroup = h("section", { class: "fc-group" }, [
      h("div", { class: "fc-group__title", text: "聊天美化" }),
      h("div", { class: "fc-list" }, [
        h("div", {
          class: "fc-row fc-row--tap",
          onclick: function() {
            ctx.actions.setFocusScreen("chatStyle");
          }
        }, [
          h("div", { class: "fc-row__main" }, [
            h("div", { class: "fc-row__title", text: "气泡外观" }),
            h("div", { class: "fc-row__sub", text: "我的气泡 / 角色气泡 / 旁白，点开实时预览" })
          ]),
          h("div", { class: "fc-row__action", text: "进入 ›" })
        ])
      ])
    ]);
    root.appendChild(h("div", { class: "fc-chat-settings" }, [
      head,
      styleGroup,
      startGroup,
      behaviorGroup,
      roomGroup,
      promptGroup,
      touchGroup,
      fallbackGroup,
      consoleGroup,
      h("p", { class: "fc-hint", text: "AI 总开关、每日上限与超时在「设置 → AI 与聊天」。" })
    ]));
    refresh();
    ctx.actions.refreshMemory().then(refresh, function() {
    });
    return {
      update: function(s, keys) {
        var changed = keys || [];
        if (changed.indexOf("settings") !== -1 || changed.indexOf("session") !== -1) refresh();
      },
      destroy: function() {
      }
    };
  }
  function chatStyleScreen(root, ctx) {
    var state = ctx.state;
    var previewList = h("div", { class: "fc-chat__list fc-chat__list--preview" });
    var previewBox = h("div", { class: "fc-chat-style__preview" }, [
      h("div", { class: "fc-chat-screen fc-chat-screen--preview" }, [previewList])
    ]);
    var controls = h("div", { class: "fc-chat-style__controls" });
    function currentStyle() {
      var s = state.get().settings;
      return s && s.chatStyle || DEFAULT_CHAT_STYLE;
    }
    function renderPreview() {
      clear(previewList);
      previewList.appendChild(h("div", { class: "fc-chat__msg fc-chat__msg--char" }, [
        h("div", { class: "fc-chat__bubble" }, [h("div", { class: "fc-chat__text", text: "我先在，你专心。" })]),
        h("div", { class: "fc-chat__time", text: "21:04" })
      ]));
      previewList.appendChild(h("div", { class: "fc-chat__narration", text: "（他把水杯推到你手边）" }));
      previewList.appendChild(h("div", { class: "fc-chat__msg fc-chat__msg--me" }, [
        h("div", { class: "fc-chat__bubble" }, [h("div", { class: "fc-chat__text", text: "好，做完这页找你。" })]),
        h("div", { class: "fc-chat__time", text: "21:05" })
      ]));
    }
    function applyToPreview() {
      applyChatStyle(previewBox, currentStyle());
    }
    function patchStyle(key, value) {
      var next = Object.assign({}, currentStyle());
      next[key] = value;
      ctx.actions.updateSettings({ chatStyle: next });
      applyToPreview();
      renderPreview();
    }
    function colorRow(label, key) {
      var input = h("input", { class: "fc-color", type: "color" });
      input.value = String(currentStyle()[key] || CHAT_STYLE_FALLBACK_COLORS[key] || "#CCCCCC").toLowerCase();
      input.addEventListener("input", function() {
        patchStyle(key, input.value.toUpperCase());
      });
      var reset = h("button", {
        class: "fc-chip",
        type: "button",
        text: "跟随主题",
        onclick: function() {
          input.value = String(CHAT_STYLE_FALLBACK_COLORS[key] || "#CCCCCC").toLowerCase();
          patchStyle(key, "");
        }
      });
      return h("div", { class: "fc-color-row" }, [h("span", { text: label }), input, reset]);
    }
    function numberRow(label, desc, key, min, max, step, unit) {
      var value = Number(currentStyle()[key]);
      var valueEl = h("span", { class: "fc-stepper__value", text: value + unit });
      var minus;
      var plus;
      function set(next) {
        var v = Math.round(next / step) * step;
        if (v < min || v > max) return;
        value = Math.round(v * 10) / 10;
        valueEl.textContent = value + unit;
        minus.disabled = value <= min;
        plus.disabled = value >= max;
        patchStyle(key, value);
      }
      minus = h("button", { class: "fc-stepper__btn", type: "button", text: "−", onclick: function() {
        set(value - step);
      } });
      plus = h("button", { class: "fc-stepper__btn", type: "button", text: "+", onclick: function() {
        set(value + step);
      } });
      minus.disabled = value <= min;
      plus.disabled = value >= max;
      return h("div", { class: "fc-row" }, [
        h("div", { class: "fc-row__main" }, [
          h("div", { class: "fc-row__title", text: label }),
          desc ? h("div", { class: "fc-row__sub", text: desc }) : null
        ]),
        h("div", { class: "fc-stepper" }, [minus, valueEl, plus])
      ]);
    }
    function buildControls() {
      clear(controls);
      controls.appendChild(h("section", { class: "fc-group" }, [
        h("div", { class: "fc-group__title", text: "预设" }),
        h("div", { class: "fc-list" }, [
          h("div", { class: "fc-prompt__chips" }, CHAT_STYLE_PRESETS.map(function(preset) {
            return h("button", {
              class: "fc-chip fc-chip--ins",
              type: "button",
              text: preset.name,
              onclick: function() {
                ctx.actions.updateSettings({
                  chatStyle: applyChatStylePreset(currentStyle(), preset.id)
                });
                applyToPreview();
                buildControls();
                renderPreview();
              }
            });
          }))
        ])
      ]));
      controls.appendChild(h("section", { class: "fc-group" }, [
        h("div", { class: "fc-group__title", text: "颜色" }),
        h("div", { class: "fc-list" }, [
          h("div", { class: "fc-color-grid" }, [
            colorRow("我的气泡", "mineBg"),
            colorRow("我的文字", "mineInk"),
            colorRow("角色气泡", "charBg"),
            colorRow("角色文字", "charInk"),
            colorRow("旁白文字", "narrationInk")
          ])
        ])
      ]));
      controls.appendChild(h("section", { class: "fc-group" }, [
        h("div", { class: "fc-group__title", text: "形状与字号" }),
        h("div", { class: "fc-list" }, [
          numberRow("圆角", "气泡的圆角大小", "radius", 0, 24, 1, " px"),
          numberRow("正文大小", "气泡里的字有多大", "fontSize", 11, 18, 0.5, " px"),
          numberRow("气泡宽度", "占聊天区的百分比", "maxWidth", 60, 92, 2, "%"),
          numberRow("旁白大小", "整屏居中的动作说明", "narrationSize", 11, 16, 0.5, " px"),
          switchEditor("显示时间", "气泡下方的时间戳", !!currentStyle().timeShow, function(v) {
            patchStyle("timeShow", v);
          })
        ])
      ]));
      controls.appendChild(h("div", { class: "fc-chat-style__foot" }, [
        button("恢复默认外观", {
          variant: "ghost",
          onClick: function() {
            ctx.actions.updateSettings({ chatStyle: DEFAULT_CHAT_STYLE });
            applyToPreview();
            buildControls();
            renderPreview();
            ctx.host.ui.toast("已恢复默认气泡外观");
          }
        })
      ]));
    }
    var head = h("div", { class: "fc-chat-screen__head" }, [
      iconButton("back", "返回聊天设置", function() {
        ctx.actions.setFocusScreen("chatSettings");
      }),
      h("div", { class: "fc-chat-screen__titles" }, [
        h("div", { class: "fc-chat-screen__name", text: "聊天美化" }),
        h("div", { class: "fc-chat-screen__status", text: "改动即时生效，只影响聊天室与互动小窗" })
      ])
    ]);
    root.appendChild(h("div", { class: "fc-chat-settings fc-chat-style" }, [
      head,
      previewBox,
      controls,
      h("p", { class: "fc-hint", text: "颜色留空（点「跟随主题」）时沿用当前主题色，切换深浅色也不会撞色。" })
    ]));
    applyToPreview();
    renderPreview();
    buildControls();
    return {
      update: function(s, keys) {
        var changed = keys || [];
        if (changed.indexOf("settings") === -1) return;
        applyToPreview();
        renderPreview();
      },
      destroy: function() {
      }
    };
  }
  var focus_default = {
    mount: function(page, ctx) {
      var state = ctx.state;
      var root = h("div", { class: "fc-screen" });
      page.appendChild(root);
      var current = "";
      var view = null;
      function touchScreen(r, c) {
        return touch_default.mount(r, c);
      }
      function sync(s) {
        var screens = ["timer", "chat", "chatSettings", "chatStyle", "touch"];
        var name = screens.indexOf(s.focusScreen) !== -1 ? s.focusScreen : "list";
        if (name !== current) {
          if (view && view.destroy) view.destroy();
          clear(root);
          current = name;
          page.classList.toggle("fc-page--fill", name === "chat" || name === "touch");
          view = (name === "timer" ? timerScreen : name === "chat" ? chatScreen : name === "chatSettings" ? chatSettingsScreen : name === "chatStyle" ? chatStyleScreen : name === "touch" ? touchScreen : listScreen)(root, ctx);
        }
        if (view && view.update) view.update(s, []);
      }
      sync(state.get());
      return {
        update: function(s) {
          sync(s);
        },
        destroy: function() {
          if (view && view.destroy) view.destroy();
          page.classList.remove("fc-page--fill");
        }
      };
    }
  };

  // src/core/noteFormat.js
  var PATTERN2 = /(\*\*[^*\n]+\*\*|~~[^~\n]+~~|==[^=\n]+==|__[^_\n]+__|\|\|[^|\n]+\|\||\*[^*\n]+\*)/g;
  var MARKS = [
    { open: "**", type: "bold" },
    { open: "~~", type: "strike" },
    { open: "==", type: "highlight" },
    { open: "__", type: "underline" },
    { open: "||", type: "spoiler" },
    { open: "*", type: "italic" }
  ];
  function typeOf(raw) {
    for (var i = 0; i < MARKS.length; i++) {
      var m = MARKS[i];
      if (raw.slice(0, m.open.length) === m.open) return m.type;
    }
    return "text";
  }
  function parseNote(text) {
    var s = String(text === void 0 || text === null ? "" : text);
    var out = [];
    var last = 0;
    var m;
    PATTERN2.lastIndex = 0;
    while (m = PATTERN2.exec(s)) {
      if (m.index > last) out.push({ type: "text", text: s.slice(last, m.index) });
      var raw = m[0];
      var type = typeOf(raw);
      var open = 1;
      if (type === "bold" || type === "strike" || type === "highlight" || type === "underline" || type === "spoiler") open = 2;
      out.push({ type, text: raw.slice(open, raw.length - open) });
      last = m.index + raw.length;
    }
    if (last < s.length) out.push({ type: "text", text: s.slice(last) });
    return out;
  }

  // src/ui/noteText.js
  function noteTextNode(text) {
    return h("span", { class: "fc-note-text" }, parseNote(text).map(function(seg) {
      if (seg.type === "text") return h("span", { text: seg.text });
      var cls = "fc-note-" + seg.type;
      if (seg.type === "spoiler") {
        return h("span", {
          class: cls,
          role: "button",
          title: "点一下显示",
          onclick: function(e) {
            e.stopPropagation();
            this.classList.toggle("is-open");
          }
        }, [h("span", { text: seg.text })]);
      }
      return h("span", { class: cls, text: seg.text });
    }));
  }

  // src/ui/recordDetail.js
  function row(label, value) {
    return h("div", { class: "fc-row" }, [
      h("div", { class: "fc-row__main" }, [h("div", { class: "fc-row__title", text: label })]),
      h("div", { class: "fc-row__value", text: value })
    ]);
  }
  function interventionsText(counts) {
    if (!counts) return "";
    var parts = [];
    if (counts.extend) parts.push("加时 " + counts.extend + " 次");
    if (counts.mute) parts.push("禁言 " + counts.mute + " 次");
    if (counts.lock) parts.push("锁房间 " + counts.lock + " 次");
    if (counts.speak) parts.push("发言 " + counts.speak + " 次");
    return parts.join(" · ");
  }
  function openChatArchive(record) {
    var body = h("div", { class: "fc-archive" }, record.transcript.map(function(msg) {
      var isChar = msg.role !== "user";
      return h("div", { class: "fc-chat__msg fc-chat__msg--" + (isChar ? "char" : "me") }, [
        h("div", { class: "fc-chat__bubble", text: msg.text }),
        msg.at ? h("div", { class: "fc-chat__time", text: fmtTime(msg.at) }) : null
      ]);
    }));
    dialog({
      title: "聊天存档",
      body,
      actions: [{ label: "关闭", value: true, variant: "primary" }]
    });
  }
  function noteBlock(record, ctx) {
    var style = styleForRecord(record, ctx.state.get().settings.noteStyles);
    var textEl = h("div", { class: "fc-detail-note__text" }, [noteTextNode(record.note)]);
    var vars = noteStyleVars(style);
    Object.keys(vars).forEach(function(key) {
      textEl.style.setProperty(key, vars[key]);
    });
    return h("div", {
      class: "fc-detail-note fc-detail-note--hl-" + (style.hlMode || "marker")
    }, [
      h("div", { class: "fc-row__sub", text: "角色便签" }),
      textEl
    ]);
  }
  function openRecordDetail(record, ctx) {
    var extra = interventionsText(record.interventions);
    var body = h("div", {}, [
      row("模式", modeLabel(record.mode)),
      record.characterName ? row("角色", record.characterName) : null,
      record.taskName ? row("待办", record.taskName) : null,
      row("开始", fmtTime(record.startedAt)),
      row("结束", fmtTime(record.endedAt)),
      row("本轮番茄", (record.pomodoros || 1) + " 个"),
      row("实际专注", fmtDuration(record.actualMs)),
      row("计划时长", fmtDuration(record.plannedMs)),
      record.bonusMs ? row("角色加时", "+" + fmtDuration(record.bonusMs, { compact: true })) : null,
      extra ? row("角色介入", extra) : null,
      row("状态", record.completed ? "已完成" : "提前结束"),
      record.demo ? row("类型", "示例便签（不计入统计）") : null,
      record.note ? noteBlock(record, ctx) : null,
      record.transcript && record.transcript.length ? h("div", { class: "fc-row fc-row--tap", onclick: function() {
        openChatArchive(record);
      } }, [
        h("div", { class: "fc-row__main" }, [
          h("div", { class: "fc-row__title", text: "聊天存档" }),
          h("div", { class: "fc-row__sub", text: "共 " + record.transcript.length + " 条" })
        ]),
        h("div", { class: "fc-row__action", text: "查看 ›" })
      ]) : null
    ]);
    dialog({
      title: "专注详情",
      body,
      actions: [
        { label: "删除", value: "delete", variant: "danger" },
        { label: "关闭", value: true, variant: "primary" }
      ]
    }).then(async function(result) {
      if (result !== "delete") return;
      var ok = await ctx.host.ui.confirm({
        title: "删除记录",
        message: "这条专注记录与便签会一起删除，确定吗？"
      });
      if (ok) ctx.actions.deleteRecord(record.id);
    });
  }

  // src/ui/views/stats.js
  var stats_default = {
    mount: function(page, ctx) {
      var state = ctx.state;
      var initial = state.get();
      var cursor = initial.calendar;
      var selectedDay = dayKey(initial.now);
      var lastRecordsRef = null;
      var lastSelectedDay = "";
      var tiles = h("div", { class: "fc-tiles" });
      var monthLabel = h("div", { class: "fc-cal__month" });
      var prevBtn = h("button", { class: "fc-cal__nav", type: "button", text: "‹", onclick: function() {
        shiftMonth(-1);
      } });
      var nextBtn = h("button", { class: "fc-cal__nav", type: "button", text: "›", onclick: function() {
        shiftMonth(1);
      } });
      var grid = h("div", { class: "fc-cal__grid" });
      var legend = h("div", { class: "fc-cal__legend" }, [
        h("span", { text: "少" }),
        h("i", { style: "background:var(--fc-heat-0)" }),
        h("i", { style: "background:var(--fc-heat-1)" }),
        h("i", { style: "background:var(--fc-heat-2)" }),
        h("i", { style: "background:var(--fc-heat-3)" }),
        h("i", { style: "background:var(--fc-heat-4)" }),
        h("span", { text: "多" })
      ]);
      var cal = h("div", { class: "fc-cal" }, [
        h("div", { class: "fc-cal__head" }, [
          h("div", {}, [monthLabel]),
          h("div", {}, [prevBtn, nextBtn])
        ]),
        h("div", { class: "fc-cal__week" }, WEEKDAYS.map(function(w) {
          return h("div", { class: "fc-cal__weekday", text: w });
        })),
        grid,
        legend
      ]);
      var dayTitle = h("div", { class: "fc-dayview__title" });
      var daySummary = h("div", { class: "fc-dayview__sub" });
      var dayList = h("div", { class: "fc-list" });
      var todayBtn = h("button", {
        class: "fc-btn fc-btn--ghost fc-dayview__today",
        type: "button",
        text: "回到今天",
        onclick: function() {
          jumpToday();
        }
      });
      var dayView = h("section", { class: "fc-dayview" }, [
        h("div", { class: "fc-dayview__head" }, [
          h("div", {}, [dayTitle, daySummary]),
          todayBtn
        ]),
        dayList
      ]);
      page.appendChild(h("div", {}, [
        pageHeader("统计", "专注时长、连续天数与当天记录", closeButton(function() {
          ctx.host.ui.closeApp();
        })),
        tiles,
        card([cal]),
        h("p", { class: "fc-hint", text: "点日期查看当天记录；统计全部由本机记录计算，不调用任何接口。" }),
        dayView
      ]));
      function shiftMonth(delta) {
        var m = cursor.month + delta;
        var y = cursor.year;
        if (m < 0) {
          m = 11;
          y -= 1;
        }
        if (m > 11) {
          m = 0;
          y += 1;
        }
        cursor = { year: y, month: m };
        var d = selectedDay.split("-");
        if (Number(d[0]) !== y || Number(d[1]) - 1 !== m) {
          selectedDay = dayKey(new Date(y, m, 1).getTime());
        }
        ctx.actions.setCalendar(y, m);
      }
      function jumpToday() {
        var now = state.get().now;
        selectedDay = dayKey(now);
        var d = new Date(now);
        if (cursor.year !== d.getFullYear() || cursor.month !== d.getMonth()) {
          cursor = { year: d.getFullYear(), month: d.getMonth() };
          ctx.actions.setCalendar(cursor.year, cursor.month);
        }
        render(state.get());
      }
      function selectDay(key) {
        selectedDay = key;
        render(state.get());
      }
      function dayLabel(key, now) {
        if (key === dayKey(now)) return "今天 · " + fmtDateCN(now);
        var parts = key.split("-");
        var ts = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2])).getTime();
        return fmtDateCN(ts) + " 周" + weekdayCN(ts);
      }
      function renderDay(s) {
        var list = (s.records || []).filter(function(r) {
          return !r.demo && r.dateKey === selectedDay;
        });
        var totalMs2 = 0;
        var focusCount = 0;
        list.forEach(function(r) {
          totalMs2 += r.actualMs;
          focusCount += Math.max(1, Number(r.pomodoros) || 1);
        });
        dayTitle.textContent = dayLabel(selectedDay, s.now);
        daySummary.textContent = list.length ? focusCount + " 次 · " + fmtDuration(totalMs2, { compact: false }) + " · " + list.length + " 轮" : "没有记录";
        todayBtn.hidden = selectedDay === dayKey(s.now);
        clear(dayList);
        if (!list.length) {
          dayList.appendChild(emptyState("这一天没有专注记录", "完成一次专注后，记录会出现在这里。"));
          return;
        }
        list.forEach(function(r) {
          dayList.appendChild(h("div", {
            class: "fc-row fc-row--tap",
            onclick: function() {
              openRecordDetail(r, ctx);
            }
          }, [
            h("div", { class: "fc-row__main" }, [
              h("div", { class: "fc-row__title" }, [
                h("span", { text: fmtTime(r.startedAt) + " - " + fmtTime(r.endedAt) }),
                r.completed ? null : h("span", { class: "fc-hist__badge fc-hist__badge--abort", text: "提前结束" }),
                r.note ? h("span", { class: "fc-hist__badge", text: "便签" }) : null
              ]),
              h("div", {
                class: "fc-row__sub",
                text: (r.taskName || "未指定待办") + " · " + (r.pomodoros || 1) + " 个番茄"
              })
            ]),
            h("div", { class: "fc-row__value", text: fmtDuration(r.actualMs, { compact: true }) })
          ]));
        });
      }
      function render(s) {
        var records = (s.records || []).filter(function(r) {
          return !r.demo;
        });
        var map = byDay(records);
        var now = s.now;
        var sum = monthSummary(records, cursor.year, cursor.month);
        clear(tiles);
        tiles.appendChild(statTile("本月专注", fmtDuration(sum.totalMs, { compact: true }), sum.activeDays + " 天有记录"));
        tiles.appendChild(statTile("本月完成", String(sum.count) + " 次", "日均 " + fmtDuration(sum.avgMs, { compact: true })));
        tiles.appendChild(statTile("连续专注", String(streakDays(map, now)) + " 天", "含今天"));
        monthLabel.textContent = cursor.year + " 年 " + (cursor.month + 1) + " 月";
        var today = new Date(now);
        var isFuture = cursor.year > today.getFullYear() || cursor.year === today.getFullYear() && cursor.month > today.getMonth();
        nextBtn.disabled = isFuture;
        var cells = monthCells(cursor.year, cursor.month, map, now);
        var max = maxMsInCells(cells);
        var todayKey = dayKey(now);
        clear(grid);
        cells.forEach(function(c) {
          var cls = "fc-day";
          if (!c.inMonth) cls += " fc-day--out";
          else {
            var lvl = heatLevel(c.ms, max);
            if (lvl > 0) cls += " fc-day--h" + lvl;
          }
          if (c.key === todayKey) cls += " fc-day--today";
          if (c.key === selectedDay) cls += " fc-day--selected";
          var cell = h("button", {
            class: cls,
            type: "button",
            title: c.ms ? fmtDuration(c.ms, { compact: true }) : "",
            onclick: function() {
              selectDay(c.key);
            }
          }, [
            h("span", { text: c.inMonth ? String(c.day) : "" }),
            c.count ? h("span", { class: "fc-day__dot" }) : null
          ]);
          if (!c.inMonth) cell.disabled = true;
          grid.appendChild(cell);
        });
        if (s.records !== lastRecordsRef || selectedDay !== lastSelectedDay) {
          lastRecordsRef = s.records;
          lastSelectedDay = selectedDay;
          renderDay(s);
        }
      }
      render(initial);
      return {
        update: function(s, keys) {
          if (keys.indexOf("calendar") !== -1) cursor = s.calendar;
          if (keys.indexOf("now") !== -1 && keys.length === 1) return;
          render(s);
        },
        destroy: function() {
        }
      };
    }
  };

  // src/core/notes.js
  var NOTE_RANGES = [
    { id: "all", label: "全部" },
    { id: "today", label: "今天" },
    { id: "week", label: "本周" },
    { id: "month", label: "本月" }
  ];
  function noteRangeBounds(range, now) {
    if (range === "today") {
      var from = startOfDay(now);
      return { from, to: addDays(from, 1) };
    }
    if (range === "week") {
      var offset = (new Date(now).getDay() + 6) % 7;
      var weekStart = startOfDay(addDays(startOfDay(now), -offset));
      return { from: weekStart, to: addDays(weekStart, 7) };
    }
    if (range === "month") {
      var d = new Date(now);
      return {
        from: new Date(d.getFullYear(), d.getMonth(), 1).getTime(),
        to: new Date(d.getFullYear(), d.getMonth() + 1, 1).getTime()
      };
    }
    return { from: 0, to: Number.MAX_SAFE_INTEGER };
  }
  function filterNotes(records, opts) {
    var options = opts || {};
    var now = Number(options.now) || 0;
    var range = options.range || "all";
    var query = String(options.query || "").trim().toLowerCase();
    var bounds = noteRangeBounds(range, now);
    return (records || []).filter(function(r) {
      if (!r || !r.note) return false;
      if (r.startedAt < bounds.from || r.startedAt >= bounds.to) return false;
      if (!query) return true;
      var haystack = (String(r.note) + " " + String(r.taskName || "") + " " + String(r.characterName || "")).toLowerCase();
      return haystack.indexOf(query) !== -1;
    }).sort(function(a, b) {
      return b.startedAt - a.startedAt;
    });
  }

  // src/ui/views/notes.js
  var PATTERN_LABELS = {
    lines: "横线",
    grid: "方格",
    dots: "点阵",
    blank: "空白"
  };
  var HL_MODE_LABELS = {
    marker: "马克笔（半高底色）",
    underline: "下划线",
    color: "只改文字颜色",
    block: "实心块"
  };
  function applyStyle(node, record, style) {
    var vars = noteStyleVars(style);
    Object.keys(vars).forEach(function(key) {
      node.style.setProperty(key, vars[key]);
    });
    node.classList.add("fc-note-card--pattern-" + style.pattern);
    node.classList.add("fc-note-card--hl-" + (style.hlMode || "marker"));
    node.style.setProperty("--fc-note-angle", noteAngle(record.id, style) + "deg");
  }
  function previewNode(style, text) {
    var node = h("div", {
      class: "fc-note-card fc-note-preview fc-note-card--pattern-" + style.pattern + " fc-note-card--hl-" + (style.hlMode || "marker")
    }, [
      h("div", { class: "fc-note-card__text" }, [noteTextNode(text || "便签样式")])
    ]);
    var vars = noteStyleVars(style);
    Object.keys(vars).forEach(function(key) {
      node.style.setProperty(key, vars[key]);
    });
    node.style.setProperty("--fc-note-angle", "0deg");
    return node;
  }
  function openNoteEditor(record, ctx, refresh) {
    var area = h("textarea", { class: "fc-textarea", rows: "5" });
    area.value = record.note;
    dialog({
      title: "编辑便签",
      body: h("div", {}, [
        area,
        h("p", {
          class: "fc-hint",
          text: "可用 **加粗**  *斜体*  ==高亮==  ~~划掉~~  __下划线__  ||遮盖||"
        })
      ]),
      actions: [
        { label: "取消", value: false },
        { label: "保存", value: "save", variant: "primary" }
      ]
    }).then(function(result) {
      if (result !== "save") return;
      if (!ctx.actions.updateNote(record.id, area.value)) {
        ctx.host.ui.toast("便签不能为空");
        return;
      }
      ctx.host.ui.toast("便签已保存");
      refresh();
    });
  }
  async function deleteNote(record, ctx, refresh) {
    var demo = !!record.demo;
    var ok = await ctx.host.ui.confirm({
      title: demo ? "删除示例便签" : "删除便签",
      message: demo ? "示例便签会直接删除，不影响统计。" : "便签会从墙上移除，这次专注的记录仍然保留。"
    });
    if (!ok) return;
    if (demo) ctx.actions.deleteRecord(record.id);
    else ctx.actions.clearNote(record.id);
    refresh();
  }
  function openStylePicker(record, ctx, refresh) {
    var settings = ctx.state.get().settings;
    var styles = allNoteStyles(settings.noteStyles);
    var current = styleForRecord(record, settings.noteStyles);
    dialog({
      title: "选择便签样式",
      setup: function(bodyEl, close) {
        var grid = h("div", { class: "fc-style-grid" });
        styles.forEach(function(style) {
          var option = h("button", {
            class: "fc-style-option" + (style.id === current.id ? " is-active" : ""),
            type: "button",
            onclick: function() {
              close(style.id);
            }
          }, [
            previewNode(style, "样式预览"),
            h("div", { class: "fc-style-option__name" }, [
              h("span", { text: style.name }),
              style.id === current.id ? h("span", { text: "当前" }) : null
            ])
          ]);
          grid.appendChild(option);
        });
        bodyEl.appendChild(grid);
      },
      actions: [{ label: "取消", value: false }]
    }).then(function(id) {
      if (typeof id !== "string" || !id) return;
      if (ctx.actions.updateNoteStyle(record.id, id)) {
        ctx.host.ui.toast("便签样式已更新");
        refresh();
      }
    });
  }
  function openStyleEditor(existing, ctx, onSaved) {
    var source = existing || {
      name: "新样式",
      bg: "#FFF8D6",
      ink: "#2C2B26",
      tape: "#FFFFFF",
      line: "#8A7A4A",
      pattern: "lines",
      tilt: 1.8,
      hl: "#FFE27A",
      hlMode: "marker"
    };
    var draft = {
      id: source.id,
      name: source.name,
      bg: source.bg,
      ink: source.ink,
      tape: source.tape,
      line: source.line,
      pattern: source.pattern,
      tilt: source.tilt,
      hl: source.hl || "#FFE27A",
      hlMode: source.hlMode || "marker"
    };
    var nameInput = h("input", { class: "fc-input", type: "text", maxlength: "12" });
    nameInput.value = draft.name;
    var preview = previewNode(draft, "**便签** 样式 ==预览==");
    function setVar(key, value) {
      draft[key] = value;
      preview.style.setProperty("--note-" + key, value);
    }
    function colorRow(label, key) {
      var input = h("input", { class: "fc-color", type: "color" });
      input.value = String(draft[key]).toLowerCase();
      input.addEventListener("input", function() {
        setVar(key, input.value);
      });
      return h("div", { class: "fc-color-row" }, [
        h("span", { text: label }),
        input
      ]);
    }
    var patternSelect = h("select", { class: "fc-input" }, NOTE_PATTERNS.map(function(p) {
      return h("option", { value: p, text: PATTERN_LABELS[p] || p });
    }));
    patternSelect.value = draft.pattern;
    patternSelect.addEventListener("change", function() {
      draft.pattern = patternSelect.value;
      preview.className = "fc-note-card fc-note-preview fc-note-card--pattern-" + draft.pattern + " fc-note-card--hl-" + draft.hlMode;
    });
    var hlModeSelect = h("select", { class: "fc-input" }, NOTE_HL_MODES.map(function(m) {
      return h("option", { value: m, text: HL_MODE_LABELS[m] || m });
    }));
    hlModeSelect.value = draft.hlMode;
    hlModeSelect.addEventListener("change", function() {
      preview.classList.remove("fc-note-card--hl-" + draft.hlMode);
      draft.hlMode = hlModeSelect.value;
      preview.classList.add("fc-note-card--hl-" + draft.hlMode);
    });
    var tiltLabel = h("span", { class: "fc-row__sub", text: draft.tilt.toFixed(1) + "°" });
    var tilt = h("input", { class: "fc-range", type: "range", min: "0", max: "4", step: "0.2" });
    tilt.value = String(draft.tilt);
    tilt.addEventListener("input", function() {
      draft.tilt = Number(tilt.value);
      tiltLabel.textContent = draft.tilt.toFixed(1) + "°";
    });
    var body = h("div", {}, [
      h("div", { class: "fc-dialog__label", text: "样式名称" }),
      nameInput,
      h("div", { class: "fc-style-editor__preview" }, [preview]),
      h("div", { class: "fc-color-grid" }, [
        colorRow("纸张", "bg"),
        colorRow("文字", "ink"),
        colorRow("胶带", "tape"),
        colorRow("线条", "line"),
        colorRow("高亮", "hl")
      ]),
      h("div", { class: "fc-dialog__label", text: "纹理" }),
      patternSelect,
      h("div", { class: "fc-dialog__label", text: "高亮样式（==文字==）" }),
      hlModeSelect,
      h("div", { class: "fc-dialog__label", text: "倾斜幅度" }),
      h("div", { class: "fc-tilt-row" }, [tilt, tiltLabel])
    ]);
    dialog({
      title: existing ? "编辑样式" : "新建样式",
      body,
      actions: [
        { label: "取消", value: false },
        { label: "保存", value: "save", variant: "primary" }
      ]
    }).then(function(result) {
      if (result !== "save") return;
      draft.name = nameInput.value;
      var style = normalizeNoteStyle(draft);
      if (!style) {
        ctx.host.ui.toast("请填写样式名称");
        return;
      }
      var saved = ctx.actions.saveNoteStyle(style);
      if (!saved) {
        ctx.host.ui.toast("样式保存失败");
        return;
      }
      ctx.host.ui.toast("样式已保存");
      onSaved();
    });
  }
  function pickRuleBlock(settings, ctx, refresh) {
    var pick = settings.noteStylePick || { mode: "all", fixedId: "", poolIds: [] };
    var styles = allNoteStyles(settings.noteStyles);
    var modes = [
      { id: "all", label: "全部随机" },
      { id: "pool", label: "勾选范围" },
      { id: "fixed", label: "固定一款" }
    ];
    function setPick(patch) {
      ctx.actions.updateSettings({ noteStylePick: Object.assign({}, pick, patch) });
      refresh();
    }
    var body = h("div", { class: "fc-pickrule" }, [
      h("div", { class: "fc-seg fc-seg--wide" }, modes.map(function(m) {
        return h("button", {
          class: "fc-seg__btn" + (pick.mode === m.id ? " is-active" : ""),
          type: "button",
          text: m.label,
          onclick: function() {
            setPick({ mode: m.id });
          }
        });
      }))
    ]);
    if (pick.mode === "pool") {
      body.appendChild(h("p", { class: "fc-row__sub", text: "点一下加入/移出随机池；一款都没选时退回全部随机。" }));
      body.appendChild(h("div", { class: "fc-prompt__chips" }, styles.map(function(style) {
        var on = pick.poolIds.indexOf(style.id) !== -1;
        return h("button", {
          class: "fc-chip fc-chip--ins" + (on ? " is-active" : ""),
          type: "button",
          text: (on ? "✓ " : "") + style.name,
          onclick: function() {
            var ids = pick.poolIds.slice();
            var index = ids.indexOf(style.id);
            if (index === -1) ids.push(style.id);
            else ids.splice(index, 1);
            setPick({ mode: "pool", poolIds: ids });
          }
        });
      })));
    } else if (pick.mode === "fixed") {
      var select = h("select", { class: "fc-input" }, styles.map(function(style) {
        return h("option", { value: style.id, text: style.name });
      }));
      select.value = pick.fixedId || styles[0].id;
      select.addEventListener("change", function() {
        setPick({ fixedId: select.value });
      });
      body.appendChild(h("p", { class: "fc-row__sub", text: "之后生成的便签固定用这一款。" }));
      body.appendChild(select);
    } else {
      body.appendChild(h("p", { class: "fc-row__sub", text: "内置 8 款与自定义样式都会参与随机。" }));
    }
    return body;
  }
  function openStyleManager(ctx, onChange) {
    var settings = ctx.state.get().settings;
    dialog({
      title: "便签样式",
      setup: function(bodyEl) {
        var wrap = h("div", { class: "fc-style-manager" });
        bodyEl.appendChild(wrap);
        function render() {
          clear(wrap);
          var current = ctx.state.get().settings;
          wrap.appendChild(h("div", { class: "fc-dialog__label", text: "生成规则" }));
          wrap.appendChild(pickRuleBlock(current, ctx, function() {
            render();
            onChange();
          }));
          wrap.appendChild(h("div", { class: "fc-dialog__label", text: "内置样式" }));
          var builtinGrid = h("div", { class: "fc-style-grid" });
          BUILTIN_NOTE_STYLES.forEach(function(style) {
            builtinGrid.appendChild(h("div", { class: "fc-style-card" }, [
              previewNode(style, "样式预览"),
              h("div", { class: "fc-style-option__name", text: style.name })
            ]));
          });
          wrap.appendChild(builtinGrid);
          wrap.appendChild(h("div", { class: "fc-dialog__label", text: "我的样式" }));
          if (!current.noteStyles.length) {
            wrap.appendChild(h("p", { class: "fc-row__sub", text: "还没有自定义样式。新建后会进入随机抽取池。" }));
          } else {
            current.noteStyles.forEach(function(style) {
              wrap.appendChild(h("div", { class: "fc-style-row" }, [
                previewNode(style, "样式预览"),
                h("div", { class: "fc-style-row__main" }, [
                  h("div", { class: "fc-style-row__name", text: style.name }),
                  h("div", { class: "fc-row__sub", text: PATTERN_LABELS[style.pattern] + " · " + style.tilt.toFixed(1) + "°" })
                ]),
                h("button", {
                  class: "fc-iconbtn",
                  type: "button",
                  "aria-label": "编辑样式",
                  onclick: function() {
                    openStyleEditor(style, ctx, function() {
                      render();
                      onChange();
                    });
                  }
                }, [icon("pencil")]),
                h("button", {
                  class: "fc-iconbtn",
                  type: "button",
                  "aria-label": "删除样式",
                  onclick: async function() {
                    var ok = await ctx.host.ui.confirm({ title: "删除样式", message: "使用这个样式的便签会回落到内置样式。" });
                    if (!ok) return;
                    ctx.actions.deleteNoteStyle(style.id);
                    render();
                    onChange();
                  }
                }, [icon("trash")])
              ]));
            });
          }
          wrap.appendChild(h("div", { class: "fc-style-manager__foot" }, [
            button("新建样式", {
              variant: "primary",
              onClick: function() {
                openStyleEditor(null, ctx, function() {
                  render();
                  onChange();
                });
              }
            }),
            h("span", { class: "fc-row__sub", text: "共 " + allNoteStyles(current.noteStyles).length + " 种" })
          ]));
        }
        render();
      },
      actions: [{ label: "关闭", value: true, variant: "primary" }]
    });
  }
  function openNoteSettings(ctx, onChange) {
    var settings = ctx.state.get().settings;
    var enabled = settings.notes.enabled;
    var switchBtn = h("button", {
      class: "fc-switch",
      type: "button",
      role: "switch",
      "aria-checked": String(enabled),
      onclick: function() {
        enabled = !enabled;
        switchBtn.setAttribute("aria-checked", String(enabled));
      }
    });
    var area = h("textarea", { class: "fc-textarea", rows: "8" });
    area.value = settings.notes.prompt;
    var formatArea = h("textarea", { class: "fc-textarea", rows: "4" });
    formatArea.value = settings.prompts.formatNote;
    var chips = h("div", { class: "fc-prompt__chips" }, NOTE_PLACEHOLDERS.map(function(p) {
      return h("button", {
        class: "fc-chip fc-chip--ins",
        type: "button",
        title: p.label,
        text: "{{" + p.key + "}}",
        onclick: function() {
          insertAtCursor(area, "{{" + p.key + "}}");
        }
      });
    }));
    var body = h("div", {}, [
      h("div", { class: "fc-row fc-row--plain" }, [
        h("div", { class: "fc-row__main" }, [
          h("div", { class: "fc-row__title", text: "完成后写便签" }),
          h("div", { class: "fc-row__sub", text: "每次完成专注让角色写一句，消耗一次 AI 调用" })
        ]),
        switchBtn
      ]),
      h("div", { class: "fc-dialog__label", text: "便签提示词" }),
      area,
      h("p", {
        class: "fc-hint",
        text: "格式：**加粗**  *斜体*  ==高亮==  ~~划掉~~  __下划线__  ||遮盖||，渲染在便签墙上。"
      }),
      h("div", { class: "fc-prompt__vars", text: "点一下插入占位符：" }),
      chips,
      h("div", { class: "fc-dialog__label", text: "便签格式提示词" }),
      formatArea,
      h("p", {
        class: "fc-hint",
        text: "控制角色能用的六种标记与例子；留空保存会恢复默认。便签提示词里写 {{format}} 可直接内联这段。"
      }),
      h("div", { class: "fc-prompt__head" }, [
        h("div", { class: "fc-row__sub", text: "留空保存会恢复默认" }),
        h("div", { class: "fc-prompt__actions" }, [
          button("样式管理", {
            variant: "ghost",
            onClick: function() {
              openStyleManager(ctx, onChange);
            }
          }),
          button("格式恢复默认", {
            variant: "ghost",
            onClick: function() {
              formatArea.value = DEFAULT_FORMAT_NOTE;
            }
          }),
          button("提示词恢复默认", {
            variant: "ghost",
            onClick: function() {
              area.value = DEFAULT_NOTE_PROMPT;
            }
          })
        ])
      ])
    ]);
    dialog({
      title: "便签墙设置",
      body,
      actions: [
        { label: "取消", value: false },
        { label: "保存", value: "save", variant: "primary" }
      ]
    }).then(function(result) {
      if (result !== "save") return;
      ctx.actions.updateSettings({
        notes: { enabled, prompt: area.value },
        prompts: { formatNote: formatArea.value }
      });
      ctx.host.ui.toast("便签设置已保存");
      onChange();
    });
  }
  function bindLongPress(card2, record, ctx, refresh) {
    var timer = null;
    var startX = 0;
    var startY = 0;
    var suppress = false;
    function clearTimer() {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    }
    card2.addEventListener("pointerdown", function(e) {
      if (e.target.closest(".fc-note-card__tools")) return;
      startX = e.clientX;
      startY = e.clientY;
      clearTimer();
      timer = setTimeout(function() {
        timer = null;
        card2.classList.add("is-managing");
        suppress = true;
        setTimeout(function() {
          suppress = false;
        }, 1500);
        if (navigator.vibrate) navigator.vibrate(8);
      }, 520);
    });
    card2.addEventListener("pointermove", function(e) {
      if (!timer) return;
      if (Math.abs(e.clientX - startX) > 8 || Math.abs(e.clientY - startY) > 8) clearTimer();
    });
    ["pointerup", "pointercancel", "pointerleave"].forEach(function(name) {
      card2.addEventListener(name, clearTimer);
    });
    card2.addEventListener("contextmenu", function(e) {
      e.preventDefault();
      card2.classList.add("is-managing");
    });
    card2.addEventListener("click", function(e) {
      if (e.target.closest(".fc-note-card__tools")) return;
      if (suppress) {
        suppress = false;
        return;
      }
      if (card2.classList.contains("is-managing")) {
        card2.classList.remove("is-managing");
        return;
      }
      openRecordDetail(record, ctx);
    });
    card2.addEventListener("keydown", function(e) {
      if (e.key !== "Enter" && e.key !== " ") return;
      e.preventDefault();
      openRecordDetail(record, ctx);
    });
  }
  var notes_default = {
    mount: function(page, ctx) {
      var state = ctx.state;
      var range = "all";
      var query = "";
      var listEl = h("div", { class: "fc-notes" });
      var search = h("input", {
        class: "fc-input fc-notes__search",
        type: "text",
        placeholder: "搜索便签或待办…",
        "aria-label": "搜索便签",
        oninput: function() {
          query = search.value;
          renderList(state.get());
        }
      });
      var rangeBtns = NOTE_RANGES.map(function(r) {
        return h("button", {
          class: "fc-filter__btn" + (r.id === range ? " is-active" : ""),
          type: "button",
          text: r.label,
          dataset: { range: r.id },
          onclick: function() {
            range = r.id;
            Array.prototype.forEach.call(rangeBtns, function(b) {
              b.classList.toggle("is-active", b.dataset.range === range);
            });
            renderList(state.get());
          }
        });
      });
      var sampleBtn = h("button", {
        class: "fc-iconbtn",
        type: "button",
        title: "生成示例便签",
        "aria-label": "生成示例便签",
        onclick: function() {
          if (ctx.actions.addSampleNote()) {
            ctx.host.ui.toast("已生成示例便签，长按可换样式");
            refresh();
          }
        }
      }, [icon("plus")]);
      var styleBtn = h("button", {
        class: "fc-iconbtn",
        type: "button",
        title: "样式管理",
        "aria-label": "样式管理",
        onclick: function() {
          openStyleManager(ctx, refresh);
        }
      }, [icon("palette")]);
      var gearBtn = h("button", {
        class: "fc-iconbtn",
        type: "button",
        title: "便签设置",
        "aria-label": "便签设置",
        onclick: function() {
          openNoteSettings(ctx, refresh);
        }
      }, [icon("sliders")]);
      page.appendChild(h("div", {}, [
        pageHeader("便签墙", "角色在每次专注后写下的便利贴", h("div", { class: "fc-header__actions" }, [
          sampleBtn,
          styleBtn,
          gearBtn,
          closeButton(function() {
            ctx.host.ui.closeApp();
          })
        ])),
        h("div", { class: "fc-notes__bar" }, [
          h("div", { class: "fc-filter" }, rangeBtns),
          search
        ]),
        listEl,
        h("p", {
          class: "fc-hint",
          text: "长按便签可以改内容、换样式或删除；点卡片看这次专注的详情与聊天存档。"
        })
      ]));
      function refresh() {
        renderList(state.get());
      }
      function renderList(s) {
        clear(listEl);
        var settings = s.settings;
        if (!settings.notes.enabled) {
          listEl.appendChild(emptyState(
            "便签墙已关闭",
            "完成专注后不再生成便签，已有内容仍会保留。",
            button("打开设置", { variant: "ghost", onClick: function() {
              openNoteSettings(ctx, refresh);
            } })
          ));
          return;
        }
        var notes = filterNotes(s.records, { range, query, now: s.now });
        if (!notes.length) {
          listEl.appendChild(emptyState(
            "还没有便签",
            "完成一次专注后，角色会写一张便利贴放在这里。也可以先生成一张示例看看样式。",
            button("生成示例便签", {
              variant: "ghost",
              onClick: function() {
                if (ctx.actions.addSampleNote()) {
                  ctx.host.ui.toast("已生成示例便签");
                  refresh();
                }
              }
            })
          ));
          return;
        }
        var lastDay = "";
        notes.forEach(function(r) {
          var day = r.dateKey;
          if (day !== lastDay) {
            lastDay = day;
            listEl.appendChild(h("div", { class: "fc-notes__day", text: fmtDateCN(r.startedAt) }));
          }
          var style = styleForRecord(r, settings.noteStyles);
          var card2 = h("div", {
            class: "fc-note-card",
            role: "button",
            tabindex: "0",
            "aria-label": "便签：" + r.note
          }, [
            h("div", { class: "fc-note-card__tools" }, [
              h("button", {
                class: "fc-note-tool fc-note-tool--edit",
                type: "button",
                "aria-label": "编辑便签",
                title: "编辑",
                onclick: function(e) {
                  e.stopPropagation();
                  openNoteEditor(r, ctx, refresh);
                }
              }, [icon("pencil")]),
              h("button", {
                class: "fc-note-tool fc-note-tool--style",
                type: "button",
                "aria-label": "换样式",
                title: "换样式",
                onclick: function(e) {
                  e.stopPropagation();
                  openStylePicker(r, ctx, refresh);
                }
              }, [icon("palette")]),
              h("button", {
                class: "fc-note-tool fc-note-tool--delete",
                type: "button",
                "aria-label": "删除便签",
                title: "删除",
                onclick: function(e) {
                  e.stopPropagation();
                  deleteNote(r, ctx, refresh);
                }
              }, [icon("trash")])
            ]),
            h("div", { class: "fc-note-card__text" }, [noteTextNode(r.note)]),
            h("div", { class: "fc-note-card__meta" }, [
              h("span", { text: fmtTime(r.startedAt) }),
              r.taskName ? h("span", { class: "fc-note-card__task", text: r.taskName }) : null,
              h("span", { text: fmtDuration(r.actualMs, { compact: true }) }),
              r.demo ? h("span", { class: "fc-note-card__badge", text: "示例" }) : null,
              r.transcript && r.transcript.length ? h("span", { class: "fc-note-card__badge", text: "有聊天" }) : null
            ])
          ]);
          applyStyle(card2, r, style);
          bindLongPress(card2, r, ctx, refresh);
          listEl.appendChild(card2);
        });
      }
      renderList(state.get());
      return {
        update: function(s, keys) {
          if (keys.indexOf("now") !== -1 && keys.length === 1) return;
          renderList(s);
        },
        destroy: function() {
        }
      };
    }
  };

  // src/ui/views/settings.js
  function openApiLogs(ctx) {
    var sceneLabels = { chat: "聊天", proactive: "主动说话", note: "便签" };
    var filter = "all";
    dialog({
      title: "Token 账单",
      setup: function(bodyEl) {
        var box = h("div", { class: "fc-log" });
        bodyEl.appendChild(box);
        var chips = ["all", "ok", "fail"].map(function(id) {
          return h("button", {
            class: "fc-filter__btn" + (id === filter ? " is-active" : ""),
            type: "button",
            text: id === "all" ? "全部" : id === "ok" ? "成功" : "错误",
            dataset: { filter: id },
            onclick: function() {
              filter = id;
              Array.prototype.forEach.call(chips, function(b) {
                b.classList.toggle("is-active", b.dataset.filter === filter);
              });
              render();
            }
          });
        });
        function render() {
          clear(box);
          var logs = ctx.state.get().apiLogs || [];
          var okCount = logs.filter(function(l) {
            return l.ok;
          }).length;
          var failCount = logs.length - okCount;
          var totalTokens = logs.reduce(function(n, l) {
            return n + (Number(l.promptTokens) || 0) + (Number(l.completionTokens) || 0);
          }, 0);
          box.appendChild(h("div", { class: "fc-log-summary" }, [
            h("div", {}, [h("b", { text: String(logs.length) }), h("span", { text: "总调用" })]),
            h("div", {}, [h("b", { text: String(okCount) }), h("span", { text: "成功" })]),
            h("div", {}, [h("b", { text: String(failCount) }), h("span", { text: "错误" })]),
            h("div", {}, [h("b", { text: String(totalTokens) }), h("span", { text: "预估 token" })])
          ]));
          box.appendChild(h("div", { class: "fc-filter" }, chips));
          var list = logs.filter(function(l) {
            return filter === "all" || (filter === "ok" ? l.ok : !l.ok);
          });
          if (!list.length) {
            box.appendChild(h("p", { class: "fc-row__sub", text: "没有符合条件的调用记录。" }));
            return;
          }
          list.forEach(function(log) {
            box.appendChild(h("div", { class: "fc-log-row" }, [
              h("div", { class: "fc-log-row__head" }, [
                h("span", { class: "fc-log-row__time", text: fmtTime(log.at) }),
                h("span", { class: "fc-log-row__badge" + (log.ok ? "" : " is-fail"), text: log.ok ? "成功" : log.reason || "错误" }),
                h("span", { class: "fc-log-row__model", text: log.model || "宿主默认模型" })
              ]),
              h("div", { class: "fc-log-row__meta" }, [
                h("span", { text: sceneLabels[log.scene] || log.scene }),
                h("span", { text: "输入 " + log.promptTokens + " / 输出 " + (log.completionTokens || 0) + " tokens" }),
                h("span", { text: Math.round(log.elapsedMs) + "ms" }),
                h("span", { text: "上下文 " + log.historyCount + " 条" })
              ])
            ]));
          });
        }
        render();
      },
      actions: [
        { label: "清空记录", value: "clear", variant: "danger" },
        { label: "关闭", value: true, variant: "primary" }
      ]
    }).then(function(result) {
      if (result === "clear") {
        ctx.actions.clearApiLogs();
        ctx.host.ui.toast("API 记录已清空");
      }
    });
  }
  function group(title, rows, note) {
    return h("div", { class: "fc-group" }, [
      h("div", { class: "fc-group__title", text: title }),
      h("div", { class: "fc-list" }, rows),
      note ? h("p", { class: "fc-hint", text: note }) : null
    ]);
  }
  function stepperRow(label, desc, value, range, unit, onChange, opts) {
    var o = opts || {};
    var step = o.step || 1;
    var format = o.format || function(v) {
      return v + unit;
    };
    var valueEl = h("span", { class: "fc-stepper__value", text: format(value) });
    var minus = h("button", {
      class: "fc-stepper__btn",
      type: "button",
      text: "−",
      onclick: function() {
        set(value - step);
      }
    });
    var plus = h("button", {
      class: "fc-stepper__btn",
      type: "button",
      text: "+",
      onclick: function() {
        set(value + step);
      }
    });
    function set(next) {
      if (next < range[0] || next > range[1]) return;
      value = next;
      valueEl.textContent = format(value);
      minus.disabled = value <= range[0];
      plus.disabled = value >= range[1];
      onChange(value);
    }
    minus.disabled = o.disabled ? true : value <= range[0];
    plus.disabled = o.disabled ? true : value >= range[1];
    var row2 = h("div", {
      class: "fc-row" + (o.disabled ? " fc-row--off" : ""),
      onclick: function() {
        if (o.disabled && typeof o.onDisabled === "function") o.onDisabled();
      }
    }, [
      h("div", { class: "fc-row__main" }, [
        h("div", { class: "fc-row__title", text: label }),
        desc ? h("div", { class: "fc-row__sub", text: desc }) : null
      ]),
      h("div", { class: "fc-stepper" }, [minus, valueEl, plus])
    ]);
    return row2;
  }
  function switchRow(label, desc, checked, onChange, opts) {
    var o = opts || {};
    var btn = h("button", {
      class: "fc-switch",
      type: "button",
      role: "switch",
      "aria-checked": String(checked),
      disabled: !!o.disabled,
      onclick: function() {
        if (o.disabled) return;
        checked = !checked;
        btn.setAttribute("aria-checked", String(checked));
        onChange(checked);
      }
    });
    var note = o.note || (o.disabled ? "当前设置下不可用" : "");
    return h("div", { class: "fc-row" + (o.disabled ? " fc-row--off" : "") }, [
      h("div", { class: "fc-row__main" }, [
        h("div", { class: "fc-row__title", text: label }),
        desc ? h("div", { class: "fc-row__sub", text: desc }) : null,
        note ? h("div", { class: "fc-row__sub fc-row__sub--warn", text: note }) : null
      ]),
      btn
    ]);
  }
  function modeCard(info, active, disabled, onPick) {
    return h("button", {
      class: "fc-mode" + (active ? " is-active" : "") + (disabled ? " is-disabled" : ""),
      type: "button",
      "aria-disabled": disabled ? "true" : "false",
      onclick: onPick
    }, [
      h("div", { class: "fc-mode__head" }, [
        h("span", { class: "fc-mode__name", text: info.name }),
        active ? h("span", { class: "fc-mode__tick", text: "已选" }) : null
      ]),
      h("div", { class: "fc-mode__desc", text: info.desc })
    ]);
  }
  function avatarNode(character) {
    if (character.avatar) {
      return h("span", { class: "fc-pick__avatar" }, [
        h("img", { src: character.avatar, alt: "" })
      ]);
    }
    return h("span", { class: "fc-pick__avatar", text: String(character.name || "?").slice(0, 1) });
  }
  var settings_default = {
    mount: function(page, ctx) {
      var state = ctx.state;
      var fileInput = h("input", {
        type: "file",
        accept: ".json,application/json",
        style: "display:none",
        onchange: function(e) {
          var file = e.target.files && e.target.files[0];
          if (!file) return;
          var reader = new FileReader();
          reader.onload = function() {
            try {
              var payload = JSON.parse(String(reader.result || "{}"));
              ctx.actions.importData(payload).then(function() {
                ctx.host.ui.toast(mt().importOk);
                ctx.actions.setRoute("focus");
              }, function(err) {
                ctx.host.ui.toast(mt().importBad);
                console.warn(err);
              });
            } catch (err) {
              ctx.host.ui.toast(mt().importBad);
            }
            e.target.value = "";
          };
          reader.readAsText(file);
        }
      });
      async function doExport() {
        try {
          var data = await ctx.actions.exportData();
          var text = JSON.stringify(data, null, 2);
          var blob = new Blob([text], { type: "application/json" });
          var url = URL.createObjectURL(blob);
          var a = document.createElement("a");
          a.href = url;
          a.download = "focus-companion-" + dayKey(Date.now()) + ".json";
          document.body.appendChild(a);
          a.click();
          setTimeout(function() {
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
          }, 800);
          ctx.host.ui.toast(mt().exportOk);
        } catch (e) {
          ctx.host.ui.toast(mt().exportBad);
        }
      }
      function doImport() {
        fileInput.click();
      }
      async function doClear() {
        var ok = await ctx.host.ui.confirm({ title: "清空数据", message: mt().clearWarn });
        if (!ok) return;
        await ctx.actions.clearAll();
        ctx.host.ui.toast(mt().clearDone);
        ctx.actions.setRoute("focus");
      }
      async function pickCharacter() {
        var caps = ctx.host.caps;
        if (!caps.character) {
          ctx.host.ui.toast(mt().charListEmpty);
          return;
        }
        var list = await ctx.actions.listCharacters();
        if (!list.length) {
          ctx.host.ui.toast(mt().charListEmpty);
          return;
        }
        var currentId = state.get().settings.characterId;
        dialog({
          title: "选择角色",
          setup: function(bodyEl, close) {
            var wrap = h("div", { class: "fc-pick" });
            list.forEach(function(c) {
              wrap.appendChild(h("button", {
                class: "fc-pick__item" + (c.id === currentId ? " is-active" : ""),
                type: "button",
                onclick: function() {
                  close(c);
                }
              }, [
                avatarNode(c),
                h("span", { class: "fc-pick__text" }, [
                  h("span", { class: "fc-pick__name", text: c.name }),
                  c.handle && c.handle !== c.name ? h("span", { class: "fc-pick__sub", text: c.handle }) : null
                ]),
                c.id === currentId ? h("span", { class: "fc-pick__check", text: "当前" }) : null
              ]));
            });
            bodyEl.appendChild(wrap);
          },
          actions: [{ label: "取消", value: false }]
        }).then(function(picked) {
          if (!picked || !picked.id) return;
          ctx.actions.selectCharacter(picked.id, picked.name);
          ctx.host.ui.toast(mt().charPicked + "：" + picked.name);
        });
      }
      var content = h("div", {});
      page.appendChild(fileInput);
      page.appendChild(h("div", {}, [
        pageHeader("设置", "模式、监督、AI 与数据", closeButton(function() {
          ctx.host.ui.closeApp();
        })),
        content
      ]));
      function build() {
        clear(content);
        var s = state.get();
        var settings = s.settings;
        var session = s.session;
        var locked = !!(session && session.locked && session.status !== STATUS.DONE);
        var busy = !!(session && (session.status === STATUS.RUNNING || session.status === STATUS.PAUSED));
        var mode = settings.focusMode;
        var caps = ctx.host.caps;
        function patch(p) {
          ctx.actions.updateSettings(p);
        }
        var modeNodes = MODE_LIST.map(function(info) {
          return modeCard(info, info.id === mode, locked || busy, function() {
            if (locked) {
              ctx.host.ui.toast("锁房间期间不能切换模式");
              return;
            }
            if (busy) {
              ctx.host.ui.toast("专注进行中，结束后再切换模式");
              return;
            }
            ctx.actions.setMode(info.id);
          });
        });
        var modeNote = locked ? "锁房间期间不能切换模式，需要先紧急退出。" : busy ? "专注进行中：聊天模式、默认角色、计时设置已锁定，结束后再改。" : "这里改的是默认模式；计时页可以单独改本轮模式。";
        var charRow = h("div", { class: "fc-row" }, [
          h("div", { class: "fc-row__main" }, [
            h("div", { class: "fc-row__title", text: "默认角色" }),
            h("div", { class: "fc-row__sub", text: (settings.characterName || mt().charNone) + "（本轮开始后不可更换）" }),
            caps.character ? null : h("div", { class: "fc-row__sub fc-row__sub--warn", text: "宿主没有提供角色接口，B/C 模式会使用占位称呼" })
          ]),
          button("选择", {
            variant: "ghost",
            onClick: function() {
              if (busy) {
                ctx.host.ui.toast("专注进行中，结束后再换角色");
                return;
              }
              pickCharacter();
            },
            disabled: !caps.character
          })
        ]);
        var ai = settings.ai;
        var about = h("div", { class: "fc-about" }, [
          h("div", { text: "版本 " + ctx.version }),
          h("div", { text: "宿主能力：存储 " + (caps.storage ? "可用" : "不可用") + " · 角色 " + (caps.character ? "可用" : "不可用") + " · AI " + (caps.ai ? "可用" : "不可用") }),
          h("div", { text: "AI 走小手机自己的接口，插件不保存任何 Key；聊天与提示词只在本机存储。" }),
          h("div", { text: "数据只保存在本机插件存储中，卸载插件会被清除，建议定期导出备份。" })
        ]);
        content.appendChild(group("模式与角色", [
          h("div", { class: "fc-modes" }, modeNodes),
          charRow
        ], modeNote));
        content.appendChild(group("AI 与聊天", [
          switchRow("启用 AI", "聊天与主动说话都走宿主自己的 AI 接口", ai.enabled, function(v) {
            patch({ ai: { enabled: v } });
          }, {
            disabled: !caps.ai,
            note: caps.ai ? "" : "宿主没有提供 ai.chat"
          }),
          stepperRow("每日调用上限", "聊天与主动说话共用，超出后走备用台词", ai.dailyLimit, LIMITS.aiDailyLimit, " 次", function(v) {
            patch({ ai: { dailyLimit: v } });
          }, { step: 10 }),
          stepperRow("超时", "超过就降级到备用台词，计时不受影响", Math.round(ai.timeoutMs / 1e3), LIMITS.aiTimeoutSec, " 秒", function(v) {
            patch({ ai: { timeoutMs: v * 1e3 } });
          })
        ], "AI 请求带当前角色人设与「角色绑定会话」里的用户面具；记忆需要手动插入占位符。主动说话频率、提示词、兜底与控制台在聊天页右上角设置。"));
        content.appendChild(group("API 调用", [
          h("div", { class: "fc-row" }, [
            h("div", { class: "fc-row__main" }, [
              h("div", { class: "fc-row__title", text: "Token 账单" }),
              h("div", { class: "fc-row__sub", text: "最近 100 条调用：模型、输入/输出 token、耗时、错误原因" })
            ]),
            button("查看", { variant: "ghost", onClick: function() {
              openApiLogs(ctx);
            } })
          ])
        ], "点「查看」打开账单，可按成功/错误筛选。只记录调用元信息，不含聊天正文。"));
        content.appendChild(group("目标", [
          stepperRow("每日番茄目标", "首页进度条按今天的完成次数计算", settings.goal.dailyPomodoros, LIMITS.goalPomodoros, " 个", function(v) {
            patch({ goal: { dailyPomodoros: v } });
          })
        ]));
        var timerOpts = busy ? { disabled: true, onDisabled: function() {
          ctx.host.ui.toast("专注进行中，计时设置已锁定");
        } } : {};
        content.appendChild(group("计时", [
          stepperRow("专注时长", "每轮专注的默认长度", settings.focusMin, LIMITS.focusMin, " 分", function(v) {
            patch({ focusMin: v });
          }, timerOpts),
          stepperRow("短休息", "普通轮次之间的休息", settings.shortBreakMin, LIMITS.shortBreakMin, " 分", function(v) {
            patch({ shortBreakMin: v });
          }, timerOpts),
          stepperRow("长休息", "整轮结束前的最后休息", settings.longBreakMin, LIMITS.longBreakMin, " 分", function(v) {
            patch({ longBreakMin: v });
          }, timerOpts),
          stepperRow("每轮番茄数", "这一轮包含多少个专注", settings.roundsPerLongBreak, LIMITS.roundsPerLongBreak, " 个", function(v) {
            patch({ roundsPerLongBreak: v });
          }, timerOpts)
        ], busy ? "专注进行中，计时设置已锁定，结束后再改。" : ""));
        content.appendChild(group("自动化", [
          switchRow("专注结束自动开始休息", "省去手动点击", settings.autoStartBreak, function(v) {
            patch({ autoStartBreak: v });
          }),
          switchRow("休息结束自动开始专注", "只作用于一轮内的下一个专注；整轮结束后不会自动开新轮", settings.autoStartFocus, function(v) {
            patch({ autoStartFocus: v });
          }),
          switchRow("最后一个番茄后直接长休息", "关闭则先短休息，休息结束本轮完成", settings.finalLongBreak, function(v) {
            patch({ finalLongBreak: v });
          }, {
            disabled: busy,
            note: "专注进行中不可修改"
          }),
          switchRow("结束提示音", "使用系统音频合成，不联网", settings.soundOn, function(v) {
            patch({ soundOn: v });
          })
        ]));
        content.appendChild(group("数据", [
          h("div", { class: "fc-row" }, [
            h("div", { class: "fc-row__main" }, [
              h("div", { class: "fc-row__title", text: "导出备份" }),
              h("div", { class: "fc-row__sub", text: "生成 JSON 文件，含设置、待办与全部记录" })
            ]),
            button("导出", { variant: "ghost", onClick: doExport })
          ]),
          h("div", { class: "fc-row" }, [
            h("div", { class: "fc-row__main" }, [
              h("div", { class: "fc-row__title", text: "导入备份" }),
              h("div", { class: "fc-row__sub", text: "会覆盖当前设置、待办与记录" })
            ]),
            button("选择文件", { variant: "ghost", onClick: doImport })
          ]),
          h("div", { class: "fc-row" }, [
            h("div", { class: "fc-row__main" }, [
              h("div", { class: "fc-row__title", text: "清空本机数据" }),
              h("div", { class: "fc-row__sub", text: "不可恢复，请先导出" })
            ]),
            button("清空", { variant: "danger", onClick: doClear })
          ])
        ]));
        content.appendChild(group("关于", [h("div", { class: "fc-row" }, [about])]));
      }
      build();
      return {
        update: function(s, keys) {
          if (keys.indexOf("settings") !== -1 || keys.indexOf("apiLogs") !== -1) build();
        },
        destroy: function() {
          if (fileInput.parentNode) fileInput.parentNode.removeChild(fileInput);
        }
      };
    }
  };

  // src/app/shell.js
  var ROUTES = [
    { id: "focus", label: "专注", icon: "focus", view: focus_default },
    { id: "stats", label: "统计", icon: "stats", view: stats_default },
    { id: "notes", label: "便签墙", icon: "note", view: notes_default },
    { id: "settings", label: "设置", icon: "settings", view: settings_default }
  ];
  function mountShell(container, ctx) {
    var state = ctx.state;
    var initial = state.get();
    var root = h("div", { class: "fc-root", "data-theme": initial.settings.theme });
    var main = h("main", { class: "fc-main" });
    var page = h("div", { class: "fc-page" });
    main.appendChild(page);
    var dock = h("nav", { class: "fc-dock" }, ROUTES.map(function(r) {
      return h("button", {
        class: "fc-dock__item",
        type: "button",
        dataset: { route: r.id },
        "aria-selected": String(r.id === initial.route),
        onclick: function() {
          ctx.actions.setRoute(r.id);
        }
      }, [icon(r.icon), h("span", { text: r.label })]);
    }));
    var lock = createLockOverlay(ctx);
    root.appendChild(main);
    root.appendChild(dock);
    root.appendChild(lock.el);
    container.appendChild(root);
    container.setAttribute("data-theme", initial.settings.theme);
    var current = null;
    function isField(el) {
      return !!el && (el.tagName === "TEXTAREA" || el.tagName === "INPUT");
    }
    function onFocusIn(e) {
      if (!isField(e.target)) return;
      root.classList.add("fc-root--editing");
      var el = e.target;
      setTimeout(function() {
        if (el && el.scrollIntoView) el.scrollIntoView({ block: "center", behavior: "smooth" });
      }, 260);
    }
    function onFocusOut(e) {
      if (!isField(e.target)) return;
      setTimeout(function() {
        if (!isField(document.activeElement)) root.classList.remove("fc-root--editing");
      }, 120);
    }
    root.addEventListener("focusin", onFocusIn);
    root.addEventListener("focusout", onFocusOut);
    function render(route) {
      if (current && current.destroy) current.destroy();
      clear(page);
      var def = ROUTES.filter(function(r) {
        return r.id === route;
      })[0] || ROUTES[0];
      current = def.view.mount(page, ctx) || null;
      main.scrollTop = 0;
      Array.prototype.forEach.call(dock.children, function(btn) {
        btn.setAttribute("aria-selected", String(btn.dataset.route === def.id));
      });
    }
    render(initial.route);
    lock.update(initial);
    var unsubscribe = state.subscribe(function(s, keys) {
      lock.update(s);
      if (keys.indexOf("settings") !== -1) {
        root.setAttribute("data-theme", s.settings.theme);
      }
      if (keys.indexOf("route") !== -1) {
        render(s.route);
        return;
      }
      if (current && current.update) current.update(s, keys);
    });
    return {
      root,
      destroy: function() {
        unsubscribe();
        root.removeEventListener("focusin", onFocusIn);
        root.removeEventListener("focusout", onFocusOut);
        root.classList.remove("fc-root--editing");
        lock.destroy();
        if (current && current.destroy) current.destroy();
        clear(page);
        root.remove();
        container.removeAttribute("data-theme");
      }
    };
  }

  // src/main.js
  var STYLE_ID = "focus-companion-style";
  var CSS = [theme_default, base_default, views_default].join("\n");
  var shell = null;
  var app = null;
  function ensureStyle() {
    if (document.getElementById(STYLE_ID)) return;
    var style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = CSS;
    document.head.appendChild(style);
  }
  function removeStyle() {
    var style = document.getElementById(STYLE_ID);
    if (style && style.parentNode) style.parentNode.removeChild(style);
  }
  function removeOrphanMasks() {
    var masks = document.querySelectorAll(".fc-mask");
    for (var i = 0; i < masks.length; i++) {
      if (masks[i].parentNode) masks[i].parentNode.removeChild(masks[i]);
    }
  }
  async function mount(container, roche) {
    ensureStyle();
    container.classList.add("fc-host");
    var created = await createApp({ container, roche, version: "0.13.0" });
    app = created;
    shell = mountShell(container, created.ctx);
  }
  async function unmount(container) {
    if (shell) {
      shell.destroy();
      shell = null;
    }
    if (app) {
      app.destroy();
      app = null;
    }
    removeOrphanMasks();
    disposeAudio();
    container.replaceChildren();
    container.classList.remove("fc-host");
    container.removeAttribute("data-theme");
    removeStyle();
  }
  window.RochePlugin.register({
    id: "focus-companion",
    name: "角色陪伴番茄钟",
    version: "0.13.0",
    description: "专注计时、专注记录与统计，后续加入角色陪伴与语音。",
    apps: [
      {
        id: "focus-companion-home",
        name: "专注",
        icon: "timer",
        iconImage: "",
        mount,
        unmount
      }
    ]
  });
})();
