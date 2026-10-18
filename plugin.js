/* focus-companion v0.1.2 | built 2026-10-18T04:01:17.030Z */
(() => {
  // src/ui/theme.css
  var theme_default = '/* 主题变量：只在插件根容器内生效 */\n.fc-root {\n  --fc-bg: #ffffff;\n  --fc-soft: #f6f7f9;\n  --fc-soft-2: #eef0f3;\n  --fc-line: #ecedf0;\n  --fc-line-strong: #dcdee3;\n  --fc-ink: #1b1c1f;\n  --fc-ink-2: #55585e;\n  --fc-muted: #8b9099;\n  --fc-accent: #1b1c1f;\n  --fc-on-accent: #ffffff;\n  --fc-ok: #2f9e44;\n  --fc-warn: #c0392b;\n  --fc-heat-0: #f4f5f7;\n  --fc-heat-1: #dfe3e8;\n  --fc-heat-2: #b9c0c9;\n  --fc-heat-3: #7d858f;\n  --fc-heat-4: #2b2d31;\n\n  --fc-r-lg: 18px;\n  --fc-r-md: 12px;\n  --fc-r-sm: 8px;\n  --fc-r-full: 999px;\n\n  --fc-shadow: 0 10px 30px rgba(17, 18, 20, 0.08);\n  --fc-font: -apple-system, BlinkMacSystemFont, "PingFang SC", "Microsoft YaHei", "Segoe UI", sans-serif;\n  --fc-mono: ui-monospace, SFMono-Regular, Consolas, "Liberation Mono", monospace;\n}\n\n.fc-root[data-theme="dark"] {\n  --fc-bg: #151619;\n  --fc-soft: #1d1f23;\n  --fc-soft-2: #24262b;\n  --fc-line: #2a2d33;\n  --fc-line-strong: #383c43;\n  --fc-ink: #f2f3f5;\n  --fc-ink-2: #c2c6cd;\n  --fc-muted: #8c919b;\n  --fc-accent: #f2f3f5;\n  --fc-on-accent: #151619;\n  --fc-heat-0: #212429;\n  --fc-heat-1: #2f333a;\n  --fc-heat-2: #4a5058;\n  --fc-heat-3: #8d949e;\n  --fc-heat-4: #e6e8ec;\n  --fc-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);\n}\n';

  // src/ui/base.css
  var base_default = '/* 基础布局与通用控件：所有选择器都以 .fc-root 开头 */\n\n.fc-root {\n  position: relative; /* 锁房间遮罩相对根容器定位，不用 position: fixed */\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  min-width: 0;\n  min-height: 0;\n  overflow: hidden;\n  background: var(--fc-bg);\n  color: var(--fc-ink);\n  font-family: var(--fc-font);\n  font-size: 14px;\n  line-height: 1.55;\n  -webkit-font-smoothing: antialiased;\n}\n\n.fc-root [hidden] { display: none !important; }\n\n.fc-root *,\n.fc-root *::before,\n.fc-root *::after { box-sizing: border-box; }\n\n.fc-root h1,\n.fc-root h2,\n.fc-root h3,\n.fc-root p { margin: 0; }\n\n.fc-main {\n  flex: 1 1 auto;\n  min-height: 0;\n  overflow-y: auto;\n  overflow-x: hidden;\n  -webkit-overflow-scrolling: touch;\n}\n\n.fc-page {\n  padding: 18px 18px 28px;\n  min-height: 100%;\n}\n\n/* ---------- header ---------- */\n\n.fc-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 4px 0 16px;\n}\n\n.fc-header__title {\n  font-size: 20px;\n  font-weight: 600;\n  letter-spacing: 0.2px;\n}\n\n.fc-header__sub {\n  margin-top: 3px;\n  font-size: 12.5px;\n  color: var(--fc-muted);\n}\n\n/* ---------- card ---------- */\n\n.fc-card {\n  background: var(--fc-bg);\n  border: 1px solid var(--fc-line);\n  border-radius: var(--fc-r-lg);\n  padding: 16px;\n  margin-bottom: 12px;\n}\n\n.fc-card--soft { background: var(--fc-soft); border-color: transparent; }\n\n.fc-card__title {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--fc-ink-2);\n  margin-bottom: 10px;\n}\n\n/* ---------- buttons ---------- */\n\n.fc-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  min-height: 38px;\n  padding: 0 16px;\n  border: 1px solid var(--fc-line-strong);\n  border-radius: var(--fc-r-full);\n  background: var(--fc-bg);\n  color: var(--fc-ink);\n  font: 500 13.5px/1 var(--fc-font);\n  cursor: pointer;\n  transition: transform .08s ease, background .15s ease, opacity .15s ease;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.fc-btn:active { transform: scale(0.97); }\n.fc-btn[disabled] { opacity: .4; pointer-events: none; }\n\n.fc-btn--primary {\n  background: var(--fc-accent);\n  border-color: var(--fc-accent);\n  color: var(--fc-on-accent);\n}\n\n.fc-btn--ghost { background: transparent; border-color: transparent; color: var(--fc-ink-2); }\n.fc-btn--danger { color: var(--fc-warn); border-color: var(--fc-line-strong); }\n.fc-btn--block { display: flex; width: 100%; }\n.fc-btn--lg { min-height: 48px; padding: 0 30px; font-size: 15px; }\n\n.fc-icon { display: inline-flex; width: 18px; height: 18px; }\n.fc-icon svg { width: 100%; height: 100%; }\n\n/* 关闭按钮：宿主不提供，由插件自带 */\n.fc-close {\n  flex: 0 0 auto;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  border: 1px solid var(--fc-line);\n  background: transparent;\n  color: var(--fc-ink-2);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.fc-close:active { background: var(--fc-soft); }\n.fc-close .fc-icon { width: 14px; height: 14px; }\n\n/* ---------- dock ---------- */\n\n.fc-dock {\n  flex: 0 0 auto;\n  display: flex;\n  border-top: 1px solid var(--fc-line);\n  background: var(--fc-bg);\n  padding: 6px 8px 8px;\n}\n\n.fc-dock__item {\n  flex: 1 1 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 3px;\n  padding: 6px 0 2px;\n  border: 0;\n  background: transparent;\n  color: var(--fc-muted);\n  font: 500 10.5px/1.2 var(--fc-font);\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.fc-dock__item .fc-icon { width: 21px; height: 21px; }\n.fc-dock__item[aria-selected="true"] { color: var(--fc-ink); }\n\n/* ---------- tiles ---------- */\n\n.fc-tiles {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 8px;\n  margin-bottom: 12px;\n}\n\n.fc-tile {\n  border: 1px solid var(--fc-line);\n  border-radius: var(--fc-r-md);\n  padding: 12px 10px;\n}\n\n.fc-tile__label { font-size: 11.5px; color: var(--fc-muted); }\n.fc-tile__value { font-size: 17px; font-weight: 600; margin-top: 4px; letter-spacing: .2px; }\n.fc-tile__sub { font-size: 10.5px; color: var(--fc-muted); margin-top: 2px; }\n\n/* ---------- list ---------- */\n\n.fc-list { border: 1px solid var(--fc-line); border-radius: var(--fc-r-md); overflow: hidden; }\n\n.fc-row {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 13px 14px;\n  border-bottom: 1px solid var(--fc-line);\n  background: var(--fc-bg);\n}\n\n.fc-row:last-child { border-bottom: 0; }\n.fc-row--tap { cursor: pointer; }\n.fc-row--tap:active { background: var(--fc-soft); }\n\n.fc-row__main { flex: 1 1 auto; min-width: 0; }\n.fc-row__title { font-size: 14px; }\n.fc-row__sub { font-size: 11.5px; color: var(--fc-muted); margin-top: 2px; }\n.fc-row__value { font-size: 14px; font-variant-numeric: tabular-nums; }\n.fc-row__action { color: var(--fc-muted); font-size: 12px; }\n\n/* ---------- empty / loading ---------- */\n\n.fc-empty {\n  padding: 40px 18px;\n  text-align: center;\n  color: var(--fc-muted);\n}\n\n.fc-empty__title { font-size: 14px; color: var(--fc-ink-2); margin-bottom: 6px; }\n.fc-empty__desc { font-size: 12.5px; line-height: 1.7; }\n\n.fc-loading {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  padding: 60px 0;\n  color: var(--fc-muted);\n  font-size: 13px;\n}\n\n.fc-loading__dot {\n  width: 14px;\n  height: 14px;\n  border: 2px solid var(--fc-line-strong);\n  border-top-color: var(--fc-ink);\n  border-radius: 50%;\n  animation: fc-spin .8s linear infinite;\n}\n\n@keyframes fc-spin { to { transform: rotate(360deg); } }\n\n/* ---------- dialog ---------- */\n\n.fc-mask {\n  position: fixed;\n  inset: 0;\n  background: rgba(18, 19, 22, 0.32);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n  z-index: 2147483000;\n  animation: fc-fade .15s ease;\n}\n\n@keyframes fc-fade { from { opacity: 0; } to { opacity: 1; } }\n\n.fc-dialog {\n  width: 100%;\n  max-width: 320px;\n  background: var(--fc-bg);\n  color: var(--fc-ink);\n  border-radius: var(--fc-r-lg);\n  padding: 20px 18px 16px;\n  box-shadow: var(--fc-shadow);\n  font-family: var(--fc-font);\n  animation: fc-pop .16s ease;\n}\n\n@keyframes fc-pop { from { transform: translateY(6px) scale(.98); opacity: .6; } to { transform: none; opacity: 1; } }\n\n.fc-dialog__title { font-size: 16px; font-weight: 600; margin-bottom: 10px; }\n.fc-dialog__body { font-size: 13.5px; color: var(--fc-ink-2); line-height: 1.7; }\n.fc-dialog__actions { display: flex; gap: 8px; margin-top: 18px; }\n.fc-dialog__actions .fc-btn { flex: 1 1 0; }\n\n/* ---------- misc ---------- */\n\n.fc-hint { font-size: 12px; color: var(--fc-muted); line-height: 1.7; margin-top: 8px; }\n.fc-tag {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: var(--fc-r-full);\n  background: var(--fc-soft-2);\n  color: var(--fc-ink-2);\n  font-size: 11px;\n}\n';

  // src/ui/views.css
  var views_default = '/* 页面级样式 */\n\n/* ---------- 专注页 ---------- */\n\n.fc-focus {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 6px;\n}\n\n.fc-focus__head {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 18px;\n}\n\n.fc-focus__mode { font-size: 13px; color: var(--fc-muted); }\n.fc-focus__right { display: flex; align-items: center; gap: 10px; }\n\n.fc-dots { display: flex; gap: 6px; }\n.fc-dots__dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: var(--fc-line-strong);\n}\n.fc-dots__dot.is-done { background: var(--fc-ink); }\n.fc-dots__dot.is-active { box-shadow: 0 0 0 3px var(--fc-soft-2); background: var(--fc-ink); }\n\n.fc-ring {\n  position: relative;\n  width: 268px;\n  height: 268px;\n  margin: 4px 0 10px;\n}\n\n.fc-ring svg { width: 100%; height: 100%; transform: rotate(-90deg); }\n.fc-ring__track { stroke: var(--fc-soft-2); }\n.fc-ring__bar {\n  stroke: var(--fc-ink);\n  transition: stroke-dashoffset .35s linear;\n}\n\n.fc-ring__center {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n}\n\n.fc-ring__time {\n  font-size: 46px;\n  font-weight: 300;\n  letter-spacing: 1px;\n  font-variant-numeric: tabular-nums;\n  font-family: var(--fc-mono);\n}\n\n.fc-ring__phase { font-size: 12.5px; color: var(--fc-muted); letter-spacing: .08em; }\n.fc-ring__bonus { font-size: 11.5px; color: var(--fc-ink-2); }\n\n.fc-controls {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin: 14px 0 18px;\n}\n\n.fc-controls__side {\n  width: 44px;\n  height: 44px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid var(--fc-line-strong);\n  border-radius: 50%;\n  background: var(--fc-bg);\n  color: var(--fc-ink-2);\n  cursor: pointer;\n}\n\n.fc-controls__side[disabled] { opacity: .35; pointer-events: none; }\n.fc-controls__side .fc-icon { width: 17px; height: 17px; }\n\n.fc-focus__today {\n  display: flex;\n  gap: 20px;\n  padding: 12px 22px;\n  border-radius: var(--fc-r-lg);\n  background: var(--fc-soft);\n  font-size: 12px;\n  color: var(--fc-ink-2);\n}\n\n.fc-focus__today b { font-weight: 600; font-variant-numeric: tabular-nums; }\n\n.fc-focus__note {\n  margin-top: 16px;\n  font-size: 11.5px;\n  color: var(--fc-muted);\n  text-align: center;\n  line-height: 1.7;\n}\n\n/* ---------- 统计页 ---------- */\n\n.fc-cal { border: 1px solid var(--fc-line); border-radius: var(--fc-r-md); padding: 12px; }\n\n.fc-cal__head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n\n.fc-cal__month { font-size: 14px; font-weight: 600; }\n\n.fc-cal__nav {\n  width: 30px;\n  height: 30px;\n  border: 0;\n  background: transparent;\n  color: var(--fc-ink-2);\n  cursor: pointer;\n  border-radius: 50%;\n}\n.fc-cal__nav:active { background: var(--fc-soft); }\n.fc-cal__nav[disabled] { opacity: .3; pointer-events: none; }\n\n.fc-cal__week,\n.fc-cal__grid {\n  display: grid;\n  grid-template-columns: repeat(7, minmax(0, 1fr));\n  gap: 4px;\n}\n\n.fc-cal__weekday {\n  text-align: center;\n  font-size: 10.5px;\n  color: var(--fc-muted);\n  padding-bottom: 4px;\n}\n\n.fc-day {\n  aspect-ratio: 1 / 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 3px;\n  border-radius: 8px;\n  font-size: 12px;\n  color: var(--fc-ink-2);\n  background: var(--fc-heat-0);\n  border: 0;\n  cursor: pointer;\n  position: relative;\n}\n\n.fc-day--out { background: transparent; color: var(--fc-line-strong); cursor: default; }\n.fc-day--h1 { background: var(--fc-heat-1); }\n.fc-day--h2 { background: var(--fc-heat-2); }\n.fc-day--h3 { background: var(--fc-heat-3); color: #fff; }\n.fc-day--h4 { background: var(--fc-heat-4); color: #fff; }\n.fc-day--today { box-shadow: inset 0 0 0 1.5px var(--fc-ink); }\n.fc-day__dot {\n  width: 3px;\n  height: 3px;\n  border-radius: 50%;\n  background: currentColor;\n  opacity: .55;\n}\n\n.fc-cal__legend {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  justify-content: flex-end;\n  margin-top: 10px;\n  font-size: 10.5px;\n  color: var(--fc-muted);\n}\n\n.fc-cal__legend i {\n  width: 10px;\n  height: 10px;\n  border-radius: 3px;\n  display: inline-block;\n}\n\n/* ---------- 历史页 ---------- */\n\n.fc-hist__group { margin-bottom: 14px; }\n\n.fc-hist__date {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  padding: 0 2px 6px;\n  font-size: 12px;\n  color: var(--fc-muted);\n}\n\n.fc-hist__dur { font-weight: 600; color: var(--fc-ink-2); }\n\n.fc-hist__badge {\n  display: inline-block;\n  margin-left: 6px;\n  padding: 1px 6px;\n  border-radius: var(--fc-r-full);\n  background: var(--fc-soft-2);\n  color: var(--fc-muted);\n  font-size: 10px;\n}\n\n.fc-hist__badge--abort { background: #fdecea; color: #b03a2e; }\n\n/* ---------- 设置页 ---------- */\n\n.fc-group { margin-bottom: 16px; }\n\n.fc-group__title {\n  font-size: 11.5px;\n  letter-spacing: .06em;\n  color: var(--fc-muted);\n  padding: 0 4px 6px;\n  text-transform: uppercase;\n}\n\n.fc-stepper { display: flex; align-items: center; gap: 10px; }\n\n.fc-stepper__btn {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  border: 1px solid var(--fc-line-strong);\n  background: var(--fc-bg);\n  color: var(--fc-ink);\n  font-size: 15px;\n  line-height: 1;\n  cursor: pointer;\n}\n.fc-stepper__btn:active { background: var(--fc-soft); }\n.fc-stepper__btn[disabled] { opacity: .3; pointer-events: none; }\n\n.fc-stepper__value {\n  min-width: 46px;\n  text-align: right;\n  font-variant-numeric: tabular-nums;\n  font-size: 13.5px;\n}\n\n.fc-switch {\n  position: relative;\n  width: 42px;\n  height: 25px;\n  border-radius: var(--fc-r-full);\n  border: 0;\n  background: var(--fc-line-strong);\n  cursor: pointer;\n  transition: background .18s ease;\n  flex: 0 0 auto;\n}\n.fc-switch::after {\n  content: "";\n  position: absolute;\n  top: 2.5px;\n  left: 2.5px;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: #fff;\n  transition: transform .18s ease;\n  box-shadow: 0 1px 3px rgba(0,0,0,.2);\n}\n.fc-switch[aria-checked="true"] { background: var(--fc-accent); }\n.fc-switch[aria-checked="true"]::after { transform: translateX(17px); }\n\n.fc-about { font-size: 12px; color: var(--fc-muted); line-height: 1.8; }\n.fc-about code { font-family: var(--fc-mono); font-size: 11px; }\n\n.fc-row--off { opacity: .5; }\n.fc-row__sub--warn { color: var(--fc-warn); }\n\n/* ---------- 模式选择 ---------- */\n\n.fc-modes {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 12px;\n  border-bottom: 1px solid var(--fc-line);\n}\n\n.fc-mode {\n  text-align: left;\n  padding: 11px 13px;\n  border: 1px solid var(--fc-line);\n  border-radius: var(--fc-r-md);\n  background: var(--fc-bg);\n  color: var(--fc-ink);\n  font: 400 13px/1.55 var(--fc-font);\n  cursor: pointer;\n  transition: border-color .15s ease, background .15s ease;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.fc-mode.is-active { border-color: var(--fc-accent); background: var(--fc-soft); }\n.fc-mode[disabled] { opacity: .5; cursor: default; }\n.fc-mode:not([disabled]):active { background: var(--fc-soft); }\n\n.fc-mode__head { display: flex; align-items: center; gap: 8px; }\n\n.fc-mode__code {\n  flex: 0 0 auto;\n  padding: 0 5px;\n  border: 1px solid var(--fc-line-strong);\n  border-radius: 6px;\n  font-family: var(--fc-mono);\n  font-size: 10.5px;\n  color: var(--fc-muted);\n}\n\n.fc-mode__name { font-size: 13.5px; font-weight: 600; }\n.fc-mode__tick { margin-left: auto; font-size: 11px; color: var(--fc-ink-2); }\n\n.fc-mode__desc {\n  margin-top: 5px;\n  font-size: 11.5px;\n  color: var(--fc-muted);\n  line-height: 1.65;\n}\n\n/* ---------- 角色监督 ---------- */\n\n.fc-supervise {\n  width: 100%;\n  margin-top: 14px;\n  padding: 13px 14px;\n  border: 1px solid var(--fc-line);\n  border-radius: var(--fc-r-lg);\n}\n\n.fc-supervise__head { display: flex; align-items: center; gap: 8px; }\n.fc-supervise__name { font-size: 13px; font-weight: 600; }\n\n.fc-badge {\n  padding: 1px 8px;\n  border-radius: var(--fc-r-full);\n  background: var(--fc-soft-2);\n  color: var(--fc-ink-2);\n  font-size: 11px;\n  font-variant-numeric: tabular-nums;\n}\n\n.fc-badge--mute { background: #fdecea; color: #b03a2e; }\n\n.fc-supervise__line {\n  margin-top: 8px;\n  font-size: 12.5px;\n  color: var(--fc-ink-2);\n  line-height: 1.7;\n}\n\n.fc-supervise__line.is-warn { color: var(--fc-warn); }\n\n.fc-supervise__actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-top: 10px;\n}\n\n.fc-mini {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  min-height: 32px;\n  padding: 0 12px;\n  border: 1px solid var(--fc-line-strong);\n  border-radius: var(--fc-r-full);\n  background: var(--fc-bg);\n  color: var(--fc-ink);\n  font: 500 12px/1 var(--fc-font);\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.fc-mini:active { background: var(--fc-soft); }\n.fc-mini[data-authorized="false"] { color: var(--fc-muted); }\n\n.fc-mini__dot {\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  background: var(--fc-line-strong);\n}\n\n.fc-mini__dot.is-on { background: var(--fc-ok); }\n\n.fc-supervise__hint {\n  margin-top: 9px;\n  font-size: 11px;\n  color: var(--fc-muted);\n  line-height: 1.6;\n}\n\n/* ---------- 锁房间遮罩 ---------- */\n\n.fc-lock {\n  position: absolute;\n  inset: 0;\n  z-index: 40;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 28px;\n  background: var(--fc-bg);\n  color: var(--fc-ink);\n  animation: fc-fade .18s ease;\n}\n\n.fc-lock__inner {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  max-width: 300px;\n  text-align: center;\n}\n\n.fc-lock__tag {\n  font-size: 10.5px;\n  letter-spacing: .16em;\n  color: var(--fc-muted);\n}\n\n.fc-lock__name { margin-top: 8px; font-size: 15px; font-weight: 600; }\n\n.fc-lock__time {\n  margin: 8px 0 4px;\n  font-family: var(--fc-mono);\n  font-size: 44px;\n  font-weight: 300;\n  font-variant-numeric: tabular-nums;\n  letter-spacing: 1px;\n}\n\n.fc-lock__hint { font-size: 12.5px; color: var(--fc-ink-2); }\n\n.fc-lock__sub {\n  margin-top: 16px;\n  font-size: 11px;\n  color: var(--fc-muted);\n  line-height: 1.7;\n}\n\n.fc-lock .fc-btn { margin-top: 18px; }\n\n/* ---------- 角色选择弹层 ---------- */\n\n.fc-pick { display: flex; flex-direction: column; gap: 6px; }\n\n.fc-pick__item {\n  text-align: left;\n  padding: 10px 12px;\n  border: 1px solid var(--fc-line);\n  border-radius: var(--fc-r-sm);\n  background: var(--fc-bg);\n  color: var(--fc-ink);\n  font: 500 13.5px/1 var(--fc-font);\n  cursor: pointer;\n}\n\n.fc-pick__item:active { background: var(--fc-soft); }\n\n/* ---------- 设置：禁用的开关 ---------- */\n\n.fc-switch[disabled] { opacity: .45; pointer-events: none; }\n';

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
      conversation: isFn(api.conversation, "list"),
      memory: isFn(api.memory, "getLongTerm"),
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
    return {
      caps,
      raw: api,
      storage,
      ui,
      character
    };
  }

  // src/core/modes.js
  var MODE = { A: "A", B1: "B1", B2: "B2", C1: "C1", C2: "C2" };
  var MODE_LIST = [
    {
      id: MODE.A,
      name: "独自专注",
      code: "A",
      bindCharacter: false,
      freeChat: false,
      supervision: false,
      touch: false,
      desc: "不绑定角色、不调用 AI，只有计时与记录。"
    },
    {
      id: MODE.B1,
      name: "番茄监督",
      code: "B1",
      bindCharacter: true,
      freeChat: false,
      supervision: true,
      touch: false,
      desc: "角色在阶段节点说话、可加时或锁房间；不聊天、不点触。"
    },
    {
      id: MODE.B2,
      name: "点触监督",
      code: "B2",
      bindCharacter: true,
      freeChat: false,
      supervision: true,
      touch: true,
      desc: "监督台词 + 立绘点触；仍不开放自由聊天。"
    },
    {
      id: MODE.C1,
      name: "番茄钟聊天",
      code: "C1",
      bindCharacter: true,
      freeChat: true,
      supervision: true,
      touch: false,
      desc: "专注中可以和角色聊天，计时不暂停；可被暂时禁言。"
    },
    {
      id: MODE.C2,
      name: "点触陪伴",
      code: "C2",
      bindCharacter: true,
      freeChat: true,
      supervision: true,
      touch: true,
      desc: "聊天与点触是主交互，监督权限最完整。"
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
  function allowsPermission(id, permission) {
    var m = modeInfo(id);
    if (permission === "respond" || permission === "extend") return m.supervision;
    if (permission === "mute") return m.freeChat;
    if (permission === "lockRoom") return m.bindCharacter;
    return false;
  }
  function modeLabel(id) {
    var m = modeInfo(id);
    return m.id === MODE.A ? m.name : m.id + " · " + m.name;
  }

  // src/core/settings.js
  var SCHEMA_VERSION = 2;
  var LIMITS = {
    focusMin: [1, 180],
    shortBreakMin: [1, 60],
    longBreakMin: [1, 120],
    roundsPerLongBreak: [1, 12],
    extendFixedMin: [1, 30],
    extendMaxPerTimeMin: [1, 60],
    extendTotalCapMin: [0, 240],
    // 0 = 不限
    muteMaxMin: [1, 60]
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
      soundOn: true,
      // 模式与角色
      focusMode: "A",
      characterId: "",
      characterName: "",
      showCharacter: true,
      // 四项监督权限：各自独立，默认全关
      permissions: {
        respond: false,
        extend: false,
        mute: false,
        lockRoom: false
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
      // 锁房间：执行前是否需要用户确认
      lockRoom: {
        requireConfirm: true
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
    return out;
  }
  function quickSec(minutes) {
    return minutes * 60;
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
    out.soundOn = clampBool(raw.soundOn, def.soundOn);
    out.showCharacter = clampBool(raw.showCharacter, def.showCharacter);
    out.characterId = typeof raw.characterId === "string" ? raw.characterId : "";
    out.characterName = typeof raw.characterName === "string" ? raw.characterName : "";
    out.focusMode = normalizeMode(raw.focusMode);
    out.permissions = mergePermissions(raw.permissions, def.permissions);
    out.extend = mergeExtend(raw.extend, def.extend);
    out.mute = mergeMute(raw.mute, def.mute);
    out.lockRoom = mergeLockRoom(raw.lockRoom, def.lockRoom);
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
      plannedMs,
      remainingMs: plannedMs,
      startedAt: 0,
      endsAt: 0,
      bonusMs: 0,
      mutedUntil: 0,
      locked: false,
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
  function nextPhase(settings, phase, round) {
    var per = Math.max(1, settings.roundsPerLongBreak);
    if (phase === PHASE.FOCUS) {
      var nextRound = round + 1;
      var isLong = nextRound % per === 0;
      return { phase: isLong ? PHASE.LONG : PHASE.SHORT, round: nextRound };
    }
    return { phase: PHASE.FOCUS, round };
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
  function muteRemaining(session, now) {
    if (!session || !session.mutedUntil) return 0;
    return Math.max(0, session.mutedUntil - now);
  }
  function applyLock(session) {
    if (!session) return session;
    return Object.assign({}, session, { locked: true });
  }
  function clearLock(session) {
    if (!session || !session.locked) return session;
    return Object.assign({}, session, { locked: false });
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
      remainingMs: Math.max(0, Number(raw.remainingMs) || base.plannedMs),
      startedAt: Math.max(0, Number(raw.startedAt) || 0),
      endsAt: Math.max(0, Number(raw.endsAt) || 0),
      bonusMs: Math.max(0, Number(raw.bonusMs) || 0),
      mutedUntil: Math.max(0, Number(raw.mutedUntil) || 0),
      locked: !!raw.locked && status !== STATUS.DONE,
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
  function makeRecord(opts) {
    var session = opts.session;
    var now = opts.now || session.completedAt || session.startedAt;
    var actual = elapsed(session, now);
    return {
      id: "r_" + now.toString(36) + Math.random().toString(36).slice(2, 6),
      dateKey: dayKey(session.startedAt || now),
      startedAt: session.startedAt || now,
      endedAt: session.completedAt || now,
      plannedMs: session.plannedMs,
      actualMs: actual,
      bonusMs: session.bonusMs || 0,
      phase: session.phase,
      mode: normalizeMode(session.mode),
      characterId: opts.characterId || session.characterId || "",
      characterName: opts.characterName || session.characterName || "",
      completed: !session.aborted,
      interventions: normalizeInterventions(session.interventions),
      taskName: opts.taskName || "",
      notes: "",
      injected: false
    };
  }
  function normalizeRecord(raw) {
    if (!raw || typeof raw !== "object") return null;
    var id = typeof raw.id === "string" ? raw.id : "";
    var startedAt = Number(raw.startedAt) || 0;
    if (!id || !startedAt) return null;
    return {
      id,
      dateKey: typeof raw.dateKey === "string" && raw.dateKey ? raw.dateKey : dayKey(startedAt),
      startedAt,
      endedAt: Number(raw.endedAt) || startedAt,
      plannedMs: Math.max(0, Number(raw.plannedMs) || 0),
      actualMs: Math.max(0, Number(raw.actualMs) || 0),
      bonusMs: Math.max(0, Number(raw.bonusMs) || 0),
      phase: raw.phase === "short" || raw.phase === "long" ? raw.phase : "focus",
      mode: normalizeMode(raw.mode),
      characterId: typeof raw.characterId === "string" ? raw.characterId : "",
      characterName: typeof raw.characterName === "string" ? raw.characterName : "",
      completed: raw.completed !== false,
      interventions: normalizeInterventions(raw.interventions),
      taskName: typeof raw.taskName === "string" ? raw.taskName : "",
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

  // src/services/store.js
  var KEYS = {
    settings: "fc:settings",
    session: "fc:session",
    records: "fc:records",
    meta: "fc:meta"
  };
  var DATA_VERSION = 1;
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
        await kv.set(KEYS.settings, settings);
        await kv.set(KEYS.records, records);
        if (payload.session) await kv.set(KEYS.session, payload.session);
        return { settings, records };
      },
      async clearAll() {
        await kv.remove(KEYS.settings);
        await kv.remove(KEYS.session);
        await kv.remove(KEYS.records);
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
      return allow(0, false);
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
        next = countIntervention(applyLock(session), "lock");
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
  async function createApp(opts) {
    var host = createHost(opts.roche);
    var store = createStore(host);
    var bus = createBus();
    var settings = await store.loadSettings();
    var records = await store.loadRecords();
    var rawSession = await store.loadSession();
    var now = Date.now();
    var session = rawSession ? restore(normalizeSession(rawSession), now) : null;
    var state = createState({
      route: "focus",
      now,
      settings,
      session,
      records,
      lastSupervision: null,
      calendar: { year: new Date(now).getFullYear(), month: new Date(now).getMonth() }
    });
    var timer = null;
    var destroyed = false;
    function newIdle(phase, round) {
      return createSession({
        phase,
        round,
        plannedMs: phaseDurationMs(settings, phase),
        mode: settings.focusMode,
        characterId: settings.characterId,
        characterName: settings.characterName
      });
    }
    function persistSession(next) {
      state.set({ session: next });
      store.saveSession(next);
    }
    function saveRecordFrom(s) {
      var record = makeRecord({
        session: s,
        now: s.completedAt || Date.now()
      });
      if (record.actualMs < 6e4) return null;
      records = insertRecord(records, record);
      state.set({ records });
      store.saveRecords(records);
      bus.emit(EVENTS.RECORD_SAVED, { record });
      return record;
    }
    function startPhase(phase, round) {
      var s = start(newIdle(phase, round), Date.now());
      persistSession(s);
      if (timer) {
        clearInterval(timer);
        timer = setInterval(tick, TICK_MS);
      }
      bus.emit(EVENTS.SESSION_STARTED, { session: s });
      return s;
    }
    function advance(s) {
      var next = nextPhase(settings, s.phase, s.round);
      var shouldAuto = s.phase === PHASE.FOCUS ? settings.autoStartBreak : settings.autoStartFocus;
      if (shouldAuto) {
        startPhase(next.phase, next.round);
      } else {
        persistSession(newIdle(next.phase, next.round));
        stopTicker();
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
        var saved = saveRecordFrom(done);
        if (settings.soundOn) beep("focus");
        host.ui.toast(saved ? "已记录本次专注 · " + Math.round(saved.actualMs / 6e4) + " 分钟" : "本次专注太短，未记录");
      } else if (settings.soundOn) {
        beep("break");
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
      if (s && s.status === STATUS.RUNNING && isExpired(s, t)) {
        onPhaseFinished(true);
        return;
      }
      state.set({ now: t });
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
    function applySettings(patch) {
      settings = patchSettings(settings, patch);
      state.set({ settings });
      store.saveSettings(settings);
      if (patch && patch.theme) applyTheme(settings.theme);
      var cur = state.get().session;
      if (cur && cur.status === STATUS.IDLE) {
        persistSession(newIdle(cur.phase, cur.round));
      }
    }
    var supervisor = createSupervisor({
      bus,
      now: function() {
        return Date.now();
      },
      getSettings: function() {
        return settings;
      },
      getSession: function() {
        return state.get().session;
      },
      commit: function(next) {
        persistSession(next);
      }
    });
    if (session && session.status === STATUS.DONE && session.restoreFinished && session.phase === PHASE.FOCUS) {
      saveRecordFrom(session);
      session = newIdle(PHASE.FOCUS, session.round);
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
          startPhase(PHASE.FOCUS, 1);
          timer = timer || setInterval(tick, TICK_MS);
          state.set({ now: t });
          return;
        }
        if (s.status === STATUS.IDLE) {
          timer = timer || setInterval(tick, TICK_MS);
          var started = start(s, t);
          persistSession(started);
          bus.emit(EVENTS.SESSION_STARTED, { session: started });
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
        onPhaseFinished(false);
      },
      setRoute: function(route) {
        state.set({ route });
      },
      setMode: function(mode) {
        var next = normalizeMode(mode);
        if (settings.focusMode === next) return true;
        var s = state.get().session;
        if (s && (s.status === STATUS.RUNNING || s.status === STATUS.PAUSED)) {
          host.ui.toast(mt().modeLocked);
          return false;
        }
        applySettings({ focusMode: next });
        host.ui.toast(mt().modeSwitched + "：" + modeLabel(next));
        return true;
      },
      updateSettings: function(patch) {
        applySettings(patch);
      },
      /** 角色监督的唯一 UI 入口，实际校验在 services/supervisor.js */
      requestSupervision: async function(type, payload) {
        var input = payload || {};
        var current = state.get().settings;
        if (type === ACTION.LOCK_ROOM && current.lockRoom.requireConfirm) {
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
          if (type === ACTION.EXTEND) {
            host.ui.toast(result.capped ? "已按上限加时 " + minutesText(result.ms) : "已加时 " + minutesText(result.ms));
          } else if (type === ACTION.MUTE) {
            host.ui.toast("已禁言 " + minutesText(result.ms));
          } else if (type === ACTION.LOCK_ROOM) {
            host.ui.toast(mt().lockStarted);
          } else {
            host.ui.toast(entry.line || "角色没有出声");
          }
        } else {
          host.ui.toast(reasonText(result.reason));
        }
        state.set({ lastSupervision: entry, now: entry.at });
        return result;
      },
      /** 锁房间的唯一出口：确认后结束本次专注并解除锁定 */
      emergencyExit: async function() {
        var s = state.get().session;
        if (!s) return false;
        var ok = await host.ui.confirm({ title: mt().emergencyTitle, message: mt().emergencyMessage });
        if (!ok) return false;
        if (s.status === STATUS.RUNNING || s.status === STATUS.PAUSED) {
          onPhaseFinished(false);
        } else {
          persistSession(clearLock(clearMute(s)));
          stopTicker();
          state.set({ now: Date.now() });
        }
        host.ui.toast(mt().emergencyDone);
        return true;
      },
      listCharacters: async function() {
        var list = await host.character.list();
        return list.map(function(c) {
          return {
            id: c.id,
            name: c.handle || c.name || "未命名角色",
            avatar: c.avatar || ""
          };
        });
      },
      selectCharacter: function(id, name) {
        applySettings({ characterId: id || "", characterName: name || "" });
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
        session = normalizeSession(await store.loadSession());
        state.set({ settings, records, session });
        return result;
      },
      clearAll: async function() {
        await store.clearAll();
        settings = await store.loadSettings();
        records = [];
        session = newIdle(PHASE.FOCUS, 1);
        state.set({ settings, records: [], session, lastSupervision: null });
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
    export: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M12 16V4"/><path d="M8 8l4-4 4 4"/><path d="M4 16v3a1 1 0 001 1h14a1 1 0 001-1v-3"/></svg>'
  };
  function icon(name, cls) {
    return h("span", { class: "fc-icon" + (cls ? " " + cls : ""), svg: ICONS[name] || "" });
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
    var timeEl = h("div", { class: "fc-lock__time", text: "25:00" });
    var hintEl = h("div", { class: "fc-lock__hint" });
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
        timeEl,
        hintEl,
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
      timeEl.textContent = fmtClock(remaining(session, s.now));
      hintEl.textContent = session.status === STATUS.PAUSED ? "计时已暂停，但门还锁着。" : "做完这一段，门会自己开。";
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
      if (r.completed) map[key].count += 1;
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
      if (r.completed) count += 1;
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

  // src/ui/views/focus.js
  var R = 118;
  var C = 2 * Math.PI * R;
  var PHASE_LABEL = {};
  PHASE_LABEL[PHASE.FOCUS] = "专注";
  PHASE_LABEL[PHASE.SHORT] = "短休";
  PHASE_LABEL[PHASE.LONG] = "长休";
  function phaseLabel(phase) {
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
  var focus_default = {
    mount: function(page, ctx) {
      var state = ctx.state;
      var timeEl = h("div", { class: "fc-ring__time", text: "25:00" });
      var phaseEl = h("div", { class: "fc-ring__phase", text: "专注" });
      var bonusEl = h("div", { class: "fc-ring__bonus" });
      var modeEl = h("span", { class: "fc-focus__mode", text: "独自专注" });
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
      var ringSvg = svg("svg", { viewBox: "0 0 268 268" }, [
        svg("circle", {
          class: "fc-ring__track",
          cx: "134",
          cy: "134",
          r: String(R),
          fill: "none",
          "stroke-width": "6"
        }),
        bar
      ]);
      var ring = h("div", { class: "fc-ring" }, [
        ringSvg,
        h("div", { class: "fc-ring__center" }, [timeEl, phaseEl, bonusEl])
      ]);
      var dots = h("div", { class: "fc-dots" });
      var toggleBtn = button("开始", {
        variant: "primary",
        class: "fc-btn--lg",
        onClick: function() {
          ctx.actions.toggle();
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
      var todayEl = h("div", { class: "fc-focus__today" });
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
      var speakBtn = miniButton("说话", "respond", function() {
        ctx.actions.requestSupervision(ACTION.SPEAK, {});
      });
      var supActions = h("div", { class: "fc-supervise__actions" }, [
        extendBtn.el,
        muteBtn.el,
        lockBtn.el,
        speakBtn.el
      ]);
      var superviseEl = h("section", { class: "fc-supervise" }, [
        h("div", { class: "fc-supervise__head" }, [supName, muteBadge]),
        lineEl,
        supActions,
        h("p", { class: "fc-supervise__hint", text: "角色只会做你授权的动作，可逐项开关；未授权时请求会被拒绝。" })
      ]);
      var root = h("div", { class: "fc-focus" }, [
        h("div", { class: "fc-focus__head" }, [
          modeEl,
          h("div", { class: "fc-focus__right" }, [
            dots,
            closeButton(function() {
              ctx.host.ui.closeApp();
            })
          ])
        ]),
        ring,
        h("div", { class: "fc-controls" }, [skipBtn, toggleBtn, finishBtn]),
        todayEl,
        superviseEl,
        h("p", { class: "fc-focus__note", text: "切到其他页面计时不中断；关闭 App 后会按结束时间自动结算。" })
      ]);
      page.appendChild(root);
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
      function syncPermissionDot(btn, settings, key) {
        var on = !!(settings.permissions && settings.permissions[key]);
        btn.dot.className = "fc-mini__dot" + (on ? " is-on" : "");
        btn.el.dataset.authorized = on ? "true" : "false";
      }
      function update(s) {
        var settings = s.settings;
        var session = s.session;
        var now = s.now;
        var left = session ? remaining(session, now) : settings.focusMin * 6e4;
        var phase = session ? session.phase : PHASE.FOCUS;
        var status = session ? session.status : STATUS.IDLE;
        var info = modeInfo(settings.focusMode);
        var charName = session && session.characterName || settings.characterName || "";
        timeEl.textContent = fmtClock(left);
        phaseEl.textContent = phaseLabel(phase);
        modeEl.textContent = modeLabel(settings.focusMode) + (info.bindCharacter && charName ? " · " + charName : "");
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
        var sum = todaySummary(s.records, now);
        clear(todayEl);
        todayEl.appendChild(h("span", {}, [
          h("span", { text: "今日 " }),
          h("b", { text: fmtDuration(sum.totalMs, { compact: false }) })
        ]));
        todayEl.appendChild(h("span", {}, [
          h("span", { text: "完成 " }),
          h("b", { text: String(sum.count) }),
          h("span", { text: " 次" })
        ]));
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
        syncPermissionDot(extendBtn, settings, "extend");
        syncPermissionDot(muteBtn, settings, "mute");
        syncPermissionDot(lockBtn, settings, "lockRoom");
        syncPermissionDot(speakBtn, settings, "respond");
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
      update(state.get());
      return {
        update: function(s) {
          update(s);
        },
        destroy: function() {
        }
      };
    }
  };

  // src/ui/views/stats.js
  var stats_default = {
    mount: function(page, ctx) {
      var state = ctx.state;
      var initial = state.get();
      var cursor = initial.calendar;
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
      page.appendChild(h("div", {}, [
        pageHeader("统计", "专注时长与连续天数", closeButton(function() {
          ctx.host.ui.closeApp();
        })),
        tiles,
        card([cal]),
        h("p", { class: "fc-hint", text: "统计全部由本机专注记录计算，不调用任何接口。" })
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
        ctx.actions.setCalendar(y, m);
      }
      function showDay(cell) {
        if (!cell.inMonth || !cell.ms) {
          ctx.host.ui.toast(mt().noRecord);
          return;
        }
        var list = state.get().records.filter(function(r) {
          return r.dateKey === cell.key;
        });
        var body = h("div", {}, list.map(function(r) {
          return h("div", { class: "fc-row" }, [
            h("div", { class: "fc-row__main" }, [
              h("div", { class: "fc-row__title", text: fmtTime(r.startedAt) + " - " + fmtTime(r.endedAt) }),
              h("div", { class: "fc-row__sub", text: r.completed ? "已完成" : "提前结束" })
            ]),
            h("div", { class: "fc-row__value", text: fmtDuration(r.actualMs, { compact: true }) })
          ]);
        }));
        dialog({ title: cell.key, body, actions: [{ label: "关闭", value: true }] });
      }
      function render(s) {
        var records = s.records;
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
        clear(grid);
        cells.forEach(function(c) {
          var cls = "fc-day";
          if (!c.inMonth) cls += " fc-day--out";
          else {
            var lvl = heatLevel(c.ms, max);
            if (lvl > 0) cls += " fc-day--h" + lvl;
          }
          if (c.isToday) cls += " fc-day--today";
          var cell = h("button", {
            class: cls,
            type: "button",
            title: c.ms ? fmtDuration(c.ms, { compact: true }) : "",
            onclick: function() {
              showDay(c);
            }
          }, [
            h("span", { text: c.inMonth ? String(c.day) : "" }),
            c.count ? h("span", { class: "fc-day__dot" }) : null
          ]);
          if (!c.inMonth) cell.disabled = true;
          grid.appendChild(cell);
        });
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

  // src/ui/views/history.js
  function interventionsText(counts) {
    if (!counts) return "";
    var parts = [];
    if (counts.extend) parts.push("加时 " + counts.extend + " 次");
    if (counts.mute) parts.push("禁言 " + counts.mute + " 次");
    if (counts.lock) parts.push("锁房间 " + counts.lock + " 次");
    if (counts.speak) parts.push("发言 " + counts.speak + " 次");
    return parts.join(" · ");
  }
  function dateTitle(key, now) {
    var today = dayKey(now);
    var yesterday = dayKey(addDays(now, -1));
    if (key === today) return "今天";
    if (key === yesterday) return "昨天";
    var parts = key.split("-");
    var ts = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2])).getTime();
    return fmtDateCN(ts) + " 周" + weekdayCN(ts);
  }
  var history_default = {
    mount: function(page, ctx) {
      var state = ctx.state;
      var listWrap = h("div", {});
      var headerEl = pageHeader("历史", "按天查看每次专注", closeButton(function() {
        ctx.host.ui.closeApp();
      }));
      page.appendChild(h("div", {}, [headerEl, listWrap]));
      function openDetail(record) {
        var extra = interventionsText(record.interventions);
        var body = h("div", {}, [
          h("div", { class: "fc-row" }, [
            h("div", { class: "fc-row__main" }, [h("div", { class: "fc-row__title", text: "模式" })]),
            h("div", { class: "fc-row__value", text: modeLabel(record.mode) })
          ]),
          record.characterName ? h("div", { class: "fc-row" }, [
            h("div", { class: "fc-row__main" }, [h("div", { class: "fc-row__title", text: "角色" })]),
            h("div", { class: "fc-row__value", text: record.characterName })
          ]) : null,
          h("div", { class: "fc-row" }, [
            h("div", { class: "fc-row__main" }, [h("div", { class: "fc-row__title", text: "开始" })]),
            h("div", { class: "fc-row__value", text: fmtTime(record.startedAt) })
          ]),
          h("div", { class: "fc-row" }, [
            h("div", { class: "fc-row__main" }, [h("div", { class: "fc-row__title", text: "结束" })]),
            h("div", { class: "fc-row__value", text: fmtTime(record.endedAt) })
          ]),
          h("div", { class: "fc-row" }, [
            h("div", { class: "fc-row__main" }, [h("div", { class: "fc-row__title", text: "实际专注" })]),
            h("div", { class: "fc-row__value", text: fmtDuration(record.actualMs) })
          ]),
          h("div", { class: "fc-row" }, [
            h("div", { class: "fc-row__main" }, [h("div", { class: "fc-row__title", text: "计划时长" })]),
            h("div", { class: "fc-row__value", text: fmtDuration(record.plannedMs) })
          ]),
          record.bonusMs ? h("div", { class: "fc-row" }, [
            h("div", { class: "fc-row__main" }, [h("div", { class: "fc-row__title", text: "角色加时" })]),
            h("div", { class: "fc-row__value", text: "+" + fmtDuration(record.bonusMs, { compact: true }) })
          ]) : null,
          extra ? h("div", { class: "fc-row" }, [
            h("div", { class: "fc-row__main" }, [h("div", { class: "fc-row__title", text: "角色介入" })]),
            h("div", { class: "fc-row__value", text: extra })
          ]) : null,
          h("div", { class: "fc-row" }, [
            h("div", { class: "fc-row__main" }, [h("div", { class: "fc-row__title", text: "状态" })]),
            h("div", { class: "fc-row__value", text: record.completed ? "已完成" : "提前结束" })
          ])
        ]);
        dialog({
          title: "专注详情",
          body,
          actions: [
            { label: "删除", value: "delete", variant: "danger" },
            { label: "关闭", value: false, variant: "primary" }
          ]
        }).then(function(result) {
          if (result !== "delete") return;
          ctx.actions.deleteRecord(record.id);
          ctx.host.ui.toast("已删除");
        });
      }
      function render(s) {
        clear(listWrap);
        var records = s.records || [];
        if (!records.length) {
          listWrap.appendChild(card([emptyState("还没有专注记录", "完成一次专注后，这里会出现记录。")]));
          return;
        }
        var groups = [];
        var index = {};
        records.forEach(function(r) {
          if (!index[r.dateKey]) {
            index[r.dateKey] = { key: r.dateKey, items: [], totalMs: 0 };
            groups.push(index[r.dateKey]);
          }
          index[r.dateKey].items.push(r);
          index[r.dateKey].totalMs += r.actualMs;
        });
        groups.forEach(function(g) {
          var rows = g.items.map(function(r) {
            return h("div", {
              class: "fc-row fc-row--tap",
              onclick: function() {
                openDetail(r);
              }
            }, [
              h("div", { class: "fc-row__main" }, [
                h("div", { class: "fc-row__title" }, [
                  h("span", { text: fmtTime(r.startedAt) + " - " + fmtTime(r.endedAt) }),
                  r.completed ? null : h("span", { class: "fc-hist__badge fc-hist__badge--abort", text: "提前结束" })
                ])
              ]),
              h("div", { class: "fc-row__value", text: fmtDuration(r.actualMs, { compact: true }) })
            ]);
          });
          listWrap.appendChild(h("div", { class: "fc-hist__group" }, [
            h("div", { class: "fc-hist__date" }, [
              h("span", { text: dateTitle(g.key, s.now) }),
              h("span", { class: "fc-hist__dur", text: fmtDuration(g.totalMs, { compact: true }) })
            ]),
            h("div", { class: "fc-list" }, rows)
          ]));
        });
        headerEl.querySelector(".fc-header__sub").textContent = "共 " + records.length + " 次";
      }
      render(state.get());
      return {
        update: function(s, keys) {
          if (keys.indexOf("now") !== -1 && keys.length === 1) return;
          render(s);
        },
        destroy: function() {
        }
      };
    }
  };

  // src/ui/views/settings.js
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
    minus.disabled = value <= range[0];
    plus.disabled = value >= range[1];
    return h("div", { class: "fc-row" + (o.disabled ? " fc-row--off" : "") }, [
      h("div", { class: "fc-row__main" }, [
        h("div", { class: "fc-row__title", text: label }),
        desc ? h("div", { class: "fc-row__sub", text: desc }) : null
      ]),
      h("div", { class: "fc-stepper" }, [minus, valueEl, plus])
    ]);
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
      class: "fc-mode" + (active ? " is-active" : ""),
      type: "button",
      disabled: !!disabled,
      onclick: onPick
    }, [
      h("div", { class: "fc-mode__head" }, [
        h("span", { class: "fc-mode__code", text: info.code }),
        h("span", { class: "fc-mode__name", text: info.name }),
        active ? h("span", { class: "fc-mode__tick", text: "已选" }) : null
      ]),
      h("div", { class: "fc-mode__desc", text: info.desc })
    ]);
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
        dialog({
          title: "选择角色",
          setup: function(bodyEl, close) {
            list.forEach(function(c) {
              bodyEl.appendChild(h("button", {
                class: "fc-pick__item",
                type: "button",
                onclick: function() {
                  close(c);
                }
              }, [h("span", { text: c.name })]));
            });
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
        pageHeader("设置", "模式、监督权限与数据", closeButton(function() {
          ctx.host.ui.closeApp();
        })),
        content
      ]));
      function build() {
        clear(content);
        var s = state.get();
        var settings = s.settings;
        var session = s.session;
        var busy = !!(session && (session.status === STATUS.RUNNING || session.status === STATUS.PAUSED));
        var mode = settings.focusMode;
        var caps = ctx.host.caps;
        function patch(p) {
          ctx.actions.updateSettings(p);
        }
        function perm(key, value) {
          patch({ permissions: Object.assign({}, settings.permissions, { [key]: value }) });
        }
        var modeNodes = MODE_LIST.map(function(info) {
          return modeCard(info, info.id === mode, busy, function() {
            if (busy) {
              ctx.host.ui.toast(mt().modeLocked);
              return;
            }
            ctx.actions.setMode(info.id);
          });
        });
        var modeNote = busy ? "专注进行中，模式切换会在本次结束后可用。" : "模式决定角色参与到什么程度；权限开关在此基础上逐项授权。";
        var charRow = h("div", { class: "fc-row" }, [
          h("div", { class: "fc-row__main" }, [
            h("div", { class: "fc-row__title", text: "绑定角色" }),
            h("div", { class: "fc-row__sub", text: settings.characterName || mt().charNone }),
            caps.character ? null : h("div", { class: "fc-row__sub fc-row__sub--warn", text: "宿主没有提供角色接口，B/C 模式会使用占位称呼" })
          ]),
          button("选择", { variant: "ghost", onClick: pickCharacter, disabled: !caps.character })
        ]);
        var respondAllowed = allowsPermission(mode, "respond");
        var extendAllowed = allowsPermission(mode, "extend");
        var muteAllowed = allowsPermission(mode, "mute");
        var lockAllowed = allowsPermission(mode, "lockRoom");
        var extend = settings.extend;
        var muteCfg = settings.mute;
        var about = h("div", { class: "fc-about" }, [
          h("div", { text: "版本 " + ctx.version }),
          h("div", { text: "宿主能力：存储 " + (caps.storage ? "可用" : "不可用") + " · 角色 " + (caps.character ? "可用" : "不可用") }),
          h("div", { text: "数据只保存在本机插件存储中，卸载插件会被清除，建议定期导出备份。" })
        ]);
        content.appendChild(group("模式与角色", [
          h("div", { class: "fc-modes" }, modeNodes),
          charRow
        ], modeNote));
        content.appendChild(group("角色监督权限", [
          switchRow("主动回应", "允许角色主动说话", settings.permissions.respond, function(v) {
            perm("respond", v);
          }, {
            disabled: !respondAllowed,
            note: respondAllowed ? "" : "当前模式不会调用角色"
          }),
          switchRow("增加专注时长", "允许角色延长本次专注", settings.permissions.extend, function(v) {
            perm("extend", v);
          }, {
            disabled: !extendAllowed,
            note: extendAllowed ? "" : "当前模式不具备角色监督"
          }),
          switchRow("暂时禁止发言", "允许角色限制你发言，并显示解禁倒计时", settings.permissions.mute, function(v) {
            perm("mute", v);
          }, {
            disabled: !muteAllowed,
            note: muteAllowed ? "" : "仅 C1 / C2 支持"
          }),
          switchRow("锁房间", "允许角色锁住房门，紧急退出始终可用", settings.permissions.lockRoom, function(v) {
            perm("lockRoom", v);
          }, {
            disabled: !lockAllowed,
            note: lockAllowed ? "" : "需要带角色的模式"
          })
        ], "四项权限互相独立，没有总开关。（主动回应的台词与 AI 在后续版本接入）"));
        content.appendChild(group("加时规则", [
          stepperRow("每次加时", "角色一次增加多少", Math.round(extend.fixedSec / 60), LIMITS.extendFixedMin, " 分", function(v) {
            patch({ extend: { fixedSec: v * 60 } });
          }),
          stepperRow("单次上限", "超过会被截断到这个值", Math.round(extend.maxPerTimeSec / 60), LIMITS.extendMaxPerTimeMin, " 分", function(v) {
            patch({ extend: { maxPerTimeSec: v * 60 } });
          }),
          stepperRow("累计上限", "本轮专注最多能加多少", Math.round(extend.totalCapSec / 60), LIMITS.extendTotalCapMin, " 分", function(v) {
            patch({ extend: { totalCapSec: v * 60 } });
          }, {
            format: function(v) {
              return v === 0 ? "不限" : v + " 分";
            }
          })
        ], "加时只延长本次专注的结束时间，不会改写计划时长。"));
        content.appendChild(group("禁言与锁房间", [
          stepperRow("单次最长禁言", "禁言期间会显示解禁倒计时", Math.round(muteCfg.maxSec / 60), LIMITS.muteMaxMin, " 分", function(v) {
            patch({ mute: { maxSec: v * 60 } });
          }),
          switchRow("锁房间前需要我确认", "关闭后角色可以直接上锁", settings.lockRoom.requireConfirm, function(v) {
            patch({ lockRoom: { requireConfirm: v } });
          })
        ], "锁房间只在插件内生效，无法阻止系统级退出；所有锁定都保留紧急退出。"));
        content.appendChild(group("计时", [
          stepperRow("专注时长", "每轮专注的默认长度", settings.focusMin, LIMITS.focusMin, " 分", function(v) {
            patch({ focusMin: v });
          }),
          stepperRow("短休息", "普通轮次之间的休息", settings.shortBreakMin, LIMITS.shortBreakMin, " 分", function(v) {
            patch({ shortBreakMin: v });
          }),
          stepperRow("长休息", "完成一组后的较长休息", settings.longBreakMin, LIMITS.longBreakMin, " 分", function(v) {
            patch({ longBreakMin: v });
          }),
          stepperRow("每组轮数", "多少轮专注后进入长休息", settings.roundsPerLongBreak, LIMITS.roundsPerLongBreak, " 轮", function(v) {
            patch({ roundsPerLongBreak: v });
          })
        ]));
        content.appendChild(group("自动化", [
          switchRow("专注结束自动开始休息", "省去手动点击", settings.autoStartBreak, function(v) {
            patch({ autoStartBreak: v });
          }),
          switchRow("休息结束自动开始专注", "默认关闭，避免误进入", settings.autoStartFocus, function(v) {
            patch({ autoStartFocus: v });
          }),
          switchRow("结束提示音", "使用系统音频合成，不联网", settings.soundOn, function(v) {
            patch({ soundOn: v });
          })
        ]));
        content.appendChild(group("数据", [
          h("div", { class: "fc-row" }, [
            h("div", { class: "fc-row__main" }, [
              h("div", { class: "fc-row__title", text: "导出备份" }),
              h("div", { class: "fc-row__sub", text: "生成 JSON 文件，含设置与全部记录" })
            ]),
            button("导出", { variant: "ghost", onClick: doExport })
          ]),
          h("div", { class: "fc-row" }, [
            h("div", { class: "fc-row__main" }, [
              h("div", { class: "fc-row__title", text: "导入备份" }),
              h("div", { class: "fc-row__sub", text: "会覆盖当前设置与记录" })
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
          if (keys.indexOf("settings") !== -1) build();
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
    { id: "history", label: "历史", icon: "history", view: history_default },
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
    function render(route) {
      if (current && current.destroy) current.destroy();
      clear(page);
      var def = ROUTES.filter(function(r) {
        return r.id === route;
      })[0] || ROUTES[0];
      currentRoute = def.id;
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
    var created = await createApp({ container, roche, version: "0.1.2" });
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
    version: "0.1.2",
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
