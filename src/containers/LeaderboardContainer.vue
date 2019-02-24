<template>
  <section class="LeaderboardContainer ContentContainer">
    <div
      class="CountdownContainer"
      v-if="$root.broadcastStatus === 'countdown'">
      <h4 class="_begins">Scoring begins in:</h4>
      <Countdown
        :countdownData="$root.broadcastInfo"/>
    </div>
    <h2 class="SectionTitle">Leaderboard</h2>
    <transition name="fade" mode="out-in">
      <Leaderboard v-if="leaderboard.length" :leaderboard="leaderboard"/>
      <div v-else>Loading...</div>
    </transition>
  </section>
</template>


<script>
import Countdown from '../components/Countdown.vue';
import Leaderboard from '../components/Leaderboard.vue';

export default {
  name: 'LeaderboardContainer',
  components: {
    Countdown,
    Leaderboard,
  },
  computed: {
    leaderboard() {
      return this.$root.userPicks.map(user => ({
        name: user.name,
        score: this.$root.nominees.reduce((totalPoints, nominee, nomineeIndex) => {
          return totalPoints + (nominee.nominees[nominee.winner] === user.picks[nomineeIndex] ? nominee.points : 0);
        }, 0),
      })).sort((a, b) => b.score - a.score);
    },
  },
};
</script>


<style scoped lang="scss">
  @import '../styles/_variables';

  .CountdownContainer {
    text-align: center;
    padding-top: $space4;
    ._begins {
      font-size: 12px;
      color: rgba($gold, .75);
      text-transform: uppercase;
    }
  }
</style>
