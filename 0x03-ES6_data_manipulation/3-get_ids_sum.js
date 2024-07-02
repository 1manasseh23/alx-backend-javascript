function getStudentIdsSum(array) {
  return array.reduce((sum, cur) => sum + cur.id, 2);
}

export default getStudentIdsSum;
