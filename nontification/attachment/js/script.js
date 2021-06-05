import data from './data.js';

const numberID = document.getElementById('numberID');
const titleContent = document.getElementById('titleContent');
const content = document.getElementById('content');
const inputBlock = document.getElementById('inputBlock');
const toggleInputBox = document.getElementById('toggleInputBox');
const arrowLeftBtn = document.getElementById('arrowLeftBtn');
const arrowRightBtn = document.getElementById('arrowRightBtn');


window.addEventListener('keyup', (event) => {

    // if(event.key === "ArrowRight") {
    //     console.log(312)
    // } else if (event.key === "ArrowLeft") {
    //     console.log(444)
    // }
})

function createInputRadio(array, domElem) {
    let input;
    array.map((item) => {
        input = document.createElement('input');
        input.type = 'radio';
        input.name = 'radio';
        input.classList.add('input_toggle');
        domElem.append(input);
        input.setAttribute('data-id', item.id);
    })
};

createInputRadio(data, toggleInputBox);

function findId(array, dataId) {
    return array.find(({id}) => {
        return id === Number(dataId)
    })
};

function createDomEleneWinthContent(domElem, content, toAppend) {
    let element = document.createElement(domElem);
    element.innerHTML = content;
    toAppend.innerHTML = '';
    toAppend.append(element);
};

inputBlock.addEventListener('click', (event) => {
    const target = event.target;
    const ID = target.getAttribute('data-id');
    const res =  findId(data, ID);

    const inputs = toggleInputBox.querySelectorAll('input');
    const inputChecked = document.querySelector('input[name="radio"]:checked');
    
    if(target.tagName === 'INPUT') {
        // const ID = target.getAttribute('data-id');
        // const res =  findId(data, ID);

        createDomEleneWinthContent('h2', res.id, numberID);
        createDomEleneWinthContent('h3', res.title, titleContent);
        createDomEleneWinthContent('div', res.phrase, content);
    } else if (target === arrowRightBtn || target === 'ArrowRight') {
        if(!inputChecked.nextElementSibling) {
            inputs[0].checked = true
        } else {
            inputChecked.nextElementSibling.checked = true;
            // createDomEleneWinthContent('h2', res.id, numberID);
            // createDomEleneWinthContent('h3', res.title, titleContent);
            // createDomEleneWinthContent('div', res.phrase, content);
        }
    } else if (target === arrowLeftBtn || target === 'ArrowLeft') {
        if(!inputChecked.nextElementSibling) {
            inputs[0].checked = true;
            // createDomEleneWinthContent('h2', res.id, numberID);
            // createDomEleneWinthContent('h3', res.title, titleContent);
            // createDomEleneWinthContent('div', res.phrase, content);
        } else {
            inputChecked.nextElementSibling.checked = true;
        }
    }
});

// arrowRightBtn.addEventListener('click', (e) => {
//     const inputs = toggleInputBox.querySelectorAll('input');
//     const res = document.querySelector('input[name="radio"]:checked');

//     if(!res.nextElementSibling) {
//         inputs[0].checked = true
//     } else {
//         res.nextElementSibling.checked = true;
//     }
// });