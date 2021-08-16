<template>
  <div class="navbar">
    <div class="navbar__wrapper">
      <button class="navbar__menu-button">
        <i class="fa fa-bars"></i>
      </button>
      <h1 class="navbar__title">{{ title }}</h1>
      <button class="navbar__search-button">
        <i class="fa fa-search"></i>
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NavBar',
    props: {
      title: {
        type: String,
        default: '',
      },
    },
  };
</script>
<style lang="scss">
  .navbar {
    background-color: $indigo;
    color: $white;

    &__wrapper {
      padding: 11px 18px;
      display: flex;
      justify-content: space-between;

      @media screen and (min-width: 720px) {
        max-width: 720px;
        margin: 0 auto;
      }
    }

    &__title {
      font-size: $text-lg;
      width: 100%;
      margin-left: 18px;
    }

    &__search-button,
    &__menu-button {
      background: none;
      border: none;
      outline: none;
      color: $white;
      cursor: pointer;
      flex: auto;
      font-size: $text-lg;
    }
  }
</style>
