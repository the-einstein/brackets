module.exports = function check(str, bracketsConfig) {
  
  let stack = [];
  let current;
  const matchLookup = {
        "(": ")", 
        "[": "]", 
        "{": "}", 
      };
                    
  for (let i = 0; i < str.length; i++) {
    current = str[i]; 
    
    if (current === '(' || current === '[' || current === "{") {
      stack.push(current);
      
    } else if (current === ')' || current === ']' || current === "}") {
      const lastBracket = stack.pop();
      
      if (matchLookup[lastBracket] !== current) { 
      
        return false; 
      }
    }
  }
  
  return stack.length === 0; 


  let stac = [];
  let curren;
  const matchLooku = {
        "(": ")", 
        "[": "]", 
        "{": "}", 
      };
                    
  for (let i = 0; i < bracketsConfig.length; i++) {
    curren = bracketsConfig[i];
    
    if (curren === '(' || curren === '[' || curren === "{") {
      stac.push(curren);
      
    } else if (curren === ')' || curren === ']' || curren === "}") {
      const lastBracke = stac.pop();
      
      if (matchLooku[lastBracke] !== curren) {
      
        return false; 
      }
    }
  }
  
  return stac.length === 0; 

}
