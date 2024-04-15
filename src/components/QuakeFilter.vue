<script setup lang="ts">
import { ref } from 'vue';

const minMagnitude = ref(0);
const maxMagnitude = ref(10);

/**
 * TODO: Implement firing of update events.
 * We should look for changes in minMagnitude and maxMagnitude and emit either
 * an update:min-magnitude or update:max-magnitude event when they change.
 *
 * ** Make sure the unit test passes! **
 */
</script>

<template>
  <div>
    <!-- TODO: Implement controls to filter by min/max magnitude -->
  </div>
</template>

<style scoped>
input {
  background-color: transparent;
  color: #fff;
  padding: 0.25rem 1rem;
}
</style>
