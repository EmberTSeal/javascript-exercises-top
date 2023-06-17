const palindromes = function (string) {
    string = Array.from(string.toLowerCase());
    for(let i = 0; i< string.length; ){
        if(string[i] === ',' || string[i] === '.' || string[i] === '!' || string[i] === ' '){
            string.splice(i, 1);
        }
        else
            i++;
    }
    
    string = string.join('');
    let reversed = Array.from(string).reverse().join('');
    return reversed === string;
   
};


// Do not edit below this line
module.exports = palindromes;
