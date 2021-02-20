import uuid from 'uuid';
import React, { useReducer } from 'react';
import contactContext from './contactContext';
import reducer from './Reducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Kabir',
        email: 'kabu@gmail.com',
        phone: '1234567890',
        type: 'professional',
      },
      {
        id: 2,
        name: 'Rishabh',
        email: 'rishu@gmail.com',
        phone: '1234467890',
        type: 'professional',
      },
      {
        id: 3,
        name: 'Navroz',
        email: 'Navroz@gmail.com',
        phone: '1234557890',
        type: 'professional',
      },
    ],
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <contactContext.Provider
      value={{
        contacts: state.contacts,
      }}
    >
      {props.children}
    </contactContext.Provider>
  );
};
