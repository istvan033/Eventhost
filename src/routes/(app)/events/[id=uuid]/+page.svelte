<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<body data-theme="wintry">
  <div class="card border-2 border-surface-900 max-w-7xl max-h-fit variant-glass-surface mt-28 mx-auto rounded-3xl">
    <div class="overflow-hidden">
      <img src="/src/routes/tickets/huh_cat.jpg" class="max-h-60 w-full rounded-t-3xl" alt="kep"/>
    </div>
    
    <div class="p-10 max-w-sm mx-auto justify-center">
  
      <p class="text-center mb-4 text-3xl mt-0">{data.event.title}</p>
      <span class="block">{data.event.placeName}</span>
      <span class="block">{data.event.startsAt}</span>
      <span class="block">{data.event.endsAt}</span>

    </div>
  </body>