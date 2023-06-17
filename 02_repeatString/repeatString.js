const repeatString = function(string, count) {
    let newString = string;
    if(count < 0)
        return 'ERROR'
    else if(count === 0)
        return '';
    for(let i=1; i<count; i++){
        newString += string;
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
