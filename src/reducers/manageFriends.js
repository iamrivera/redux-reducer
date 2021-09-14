export function manageFriends(state={ friends: []}, action){
    switch(action.type) {
        case "ADD_FRIEND":
            return { friends: [...state.friends.slice(0, action.index), action.friend] }
        case "REMOVE_FRIEND":
            return { friends: state.friends.filter(friend => friend.id !== action.id)}
        default: 
            return state;
    }
}
