
// 1.a

const myBtn = document.getElementById("myButton");
const img = document.getElementById("main");
const myBtn2 = document.getElementById("myButton2");
const myBtn3 = document.getElementById("myButton3");

myBtn.addEventListener("click", () => {
    if (img.style.display === "none") {
        img.style.display = "block";
        myBtn.textContent = "Hide";
    } else {
        img.style.display = "none";
        myBtn.textContent = "Show";
    }
});

// 1.b
myBtn2.addEventListener("click", () => {
    img.style.backgroundColor = "blue";
});

// 1.c

myBtn3.addEventListener("click", () => {
    if (img.style.display === "none") {
        img.style.display = "block";
        document.getElementById("name").innerHTML = "Jesna Joseph";
    }
    else {
        img.style.display = "none";
        myBtn3.textContent = "Details";
    }
});


// 2

const btnone = document.getElementById("one");
btnone.addEventListener("click", () => {
    btnone.textContent = "you selected one";
});
btnone.addEventListener("mouseover", () => {
    btnone.style.backgroundColor = "blue";
});
btnone.addEventListener("mouseout", () => {
    btnone.style.backgroundColor = "white";
});

const btntwo = document.getElementById("two");
btntwo.addEventListener("click", () => {
    btntwo.textContent = "you selected two";
});
btntwo.addEventListener("mouseover", () => {
    btntwo.style.backgroundColor = "red";
});
btntwo.addEventListener("mouseout", () => {
    btntwo.style.backgroundColor = "white";
});

const btnthree = document.getElementById("three");
btnthree.addEventListener("click", () => {
    btnthree.textContent = "you selected three";
});
btnthree.addEventListener("mouseover", () => {
    btnthree.style.backgroundColor = "Violet";
});
btnthree.addEventListener("mouseout", () => {
    btnthree.style.backgroundColor = "white";
});


const btnfour = document.getElementById("four");
btnfour.addEventListener("click", () => {
    btnfour.textContent = "you selected four";
});
btnfour.addEventListener("mouseover", () => {
    btnfour.style.backgroundColor = "SlateBlue";
});
btnfour.addEventListener("mouseout", () => {
    btnfour.style.backgroundColor = "white";
});


const btnfive = document.getElementById("five");
btnfive.addEventListener("click", () => {
    btnfive.textContent = "you selected five";
});
btnfive.addEventListener("mouseover", () => {
    btnfive.style.backgroundColor = "pink";
});
btnfive.addEventListener("mouseout", () => {
    btnfive.style.backgroundColor = "white";
});

const btsix = document.getElementById("six");
btsix.addEventListener("click", () => {
    btsix.textContent = "you selected six";
});
btsix.addEventListener("mouseover", () => {
    btsix.style.backgroundColor = "orange";
});
btsix.addEventListener("mouseout", () => {
    btsix.style.backgroundColor = "white";
});


const btnseven = document.getElementById("seven");
btnseven.addEventListener("click", () => {
    btnseven.textContent = "you selected seven";
});
btnseven.addEventListener("mouseover", () => {
    btnseven.style.backgroundColor = "beige";
});
btnseven.addEventListener("mouseout", () => {
    btnseven.style.backgroundColor = "white";
});


const btneight = document.getElementById("eight");
btneight.addEventListener("click", () => {
    btneight.textContent = "you selected eight";
});
btneight.addEventListener("mouseover", () => {
    btneight.style.backgroundColor = "pink";
});
btneight.addEventListener("mouseout", () => {
    btneight.style.backgroundColor = "white";
});
const btnnine = document.getElementById("nine");
btnnine.addEventListener("click", () => {
    btnnine.textContent = "9 is fully occupied please select another number";
    btnten.textContent = "you selected ten";
});
btnnine.addEventListener("mouseover", () => {
    btnnine.style.backgroundColor = "limegreen";
});
btnnine.addEventListener("mouseout", () => {
    btnnine.style.backgroundColor = "white";
});

// 10
const btnten = document.getElementById("ten");
btnten.addEventListener("click", () => {
    btnten.textContent = "you selected ten";
});
btnten.addEventListener("mouseover", () => {
    btnten.style.backgroundColor = "yellow";
});
btnten.addEventListener("mouseout", () => {
    btnten.style.backgroundColor = "white";
});



// 3

const langs = ["JavaScript", "Python", "Swift", "Kotlin", "Ruby", "Go", "Java", "C++", "C#", "PHP"];
const btnsDiv = document.getElementById("languageButtons");
const selLangDiv = document.getElementById("selectedLanguage");

langs.forEach(lang => {
    const btn = document.createElement("button");
    btn.textContent = lang;
    btn.onclick = () => {
        selLangDiv.textContent = `Selected Language: ${lang}`;
    };
    btnsDiv.appendChild(btn);
});

// 4.a

function submitForm() {
    let nm = document.getElementById("name").value;
    let ph = document.getElementById("phone").value;
    let pl = document.getElementById("place").value;
    let comp = document.getElementById("company").value;
    let pn = document.getElementById("pin").value;

    let nmErr = document.getElementById("nameErr");
    let phErr = document.getElementById("phoneErr");
    let plErr = document.getElementById("placeErr");
    let compErr = document.getElementById("companyErr");
    let pnErr = document.getElementById("pinErr");

    nmErr.textContent = "";
    phErr.textContent = "";
    plErr.textContent = "";
    compErr.textContent = "";
    pnErr.textContent = "";

    let isValid = true;

    if (nm == "") {
        nmErr.textContent = "Name is required";
        isValid = false;
    }
    if (ph == "") {
        phErr.textContent = "Phone is required";
        isValid = false;
    } else if (isNaN(ph)) {
        phErr.textContent = "Only numbers are allowed";
        isValid = false;
    } else if (ph.length < 10) {
        phErr.textContent = "Minimum 10 digits required";
        isValid = false;
    }

    if (pl == "") {
        plErr.textContent = "Place is required";
        isValid = false;
    }
    if (comp == "") {
        compErr.textContent = "Company is required";
        isValid = false;
    }
    if (pn == "") {
        pnErr.textContent = "Pin Code is required";
        isValid = false;
    } else if (isNaN(pn)) {
        pnErr.textContent = "Only numbers are allowed";
        isValid = false;
    }


    if (isValid) {
        let formData = {
            name: nm,
            phone: ph,
            place: pl,
            company: comp,
            pin: pn
        };

        localStorage.setItem("formData", JSON.stringify(formData));

        document.getElementById("myForm").reset();

        document.getElementById("prepopBtn").disabled = false;
    }
}

function prepopForm() {
    let storedData = localStorage.getItem("formData");
    if (storedData) {
        let formData = JSON.parse(storedData);
        document.getElementById("name").value = formData.name;
        document.getElementById("phone").value = formData.phone;
        document.getElementById("place").value = formData.place;
        document.getElementById("company").value = formData.company;
        document.getElementById("pin").value = formData.pin;
    }
}

window.onload = function () {
    if (localStorage.getItem("formData")) {
        document.getElementById("prepopBtn").disabled = false;
    } else {
        document.getElementById("prepopBtn").disabled = true;
    }
};


// 5

function changeTitle() {
    const newTitle = document.getElementById("newTitle").value;
    document.getElementById("titleError").textContent = "";

    if (newTitle.length > 50) {
        document.getElementById("titleError").textContent = "Title should be less than 50 characters.";
    } else {
        document.title = newTitle;
        document.getElementById("newTitle").value = "";
    }
}

window.onload = () => {
    const storedData = localStorage.getItem("formData");
    if (storedData) {
        document.getElementById("prepopulateButton").disabled = false;
    } else {
        document.getElementById("prepopulateButton").disabled = true;
    }
};

// 6
document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.key === 'Enter') {
        alert('Control+Enter pressed!');
    }
});


