function cleanSet(set, startString) {
  const newList = [];
  if (startString === '') {
    return '';
  }
  for (const elem of set) {
    if (elem.startsWith(startString) && typeof startString === 'string') {
      newList.push(elem.slice(startString.length));
    }
  }
  return newList.join('-');
}

export default cleanSet;
