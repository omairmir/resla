<template>
    <div class="flex flex-col gap-6 w-[410px]">
      <div class="flex">
        <img :src="imageUrl" class="h-[340px] rounded-xl" />
      </div>
      <div class="flex flex-col gap-3">
        <div class="flex gap-2">
          <Badge v-for="(tag, index) in tags" :key="index">{{ tag.name }}</Badge>
        </div>
        <div class="flex flex-col gap-1">
          <div class="text-2xl font-medium leading-9 tracking-negative-2 text-left">{{title}}</div>
          <div class="font-urbanist font-normal text-xl leading-8 text-resla-ebony-40 text-left">{{ formattedDate }}</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Badge from "@/components/base/Badge";
  export default {
    name: "BlogCard",
    components:{
      Badge
    },
    props: {
      title: {
        type: String,
        default: ''
      },
      imageUrl: {
        type: String,
        default: ''
      },
      tags: {
        type: Array,
        default: () => []
      },
      date: {
        type: [String, Date],
        default: ''
      }
    },
    computed: {
      formattedDate() {
        const date = new Date(this.date);
        const options = {
          weekday: 'short',
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        };
        return date.toLocaleDateString('en-US', options);
      }
    }
  }
  </script>
  
  <style scoped>
  
  </style>