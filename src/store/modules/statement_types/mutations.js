export const SET_STATEMENT_TYPES = (state, statementTypes) => {
  state.statementTypes = statementTypes;
};

export const SET_STATEMENT_TYPES_SELECTED = (state, statementType) => {
  const index = state.statementTypesSelected.indexOf(statementType);
  if (index < 0) {
    state.statementTypesSelected.push(statementType);
  } else {
    state.statementTypesSelected.splice(index, 1);
  }
};
