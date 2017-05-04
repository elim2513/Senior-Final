var exports = module.exports = {};

function PasswordMessage(m){
  this.name = 'Password Message'
  this.message= m;

}

function inRange(char,min,max){
    let unicode = char.charCodeAt(0);
    if(unicode >= min && unicode <=max){
      return true;
    }
    else {
      return false;
    }

}

exports.checkLength = function(str){
    let valid = (str.length >= 8 && str.length <= 20);
    try{
        if(str.length < 8){
            throw new PasswordMessage("Your password is too short. Should be at least 8 letters.");
        }
        else if(str.length > 20){
            throw new PasswordMessage("Your password is too long. Should be at most 20 letters.");
        }
        else{
            throw new PasswordMessage("Your password is an appropriate length.");
        }
    }
    catch(e){
        console.log(e.name+": "+e.message);
        return valid;
    }
}


exports.containsUpper =function(str){
  let hasUpper = false;
  try {
    for(i=0; i<str.length; i++)
    {
      if(inRange(str[i], 65, 90)){
        hasUpper = true;
        throw new PasswordMessage(' has uppercase character');
      }
    }
    if(hasUpper == false){
      throw new PasswordMessage('does not have uppercase character')
    }
  } catch (e) {
      console.log(e.message);
      return hasUpper;
  }
}

exports.containsLower =function(str){
  let hasLower = false;
  try{
    for(i=0; i<str.length; i++){
      if(inRange(str[i], 97, 122)){
        hasLower = true;
        throw new PasswordMessage('has lowercase character');
      }
    }
  }
  if(hasLower==false){
    throw new PasswordMessage('does not have lowercase character')
  }
  catch(e) {
    console.log(e.message);
    return hasLower;
  }
}


exports.containsNumerical =function(str){
  let hasNumerical = false;
  try {
    for(i=0; i<str.length; i++){
      if(inRange(str[i], 48,57)){
        hasNumerical = true;
        throw new PasswordMessage('has numerical character');
      }
    }
  }
  if(hasNumerical==false){
    throw new PasswordMessage('does not have numerical character')
  }
  catch (e) {
    console.log(e.message);
    return hasNumerical;

  }

}


exports.containsSpecial =function(str){
  let hasSpecial = false;
  special = [33,64,35,36,37,94,38,42];
  try {
    for(let specialCha=0; specialCha<=special.length; specialCha++){
      for(let strCha = 0; strCha<=str.length; strCha++){
        if (str) {

          }
        }
      }
    }
  } catch (e) {

  }
}
