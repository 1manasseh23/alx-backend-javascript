class HolbertonCourse {
  constructor(name, length, students) {
    this._validateName(name);
    this._validateLength(length);
    this._validateStudents(students);

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._validateName(value);
    this._name = value;
  }

  get length() {
    return this._length;
  }

  set length(value) {
    this._validateLength(value);
    this._length = value;
  }

  get students() {
    return this._students;
  }

  set students(value) {
    this._validateStudents(value);
    this._students = value;
  }

  _validateName(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
  }

  _validateLength(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
  }

  _validateStudents(students) {
    if (!Array.isArray(students) || students.some(student => typeof student !== 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
  }
}

export default HolbertonCourse;
