function hasValuesFromArray(Set, Array) {
  for (const element of Array) {
    if (!Set.has(element)) {
      return false;
    }
  }
  return true;
}

export default hasValuesFromArray;
