let searchVelue = "";
// let MainFormHandler = document.querySelectorAll("#InputForm");
// console.log(MainFormHandler);
// MainFormHandler[0].addEventListener('keyup', console.log(123));

document.getElementById("MainForm").onkeyup = function changer() {
    const basicWord = document.querySelector(".BasicWord").value;
    const compulsoryWord = document.querySelector(".CompulsoryWord").value;
    const orWord01 = document.querySelector(".OrWord01").value;
    const orWord02 = document.querySelector(".OrWord02").value;
    const searchOuput = document.querySelector(".MainInput");
    
    let compulsoryWordConverter = 
    (compulsoryWord.length === 0) ? compulsoryWord : `"${compulsoryWord}"`
    ;
    
    let orWordConverter = 
    (orWord01.length === 0 || orWord02.length === 0) ? orWord01 : `(${orWord01} | ${orWord02})`
    ;
    
    
    searchOuput.value = `${basicWord} ${compulsoryWordConverter} ${orWordConverter}`;
    searchVelue = searchOuput.value;
}

document.querySelector(".SearchSubmit").onclick = function searchOrder() {
    window.open(`https://www.google.com/search?q=${searchVelue}`);
}