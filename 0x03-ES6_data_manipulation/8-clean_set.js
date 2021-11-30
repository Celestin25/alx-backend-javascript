function cleanSet(set, startString) {
  const newList = [];
  for (const elem of set) {
    if (elem.startsWith(startString) && startString !== '') {
      newList.push(elem.slice(startString.length));
    }
  }
  return newList.join('-');
}

export default cleanSet;
