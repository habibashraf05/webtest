// get percentage calculation formula

function getperc() {



    var name = prompt("Enter your name")
    let obtMarks = document.getElementById("Obt1").value ;
    let tmMarks = document.getElementById("Tm1").value ;
    let res = (obtMarks / tmMarks) * 100;
    document.querySelector("#res").innerHTML=(` <h1> Dear ${name} your percentage is ${res} </h1>`)
    alert(res)
    console.log("Dear " + name + " your percentage is " +res)


}