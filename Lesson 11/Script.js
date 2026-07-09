const checkbox = document.getElementById('checkbox');

const Visa = document.getElementById('Visa');

const Mastercard = document.getElementById('mastercard');

const Paypal = document.getElementById('Paypal');

const submit = document.getElementById('submit');

const result = document.getElementById('result');

const Paymentresult = document.getElementById('Paymentresult');

submit.onclick = function (){

     if (checkbox.checked) {

       result.textContent = "You have accepted the terms and conditions";

     }else{

       result.textContent = "You have not accepted the terms and conditions";

     }

     
     if( Visa.checked){

        Paymentresult.textContent = "You have selected Visa as your payment method";

     }else if(Mastercard.checked){

        Paymentresult.textContent = "You have selected Mastercard as your payment method";

     }else if(Paypal.checked){

        Paymentresult.textContent = "You have selected Paypal as your payment method";

     }else{

        Paymentresult.textContent = "You have not selected any payment method";
     }
}