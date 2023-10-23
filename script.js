let menu_btn = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");
menu_btn.addEventListener("click",function(){
    navbar.classList.toggle("navbarOpen");
});

let btn = document.querySelectorAll(".btn");
let modal = document.querySelector(".modal");
btn.forEach(e => {
    e.addEventListener("click", ()=>{
        modal.classList.add("modalAnimation");
    })
});

let modalClose = document.querySelector("#close");
modalClose.addEventListener("click", ()=>{
    modal.classList.remove("modalAnimation");
});

let shoppingIcon = document.getElementById("shopping-icon");
shoppingIcon.addEventListener("click", ()=>{
    modal.classList.add("modalAnimation");
});

let totalValue = document.querySelector(".total-value");


btn.forEach(btn => {
   btn.setAttribute("istrue", "false")
   var count = 1;
   var itemPrice;
   var newPrice;
   var number;
btn.addEventListener("click", (e)=>{

    
   
    if(e.target.getAttribute("istrue") == "false"){
       
        count = 1;
        let itemContainer = document.createElement("div");
        itemContainer.classList = "item-container";
        modal.appendChild(itemContainer);
    
        let image = document.createElement("img");
        image.classList = "item-image";
        image.src=e.target.parentElement.previousElementSibling.children[0].src;
        itemContainer.appendChild(image);
    
        let infoContainer = document.createElement("div");
        infoContainer.classList = "item-info";
        itemContainer.appendChild(infoContainer);
    
        let itemName = document.createElement("p");
        itemName.classList="item-name";
    
        itemPrice = document.createElement("p");
        itemPrice.classList="item-price";
        itemName.innerText = e.target.parentElement.previousElementSibling.children[2].innerText;
        itemPrice.innerText = e.target.parentElement.previousElementSibling.children[3].children[0].innerText;
        infoContainer.appendChild(itemName);
        infoContainer.appendChild(itemPrice);


        let buttonContainer = document.createElement("div");
        buttonContainer.classList = "button-container";
        let buttonPlus = document.createElement("button");
        buttonPlus.innerText = "+";
        let buttonMinus = document.createElement("button");
        buttonMinus.innerText = "-";
        number = document.createElement("p");
       
        number.innerText = count;
        let trush = document.createElement("i");
        trush.classList = "fa-solid fa-trash";
    
        buttonContainer.appendChild(buttonPlus);
        buttonContainer.appendChild(number);
        buttonContainer.appendChild(buttonMinus);
        itemContainer.appendChild(buttonContainer);
        itemContainer.appendChild(trush);
    
         document.querySelector(".shopping-number").innerText = document.querySelectorAll(".item-container").length;
    
         let price = itemPrice.innerText;
         newPrice = price.replace("$", "");
         buttonPlus.addEventListener("click", ()=>{
            
           count += 1;
           number.innerText = count;
       
            itemPrice.innerText = "$" + Math.floor(count * newPrice);
            totalPrice();
        });
    
    
        buttonMinus.addEventListener("click", ()=>{
            if (count>=2) {
                count -= 1;
                number.innerText = count;
                itemPrice.innerText = "$" + Math.floor(count * newPrice);
                totalPrice();
            }
        })
    
        trush.addEventListener("click", ()=>{
            itemContainer.remove();
            btn.setAttribute("istrue", "false")
            totalPrice()
        });

        e.target.setAttribute("istrue","true");
        totalPrice();

    }else{
        count += 1;
        itemPrice.innerText = "$" + Math.floor(count * newPrice);
        number.innerText = count;
        totalPrice();
    }
})
});

let btnClear = document.querySelector(".btn-clear");
btnClear.addEventListener("click", ()=>{
   let itemContainers = document.querySelectorAll(".item-container");
   itemContainers.forEach(element => {
    element.remove();
    totalPrice()
    btn.forEach(btn => {
        btn.setAttribute("istrue", "false");
    });
   });
});


function totalPrice() {
    let prices = document.querySelectorAll(".item-price");
    let total = 0;
    prices.forEach(price => {
        let newPrice = parseFloat(price.innerText.replace("$", "")); // Convert to a number
        total += newPrice; // Add the newPrice to the total
    });

    totalValue.innerText = "$"+ total;
}


