<template>
  <div class="AwardCategory">
    <h2 v-text="name"></h2>
    <slot></slot>
  </div>
</template>


<script>
export default {
  name: 'AwardCategory',
  props: {
    name: { type: String, default: 'Award Category' },
  },
};
</script>


<style scoped lang="scss">
  @import '../styles/_variables';

  .AwardCategory {
    margin-bottom: $space5;
  }
</style>
