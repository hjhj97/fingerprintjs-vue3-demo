<template>
  <div>
    <h1>FingerprintPro</h1>
    <div v-if="isLoading">Loading...</div>
    <div v-else-if="error">Error: {{ error }}</div>
    <div class="data" v-else>
      <div v-for="(value, key) in data" :key="key" class="data-item">
        <span class="data-key">{{ key }}:</span>
        <span class="data-value">{{ value }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useVisitorData } from "@fingerprintjs/fingerprintjs-pro-vue-v3";
const { data, error, isLoading } = useVisitorData({ extendedResult: true });
</script>

<style scoped>
.data {
  padding: 20px;
  margin: 10px 0;
  border-radius: 8px;
  background-color: #f5f5f5;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  color: #333;
  line-height: 1.5;
}

.data-item {
  margin: 8px 0;
}

.data-key {
  font-weight: bold;
  margin-right: 8px;
}

.data-value {
  word-break: break-all;
}
</style>
