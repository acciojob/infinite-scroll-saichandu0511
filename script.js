//your code here!
let Infinite Scroll = document.getElementById("infi-list");
for (let i=1;i<=10;i++){
let li=document.createElement("li");
li.innerText"item"+i;
infi-list.appendChild(li))
}
window.addEventListener("scroll", function () {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        
        let currentItems = list.children.length;

        for (let i = 1; i <= 2; i++) {
            let li = document.createElement("li");
            li.innerText = "Item " + (currentItems + i);
            list.appendChild(li);
        }
    }
});

