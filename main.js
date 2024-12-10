const numbercont = document.getElementById('numcounter');
const addnumber = document.getElementById ("pluse");
const lowerthenumber = document.getElementById ("notpluse");
const resetnumber = document.getElementById ("rest");


// this is for adding the number by 1 
addnumber.addEventListener('click' , function() {

    let currentNUmber = parseInt(numbercont.textContent,10) ; 

    
    if (currentNUmber < 5) {
         currentNUmber += 1 ; 
         numbercont.textContent = currentNUmber;

    }
    else{
        alert("ur at ur max count")

    }
});

// decrice the number by 1 - (limit at 0)
lowerthenumber.addEventListener('click' , function() {

    let currentNUmber = parseInt(numbercont.textContent,10) ; 

    if (currentNUmber > 0) {
        currentNUmber -= 1 ; 
        numbercont.textContent = currentNUmber;

   }
   else{
       alert("ur at number 0! ")

   }
});


// reset the number 
resetnumber.addEventListener('click' , function() {

    let currentNUmber = parseInt(numbercont.textContent,10) ; 

    currentNUmber = 0 ; 
    numbercont.textContent = currentNUmber;
});
