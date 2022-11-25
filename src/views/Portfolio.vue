<template>
  <main>
    <header>
      <div class="max-w-screen-xl py-6 mx-auto px-8 lg:px-0">
        <h1 class="text-3xl font-bold leading-tight text-gray-100">My <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 lg:pr-8">Portfolio</span></h1>
        <hr class="w-5 border bg-gray-400" />
      </div>
    </header>
    <div class="max-w-screen-lg px-8 lg:px-1 py-8">
      <h2 class="mb-6 text-2xl font-bold">Recent Talks</h2>
      <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
        <a :href="item.link" v-for="item in items">
          <div class="overflow-hidden rounded-md bg-gray-800 as-card">
            <div class="aspect-w-3 aspect-h-2">
              <img class="h-full w-full object-cover object-center as-card-image" :src="item.image" width="315" height="240" loading="lazy" alt="Image {{ item.title }}" />
            </div>
            <div class="px-4 pt-5 pb-6">
              <h2 class="text-xl font-semibold">{{ item.title }}</h2>
              <p class="mt-3 text-sm text-gray-200">{{ item.role }}</p>
              <p class="mt-1 text-xs text-gray-400">{{ item.date }}</p>
            </div>
          </div>
        </a>
      </div>
    </div>
    <div class="max-w-screen-lg px-8 lg:px-1 py-8 mt-5">
      <h2 class="mb-6 text-2xl font-bold">Recent Project</h2>
      <div class="flex flex-col gap-6">
        <div class="flex flex-col items-center gap-x-8 rounded-md bg-gray-800 p-3 md:flex-row">
          <div class="shrink-0">
            <img src="/img/line.svg" class="h-24 w-32" width="40" height="40" loading="lazy" alt="Arunika Design System" />
          </div>
          <div>
            <div class="flex flex-col items-center gap-y-2 md:flex-row">
              <h3 class="text-xl font-semibold">Arunika Design System</h3>
              <div class="ml-3 flex gap-2">
                <div class="rounded-md px-2 py-1 text-xs font-semibold bg-green-800 text-white">Nuxt JS</div>
                <div class="rounded-md px-2 py-1 text-xs font-semibold bg-purple-800 text-white">Bootstrap</div>
                <div class="rounded-md px-2 py-1 text-xs font-semibold bg-blue-700 text-white">Webpack</div>
                <div class="rounded-md px-2 py-1 text-xs font-semibold bg-red-800 text-white">SCSS</div>
              </div>
            </div>
            <p class="mt-5 text-gray-400">The design system that was built using scss and bem methodology. mobile friendly and very suitable for website development that cares about core web vitals.</p>
          </div>
        </div>
        <div class="flex flex-col items-center gap-x-8 rounded-md bg-gray-800 p-3 md:flex-row">
          <div class="shrink-0">
            <img src="/img/line.svg" class="h-24 w-32" width="40" height="40" loading="lazy" alt="Tegsa Adventure Travel" />
          </div>
          <div>
            <div class="flex flex-col items-center gap-y-2 md:flex-row">
              <h3 class="text-xl font-semibold">Tegsa Adventure Travel</h3>
              <div class="ml-3 flex gap-2">
                <div class="rounded-md px-2 py-1 text-xs font-semibold bg-red-700 text-white">Laravel</div>
                <div class="rounded-md px-2 py-1 text-xs font-semibold bg-purple-800 text-white">Bootstrap</div>
                <div class="rounded-md px-2 py-1 text-xs font-semibold bg-blue-700 text-white">Webpack</div>
                <div class="rounded-md px-2 py-1 text-xs font-semibold bg-red-800 text-white">SCSS</div>
              </div>
            </div>
            <p class="mt-5 text-sm text-gray-400">an application for booking tours in Yogyakarta with many choices of packages and interesting destinations to visit. built using laravel and bootstrap as well as good seo optimization.</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
  import { ref } from "vue"

  const items = ref([
    {
      title: "Devcussion 8.0: A Beginers Guide to Web 3.0",
      image: "img/1658578800479.webp",
      link: "https://www.youtube.com/watch?v=dY7UsDLSbLw",
      role: "Moderator",
      date: "Nov 29, 2021"
    },
    {
      title: "Belajar Dasar Pemrograman Javascript",
      image: "img/1658579023420.webp",
      link: "https://www.youtube.com/watch?v=8_fSNzlStoM",
      role: "Moderator",
      date: "May 24, 2022"
    },
    {
      title: "Membuat Website dengan HTML, CSS, dan Javascript",
      image: "img/1658578517378.webp",
      link: "https://www.youtube.com/watch?v=usjz90CtGDg",
      role: "Speaker",
      date: "Jul 23, 2021"
    },
    {
      title: "Core Web Vitals and Plugins for Your Wordpress Sites Best Performance",
      image: "img/1658578361621.webp",
      link: "https://www.youtube.com/watch?v=-AsaYNKkbKo",
      role: "Speaker",
      date: "Jun 30, 2021"
    },
    {
      title: "Niagahoster Event: Audit Your Site",
      image: "img/1658578475446.webp",
      link: "https://www.youtube.com/watch?v=2h-7PEkiGP4",
      role: "Speaker",
      date: "Jul 24, 2020"
    }
  ])
</script>

<style>
  .as-card {
    height: 372px;
  }
  .as-card-image {
    height: 200px;
    width: 100%;
  }
</style>
