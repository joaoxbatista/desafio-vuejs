<template>
  <div>
    <statement-type-filter class="mb-14"></statement-type-filter>
    <statement-card
      class="mb-14"
      v-for="statement in filteredStatement"
      :key="`statement-${statement.id}`"
      :data="statement"
    ></statement-card>
  </div>
</template>

<script>
  import StatementTypeFilter from '@/components/StatementTypeFilter/StatementTypeFilter.vue';
  import StatementCard from '@/components/StatementCard/StatementCard.vue';
  import { mapState, mapActions } from 'vuex';

  export default {
    name: 'Default',
    components: {
      StatementTypeFilter,
      StatementCard,
    },
    data() {
      return {};
    },
    computed: {
      ...mapState('statements', ['statements']),
      ...mapState('statement_types', ['statementTypesSelected']),
      filteredStatement() {
        if (!this.statementTypesSelected.length) {
          return this.statements;
        }
        return this.statements.filter((statement) => {
          return this.statementTypesSelected.indexOf(statement.type) > -1;
        });
      },
    },
    methods: {
      ...mapActions('statements', ['getStatements']),
    },
    async mounted() {
      await this.getStatements();
    },
  };
</script>
