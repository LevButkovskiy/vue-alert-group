<template>
  <div class="roomFilter">
    <span class="title">Комнаты</span>
    <div>
      <button
          v-bind:class="{active: isActive(0)}"
          v-on:click="onChange(0)"
      >S</button>
      <button
          v-bind:class="{active: isActive(1)}"
          v-on:click="onChange(1)"
      >1к</button>
      <button
          v-bind:class="{active: isActive(2)}"
          v-on:click="onChange(2)"
      >2к</button>
      <button
          v-bind:class="{active: isActive(3)}"
          v-on:click="onChange(3)"
      >3к</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "RoomsFilter",
  props: ['room'],
  methods: {
    isActive(room) {
      return this.$store.getters.ROOM == room
    },
    onChange(room) {
      if (room !=  this.$store.getters.ROOM) {
        this.$store.commit('SET_ROOM', room)
      }
      else {
        this.$store.commit('SET_ROOM', -1)
      }
    }
  }
}
</script>

<style src="./styles.css" scoped></style>
