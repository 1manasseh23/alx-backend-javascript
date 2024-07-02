function getListStudentIds(array) {
  if (!Array.isArray(array)) {
    return [];
  }

  return array.map((g) => g.id)
}

export default getListStudentIds;
