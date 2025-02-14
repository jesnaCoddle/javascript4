
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

const langs = ["JavaScript", "Python", "Java", "C++", "C#", "PHP", "Swift", "Kotlin", "Ruby", "Go"];
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
const form = document.getElementById('user-form');
const prepopulateButton = document.getElementById('prepopulate');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let isValid = true;

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const place = document.getElementById('place').value;
    const company = document.getElementById('company').value;
    const pincode = document.getElementById('pincode').value;

    if (!name) {
        document.getElementById('name-error').textContent = 'Name is required';
        isValid = false;
    } else {
        document.getElementById('name-error').textContent = '';
    }

    if (!phone || isNaN(phone) || phone.length < 10) {
        document.getElementById('phone-error').textContent = 'Valid phone number is required';
        isValid = false;
    } else {
        document.getElementById('phone-error').textContent = '';
    }

    if (!place) {
        document.getElementById('place-error').textContent = 'Place is required';
        isValid = false;
    } else {
        document.getElementById('place-error').textContent = '';
    }

    if (!company) {
        document.getElementById('company-error').textContent = 'Company name is required';
        isValid = false;
    } else {
        document.getElementById('company-error').textContent = '';
    }

    if (!pincode || isNaN(pincode) || pincode.length !== 6) {
        document.getElementById('pincode-error').textContent = 'Valid 6-digit pin code is required';
        isValid = false;
    } else {
        document.getElementById('pincode-error').textContent = '';
    }

    if (isValid) {
        const userDetails = { name, phone, place, company, pincode };
        localStorage.setItem('userDetails', JSON.stringify(userDetails));
        form.reset();
        alert("Form submitted successfully!");
    }
});

prepopulateButton.addEventListener('click', () => {
    const userDetails = JSON.parse(localStorage.getItem('userDetails'));
    if (userDetails) {
        document.getElementById('name').value = userDetails.name;
        document.getElementById('phone').value = userDetails.phone;
        document.getElementById('place').value = userDetails.place;
        document.getElementById('company').value = userDetails.company;
        document.getElementById('pincode').value = userDetails.pincode;
    } else {
        prepopulateButton.disabled = true;
    }
});

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


