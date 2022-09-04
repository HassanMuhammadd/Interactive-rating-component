let rates = document.querySelectorAll(".rates div");
for (let i = 0; i < 5; i++) {
    rates[i].onclick = function() {
        for (let j = 0; j < 5; j++) {
            rates[j].classList.remove("active");
        }
        rates[i].classList.add("active");
    }
}

function submit() {
    for (let i = 0; i < 5; i++) {
        if (rates[i].classList.contains("active")) {
            localStorage.setItem("finalRate", rates[i].textContent);
        }
    }
    window.location.href = "thankYou.html";
}