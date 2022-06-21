import React, { useState } from "react";

import sampleJsonInput from "../../sample.json";
import JsonInput from "../JsonInput/JsonInput";
import RowInput from "../RowInput/RowInput";

const TreemapGenerator = () => {
  const [jsonInput, setJsonInput] = useState("");
  const [rowInput, setRowInput] = useState("");

  const onJsonInputChangeHandler = (newJsonInput: string) => {
    setJsonInput(newJsonInput);
  };

  const onRowInputChangeHandler = (newRowInput: string) => {
    setRowInput(newRowInput);
  };

  return (
    <>
      <JsonInput
        value={jsonInput}
        placeholder={JSON.stringify(sampleJsonInput)}
        onChange={onJsonInputChangeHandler}
      />
      <br />
      <RowInput
        value={rowInput}
        placeholder={"3"}
        onChange={onRowInputChangeHandler}
      />
      <br />
    </>
  );
};

export default TreemapGenerator;
