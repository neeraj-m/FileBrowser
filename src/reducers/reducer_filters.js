const filters = {
    title: ''
};

export default (state = filters, action) => {
    switch (action.type) {
        case 'FILTER_TEXT':
            return {
                ...state,
                text: action.text
            };
        default:
            return state;
    }
}
