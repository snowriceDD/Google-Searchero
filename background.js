let searchVelue = "";
// let MainFormHandler = document.querySelectorAll("#InputForm");
// console.log(MainFormHandler);
// MainFormHandler[0].addEventListener('keyup', console.log(123));

document.getElementById("MainForm").onkeyup = function changer() {
    const basicWord = document.querySelector(".BasicWord").value;
    const compulsoryWord = document.querySelector(".CompulsoryWord").value;
    const orWord01 = document.querySelector(".OrWord01").value;
    const orWord02 = document.querySelector(".OrWord02").value;
    const andWord01 = document.querySelector(".AndWord01").value;
    const andWord02 = document.querySelector(".AndWord02").value;
    const removeWord = document.querySelector(".RemoveWord").value;
    const subWord = document.querySelector(".SubWord").value;
    const rangeWord = document.querySelector(".RangeWord").value;
    const priceWord = document.querySelector(".PriceWord").value;
    const siteWord = document.querySelector(".SiteWord").value;
    const urlWord = document.querySelector(".UrlWord").value;

    const searchOuput = document.querySelector(".MainInput");
    


    let compulsoryWordConverter = 
    (compulsoryWord.length === 0) ? compulsoryWord : `"${compulsoryWord}"`
    ;
    
    let orWordConverter = 
    (orWord01.length === 0 || orWord02.length === 0) ? orWord01 : `(${orWord01} OR ${orWord02})`
    ;
    
    let andWordConverter = 
    (andWord01.length === 0 || andWord02.length === 0) ? andWord01 : `(${andWord01} AND ${andWord02})`
    ;
    
    searchOuput.value = `${basicWord} ${compulsoryWordConverter} ${orWordConverter} ${andWordConverter}`;
    searchVelue = searchOuput.value;
}

document.querySelector(".SearchSubmit").onclick = function searchOrder() {
    window.open(`https://www.google.com/search?q=${searchVelue}`);
}