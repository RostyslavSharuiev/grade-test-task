<script setup lang="ts">
import { useI18n } from 'vue-i18n';

interface Props {
  mark: number;
  review: number;
}
defineProps<Props>();

const { t } = useI18n();
</script>

<template>
  <article class="flex flex-wrap items-center gap-x-5 gap-y-[6px]">
    <div class="flex items-center gap-x-5">
      <span class="text-2xl leading-8 lg:text-4xl lg:leading-11">
        {{ mark }}
      </span>

      <div class="stars stars--4">
        <div class="stars__star" />
        <div class="stars__star" />
        <div class="stars__star" />
        <div class="stars__star" />
        <div class="stars__star" />
      </div>
    </div>

    <span
      class="font-normal text-[14px] text-foreground-secondary leading-[22px]">
      {{ review }} {{ t('reviews.student') }}
    </span>
  </article>
</template>

<style lang="scss" scoped>
.stars {
  display: flex;

  &__star {
    height: 30px;
    width: 30px;
    background: url(../../assets/icons/star-half.svg) center no-repeat;
  }

  @for $i from 1 through 5 {
    &--#{$i} :nth-child(-n + #{$i}) {
      background-image: url(../../assets/icons/star-active.svg);
    }
  }
}
</style>
