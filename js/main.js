// Notes:Data types: Strings (var text1 = "js wrapped in double quotes")//
// var text1 = "He said \"Hello\"." //
// Numbers: var numberInteger = "2"; var numberFloat = "2.2"//
// Booleans: their values are either true or false. var boolean1 = true; var boolean2 = false //
// Null and undefined: They both indicate no value has been set. undefined means never set, null means empty value //
// Objects are complex data types. var person = { name: "John", age: 39};

console.log("Hello and welcome to my portfolio site")
function menuToggle() {
    console.log("Clicked")
    var navMenu = document.getElementById("js-menu");
    console.log(navMenu.className);
    navMenu.classList.toggle("hide")
}



