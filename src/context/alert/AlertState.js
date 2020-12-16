import React, { useReducer } from "react";
import AlertReducer from "./AlertReducer";
import AlertContext from "./alertContext";
import { SHOW_ALERT, REMOVE_ALERT } from "../types";

const AlertState = (props) => {
  const initialState = null;

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  const showAlert = (msg, color) => {
    dispatch({ type: SHOW_ALERT, payload: { msg, color } });
    setTimeout(() => {
      dispatch({ type: REMOVE_ALERT });
    }, 3000);
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        showAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
