import React from "react";
import { request } from "../config/request";
import { loadState } from "../config/storage";

export const Category = () => {
  const [state, setState] = React.useState([]);

  React.useEffect(() => {
    request.get("/messages").then((res) => {
      setState(res.data);
    });
  }, []);

  return (
    <div>
      <h1 className="text-3xl">Product</h1>
      {state.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};
