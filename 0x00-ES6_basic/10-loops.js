export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];

  for (const el of array) {
    newArray.push(appendString + el);
  }

  return newArray;
}
