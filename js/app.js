function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if(pinString.length==4){
         return pin;
    }
    else{
        return getPin();
    }
}
function generatePin(){
    const pin = getPin();
    document.getElementById('display-pin').value = pin;

}

document.getElementById('key-pad').addEventListener('click',function(event){
    const numbers = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if(isNaN(numbers)){
        if(numbers == 'C'){
            calcInput.value = '';
        }
    }
    else{
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + numbers;
        calcInput.value = newNumber; 
    }
})

function verifyPin(){
    const currentPin = document.getElementById('display-pin').value;
    const typedNumber = document.getElementById('typed-numbers').value;
    if(currentPin == typedNumber){
        document.getElementById('notify-fail').style.display = 'none';
        document.getElementById('notify-success').style.display = 'block';
    }
    else{
        document.getElementById('notify-success').style.display = 'none';
        document.getElementById('notify-fail').style.display = 'block';
    }

}