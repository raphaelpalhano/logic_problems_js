/**
 * 
 * function FindIntersection(strArr) { 
  // get element 1 and 2
  const elementOne = strArr[0];
  const elementTwo = strArr[1];
  
  // split elements
  let listOne = elementOne.split(",");
  let listTWo = elementTwo.split(",");
  
  // verify lists
  const finalArray = listOne.filter((el) => listTWo.includes(el));


  // return  
  return finalArray.length > 0 ? finalArray : false;

}
   
// keep this function call here 
console.log(FindIntersection(readline()));
 */

function FindIntersection(strArr) { 
    // get element 1 and 2
    const elementOne = strArr[0];
    const elementTwo = strArr[1];
    
    // split elements
    let listOne = elementOne.split(",");
    let listTWo = elementTwo.split(",");
    
    // verify lists
    const finalArray = listOne.filter((el) => listTWo.includes(el));
  
  
    // return  
    return finalArray.length > 0 ? finalArray : false;
  
  }
     
  // keep this function call here 
  console.log(FindIntersection(readline()));