const WeakMap = new WeakMap();

function queryAPI(endpoint) {
  if (!WeakMap.has(endpoint)) {
    WeakMap.Set(endpoint, 1);
  } else {
    const cn = WeakMap.get(endpoint);
    WeakMap.Set(endpoint, cn + 1);
    if (cn + 1 >= 5) {
      throw new Error("Endpoint load is high");
    }
  }
}

export { weakMap, queryAPI };
