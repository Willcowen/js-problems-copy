function getChange(amount) {
    const coinsArray = [100, 25, 10, 5, 1];
    let outputArray = [];
    let output = [];
  
    while (amount > 0) {
      let highestValuesArray = coinsArray.map(function (el) {
        if (amount >= el) {
          return el;
        }
      });
  
      highestValuesArray = highestValuesArray.filter((el) => el !== undefined);
      outputArray.push(Math.max(...highestValuesArray));
      let highestValue = outputArray[0];
      output.push(highestValue);
      outputArray.pop();
      amount = amount - highestValue;
    }
    console.log("amount:", amount);
    console.log(amount);
    console.log(output);
    let countObject = output.reduce(function (count, currentValue) {
      return (
        count[currentValue] ? ++count[currentValue] : (count[currentValue] = 1),
        count
      );
    }, {});
}