import { beforeEach, describe, expect, it } from "vitest";
import { getUsername, saveUser } from "../../js/utils/storage.js";

describe("getUsername", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("returns the name from the user object in storage", () => {
    saveUser({ name: "Mia" });

    expect(getUsername()).toBe("Mia");
  });

  it("returns null when no user exists in storage", () => {
    expect(getUsername()).toBeNull();
  });
});
