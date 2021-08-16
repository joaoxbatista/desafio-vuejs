<template>
  <div>
    <nav class="breadcrumb">
      <li class="breadcrumb__item">
        <router-link :to="{ name: 'statements.index' }">
          Comunicados
        </router-link>
      </li>
      <li class="breadcrumb__item">Visualizar comunicado</li>
    </nav>

    <card>
      <template v-slot:card-header>
        <div class="statement__header">
          <h3 class="statement__title">{{ statement.title }}</h3>
          <h4 class="statement__id">{{ statement.id }}</h4>
        </div>
        <div class="statement__date">
          {{ statement.date | formatDate }}
        </div>
      </template>

      <template v-if="statement.description">
        <h4 class="statement__label">Descrição:</h4>
        <div class="statement__text">
          {{ statement.description }}
        </div>
      </template>

      <template v-if="showFullDescription">
        <h4 class="statement__label">Descrição completa:</h4>
        <div class="statement__text">
          {{ statement.fullDescription }}
        </div>
      </template>

      <template v-if="statement.files">
        <h4 class="statement__label">Lista de arquivos:</h4>
        <statement-file-list :files="statement.files"></statement-file-list>
      </template>
    </card>

    <div class="statement__action">
      <button
        @click="toggleSee()"
        class="btn-primary"
        :class="{ 'btn-default': statement.seen }"
      >
        <template v-if="statement.seen">
          <i class="fa fa-eye-slash"></i>
          Marcar como não visto
        </template>
        <template v-else>
          <i class="fa fa-eye"></i>
          Visualizar
        </template>
      </button>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';
  import Card from '@/components/Card/Card.vue';
  import StatementFileList from '@/components/StatementFileList/StatementFileList.vue';

  export default {
    name: 'Default',
    components: {
      Card,
      StatementFileList,
    },
    data() {
      return {
        statement: null,
      };
    },
    computed: {
      ...mapState('statements', ['statements']),
      statementId() {
        return this.$route?.params?.id ?? null;
      },
      showFullDescription() {
        return this.statement.description !== this.statement.fullDescription;
      },
    },
    methods: {
      ...mapActions('statements', ['getStatements', 'updateStatement']),
      toggleSee() {
        this.$set(this.statement, 'seen', !this.statement.seen);
        this.updateStatement(this.statement);
      },
    },
    async mounted() {
      await this.getStatements();
      this.statement = this.statements.filter((statement) => {
        return statement.id == this.statementId;
      })?.[0];
    },
  };
</script>

<style lang="scss">
  .breadcrumb {
    list-style: none;
    display: flex;
    margin-bottom: 14px;
    &__item {
      font-size: $text-md;
      color: $nobel;

      &:first-of-type::before {
        content: '';
        margin: 0px;
      }

      &::before {
        content: '/';
        margin: 0px 5px;
      }

      a {
        text-decoration: none;
        color: $indigo;
      }
    }
  }

  .statement-file-list {
    margin-bottom: 19px;
  }
  .statement {
    &__id {
      flex: auto;
      font-size: $text-md + 1px;
      text-align: right;
      font-weight: bold;
      line-height: $text-md + 1px;
    }

    &__header {
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      text-decoration: none !important;
    }

    &__title {
      width: 100%;
      font-size: $text-md;
    }

    &__action {
      margin-top: 14px;
      display: flex;
      justify-content: flex-end;
    }

    &__date {
      text-align: right;
      font-size: $text-sm;
      color: $grey;
      margin-bottom: 5px;
    }

    &__label {
      margin-bottom: 5px;
    }

    &__text {
      margin-bottom: 12px;
    }
  }
</style>
