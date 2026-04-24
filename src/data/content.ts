export const VERSION = '1.1.0';

export const URLS = {
  releases: 'https://github.com/lazylabz/gomander-app/releases/latest',
  repo: 'https://github.com/lazylabz/gomander-app',
  discussions: 'https://github.com/lazylabz/gomander-app/discussions',
  contributing: 'https://github.com/lazylabz/gomander-app?tab=readme-ov-file#contributing',
  changelog: 'https://github.com/lazylabz/gomander-app/releases',
  roadmap: 'https://github.com/orgs/lazylabz/projects/1',
  team: 'https://lazylabz.github.io',
  license: 'https://www.gnu.org/licenses/gpl-3.0.html',
} as const;

export const STATS = [
  { value: 'GPL-3.0', label: 'license' },
  { value: '∞', label: 'commands' },
  { value: '0', label: 'telemetry' },
  { value: '3', label: 'platforms' },
] as const;

export const PAINS = [
  { k: '01', t: '10+ Terminal Windows', d: 'Your desktop becomes a maze of terminal tabs' },
  { k: '02', t: 'Lost in the Chaos', d: "Which process crashed? Where's that error?" },
  { k: '03', t: 'Slow Team Onboarding', d: 'New devs spend hours figuring out what to run' },
  { k: '04', t: 'Repetitive Setup', d: 'Same commands, every single day' },
] as const;

export const FEATURES = [
  {
    icon: '⌘',
    title: 'Project Organization',
    body: 'Manage multiple projects with their own commands and configurations. Perfect for developers juggling different codebases.',
  },
  {
    icon: '⎇',
    title: 'Command Groups',
    body: 'Group related commands and launch them together. Start your entire development stack with one click.',
  },
  {
    icon: '●',
    title: 'Real-time Monitoring',
    body: 'Watch all your processes in real-time. See logs, errors, and status updates in a clean, organized interface.',
  },
  {
    icon: '⚙',
    title: 'Smart Configuration',
    body: 'Handle complex PATH requirements, nvm, pyenv, and other version managers with ease.',
  },
  {
    icon: '⊕',
    title: 'Cross-platform',
    body: 'Works seamlessly on Windows, macOS, and Linux. One tool for your entire team, regardless of their OS.',
  },
  {
    icon: '↯',
    title: 'Zero Learning Curve',
    body: 'Intuitive interface that feels familiar from day one. Start organizing your commands in minutes, not hours.',
  },
] as const;

export const ROADMAP = [
  {
    s: '// next',
    t: 'Keyboard Shortcuts',
    d: 'Complete keyboard navigation for power users',
  },
  {
    s: '// next',
    t: 'Quick Launcher',
    d: '⌘+K to access any action instantly',
  },
  {
    s: '// soon',
    t: 'Package.json Import',
    d: 'Automatically import npm scripts from your project',
  },
  {
    s: '// soon',
    t: 'Internationalization',
    d: 'English and Spanish support',
  },
  {
    s: '// later',
    t: 'Granular Environment Paths',
    d: 'Configure custom PATH settings per project and individual commands',
  },
  {
    s: '// later',
    t: 'Much More',
    d: "We're listening to the community!",
  },
] as const;

const RELEASE_BASE = 'https://github.com/lazylabz/gomander-app/releases/latest/download';

export const DOWNLOADS = {
  macOS: [
    { arch: 'Apple Silicon', label: 'arm64', file: 'gomander-darwin-arm64.dmg' },
    { arch: 'Intel', label: 'amd64', file: 'gomander-darwin-amd64.dmg' },
  ],
  Linux: [
    { arch: 'arm64', label: 'arm64', file: 'gomander-linux-arm64' },
    { arch: 'amd64', label: 'amd64', file: 'gomander-linux-amd64' },
  ],
  Windows: [
    { arch: 'arm64', label: 'arm64', file: 'gomander-windows-arm64-installer.exe' },
    { arch: 'amd64', label: 'amd64', file: 'gomander-windows-amd64-installer.exe' },
  ],
} as const;

export const downloadUrl = (file: string) => `${RELEASE_BASE}/${file}`;

export const FOOTER_PRODUCT = [
  { label: './features', href: '#features' },
  { label: './roadmap', href: '#roadmap' },
  { label: './changelog', href: URLS.changelog },
  { label: './download', href: URLS.releases },
] as const;

export const FOOTER_COMMUNITY = [
  { label: './github', href: URLS.repo },
  { label: './discussions', href: URLS.discussions },
  { label: './contributing', href: URLS.contributing },
] as const;

export const FOOTER_LEGAL = [
  { label: './license', href: URLS.license },
] as const;
