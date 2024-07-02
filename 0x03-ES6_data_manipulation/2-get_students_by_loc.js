function getStudentsByLocation(array, city) {
  return array.filter(city => city.location === "San Francisco");
}

export default getStudentsByLocation;
