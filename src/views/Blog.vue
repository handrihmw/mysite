<template>
  <main>
    <header>
      <div class="max-w-screen-xl py-6 mx-auto px-8 lg:px-0">
        <h1 class="text-3xl font-bold leading-tight text-gray-100">My <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 lg:pr-8">Blog</span></h1>
        <hr class="w-5 border bg-gray-400" />
      </div>
    </header>
    <div class="max-w-screen-lg px-8 lg:px-1 py-8">
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
      title: "Enum dalam TypeScript: Alat Bantu yang Ampuh untuk...",
      image: "/img/1_ud0sEpluCXzmf9Jr7x37UA.webp",
      link: "https://handri.medium.com/enum-dalam-typescript-alat-bantu-yang-ampuh-untuk-keamanan-pengetikan-dan-kejelasan-kode-66c57bfc2159",
      date: "May 15, 2023",
      description: "Enum dalam TypeScript menyediakan mekanisme yang berharga bagi pengembang untuk mendefinisikan sekumpulan..."
    },
    {
      title: "Cara Membuat Copy Paste Teks Menggunakan Javascript",
      image: "/img/1_s-B7G59Xks7WGSXZBTnYTA.webp",
      link: "https://handri.medium.com/cara-membuat-copy-pasteteks-menggunakan-javascript-b45003025321",
      date: "Feb 8, 2023",
      description: "Saat membuat halaman web dan aplikasi yang sudah mulai kompleks, terkadang kita ingin menambahkan fitur copy paste agar..."
    },
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
    {
      title: "Membuat Accordion di Vue 3 dan Bootstrap 5",
      image: "/img/1_7LllZRcn-CFr0bMLBO2aig.webp",
      link: "https://handri.medium.com/membuat-accordion-di-vue-3-a5f83a5dc6a",
      date: "Aug 18, 2022",
      description: "Komponen Accordion sangat berguna dan dapat ditemukan di banyak library seperti Bootstrap, Tailwind, Foundation..."
    },
    {
      title: "Membuat Font Icon Sendiri Dengan Mudah",
      image: "/img/1_kRTxVg05z3-rX9lO0Zki2A.webp",
      link: "https://handri.medium.com/membuat-font-icon-sendiri-dengan-mudah-27ce54f294bf",
      date: "Jul 6, 2022",
      description: "Menggunakan icon atau gambar pada tampilan website mungkin akan menjadikan tampilan website yang kita miliki lebih..."
    },
    {
      title: "Meningkatkan Performance Web dengan Optimasi Gambar",
      image: "/img/1_5Xdu-XOwD2FlWVn2rXSj5w.webp",
      link: "https://handri.medium.com/meningkatkan-performance-web-dengan-optimasi-gambar-55ee73a47c60",
      date: "Jun 30, 2022",
      description: "Optimasi gambar mungkin salah satu cara untuk meningkatkan skor pada metrik web vital. Beberapa optimasi gambar..."
    }
  ])
</script>
