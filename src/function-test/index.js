let valid = false

const sudoku = (matrix) => {
  if (validateRow(matrix) && validateColumn(matrix) && validateGrid(matrix)){
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
  groupOfColumns1  = [];
  groupOfColumns2  = [];
  groupOfColumns3  = [];
  columnSudokuStart = 0
  columnSudokuEnd = 3
  for (let element of matrix){
    groupOfColumns1.push(element.slice(columnSudokuStart, columnSudokuEnd));
    groupOfColumns2.push(element.slice(columnSudokuStart + 3, columnSudokuEnd + 3));
    groupOfColumns3.push(element.slice(columnSudokuStart + 6, columnSudokuEnd + 6));
  }
  let allSudokuColumns = [];
  allSudokuColumns.push(groupOfColumns1, groupOfColumns2, groupOfColumns3)
  let sudokuColumns = [];
  for (let elements of allSudokuColumns){
    sudokuColumns = sudokuColumns.concat(elements)
  }
  for (let elements of sudokuColumns){
    sudokuColumns = sudokuColumns.concat(elements);
    sudokuColumns.shift(elements);
  }
  

  let rowGridStart = 0;
  let rowGridEnd = 9;
  let grids = [];
  for (let i = 0; i < 9; i++){
    grids = sudokuColumns.slice(rowGridStart, rowGridEnd);
    rowGridStart += 9;
    rowGridEnd += 9
    if(validateSet(new Set(grids)) === false){
      return false;
    } 
  }
  return true;
}

module.exports = sudoku;