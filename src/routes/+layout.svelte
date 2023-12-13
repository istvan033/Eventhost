<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
	import { AppRail, AppRailTile, AppRailAnchor } from '@skeletonlabs/skeleton';
	let currentTile: number = 0;
	import { LightSwitch } from '@skeletonlabs/skeleton';
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
			<AppRail>
				<AppRailTile bind:group={currentTile} name="tile-1" value={0} title="tile-1">
					<svelte:fragment slot="lead"></svelte:fragment>
					<span class="text-xl">Main Page</span>
				</AppRailTile>
				<AppRailTile bind:group={currentTile} name="tile-2" value={1} title="tile-2">
					<svelte:fragment slot="lead"></svelte:fragment>
					<span class="text-xl">Events</span>
				</AppRailTile>
				<AppRailTile bind:group={currentTile} name="tile-3" value={2} title="tile-3">
					<svelte:fragment slot="lead"></svelte:fragment>
					<span class="text-xl">My Tickets</span>
				</AppRailTile>
			</AppRail>
		</svelte:fragment>
		<slot />
	</AppShell>
</body>