let cont = document.getElementById("container");
let names = ["apple", "banana", "orange", "papaya"];
let aname = names[Math.floor(Math.random() * (names.length - 1))];
let click = document.querySelector("button");
let chances = aname.length + 1;
let inp = document.querySelector("input");
let chancesleft = document.getElementById("chances");
chancesleft.innerHTML = "Chances left: " + chances;
let val, list;
for (let i = 0; i < aname.length; i++) {
    cont.appendChild(document.createElement("div"));
    cont.lastChild.innerText = "_";
}

click.addEventListener(
    "click",
    (eve = () => {
        list = Array.from(cont.childNodes);
        if (inp.value.length == 1) {
            val = inp.value;
            for (let i = 0; i < aname.length; i++) {
                if (aname[i] == val) {
                    list[i].textContent = aname[i];
                }
            }
            chances--;
        } else {
            alert("Enter one letter");
        }
        let guessed = true;
        for (let i = 0; i < list.length; i++) {
            if (list[i].innerText === "_") {
                guessed = false;
                break;
            }
        }
        chancesleft.innerHTML = "Chances left: " + chances;
        if (guessed) click.innerHTML = "you won refresh";
        if (chances <= 0) click.innerHTML = "you lose refresh";
        if (guessed || chances <= 0) click.removeEventListener("click", eve);
    })
);
