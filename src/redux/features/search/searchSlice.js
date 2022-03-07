const initialState = [];

export default function searchReducer(state = initialState, action) {
    switch (action.type) {
        case 'search/searchResultAdded': {
            return [...state, ...action.payload];
        }
        default:
            return state;
    }
}

export async function fetchJobs(dispatch, getState, searchText) {
    fetch(`https://cryptic-retreat-93579.herokuapp.com/api/jobs?keyword=${'developer'}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            dispatch({
                type: 'search/searchResultAdded',
                payload: data.allJobs
            })
        })
}