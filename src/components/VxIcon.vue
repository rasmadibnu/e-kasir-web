<template>
  <vsxIcon :iconName="iconName" :color="color" :size="size" type="linear" />
</template>

<script setup>
import { vsxIcon } from "vue-iconsax";

defineProps({
  iconName: String,
  color: String,
  size: Number,
});
</script>

<style></style>
