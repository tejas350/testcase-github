document.getElementById("clickBtn").addEventListener("click", function(){
    let clicks = 0;
    clicks += 1;
    alert("Button clicked " + clicks + " times!");
})

function validateEmail(email){
    return email.includes("@") && email.length > 5 // Poor validation
}
function x(){
    console.log("Hello");
}
console.log(validateEmail("test.com"));
