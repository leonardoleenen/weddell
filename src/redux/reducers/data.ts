import { ActionTypes } from "../actions/index";

interface DataState {
  items: string[];
  loading: boolean;
  error: any;
}

const getInitialState = () => {
  return {
    items: [],
    loading: false,
    error: null
  };
};

const dataReducer = (
  state: DataState = getInitialState(),
  action: ActionTypes
) => {
  switch (action.type) {
      // handle different actions
  }

  return state;
};

export default dataReducer;