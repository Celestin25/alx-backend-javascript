export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];

  for (const el in array) {
    newArray.push(appendString + el);
  }

  return newArray;
}
