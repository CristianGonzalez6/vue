import numeral from "numeral";

const dollarFilter = (value) => {
  return !value ? "$ 0" : numeral(value).format("($ 0.00a)");
};

const percentFilter = (value) => {
  return !value ? "0 %" : `${Number(value).toFixed(2)} %`;
};

export { dollarFilter, percentFilter };
