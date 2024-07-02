function createInt8TypedArray(length, position, value) {
  const mybufer = new ArrayBuffer(length);
  const dataView = new DataView(mybufer);

  if (position < 0 || position >=  length) {
    throw new Error("Position outside range"); 
  }

  dataView.setInt8(position, value);
  return dataView;
}

export default createInt8TypedArray;
