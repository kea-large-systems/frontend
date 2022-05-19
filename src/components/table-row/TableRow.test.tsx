import { render, screen } from "@testing-library/react";
import { TableRow } from "./TableRow";
import { Table, Tbody } from "@chakra-ui/react";
import userEvent from "@testing-library/user-event";

describe("checks that the table row is being loaded correctly", () => {
  test("check that the row displays the data correctly", () => {
    const data = ["Wow", "much", "data", 223];

    render(
      <Table>
        <Tbody>
          <TableRow data={data} />
        </Tbody>
      </Table>
    );

    for (const item of data) {
      screen.getByText(item);
    }
  });

  test("checks if the row triggers a function when clicked", async () => {
    const click = jest.fn();
    const data = ["Wow"];

    render(
      <Table>
        <Tbody>
          <TableRow data={data} onClick={click} />
        </Tbody>
      </Table>
    );
    await userEvent.click(screen.getByText("Wow"));

    expect(click).toBeCalled();
  });
});
