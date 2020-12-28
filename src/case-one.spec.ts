import { custom_namespace } from "custom/module";
import { getText } from "./helpers/test-helpers";

describe("Import is highlighted in red because spec files are excluded in tsconfig.json", () => {
  it("returns expected text", () => {
    // Arrange
    const test: custom_namespace.Test = { text: "It Works Here Too!" };

    // Act
    const result = getText(test);

    // Assert
    expect(result).toBe(test.text);
  });
});
