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

    <template v-if="statement">
      <statement-card class="mb-14" :data="statement" details></statement-card>

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
    </template>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';
  import StatementCard from '@/components/StatementCard/StatementCard.vue';

  export default {
    name: 'Default',
    components: {
      StatementCard,
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

  .statement {
    &__action {
      margin-top: 14px;
      display: flex;
      justify-content: flex-end;
    }
  }
</style>
