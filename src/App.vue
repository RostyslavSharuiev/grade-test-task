<script setup lang="ts">
import { onMounted, provide, ref } from 'vue';

import { API } from './api/api';
import type { Student } from './types/types';

import { Card } from '@/components/card';
import { Loader } from './components/loader';
import { Modal } from './components/modal';

const isLoading = ref<boolean>(true);
const student = ref<Student[]>([]);
const isModalOpen = ref<boolean>(true);

const handleToggleModal = () => {
  isModalOpen.value = !isModalOpen.value;
};

provide('modal', { isModalOpen, handleToggleModal });

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

    <Teleport to="body">
      <Modal :is-open="isModalOpen" />
    </Teleport>
  </div>
</template>
