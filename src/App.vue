<template>
  <div id="app">

    <h1>Leaderboard</h1>
    <Leaderboard :leaderboard="leaderboard"/>

    <h1>Scorecards</h1>
    <AwardCategory
      v-for="(nomination, nominationIndex) in nominations"
      :key="'nomination' + nominationIndex"
      :name="nomination.category">
      <Nominee
        v-for="(nominee, nomineeIndex) in nomination.nominees"
        :key="'nominee' + nominationIndex + nomineeIndex"
        :index="nomineeIndex"
        :nominee="nominee"/>
    </AwardCategory>

  </div>
</template>


<script>
import Axios from 'axios';
import Leaderboard from './components/Leaderboard.vue';
import AwardCategory from './components/AwardCategory.vue';
import Nominee from './components/Nominee.vue';

export default {
  name: 'App',
  components: {
    Leaderboard,
    AwardCategory,
    Nominee,
  },
  data() {
    return {
      nomineesCodepenID: 'XOGEdR',
      userPicksGoogleSpreadsheetID: '1MV59RZNuWUGNoKf1eMq_Ai6_jTP4HHdFDbmVRk6qJb8',
      gsxPrefix: 'gsx$',
      gsxTextPrefix: '$t',
      nominees: [],
      userPicks: [],
    };
  },
  computed: {
    leaderboard() {
      return this.userPicks.map(user => ({
        name: user.name,
        score: this.nominees.reduce((totalPoints, nominee, nomineeIndex) => {
          return totalPoints + (nominee.nominees[nominee.winner] === user.picks[nomineeIndex] ? nominee.points : 0);
        }, 0),
      })).sort((a, b) => b.score - a.score);
    },
    nominations() {
      return this.nominees.map((category, categoryIndex) => ({
        category: category.category,
        nominees: category.nominees.map((nominee, nomineeIndex) => ({
          name: nominee,
          winner: (nomineeIndex === category.winner),
          picks: this.userPicks.filter((user) => {
            return (this.lowercaseAndSpaceless(user.picks[categoryIndex]) === this.lowercaseAndSpaceless(nominee));
          }).map(u => u.name),
        })),
      }));
    },
  },
  async created() {
    const nomineesData = await Axios.get(`https://codepen.io/camstephensdomo/pen/${this.nomineesCodepenID}.js`);
    this.nominees = nomineesData.data;

    const userPicksData = await Axios.get(`https://spreadsheets.google.com/feeds/list/${this.userPicksGoogleSpreadsheetID}/1/public/values?alt=json`);
    userPicksData.data.feed.entry.forEach(userEntry => this.userPicks.push({
      name: userEntry[this.findObjectKeyBySubstring(userEntry, 'name')][this.gsxTextPrefix],
      picks: this.nominees.map(nominee => userEntry[`${this.gsxPrefix}${this.lowercaseAndSpaceless(nominee.category)}`][this.gsxTextPrefix]),
    }));
  },
  methods: {
    findObjectKeyBySubstring(obj, substring) {
      return Object.keys(obj).filter(k => k.indexOf(substring) !== -1);
    },
    lowercaseAndSpaceless(word) {
      return word.toLowerCase().split(' ').join('');
    },
  },
};
</script>


<style src="./styles/index.scss" lang="scss"></style>
<style lang="scss"></style>
