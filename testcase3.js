document.getElementById("clickBtn").addEventListener("click", function(){
    let clicks = 0;
    clicks += 1;
    alert("Button clicked " + clicks + " times!");
})

function validateEmail(email){
    return email.includes("@") && email.length > 5 // Poor validation
}

console.log(validateEmail("test.com"));
