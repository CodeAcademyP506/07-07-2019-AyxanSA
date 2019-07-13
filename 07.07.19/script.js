var targetBack = document.getElementById("rightdiv").children
var nextBtn = document.getElementById("nxtBtn")
var clrArr = [];
var check = 0;

function checkFinal() {

    if (check == 6) {
        document.body.innerHTML = ""
        var suprise = document.createElement("h1")
        suprise.innerText = "TƏBRİKLƏR"
        suprise.style.color = "red";
        suprise.style.textAlign = "center";
        document.body.append(suprise)
    }
}


nextBtn.addEventListener("click", function () {
    for (let i = 0; i < targetBack.length; i++) {
        targetBack[i].style.backgroundColor = ""
        clrArr = []
        console.log(clrArr)
    }
})

var flags = [
    {
        az: ["blue", "red", "green"],
        tr: ["red", "red", "red"],
        ru: ["white", "blue", "red"],
        ukr: ["blue", "blue", "yellow"],
        bol: ["white", "green", "red"],
        hol: ["red", "white", "blue"]
    }
]

var colors = document.getElementsByClassName("colors");

for (let i = 0; i < colors.length; i++) {
    colors[i].addEventListener("dragstart", myDragStart)
}

var dropZones = document.querySelectorAll(".dragDiv div");

for (let i = 0; i < dropZones.length; i++) {
    dropZones[i].addEventListener("dragenter", myDragEnter);
    dropZones[i].addEventListener("dragleave", myDragleave);
    dropZones[i].addEventListener("dragover", myDragOver);
    dropZones[i].addEventListener("drop", myDragDrop)
}

function myDragEnter(e) {
    e.preventDefault()

}

function myDragleave(e) {
    e.preventDefault()
}

function myDragOver(e) {
    e.preventDefault()
}


function myDragStart(e) {
    e.dataTransfer.setData("c", e.target.style.backgroundColor);
}



function myDragDrop(e) {
    e.target.style.backgroundColor = e.dataTransfer.getData("c")

    if (clrArr.length != 3) {
        clrArr.push(e.target.style.backgroundColor)
    } else {
        clrArr = []
        clrArr.push(e.target.style.backgroundColor)
    }

    if (clrArr.length == 3 && targetBack[0].style.backgroundColor != ""
        && targetBack[1].style.backgroundColor != ""
        && targetBack[2].style.backgroundColor != "") {
        for (let item in flags) {
            if (flags[item].az.toString() == clrArr.toString() && flags[item].az.toString() != "true") {
                flags[item].az = ["true"];
                check++;
                checkFinal()
                var azFlag = document.getElementById("az")
                azFlag.style.color = "green";
                azFlag.style.fontSize = "1.1em"
                azFlag.innerText += ": Təbriklər"
                return;
            } else if (flags[item].tr.toString() == clrArr.toString() && flags[item].tr.toString() != "true") {
                flags[item].tr = ["true"];
                check++;
                checkFinal()
                var trFlag = document.getElementById("tr")
                trFlag.style.color = "green";
                trFlag.style.fontSize = "1.1em"
                trFlag.innerText += ": Təbriklər"
                return;
            } else if (flags[item].ru.toString() == clrArr.toString() && flags[item].ru.toString() != "true") {
                flags[item].ru = ["true"];
                check++;
                checkFinal()
                var ruFlag = document.getElementById("ru")
                ruFlag.style.color = "green";
                ruFlag.style.fontSize = "1.1em"
                ruFlag.innerText += ": Təbriklər"
                return;
            }
            else if (flags[item].ukr.toString() == clrArr.toString() && flags[item].ukr.toString() != "true") {
                flags[item].sp = ["true"];
                check++;
                checkFinal()
                var ukrFlag = document.getElementById("ukr")
                ukrFlag.style.color = "green";
                ukrFlag.style.fontSize = "1.1em"
                ukrFlag.innerText += ": Təbriklər"
                return;
            } else if (flags[item].bol.toString() == clrArr.toString() && flags[item].bol.toString() != "true") {
                flags[item].bol = ["true"];
                check++;
                checkFinal()
                var bolFlag = document.getElementById("bol")
                bolFlag.style.color = "green";
                bolFlag.style.fontSize = "1.1em"
                bolFlag.innerText += ": Təbriklər"
                return;
            } else if (flags[item].hol.toString() == clrArr.toString() && flags[item].hol.toString() != "true") {
                console.log("Tebrikler")
                flags[item].ir = ["true"];
                check++;
                checkFinal()
                var holFlag = document.getElementById("hol")
                holFlag.style.color = "blue";
                holFlag.style.fontSize = "1.1em"
                holFlag.innerText += ": Təbriklər"
                return;
            } else {
                console.log("Siz bu bayrağı artıq düzətmisiniz və ya sistemdə belə bir bayraq yoxdur");
                return;
            }
        }
    }
}