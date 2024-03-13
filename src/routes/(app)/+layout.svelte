<script lang="ts">
	import '/src/app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	import type { PageData } from './$types';


	export let data: PageData;
</script>
<!-- App Shell -->
<body data-theme="wintry">
	<AppShell>
		<slot />
	</AppShell>
</body>