const form = document.querySelector("form")
// this case will give you empty
// const height = parseInt(document.querySelector("#height").value)

form.addEventListener("submit", function (e) {
    e.preventDefault()

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const result = document.querySelector(".result")

    // console.log(height, weight)
    if (height === "" || height < 0 || isNaN(height)) {
        result.style.color = "red"
        result.innerHTML = `Please give a valid height ${height}`
    } else if (weight === "" || weight < 0 || isNaN(weight)) {
        result.style.color = "red"
        result.innerHTML = `Please give a valid weight ${weight}`

    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        // show result
        result.style.color = "green"
        result.innerHTML = `<span>${bmi}</span>`

        const des = document.querySelector(".des")

        if (bmi < 18.6) {
            des.innerHTML = "Under Weight"
        } else if (bmi > 24.9) {
            des.innerHTML = "Over Weight"
        } else {
            des.innerHTML = "Normal Weight"
        }
    }
})