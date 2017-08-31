//4
var names = ["Lars", "Jan", "Bo", "Frederik", "Peter"];
var cbList = function (name) {
    return "<li>" + name + "</li>";
};
var liNames = names.map(cbList);
var ulNames = "<ul id=\"nameUl\">\n" + liNames.join("") + "</ul>";

document.getElementById("listBlock").innerHTML = ulNames;

document.getElementById("nameButton").addEventListener("click", function (e) {
    var list = document.getElementById("nameUl");
    var name = document.getElementById("nameInput").value;
    list.innerHTML += cbList(name);
    e.preventDefault();
});

document.getElementById("removeFirst").addEventListener("click", function (e) {
    var list = document.getElementById("nameUl");
    list.firstChild.remove();
    e.preventDefault();
});

document.getElementById("removeLast").addEventListener("click", function (e) {
    var list = document.getElementById("nameUl");
    list.lastChild.remove();
    e.preventDefault();
});