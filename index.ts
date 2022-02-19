// Import stylesheets
import { Person } from './person';
import './style.css';

//Constantes
const myAge: Number = 20;
const myName: String = 'Luca';
const myPetName: String = 'Chice';

//Declarando variáveis com let

let mySentence: String = `
Lista de compras :
- Pao
- Leite
`;
let myVar1: String = 'Palavra';
let myVar2: Number = 20;

//Uso do console.log
console.log('Avião');

//Laços de repetição
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

//Condicionais
if (myAge == 20) {
  console.log('Isso mesmo');
} else {
  console.log('Incorreto');
}

//Condicionais e Laços
for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
//Declarando tipos enumerados
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;

enum ColorWithReferences {
  Red = 1,
  Green = 2,
  Blue = 3,
}
let c2: ColorWithReferences = ColorWithReferences.Green;

//Declarando any
let notSure: any = 42;
notSure = 'Maybe a string instead';
notSure = false;

//Declarando void
function aviso(): void {
  console.log('Mensagem de alerta');
}
aviso();

//Declarando functions
function soma(n1: number, n2: number): Number {
  return n1 + n2;
}
console.log(soma(1, 2));

function getAllName(pessoa: { name: String; finalName: String }): String {
  return pessoa.name + ' ' + pessoa.finalName;
}

let p = { name: 'Luca', finalName: 'Clemente' };

console.log(getAllName(p));

let counter = 0;
let intervalId = setInterval(() => {
  counter += 1;
  const counterDiv: HTMLElement = document.getElementById('counterDiv');
  counterDiv.innerHTML = 'Contador: ' + counter;
}, 1000);

let firstName = new Person('Luca');
let middleName = new Person('Clemente');
let lastName = new Person('Cruz');

//Mostrando mensagens na página
let title: String = 'Olá, mundo!';
let paragraph: String = 'sou um parágrafo';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>
<h2> ${title} </h2>
<p> ${paragraph} </p>
<div id='counterDiv'></div>
<button id="appButton" onclick="alertTsMethod()">Alertar</button>
<h3>${
  firstName.getFullName() + middleName.getFullName() + lastName.getFullName()
}</h3>

`;

//Declarando uma função para ser invocada por um evento
const btn = document.getElementById('appButton');
btn?.addEventListener('click', alertTsMethod);

function alertTsMethod(this: HTMLElement, ev: Event) {
  alert('Alertando usando typescript');
}
