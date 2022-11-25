<template>
  <main>
    <div class="mx-auto max-w-screen-lg px-8 lg:px-1 py-6 mb-8">
      <div class="container lg:pr-8">
        <h1 class="text-6xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 lg:pr-8">Hi, I'm Handri Hermawan.</h1>
        <div class="flex flex-col lg:flex-row lg:items-center gap-3 mt-6">
          <hr class="w-10 border bg-gray-400" />
          <span class="md:text-md font-medium text-gray-400"> Front End, Web Performance, Design System </span>
        </div>
      </div>
    </div>
    <div class="mx-auto max-w-screen-lg px-8 lg:px-1 py-6">
      <div class="mb-6 text-2xl font-bold">
        <div class="flex items-baseline justify-between">
          <h2 class="mb-6 text-2xl font-bold">Recent <span class="text-fuchsia-500">Post</span></h2>
          <div class="text-sm"><a href="https://handri.medium.com">View all Posts →</a></div>
        </div>
      </div>
      <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
        <a :href="item.link" v-for="item in items">
          <div class="overflow-hidden rounded-md bg-gray-800">
            <div class="aspect-w-3 aspect-h-2">
              <img class="h-full w-full object-cover object-center as-card-image" :src="item.image" width="315" height="240" loading="lazy" alt="Image {{ item.title }}" />
            </div>
            <div class="px-4 pt-5 pb-6">
              <h2 class="text-xl font-semibold">{{ item.title }}</h2>
              <p class="mt-1 text-xs text-gray-400">{{ item.date }}</p>
              <p class="mt-4 text-sm text-gray-300">{{ item.description }}</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </main>
</template>

<script setup>
  import { ref } from "vue"

  const items = ref([
  {
      title: "Multi-Page Application dengan Webpack 5",
      image: "/img/1_QzV0QkDzyCW270CeDrX0Ug.webp",
      link: "https://handri.medium.com/multi-page-application-config-dengan-webpack-5-5de3b9b3a2e5",
      date: "Nov 16, 2022",
      description: "Pada sebuah project saya pernah menemukan kasus dimana saya harus memisahkan beberapa file css dan js..."
    },
    {
      title: "Membuat Button Custom dengan Mixins SCSS",
      image: "/img/1_Qeo2hQOH5nTQIimi0exccQ.webp",
      link: "https://handri.medium.com/membuat-button-custom-dengan-mixins-scss-8bc94db1900a",
      date: "Oct 24, 2022",
      description: "Ketika kita ingin mengembangkan sebuah website salah satu yang harus di perhatikan adalah menentukan tema..."
    },
    {
      title: "Cara Custom Font Style di SCSS",
      image: "/img/1_JOCrTdkJz7U6dtdEWF4DdA.webp",
      link: "https://handri.medium.com/cara-custom-font-style-di-scss-49287449822f",
      date: "Sep 27, 2022",
      description: "Memilih jenis font yang sesuai dengan tema atau materi halaman web atau blog merupakan hal yang penting agar..."
    },
  ])
</script>
