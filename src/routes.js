export default [
  {
    path: '/leaderboard',
    name: 'leaderboard',
    component: () => import(/* webpackChunkName: "leaderboard" */ './containers/LeaderboardContainer.vue'),
    alias: '/',
  },
  {
    path: '/scorecards',
    name: 'scorecards',
    component: () => import(/* webpackChunkName: "scorecards" */ './containers/ScorecardsContainer.vue'),
  },
];
