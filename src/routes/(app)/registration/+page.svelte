<script lang="ts">
	import { page } from '$app/stores';
    import type { PageData } from './$types';
    import { superForm } from 'sveltekit-superforms/client';
  
    export let data: PageData;

  
    const { form, enhance } = superForm(data.form);
  </script>
  
  <body data-theme="wintry">
    <div class="flex justify-center gap-4">
      <div class="max-w-md">
        <h1 class="h2 mb-4">Regisztráció befejezése</h1>
        <form method="POST" use:enhance>
          <label class="label mb-4" for="email"
            >Email
            <input
              class="input"
              type="text"
              name="email"
              readonly
              bind:value={$page.data.session.user.email}
            />
          </label>
  
          <div class="grid grid-cols-12 gap-4 mt-4">
            <label class="label mb-4 col-span-3" for="firstName"
              >firstName
              <input
                class="input"
                type="text"
                name="firstName"
                bind:value={$form.firstName}
              />
            </label>
  
            <label class="label mb-4 col-span-3" for="lastName"
              >lastName
              <input
                class="input"
                type="text"
                name="lastName"
                bind:value={$form.lastName}
              />
            </label>
          </div>
  
          <label class="label mb-4" for="phone"
            >phone
            <input
              class="input"
              type="text"
              name="phone"
              bind:value={$form.phone}
            />
          </label>
  
          <button type="submit" class="btn variant-filled w-full"
            >Mentés</button
          >
        </form>
      </div>
    </div>
  </body>
  