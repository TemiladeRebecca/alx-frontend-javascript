export default function createReportObject(employeesList) {
    const newObject = {
      allEmployees: {
        ...employeesList,
      },
      getNumberOfDepartments(employeeList) {
        return Object.keys(employeeList).length;
      },
    };
    return newObject;
  }
