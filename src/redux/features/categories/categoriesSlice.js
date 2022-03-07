const initialState = [];

export default function categoriesReducer(state = initialState, action) {
    switch (action.type) {
        case 'categories/categoriesAdded': {
            return [...state, ...action.payload];
        }
        default:
            return state;
    }
}

export async function fetchCategories(dispatch, getState) {
    fetch('https://cryptic-retreat-93579.herokuapp.com/api/getAll/category')
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: 'categories/categoriesAdded',
                payload: data.getAllCategory
            })
        })
}