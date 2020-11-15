import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Card } from "../../src/design-system/Card";

describe("The card shortcuts", () => {
  describe("when it is in display mode", () => {
    describe('when the user presses the "e" key', () => {
      it("toggles into edit mode", () => {
        const { getByText } = render(
          <Card title={"Card Title"} note={"A simple note"} id={"32"} />
        );

        expect(getByText("A simple note").isContentEditable).toBeFalsy();

        fireEvent.keyUp(getByText("A simple note"), {
          key: "e",
          code: "KeyE",
        });

        const inputArea = getByText("A simple note");
        expect(inputArea.nodeName).toEqual("inputarea");
      });
    });
  });
});
