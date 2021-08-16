<template>
  <div class="statement-types-filter">
    <h3 class="statement-types-filter__title">Categorias</h3>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide
        class="statement-types-filter__slide"
        v-for="statementType in statementTypes"
        :key="`statment-type-${statementType.type}`"
      >
        <div
          class="statement-types-filter__item"
          :class="isActive(statementType.type)"
          @click="selectStatementType(statementType.type)"
        >
          {{ statementType.name }}
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex';
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
  import 'swiper/swiper-bundle.css';

  export default {
    name: 'StatementTypeFilter',
    components: {
      Swiper,
      SwiperSlide,
    },
    data() {
      return {
        swiperOptions: {
          slidesPerView: 'auto',
          spaceBetween: 15,
        },
      };
    },
    computed: {
      ...mapState('statement_types', [
        'statementTypes',
        'statementTypesSelected',
      ]),
      swiper() {
        return this.$refs.mySwiper.$swiper;
      },
    },
    methods: {
      ...mapMutations('statement_types', ['SET_STATEMENT_TYPES_SELECTED']),

      selectStatementType(statementType) {
        this.SET_STATEMENT_TYPES_SELECTED(statementType);
      },

      isActive(statementType) {
        return this.statementTypesSelected.indexOf(statementType) > -1
          ? 'statement-types-filter__item--active'
          : '';
      },
    },
  };
</script>

<style lang="scss">
  .statement-types-filter {
    &__title {
      color: $nobel;
      font-size: $text-md;
      margin-bottom: 6px;
      font-weight: normal;
    }
    &__slide {
      display: block;
      width: auto;
    }

    &__item {
      display: block;
      width: 100%;
      border-radius: $rounded-sm;
      padding: 10px 20px;
      border: 1px solid $silver;
      background: $white;
      font-size: 11px;
      cursor: pointer;

      &--active {
        background-color: $indigo;
        color: white;
        border-color: $indigo;
      }
    }
  }
</style>
