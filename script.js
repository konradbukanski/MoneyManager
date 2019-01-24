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

    if(mouth<0){
        document.querySelector(".mouth h1").innerHTML = "W tym miesiącu na minusie"; 
        document.querySelector(".mouth p").innerHTML = `${mouth*(-1).toFixed(2)} zł`;
        document.querySelector(".day h1").innerHTML = "każdego dnia brakuje";
        document.querySelector(".day p").innerHTML = `${(day*(-1)).toFixed(2)} zł`;
    }else{
        document.querySelector(".mouth h1").innerHTML = "Możesz wydać w tym miesiącu:"; 
        document.querySelector(".mouth p").innerHTML = `${mouth.toFixed(2)} zł`;
        document.querySelector(".day h1").innerHTML = "Na dzień przypada:";
        document.querySelector(".day p").innerHTML = `${day.toFixed(2)} zł`;
    }

})

document.querySelector('.newExpens').addEventListener("click", (e) => {
    const newExpens = document.createElement("p")
    const newExpensInput = document.createElement("INPUT");
    newExpensInput.setAttribute("type", "number");
    newExpensInput.setAttribute("value", "0");
    newExpensInput.setAttribute("min", "0");
    newExpens.appendChild(newExpensInput);
    document.querySelector(".expenses").appendChild(newExpens);
    const newExpensText = document.createElement("span");
    newExpensText.innerHTML = ` zł - ${document.querySelector('.newExpensText').value}`;
    newExpens.appendChild(newExpensText);
    document.querySelector('.newExpensText').value ="";
})