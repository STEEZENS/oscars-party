<template>
  <div id="app">

    <header class="Header">
      <div>
        <img class="Logo" src="./assets/the-oscars-party-logo-gold.png" alt="The Oscars Party Logo"/>
      </div>

      <nav class="Nav">
        <button
          class="Nav_item"
          :class="{ 'active': $route.name === 'leaderboard' }"
          @click="$router.push('/leaderboard')">
          Leaderboard
        </button>
        <button
          class="Nav_item"
          :class="{ 'active': $route.name === 'scorecards' }"
          @click="$router.push('/scorecards')">
          Scorecards
        </button>
      </nav>
    </header>

    <transition name="fade" appear mode="out-in">
      <router-view/>
    </transition>

  </div>
</template>


<script>
export default {
  name: 'App',
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
    box-shadow: 0 6px 24px -4px rgba($black, .25);
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
</style>
