var uniqueRandoms = [];
var numRandoms = 0;

function makeUniqueRandom() {
    if (!uniqueRandoms.length) {
        for (var i = 0; i < numRandoms; i++) {
            uniqueRandoms.push(i + 1);
        }
    }
    var index = Math.floor(Math.random() * uniqueRandoms.length);
    var val = uniqueRandoms[index];

    // remove the value from the array so it won't be reused
    uniqueRandoms.splice(index, 1);
    return val;
}

function calculate() {
    numRandoms = document.getElementById("mainform").elements.namedItem("numstudents").value;
    $("#results").empty();
     $("#results").show();
    for (var i = 0; i < numRandoms; i++) {
        var rand = makeUniqueRandom();
        $("#results").append(rand + "<br>");
    }
   
}