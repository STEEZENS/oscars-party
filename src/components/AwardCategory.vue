<template>
  <div class="AwardCategory">
    <header class="_header">
      <h4 v-text="name" class="uppercase"></h4>
      <h4 class="muted">
        <span v-text="points"></span>
        <span> points</span>
      </h4>
    </header>
    <slot></slot>
  </div>
</template>


<script>
export default {
  name: 'AwardCategory',
  props: {
    name: { type: String, default: 'Award Category' },
    points: { type: Number, default: 20 },
  },
};
</script>


<style scoped lang="scss">
  @import '../styles/_variables';

  .AwardCategory {
    flex: 1 0 90%;
    background-color: $white;
    border-radius: $radius;
    box-shadow: 0 8px 30px -4px rgba($black, .2);
    margin: 0 $space $space3 $space;
    overflow: hidden;
  }
  ._header {
    padding: $spaceOneHalf $space2;
    // background-color: $gold;
    @include goldGradient;
  }
  @include bp-iPad {
    .AwardCategory {
      flex: 1 0 40%;
    }
  }
  @include bp-desktop {
    .AwardCategory {
      flex: 1 0 32%;
    }
  }
</style>
