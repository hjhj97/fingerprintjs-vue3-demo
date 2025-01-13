<template>
  <div class="data">
    <div v-for="(value, key) in props.data" :key="key" class="data-item">
      <span class="data-key">{{ key }}</span>
      <NestedObjectFormatter v-if="isObject(value)" :data="value" />
      <span v-else class="data-value">{{ value }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  data: Object;
}>();
const isObject = (value: Object) => {
  return typeof value === "object";
};
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
  font-weight: 900;
  font-size: 18px;
  font-family: monospace;
  margin-right: 8px;
}

.data-value {
  word-break: break-all;
  font-family: monospace;
  color: #888;
}
</style>
