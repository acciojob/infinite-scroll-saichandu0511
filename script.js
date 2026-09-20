let list = document.getElementById("infi-list");

// Add 10 items initially
for (let i = 1; i <= 10; i++) {
    let li = document.createElement("li");
    li.innerText = "Item " + i;
    list.appendChild(li);
}

// Add 2 items when we reach the bottom
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