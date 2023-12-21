<script lang="ts">
  import type { PageData } from './$types';
  
  export let data: PageData;
</script>

<div class="card border-2 border-surface-900 max-w-7xl max-h-fit variant-glass-surface mt-28 mx-auto">
  <div class="overflow-hidden">
    <img src="/src/routes/tickets/huh_cat.jpg" class="max-h-60 w-full"/>
  </div>
  
  <div class="p-10 max-w-sm mx-auto justify-center">

    <p class="text-center mb-4 text-3xl mt-0">organizationName</p>
      
    <p class="mb-0 text-left font-medium text-sm">CÉGNÉV</p>
    <p class="mb-4 text-2xl">{data.tickets?.organizationName}</p>
    
    <p class="mb-0 text-left font-medium text-sm">NÉV</p>
    <p class="mb-4 text-2xl">{data.tickets?.firstName} {data.tickets?.lastName} </p>
    
    <img
      src="/src/routes/tickets/[id=uuid]/pic/qrcode.png"
      width="225"
      class="mx-auto block"
    />
    <p class="text-center mb-4">{data.tickets?.id}</p>
  </div>
</div>
<!-- test-->