<template>
  <div class="flex flex-col">

    <!-- What's happening section -->
    <SidebarRightPreviewCard title="What's happening">

      <SidebarRightPreviewCardItem v-for="whatsHappening in whatsHappeningItems" :key="whatsHappening.title">
        <h2 class="font-bold text-gray-800 text-md dark:text-white ">{{ whatsHappening.title }}</h2>
        <p class="text-sm text-gray-600 dark:text-gray-400">{{ whatsHappening.count }}</p>
      </SidebarRightPreviewCardItem>

    </SidebarRightPreviewCard>

    <!-- Who to follow section -->

    <SidebarRightPreviewCard title="Who to follow">

      <SidebarRightPreviewCardItem v-for="whoToFollow in whoToFollowItems" :key="whoToFollow.name">

        <h2 class="flex flex-row items-center justify-between p-2">
          <div class="flex flex-row"><img :src="whoToFollow.img" :alt="whoToFollow.name" class="w-10 h-10 rounded-full">
            <div class="flex flex-col ml-2">
              <h1 class="font-bold text-gray-800 dark:text-white">{{ whoToFollow.name }}</h1>
              <p class="text-sm text-gray-600 dark:text-gray-400">{{ whoToFollow.handle }}</p>
            </div>
          </div>

          <div class="flex h-full">
            <button
              class="px-4 py-2 text-xs font-bold text-white bg-black dark:text-black dark:bg-white rounded-full">Follow</button>
          </div>
        </h2>
      </SidebarRightPreviewCardItem>

    </SidebarRightPreviewCard>

  </div>
</template>

<script setup>
const whatsHappeningItems = ref([
  {
    title: "SpaceX",
    count: "18.8k Tweets",
  },
  {
    title: "#Here may be ur ad",
    count: "8.8k Tweets",
  },
  {
    title: "#Here too",
    count: "1.8k Tweets",
  },
]);

const whoToFollowItems = ref([
  {
    name: "Elon Musk",
    handle: "@elonmusk",
    img: 'https://i.pinimg.com/736x/43/8a/93/438a938f80b6417cbc89d4ca365e7034.jpg',
  },
  {
    name: "Bill Gates",
    handle: "@BillGates",
    img: 'https://i.pinimg.com/736x/43/8a/93/438a938f80b6417cbc89d4ca365e7034.jpg',
  },
  {
    name: "Mark Zuckerberg",
    handle: "@markzuckerberg",
    img: 'https://i.pinimg.com/736x/43/8a/93/438a938f80b6417cbc89d4ca365e7034.jpg',
  },
]);
</script>
