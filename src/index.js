const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    var arr = expr.split('');
    
     const res = []; 
     for (let i = 0; i < arr.length; i += 10) { 
     const chunk = arr.slice(i, i + 10); 
     res.push(chunk); 
     } ;
      
     res.forEach(function (i) {
         if(i[0] == 0){
        i.shift()}
     })
    
     res.forEach(function (i) {
         if(i[0] == 0){
        i.shift()}
     })
    
     res.forEach(function (i) {
         if(i[0] == 0){
        i.shift()}
     })
    
     res.forEach(function (i) {
         if(i[0] == 0){
        i.shift()}
     })
    
     res.forEach(function (i) {
         if(i[0] == 0){
        i.shift()}
     })
    
     res.forEach(function (i) {
         if(i[0] == 0){
        i.shift()}
     })
    
     res.forEach(function (i) {
         if(i[0] == 0){
        i.shift()}
     })
    
     res.forEach(function (i) {
         if(i[0] == 0){
        i.shift()}
     })
    
      const res2 = []
    
     res.forEach(function (i) {
         const it = i.join('');
         res2.push(it);
     })
    
     const res3 = []
    
    res2.forEach(function (e) {
    
    const count = parseInt(e.length / 2)
    const ina = [];
    for (i = 0; i < count; i++) {  
      ina.push(e.slice(i * 2, i * 2 + 2))
    }
    res3.push(ina)
    
    })
    
    const res4 = []
    
    res3.forEach(function (i) {
        const int = [];
        i.forEach(function (e) {
            if (e == '10') {
    int.push('.')
        };
        if (e == '11') {
    int.push('-')
        };
        })
        res4.push(int);
    })
    
    const res5 = [] 
    
    res4.forEach(function (i) {
        const int = i.join('');
        res5.push(int);
    })
    
    const res6 = []
    
     const morse = Object.keys(MORSE_TABLE);
    
     res5.forEach(function (i) {
         const mor = i;
         if(morse.includes(mor)) {
             res6.push(MORSE_TABLE[i])
         }
         if (i == '') {
             res6.push(' ')
         }
     })
    
    const res7 = res6.join('');
    
     return res7
     } 


module.exports = {
    decode
}
