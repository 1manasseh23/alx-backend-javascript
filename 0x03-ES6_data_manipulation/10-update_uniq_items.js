function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error("Cannot process");
  }
  for (const [items, quantity] of map) {
    if (quantity === 1) {
     map.set(items, 100);
    }
  }
  return map;
}
export default updateUniqueItems;
