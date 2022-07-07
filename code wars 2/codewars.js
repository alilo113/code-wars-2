// MakeUpperCase
  
function MakeUpperCase (str){
    return str.toUpperCase();
}

console.log(MakeUpperCase("hello world"));

console.log("--------------------------------------");

// Vowel remover

function shortCut (string){
    return string.replace( /a|e|i|o|u|y/g , "");
}

console.log(shortCut("hello"));
console.log(shortCut("how are you today"));
console.log(shortCut("complane"));
console.log(shortCut("never"));

console.log("--------------------------------------");

// Function 2 - squaring an argument

function square(n){
    return n * n;
}

console.log(square(3));

console.log("--------------------------------------");

// How many lightsabers do you own?

function howManyLightsabersDoYouOwn (name){
   if(name === "zach"){
       return 18;
   }else{
       return 0;
   }
}

console.log(howManyLightsabersDoYouOwn("zach"));
console.log(howManyLightsabersDoYouOwn("adam"));