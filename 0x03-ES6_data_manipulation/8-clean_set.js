function cleanSet(set, startString) {
  if (startString.length === 0) {
    return '';
  }
  const newList = [];
  for (const elem of set) {
    if (startString.length > 0 && elem.startsWith(startString)) {
      newList.push(elem.slice(startString.length));
    }
  }
  return newList.join('-');
}

export default cleanSet;
