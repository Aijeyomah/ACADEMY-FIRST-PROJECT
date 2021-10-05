const changeBody = document//[]


// const thirdBody = changeBody.body.firstElementChild.nextElementSibling
// console.log(thirdBody);



const div = document.getElementsByTagName('div');
console.log(div);



const people = document.getElementById('people').style.color = 'red';
//console.log(people);

const div1 = document.getElementsByClassName('name')
//console.log(div1);

// for (let elem  of changeBody){ 
//     console.log(elem)
// }

//setInterval(()=> document.body.style.background = 'red', 1000)

console.log(navigator.userAgent);

const allElem = document.querySelector('div')
console.log(allElem);


const elem = document.querySelector('#people') // []
console.log(elem); 

// 

//elem.innerHTML += '<a href=""> click me </a>';
elem.textContent += ' My name is Omah';

const user = {
    name: 'Amanda',
    age: 16
};

const field = 'name'
user[field] // Amanda
// getattributes of an elements

const userInfo = document.querySelectorAll('[show-info]')
console.log(userInfo)

for (let div of userInfo ){  
   const field =  div.getAttribute('show-info'); // name
   console.log(field)
    div.textContent = user[field] // Amanda
};


const orderState = document.querySelectorAll('[order-state]')[1];

//console.log(orderState)

orderState.setAttribute('order-state', 'canceled')
orderState.textContent = 'canceled again';

const divElem = document.createElement('div');
console.log(divElem);


divElem.className = 'alert';

divElem.innerHTML =  `<strong>Hi there! </strong> You've read an important message`;

document.body.append(divElem);

setTimeout(()=> divElem.remove(), 5000)

const list = document.querySelector('#list');

const li = document.createElement('li');
li.innerHTML = 'Hello, world';

list.appendChild(li)


const academy = document.querySelector('.academy') //p

const button = document.querySelector('button')
const input = document.querySelector('input')


function displayNames (event){
    console.log(event.type)
    const name = 'Ade';
    return academy.textContent = name;
    
};

// button.onclick = function(event){
//     const name = 'Ade';
//     return academy.textContent = name;
    
// };

button.addEventListener('click', function(event){
    console.log(event.target)
        const name = 'Ade';
      return academy.textContent = name;
        
    });

input.onkeyup = (e)=>{
    console.log(e.target.value)
};

input.onkeydown = (e)=>{
    input.style.border = '2px solid red'
};
onk


















