import canvasTxt from "canvas-txt";
import { TreemapObject } from "./treemap-utils";

const cleanCanvas = (canvas: HTMLCanvasElement) => {
  var ctx = canvas.getContext("2d");
  ctx?.clearRect(0, 0, canvas.width, canvas.height);
};

const drawBorder = (
  canvas: HTMLCanvasElement,
  xPos: number,
  yPos: number,
  width: number,
  height: number,
  thickness = 1
) => {
  var ctx = canvas.getContext("2d");
  ctx!.fillStyle = "#000";
  ctx!.fillRect(
    xPos - thickness,
    yPos - thickness,
    width + thickness * 2,
    height + thickness * 2
  );
};

const drawRectangle = (
  object: TreemapObject,
  canvas: HTMLCanvasElement,
  xPos: number,
  yPos: number,
  width: number,
  height: number,
  thickness = 1
) => {
  var ctx = canvas.getContext("2d");
  if (object.value >= 0) {
    ctx!.fillStyle = "green";
  } else {
    ctx!.fillStyle = "red";
  }
  ctx!.fillRect(
    xPos + thickness,
    yPos + thickness,
    width - thickness * 2,
    height - thickness * 2
  );
};

const drawText = (
  object: TreemapObject,
  canvas: HTMLCanvasElement,
  xPos: number,
  yPos: number,
  width: number,
  heightPerRow: number
) => {
  var ctx = canvas.getContext("2d");
  ctx!.fillStyle = "black";
  const txt = object.name + "\n" + object.value * 100 + "%";
  canvasTxt.drawText(ctx!, txt, xPos, yPos, width, heightPerRow);
};

const drawTreemapObject = (
  canvas: HTMLCanvasElement,
  jsonObjects: TreemapObject[],
  widthPerWeightUnit: number,
  heightPerRow: number,
  currentRow: number,
  currentColumnPosition: number
) => {
  for (var i = 0; i < jsonObjects.length; i++) {
    var object = jsonObjects[i];
    // the required amount of px to draw the entire rectangle
    var requiredWidth = widthPerWeightUnit * object.weight;

    // check if there's still space left in the current row
    if (requiredWidth + currentColumnPosition <= canvas.width + 1) {
      // draw rectangle
      var startX = currentColumnPosition;
      var startY = heightPerRow * (currentRow - 1);
      var width = requiredWidth;
      var height = heightPerRow;
      console.log(
        `currentRow: ${currentRow}, startX: ${startX}, startY: ${startY}, width: ${width}, height: ${height}`
      );

      drawBorder(canvas, startX, startY, width, height);

      drawRectangle(object, canvas, startX, startY, width, height);

      drawText(object, canvas, startX, startY, width, heightPerRow);

      return object;
    }
  }
  // there's no space left to draw the rectangle in the current row
  return null;
};

export { cleanCanvas, drawBorder, drawRectangle, drawText, drawTreemapObject };
