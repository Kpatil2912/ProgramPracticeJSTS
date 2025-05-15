/*
Question:
Write a JavaScript function called `captosmall` that takes a string as input and returns a new string where every lowercase letter is converted to uppercase, and every uppercase letter is converted to lowercase. Non-alphabetic characters should remain unchanged.

Example:
Input: "Try programiz.pro"
Output: "tRY PROGRAMIZ.PRO"
*/
function captosmall(str){
    let toggled = '';
    
     for(let x of str){
         if(x >= 'a' && x <= 'z'){
           toggled += x.toUpperCase();
        } else if(x >= 'A' && x <= 'Z'){
            toggled +=  x.toLowerCase();   
        } else{
            toggled += x;
        }
     }
     return  toggled ;
}
console.log(captosmall("Try programiz.pro"));