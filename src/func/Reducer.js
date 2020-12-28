import React from 'react';
import {Platform} from 'react-native';

export const reduState = {
  appData: null,
  category: 0,
};

export async function init(state) {
  return {
    ...state,
  };
}

function changeCategory(val, state) {
  return {...state, category: val};
}

export async function reducer(state, action) {
  switch (action.type) {
    case 'changeCategory':
      return changeCategory(action.payload, state);
    case 'init':
      return action.payload;
    default:
      throw new Error();
  }
}
