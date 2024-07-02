function updateStudentGradeByCity(array, city, newGrades) {
  return array.filter((bcty) => bcty.location === city)
    .map((bcty) => {
    for (const ng of newGrades) {
      if (ng.studentId === bcty.id) {
	bcty.grade = ng.grade;
      } else {
        bcty.grade = "N/A";
      }
    }
    return bcty;
 })
}

export default updateStudentGradeByCity;
