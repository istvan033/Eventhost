<script lang="ts">
    import type { PageData } from './$types';
    import { page } from '$app/stores';
    import { signIn, signOut } from "@auth/sveltekit/client";
	import { onMount } from 'svelte';
  
    export let data: PageData;
    
    onMount(() => {
        const scrollToDiv = () => {
        const div = document.getElementById('yourDivId');

        if (div) {
            div.scrollIntoView({ behavior: 'smooth' });
        }
        };
        scrollToDiv();
    });
  
  </script>
  <body data-theme="wintry" class="scroll-smooth">
  <div class="relative overflow-y-auto snap-mandatory snap-y  h-screen overflow-hidden">
  
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
                {#if data.user}
                  <a href="/profile/user/{data.user?.id}" >
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
                <li>
                  <a href="/company/{data.company?.id}/" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">{data.company.name}</a>
                </li>
              {/if}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  
    <div class="sticky top-0 h-screen snap-start" id="yourDivId">
      <div class="absolute inset-0 bg-cover bg-center filter bg-[url('https://4kwallpapers.com/images/wallpapers/ocean-waves-aerial-view-blue-water-pattern-sea-waves-5k-2560x1080-4605.jpg')]" ></div>
      <section class="flex items-center justify-center min-h-screen w-screen backdrop-blur">
        <div class="text-center max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 relative z-10 ">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-8xl dark:text-white ">Eventhost</h1>
            <p class="mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-4xl dark:text-gray-100">We made company life great again</p>
          </div>
        </div>
      </section>
    </div>
  
  </div>
  </body>