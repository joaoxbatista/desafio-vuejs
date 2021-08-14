<template>
  <Card borderColor="orange" class="mb-14">
    <slot name="card__header">
      <div class="card-comm__header">
        <h3 class="card__title">Metas de março</h3>
        <h4 class="card-comm__id">1515</h4>
      </div>
    </slot>

    <div class="card-comm__file">
      <i></i>
      <div></div>
      img
    </div>

    <div class="card-comm__footer">
      <p clas="card-comm__desc">Informativo SUN asdasdasd asdasdasd asdasd</p>
      <span class="card-comm__datetime">11/02/2018 - 16h30</span>
    </div>
  </Card>
</template>

<script>
import Card from '@/components/Card/Card.vue';
export default {
  name: 'CardComunication',
  components: {
    Card,
  },
};
</script>

<style lang="scss">
.card-comm {
  &__header {
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    .card__title {
      width: 100%;
    }
  }

  &__id {
    flex: auto;
    font-size: $text-md + 1px;
    text-align: right;
    font-weight: bold;
    line-height: $text-md + 1px;
  }

  &__footer {
    display: flex;
  }

  &__desc {
    width: 100%;
    margin-right: 8px;
  }

  &__datetime {
    flex: auto;
    color: $grey;
    text-align: right;
    min-width: 100px;
  }
}
</style>