//  This file has our application code. 
//  Complete this code so all QUnit tests pass. 
//  We have defined an App object that interacts with the user.
//  It includes an example of many common programming constructs. 

var App = {
  launch: function () {
    App.getFirstName();
    App.getLastName();
    App.getWidth();
    App.getLength();
    App.calculateArea();
    App.estimateCount();
    App.showExample();

  },
  getFirstName: function () {
    let answer = prompt("What is your first name?", "Awesome");
    if (answer != null) {
      document.getElementById("first").innerHTML = answer;
    }
  },
  getLastName: function () {
    let answer = prompt("What is your last name?", "Lilly");
    if (answer != null) {
      document.getElementById("last").innerHTML = answer;
    }
  },
  getWidth: function () {
    let answer = prompt("What is the width of your farm in miles?", 5);
    if (answer != null) {
      document.getElementById("width").innerHTML = answer;
    }
  },
  getLength: function () {
    let answer = prompt("What is the length of your farm in miles?", 5);
    if (answer != null) {
      document.getElementById("length").innerHTML = answer;
    }
  },
  calculateArea: function () {
    let inputWidth = parseFloat(document.getElementById("width").innerHTML);
    let inputLength = parseFloat(document.getElementById("length").innerHTML);
    if (inputWidth < 1) { inputWidth = 1; }
    if (inputLength < 1) { inputLength = 1; }
    if (inputWidth > 100) { inputWidth = 100; }
    if (inputLength > 100) { inputLength = 100; }
    let answer = inputWidth * inputLength;
    document.getElementById("area").innerHTML = answer;
    alert("You have about " + answer + " square miles.");
  },
  estimateCount: function () {
    let area = parseFloat(document.getElementById("area").innerHTML);
    let count;
    if (area < 1) { count = 0; }
    else { count = area }; // estimate 1 per square mile
    document.getElementById("count").innerHTML = count;
    alert("You could have about " + count + " sheep.");
  },
  showExample: function () {
    document.getElementById("displayPlace").innerHTML = "";
    document.getElementById("btnExplore").style.display = 'block' ;
    let totalCount = parseFloat(document.getElementById("count").innerHTML);
    for (var i = 0; i < totalCount; i++) {
      App.addImage(i);
    }
  },
  addImage: function (icount) {
    var imageElement = document.createElement("img");
    imageElement.id = "image" + icount;
    imageElement.class = "picture";
    imageElement.style.maxWidth = "90px";
    var displayElement = document.getElementById("displayPlace");
    displayElement.appendChild(imageElement);
    document.getElementById("image" + icount).src = "59-images-of-baby-lamb-clipart-you-can-use-these-free-cliparts-for-sEfudv-clipart.jpg";
  },
  explore: function () {
    alert("Would you like to learn more? \n\n Run the app in Chrome.\n\n"+ 
    "Right-click on the page, and click Inspect. Click on the Elements tab.\n\n" +
    "Hit CTRL-F and search for displayPlace to see the new image elements you added to the page.\n")
  }
};

