<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import { RootButton } from '../rootButton';
import { inject } from 'vue';

const { t } = useI18n();
const injectedValues = inject<{ handleToggleModal: () => void }>('modal');
</script>

<template>
  <article class="flex flex-col w-full gap-[10px] md:flex-row md:w-auto">
    <RootButton variant="primary">
      <a href="https://google.com">
        {{ t('buttons.showAll') }}
      </a>
    </RootButton>

    <RootButton
      variant="secondary"
      @click="injectedValues?.handleToggleModal">
      {{ t('buttons.write') }}
    </RootButton>
  </article>
</template>
