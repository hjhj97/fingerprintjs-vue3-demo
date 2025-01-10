<template>
  <section class="container">
    <FingerprintPro />
    <FingerprintJS />
  </section>
</template>

<script setup lang="ts">
import FingerprintPro from "@/components/FingerprintPro.vue";
import FingerprintJS from "@/components/FingerprintJS.vue";
</script>
<style scoped>
.container {
  display: flex;
  gap: 20px;
}
</style>
