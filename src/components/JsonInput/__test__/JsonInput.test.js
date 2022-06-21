import { render, screen, fireEvent } from "@testing-library/react";
import JsonInput from "../JsonInput";
import sampleJsonInput from "../../../sample.json";

const mockOnChange = jest.fn();

describe("JsonInput", () => {
  it("should render JsonInput", () => {
    render(
      <JsonInput
        placeholder={JSON.stringify(sampleJsonInput)}
        onChange={mockOnChange}
      />
    );
    const inputElement = screen.getByPlaceholderText(
      JSON.stringify(sampleJsonInput)
    );
    expect(inputElement).toBeInTheDocument();
  });

  it("should be able to type into input", () => {
    render(
      <JsonInput
        placeholder={JSON.stringify(sampleJsonInput)}
        onChange={mockOnChange}
      />
    );
    const inputElement = screen.getByPlaceholderText(
      JSON.stringify(sampleJsonInput)
    );
    fireEvent.click(inputElement);
    fireEvent.change(inputElement, {
      target: { value: "bitcoin" },
    });
    expect(inputElement.value).toBe("bitcoin");
  });
});
