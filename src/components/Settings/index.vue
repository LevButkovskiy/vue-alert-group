<template>
  <div class="settings">
    <RoomFilter/>
    <div class="delimeter">&nbsp;</div>
    <InputFilter
        v-bind:title="'Этаж'"
        v-bind:value="this.$store.getters.FLOOR"
        v-bind:setKey="kSetFloor"
        v-bind:min="1"
        v-bind:max="99"
    />
    <div class="delimeter">&nbsp;</div>
    <InputFilter
        v-bind:title="'Площадь'"
        v-bind:value="this.$store.getters.SQUARE"
        v-bind:setKey="kSetSquare"
        v-bind:min="1"
        v-bind:max="250"
    />
    <div class="delimeter">&nbsp;</div>
    <InputFilter
        v-bind:title="'Стоимость'"
        v-bind:value="this.$store.getters.PRICE"
        v-bind:setKey="kSetPrice"
        v-bind:min="1"
        v-bind:max="250"
    />
    <div class="delimeter">&nbsp;</div>
    <div class="buttonsBlock">
      <button
          class="apply"
          v-on:click="onApply"
      >Применить</button>
      <button
          class="reset"
          v-on:click="onReset"
      >Сбросить фильтр</button>
    </div>
  </div>
</template>

<script>
import RoomFilter from '../RoomFilter/index.vue';
import InputFilter from '../InputFilter/index.vue';

export default {
  name: "Settings",
  components: {InputFilter, RoomFilter},
  data() {
    return {
      kSetRoom: 'SET_ROOM',
      kSetFloor: 'SET_FLOOR',
      kSetSquare: 'SET_SQUARE',
      kSetPrice: 'SET_PRICE'
    }
  },
  methods: {
    onApply() {
      this.$emit('filter-changed');
    },
    onReset(){
      this.$store.commit(this.kSetRoom, -1);
      this.$store.commit(this.kSetFloor, [1, 99])
      this.$store.commit(this.kSetSquare, [1, 99])
      this.$store.commit(this.kSetPrice, [1, 99])

      this.$emit('filter-changed');
    }
  }
}
</script>

<style src="./styles.css" scoped></style>
