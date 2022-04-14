function makeGrid(columns,rows,color){
    for (let i = 1; i <=columns ;i++){
        for (let j=1; j<=rows;j++){
            const divChild = document.createElement("div");
            
            divChild.style.cssText =`grid-column: ${i}/${i+1};grid-row: ${j}/${j+1};`;
            divChild.style.padding = "5px";
            if (color == "normal"){
                divChild.style.backgroundColor = "red";
                divChild.addEventListener("mouseover",()=>{
                    divChild.style.backgroundColor = "black";
                });
            }else{
                let cont = 0;
                
                divChild.style.backgroundColor = randomColor();
                divChild.addEventListener("mouseover",()=>{
                    cont ++;                 
                    if (cont >= 10){
                        divChild.style.backgroundColor ="black";
                    }else{
                        let percent = (10-cont)/10;
                        divChild.style.backgroundColor = RGBToHexColorChanger(divChild.style.backgroundColor,percent);
                        
                    }
                });
            }
            divChild.classList.add('child');
            /*divChild.textContent = `${i} ${j}`;*/
            
            container.appendChild(divChild);
            

        }
    }
}
function removeGrid(){
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }
}
function randomColor(){
    const randomColor = (Math.floor(Math.random()*16777215)).toString(16);
    return "#" + randomColor;
}
function RGBToHex(rgb) {
    // Choose correct separator
    let sep = rgb.indexOf(",") > -1 ? "," : " ";
    // Turn "rgb(r,g,b)" into [r,g,b]
    rgb = rgb.substr(4).split(")")[0].split(sep);
  
    let r = (+rgb[0]).toString(16),
        g = (+rgb[1]).toString(16),
        b = (+rgb[2]).toString(16);
  
    if (r.length == 1)
      r = "0" + r;
    if (g.length == 1)
      g = "0" + g;
    if (b.length == 1)
      b = "0" + b;
  
    /*return "#" + r + g + b;*/
    return r + g + b;
}
function RGBToHexColorChanger(rgb,percent) {
    if(rgb == ""){
        /*White rgb is taken as "" for some reason and needs to be a number*/
        let num = Math.floor(255 * percent);
        let hex = num.toString(16);
        if (hex.length == 1){
            hex = "0"+hex;
        }
        return "#" + hex + hex + hex;
    }
    // Choose correct separator
    let sep = rgb.indexOf(",") > -1 ? "," : " ";
    // Turn "rgb(r,g,b)" into [r,g,b]
    rgb = rgb.substr(4).split(")")[0].split(sep);
  
    let r = (Math.floor(+rgb[0]*percent)).toString(16),
        g = (Math.floor(+rgb[1]*percent)).toString(16),
        b = (Math.floor(+rgb[2]*percent)).toString(16);
  
    if (r.length == 1)
      r = "0" + r;
    if (g.length == 1)
      g = "0" + g;
    if (b.length == 1)
      b = "0" + b;
  
    return "#" + r + g + b;
    
}

const container = document.querySelector(".container");
const set = document.querySelector("#set");
const reset = document.querySelector("#reset");
const rainbow = document.querySelector("#rainbow");
let gridColor = "red";
makeGrid(16,16,"normal");

set.addEventListener("click", ()=>{
    let num = prompt("How many rows or columns do you want? You name it, up to a 100!","");
    
    if ((num>=1)&&(num<=100)){
        gridColor = "red";
        removeGrid();
        makeGrid(num,num,"normal");
    }else{
        alert("That's not a number between 1 and 100");
    }
});

reset.addEventListener("click", ()=>{
    let children = container.querySelectorAll(".child");
    for(let i=0; i<children.length; i++) {
        if (children[i].nodeName.toLowerCase() == 'div') {
            if (gridColor == "red"){
                children[i].style.background = "red";
            }else{
                children[i].style.background = randomColor();
            }
         }
        }
    
    /*for (let i=0;i<= (children.childElementCount-1);i++){
        collection[i].style.backgroundColor = "red";
    }*/

});

rainbow.addEventListener("click", ()=>{
    let num = prompt("How many rows or columns do you want? You name it, up to a 100!","");
    
    if ((num>=1)&&(num<=100)){
        gridColor = "rainbow";
        removeGrid();
        makeGrid(num,num,"rainbow");
    }else{
        alert("That's not a number between 1 and 100");
    }
});

/*
let item = document.getElementsByClassName("child");
item.addEventListener("mouseover",()=>{
    item.style.backgroundColor = "black";
});*/