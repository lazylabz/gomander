# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: an individual developer who runs several local processes at once to work on a project (monorepos, microservices, frontend + API + workers, watchers). Today they juggle many terminal tabs/windows, lose track of which process crashed, and retype the same commands every morning. Success on the landing = they download Gomander.

Secondary (not a separate audience to design for): the same developer sharing a project setup with teammates via import/export.

## Product Purpose

Gomander is an open-source desktop app (Go + Wails, React UI) to launch, monitor and organise the shell commands a developer runs on a project. It replaces a pile of terminal tabs with one window: Projects hold Commands, Commands bundle into Command Groups launched as one, and every Command's output streams into its own searchable terminal.

## Positioning

- A native GUI, not another terminal multiplexer config file: point-and-click organisation of commands per project, with live status.
- Scriptable from outside: a local REST API (auto-discovered on ports 9001–9100) lets other tools list, start and stop Commands and Groups. The official Raycast extension is built on it, and AI agents can drive it too.
- Free, GPL-3, built by two developers for themselves ("we got tired of the daily terminal chaos").

## Operating Context

Used on the developer's own machine alongside editor and browser, all day. Commands are real shell lines (`pnpm dev`, `docker compose up`, `go run ./cmd/api`) with a working directory. Gomander owns the processes and shows their output; Raycast / the API start and stop them without opening the window.

## Capabilities and Constraints

Confirmed as of v1.9.0 (2026-08-31):
- Projects with working directory; Commands with working dir (relative or absolute), optional link, Error Patterns.
- Command Groups: launch/stop a set of Commands as one; running count per group.
- Terminal log viewer (xterm.js): full ANSI colour, clickable links, search with match navigation, 10,000-line scrollback, per-line timestamps.
- Error Patterns: substrings that flag failing output lines (e.g. `[nodemon] app crashed`) for processes that fail without exiting.
- Missing-PATH detection with a hint pointing to environment path settings; custom environment paths (nvm, pyenv, etc.).
- Running-commands indicator in the sidebar.
- Import/export projects (cherry-pick commands/groups); create a project from a `package.json` (scripts become commands).
- In-app auto-update (downloads and launches the installer).
- English and Spanish UI; dark/light theme.
- macOS, Windows, Linux (.deb available). Downloads from GitHub Releases `releases/latest`.
- Local REST API + OpenAPI spec; Raycast extension: https://www.raycast.com/moisesrj97/gomander

Constraints / honesty:
- macOS builds are unsigned; users must run `sudo xattr -d com.apple.quarantine /Applications/gomander.app` after install.
- TUI commands (e.g. ngrok) are not supported (no PTY).
- Roadmap = open GitHub issues only (e.g. Makefile import, variables in commands, env vars per command, OS notifications on failure, keyboard shortcuts/launcher, search in commands list). None are promised dates.

Terminology (from app CONTEXT.md): Project, Command, Command Group, Error Pattern, Process, Release. Avoid "script/task/job", "workspace", "bundle".

## Brand Commitments

- Name: Gomander. Publisher: Lazy Labz (https://lazylabz.github.io). Twitter creator: @noeldev_.
- Mascot: gopher with a backwards dark cap (`public/og-image.png`, app icon in gomander repo `build/appicon.png`). Keep it.
- Voice: plain, developer-to-developer, a little self-deprecating (README jokes about the unsigned macOS build). No marketing superlatives.
- Site is served under `/gomander/` on GitHub Pages (base path). SEO metadata, structured data and Google verification tag in `src/layouts/Layout.astro` must be preserved.

## Evidence on Hand

- Real app screenshots: user will provide (not yet in repo).
- Raycast extension screenshots: `~/Code/personal/gomander-raycast/gomander/metadata/gomander-{1,2}.png`.
- Release notes v1.0–v1.9 on GitHub Releases.
- No testimonials, user counts, download counts or star counts on hand — do not fabricate them.

## Product Principles

1. Show the real tool. The app itself is the best argument; never substitute invented UI or claims.
2. Respect the developer's time: one clear download path, no fluff between them and the binary.
3. Honest about rough edges (unsigned macOS build, no TUI support) — trust over polish.
4. Open by default: source, API, and roadmap are public and linked.
