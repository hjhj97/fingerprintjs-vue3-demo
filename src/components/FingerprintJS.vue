<template>
  <div>
    <h1>FingerprintJS</h1>
    <NestedObjectFormatter v-if="data" :data="data" />
  </div>
</template>

<script setup lang="ts">
import { getFingerprint } from "../utils/fingerprint";
import NestedObjectFormatter from "@/components/ui/NestedObjectFormatter.vue";
import { onMounted, ref } from "vue";

const data = ref<{ visitorId: string } | null>(null);
onMounted(async () => {
  const fingerprint = await getFingerprint();
  data.value = fingerprint;
});
</script>

<style scoped></style>
