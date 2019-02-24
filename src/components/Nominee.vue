<template>
  <div :class="['Nominee', { 'winner': nominee.winner }, {'scored': scored } ]">
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

  .Canvas {
    position: absolute;
    top: 0; left: 0;
    width: 100%;
    height: 100%;
  }

  .Nominee {
    position: relative;
    overflow: hidden;
    padding: $spaceOneHalf $space2;
  }
  // .Nominee.scored { padding-left: $space4; }
  .Nominee.winner ._name:before {
    $size: 24px;
    content: "";
    display: inline-block;
    width: $size; height: $size;
    background-image: url('../assets/oscar-icon-gold.png');
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    vertical-align: text-bottom;
    margin-right: $space;
  }

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
