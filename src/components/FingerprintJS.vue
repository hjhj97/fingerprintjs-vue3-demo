<template>
  <div>
    <h1>FingerprintJS</h1>
    <ObjectFormatter v-if="data" :data="data" />
  </div>
</template>

<script setup lang="ts">
import { getFingerprint } from "../utils/fingerprint";
import ObjectFormatter from "@/components/ui/ObjectFormatter.vue";
import { onMounted, ref } from "vue";

const data = ref<{ visitorId: string } | null>(null);
onMounted(async () => {
  const fingerprint = await getFingerprint();
  data.value = { visitorId: fingerprint };
});
</script>

<style scoped></style>
