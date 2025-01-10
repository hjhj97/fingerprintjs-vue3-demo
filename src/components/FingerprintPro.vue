<template>
  <div>
    <h1>FingerprintPro</h1>
    <div v-if="isLoading">Loading...</div>
    <div v-else-if="error">Error: {{ error }}</div>
    <ObjectFormatter v-else :data="data" />
  </div>
</template>

<script setup lang="ts">
import { useVisitorData } from "@fingerprintjs/fingerprintjs-pro-vue-v3";
import ObjectFormatter from "@/components/ui/ObjectFormatter.vue";

const { data, error, isLoading } = useVisitorData({ extendedResult: true });
</script>
