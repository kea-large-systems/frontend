import { render } from "../../test-util";
import { LectureCodeAcceptedModal } from "./LectureCodeAcceptedModal";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("checks lecture code accepted modal", () => {
  test("checks if all the text appears as expected", () => {
    render(<LectureCodeAcceptedModal isOpen={true} onClose={() => {}} />);
    screen.getByText("Thank you for attending the class");
    screen.getByRole("button", { name: /Close/i });
  });
  test("checks if the modal can be invisible", () => {
    render(<LectureCodeAcceptedModal isOpen={false} onClose={() => {}} />);
    expect(
      screen.queryByText("Thank you for attending the class")
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: /Close/i })
    ).not.toBeInTheDocument();
  });
  test("checks if the model button is responsive", () => {
    const mockButton = jest.fn();
    render(<LectureCodeAcceptedModal isOpen={true} onClose={mockButton} />);
    userEvent.click(screen.getByRole("button", { name: /Close/i }));
    expect(mockButton).toBeCalled();
  });
});
