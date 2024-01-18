<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<body data-theme="wintry">
  <div class="card border-2 border-surface-900 h-5/6 variant-glass-surface mx-8 mt-8 rounded-3xl overflow-auto overflow-x-hidden max-h-5/6">
    <div class="p-4 px-16 w-fill flex bg-surface-100-800-token border-2 border-x-transparent border-t-transparent border-surface-900 mb-1">
      <span class="block text-lg font-bold w-48 mr-48">Title:</span>
      <span class="block text-lg font-bold w-48 mr-48">Organizer:</span>
      <span class="block text-lg font-bold w-48 mr-48">Place Name:</span>
      <span class="block text-lg font-bold">Starts At:</span>
    </div>
    <ul>
      {#each data.events as event}
      <tbody>
        <a href="/events/{event.id}">    
          <li
            class=" bg-surface-50-900-token px-8 py-4 w-wide mx-8 flex my-1 rounded-3xl border-2 border-surface-900"
          >
            <span class="block w-48 mr-48">{event.title}</span>
            <span class="block w-48 mr-48">{event.organizer.name}</span>
            <span class="block w-48 mr-48">{event.placeName}</span>
            <span class="block">{event.startsAt}</span>
          </li>         
        </a>
      </tbody>
      {:else}
        <p>Jelenleg nincs eseményed</p>
      {/each}
    </ul>
  </div>
  <a href="/events/create">
    <span class="card mt-96 px-8 py-4">Create Event</span>
  </a>
</body>

  <!--
    TODO: FIX BUTTON
  -->
 