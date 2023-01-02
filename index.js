/* eslint-disable quotes */
const addOvertime = (salary, overtimeHourValue) => salary + overtimeHourValue;

const calcDiscounts = (salary, discounts) => salary - discounts;

const verifyIf = (value) => {
  const assertions = {
    isExactlyEqualsTo(expected) {
      if (value !== expected) {
        // eslint-disable-next-line no-throw-literal
        throw {};
      }
    },
  };
  return assertions;
};

const test = (title, testFunction) => {
  try {
    testFunction();
    console.log(`${title} passed!`);
  } catch {
    console.error(`${title} failed!`);
  }
};

test("sumOvertime", () => {
  const expected = 2500;
  const returned = addOvertime(2000, 500);

  verifyIf(expected).isExactlyEqualsTo(returned);
});

test("calcDiscount", () => {
  const expected = 2300;
  const returned = calcDiscounts(2500, 200);

  verifyIf(expected).isExactlyEqualsTo(returned);
});

export { addOvertime, calcDiscounts as calcSalary };
