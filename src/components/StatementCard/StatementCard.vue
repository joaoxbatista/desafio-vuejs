<template>
  <Card class="statement-card" :borderColor="borderColor" :disabled="data.seen">
    <template v-slot:card-header>
      <router-link :to="{ name: 'statements.show', params: { id: data.id } }">
        <div class="statement-card__header">
          <h3 class="card__title">{{ data.title }}</h3>
          <h4 class="statement-card__id">{{ data.id }}</h4>
        </div>
      </router-link>
    </template>

    <statement-file-list
      :files="data.files"
      v-if="!details"
    ></statement-file-list>

    <div class="statement-card__footer">
      <p clas="statement-card__type">
        {{ statementType }}
      </p>
      <span class="statement-card__datetime">{{ data.date | formatDate }}</span>
    </div>

    <template v-if="data.description && details">
      <h4 class="statement-card__label">Conteúdo:</h4>
      <div class="statement-card__text">
        {{ data.description }}
      </div>
    </template>

    <template v-if="showFullDescription && details">
      <h4 class="statement-card__label"></h4>
      <div class="statement-card__text">
        {{ data.fullDescription }}
      </div>
    </template>

    <statement-file-list
      :files="data.files"
      v-if="details"
      class="mt-14"
    ></statement-file-list>
  </Card>
</template>

<script>
  const statementTypesColor = ['orange', 'blue', 'green', 'purple'];

  import Card from '@/components/Card/Card.vue';
  import { mapState, mapActions } from 'vuex';
  import StatementFileList from '@/components/StatementFileList/StatementFileList.vue';

  export default {
    name: 'StatementCard',
    components: {
      Card,
      StatementFileList,
    },
    props: {
      data: {
        type: Object,
        default: () => {
          return {};
        },
      },
      details: {
        type: Boolean,
      },
    },

    computed: {
      ...mapState('statement_types', ['statementTypes']),
      borderColor() {
        return statementTypesColor[this.data.type] ?? null;
      },

      statementTypeEnum() {
        return this.data?.type < 0 ? null : this.data.type;
      },

      statementType() {
        if (this.statement && this.statement?.type < 0) return 'Sem categoria';

        const result = this.statementTypes.filter((statementType) => {
          return statementType.type === this.statementTypeEnum;
        })?.[0];

        return result?.name ?? 'Sem categoria';
      },

      showFullDescription() {
        return this.data.description !== this.data.fullDescription;
      },
    },
    methods: {
      ...mapActions('statement_types', ['getStatementTypes']),
    },
    mounted() {
      this.getStatementTypes();
    },
  };
</script>

<style lang="scss">
  .statement-card {
    a {
      text-decoration: none;
      color: $matterhorn;
    }

    &__header {
      margin-bottom: 15px;
      display: flex;
      align-items: center;
      text-decoration: none !important;
      .card__title {
        width: 100%;
      }
    }

    .statement-file-list {
      margin-bottom: 19px;
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

    &__type {
      width: 100%;
      margin-right: 8px;
    }

    &__datetime {
      flex: auto;
      color: $grey;
      text-align: right;
      min-width: 100px;
    }

    &__label {
      margin-bottom: 5px;
      margin-top: 14px;
    }

    &__text {
      margin-bottom: 12px;
    }
  }
</style>
