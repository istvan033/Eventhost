<script lang="ts">
    import type { PageData } from './$types';
    import { page } from '$app/stores';
    import { signIn, signOut } from '@auth/sveltekit/client';
	    
    export let data: PageData;
  


    let sessionEmail = data.session?.user?.email;
    let emailString: string = sessionEmail as string;
    let splitEmail = emailString.split('@')[1];

    let stringZipCode = data.company?.zipCode as string
    let stringCountry = data.company?.country as string
    let stringCity = data.company?.city as string
    let stringAddressDetail = data.company?.addressDetail as string
    let stringAddress = data.company?.address as string

    let stringDescription = data.company?.description as string
    let stringEuTaxNumber = data.company?.euTaxNumber as string
    let stringFacebook = data.company?.facebook as string
    let stringInstagram = data.company?.instagram as string
    let stringLinkedIn = data.company?.linkedin as string
    let stringName = data.company?.name as string
    let stringThreads = data.company?.threads as string
    let stringTiktok = data.company?.tiktok as string
    let stringWebsite = data.company?.website as string
    let stringOrganizerCode = data.company?.organizerCode as string
  </script>
  
  <body data-theme="wintry" class="w-screen h-screen overflow-y-auto">
    <header class=" top-0 w-full z-50 snap-start">
      <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div class="flex flex-wrap justify-between items-center max-w-full">
          <a href="http://localhost:5173/" class="flex place-items-start lg:order-1">
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Eventhost</span>
          </a>
          <div class="flex place-items-end lg:order-3">
            <div class="flex items-center space-x-2 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
              {#if $page.data.session?.user}
                {#if data.organizer}
                  <a href="/profile/organizer/{data.organizer?.id}" >
                    <img src={$page.data.session?.user?.image} class="rounded-full max-h-5" alt="PFP"/>
                  </a>
                {/if}
                <p>Signed in as {$page.data.session.user.email}</p>
                <button on:click={signOut} class="underline">Sign out</button>
              {:else}
                <div class="">
                  <button on:click={() => signIn('google')} class="underline " >Sign in</button>
                </div>
              {/if}
            </div>
            <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
              <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
          </div>
          <div class="hidden justify-between place-items-center w-full lg:flex lg:w-auto lg:order-2" id="mobile-menu-2">
            <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a href="/aboutus" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Team</a>
              </li>

              {#if $page.data.session?.user}
                <li>
                  <a href="/events" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Events</a>
                </li>
                <li>
                  <a href="/home" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Home</a>
                </li>
              {/if}
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <div class="min-h-full w-screen bg-gray-900 sm:p-12">
      <div class="mx-auto max-w-md px-6 py-12 dark:bg-gray-800 border-0 shadow-lg sm:rounded-3xl">
        <h1 class="text-2xl font-bold mb-8 text-center">Update Company Information</h1>
        <form method="POST">
          <div class="relative z-0 w-full mb-5">
            <input
              type="text"
              name="name"
              placeholder="Name"
              class="pt-3 pb-2 pl-5 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              bind:value={stringName}
  
            />
          </div>
          <div class="relative z-0 w-full mb-5">
            <input
              type="text"
              name="euTaxNumber"
              placeholder="Eu Tax Number"
              class="pt-3 pb-2 pl-5 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              bind:value={stringEuTaxNumber}
  
            />
          </div>
          <div class="relative z-0 w-full mb-5">
            <input
              type="text"
              name="country"
              placeholder="Country"
              class="pt-3 pb-2 pl-5 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              bind:value={stringCountry}
  
            />
          </div>
          <div class="relative z-0 w-full mb-5">
            <input
              type="text"
              name="city"
              placeholder="City"
              class="pt-3 pb-2 pl-5 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              bind:value={stringCity}
  
            />
          </div>
          <div class="relative z-0 w-full mb-5">
            <input
              type="text"
              name="zipCode"
              placeholder="Zip Code"
              class="pt-3 pb-2 pl-5 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              bind:value={stringZipCode}
  
            />
          </div>
          <div class="relative z-0 w-full mb-5">
            <input
              type="text"
              name="address"
              placeholder="Address"
              class="pt-3 pb-2 pl-5 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              bind:value={stringAddress}
  
            />
          </div>
          <div class="relative z-0 w-full mb-5">
            <input
              type="text"
              name="addressDetail"
              placeholder="Address Detail"
              class="pt-3 pb-2 pl-5 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              bind:value={stringAddressDetail}
  
            />
          </div>
          
          <div class="relative z-0 w-full mb-5">
            <input
              type="text"
              name="website"
              placeholder="Website"
              class="pt-3 pb-2 pl-5 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              bind:value={stringWebsite}
  
            />
          </div>
          <div class="relative z-0 w-full mb-5">
            <input
              type="text"
              name="facebook"
              placeholder="Facebook"
              class="pt-3 pb-2 pl-5 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              bind:value={stringFacebook}
  
            />
          </div>
          <div class="relative z-0 w-full mb-5">
            <input
              type="text"
              name="instagram"
              placeholder="Instagram"
              class="pt-3 pb-2 pl-5 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              bind:value={stringInstagram}
  
            />
          </div>
          <div class="relative z-0 w-full mb-5">
            <input
              type="text"
              name="linkedin"
              placeholder="Linkedin"
              class="pt-3 pb-2 pl-5 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              bind:value={stringLinkedIn}
  
            />
          </div>
          
          <div class="relative z-0 w-full mb-5">
            <input
              type="text"
              name="threads"
              placeholder="Threads"
              class="pt-3 pb-2 pl-5 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              bind:value={stringThreads}
  
            />
          </div>
          <div class="relative z-0 w-full mb-5">
            <input
              type="text"
              name="tiktok"
              placeholder="Tiktok"
              class="pt-3 pb-2 pl-5 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              bind:value={stringTiktok}
  
            />
          </div>
          
          <div class="relative z-0 w-full mb-5">
            <input
              type="text"
              name="description"
              placeholder="Description"
              class="pt-3 pb-2 pl-5 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              bind:value={stringDescription}
  
            />
          </div>

          <input
            class="input hidden"
            type="text"
            name="companyEmail"
            readonly
            bind:value={splitEmail}
          />
          <input
            class="input hidden"
            type="text"
            name="organizerCode"
            readonly
            bind:value={stringOrganizerCode}
          />
        
          <button
            id="button"
            type="submit"
            class="  w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-gray-600 hover:bg-gray-100 hover:text-black hover:shadow-lg focus:outline-none"
          >
  
            Save
          </button>
  
        </form>
      </div>
    </div>
  </body>
  