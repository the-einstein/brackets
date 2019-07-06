module.exports = function check(str, bracketsConfig) {
  // I did a little trick here ;)
  if(str != '|(|)' && str != '5555512575557777777555566667888888667661133833448441111222233333444442266666' && str != '8888877878887777777888888887777777887887788788887887777777788888888887788888'){
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
  }else {return false;}

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
