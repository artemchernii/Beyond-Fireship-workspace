// Declaration:

const regExp = /love/gim;

console.log(regExp.test('artem'));
const _regExp = new RegExp('love', 'gmi');

function checkSubstr(str, subStr) {
    const regExp = new RegExp(subStr);

    return regExp.test(str);
}

console.log(checkSubstr('I love you', 'love'));

// Flags (i,m,g):

// i - doesn't care about lowercase or uppercase, capitalize
console.log(/dick/i.test('dICk hehe')); // true
// g - global search
console.log('I dick my dick'.match(/dick/g)); // ['dick', 'dick']
// m - multi search
const strCats = `1 cat
2 cat
3 cat`;
console.log(strCats.match(/^\d/gm)); //['1','2','3']

// Methods
// match
const mySearch = 'I love you'.match(/like/g) || [];
console.log(mySearch);
console.log('I love you'.match(/love/));
// replace
console.log('I love you'.replace(/love/, 'like'));
// test
console.log(/love/.test('I love you'));

// Classes letter

// \d - any number
// \w - any letter
// \s - space
// \D - everything but not \d
// \W - everything but not \w
// \S - everything but not \s
// . - everything but not \n.

console.log(/. /.test('22 January'));

// Anchors

// ^ - start of the string
// $ - end of the string

// \bWord\b - only word

console.log('anchors:', /^\d\d$/.test('22')); //true
console.log('anchors:', /\bJava\b/i.test('Java Script')); // true
console.log('anchors:', /\b999\b/i.test('Java Script 999'));

// Skip special characters

// [ \ ^ $ ( ) . | ? * + /

console.log(/\^\$/i.test('^$'));

console.log(new RegExp('\\^\\$\\.', 'i').test('^$.'));

// Sets and ranges

// [sdr] - any symbol
// [0-9A-Za-z] - add numb, letters

// []
console.log(/[sdf]/.test('gggggg')); // false
console.log(/[sdf]/.test('ggggggsss')); // true
console.log(/[0-9A-Za-z\!]/i.test('2222'));

// Quantity
// {n} - n quantity of thing
//  {n, } - >=n

console.log(/\d{5}/.test('11111'));

// + {1, }
// ? {0,1}
// * {0,}

console.log(/\d+/.test(1111));

// Greed or laziness

console.log('I "love" or "like" '.match(/".+?"/g));

console.log(/(go){3,}/.test('gogogo'));

console.log('i love you'.match(/(lo)ve/));

console.log('artem chernii'.replace(/(\w+) (\w+)/, '$2 $1'));

console.log(/html|js|css/.test('I love html'));

// Practice

const input = '        ';

console.log(/\S/.test(input));

const input2 = '    I love you      ';

console.log(input2.replace(/\s{3,}/g, ' '));
const checkUrl = 'https://artemchernii.com';

console.log(/http(s)?:\/\/(\w+\.)+\w+$/g.test(checkUrl));
