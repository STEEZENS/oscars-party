<template>
  <canvas
    class="Confetti"
    :style="styles">
  </canvas>
</template>


<script>
import { RequestFrame, HexToRGB } from '../utils';

export default {
  name: 'Confetti',
  data() {
    return {
      canvas: null,
      ctx: null,
      w: null,
      h: null,
      fettis: [],
    };
  },

  props: {
    particleCount: { type: Number, default: 100 },
    angle: { type: Number, default: 90 },
    spread: { type: Number, default: 50 },
    startVelocity: { type: Number, default: 30 },
    decay: { type: Number, default: 0.9 },
    ticks: { type: Number, default: 200 },
    x: { type: Number, default: 0.2 },
    y: { type: Number, default: 0.2 },
    position: { type: String, default: 'absolute' },
    width: { type: String, default: '500px' },
    height: { type: String, default: '500px' },
    zIndex: { type: String, default: '1' },
    colors: { type: Array, default: () => ['#26ccff', '#a25afd', '#ff5e7e', '#88ff5a', '#fcff42', '#ffa62d', '#ff36ff'] },
  },

  mounted() {
    this.canvas = this.$el;
    this.ctx = this.canvas.getContext('2d');
    this.setWidthHeight();
    window.addEventListener('resize', this.handleWindowResize);

    for (let i = this.particleCount; i > 0; i -= 1) {
      this.fettis.push(
        this.randomPhysics({
          x: this.startX,
          y: this.startY,
          angle: this.angle,
          spread: this.spread,
          startVelocity: this.startVelocity,
          color: this.colors[i % this.colors.length],
          ticks: this.ticks,
          decay: this.decay,
        }),
      );
    }

    // kick off animation here
    this.animate();
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.handleWindowResize);
  },

  computed: {
    styles() {
      return `
        position: ${this.position};
        width: ${this.width};
        height: ${this.height};
        z-index: ${this.zIndex};
      `;
    },
    origin() {
      return { x: this.x, y: this.y };
    },
    startX() {
      return this.w * this.origin.x;
    },
    startY() {
      return this.h * this.origin.y;
    },
  },

  methods: {
    handleWindowResize() {
      this.setWidthHeight();
    },
    setWidthHeight() {
      this.w = this.$el.offsetWidth;
      this.h = this.$el.offsetHeight;
    },
    randomPhysics(settings) {
      const radAngle = settings.angle * (Math.PI / 180);
      const radSpread = settings.spread * (Math.PI / 180);
      return {
        x: settings.x,
        y: settings.y,
        velocity: (settings.startVelocity * 0.5) + (Math.random() * settings.startVelocity),
        color: HexToRGB(settings.color),
        tick: 0,
        totalTicks: settings.ticks,
        decay: settings.decay,
        random: Math.random() + 5,
        angle2D: -radAngle + ((0.5 * radSpread) - (Math.random() * radSpread)),
        tiltAngle: Math.random() * Math.PI,
        tiltSin: 0,
        tiltCos: 0,
        wobble: Math.random() * 10,
        wobbleX: 0,
        wobbleY: 0,
      };
    },
    updateFetti(fettiIndex) {
      const thisFetti = this.fettis[fettiIndex];
      thisFetti.x += Math.cos(thisFetti.angle2D) * thisFetti.velocity;
      thisFetti.y += Math.sin(thisFetti.angle2D) * thisFetti.velocity + 3; // + gravity
      thisFetti.wobble += 0.1;
      thisFetti.velocity *= thisFetti.decay;
      thisFetti.tiltAngle += 0.1;
      thisFetti.tiltSin = Math.sin(thisFetti.tiltAngle);
      thisFetti.tiltCos = Math.cos(thisFetti.tiltAngle);
      thisFetti.random = Math.random() + 5;
      thisFetti.wobbleX = thisFetti.x + (10 * Math.cos(thisFetti.wobble));
      thisFetti.wobbleY = thisFetti.y + (10 * Math.sin(thisFetti.wobble));
      const progress = (thisFetti.tick += 1) / thisFetti.totalTicks;
      const x1 = thisFetti.x + (thisFetti.random * thisFetti.tiltCos);
      const y1 = thisFetti.y + (thisFetti.random * thisFetti.tiltSin);
      const x2 = thisFetti.wobbleX + (thisFetti.random * thisFetti.tiltCos);
      const y2 = thisFetti.wobbleY + (thisFetti.random * thisFetti.tiltSin);
      this.ctx.fillStyle = `rgba(${thisFetti.color.r}, ${thisFetti.color.g}, ${thisFetti.color.b}, ${(1 - progress)})`;
      this.ctx.beginPath();
      this.ctx.moveTo(Math.floor(thisFetti.x), Math.floor(thisFetti.y));
      this.ctx.lineTo(Math.floor(thisFetti.wobbleX), Math.floor(y1));
      this.ctx.lineTo(Math.floor(x2), Math.floor(y2));
      this.ctx.lineTo(Math.floor(x1), Math.floor(thisFetti.wobbleY));
      this.ctx.closePath();
      this.ctx.fill();
      return thisFetti.tick < thisFetti.totalTicks;
    },
    animate() {
      let animatingFettis = this.fettis.slice();
      this.ctx.clearRect(0, 0, this.w, this.h);
      animatingFettis = animatingFettis.filter((fetti, fettiIndex) => this.updateFetti(fettiIndex));
      if (animatingFettis.length) {
        RequestFrame(this.animate);
      } else {
        console.log('no more fettis');
        // exit recursion and clean up
      }
    },
  },
};
</script>


<style scoped lang="scss">
  @import '../styles/_variables';
  .Confetti {
    top: 0; left: 0;
  }
</style>
