<script lang="ts">
  import type { PageData } from './$types';
  import { page } from '$app/stores';
  import { signIn, signOut } from "@auth/sveltekit/client";

  export let data: PageData;





</script>
<body data-theme="wintry" class="scroll-smooth">
<div class="relative overflow-y-auto snap-mandatory snap-y  h-screen overflow-hidden">

  <header class=" top-0 w-full z-50 snap-start">
    <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
      <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <a href="http://localhost:5173/" class="flex items-center">
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Eventhost</span>
        </a>
        <div class="flex items-center lg:order-2">
          <div class="flex items-center space-x-2 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
            {#if $page.data.session?.user}
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
        <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
          <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <a href="#" class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Home</a>
            </li>


            <li>
              <a href="http://localhost:5173/aboutus" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Team</a>
            </li>
            <li>
              <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <div class="sticky top-0 h-screen snap-start">
    <div class="absolute inset-0 bg-cover bg-center filter bg-[url('https://4kwallpapers.com/images/wallpapers/ocean-waves-aerial-view-blue-water-pattern-sea-waves-5k-2560x1080-4605.jpg')]" ></div>
    <section class="flex items-center justify-center min-h-screen w-screen backdrop-blur">
      <div class="text-center max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 relative z-10 ">
        <div class="mr-auto place-self-center lg:col-span-7">
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-8xl dark:text-white ">Eventhost</h1>
          <p class="mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-4xl dark:text-gray-400">We made company life great again</p>
        </div>
      </div>
    </section>
  </div>

  <div class="sticky top-0 h-screen flex flex-col items-center justify-center snap-center backdrop-blur ">
    <section class="flex items-center justify-center min-h-screen w-screen bg-white dark:bg-gray-900">
      <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Miért éri meg minket választani?</h2>
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
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Lehetőségek az oladon</h2>
          <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
            <li>
              At least 10 characters (and up to 100 characters)
            </li>
            <li>
              At least one lowercase character
            </li>
            <li>
              Inclusion of at least one special character, e.g., ! @ # ?
            </li>
            <li>
              At least 10 characters (and up to 100 characters)
            </li>
            <li>
              At least one lowercase character
            </li>
            <li>
              Inclusion of at least one special character, e.g., ! @ # ?
            </li>
            <li>
              At least 10 characters (and up to 100 characters)
            </li>
            <li>
              At least one lowercase character
            </li>
            <li>
              Inclusion of at least one special character, e.g., ! @ # ?
            </li>
            <li>
              At least 10 characters (and up to 100 characters)
            </li>
            <li>
              At least one lowercase character
            </li>
            <li>
              Inclusion of at least one special character, e.g., ! @ # ?
            </li>
            <li>
              At least 10 characters (and up to 100 characters)
            </li>
            <li>
              At least one lowercase character
            </li>
            <li>
              Inclusion of at least one special character, e.g., ! @ # ?
            </li>
          </ul>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-8">
        </div>
      </div>
    </section>
  </div>

  <div class="sticky top-0 h-screen flex flex-col items-center justify-center snap-center backdrop-blur">
    <div class="flex items-center justify-center min-h-screen bg-blueGray-50">
      <section class="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
        <div class="absolute top-0 w-full h-full bg-center bg-cover"></div>
        <div class="container">
          <div class="items-center">
            <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div class="pr-12">
                <h1 class="text-white font-semibold text-5xl">
                  Your story starts with us.
                </h1>
                <p class="mt-4 text-lg text-blueGray-200">
                  This is a simple example of a Landing Page you can build using
                  Notus JS. It features multiple CSS components based on the
                  Tailwind CSS design system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="pb-10 bg-blueGray-200 -mt-24">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap">
            <div class="lg:pt-12 pt-60  md:w-4/20 px-4 text-center mr-48">
              <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div class="px-4 py-5 flex-auto">
                  <div class=" p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                    <i class="fas fa-award"></i>
                  </div>
                  <h6 class="text-xl ">Eventhost team</h6>
                  <p class="m-auto text-black over">
                    Vedd fel velünk a kapcsolatot és mi segítünk neked. Kiválasztjuk a legjobb ajánaltot számodra.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>


  </div>
</div>





</body>