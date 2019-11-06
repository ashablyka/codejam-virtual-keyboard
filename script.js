const keyboard = document.createElement('div');
const textarea = document.createElement('textarea');

keyboard.classList.add('keyboard');
document.body.append(textarea);
document.body.append(keyboard);
textarea.classList.add('textarea');
textarea.setAttribute('readonly', 'readonly');

//create rows in keyboard
const rows = new DocumentFragment();

for (let i = 0; i < 5; i++) {
    const row = document.createElement('div');

    row.classList.add('row');
    rows.append(row);
}

keyboard.append(rows);

//create 15 buttons in each row
for (let i = 0; i < 5; i++) {
    const rowN = new DocumentFragment();

    for (let i = 0; i < 15; i++) {
        const key = document.createElement('div');

        key.classList.add('key');
        rowN.append(key);
    }
    keyboard.children[i].append(rowN);
}

//delete unnecessary buttons
keyboard.children[0].children[0].remove();
keyboard.children[2].children[0].remove();
keyboard.children[2].children[1].remove();
keyboard.children[3].children[0].remove();
keyboard.children[4].children[0].remove();
keyboard.children[4].children[1].remove();
keyboard.children[4].children[2].remove();
keyboard.children[4].children[3].remove();
keyboard.children[4].children[4].remove();
keyboard.children[4].children[5].remove();

//create special buttons classes
keyboard.children[0].lastChild.classList.add('backspace');
keyboard.children[1].firstChild.classList.add('tab');
keyboard.children[1].lastChild.classList.add('del');
keyboard.children[2].firstChild.classList.add('capslock');
keyboard.children[2].lastChild.classList.add('enter');
keyboard.children[3].firstChild.classList.add('left-shift');
keyboard.children[3].children[12].classList.add('arrow');
keyboard.children[3].lastChild.classList.add('right-shift');
keyboard.children[4].children[3].classList.add('space');
keyboard.children[4].children[5].classList.add('arrow');
keyboard.children[4].children[6].classList.add('arrow');
keyboard.children[4].children[7].classList.add('arrow');

const buttons = [
    [
        { code: 192, en: '`', ru: 'ё', printable: true },
        { code: 49, en: '1', ru: '1', printable: true },
        { code: 50, en: '2', ru: '2', printable: true },
        { code: 51, en: '3', ru: '3', printable: true },
        { code: 52, en: '4', ru: '4', printable: true },
        { code: 53, en: '5', ru: '5', printable: true },
        { code: 54, en: '6', ru: '6', printable: true },
        { code: 55, en: '7', ru: '7', printable: true },
        { code: 56, en: '8', ru: '8', printable: true },
        { code: 57, en: '9', ru: '9', printable: true },
        { code: 48, en: '0', ru: '0', printable: true },
        { code: 189, en: '-', ru: '-', printable: true },
        { code: 187, en: '=', ru: '=', printable: true },
        { code: 8, en: 'Backspace', ru: 'Backspace', printable: false }
    ],

    [
        { code: 9, en: 'Tab', ru: 'Tab', printable: false },
        { code: 81, en: 'q', ru: 'й', printable: true },
        { code: 87, en: 'w', ru: 'ц', printable: true },
        { code: 69, en: 'e', ru: 'у', printable: true },
        { code: 82, en: 'r', ru: 'к', printable: true },
        { code: 84, en: 't', ru: 'е', printable: true },
        { code: 89, en: 'y', ru: 'н', printable: true },
        { code: 85, en: 'u', ru: 'г', printable: true },
        { code: 73, en: 'i', ru: 'ш', printable: true },
        { code: 79, en: 'o', ru: 'щ', printable: true },
        { code: 80, en: 'p', ru: 'з', printable: true },
        { code: 219, en: '[', ru: 'х', printable: true },
        { code: 221, en: ']', ru: 'ъ', printable: true },
        { code: 220, en: '\\', ru: '\\', printable: true },
        { code: 46, en: 'DEL', ru: 'DEL', printable: false },
    ],

    [
        { code: 20, en: 'Caps Lock', ru: 'Caps Lock', printable: false },
        { code: 65, en: 'a', ru: 'ф', printable: true },
        { code: 83, en: 's', ru: 'ы', printable: true },
        { code: 68, en: 'd', ru: 'в', printable: true },
        { code: 70, en: 'f', ru: 'а', printable: true },
        { code: 71, en: 'g', ru: 'п', printable: true },
        { code: 72, en: 'h', ru: 'р', printable: true },
        { code: 74, en: 'j', ru: 'о', printable: true },
        { code: 75, en: 'k', ru: 'л', printable: true },
        { code: 76, en: 'l', ru: 'д', printable: true },
        { code: 186, en: ';', ru: 'ж', printable: true },
        { code: 222, en: '\'', ru: 'э', printable: true },
        { code: 13, en: 'Enter', ru: 'Enter', printable: false },
    ],

    [
        { code: 16, en: 'Shift', ru: 'Shift', printable: false },
        { code: 226, en: '\\', ru: '\\', printable: true },
        { code: 90, en: 'z', ru: 'я', printable: true },
        { code: 88, en: 'c', ru: 'с', printable: true },
        { code: 67, en: 'v', ru: 'м', printable: true },
        { code: 86, en: 'b', ru: 'и', printable: true },
        { code: 66, en: 'n', ru: 'т', printable: true },
        { code: 78, en: 'm', ru: 'ь', printable: true },
        { code: 77, en: ',', ru: 'б', printable: true },
        { code: 188, en: '.', ru: 'ю', printable: true },
        { code: 190, en: '\/', ru: '.', printable: true },
        { code: 191, en: '\'', ru: '.', printable: true },
        { code: 38, en: '▲', ru: '▲', printable: true },
        { code: 16, en: 'Shift', ru: 'Shift', printable: false },
    ],

    [
        { code: 17, en: 'Ctrl', ru: 'Ctrl', printable: false },
        { code: 91, en: 'Win', ru: 'Win', printable: false },
        { code: 18, en: 'Alt', ru: 'Alt', printable: false },
        { code: 32, en: ' ', ru: ' ', printable: true },
        { code: 18, en: 'Alt', ru: 'Alt', printable: false },
        { code: 37, en: '◄', ru: '◄', printable: true },
        { code: 40, en: '▼', ru: '▼', printable: true },
        { code: 39, en: '►', ru: '►', printable: true },
        { code: 17, en: 'Ctrl', ru: 'Ctrl', printable: false }
    ],
];

let lang = 'en';

fillKeyboard();

function changeLanguage() {

    lang = (lang === 'ru') ? 'en' : 'ru';
    //console.log(lang);
    fillKeyboard();
}


function fillKeyboard() {

    for (let i = 0; i < keyboard.children.length; i++) {
        for (let j = 0; j < keyboard.children[i].children.length; j++) {
            keyboard.children[i].children[j].textContent = buttons[i][j][lang];
        }
    }
}



const body = document.querySelector('body')

body.addEventListener('keydown', (event) => {
    buttons.forEach((i, indexI) => {
        i.forEach((j, indexJ) => {
            if (j.code === event.keyCode) {
                keyboard.children[indexI].children[indexJ].classList.add('pressed');
                printLetter(j[lang]);
            }
        })
    })

})

body.addEventListener('keyup', (event) => {
    buttons.forEach((i, indexI) => {
        i.forEach((j, indexJ) => {
            if (j.code === event.keyCode) {
                keyboard.children[indexI].children[indexJ].classList.remove('pressed');
            }
        })
    })
})


keyboard.addEventListener('click', event => {
    printLetter(event.target.textContent);
})

function printLetter(textContent) {
    buttons.forEach((i) => {
        i.forEach((j) => {
            if (j.en === textContent || j.ru === textContent) {
                if (j.printable) {
                    textarea.textContent = textarea.textContent + textContent;
                }
            }
        })
    })
}

let firstKey;

let lastKey;

body.addEventListener('keydown', (event) => {
    event.preventDefault();
    if (lastKey === event.keyCode) {
        //console.log(event.keyCode);
        return;
    }

    lastKey = event.keyCode;



    if ((firstKey === 16 && event.keyCode === 18) || (firstKey === 18 && event.keyCode === 16)) {
        changeLanguage();
        firstKey = undefined;
        return;
    }

    if (event.keyCode === 16 || event.keyCode === 18) {
        //console.log(event.keyCode);
        firstKey = event.keyCode;
        //console.log(firstKey);
    }
})

body.addEventListener('keyup', (event) => {

    if (event.keyCode === 16 || event.keyCode === 18) {
        firstKey = undefined;
    }
})
