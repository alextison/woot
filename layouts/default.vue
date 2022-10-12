<template>
  <div class="flex flex-col h-screen">
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-600 border-b-2">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <img src="~/assets/img/woot_logo.png" class="mr-3 h-12 sm:h-15" alt="Woot Logo" />
      </div>
    </nav>
    <main class="flex-1">
      <slot />
    </main>
    <footer class="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-600 border-t">
      <span class="text-sm text-gray-500 text-center dark:text-gray-300 mx-auto">
        © 2022
        <a href="https://flowbite.com/" class="hover:underline">Woot™</a>
        . All Rights Reserved.
      </span>
    </footer>
  </div>
</template>
