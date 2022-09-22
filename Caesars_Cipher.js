//Caesars Cipher

/* One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.
 */

/* Question:- Write a function which takes a ROT13 encoded string as input and returns a decoded string.
All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on. */


function rot13(str) {
    let arr = [];
    const code = str.split("");
     
     for(let i=0;i<code.length;i++){
         let index = code[i].charCodeAt();//charCodeAt method return Unicode of the characters at a specified index in a String.
        
      //String.fromCharCode() method converts Unicode values to characters.
    if(index>77){
        arr.push(String.fromCharCod(index-13));
          }  
    else if(index<=77&&index>=65){
    arr.push(String.fromCharCode(index+13));
          }
    else if(index<65){
    arr.push(String.fromCharCode(index));
          }
      }      
        return arr.join('');
    }
    
    rot13("SERR PBQR PNZC");

    // 2nd Method

    // function rot13(str) {
    //  return str.replace(/[A-Z]/g, function(c) { 
    //  return String.fromCharCode(c.charCodeAt() + (/[A-M]/.test(c) ? 13 : -13));
    //   });
    // }