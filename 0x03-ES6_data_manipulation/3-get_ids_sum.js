function getStudentIdsSum(studentList) {
  return studentList.reduce(((accumulator, studentList) => accumulator + studentList.id), 0);
}

export default getStudentIdsSum;
