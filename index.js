const btn = document.querySelector("#btn");
const date = document.querySelector("#date");
const age = document.querySelector("#age");
const response = document.querySelector("#response");




btn.addEventListener("click", ()=>{
    const dob = new Date(date.value);
    const currentDate = new Date();

    let Age = currentDate.getFullYear() - dob.getFullYear();
    if(currentDate.getMonth() < dob.getMonth() || currentDate.getMonth() == dob.getMonth() && currentDate.getDate() < dob.getDate()){
        Age--;
    }

    age.innerHTML = Age;
    response.style.visibility = "visible"
})