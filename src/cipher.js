window.cipher = {
  encode: (offset,string) => {    
    let empty = "";
    //let offset=0;
    for(let i=0; i < string.length; i++){
      if(string[i].charCodeAt()=== 32){
        empty = empty +  string[i];
      } else if (string[i].charCodeAt()>= 65 && string[i].charCodeAt()<=90){
        let position = string[i].charCodeAt();
        let formula = ((position - 65 + parseInt(offset)) % 26 + 65);
        //console.log(position, formula);
        let codify = String.fromCharCode(formula);
        empty += codify;
     } else if (string[i].charCodeAt()>= 97 && string[i].charCodeAt()<=122){
       let position2 = string[i].charCodeAt();
       let formula2 = ((position2 - 97 + parseInt(offset)) % 26 + 97);
       let codify2 = String.fromCharCode(formula2);
       empty += codify2;
     }

    }
    return empty;
    

   },

  decode: (offset, string) => {
    let empty = "";
    //console.log(offset, string);
    for(let i=0; i < string.length; i++){
      if(string[i].charCodeAt()===32){
        empty += string[i];
      } else if (string[i].charCodeAt()>= 65 && string[i].charCodeAt()<=90){
        let decodePosition = string[i].charCodeAt();
        let formulaDecode = ((decodePosition - 90 - parseInt(offset)) % 26 + 90);
        let decodeCodify = String.fromCharCode(formulaDecode);
        empty += decodeCodify;
      } else if (string[i].charCodeAt()>= 97 && string[i].charCodeAt()<=122){
        let decodePosition2 = string[i].charCodeAt();
        let formulaDecode2 = ((decodePosition2 - 122 - parseInt(offset)) % 26 + 122);
        let decodeCodify2 = String.fromCharCode(formulaDecode2);
        empty += decodeCodify2;
      }
    }
  //console.log(empty);
  //originMessage.value = empty;
  return empty;
}
}

//console.log(cipher.encode());


//let empty = "";

/*const encode = (offset,string) => {
  let empty = "";
  originMessageValue =  originMessage.value;
  offset = parseInt(toDisplace.value);
  for( let i=0; i < originMessageValue.length; i++){
    if(originMessageValue[i].charCodeAt()=== 32){
      empty = empty +  originMessageValue[i];
    } else if (originMessageValue[i].charCodeAt()>= 65 && originMessageValue[i].charCodeAt()<=90){
      let position = originMessageValue[i].charCodeAt();
      let formula = ((position - 65 + offset) % 26 + 65);
      let codify = String.fromCharCode(formula);
      empty += codify;
   } else if (originMessageValue[i].charCodeAt()>= 97 && originMessageValue[i].charCodeAt()<=122){
     let position2 = originMessageValue[i].charCodeAt();
     let formula2 = ((position2 - 97 + offset) % 26 + 97);
     let codify2 = String.fromCharCode(formula2);
     empty += codify2;
   }
  }
  result.value = empty;
 }*/

 //const decode = () => {

 //}

/*const originMessageSave = () => {
  let originMessage = document.getElementById("message").value.toUpperCase();
  let toDisplace = parseInt(document.getElementById("number").value);
  let cipherText ="";
  for(i = 0; i < originMessage.length; i++){
    //console.log(originMessage[i]); 
    let position = originMessage.charCodeAt(i);
    //console.log(position) //Prueba y sí funciona
    let formula = ((position - 65 + toDisplace) % 26 + 65);
    //console.log(formula);// No puedo comprobar la fórmula
    let newPosition = String.fromCharCode(formula);
    //console.log(newPosition);
    cipherText = cipherText + newPosition; 

  }

    //console.log(cipherText);
  let result = document.getElementById("result").defaultValue = cipherText;
}*/



