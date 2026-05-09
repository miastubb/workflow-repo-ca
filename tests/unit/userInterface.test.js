import { describe, it, expect } from "vitest";
import { isActivePath } from "../../js/utils/userInterface.js";

describe("isActivePath", () => {
  it("returns true when paths match exactly", () => {
    expect(isActivePath("/login", "/login")).toBe(true);
  });

  it('returns true for "/" when current path is "/"', () => {
    expect(isActivePath("/", "/")).toBe(true);
  });

  it('returns true for "/" when current path is "/index.html"', () => {
    expect(isActivePath("/", "/index.html")).toBe(true);
  });

  it("returns true when current path includes href", () => {
    expect(isActivePath("/venue", "/venue/details")).toBe(true);
  });

  it("returns false when paths do not match", () => {
    expect(isActivePath("/login", "/register")).toBe(false);
  });
});
