<script setup lang="ts">
import { computed } from 'vue';

import type { Student } from '@/types/types';

import { CardHeader } from '../cardHeader';
import { CardRating } from '../cardRating';
import { CardButtons } from '../cardButtons';

interface Props {
  student: Student[];
}

const { student } = defineProps<Props>();

/* 
  This operation is needed only in this case because I receive only one value in the array
  If the array contains more data, it is better use v-for in the parent component
*/
const mark = computed(() => {
  return student.map((person) => person.mark)[0];
});

const review = computed(() => {
  return student.map((person) => person.reviews)[0];
});
</script>

<template>
  <div class="w-[328px] md:w-[912px] lg:w-[1286px] xl:w-[1458px]">
    <section
      class="flex flex-col items-center justify-between gap-5 p-[30px] md:flex-row md:justify-between rounded-lg card">
      <div
        class="flex flex-wrap gap-y-5 md:gap-y-2.5 lg:gap-x-[50px] xl:gap-x-[60px]">
        <CardHeader />
        <CardRating
          :mark="mark"
          :review="review" />
      </div>

      <CardButtons />
    </section>
  </div>
</template>

<style lang="css" scoped>
.card {
  box-shadow: 0px 4px 15px 0px #0000000d;
}
</style>
