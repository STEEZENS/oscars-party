<template>
  <div id="app">

    <header class="Header">
      <div>
        <img class="Logo" src="./assets/the-oscars-party-logo-gold.png" alt="The Oscars Party Logo"/>
      </div>
      <nav class="Nav">
        <button
          class="Nav_item"
          :class="{ 'active': activeTab === 'leaderboard' }"
          @click="setActiveTab('leaderboard')">
          Leaderboard
        </button>
        <button
          class="Nav_item"
          :class="{ 'active': activeTab === 'scorecards' }"
          @click="setActiveTab('scorecards')">
          Scorecards
        </button>
      </nav>
    </header>

    <section class="Leaderboard ContentContainer" v-show="activeTab === 'leaderboard'">
      <h2 class="SectionTitle">Leaderboard</h2>
      <Leaderboard :leaderboard="leaderboard"/>
    </section>

    <section class="Scorecards ContentContainer" v-show="activeTab === 'scorecards'">
      <h2 class="SectionTitle">Scorecards</h2>
      <div class="Cards">
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
      </div>
    </section>

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
      activeTab: 'leaderboard',
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
        points: category.points,
        scored: category.winner !== null,
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
    setActiveTab(value) {
      if (this.activeTab === value) return;
      this.activeTab = value;
    },
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
<style lang="scss">
  @import './styles/_variables';

  #app {
    padding: $space3 $space2;
  }
  @include bp-iPad {
    #app {
      padding: $space4 $space2;
    }
  }

  .Header {
    padding: $space 0;
    text-align: center;
  }
  .Logo {
    width: 110px;
  }
  @include bp-iPad {
    .Logo {
      width: 150px;
    }
  }

  .Nav {
    $height: 32px;
    display: inline-block;
    text-align: center;
    margin-top: $space4;
    background-color: $gold;
    border-radius: $height / 2;
    white-space: nowrap;
    .Nav_item {
      font-family: inherit;
      background-color: transparent;
      text-transform: uppercase;
      line-height: $height;
      font-size: 14px;
      font-weight: 700;
      padding: 0 $space2;
      color: rgba($white, .4);
      transition: all .3s ease 0s;
      &.active { color: rgba($white, 1); }
    }
  }

  .SectionTitle {
    position: relative;
    z-index: -1;
    font-size: 70px;
    font-weight: 700;
    letter-spacing: -2px;
    margin-bottom: -28px;
    margin-left: -$space3;
    color: rgba($gold, .15);
  }
  @include bp-iPad {
    .SectionTitle {
      font-size: 120px;
      margin-bottom: -47px;
      margin-left: -$space4;
    }
  }

  .ContentContainer {
    margin: 0 auto;
  }
  @include bp-iPad {
    .ContentContainer {
      width: 95%;
      max-width: 1200px;
    }
  }

  .Cards {
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
  }
</style>
