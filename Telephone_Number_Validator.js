// Telephone Number Validator


/*  Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555

For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false. */
    
    
    function telephoneCheck(str) {
        const reg = /^(1\s?)?(\d{3}|\(\d{3}\))[\s\-]?\d{3}[\s\s-]?\d{4}$/
        return reg.test(str)
      }
      
      telephoneCheck("555-555-5555");

    // 2nd Method
    /* let rex1 = /^(1\s?)?\d{3}([-\s]?)\d{3}\2\d{4}$/,
            rex2 = /^(1\s?)?\(\d{3}\)\s?\d{3}[-\s]?\d{4}$/;
    
        if (rex1.test(str)) {
            return true;
        }
        else {
            return rex2.test(str) ? true : false
        }
    }
    
    telephoneCheck("555-555-5555"); */


    //3rd Method

/* var re = /^([+]?1[\s]?)?((?:[(](?:[2-9]1[02-9]|[2-9][02-8][0-9])[)][\s]?)|(?:(?:[2-9]1[02-9]|[2-9][02-8][0-9])[\s.-]?)){1}([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2}[\s.-]?){1}([0-9]{4}){1}$/;
function telephoneCheck(str) {
  return re.test(str);
}

telephoneCheck("555-555-5555"); */



//Regex Expression
/*    /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/

What does it mean? Let’s break it down:

/^\(?: The number may start with an open parenthesis.

(\d{3}): Then three numeric digits must be entered for valid formats. If there is no parenthesis, the number must start with these digits.

\)?: It allows you to include a close parenthesis.

[- ]?: The string may optionally contain a hyphen. It can be placed either after the parenthesis or following the first three digits. For example, (123)- or 123-.

(\d{3}): Then the number must contain another three digits. For example, it can look like this: (123)-456, 123-456, or 123456.

[- ]?: It allows you to include an optional hyphen in the end, like this: (123)-456-, -123- or 123456-.

(\d{4})$/: Finally, the sequence must end with four digits. For example, (123)-456-7890, 123-456-7890, or 123456-7890.

 */