import { render, screen, fireEvent } from "@testing-library/react";
import RowInput from "../../RowInput/RowInput";

const mockOnChange = jest.fn();

describe("RowInput", () => {
  it("should render RowInput", () => {
    render(<RowInput placeholder="3" onChange={mockOnChange} />);
    const inputElement = screen.getByPlaceholderText("3");
    expect(inputElement).toBeInTheDocument();
  });

  it("should be able to type into input", () => {
    render(<RowInput placeholder="3" onChange={mockOnChange} />);
    const inputElement = screen.getByPlaceholderText("3");
    fireEvent.click(inputElement);
    fireEvent.change(inputElement, {
      target: { value: "bitcoin" },
    });
    expect(inputElement.value).toBe("bitcoin");
  });
});
