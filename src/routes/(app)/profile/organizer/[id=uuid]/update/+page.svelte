<script lang="ts">
    import type { PageData } from './$types';
    import Header from "@/lib/components/header.svelte";

  
    export let data: PageData;

    let stringZipCode = data.organizer?.zipCode as string
    let stringCountry = data.organizer?.country as string
    let stringCity = data.organizer?.city as string
    let stringAddressDetail = data.organizer?.addressDetail as string
    let stringAddress = data.organizer?.address as string

    let stringEmail = data.organizer?.email as string
    let stringFirstName = data.organizer?.firstName as string
    let stringLastName = data.organizer?.lastName as string
    let stringPhone = data.organizer?.phone as string
    let stringOrganizerCode = data.organizer?.organizerCode as string
  </script>
  
  <body data-theme="wintry">
    <Header />

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
  