<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
  </script>
<body>
  <div class="card border-2 border-surface-900 max-w-7xl max-h-fit variant-glass-surface mt-28 mx-auto">
    <div class="overflow-hidden">
      <img src="/src/routes/tickets/huh_cat.jpg" class="max-h-60 w-full"/>
    </div>
    
    <div class="p-10 max-w-sm mx-auto justify-center">
  
      <p class="text-center mb-4 text-3xl mt-0">EZ EGY EVENTS OLDAL</p>

      <ul class="space-y-4">
        {#each data.events as event}
          <a href="/events/{event.id}">
            <li
              class="card bg-surface-50-900-token px-6 py-4 space-y-1"
            >
              <span class="block text-lg font-bold">
                {event.title}
              </span>
              <span class="block">{event.organizer.name}</span>
            </li>
          </a>
        {:else}
          <p>Jelenleg nincs eseményed</p>
        {/each}
      </ul>

    </div>
  </body>