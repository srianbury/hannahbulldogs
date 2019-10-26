import formatError from "./index";

describe("format form errors from express validator", () => {
  it("should format 2 error", () => {
    const expressValidatorErrors = [
      { value: "", msg: "Invalid value", param: "email", location: "body" },
      { value: "", msg: "Invalid value", param: "password", location: "body" }
    ];

    const formattedErrors = formatError(expressValidatorErrors);
    const expected = 'email: Invalid value. password: Invalid value.';
    expect(formattedErrors).toEqual(expected);
  });
});
