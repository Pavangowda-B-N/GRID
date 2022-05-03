function take_Home(){
    document.getElementById("shift").src="SWIGGY/footer.html";
    document.getElementById("weather").style.borderBottom="none";
    document.getElementById("sign_in").style.borderBottom="none";
    var x=document.getElementById("swiggy").style.borderBottom="3px solid red";


}
function take_sign_in(){
    document.getElementById("shift").src="sign-in.html";
    document.getElementById("swiggy").style.borderBottom="none";
    document.getElementById("weather").style.borderBottom="none";
    document.getElementById("sign_in").style.borderBottom="3px solid red";


}
function take_weather(){
    document.getElementById("shift").src="public/clock.html";
    document.getElementById("sign_in").style.borderBottom="none";
    document.getElementById("swiggy").style.borderBottom="none";
    document.getElementById("weather").style.borderBottom="3px solid red";
}