//Palindrome Checker

/* Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2. 

palindrome("almostomla") should return false.

palindrome("1 eye for of 1 eye.") should return false.
*/

/* /g is global regex.So it'll operate on multiple matches in the string. 
[ ... ] This creates a character set. Basically it'll match any single character within the listed set of characters.
\W_ This matches the inverse of "word characters" and underscores. Any non-word character.
/ mark the beginning and end of a regular expression.


  [ and ] are the start and end of a character set.
\W means "non-word", as opposed to \w which will match a word.
_ is the "_" character.
g means it's a global search.
*/

function palindrome(str) {
 str = str.toLowerCase().replace(/[\W_]/g, '');
  for(let i = 0, len = str.length - 1; i < len/2; i++) {
    if(str[i] !== str[len-i]) {
      return false;
    }
  }
  return true;
}

palindrome("eye");


/* Explain:
if string is already in lowercase then leave it nothing to do.
str = eye.toLowerCase().replace(/[\W_]/g,'');
for(let i=0,len = 3 -1; 0<2/2;i++){
  if(str[i] !== str[len-i])//str[0]=e and str[len-i]=2=e
  i.e  e!==e {
    return false;
  }
  return true;// for e==e 
}
i++;//i=1

for(i=1;len 3 -1;1<2/2;i++) //not check if condition
return true;  // 1 < 1 condition false 
// i.e it's a palindrome
*/

/* Explain:

i=0 | str[0] = 'a | len-i=9 | str[9] = ‘a’ // true
i=1 | str[1] = ‘l’ | len-i=8 | str[8] = ‘l’ // true
i=2 | str[2] = ‘m’ | len-i=7 | str[7] = ‘m’ // true
i=3 | str[3] = ‘o’ | len-i=6 | str[6] = ‘o’ // true
i=4 | str[4] = ‘s’ | len-i=5 | str[5] =‘t’ // false so it is not a palindrome
*/