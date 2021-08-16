<template>
  <div>
    <nav-bar :title="$route.meta.title" />
    <div class="container"><router-view /></div>
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar.vue';
  export default {
    name: 'Default',
    components: {
      NavBar,
    },
  };
</script>
