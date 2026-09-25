---
name: Gomander
description: Launch, watch and organise every command your project runs, from one console.
colors:
  console: "#d4d6cf"
  console-raised: "#e2e3dd"
  console-sunk: "#c5c8c0"
  console-hover: "#eceee8"
  seam: "#a6a99f"
  seam-soft: "#bdc0b7"
  ink: "#1a1c1a"
  ink-2: "#434741"
  ink-3: "#52564f"
  screen: "#101311"
  screen-raised: "#181c19"
  screen-seam: "#2a302b"
  phosphor: "#d3e4d7"
  phosphor-dim: "#869a8c"
  lens: "#2a2d2b"
  lens-legend: "#a3a89f"
  accent: "#4ed3d0"
  accent-hover: "#6ee0dd"
  accent-deep: "#1f9e9a"
  go: "#2d9a5a"
  go-lit: "#4fd585"
  go-hover: "#62e295"
  hold: "#d99a1f"
  hold-lit: "#ffc34d"
  abort: "#c93c2a"
  abort-lit: "#ff5f47"
  paper: "#f2f0e9"
  pencil: "#b0301f"
  app-bg: "#ffffff"
  app-fg: "#0a0a0a"
  app-sidebar: "#fafafa"
  app-accent: "#f5f5f5"
  app-border: "#e5e5e5"
  app-muted: "#737373"
  app-running: "#dcfce7"
  app-running-active: "#bbf7d0"
  app-live: "#22c55e"
  app-error: "#fee2e2"
  app-popover: "#171717"
  term-dim: "#666666"
  term-cyan: "#29b8db"
  term-green: "#0dbc79"
  term-red: "#cd3131"
  term-yellow: "#b5b500"
typography:
  display:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3rem, 1.6rem + 4.6vw, 5.75rem)"
    fontWeight: 850
    lineHeight: 0.92
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 72"
  headline:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 1.4rem + 3.4vw, 4.25rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 80"
  title:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 750
    lineHeight: 1.15
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 90"
  lede:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 1rem + 0.3vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
    fontVariation: "'wdth' 100"
  label:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 600
    letterSpacing: "0.14em"
    fontVariation: "'wdth' 112"
  button:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 700
    letterSpacing: "0.08em"
    fontVariation: "'wdth' 108"
  tab:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 650
    letterSpacing: "0.1em"
    fontVariation: "'wdth' 108"
  lamp-legend:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.625rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.12em"
    fontVariation: "'wdth' 112"
  mono:
    fontFamily: "Martian Mono Variable, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.8
  mono-small:
    fontFamily: "Martian Mono Variable, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.6875rem"
    fontWeight: 400
    lineHeight: 1.75
  app-ui:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "normal"
  app-term:
    fontFamily: "ui-monospace, Menlo, Monaco, Courier New, monospace"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.45
rounded:
  hairline: "1px"
  lamp: "2px"
  button: "3px"
  instrument: "4px"
  panel: "6px"
  bezel: "10px"
  app-row: "6px"
  app-card: "8px"
  app-window: "10px"
spacing:
  gutter: "clamp(1rem, 4vw, 3rem)"
  max: "82rem"
  section: "clamp(5rem, 10vw, 9rem)"
  panel: "clamp(1.25rem, 2.5vw, 2rem)"
  row: "0.6rem 1.25rem"
  cluster: "0.75rem"
components:
  button-go:
    backgroundColor: "{colors.go-lit}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.button}"
    padding: "0 1.4rem"
    height: "3.25rem"
  button-go-hover:
    backgroundColor: "{colors.go-hover}"
  button-plain:
    backgroundColor: "{colors.console-raised}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.button}"
    padding: "0 1.4rem"
    height: "3.25rem"
  button-plain-hover:
    backgroundColor: "{colors.console-hover}"
  tab-switch:
    backgroundColor: "{colors.console}"
    textColor: "{colors.ink-2}"
    typography: "{typography.tab}"
    rounded: "{rounded.button}"
    padding: "0.45rem 0.7rem"
  tab-switch-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.console-raised}"
  lamp:
    backgroundColor: "{colors.lens}"
    textColor: "{colors.lens-legend}"
    typography: "{typography.lamp-legend}"
    rounded: "{rounded.lamp}"
    padding: "0.3rem 0.5rem"
    width: "3.25rem"
  lamp-go:
    backgroundColor: "{colors.go-lit}"
    textColor: "{colors.ink}"
  lamp-hold:
    backgroundColor: "{colors.hold-lit}"
    textColor: "{colors.ink}"
  lamp-abort:
    backgroundColor: "{colors.abort-lit}"
    textColor: "{colors.ink}"
  readout:
    backgroundColor: "{colors.screen}"
    textColor: "{colors.hold-lit}"
    typography: "{typography.mono-small}"
    rounded: "{rounded.lamp}"
    padding: "0.2rem 0.45rem"
  station-panel:
    backgroundColor: "{colors.console-raised}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "{spacing.panel}"
  screen-snippet:
    backgroundColor: "{colors.screen}"
    textColor: "{colors.phosphor}"
    typography: "{typography.mono}"
    padding: "1.25rem"
  checklist-sheet:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.mono}"
    rounded: "{rounded.lamp}"
    padding: "0 1.5rem 0.5rem"
  app-window:
    backgroundColor: "{colors.app-bg}"
    textColor: "{colors.app-fg}"
    typography: "{typography.app-ui}"
    rounded: "{rounded.app-window}"
  app-command-row:
    backgroundColor: "{colors.app-sidebar}"
    textColor: "{colors.app-fg}"
    typography: "{typography.app-ui}"
    rounded: "{rounded.app-row}"
    padding: "7px 10px 7px 16px"
  app-command-row-running:
    backgroundColor: "{colors.app-running}"
  app-command-row-running-active:
    backgroundColor: "{colors.app-running-active}"
  app-command-row-error:
    backgroundColor: "{colors.app-error}"
  app-terminal:
    backgroundColor: "{colors.app-bg}"
    textColor: "{colors.app-fg}"
    typography: "{typography.app-term}"
    padding: "10px 12px"
  app-toast:
    backgroundColor: "{colors.app-bg}"
    textColor: "{colors.app-fg}"
    rounded: "{rounded.app-card}"
    padding: "14px 16px"
  app-tooltip:
    backgroundColor: "{colors.app-popover}"
    textColor: "{colors.app-sidebar}"
    rounded: "{rounded.app-row}"
    padding: "6px 12px"
---

# Design System: Gomander

## Overview

**Creative North Star: "The Flight Director's Console"**

The site is an Apollo-era mission operations console, drawn flat and precise. Painted putty-grey panels carry engraved legends, square illuminated pushbuttons and lamps are the only things that glow, and dark screens are set into the hardware for machine text. The console is the page's world: the frame, the stations, the controls and the labels.

What sits *on* that console is the product itself. Every demo of Gomander is a faithful replica of the shipped desktop app: its white window, its sidebar command rows, its xterm terminal, its toasts and tooltips, in the app's own light theme. The hero is the real Gomander window running an example project. Each feature station holds a crop of the real UI. The console frames the product; it never reinvents it.

Density is instrument-panel density. Rows are tight, labels are small and tracked wide, and a panel's divisions are 1px seams rather than gutters between floating cards. Big, condensed Archivo headlines give each section a single loud statement. The build rejects the category default of a dark hero and an icon-card grid. Motion on console hardware follows lamp physics: instant on (60ms), slow decay (900ms), 1px presses. Motion inside replicas is the app's own.

**Key Characteristics:**
- Warm-grey painted console surfaces (`console` family) with dark inset screens (`screen` family).
- On the console, colour comes only from lamps (GO green, HOLD amber, ABORT red), plus a pencil red on checklist paper.
- Product demos are bounded `.gx` replicas of the real app: white window, system font, shadcn neutrals, xterm ANSI colours.
- Archivo on its width axis sets everything human on the console; Martian Mono sets only machine text.
- Panels are split by 1px seams with bevelled bezels, and lifted by one wide, soft ambient shadow.
- Instant-on, slow-decay state changes on hardware. Reduced motion collapses every transition.

## Colors

Two palettes with a hard border between them: a cool putty console with a three-lamp signal set, and, only inside product replicas, the Gomander app's own white-and-neutral light theme.

### Primary
- **Gopher Cyan** (`accent`, hover `accent-hover`, `accent-deep` for shadows and native controls): sampled from the mascot's fur. It is the one colour a visitor is meant to press: primary pushbuttons, the highlighted *go* in the hero headline, and the detected-OS lamp.
- **GO Lamp Green** (`go-lit`): status only, meaning "running / cleared": lit lamps such as the checklist's GO step, and shell prompts in screens. Never an action colour.
- **GO Deep** (`go`): the page's `accent-color` and the tint of the GO button's ambient glow. It never fills a surface.
- **GO Hover** (`go-hover`): the brighter lit state of a GO pushbutton on hover.

### Secondary
- **HOLD Amber** (`hold-lit`): "attention / output". The version readout, response output in screen snippets, and text selection. `hold` is the unlit reference and isn't painted directly.

### Tertiary
- **ABORT Red** (`abort-lit`): failure, on a lit lamp. `abort` is the unlit reference. Rare by design.
- **Pencil Red** (`pencil`): only the 2px strike-through on the crossed-out checklist paper.

### Neutral
- **Console Putty** (`console`): page ground, header, instrument wells, unselected tabs.
- **Raised Panel** (`console-raised`): station faces, download bays, endpoint panel, plain pushbuttons.
- **Sunk Tray** (`console-sunk`): footer ground, inline `code`/`kbd` chips, scrollbar track.
- **Plain Hover** (`console-hover`): hover face of a plain pushbutton.
- **Seam** (`seam`) / **Soft Seam** (`seam-soft`): 1px panel divisions, section rules, dashed row dividers, instrument-well rings.
- **Ink** (`ink`), **Ink 2** (`ink-2`), **Ink 3** (`ink-3`): primary text and selected tabs, secondary text and ledes, tertiary legends. `ink-3` measures 5.1:1 on `console` and 5.8:1 on `console-raised`.
- **Screen** (`screen`), **Screen Raised** (`screen-raised`), **Screen Seam** (`screen-seam`): screen glass for snippets, copylines, readouts and the display band; copy keys; internal rules.
- **Phosphor** (`phosphor`) / **Phosphor Dim** (`phosphor-dim`): text on screens; comments and secondary text on screens.
- **Lens** (`lens`) / **Lens Legend** (`lens-legend`): an unlit lamp and its legend (HTTP methods, other platforms' version lamps).
- **Checklist Paper** (`paper`): typed procedure sheets only.

### App Replica palette (inside `.gx` only)
Mirrored from the Gomander app source (shadcn light theme and xterm.js default ANSI colours) and defined only on the `.gx` scope in `src/styles/app-replica.css`.
- **App White** (`app-bg`), **App Ink** (`app-fg`): window, terminal and toast ground; app text.
- **App Sidebar** (`app-sidebar`), **App Accent** (`app-accent`), **App Border** (`app-border`), **App Muted** (`app-muted`): sidebar ground, selected-row fill, hairlines, secondary text and idle icons.
- **Running Row** (`app-running`) / **Running Row Active** (`app-running-active`): a command row whose process is running, and the same row when selected.
- **Live Dot** (`app-live`): the sidebar running-indicator dot and its ping.
- **Error Row** (`app-error`): a command row whose output hit an Error Pattern.
- **App Popover** (`app-popover`): tooltip and toast-action ground.
- **Terminal ANSI** (`term-dim`, `term-cyan`, `term-green`, `term-red`, `term-yellow`): timestamps, the echoed command line (cyan, bold), and ANSI output, exactly as xterm.js renders them on white. These are fidelity values, not legibility-approved: cyan, green and yellow sit near 2.2–2.5:1 on white, as they do in the shipped app.

### Named Rules
**The Lamps-Only Rule.** On console surfaces the only chromatic colour is a lit lamp (GO, HOLD, ABORT) or pencil on paper. Screens may carry `go-lit` prompts and `hold-lit` output because that is what a terminal prints.

**The Replica Border Rule.** The app palette exists only inside a `.gx` replica, and console tokens never enter one. No `app-*` or `term-*` value may be used on console hardware, and no lamp colour may be painted inside the app window.

**The Screen-Is-Inset Rule.** Dark `screen` surfaces are always set into grey hardware (a panel, a bezel or the console band). Never make a whole page or hero dark for mood.

## Typography

**Display Font:** Archivo Variable (with ui-sans-serif, system-ui)
**Label/Mono Font:** Martian Mono Variable (with ui-monospace, SFMono-Regular, Menlo)
**Replica Fonts:** the system UI stack and ui-monospace, inside `.gx` only.

**Character:** One grotesque stretched along its width axis does all the human speaking on the console: condensed and very heavy for headlines, normal for reading, expanded and tracked for engraved legends. The monospace is machine voice. Inside replicas the type is whatever the app ships: system sans at 14px, ui-monospace at 12px.

### Hierarchy
- **Display** (850, wdth 72, clamp(3rem → 5.75rem), 0.92): the hero h1 only. One word may sit on a GO-lit lamp face.
- **Headline** (800, wdth 80, clamp(2.25rem → 4.25rem), 0.95, max 16ch): one per section, a short declarative sentence. Balanced wrap.
- **Title** (750, wdth 90, 1.375rem, 1.15): station and panel headings. Download bays scale this up to 2rem at wdth 85.
- **Lede** (400, clamp(1.0625rem → 1.25rem), `ink-2`, max 52ch): the paragraph beside or under a headline.
- **Body** (400, 1rem, 1.55, max ~50ch in panels): reading text. Pretty wrap.
- **Label, engraved** (600, wdth 112, 0.6875rem, 0.14em, uppercase, `ink-2`/`ink-3`): legends painted on hardware (STN 1 · OUTPUT, LOCAL API, EXAMPLE PROJECT). Nav links (0.75rem, 0.12em, wdth 110) and sheet headers (0.16em) are close variants.
- **Button** (700, wdth 108, 0.875rem, 0.08em, uppercase): pushbutton legends. Compact contexts drop to 0.75rem.
- **Tab** (650, wdth 108, 0.6875rem, 0.1em, uppercase): tab-switch legends.
- **Lamp legend** (700, wdth 112, 0.625rem, 0.12em, uppercase): the text on a lamp face (GET, POST, 01, the version).
- **Mono** (0.75rem / 0.6875rem, ligatures off, tabular nums for counts): commands, paths, endpoints, snippets, version readouts.
- **App UI** (system sans, 14px, 1.4; row labels 500; section labels 13px `app-muted`): everything inside a replica window.
- **App Terminal** (ui-monospace, 12px, 1.45, `white-space: pre`): replica xterm output.

### Named Rules
**The Machine-Voice Rule.** On the console, Martian Mono is only for text a machine would print or a user would type: shell lines, paths, endpoints, output, counters. Headings, labels, buttons and prose never use mono.

**The Width-Axis Rule.** Console hierarchy comes from Archivo's `wdth` axis as much as from size: headlines condense (72–92) and legends expand (108–118). Don't reach for a second sans outside replicas.

**The Shipped-Type Rule.** Inside `.gx`, type is reset to the app's own (system sans, `letter-spacing: normal`, `font-variation-settings: normal`). Archivo and Martian Mono never appear inside a replica window.

## Layout

A single centred column, `min(100% - 2 × gutter, 82rem)`, with a fluid gutter (`clamp(1rem, 4vw, 3rem)`). Sections stack full-bleed on the console ground, each separated by a 1px `seam` bottom rule and padded `clamp(5rem, 10vw, 9rem)` top and bottom (the hero runs tighter). The recurring composition is an asymmetric two-column split, copy against instrument, at 5fr / 7fr. Section heads above a full-width panel group set headline and lede side by side at 7fr / 5fr, aligned to the end. Feature stations sit on a 12-column grid in alternating 7 / 5 then 5 / 7 spans.

The hero instrument is the replica window: a 236px sidebar beside the terminal, 27rem tall. At 40rem it stacks the sidebar over a 9.5rem terminal and hides secondary sidebar rows rather than shrinking them. Station crops keep a fixed instrument height where panels swap (11.5rem, 13rem below 36rem) so switching tabs never shifts the page.

Everything collapses to one column at 64rem. Further steps at 52rem and 30rem (header), 40rem (hero window, endpoints) and 36rem (station crops, import diagram) remove secondary readouts instead of shrinking them. Inside console panels rows run `0.6rem 1.25rem`, faces `clamp(1.25rem, 2.5vw, 2rem)`, button clusters 0.75rem apart. Inside replicas spacing is the app's own 8px grid.

## Elevation & Depth

Hybrid, and physical. On the console, depth comes from how hardware is made: bevelled bezels (inset top highlight plus inset bottom shade), 1px seams drawn as spread-0 rings, instrument wells ringed inset. A panel group gets one wide, soft, low-opacity ambient shadow that places it on the desk; lit elements add a glow in their own lamp hue. Replicas sit on the console like objects on the desk (a hairline ring and a soft drop), and inside them only the app's own shadows apply.

### Shadow Vocabulary
- **Panel ambient** (`box-shadow: 0 0 0 1px var(--seam), 0 30px 60px -40px rgb(30 34 30 / 0.5)`): seam-gridded panel groups (stations, bays, uplink panel, Raycast image).
- **Window lift** (`box-shadow: 0 0 0 1px rgb(0 0 0 / 0.14), 0 30px 60px -30px rgb(30 34 30 / 0.55), 0 12px 24px -16px rgb(30 34 30 / 0.35)`): the hero replica window, the one most-lifted object.
- **Crop lift** (`box-shadow: 0 0 0 1px rgb(0 0 0 / 0.12), 0 10px 24px -16px rgb(30 34 30 / 0.45)`): a UI crop set into a station.
- **Bezel** (`box-shadow: inset 0 1px 0 rgb(255 255 255 / 0.8), 0 0 0 1px var(--seam)`): standalone raised plates.
- **Lamp lens** (`box-shadow: inset 0 1px 0 rgb(255 255 255 / 0.08), inset 0 -1px 0 rgb(0 0 0 / 0.4)`): unlit lamp. When lit, a ring plus a lamp-hue glow is added (see sidecar).
- **App toast** (`box-shadow: 0 4px 12px rgb(0 0 0 / 0.1)`): the app's own toast, inside replicas only.

### Named Rules
**The Hardware-Only Depth Rule.** Every console shadow must be explainable as a bevel, a seam, a recess, a lamp glow, the desk shadow, or a replica resting on the desk. If it's just "cards floating", remove it.

## Shapes

On the console, nearly square, with corners graded by object size: 1px on marks, 2px on lamps, readouts and paper, 3px on pushbuttons and tabs, 4px on instrument wells, 6px on panel groups, 10px on the display bezel. Nothing on the console is pill-shaped or round, except the 4px dot separators in the facts line and the app icon's own rounding. Panel groups are built by setting a `seam` background with a 1px grid gap and `overflow: hidden`, so the seams read as machined joins. Dashed seams divide rows; solid 2px ink rules open printed documents (checklist header).

Inside replicas the app's radii apply: 10px window, 8px crops and toasts, 6px command rows and tooltips, 4px toast action, round window lights and live dot, and lucide icons at 16px with a 2px stroke (`AppIcon`, replicas only; console icons are a separate 1.75px set).

## Components

### Buttons (pushbuttons)
Square, illuminated, physically pressed.
- **Shape:** near-square (3px), 3.25rem tall, 1.4rem side padding. Compact contexts go to 2.5–2.9rem tall with a 0.75rem legend.
- **GO:** `go-lit` face, `ink` legend, bevel highlight, black 1px ring and a green ambient glow. It's for the one action that launches or downloads.
- **Plain:** `console-raised` face, `ink` legend, bevel, `seam` ring and a small grey drop.
- **Hover / Active:** hover brightens the face (`go-hover` / `console-hover`) and widens the glow. Active presses down `translateY(1px)` over 120ms. Focus is the global 2px ink outline, offset 3px.
- **Disabled:** plain buttons go flat, transparent with a soft seam ring. When the visitor's OS is detected, other platforms' GO buttons revert to the plain treatment so only one GO is lit per decision.

### Tab switch
A row of flat console keys above an instrument, used as a keyboard-navigable tablist (arrow keys move the selection).
- **Style:** `console` face, `ink-2` tab legend, 3px corners, inset `seam` ring, 0.35rem apart.
- **Selected:** solid `ink` face with a `console-raised` legend and no ring. It does not light; lamps are reserved for status.
- **Hover:** legend goes to `ink` over 200ms. The selection drives the instrument panel and the title and body below it.

### Lamps
The status atom of the console.
- **Style:** min 3.25rem wide, 2px corners, uppercase lamp legend. Unlit it shows `lens` with a `lens-legend` legend.
- **States:** `go`, `hold`, `abort` light the face with the `-lit` hue and an `ink` legend, add a 1px dark ring and a hue glow, and switch in 60ms. Returning to unlit decays over 900ms.
- **Use:** a real status or a real category (HTTP method, the detected platform's version, a completed step), never decoration. Lamps never appear inside a replica; the app's status is its own row colours and dot.

### Cards / Containers (stations, bays)
- **Corner Style:** 6px on the group, square inside.
- **Background:** `console-raised` faces on a `seam` grid.
- **Shadow Strategy:** Panel ambient, applied once per group.
- **Internal Padding:** `clamp(1.25rem, 2.5vw, 2rem)`.
- **Anatomy:** engraved station legend, then an instrument (a replica crop or a console instrument well), then a title and body.

### App replicas (signature)
Faithful HTML reproductions of the shipped Gomander UI, scoped under `.gx`.
- **Window:** white, 10px, window lift; a 32px macOS titlebar (`#f6f6f6`, centred 13px/600 title, three 12px lights); sidebar and terminal split by an `app-border` hairline.
- **Command rows:** 6px rows inset 8px in the sidebar, name left, lucide play (idle) or square (running) right. Running fills `app-running` (`app-running-active` when selected), an Error Pattern hit fills `app-error`, selection alone fills `app-accent`. Fill changes over 180ms.
- **Group rows:** folder icon, name at 500, a `(running/total)` count, play and stop icons shown only when meaningful.
- **Terminal:** white xterm, 12px ui-monospace, `[hh:mm:ss]` timestamps in `term-dim`, the echoed command in bold `term-cyan`, output in ANSI hues; lines never wrap.
- **Live dot and tooltip:** a 6px dot, neutral when idle, `app-live` with the app's 1s ping when anything runs; a dark 6px tooltip names the count.
- **Toast:** white 8px card with an `app-border` hairline and the app's soft shadow, with a dark "Learn more" action.
- **Behaviour:** the hero window is interactive: rows select, play/stop toggle, the group button runs Commands in sequence. It auto-runs once when 40% visible and runs instantly under reduced motion. Copy in replicas matches the app's real strings.

### Instrument wells
Console-side instruments around a replica: a `console` well with an inset `seam-soft` ring and 4px corners (the package.json → commands import diagram).

### Screens (snippets, copylines, readouts)
`screen` glass with `phosphor` mono text. Snippets run 0.75rem at 1.8 line height with `phosphor-dim` comments, `go-lit` prompts and `hold-lit` output. Copylines pair a snippet with a `screen-raised` copy key behind a `screen-seam` rule. The header version readout is a small `screen` chip in `hold-lit` mono.

### Checklist sheet
Typed paper (`paper`, 2px corners, seam ring). An uppercase header sits over a 2px ink rule. Steps are numbered mono lines split by soft seams, each with an empty check box, struck through in `pencil`. It's used only to show the old way.

### Navigation
A sticky console strip: `console` ground, a `seam` bottom rule with a 1px white highlight beneath, 4.25rem tall. It holds the brand wordmark (800, wdth 118, 0.1em, uppercase), the version readout, engraved-style links (Features, API, GitHub) in `ink-2` that go to `ink` on hover, and a compact GO Download pushbutton. Text links drop out at 52rem, and at 30rem only the brand and Download remain.

### Text links
Inline links are ink with a 1px underline offset 0.22em. Standalone links have a 1px ink bottom border and a trailing arrow icon that nudges 2px on hover.

## Do's and Don'ts

### Do:
- **Do** show the product only as a `.gx` replica of the shipped app, using the app's own palette, system font, radii, icons and strings.
- **Do** keep every console surface grey (`console`, `console-raised`, `console-sunk`) and let only lamps carry colour.
- **Do** switch lit states in 60ms and let them decay over 900ms on `cubic-bezier(0.16, 1, 0.3, 1)`.
- **Do** join panels with 1px `seam` gaps on a seam background, and lift a group once with the panel ambient shadow.
- **Do** set commands, paths, output and counts on the console in Martian Mono with ligatures off and tabular numbers.
- **Do** use engraved legends as labels painted on a panel or instrument, naming the readout they sit on (STN 1 · OUTPUT, LOCAL API).
- **Do** press pushbuttons down by 1px. Hover brightens the face and never lifts the button.
- **Do** light only one GO pushbutton per decision group.

### Don't:
- **Don't** invent product UI. No made-up consoles, dashboards or status boards standing in for the app.
- **Don't** let replica tokens (`app-*`, `term-*`, system font, app radii) leak onto console hardware, or console tokens (lamps, Archivo, Martian Mono) into a replica.
- **Don't** introduce a new hue for decoration on the console. Blue, purple and gradient accents don't exist there.
- **Don't** set a full dark theme or dark hero. Screens are always inset in grey hardware.
- **Don't** put an engraved label above a section headline as an eyebrow. Headlines stand alone.
- **Don't** use Martian Mono for headings, buttons or prose.
- **Don't** use pills, large radii, hard offset shadows or floating card stacks on the console.
- **Don't** go lighter than `ink-3` for text on light console surfaces; it is the AA floor.
- **Don't** use floaty easing, scroll fade-ins or bounces on console hardware. State changes behave like lamps.
