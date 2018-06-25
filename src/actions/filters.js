export const filterText = (title = '') => ({
    type: 'FILTER_TEXT',
    title
});

const filtersReducerDefaultState = {
    text: 'statement'
};
