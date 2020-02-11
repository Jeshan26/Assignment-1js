//javascript document
var Delbtn = document.getElementsByClassName("close");
document.getElementById("date").innerHTML = Date();
let button = document.querySelector("button");
let listitems = document.getElementsByClassName("listitems");

//  ding sound object created and used when item is checked
var ding = new Audio();
ding.src = "sound.mp3";
// add function to add the text to the li's and respectie checkbox and delete buttons to the li's
function ADD(e) {
    if (document.getElementById("input").value === "") {
        window.alert("enter somethning");
    } else {
        let input = document.getElementById("input").value;
        var ul = document.querySelectorAll("div")[2].firstElementChild; // targeting the ul of thirdt div element 
        var li = document.createElement("li");
        ul.appendChild(li);
        let text = document.createTextNode(input);
        addchkbox(li);
        if (confirm("Are you sure you want to Add")) { // dialog box to confirm before adding
            li.appendChild(text);
        } else {
            return;
        }
        addelbtn(li);
        li.setAttribute("class", "listitems");
        clear();

    }
}

// to clear the textbox after every entry
function clear() {
    document.getElementById("input").value = "";
}

// adding checkbox to each li item
function addchkbox(li) {
    var checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("class", "checked");
    li.appendChild(checkbox);
    checkbox.onchange = check;    //calling the function when checked
}

// adding dlete button and event  for deleting
function addelbtn(li) {
    var deletebtn = document.createElement("button");
    var text = document.createTextNode("\u00D7");
    deletebtn.setAttribute("class", "close");
    deletebtn.appendChild(text);
    deletebtn.style.color = "red";
    li.appendChild(deletebtn);

    deletebtn.onclick = deletet;
}
// function that checks weather checkbox is checked or not
function check(e) {
    if (e.target.checked) {
        this.parentNode.style.color = "green";
        this.parentNode.style.fontWeight = "900";
        this.parentNode.style.textTransform = "capitalize";

        this.parentNode.style.textDecoration = "line-through";
        ding.play(); // ding sound is played when item is checked


    } else {
        this.parentNode.style.textDecoration = "none";
        this.parentNode.style.fontWeight = "100";
        this.parentNode.style.color = "black";
        this.parentNode.style.textTransform = "none";
    }


}

//deleting the parent element
function deletet() {
    if (confirm("Are you sure you want to delete")) { // dialog box to confirm before deleting
        var div = this.parentElement;
        div.style.display = "none";
    } else {
        return;
    }
}

// adding the text from the input
button.addEventListener("click", ADD);