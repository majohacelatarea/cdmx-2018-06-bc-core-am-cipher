//window.cipher = {
//}

const originMessageSave = () => {
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
}



