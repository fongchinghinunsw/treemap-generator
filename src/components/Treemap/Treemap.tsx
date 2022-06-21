import { useEffect, useRef } from "react";
import {
  TreemapObject,
  sortTreemapObjectsByWeight,
  getWeightStatus,
  filterNotInArray,
} from "../../utils/treemap-utils";
import { cleanCanvas, drawTreemapObject } from "../../utils/canvas-utils";
import styles from "./Treemap.module.scss";

type Props = {
  jsonInput: string;
  rowInput: string;
  canvasWidth: number;
  canvasHeight: number;
};

const Treemap: React.FC<Props> = ({
  jsonInput,
  rowInput,
  canvasWidth,
  canvasHeight,
}) => {
  var canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    var canvas = canvasRef.current as HTMLCanvasElement;
    cleanCanvas(canvas);
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

      var currentColumnPosition = 0;
      for (var currentRow = 1; currentRow <= numberOfRow; currentRow++) {
        var drawnTreemap: TreemapObject | null = null;
        do {
          drawnTreemap = drawTreemapObject(
            canvas,
            treemapObjects,
            widthPerWeightUnit,
            heightPerRow,
            currentRow,
            currentColumnPosition
          );
          if (drawnTreemap != null) {
            // drawing in the current row, advance the x coordinate
            currentColumnPosition += drawnTreemap.weight * widthPerWeightUnit;
            // remove drawn rectangle from the array
            treemapObjects = filterNotInArray(treemapObjects, drawnTreemap);
          } else {
            // start drawing in the next row, reseting the x coordinate
            currentColumnPosition = 0;
          }
        } while (drawnTreemap != null);
      }
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
