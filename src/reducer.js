let state = { count: 0 };

//doing this to our state argument helps us establish a default state when its undefined
function changeState(state = { count: 0 }, action) {
  switch (action.type) {
    case "counter/increment":
      return { count: state.count + 1 };
    //this will return if we havent defined an action in our reducer
    default:
      return state;
  }
}

function dispatch(action) {
  state = changeState(state, action);
  render();
}

function render() {
  const app = document.querySelector("#app");
  app.textContent = state.count;
}
