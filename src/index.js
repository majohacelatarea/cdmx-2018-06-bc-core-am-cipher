
let originMessage = document.getElementById("message");
let toDisplace = document.getElementById("number");
let codifyButton = document.getElementById("codificar");
let decodeButton = document.getElementById("decodificar");
let result = document.getElementById("result");
//result.innerHTML = codifyButton;


codifyButton.addEventListener("click" , event => {
    let codifyClick = window.cipher.encode(
        toDisplace.value,
        originMessage.value
    );
});

decodeButton.addEventListener("click", event => {
    let decodeClick = window.cipher.decode(
        toDisplace.value,
        result.value
    );
});

/*decodeButton.addEventListener("click" , function (event) {
    window.cipher.decode(toDisplace.value, result.value)
})*/
 
//encodeFunction = () => {
//let firstText = document.getElementById("result");
 //} 
//decodeButton.addEventListener("click" , decodeFunction);

//let result = document.getElementById("result").defaultValue = empty;


  

