const text = document.createElement('h1');
text.innerText = 'Ahtyng';
text.classList.add('title');
document.querySelector('body').appendChild(text);
document.querySelector('.title').style.color = 'tomato';

const btn = document.createElement('button');
btn.setAttribute('data-id', 'button');
btn.setAttribute('id', 'btn1');

btn.innerHTML = '<span>Button</span>';
document.querySelector('body').append(btn);

const bodys = document.querySelector('body');

btn.style = `
    padding: 20px;
    font-size: 24px;
    border-radius: 5px;
`;

console.log('bodys', bodys);

console.log('button data', document.querySelector('#btn1'));

// Playing with colors
function setColor(str = '#') {
    let res = str + randomizer();
    if (res.length >= 7) {
        return res;
    }
    return setColor(res);
}
function randomizer() {
    const rnd = Math.floor(Math.random() * 100);
    return rnd < 10 ? `0${rnd}` : String(rnd);
}

function addEvListeners() {
    if (btn) {
        btn.addEventListener('click', (e) => {
            btn.style.color = setColor();
            btn.style.backgroundColor = setColor();
        });
    }
}

addEvListeners();

function pow(number, power) {
    if (power === 1) {
        return number;
    }
    return number * pow(number, power - 1);
}

console.log(pow(3, 2));
