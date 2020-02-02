import Vue from 'vue';
import VueRouter from 'vue-router';
import Axios from 'axios';
import Routes from './routes';
import App from './App.vue';

Vue.config.productionTip = false;

// Vue Plugins:
Vue.use(VueRouter);

// Router config
const router = new VueRouter({ routes: Routes });

new Vue({
  router,
  render: h => h(App),

  data() {
    return {
      nomineesCodepenID: 'XOGEdR',
      userPicksGoogleSpreadsheetID: '1FAIpQLSdUaPfMdqVHp62ANkY92mtJHzWSsy7YsUZCLWvhIKeFC_FCbQ',
      // userPicksGoogleSpreadsheetID: '1OHZ0mOGjNdTvZgdq_TdyxolU6GDl-iAgYTe-TOtikN0',
      gsxPrefix: 'gsx$',
      gsxTextPrefix: '$t',
      nominees: [],
      userPicks: [],
      broadcastInfo: {
        startTime: 'Feb 24, 2019 18:00:00',
        duration: 10800000,
      },
    };
  },

  computed: {
    broadcastStatus() {
      const now = new Date().getTime();
      const distance = new Date(this.broadcastInfo.startTime).getTime() - now;
      const live = (distance <= 0 && distance >= -this.broadcastInfo.duration);
      if (distance > 0) return 'countdown';
      if (live) return 'live';
      return 'ended';
    },
    allScored() {
      return !this.nominees.map(nominee => nominee.winner).includes(null);
    },
  },

  async created() {
    const nomineesData = await Axios.get(`https://codepen.io/camstephensdomo/pen/${this.nomineesCodepenID}.js`);
    this.nominees = nomineesData.data;

    const userPicksData = await Axios.get(`https://spreadsheets.google.com/feeds/list/${this.userPicksGoogleSpreadsheetID}/1/public/values?alt=json`);
    if (userPicksData.data.feed.entry) {
      userPicksData.data.feed.entry.forEach(userEntry => this.userPicks.push({
        name: userEntry[this.findObjectKeyBySubstring(userEntry, 'name')][this.gsxTextPrefix],
        picks: this.nominees.map(nominee => userEntry[`${this.gsxPrefix}${this.lowercaseAndSpaceless(nominee.category)}`][this.gsxTextPrefix]),
      }));
    }
  },

  methods: {
    findObjectKeyBySubstring(obj, substring) {
      return Object.keys(obj).filter(k => k.indexOf(substring) !== -1);
    },
    lowercaseAndSpaceless(word) {
      return word.toLowerCase().split(' ').join('');
    },
  },
}).$mount('#app');
