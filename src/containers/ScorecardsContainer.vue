<template>
  <section class="ScorecardsContainer ContentContainer">
    <h2 class="SectionTitle">Scorecards</h2>
    <transition name="fade" mode="out-in">
      <div v-if="nominations.length" class="Cards">
        <transition-group name="fade" tag="div">
          <AwardCategory
            v-for="(nomination, nominationIndex) in nominations"
            :key="'nomination' + nominationIndex"
            :name="nomination.category"
            :points="nomination.points">
            <Nominee
              v-for="(nominee, nomineeIndex) in nomination.nominees"
              :key="'nominee' + nominationIndex + nomineeIndex"
              :index="nomineeIndex"
              :nominee="nominee"
              :scored="nomination.scored"/>
          </AwardCategory>
        </transition-group>
      </div>
      <div v-else>Loading...</div>
    </transition>
  </section>
</template>


<script>
import AwardCategory from '../components/AwardCategory.vue';
import Nominee from '../components/Nominee.vue';

export default {
  name: 'ScorecardsContainer',
  components: {
    AwardCategory,
    Nominee,
  },
  computed: {
    nominations() {
      return this.$root.nominees.map((category, categoryIndex) => ({
        category: category.category,
        points: category.points,
        scored: category.winner !== null,
        nominees: category.nominees.map((nominee, nomineeIndex) => ({
          name: nominee,
          winner: (nomineeIndex === category.winner),
          picks: this.$root.userPicks.filter((user) => {
            return (this.$root.lowercaseAndSpaceless(user.picks[categoryIndex]) === this.$root.lowercaseAndSpaceless(nominee));
          }).map(u => u.name),
        })),
      }));
    },
  },
};
</script>


<style scoped lang="scss">
  @import '../styles/_variables';
  .Cards > div {
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
  }
</style>
