// const printItems = function(array) {
//     for (let item of array) {
//       console.log(item);
//     }
//   }
  
//   const array = ["A", "B", "C", "D", "E"];
//   printItems(array);

  const printItems = function(array) {
    for (let item of array) {
      if (Array.isArray(item)) {
        // Print out all it's items individually
        printItems(item)
      } else {
        console.log(item);
      }
    }
  }
// printItems(["A", ["B", "C"], "D", "E"])
//   const array = ["A", "B", "C", "D", "E"];
const array = ["A", [["B", ["C"]], [[["D"]], "E"]]];
printItems(array);
  