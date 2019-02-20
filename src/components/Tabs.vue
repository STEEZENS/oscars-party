<template>
  <nav
    class="Tabs"
    :style="(distribute ? 'text-align: center;' : 'text-align: left !important;')">
    <button
      type="button"
      v-for="(tab, index) in tabs"
      :key="'tab' + index"
      v-text="tab.label"
      :class="['Tab', { 'active': (index === activeTabIndex) }]"
      :style="(distribute ? `width: ${distributedWidth};` : null)"
      @click="handleTabClick(index)">
    </button>
    <div
      class="ActiveIndicator"
      :style="activeIndicatorStyle">
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Tabs',
  data() {
    return {
      element: undefined,
      activeTabIndex: (this.goToTabIndex() !== -1) ? this.goToTabIndex() : 0,
    };
  },
  props: {
    tabs: { type: Array, default: null },
    activeTab: { type: String, default: '' },
    distribute: { type: Boolean, default: false },
  },
  computed: {
    distributedWidth() {
      return this.distribute ? `${100 / this.tabs.length}%` : null;
    },
    activeIndicatorStyle() {
      const left = () => {
        if (this.distribute) return `${this.activeTabIndex * 100}%`;
        if (this.element) return `${this.element.children[this.activeTabIndex].offsetLeft}px`;
        return '0';
      };
      const width = () => {
        if (this.distribute) return this.distributedWidth;
        if (this.element) return `${this.element.children[this.activeTabIndex].offsetWidth}px`;
        return '0';
      };
      return `width: ${width()}; transform: translateX(${left()});`;
    },
  },
  watch: {
    'activeTab'() {
      if (this.goToTabIndex() !== -1) { this.handleTabClick(this.goToTabIndex()); }
    },
  },
  methods: {
    handleTabClick(tabIndex) {
      if (this.activeTabIndex === tabIndex) return;
      this.$emit('tabChange', {
        index: tabIndex,
        value: this.tabs[tabIndex].value,
      });
      this.activeTabIndex = tabIndex;
    },
    goToTabIndex() {
      const tabIndex = this.tabs.findIndex(tab => tab.value === this.activeTab);
      return tabIndex;
    },
  },
  mounted() {
    this.element = this.$el;
  },
};
</script>

<style scoped lang="scss">
  @import '../styles/_variables';

  .Tabs {
    $breakHeight: 2px;
    position: relative;
    border-bottom: $breakHeight solid rgba($black, .2);
    width: 100%;
    white-space: nowrap;
    padding: 0 !important;

    .Tab {
      background: transparent;
      color: rgba($black, .2);
      text-transform: uppercase;
      font-size: 14px;
      font-weight: 700;
      text-align: center;
      padding: $space ($space * 1.5);
      transition: all .2s ease 0s;
      &.active {
        color: rgba($black, 1);
      }
    }

    .ActiveIndicator {
      position: absolute;
      left: 0; bottom: -$breakHeight;
      border-radius: ($breakHeight / 2);
      height: $breakHeight;
      background-color: $gold;
      transition: all .2s ease 0s;
      transform: translateX(0);
    }
  }

</style>
