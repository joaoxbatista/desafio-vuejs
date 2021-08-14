<template>
  <div :class="`card ${borderClass} ${disabledClass}`">
    <div class="card__header">
      <template v-if="title">
        <div class="card__title">{{ title }}</div>
      </template>
      <template v-else>
        <slot name="card__header"></slot>
      </template>
    </div>
    <div class="card__body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: {
      type: String,
      default: null,
    },
    borderColor: {
      type: String,
      default: null,
      validator: function (value) {
        return ['blue', 'orange', 'green', 'orange'].indexOf(value) != -1;
      },
    },
    disabled: {
      type: Boolean,
    },
  },
  data() {
    return {};
  },

  computed: {
    borderClass() {
      return this.borderColor ? `card--border-${this.borderColor}` : '';
    },

    disabledClass() {
      return this.disabled ? 'card--disabled' : '';
    },
  },
};
</script>
<style lang="scss">
.card {
  background-color: $white;
  box-shadow: $shadow-sm;
  border-radius: $rounded-sm;
  padding: 12px 6px;

  &__title {
    font-size: $text-md;
    font-weight: bold;
    line-height: $text-md;
  }

  &__header {
    margin-bottom: 7px;
  }

  &__body {
    font-size: $text-sm;
    color: $matterhorn;
  }

  &--border-blue {
    border-left: 7px solid $turquoise-blue;
  }

  &--border-green {
    border-left: 7px solid $lima;
  }

  &--border-purple {
    border-left: 7px solid $indigo;
  }

  &--border-orange {
    border-left: 7px solid $orange-peel;
  }

  &--disabled {
    background-color: $whisper;
  }
}

.card--disabled.card--border-blue {
  border-left: 7px solid $turquoise-blue-disabled;
}
.card--disabled.card--border-green {
  border-left: 7px solid $lima-disabled;
}
.card--disabled.card--border-orange {
  border-left: 7px solid $orange-peel-disabled;
}
.card--disabled.card--border-purple {
  border-left: 7px solid $indigo-disabled;
}
</style>
