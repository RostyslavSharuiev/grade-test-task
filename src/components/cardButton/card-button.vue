<script setup lang="ts">
type ButtonVariant = 'primary' | 'secondary' | 'default';

interface Props {
  variant: ButtonVariant;
  onClick?: () => void;
}

const { variant = 'default', onClick } = defineProps<Props>();

// const onClick = defineEmits<{
//   (event: MouseEvent): void;
// }>();

// const buttonVariantClasses: Record<ButtonVariant, string> = {
//   primary:
//     'text-button-foreground-primary bg-button-background-primary hover:bg-button-background-hovered',
//   secondary:
//     'text-button-foreground-secondary hover:bg-button-background-hovered hover:text-button-foreground-primary',
//   default: '',
// };
</script>

<template>
  <button
    :class="`button button--${variant}`"
    @click="onClick">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.button {
  height: 44px;
  border-radius: 8px;
  padding-inline: 20px;

  &--primary {
    color: #fff;
    background: linear-gradient(90.66deg, #3cb9a0 0.57%, #1786ac 99.43%);

    &:hover {
      background: #36a8a0;
    }
  }

  &--secondary {
    color: #394155;
    background: linear-gradient(90deg, #e6f7f5 0%, #f8fcfc 100%) padding-box,
      linear-gradient(90deg, #aacedb 0%, #bee2e0 100%) border-box;

    border: 1px solid transparent;

    &:hover {
      color: #fff;
      background: #36a8a0;
      border: 1px solid #36a8a0;
    }
  }
}
</style>
