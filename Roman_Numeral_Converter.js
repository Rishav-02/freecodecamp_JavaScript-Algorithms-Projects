//Roman Numeral Converter

//Question:Convert the given number into a roman numeral.
//All roman numerals answers should be provided in upper-case.


/* for (key in object) {
    // body of for...in
} 

In each iteration of the loop, a key is assigned to the key variable. The loop continues for all object properties.
*/

function convertToRoman(num) {
    let numerals = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roman_number ="";

     for (let i in numerals ) {
       while ( num >= numerals[i] ) {
         roman_number =roman_number + i;
         num =num - numerals[i];
       }
     }
     return roman_number;
   }
   
   convertToRoman(36);

   /* Test cases:
   convertToRoman(3999) should return the string MMMCMXCIX.
   convertToRoman(2014) should return the string MMXIV
 */