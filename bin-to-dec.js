const ip = document.getElementById('ip');
const btn1 = document.getElementById('btn1');
const head1 = document.getElementById('head1');


btn1.addEventListener('click' , function(){
    let a = ip.value;
    const binRegex = /^[0-1]{2,1000}$/; 
    if(binRegex.test(a)){
        let b = parseInt(a , 2);
        head1.innerText = `The value of Binary Number ${a} in Decimal Number is ${b} `
    }
    else{
        head1.innerText = 'The Number you have entered is NOT a Binary Number'
    }
    

    

    

    
    
    
})
 