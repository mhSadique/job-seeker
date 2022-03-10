const initialState = {};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case 'userFound': {
            return { ...state, ...action.payload };
        }
        default:
            return state;
    }
}