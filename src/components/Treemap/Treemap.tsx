import { useEffect, useRef } from "react";
import {
  sortTreemapObjectsByWeight,
  getWeightStatus,
} from "../../utils/treemap-utils";
import styles from "./Treemap.module.scss";

type Props = {
  jsonInput: string;
  rowInput: string;
};

const Treemap: React.FC<Props> = ({ jsonInput, rowInput }) => {
  // fixed canvas width for now
  const canvasWidth = 500;
  const canvasHeight = 600;
  var canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    var canvas = canvasRef.current as HTMLCanvasElement;
    try {
      var treemapObjects = JSON.parse(jsonInput);
      const numberOfRow = parseInt(rowInput);

      // sort the array of objects based on the weights
      sortTreemapObjectsByWeight(treemapObjects);

      // get the sum of weights and the highest weight in the array
      const { totalWeight, highestWeight } = getWeightStatus(treemapObjects);

      // the minimum amount of weights each row should contain in average
      var averageWeightPerRow = Math.ceil(totalWeight / numberOfRow);

      // the actual minimum amount of weights each row
      var weightPerRow =
        averageWeightPerRow < highestWeight
          ? highestWeight
          : averageWeightPerRow;

      // the number of px per weight unit
      var widthPerWeightUnit = canvas.width / weightPerRow;

      // each rectangle has the same height
      var heightPerRow = canvasHeight / numberOfRow;

      console.log(heightPerRow, widthPerWeightUnit);
    } catch (err) {
      console.log(err);
    }
  }, [jsonInput, rowInput]);

  return (
    <canvas
      id={styles.treemap}
      width={canvasWidth}
      height={canvasHeight}
      ref={canvasRef}
    />
  );
};

export default Treemap;
