
let expenses =0 


document.querySelector('.calculate').addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".mouth p").innerHTML = "0";
    document.querySelector(".day p").innerHTML = "0";
    const salary = document.querySelector('.salary input').value;
    (function(){
        
        document.querySelectorAll('.expenses input').forEach(expense => {
            expenses = expenses + Number(expense.value);
            console.log(expenses)
        })
    })()
    
    
    
    document.querySelector('.expenses input').value;
    const safings = document.querySelector('.safings input').value;

    let mouth = salary-expenses-safings;
    let day = (salary-expenses-safings)/30;

    // const totalMouth = document.createElement('div');
    document.querySelector(".mouth p").innerHTML = mouth;
    


    // totalMouth.innerHTML = mouth;

    // const totalDay = document.createElement('div');
    document.querySelector(".day p").innerHTML = day;
        
    // totalDay.innerHTML = day;
})

document.querySelector('.newExpens').addEventListener("click", (e) => {
    console.log("click");
    const newExpens = document.createElement("p")
    newExpens.innerHTML = document.querySelector('.newExpensText').value;
    const newExpensInput = document.createElement("INPUT");
    newExpensInput.setAttribute("type", "number");
    newExpensInput.setAttribute("value", "0");
    newExpensInput.setAttribute("min", "0");
    newExpens.appendChild(newExpensInput);
    document.querySelector(".expenses").appendChild(newExpens);
    document.querySelector('.newExpensText').value ="";
})