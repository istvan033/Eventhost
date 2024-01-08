<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar, TabGroup, TabAnchor } from '@skeletonlabs/skeleton';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
	import { AppRail, AppRailTile, AppRailAnchor } from '@skeletonlabs/skeleton';
	let currentTile: number = 0;
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	import type { PageData } from './$types';

	export let data: PageData;
</script>
<!-- App Shell -->
<body data-theme="rocket">
	<AppShell>
		<svelte:fragment slot="header">
			<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
				<span class="h1" slot="lead">Eventhost</span>
				<svelte:fragment slot="trail"><LightSwitch /></svelte:fragment>
				
			</AppBar>
		</svelte:fragment>
		<svelte:fragment slot="sidebarLeft">
			<AppRail background="bg-surface-50-900-token">
				<AppRailAnchor href="/" title="Menu" selected={$page.url.pathname === '/'}>
					<svelte:fragment slot="lead"></svelte:fragment>
					<p class="text-lg font-medium">Menu</p>
				</AppRailAnchor>
				<AppRailAnchor href="/events" title="Events" selected={$page.url.pathname === '/events'}>
					<svelte:fragment slot="lead"></svelte:fragment>
					<p class="text-lg font-medium">Events</p>
				</AppRailAnchor>
				<AppRailAnchor href="/tickets" title="Tickets" selected={$page.url.pathname === '/tickets'}>
					<svelte:fragment slot="lead"></svelte:fragment>
					<p class="text-lg font-medium">Tickets</p>
				</AppRailAnchor>
			</AppRail>
		</svelte:fragment>
		<slot />
	</AppShell>
</body>
