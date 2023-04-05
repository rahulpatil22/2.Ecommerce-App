// reducer.js
const INITIAL_STATE = {
  data: {},
  tab: "Home",
};
export default (state = INITIAL_STATE, action :any) => {
  //state is inital state , action has a type and payload
  switch (action.type) {
    default:
      return state;
  }
};
