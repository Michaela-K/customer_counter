let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let totalEl = document.getElementById("total-el")
let counter = 0

function increment(){
	counter += 1
	countEl.innerText = counter// here we grab the html element (countEl) and insert the count (counter)into it using .innerText
}
function decrement(){
    counter -= 1
    countEl.textContent = counter
}
 
 // SAVE BUTTON
 function save(){
 	let counterStr = counter + " - "
 	saveEl.textContent += counterStr //we used textContent here instead because when we use innerText it doesnt leave space after the dash wheras textContent does 
 	countEl.textContent = 0 //this sets the count back to 0
 	counter = 0 //the increment is still applied even though the number is reset to 0, this line resets the increment back to 0
 }
 
 function total(){
    // get the saved numbers
    //add them
    //print them to Total
    
    // let counterT = counter 
    // saveEl.textContent += counterT //we used textContent here instead because when we use innerText it doesnt leave space after the dash wheras textContent does 
    // countEl.textContent = 0 
    // counter = 0
    // saveEl.textContent = totalEl.textContent
 }

 function reset(){
    let ask = confirm("Are you sure you want to reset the counter?");
        if (ask == true){
            counter = 0
            countEl.textContent = counter
        }
        else{
        }
}


 
 //DESIGN - Circle Around The number