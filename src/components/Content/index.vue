<template>
  <body>
    <Settings
        v-on:filter-changed="filterChanged"
    />
    <div class="buildings">
      <Card
          v-for="building of buildings"
          v-bind:building="building"
      />
    </div>
  </body>
</template>

<script>
import Card from '../Card/index.vue';
import Settings from '../Settings/index.vue';

function roomFilterIsValid(el, filter) {
  return el.rooms == filter || filter == -1;
}

function floorFilterIsValid(el, sValue, eValue) {
  return el.floor >= sValue && el.floor <= eValue
}

function squareFilterIsValid(el, sValue, eValue) {
  return el.square >= sValue && el.square <= eValue
}

function priceFilterIsValid(el, sValue, eValue) {
  return el.price >= (sValue * 1000000) && el.price <= (eValue * 1000000)
}

function getBuildings(roomFilter, floor, square, price) {
  const data = [
    {
      building_id: 73,
      building_name: '1 этап 1а корпуса',
      floor: 10,
      id: 23329,
      is_studio: 1,
      number: '163',
      plan: '/img/bb8d/9eeb90d9c7aeeed41fb41c0b5e383013.jpg',
      porch: 3,
      price: 2956317,
      rooms: 1,
      size: 'XS',
      square: 23.66,
    },
    {
      building_id: 74,
      building_name: '1 этап 1а корпуса',
      floor: 4,
      id: 20822,
      is_studio: 1,
      number: '163',
      plan: '/img/bb8d/9eeb90d9c7aeeed41fb41c0b5e383013.jpg',
      porch: 3,
      price: 2992701,
      rooms: 1,
      size: 'XS',
      square: 23.87,
    },
    {
      building_id: 75,
      building_name: '1 этап 1а корпуса',
      floor: 4,
      id: 20382,
      is_studio: 1,
      number: '163',
      plan: '/img/bb8d/9eeb90d9c7aeeed41fb41c0b5e383013.jpg',
      porch: 3,
      price: 4952721,
      rooms: 2,
      size: '2k',
      square: 42.87,
    },
    {
      building_id: 75,
      building_name: '1 этап 1а корпуса',
      floor: 4,
      id: 20332,
      is_studio: 1,
      number: '163',
      plan: '/img/bb8d/9eeb90d9c7aeeed41fb41c0b5e383013.jpg',
      porch: 3,
      price: 8862732,
      rooms: 3,
      size: '3k',
      square: 42.87,
    },
    {
      building_id: 32,
      building_name: '1 этап 1а корпуса',
      floor: 10,
      id: 20328,
      is_studio: 1,
      number: '163',
      plan: '/img/bb8d/9eeb90d9c7aeeed41fb41c0b5e383013.jpg',
      porch: 3,
      price: 3956317,
      rooms: 1,
      size: '1k',
      square: 24.99,
    },
    {
      building_id: 37,
      building_name: '1 этап 1а корпуса',
      floor: 10,
      id: 20320,
      is_studio: 1,
      number: '163',
      plan: '/img/bb8d/9eeb90d9c7aeeed41fb41c0b5e383013.jpg',
      porch: 3,
      price: 3956317,
      rooms: 1,
      size: 'XS',
      square: 24.99,
    },
    {
      building_id: 17,
      building_name: '1 этап 1а корпуса',
      floor: 10,
      id: 33320,
      is_studio: 1,
      number: '163',
      plan: '/img/bb8d/9eeb90d9c7aeeed41fb41c0b5e383013.jpg',
      porch: 3,
      price: 5956317,
      rooms: 1,
      size: '2k',
      square: 45.36,
    },
    {
      building_id: 87,
      building_name: '1 этап 1а корпуса',
      floor: 10,
      id: 33320,
      is_studio: 1,
      number: '163',
      plan: '/img/bb8d/9eeb90d9c7aeeed41fb41c0b5e383013.jpg',
      porch: 3,
      price: 9956317,
      rooms: 4,
      size: '4',
      square: 66.60,
    },
  ]
  console.log(roomFilter)

  if (roomFilter) {
    let filteredBuildings = [];
    data.forEach((el) => {
      console.log(el);
      console.log(el.rooms == roomFilter || roomFilter == -1);
      console.log(floorFilterIsValid(el, floor[0], floor[1]));
      console.log(squareFilterIsValid(el, square[0], square[1]));
      console.log(priceFilterIsValid(el, price[0], price[1]))
      if (roomFilterIsValid(el, roomFilter) && floorFilterIsValid(el, floor[0], floor[1]) && squareFilterIsValid(el, square[0], square[1]) && priceFilterIsValid(el, price[0], price[1])) {
        filteredBuildings.push(el);
      }
    })

    return filteredBuildings;
  }
  else {
    return data;
  }
}

export default {
  name: "Content",
  data() {
    return {
      buildings: getBuildings()
    }
  },
  components: {
    Card,
    Settings
  },
  methods: {
    filterChanged() {
      this.buildings = getBuildings(this.$store.getters.ROOM, this.$store.getters.FLOOR, this.$store.getters.SQUARE, this.$store.getters.PRICE);
    }
  },

}
</script>

<style src="./styles.css" scoped></style>

