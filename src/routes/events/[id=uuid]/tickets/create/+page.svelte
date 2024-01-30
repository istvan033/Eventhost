<script lang="ts">
  import type { PageData } from './$types';
  import { superForm } from 'sveltekit-superforms/client';

  export let data: PageData;

  const { form, enhance, errors } = superForm(data.form);

</script>

<div class="max-w-5xl mx-auto p-8">


  <h2 class="h2 my-4">{data.event.title}</h2>
  <h3 class="h3 mb-4">Regisztráció</h3>
  <div class="flex gap-8">
    <form
      class="card p-4 bg-surface-50-900-token"
      method="POST"
      use:enhance
      enctype="multipart/form-data"
    >
      <!-- full name -->
      <label class="label mb-4" for="fullName"
        >Teljes név
        <input
          class="input border-gray-300 bg-transparent border"
          class:input-error={$errors.fullName}
          type="text"
          name="fullName"
          bind:value={$form.fullName}
        />
      </label>
      <label class="label mb-4" for="email"
        >Email
        <input
          class="input border-gray-300 bg-transparent border"
          class:input-error={$errors.email}
          type="text"
          name="email"
          bind:value={$form.email}
        />
      </label>
      <label class="label mb-4" for="firstName"
        >firstName
        <input
          class="input border-gray-300 bg-transparent border"
          class:input-error={$errors.firstName}
          type="text"
          name="firstName"
          bind:value={$form.firstName}
        />
      </label>
      <label class="label mb-4" for="inviteCode"
        >inviteCode
        <input
          class="input border-gray-300 bg-transparent border"
          class:input-error={$errors.inviteCode}
          type="text"
          name="inviteCode"
          bind:value={$form.inviteCode}
        />
      </label>
      <label class="label mb-4" for="lastName"
        >lastName
        <input
          class="input border-gray-300 bg-transparent border"
          class:input-error={$errors.lastName}
          type="text"
          name="lastName"
          bind:value={$form.lastName}
        />
      </label>
      <label class="label mb-4" for="phone"
        >phone
        <input
          class="input border-gray-300 bg-transparent border"
          class:input-error={$errors.phone}
          type="text"
          name="phone"
          bind:value={$form.phone}
        />
      </label>
      <button type="submit" class="btn variant-filled-primary w-full"
        >Mentés</button
      >
    </form>
  </div>
</div>