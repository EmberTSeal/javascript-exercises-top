const fibonacci = function(num) {
    if(num < 0)
        return 'OOPS'
    else if(num == 1)
        return 1;
    else if(num == 2)
        return 1;
    else{
        let a = 1;
        let b = 1;
        let c;
        for(let i= 1 ; i<=(num-2) ; i++ ){
            c = a + b;
            a = b;
            b = c;
        }
        return c;
    }
};

// Do not edit below this line
module.exports = fibonacci;
