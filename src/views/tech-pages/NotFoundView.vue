<template>
  <tech-page-layout
    message="It looks like we couldn't find the page you were looking for.."
    :imageUrl="image"
  />
</template>

<script setup>
import TechPageLayout from "@/layouts/TechPageLayout.vue";

// assets
import image from "@/assets/images/not-found/not-found-background.png";
</script>
