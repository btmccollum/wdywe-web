export default function userReducer(state = { 
    currentUser: {

    }, 
    loading: false 
    }, 
    action) {
        switch(action.type) {
            case 'TEST':
                return state;
            default: 
                return state;
        }
}