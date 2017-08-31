document.getElementById("outer").addEventListener("click", function (event) {
    var me = this;
    var target = event.target;
    console.log(me.id);
    console.log("hello from " + target.id);
    //3
    var para = document.getElementById("clickTarget");
    para.innerText = "hello from " + target.id + " who lives inside " + me.id;
});

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

//5
var cars = [{
    id: 1,
    year: 1997,
    make: "Ford",
    model: "E350",
    price: 3000
},
{
    id: 2,
    year: 1999,
    make: "Chevy",
    model: "Venture",
    price: 4900
},
{
    id: 3,
    year: 2000,
    make: "Chevy",
    model: "Venture",
    price: 5000
},
{
    id: 4,
    year: 1996,
    make: "Jeep",
    model: "Grand Cherokee",
    price: 4799
},
{
    id: 5,
    year: 2005,
    make: "Volvo",
    model: "V70",
    price: 44799
}
];

var carToRow = function (car) {
    return "<tr>" +
        "<td>" + car.id + "</td>" +
        "<td>" + car.year + "</td>" +
        "<td>" + car.make + "</td>" +
        "<td>" + car.model + "</td>" +
        "<td>" + car.price + "</td>" +
        "</tr>";
};

var allRows = cars.map(carToRow);

var carFilterPriceLess = function(value, car){
    return value < car.value;
}

var carTable = function () {
    document.body.innerHTML += "<table class=\"table\"><tr>" +
        "<th>ID</th>" +
        "<th>year</th>" +
        "<th>Make</th>" +
        "<th>Model</th>" +
        "<th>Price</th>" +
        "</tr>" + allRows.join("") + "</table>";
};
carTable();

var inputHtml = "<input type=\"text\" id=\"filterPrice\">" +
    "<input type=\"submit\" id=\"filterPriceButton\" value=\"price Less than\">"+
    "<p id=\"errorMsg\"></p>";

var inputField = function () {
    document.body.innerHTML += inputHtml;

};
inputField();

var button = document.getElementById("filterPriceButton");
var input = document.getElementById("filterPrice").value;



var filterTable = function (value) {
 var carsFiltered = cars.filter(carFilterPriceLess))
};

button.addEventListener("click", function (e) {
    if (isFinite(input)) {
        filterTable(input);
    } else{
        document.getElementById("errorMsg").value = "Not a Number!";
    }
    e.preventDefault();
});