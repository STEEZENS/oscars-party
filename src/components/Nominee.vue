<template>
  <div :class="['Nominee', { 'winner': nominee.winner } ]">
    <p
      class="_name"
      v-text="nominee.name">
    </p>
    <div class="Chips">
      <span
        class="_userChip"
        v-for="(user, userIndex) in nominee.picks"
        :key="'userNomineePick' + index + userIndex"
        v-text="user">
      </span>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Nominee',
  props: {
    index: { type: Number, default: 0 },
    nominee: { type: Object, default: null },
    scored: { type: Boolean, default: false },
  },
};
</script>


<style scoped lang="scss">
  @import '../styles/_variables';

  .Nominee {
    overflow: hidden;
    padding: $spaceOneHalf $space2;
  }
  .Nominee.winner { color: green !important; }

  .Nominee:not(:last-child) {
    border-bottom: 1px solid rgba($black, .1);
  }

  ._name {
    font-size: 14px;
    font-weight: 700;
    color: $black;
    padding-bottom: $spaceHalf;
  }
  ._userChip {
    $height: 24px;
    font-size: 12px;
    font-weight: 700;
    padding: 0 $space;
    color: $gold;
    line-height: $height;
    border-radius: $height / 2;
    border: 1px solid rgba($gold, .4);
  }
  ._userChip:not(:last-child) {
    margin-right: $spaceHalf;
  }
  @include bp-iPhonePlus {
    ._name { float: left; }
    .Chips { float: right; }
  }
</style>
