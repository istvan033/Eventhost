<script lang="ts">
  import type { PageData } from './$types';
  import { page } from '$app/stores';
  import { signIn, signOut } from "@auth/sveltekit/client";
	import { onMount } from 'svelte';

  export let data: PageData;

  onMount(() => {
    const scrollToDiv = () => {
      const div = document.getElementById('eyeCatcher');

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

  <div class="sticky top-0 h-screen snap-start" id="eyeCatcher">
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

  <div class="sticky top-0 h-screen flex flex-col items-center justify-center snap-center backdrop-blur ">
    <section class="flex items-center justify-center min-h-screen w-screen bg-white dark:bg-gray-900">
      <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Why should you choose us?</h2>
          <p class="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
          <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-8">
          <img class="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1">
          <img class="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2">
        </div>
      </div>
    </section>
  </div>

  <div class="sticky top-0 h-screen flex flex-col items-center justify-center snap-center backdrop-blur">
    <section class="flex items-center justify-center min-h-screen w-screen bg-white dark:bg-gray-900">
      <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Opportunities on the site.</h2>
          <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
            <li>
              The opportunity for tracking corporate life!
            </li>
            <li>
              Simple event organization.
            </li>
            <li>
              Opportunity for tracking work processes.
            </li>
            <li>
              Elevate your event with our expertise: seamless organization, innovative ideas, and impeccable execution.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </li>
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </li>
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </li>
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </li>
          </ul>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-8">
        </div>
      </div>
    </section>
  </div>

  <div class="sticky top-0 h-screen flex flex-col items-center justify-center snap-center backdrop-blur">


    <section class="relative  bg-blueGray-50">
      <div class="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
        <div class="container relative mx-auto">
          <div class="items-center flex flex-wrap">
            <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div class="pr-12">
                <h1 class="text-white font-semibold text-5xl">
                  Your story starts with us.
                </h1>
                <p class="mt-4 text-lg text-blueGray-200">
                  Let us turn your vision into reality: passion, precision, and a commitment to exceeding expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" style="transform: translateZ(0px)">
          <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
            <polygon class="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>
      </div>
      <div class="flex justify-center">
        <div class="relative inline-flex justify-center group">
          <div class="absolute transition-all duration-10000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-250 animate-tilt">
          </div>
          <a href="./aboutus/" title="Get quote now" class="relative inline-flex items-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" role="button">Get in touch with us</a>
        </div>
      </div>

    </section>
  </div>
</div>
</body>