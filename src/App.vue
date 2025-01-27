<script setup lang="ts">
import { onMounted, ref } from 'vue';

import { API } from './api/api';
import type { Student } from './types/types';

import { Card } from '@/components/card';
import { Loader } from './components/loader';

const isLoading = ref<boolean>(true);
const student = ref<Student[]>([]);

onMounted(async () => {
  isLoading.value = true;
  student.value = await API.getStudents();
  isLoading.value = false;
});
</script>

<template>
  <div class="flex items-center justify-center min-h-screen">
    <Loader v-if="isLoading" />
    <Card
      v-else
      :student="student" />
  </div>
</template>
