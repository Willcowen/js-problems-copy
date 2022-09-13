function smallestProduct(n) {
  let intArr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  let productArr = [];
  intArr.forEach(element => {
    let arr = []
    for (let i = 1; i<=100; i++) {
        arr.push(element*i)
    }
    productArr.push(arr)
  })
  console.log(productArr)

}

smallestProduct(20);
