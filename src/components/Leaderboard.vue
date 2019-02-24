<template>
  <div :class="[
      'Leaderboard',
      { '_all-scored': $root.allScored },
    ]">
    <header class="_header">
      <h4 class="_message" v-if="$root.broadcastStatus === 'countdown'">Waiting to begin...</h4>
      <h4 class="_message" v-if="$root.broadcastStatus === 'live'">Scoring in progress...</h4>
      <h4 class="_message" v-if="$root.allScored">And the Oscar goes to...</h4>
    </header>
    <div
      v-for="(user, userIndex) in leaderboard"
      :key="'leaderboardUser' + userIndex"
      :class="[
        '_user',
        ('rank-' + getPlacement(user.score)),
      ]">
      <h2>
        <span class="_name" v-text="user.name"></span>
        <span class="_score" v-text="user.score"></span>
      </h2>
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


<style scoped lang="scss">
  @import '../styles/_variables';
  .Leaderboard {
    background-color: $white;
    border-radius: $radius;
    overflow: hidden;
    box-shadow: 0 8px 30px -4px rgba($black, .2);
  }

  .Leaderboard ._header {
    padding-left: $space3;
    line-height: 60px;
    @include goldGradient;
    ._message {
      font-size: 24px;
    }
  }

  .Leaderboard ._user {
    position: relative;
    overflow: hidden;
    white-space: nowrap;
    line-height: 60px;
    padding: 0 $space3;
    ._name {
      color: $black;
    }
    ._score {
      float: right;
      color: $gold;
    }
    &:not(:last-child) {
      border-bottom: 1px solid rgba($black, .1);
    }
  }

  .Leaderboard._all-scored ._user.rank-0 ._name:before {
    $size: 30px;
    content: "";
    display: inline-block;
    width: $size; height: $size;
    background-image: url('../assets/oscar-icon-gold.png');
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    vertical-align: sub;
    margin-right: $space;
  }
</style>
