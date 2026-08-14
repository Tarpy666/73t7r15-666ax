import { describe, expect, test } from "vitest";
import { MODULES, SPEC } from "../src/index";
import { GridField } from "../src/archetype";

describe("73T7R15-666AX", () => {
  test("spec modules resolve", () => {
    expect(MODULES.length).toBe(1);
    expect(SPEC.length).toBeGreaterThan(10);
  });
  test("core behavior is deterministic", () => {
    const grid = new GridField();
grid.land([[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]], 19, 0);
expect(grid.cleared()).toBe(1);
const g2 = new GridField();
g2.land([[1]], 19, 0);
expect(g2.full()).toBe(false);
  });
});
