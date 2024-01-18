<script lang="ts">
  import type { PageData } from './$types';
  import { superForm } from 'sveltekit-superforms/client';

  export let data: PageData;

  const { form, enhance } = superForm(data.form);
</script>

<body data-theme="wintry">
  <div class="flex justify-center gap-4">
    <div class="max-w-md">
      <h1 class="h2 mb-4">Esemény létrehozása</h1>
      <form method="POST" use:enhance>
        <label class="label mb-4" for="placeName"
          >Helyszin neve
          <input
            class="input"
            type="text"
            name="placeName"
            bind:value={$form.placeName}
          />
        </label>

        <div class="grid grid-cols-12 gap-4 mt-4">
          <label class="label mb-4 col-span-3" for="country"
            >Ország
            <input
              class="input"
              type="text"
              name="country"
              bind:value={$form.country}
            />
          </label>

          <label class="label mb-4 col-span-3" for="zipCode"
            >Irányítószám
            <input
              class="input"
              type="text"
              name="zipCode"
              bind:value={$form.zipCode}
            />
          </label>

          <label class="label mb-4 col-span-6" for="city"
            >Város
            <input
              class="input"
              type="text"
              name="city"
              bind:value={$form.city}
            />
          </label>
        </div>

        <label class="label mb-4" for="address"
          >Utca, házszám
          <input
            class="input"
            type="text"
            name="address"
            bind:value={$form.address}
          />
        </label>

        <label class="label mb-4" for="addressDetail"
          >Lépcsőház, emelet, ajtó
          <input
            class="input"
            type="text"
            name="addressDetail"
            bind:value={$form.addressDetail}
          />
        </label>

        <label class="label mb-4" for="title"
          >Esemény megnevezése
          <input
            class="input"
            type="text"
            name="title"
            bind:value={$form.title}
          />
        </label>

        <label class="label mb-4" for="description"
          >Esemény leírása
          <input
            class="input"
            type="text"
            name="description"
            bind:value={$form.description}
          />
        </label>
        <div class="grid grid-cols-12 gap-4 mt-4">
          <label class="label mb-4 col-span-6" for="startsAt"
            >Esemény kezdete
            <input
              class="input"
              type="date"
              name="startsAt"
              bind:value={$form.startsAt}
            />
          </label>

          <label class="label mb-4 col-span-6" for="endsAt"
            >Esemény befejezése
            <input
              class="input"
              type="date"
              name="endsAt"
              bind:value={$form.endsAt}
            />
          </label>
        </div>

        <button type="submit" class="btn variant-filled w-full"
          >Mentés</button
        >
      </form>
    </div>
  </div>
</body>
