//submit 
//adding event to form
document.querySelector('#loan-form').addEventListener('submit',calculateResult);
//calculate results(
function calculateResult(e){
   
    //getting value from html
    const amount = document.querySelector('#amount');
    const interest = document.querySelector('#interest');
    const years = document.querySelector('#years');
    const monthly = document.querySelector('#monthly-payment');
    const totalPayment = document.querySelector('#total-payment');
    const totalInterest = document.querySelector('#total-interest');
    
    e.preventDefault();
}