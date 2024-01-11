import { createStore } from "redux";

function Counter() {

    function counter(state = 0, action) {
        switch (action.type) {
          case 'INCREMENT':
            return state + 1
          case 'DECREMENT':
            return state - 1
          default:
            return state
        }
      }
      
    return;

}

export default Counter;