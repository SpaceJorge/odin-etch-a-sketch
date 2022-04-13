function makeGrid(columns,rows){
    for (let i = 1; i <=columns ;i++){
        for (let j=1; j<=rows;j++){
            const divChild = document.createElement("div");
            
            divChild.style.cssText =`grid-column: ${i}/${i+1};grid-row: ${j}/${j+1};`;
            /*divChild.style.gridTemplateColumns="1fr";*/
            divChild.style.padding = "10px";
            divChild.style.backgroundColor = "red";
            divChild.classList.add('child');
            divChild.textContent = `${i} ${j}`;
            divChild.addEventListener("mouseover",()=>{
                divChild.style.backgroundColor = "black";
            });
            container.appendChild(divChild);
            

        }
    }
}

const container = document.querySelector(".container");
const set = document.querySelector("#set");
const reset = document.querySelector("#reset");

makeGrid(16,16);

set.addEventListener("click", ()=>{
    let num = prompt("How many rows or columns do you want? You name it, up to a 100!","");
    if ((num>=1)&&(num<=100)){
        while (container.firstChild){
            container.removeChild(container.firstChild);
        }
        makeGrid(num,num);
    }else{
        alert("That's not a number between 1 and 100");
    }
});

reset.addEventListener("click", ()=>{
    let children = container.querySelectorAll(".child");
    for(let i=0; i<children.length; i++) {
        if (children[i].nodeName.toLowerCase() == 'div') {
             children[i].style.background = "red";
         }
        }
    
    /*for (let i=0;i<= (children.childElementCount-1);i++){
        collection[i].style.backgroundColor = "red";
    }*/

});


/*
let item = document.getElementsByClassName("child");
item.addEventListener("mouseover",()=>{
    item.style.backgroundColor = "black";
});*/