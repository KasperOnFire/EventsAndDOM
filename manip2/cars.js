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

var carTable = function (rows) {
    document.getElementById("tableDiv").innerHTML = "<table class=\"table\"><tr>" +
        "<th>ID</th>" +
        "<th>year</th>" +
        "<th>Make</th>" +
        "<th>Model</th>" +
        "<th>Price</th>" +
        "</tr>" + rows.join("") + "</table>";
};
carTable(allRows);

var inputHtml = "<input type=\"text\" id=\"filterPrice\">" +
    "<input type=\"submit\" id=\"filterPriceButton\" value=\"price Less than\">" +
    "<p id=\"errorMsg\"></p>";

var inputField = function () {
    document.body.innerHTML += inputHtml;

};
inputField();

var button = document.getElementById("filterPriceButton");

var filterTable = function (value) {
    newCars = cars.filter(function (car) {
        return car.price < value;
    });
    var newRows = newCars.map(carToRow);
    carTable(newRows);
};

button.addEventListener("click", function (e) {
    var input = document.getElementById("filterPrice").value;
    if (isFinite(input)) {
        console.log(input);
        filterTable(input);
    } else {
        document.getElementById("errorMsg").value = "Not a Number!";
    }
    e.preventDefault();
});