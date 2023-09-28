/**
 * function alphanumeric(text){
  //your code here
  const regexLetterAndNumbers = /[A-Za-z0-9]/;
  const spaceRegex = /\s/;
  
  if(regexLetterAndNumbers.test(text) && !text.endsWith('"') && !spaceRegex.test(text)) {
    return true;
  }
  
  return false;
}
 */

function alphanumeric(text){
    //your code here
    const regexLetterAndNumbers = /[A-Za-z0-9]/;
    const spaceRegex = /\s/;
    const special = /[\!\_\"\@\#]/;
    
    if(regexLetterAndNumbers.test(text) && !spaceRegex.test(text) && !special.test(text)) {
      return true;
    }
    
    return false;
  }