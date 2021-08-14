<template>
  <div class="container">
    <card-comunication></card-comunication>
  </div>
</template>

<script>
import CardComunication from './components/CardComunication/CardComunication.vue';
export default {
  name: 'App',
  components: {
    CardComunication,
  },
};
</script>

<style lang="scss">
* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
}
body {
  background: $whisper-dark;
}

.container {
  padding: 15px;
}
</style>

