<script setup lang="ts">
import { ref } from 'vue';
import { getQuakes } from '@/api';
import { subDays } from 'date-fns';
import { useQuery } from '@tanstack/vue-query';
import { formatDate } from '@/util/format-date';
import QuakeFilter from '@/components/QuakeFilter.vue';
import type { Earthquake } from '@/types';

const minMagnitude = ref(0);
const maxMagnitude = ref(10);

/**
 * isPending vs isFetching:
 *
 * - isPending: true when the query is running and we have no existing data in
 * the cache.
 *
 * - isFetching: true when the query is running, regardless of whether we have
 * existing data in the cache. This is a quiet, background update and will
 * refresh "data" when it completes.
 */
const { data, isPending, isFetching } = useQuery({
  /**
   * The query key is an array of values that uniquely identifies this query.
   * When data is fetched, it's cached under this key.
   */
  queryKey: ['latestQuakes', minMagnitude, maxMagnitude],
  queryFn: () =>
    getQuakes({
      startTime: subDays(new Date(), 1),
      endTime: new Date(),
    }),
});

function updateMinMagnitude(min: number) {
  minMagnitude.value = min;
}

function updateMaxMagnitude(max: number) {
  maxMagnitude.value = max;
}

function getLng(quake: Earthquake) {
  return quake.geometry.coordinates[0];
}

function getLat(quake: Earthquake) {
  return quake.geometry.coordinates[1];
}
</script>

<template>
  <div class="params">
    <QuakeFilter
      @update:min-magnitude="updateMinMagnitude"
      @update:max-magnitude="updateMaxMagnitude"
    />
  </div>

  <!-- TODO: [Optional] Replace this div with something a little nicer -->
  <div>Fetching fresh data: {{ isFetching }}</div>

  <table v-if="!isPending">
    <thead>
      <th>Time</th>
      <th>Magnitude</th>
      <th>Latitude</th>
      <th>Longitude</th>
      <th>Depth (km)</th>
    </thead>

    <tbody>
      <tr v-for="quake in data" :key="quake.id">
        <td>{{ formatDate(quake.properties.time) }}</td>
        <td>{{ quake.properties.mag }}</td>
        <td>{{ getLat(quake) }}</td>
        <td>{{ getLng(quake) }}</td>
        <td>{{ quake.geometry.coordinates[2] }}</td>
      </tr>
    </tbody>
  </table>
  <div v-else>Loading...</div>
</template>

<style scoped>
.params {
  margin-bottom: 1rem;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

thead {
  background-color: var(--vt-c-indigo);
  color: #fff;
}

th,
td {
  text-align: left;
  padding: 8px;
}

td {
  border-bottom: 1px solid var(--color-border);
}

tbody tr:nth-child(even) {
  background-color: var(--color-background-mute);
}

tbody tr:hover {
  background-color: var(--color-border-hover);
}
</style>
