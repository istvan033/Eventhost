<script lang="ts">
  import { page } from '$app/stores';
  import type { PageData } from './$types';
  import { goto } from '$app/navigation';
	import { enhance } from '$app/forms';

  export let data: PageData;

  async function redirectTo() {
    goto("/home")
  }

</script>


<body>
  <div class="absolute inset-0 bg-cover bg-center filter bg-gray-900">
    <section class="flex items-center justify-center min-h-screen w-screen backdrop-blur">
    <div class="mx-auto max-w-md px-6 py-12 dark:bg-gray-800 border-0 shadow-lg sm:rounded-3xl">
      <h1 class="text-2xl font-bold mb-8 text-center">Finalize Your Registration</h1>
      <form method="POST" use:enhance>
        <div class="flex flex-row space-x-4">
          <div class="relative z-0 w-full mb-5">
            <input
              class=" pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              type="text"
              name="lastName"

              placeholder="Last Name"

            />

          </div>
          <div class="relative z-0 w-full mb-5">
            <input
              class=" pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              type="text"
              name="firstName"

              placeholder="First Name"
            />
          </div>
        </div>

        <div class="relative z-0 w-full mb-5">
          <input
            type="email"
            name="email"
            readonly
            class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
            bind:value={$page.data.session.user.email}
          />
        </div>

        <div class="relative z-0 w-full mb-5">
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            class="pt-3 pb-2 pl-5 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"

          />
        </div>
        <div class="relative z-0 w-full mb-5">
          <input
            type="text"
            name="country"
            placeholder="Country"
            class="pt-3 pb-2 pl-5 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"

          />
        </div>
        <div class="relative z-0 w-full mb-5">
          <input
            type="text"
            name="city"
            placeholder="City"
            class="pt-3 pb-2 pl-5 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"

          />
        </div>
        <div class="relative z-0 w-full mb-5">
          <input
            type="text"
            name="zipCode"
            placeholder="Zip Code"
            class="pt-3 pb-2 pl-5 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"

          />
        </div>
        <div class="relative z-0 w-full mb-5">
          <input
            type="text"
            name="address"
            placeholder="Address"
            class="pt-3 pb-2 pl-5 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"

          />
        </div>
        <div class="relative z-0 w-full mb-5">
          <input
            type="text"
            name="addressDetail"
            placeholder="Address Detail"
            class="pt-3 pb-2 pl-5 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"

          />
        </div>
        <div class="relative z-0 w-full mb-5">
          <input
            type="text"
            name="organizerCode"
            placeholder="Organizer Code"
            class="pt-3 pb-2 pl-5 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"

          />
        </div>


        <button
          on:click={redirectTo}
          id="button"
          type="submit"
          class="  w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-gray-600 hover:bg-gray-100 hover:text-black hover:shadow-lg focus:outline-none"
        >

          Save
        </button>

      </form>
    </div>
  </section>
  </div>

</body>
