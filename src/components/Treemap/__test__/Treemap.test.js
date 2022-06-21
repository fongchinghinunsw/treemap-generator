import { render } from "@testing-library/react";
import Treemap from "../Treemap";
import sampleJsonInput from "../../../sample.json";

describe("Treemap", () => {
  it("should render Treemap", () => {
    console.log(JSON.stringify(sampleJsonInput));
    render(
      <Treemap
        jsonInput={JSON.stringify(sampleJsonInput)}
        rowInput="3"
        canvasWidth={500}
        canvasHeight={500}
      />
    );
  });
});
