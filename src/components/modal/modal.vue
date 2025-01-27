<script setup lang="ts">
import { inject } from 'vue';
import { useI18n } from 'vue-i18n';

import { RootButton } from '../rootButton';
import { Lang } from '@/types/types';

interface Props {
  isOpen: boolean;
}

defineProps<Props>();

const injectedValues = inject<{ handleToggleModal: () => void }>('modal');

const { locale, t } = useI18n();

const handleToggleLanguage = () => {
  locale.value = locale.value === Lang.EN ? Lang.UK : Lang.EN;
};
</script>

<template>
  <div
    v-if="isOpen"
    class="absolute top-[50%] left-[50%] flex flex-col gap-10 items-center translate-x-[-50%] translate-y-[-50%] min-w-[200px] lg:w-[60vw] bg-white rounded-lg p-[30px] modal">
    <h3>Modal window</h3>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil minus nisi
      cumque, eveniet aut rerum sequi. Officiis aperiam porro ab.
    </p>

    <RootButton
      variant="secondary"
      @click="handleToggleLanguage">
      {{ t('modal.button.language') }}
    </RootButton>

    <RootButton
      variant="primary"
      @click="injectedValues?.handleToggleModal">
      {{ t('modal.button.close') }}
    </RootButton>
  </div>
</template>

<style lang="scss" scoped>
.modal {
  box-shadow: 0px 4px 15px 0px #0000000d;
}
</style>
