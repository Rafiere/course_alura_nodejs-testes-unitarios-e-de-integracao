/* eslint-disable quotes */
import { addOvertime, calcSalary } from "../index";

/* The "describe" method describes a set of tests. */
describe("Salary methods", () => {
  it("Should return the sum of the overtime", () => {
    const wanted = 2500;
    const returned = addOvertime(2000, 500);

    expect(returned).toBe(wanted);
  });

  it("Should calculate the salary", () => {
    const wanted = 2300;
    const returned = calcSalary(2500, 200);

    expect(returned).toBe(wanted);
  });
});
