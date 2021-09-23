<template>
  <div class="inputFilter">
    <span class="title">{{ title }}</span>
    <div class="inputBox">
      <input v-model="value[0]" v-on:change="onStartInputChange"/>
      <span class="inputDelimeter">-</span>
      <input v-model="value[1]" v-on:change="onEndInputChange"/>
    </div>
    <Slider
        v-bind:min="min"
        v-bind:max="max"
        v-bind:tooltips="false"
        v-model="value"
        v-on:update="onSliderChange"
        v-on:change="onSliderChange"/>
  </div>
</template>

<script>
import Slider from '@vueform/slider'

export default {
  name: "InputFilter",
  props: {
    value: {
      type: Array
    },
    setKey: {
      type: String
    },
    title: {
      type: String
    },
    min: {
      type: Number
    },
    max: {
      type: Number
    }
  },
  methods: {
    onStartInputChange(e) {
      this.$store.commit(this.setKey, [e.target.value, this.value[1]])
    },
    onEndInputChange(e) {
      this.$store.commit(this.setKey, [this.value[0], e.target.value])
    },
    onSliderChange(e) {
      this.floor = e;
      this.$store.commit(this.setKey, e)
    }
  },
  components: {
    Slider
  }
}
</script>

<style src="../../../node_modules/@vueform/slider/themes/default.css"></style>

<style src="./styles.css" scoped></style>
