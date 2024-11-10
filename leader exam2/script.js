const inputtxt = document.getElementById("txt"); 
const Add = document.getElementById("addbtn");
const reset = document.getElementById("reset");


const items = document.querySelectorAll("#list li") // # - ანუ ავირჩიოთ აიდი
const tb = [];

Add.addEventListener("click",function(){
    const list = document.getElementById("list");
    const textND = document.createTextNode(inputtxt.value);
    const nodeli = document.createElement("li");

    nodeli.appendChild(textND);
    list.appendChild(nodeli);

})


for(let i = 0; i > items.lenght; i++) {
    tb.push(items[i].innerHTML);
}
    
reset.addEventListener("click", function() {
    tb.forEach(index => {
        if (items[index]) {
            items[index].parentNode.removeChild(items[index]);
        }
    });
    inputtxt.value = "";
});