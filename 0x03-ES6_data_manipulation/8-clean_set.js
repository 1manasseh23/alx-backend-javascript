function cleanSet(Set, startString) {
  let output = "";

  for (const element of Set) {
    if (element.startsWith(startString)) {
      output += element.slice(startString.length);
      if (output !== "") {
        output += "-";
      }
    }
  }
  return output.slice(0, -1);
}
export default cleanSet;
