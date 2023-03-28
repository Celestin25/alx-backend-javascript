function groceriesList() {
  const myGroceriesList = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ];

  return new Map(myGroceriesList);
}

export default groceriesList;
