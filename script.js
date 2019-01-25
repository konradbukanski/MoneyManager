let expenses =0 
let listItems =  document.querySelectorAll('.delateElement');

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

document.querySelector('.newExpensBtn').addEventListener("click", (e) => {
    document.querySelector(".newExpens span").innerHTML = ``;
    if(document.querySelector('.newExpensText').value){
    const newExpens = document.createElement("p")
    const newExpensInput = document.createElement("INPUT");
    newExpensInput.setAttribute("type", "number");
    newExpensInput.setAttribute("value", "0");
    newExpensInput.setAttribute("min", "0");
    newExpens.appendChild(newExpensInput);
    document.querySelector(".expensesList").appendChild(newExpens);
    const newExpensText = document.createElement("span");
    newExpensText.innerHTML = ` zł - ${document.querySelector('.newExpensText').value}`;
    newExpens.appendChild(newExpensText);
    const delateElement = document.createElement("span");
    delateElement.classList.add("delateElement");
    const x = document.createElement("i");
    x.classList.add("far");
    x.classList.add("fa-times-circle");
    delateElement.appendChild(x);
    newExpens.appendChild(delateElement);

    document.querySelector('.newExpensText').value ="";
    listItemschange()  
    }else
    {
        document.querySelector(".newExpens span").innerHTML = `  WPROWADŹ NAZWĘ!`;
    }    
})

const listItemschange = () => {
        listItems =  document.querySelectorAll('.delateElement');
        document.querySelectorAll('.delateElement').forEach(item => { item.addEventListener("click", function(e){
            e.target.closest('p').remove();
            })
        })
}
listItemschange()


