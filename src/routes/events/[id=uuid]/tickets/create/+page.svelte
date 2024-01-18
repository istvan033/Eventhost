<script lang="ts">
    import type { PageData } from './$types';
    import { superForm } from 'sveltekit-superforms/client';
  
    export let data: PageData;
  
    const { form, enhance, errors } = superForm(data.form);
  

</script>

<body data-theme="wintry">
  <div class="max-w-5xl mx-auto p-8 rounded-3xl">
    <!-- "back to list" button -->

    <h2 class="h2 my-4">EVENT TITLE</h2>
    <h3 class="h3 mb-4">Regisztráció</h3>
    <div class="flex gap-8">
      <form
        class="card p-4 bg-surface-50-900-token"
        method="POST"
        use:enhance
        enctype="multipart/form-data"
      >

      </form>

    </div>
  </div>
</body>