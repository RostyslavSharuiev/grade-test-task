<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import { CardButton } from '../cardButton';
import { Lang } from '@/types/types';

const { locale, t } = useI18n();

const handleClick = () => {
  locale.value = locale.value === Lang.EN ? Lang.UK : Lang.EN;
};
</script>

<template>
  <article class="flex flex-col w-full gap-[10px] md:flex-row md:w-auto">
    <CardButton variant="primary">
      <a href="https://google.com">
        {{ t('buttons.showAll') }}
      </a></CardButton
    >

    <CardButton
      variant="secondary"
      @click="handleClick">
      {{ t('buttons.write') }}
    </CardButton>
  </article>
</template>
