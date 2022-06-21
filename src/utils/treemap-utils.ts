import InputError from "../errors/JsonInputError";

const MAX_ARRAY_LENGTH = 50;

type TreemapObject = {
  name: string;
  weight: number;
  value: number;
};

function sortTreemapObjectsByWeight(objects: TreemapObject[]) {
  objects.sort((a: TreemapObject, b: TreemapObject) => {
    var weightA = a.weight;
    var weightB = b.weight;
    if (weightA < weightB) return 1;
    if (weightA > weightB) return -1;
    return 0;
  });
}

function getWeightStatus(objects: TreemapObject[]) {
  var totalWeight = 0;
  var highestWeight = 0;
  objects.forEach((object: TreemapObject) => {
    if (highestWeight < object.weight) {
      highestWeight = object.weight;
    }
    totalWeight += object.weight;
  });
  return { totalWeight, highestWeight };
}

function filterNotInArray(
  objects: TreemapObject[],
  filterObject: TreemapObject
) {
  return objects.filter((obj: TreemapObject) => obj !== filterObject);
}

function verifyInput(jsonInput: string, rowInput: string) {
  var objects: TreemapObject[] = JSON.parse(jsonInput);
  var numberOfRow = parseInt(rowInput);
  console.log(rowInput);
  if (isNaN(numberOfRow) || !rowInput.match(/^[0-9]+$/)) {
    throw new InputError("The number of row must be an integer");
  }

  if (numberOfRow > objects.length) {
    throw new InputError("Row number must be <= Length of the array");
  }

  if (objects.length > MAX_ARRAY_LENGTH) {
    throw new InputError("Length of the array should be <= 50");
  }

  objects.forEach((object) => {
    if (typeof object.name != "string") {
      throw new InputError(
        "The name attribute of each object must be of type string"
      );
    } else if (!Number.isInteger(object.weight)) {
      throw new InputError(
        "The weight attribute of each object must be of type integer"
      );
    } else if (typeof object.value != "number") {
      throw new InputError(
        "The value attribute of each object must be of type number"
      );
    }
  });
  return { treemapObjects: objects, numberOfRow };
}

export type { TreemapObject };
export {
  sortTreemapObjectsByWeight,
  getWeightStatus,
  filterNotInArray,
  verifyInput,
};
