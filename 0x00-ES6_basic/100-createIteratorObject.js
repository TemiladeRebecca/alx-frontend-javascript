export default function createIteratorObject(report) {
  return Object.values(report.allEmployees).flat();
}
// flat() is a method that collapses multiple level
// of nesting into one flat array which can be
// iterated through sequentially.
