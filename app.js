
let btn = document.querySelector('button');
let ul = document.querySelector('ul');
let inp = document.querySelector('input');

btn.addEventListener("click" , function(){
    console.log(inp.value);
    let item = document.createElement("li");
    item.innerText = inp.value;
    ul.appendChild(item);
    inp.value="";

    let delbtn = document.createElement('button');
    delbtn.innerText = "delete";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);
});

ul.addEventListener("click",function(event){//this is event bubbling so all the child will be affected
    console.log("button pressed!");
    console.dir(event.target.nodeName);//this helps us to find which element the trigger 
    if(event.target.nodeName == "BUTTON"){
        let delitem = event.target.parentElement;
        delitem.remove();
        console.log("deleted");
    }
});


// let delbtns = document.querySelectorAll(".delete");
// for (let delbtn of delbtns) {
//     delbtn.addEventListener("click", function () {
//         let parent = this.parentElement;
//         console.log(parent);
//         parent.remove();
//     });
// }
