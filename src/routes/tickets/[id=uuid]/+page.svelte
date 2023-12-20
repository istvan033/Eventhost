<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>


<div class="flex-grow -h-[460px] bg-white p-4 rounded shadow-md flex flex-col items-center justify-center">
  <div class="max-w flex flex-col">
    <p class="text-center mb-4 text-3xl mt-0">RENDEZVENY NEVaminagyonhosszu</p>
    
    <p class="mb-0 text-left font-medium text-sm">CÉGNÉV</p>
    <p class="mb-4 text-2xl">{data.tickets?.organizationName}</p>
    
    <p class="mb-0 text-left font-medium text-sm">NÉV</p>
    <p class="mb-4 text-2xl">{data.tickets?.firstName} {data.tickets?.lastName} </p>
    <!-- svelte-ignore a11y-missing-attribute -->
    <img
      src="/src/routes/tickets/[id=uuid]/pic/qrcode.png"
      width="225"
      class="mx-auto block"
    />
    <p class="text-center mb-4">{data.tickets?.id}</p>
  </div>
</div>

