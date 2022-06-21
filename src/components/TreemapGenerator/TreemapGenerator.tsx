import { useState } from "react";

import sampleJsonInput from "../../sample.json";
import JsonInput from "../JsonInput/JsonInput";
import RowInput from "../RowInput/RowInput";
import Treemap from "../Treemap/Treemap";
import useWindowDimensions from "../../hooks/useWindowDimensions";

import styles from "./TreemapGenerator.module.scss";

const getCanvasWidth = (width: number) => {
  if (width < 250) {
    return 175;
  } else if (width < 500) {
    return 250;
  } else if (width < 750) {
    return 350;
  } else if (width < 1200) {
    return 450;
  } else {
    return 550;
  }
};

const TreemapGenerator = () => {
  const [jsonInput, setJsonInput] = useState("");
  const [rowInput, setRowInput] = useState("");
  const { width } = useWindowDimensions();

  var canvasWidth = getCanvasWidth(width);
  var canvasHeight = 600;

  const onJsonInputChangeHandler = (newJsonInput: string) => {
    setJsonInput(newJsonInput);
  };

  const onRowInputChangeHandler = (newRowInput: string) => {
    setRowInput(newRowInput);
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputs}>
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
      </div>
      <div className={styles.treemap}>
        <Treemap
          jsonInput={jsonInput}
          rowInput={rowInput}
          canvasWidth={canvasWidth}
          canvasHeight={canvasHeight}
        />
      </div>
    </div>
  );
};

export default TreemapGenerator;
