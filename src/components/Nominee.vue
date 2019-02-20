<template>
  <div :class="['Nominee', { 'winner': nominee.winner } ]">
    <h5 v-text="nominee.name"></h5>
    <p
      v-for="(user, userIndex) in nominee.picks"
      :key="'userNomineePick' + index + userIndex"
      v-text="user"
      style="opacity: .5;">
    </p>
  </div>
</template>


<script>
export default {
  name: 'Nominee',
  props: {
    index: { type: Number, default: 0 },
    nominee: { type: Object, default: null },
  },
};
</script>


<style scoped lang="scss">
  .Nominee.winner { color: green !important; }
</style>
