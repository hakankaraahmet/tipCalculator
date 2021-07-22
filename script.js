function calculateTip() {
    let amount = document.querySelector("#section1--amount");
    let service = document.querySelector("#section2--service");
    let people = document.querySelector("#section3--people");
    let calculate = document.querySelector("#button");
    let reset = document.querySelector("#reset");
    let result = document.querySelector("#result");
    let audio = new Audio("tarantella-napoletana.mp3");


    calculate.addEventListener("click", () => {
        if (amount.value == 0 || people.value == 0) {
            alert("values can not be null")
        } else if (amount.value < 0 || people.value < 0) {
            alert("values can not be negative number")

        } else if (amount.value == "" || people.value == "") {
            alert("please enter a value")
        } else {
            let tip =Math.round((amount.value * service.value) / people.value);
            result.innerHTML = `amount of tip is ${tip} $ `;
            reset.style.display = "block";
            audio.play();
        }
    })

    reset.addEventListener("click", () =>{
        location.reload();
    })

    calculate.addEventListener("mouseover", () => {
        calculate.style.opacity = 1;
    })
    calculate.addEventListener("mouseout", () => {
        calculate.style.opacity = 0.8;
    })
}

calculateTip();