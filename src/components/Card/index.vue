<template>
  <div class="card" v-on:mouseenter="onHover" v-on:mouseleave="onHover">
    <header>
      <div class="floor">{{ building.floor }} этаж</div>
      <div class="block">
        <div class="rooms">{{ building.rooms }} {{ prepareDeclination(building.rooms) }}</div>
        <span class="delimeter"> - </span>
        <div class="square">{{ building.square }}м<sup>2</sup></div>
      </div>
    </header>
    <body v-bind:class="{active: hovered}">
      <div class="number">№{{ building.number }}</div>
      <img :src="building.plan" alt="Room Image"/>
    </body>
    <footer>
      <div class="price">{{ addSpacesToNumber(building.price) }}р.</div>
      <div class="priceForM">{{ addSpacesToNumber((building.price / building.square).toFixed(0)) }}р. за м<sup>2</sup></div>
    </footer>
    <button>Подробнее</button>
  </div>
</template>

<script>
export default {
  name: "Card",
  data() {
    return {
      hovered: false
    }
  },
  props: {
    building: {
      type: Object,
      required: true
    }
  },
  methods: {
    addSpacesToNumber(str) {
      str = str.toString();
      return str.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1' + ' ');
    },
    prepareDeclination(num) {
      switch (num) {
        case 1: return 'комната';
        case 2: case 3: case 4: return 'комнаты';
        case 5: case 6: case 7: case 8: case 9: return 'комнат';
      }
    },
    onHover() {
      this.hovered = !this.hovered;
    }
  }
}
</script>

<style src="./styles.css" scoped></style>
