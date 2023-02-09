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
    let n = ''
    let ls = expr.length / 10
    let i = 0
    let i1 = 0
    let nmas = []
    let s = ''
    let srez = ''
    let k = ''
    let rez = ''
    for (i = 0; i < ls; i++) {
        if (i == 0) {
            n = expr.substring(0, 10)
            if (n != '**********') {
                k = MORSE_TABLE[dekod(n)]
            } else {
                k = ' '
            }
        } else {
            n = expr.substring(i*10, i*10+10)
            if (n != '**********') {
                k = MORSE_TABLE[dekod(n)]
            } else {
                k = ' '
            }
        }
        rez = rez + k
    }
    function dekod(n) {
        srez = ''
        i1 = 0
        if (n != '**********') {
            nmas = n.split('')
            while (i1 < nmas.length) {
                if (nmas[i1] == '0') {
                    nmas.shift();
                    i1 = i1 - 1
                } else {break}
                i1++
              }
              let l = nmas.length / 2
              for (i1 = 0; i1 < l; i1++) {
                s = nmas[i1*2] + nmas[i1*2 + 1];
                if (s == '10') {
                    s = '.'
                } else {
                    s = '-'
                }
                srez = srez + s;
              }
        } else {
              srez = ' '
        }
        return srez
    }
    return rez
}

module.exports = {
    decode
}