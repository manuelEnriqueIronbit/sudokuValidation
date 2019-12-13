let valid = false

const sudoku = (matrix) => {
  if (validateRow(matrix) && validateColumn(matrix)){
    return true;
  } else{
    return false;
  }
}

const validateSet = set => {
  set.size < 9 ? valid = false : valid = true ;
  return valid;
}

const validateRow = matrix =>{
  for (const eachArray of matrix ){
    if(validateSet(new Set(eachArray)) === false){
      return false
    } 
  }
  return true;
}

const validateColumn = matrix => {
  for (let index in matrix){
    let colsArray = [];
    for (let element of matrix){
      colsArray.push(element[index])
    }
    //console.log(colsArray);
    if(validateSet(new Set(colsArray)) === false){
      return false
    } 
  } 
  return true;
}

const validateGrid = matrix => {
  let compare = 3;
  let gridArray =[]
  for (let index in matrix){
    // del 0 al 8, length 9
    if (index < compare){
      for (let element of matrix){
        console.log(element)
        gridArray.push(element[index])
      }
      //console.log(gridArray)
    }
  }
}
let array = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

validateGrid(array)
module.exports = sudoku;