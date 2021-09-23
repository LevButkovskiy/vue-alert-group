<template>
  <div>
    <Header/>
    <Content/>
  </div>
</template>

<script>
import Header from './components/Header/index.vue';
import Content from './components/Content/index.vue';

export default {
  name: 'App',
  components: {
    Header,
    Content
  }
}
</script>

<style>
@import url('http://fonts.cdnfonts.com/css/gotham-pro');

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  margin: 0;
  padding: 0;
  background: #F8F8F8;

}

html {
  background: #F8F8F8;
}

sup {
  line-height: 0;
  font-size: 0.83em;
  vertical-align: super;
}

button:hover {
  cursor: pointer;
}

.slider-base {
  margin-top: 12px;
  height: 2px;
}

.slider-connect {
  background: #70D24E;
}

.slider-handle {
  background: 2px #70D24E;
  border: 3px white solid;
}
</style>


