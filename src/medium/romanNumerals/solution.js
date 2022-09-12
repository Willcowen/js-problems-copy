const romanNumerals = (romanNum) => {
  const numerals = {
    I: 1,
    X: 10,
    C: 100,
    M: 1000,
    V: 5,
    L: 50,
    D: 500,
  };
  let total = 0;
  let values = [];
  const arr = romanNum.split("");
  arr.forEach((element) => {
    values.push(numerals[element]);
  });
  for (let i = 0; i < values.length; i++) {
    const currentValue = values[i];
    const nextValue = values[i + 1];
    if (currentValue < nextValue) {
      total -= currentValue;
    } else if (currentValue >= nextValue || nextValue === undefined) {
      total += currentValue;
    }
  }
  return total;
};
romanNumerals("MCMXCIV");
