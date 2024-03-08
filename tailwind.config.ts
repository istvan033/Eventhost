import { join } from 'path'
import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin'

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}',"./node_modules/flowbite/**/*.js")],
	theme: {
		extend: {
			maxHeight: {
				'5/6': '50rem',
			},
			width: {
				'wide': '106.75rem',
			},
		},
	},
	plugins: [
		require('flowbite/plugin'),
		forms,
		typography,
		skeleton({
			themes: {
				preset: [
					{
						name: 'skeleton',
						enhancements: true,
					},
					{
						name: 'hamlindigo',
						enhancements: true,
					},
					{
						name: 'rocket',
						enhancements: true,
					},
					{
						name: 'wintry',
						enhancements: true,
					},
				],
			},
		}),
	],
} satisfies Config;
