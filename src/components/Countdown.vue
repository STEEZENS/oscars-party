<template>
  <div class="Countdown">

    <!-- Countdown -->
    <div class="Clock" v-if="countdownState.timeLeft">
      <template v-for="(time, key, index) in countdownState.timeLeft">
        <div class="_time" :key="'time' + index">
          {{ time.value }}
          <span class="_metric" v-text="time.label"></span>
        </div>
        <span
          class="_delimiter"
          v-if="key !== 'seconds'"
          :key="'delimiter' + index">:
        </span>
      </template>
    </div>

    <!-- Live -->
    <div class="Countdown_Event" v-if="countdownState.live">
      <div class="_message"><span class="_pulse"></span>LIVE</div>
    </div>

    <!-- Season Over -->
    <div class="Countdown_Event" v-if="countdownState.ended">
      <div class="_message">Ended</div>
    </div>

  </div>
</template>


<script>
import { PersistDoubleDigit } from '../utils';

export default {
  name: 'Countdown',
  data() {
    return {
      countdownInterval: setInterval(() => this.setCountdownState(), 1000),
      countdownState: {
        timeLeft: null,
        live: false,
        ended: false,
      },
    };
  },
  props: {
    countdownData: { type: Object, default: null },
  },
  methods: {
    setCountdownState() {
      this.countdownState = this.getCountdownState(this.countdownData);
    },
    getCountdownState(countdownData) {
      const now = new Date().getTime();
      const distance = new Date(countdownData.startTime).getTime() - now;
      const live = (distance <= 0 && distance >= -countdownData.duration);

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        return {
          timeLeft: {
            days: { value: PersistDoubleDigit(days), label: 'days' },
            hours: { value: PersistDoubleDigit(hours), label: 'hours' },
            minutes: { value: PersistDoubleDigit(minutes), label: 'min' },
            seconds: { value: PersistDoubleDigit(seconds), label: 'sec' },
          },
          live,
          ended: false,
        };
      }

      if (live) {
        return {
          timeLeft: null,
          live,
          ended: false,
        };
      }

      return {
        timeLeft: null,
        live,
        ended: true,
      };
    },
  },
  beforeMount() {
    return this.setCountdownState();
  },
  destroyed() {
    return clearInterval(this.countdownInterval);
  },
};
</script>


<style scoped lang="scss">
  @import '../styles/_variables';

  .Countdown {
    ._context {
      font-size: 14px;
      opacity: .4;
    }
  }

  .Clock {
    text-align: center;
    padding: $space 0;
    color: $black;
    ._time {
      display: inline-block;
      vertical-align: top;
      font-size: 40px;
      font-weight: 700;
      line-height: 1.2;
      width: 48px;
      ._metric {
        display: block;
        font-size: 14px;
        font-weight: 400;
        color: rgba($gold, .75);
      }
    }
    ._delimiter {
      font-size: 32px;
      line-height: 1.4;
      opacity: .3;
      padding-left: 4px;
      margin-right: -2px;
    }
  }

  .Countdown_Event {
    text-align: center;
    padding-top: $space2;
    ._message {
      font-size: 40px;
      font-weight: 700;
      line-height: 1.2;
      padding-bottom: $space4;
    }
    ._pulse, ._pulse:before {
      display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: $red;
    }
    ._pulse {
      position: relative;
      vertical-align: middle;
      bottom: $spaceHalf;
      margin-right: $space;
      &:before {
        content: "";
        position: absolute;
        top: 0; left: 0;
        animation: ripple 3s ease 0s infinite;
      }
    }
  }

  @keyframes ripple {
    from { transform: scale(.5); opacity: 1; }
    to { transform: scale(2.5); opacity: 0; }
  }

</style>
