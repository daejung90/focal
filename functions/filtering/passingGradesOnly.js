
// const callback = function(grades){
//     for (let grade of grades){
//     if(grade >= 70){
//         return grade
//     }
//     }
// }

const grades = ([73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35])

const passingGrades = grades.filter((grade) => {
    return (grade >= 70)
})
console.log(passingGrades)

