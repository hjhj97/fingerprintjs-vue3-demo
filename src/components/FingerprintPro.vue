<template>
  <div>
    <h1>FingerprintPro</h1>
    <div v-if="isLoading">Loading...</div>
    <div v-else-if="error">Error: {{ error }}</div>
    <NestedObjectFormatter v-else-if="data" :data="data" />
  </div>
</template>

<script setup lang="ts">
import { useVisitorData } from "@fingerprintjs/fingerprintjs-pro-vue-v3";
import NestedObjectFormatter from "@/components/ui/NestedObjectFormatter.vue";

const { data, error, isLoading } = useVisitorData({ extendedResult: true });
</script>
