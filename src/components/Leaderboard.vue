<template>
  <div class="Leaderboard">
    <div
      v-for="(user, userIndex) in leaderboard"
      :key="'leaderboardUser' + userIndex"
      :class="'rank-' + getPlacement(user.score)">
      <h2 v-text="user.name"></h2>
      <h4 v-text="user.score"></h4>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Leaderboard',
  props: {
    leaderboard: { type: Array, default: null },
  },
  methods: {
    getPlacement(userScore) {
      const uniqueScores = [];
      this.leaderboard.forEach((user) => {
        if (uniqueScores.indexOf(user.score) === -1) uniqueScores.push(user.score);
      });
      return uniqueScores.indexOf(userScore);
    },
  },
};
</script>


<style scoped lang="scss"></style>
