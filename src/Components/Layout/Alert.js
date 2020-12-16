import React, { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";

function Alert() {
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;
  return (
    alert !== null && (
      <div>
        <label className={`btn btn-block btn-${alert.color}`}>
          {alert.msg}
        </label>
      </div>
    )
  );
}

export default Alert;
