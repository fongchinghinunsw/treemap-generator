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
      // heaviestObject = object;
    }
    totalWeight += object.weight;
  });
  return { totalWeight, highestWeight };
}

export type { TreemapObject };
export { sortTreemapObjectsByWeight, getWeightStatus };
