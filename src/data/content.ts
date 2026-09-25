export const VERSION = 'v1.9.0';

const REPO = 'https://github.com/lazylabz/gomander-app';

export const URLS = {
	repo: REPO,
	download: `${REPO}/releases/latest`,
	releases: `${REPO}/releases`,
	issues: `${REPO}/issues`,
	discussions: `${REPO}/discussions`,
	contributing: `${REPO}?tab=readme-ov-file#contributing`,
	macNotice: `${REPO}?tab=readme-ov-file#macos-users---important-notice`,
	openapi: `${REPO}/blob/main/cmd/gomander/thirdpartyserver/openapi.yaml`,
	roadmap: 'https://github.com/orgs/lazylabz/projects/1',
	raycast: 'https://www.raycast.com/moisesrj97/gomander',
	lazylabz: 'https://lazylabz.github.io',
};

export const MAC_QUARANTINE_CMD = 'sudo xattr -d com.apple.quarantine /Applications/gomander.app';

export type LaunchCommand = {
	name: string;
	line: string;
	cwd: string;
	link?: string;
	output: string[];
};

export const EXAMPLE_PROJECT = 'acme-shop';
export const EXAMPLE_GROUP = 'dev stack';

export const LAUNCH_COMMANDS: LaunchCommand[] = [
	{
		name: 'db',
		line: 'docker compose up postgres',
		cwd: '.',
		output: ['postgres  | database system is ready to accept connections'],
	},
	{
		name: 'api',
		line: 'go run ./cmd/api',
		cwd: './services/api',
		output: ['migrations up to date', 'listening on http://localhost:8080'],
	},
	{
		name: 'worker',
		line: 'pnpm run worker',
		cwd: './services/worker',
		output: ['[nodemon] watching path(s): src/**/*', 'queue "emails" ready, concurrency 4'],
	},
	{
		name: 'web',
		line: 'pnpm dev',
		cwd: './apps/web',
		link: 'http://localhost:5173',
		output: ['VITE v7.1.4  ready in 412 ms', '➜  Local: http://localhost:5173/'],
	},
	{
		name: 'stripe',
		line: 'stripe listen --forward-to localhost:8080/webhooks',
		cwd: '.',
		output: ['Ready! Your webhook signing secret is whsec_••••••••'],
	},
];

export const MORNING_RITUAL = [
	'Open a terminal. cd services/api, go run ./cmd/api',
	'New tab. cd apps/web, pnpm dev',
	'New tab. docker compose up postgres, wait for it',
	'Restart the api, because it started before the database',
	'New tab. The worker. Which directory was it again?',
	'Scroll four tabs to find the one that crashed',
	'Re-run the stripe listener you forgot yesterday',
	'Explain all of the above to the new hire',
];

export const GROUPS = [
	{ name: 'dev stack', running: 5, total: 5 },
	{ name: 'frontend only', running: 2, total: 2 },
	{ name: 'e2e', running: 0, total: 3 },
];

export const PACKAGE_SCRIPTS = [
	{ script: 'dev', line: 'vite' },
	{ script: 'test', line: 'vitest --watch' },
	{ script: 'storybook', line: 'storybook dev -p 6006' },
];

export type Warning = {
	id: 'error-pattern' | 'path' | 'running';
	label: string;
	title: string;
	body: string;
};

export const WARNINGS: Warning[] = [
	{
		id: 'error-pattern',
		label: 'Error patterns',
		title: 'Error Patterns',
		body: 'Add substrings like “[nodemon] app crashed” to a Command. When a line matches, its row turns red, even if the process never exits.',
	},
	{
		id: 'path',
		label: 'Missing PATH',
		title: 'Missing PATH detection',
		body: 'If a Command fails because its executable is not on your configured PATH, you get one clear hint and a shortcut to your environment paths (nvm, pyenv and friends).',
	},
	{
		id: 'running',
		label: 'Running indicator',
		title: 'Running indicator',
		body: 'A dot in the sidebar footer keeps count of what is running, even with the commands list or the whole sidebar collapsed.',
	},
];

export const ENDPOINTS = [
	{ method: 'GET', path: '/commands', note: 'every Command and whether it is running' },
	{ method: 'POST', path: '/commands/{id}/run', note: 'start one' },
	{ method: 'POST', path: '/commands/{id}/stop', note: 'stop one' },
	{ method: 'GET', path: '/command-groups', note: 'groups with their running counts' },
	{ method: 'POST', path: '/command-groups/{id}/run', note: 'launch a whole group' },
	{ method: 'POST', path: '/command-groups/{id}/stop', note: 'stop a whole group' },
];

const asset = (name: string) => `${REPO}/releases/latest/download/${name}`;
const DEB_VERSION = VERSION.slice(1);

export type Platform = {
	id: 'mac' | 'windows' | 'linux';
	label: string;
	builds: { label: string; href: string }[];
};

export const PLATFORMS: Platform[] = [
	{
		id: 'mac',
		label: 'macOS',
		builds: [
			{ label: 'Apple silicon .dmg', href: asset('gomander-darwin-arm64.dmg') },
			{ label: 'Intel .dmg', href: asset('gomander-darwin-amd64.dmg') },
		],
	},
	{
		id: 'windows',
		label: 'Windows',
		builds: [
			{ label: 'x64 installer', href: asset('gomander-windows-amd64-installer.exe') },
			{ label: 'ARM64 installer', href: asset('gomander-windows-arm64-installer.exe') },
			{ label: 'x64 portable', href: asset('gomander-windows-amd64-portable.exe') },
		],
	},
	{
		id: 'linux',
		label: 'Linux',
		builds: [
			{ label: 'amd64 .deb', href: `${REPO}/releases/download/${VERSION}/gomander_${DEB_VERSION}_amd64.deb` },
			{ label: 'arm64 .deb', href: `${REPO}/releases/download/${VERSION}/gomander_${DEB_VERSION}_arm64.deb` },
			{ label: 'amd64 binary', href: asset('gomander-linux-amd64') },
		],
	},
];
