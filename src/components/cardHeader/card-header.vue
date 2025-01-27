<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import googleLogo from '@/assets/logo/google.svg';

const { t } = useI18n();
</script>

<template>
  <article class="flex items-center gap-x-5">
    <img
      :src="googleLogo"
      alt="Google Logo"
      class="h-10 w-10" />

    <h3 class="text-lg leading-[26px] lg:text-[20px] lg:leading-[30px]">
      {{ t('reviews.google') }}
    </h3>
  </article>
</template>
