<script lang="ts">
    import type { PageData } from './$types';

  
    export let data: PageData;

    let stringZipCode = data.user?.zipCode as string
    let stringCountry = data.user?.country as string
    let stringCity = data.user?.city as string
    let stringAddressDetail = data.user?.addressDetail as string
    let stringAddress = data.user?.address as string

    let stringEmail = data.user?.email as string
    let stringFirstName = data.user?.firstName as string
    let stringLastName = data.user?.lastName as string
    let stringPhone = data.user?.phone as string
    let stringOrganizerCode = data.user?.organizerCode as string

  </script>
  
  <body data-theme="wintry">

    <div class="min-h-full w-screen bg-gray-900 sm:p-12">
      <div class="mx-auto max-w-md px-6 py-12 dark:bg-gray-800 border-0 shadow-lg sm:rounded-3xl">
        <h1 class="text-2xl font-bold mb-8">Form With Floating Labels</h1>
        <form method="POST">

  
  
  
          <div class="flex flex-row space-x-4">
            <div class="relative z-0 w-full mb-5">
              <input
                class="pt-3 pb-2 pl-5 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                type="text"
                name="lastName"
                placeholder="Last Name"
                bind:value={stringLastName}
              />
  
            </div>
            <div class="relative z-0 w-full mb-5">
              <input
                class="pt-3 pb-2 pl-5 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                type="text"
                name="firstName"
                placeholder="First Name"
                bind:value={stringFirstName}
              />
            </div>
          </div>
          <div class="relative z-0 w-full mb-5">
            <input
              type="text"
              name="phone"
              placeholder="phone"
              class="pt-3 pb-2 pl-5 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              bind:value={stringPhone}
  
            />
          </div>
          <div class="relative z-0 w-full mb-5">
            <input
              type="text"
              name="country"
              placeholder="country"
              class="pt-3 pb-2 pl-5 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              bind:value={stringCountry}
  
            />
          </div>
          <div class="relative z-0 w-full mb-5">
            <input
              type="text"
              name="city"
              placeholder="city"
              class="pt-3 pb-2 pl-5 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              bind:value={stringCity}
  
            />
          </div>
          <div class="relative z-0 w-full mb-5">
            <input
              type="text"
              name="zipCode"
              placeholder="zipCode"
              class="pt-3 pb-2 pl-5 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              bind:value={stringZipCode}
  
            />
          </div>
          <div class="relative z-0 w-full mb-5">
            <input
              type="text"
              name="address"
              placeholder="address"
              class="pt-3 pb-2 pl-5 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              bind:value={stringAddress}
  
            />
          </div>
          <div class="relative z-0 w-full mb-5">
            <input
              type="text"
              name="addressDetail"
              placeholder="addressDetail"
              class="pt-3 pb-2 pl-5 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              bind:value={stringAddressDetail}
  
            />
          </div>
          <input
            class="input hidden"
            type="text"
            name="organizerCode"
            readonly
            bind:value={stringOrganizerCode}
          />
          <input
            class="input hidden"
            type="text"
            name="email"
            readonly
            bind:value={stringEmail}
          />
        
          <button
            id="button"
            type="submit"
            class="  w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-gray-600 hover:bg-gray-100 hover:text-black hover:shadow-lg focus:outline-none"
          >
  
            Mentés
          </button>
  
        </form>
      </div>
    </div>
  </body>
  