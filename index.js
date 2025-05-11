//RESUELVE LOS EJERCICIOS AQUI


// ---------------- EJERCICIO 1 ----------------

let numbers = [4, 5, 6, 7, 8, 9, 10];

const elevados = () => {
    let newArr = numbers.map((num) => num ** num);
    return newArr;
}



// ---------------- EJERCICIO 2 ----------------

let foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot'];

let result2 = foodList.map((str) => {
    if (str === 'Pizza') {
        return `Como soy de Italia, amo comer ${str}`;
    } else if (str === 'Ramen') {
        return `Como soy de Japón, amo comer ${str}`;
    } else if (str === 'Paella') {
        return `Como soy de Valencia, amo comer ${str}`;
    } else {
        return `Aunque no como carne, el ${str} es sabroso`;
    }  
})



// ---------------- EJERCICIO 3 ----------------

const staff = [
  {
    name: 'Pepe',
    role: 'The Boss',
    hobbies: ['leer', 'ver pelis']
  },
  {
    name: 'Ana',
    role: 'becaria',
    hobbies: ['nadar', 'bailar']
  },
  {
    name: 'Luis',
    role: 'programador',
    hobbies: ['dormir', 'comprar']
  },
  {
    name: 'Carlos',
    role: 'secretario',
    hobbies: ['futbol', 'queso']
  }
];

let result3 = staff.map((propiedad) => {
  return `${propiedad.name} es ${propiedad.role} y le gusta ${propiedad.hobbies[0]} y ${propiedad.hobbies[1]}`;
});



// ---------------- EJERCICIO 4 ----------------

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result4 = numbers2.filter(num => num % 2 !== 0);



// ---------------- EJERCICIO 5 ----------------

const foodList2 =[
{
  name: 'Tempeh',
  isVeggie: true
},
{
  name: 'Cheesbacon burguer',
  isVeggie: false
},
{
  name: 'Tofu burguer',
  isVeggie: true
},
{
  name: 'Entrecot',
  isVeggie: false
}];

let checkIfVeggie = foodList2.filter(dish => dish.isVeggie === true);

let result5 = checkIfVeggie.map(
  (str) => {
    if (str.name === 'Tempeh') {
        return `Que rico ${str.name} me voy a comer!`;
    } else {
        return `Que rica ${str.name} me voy a comer!`
    }
  }
);


// ---------------- EJERCICIO 6 ----------------


const inventory = [
  {
    name: 'Mobile phone',
    price: 199
  },
  {
    name: 'TV Samsung',
    price: 459
  },
  {
    name: 'Viaje a Cancún',
    price: 600
  },
  {
    name: 'Mascarilla',
    price: 1
  }
];

let checkValue = inventory.filter(value => value.price > 300);

let result6 = checkValue.map(str => str.name);



// ---------------- EJERCICIO 7 ----------------

let numeros3 = [39, 2, 4, 25, 62];

let result7 = numeros3.reduce((acumulator, value) => acumulator * value);



// ---------------- EJERCICIO 8 ----------------

const sentenceElements = [
  'Me',
  'llamo',
  'Maider',
  'y',
  'quiero',
  'sentir',
  'la',
  'fuerza',
  'con',
  'javascript'
];

let result8 = sentenceElements.reduce((acumulator, value) => acumulator + ' ' + value);



// ---------------- EJERCICIO 9 ----------------

const books = [
  {
    name: ' JS for dummies',
    author: 'Emily A. Vander Veer',
    price: 20,
    category: 'code'
  },
  {
    name: 'Don Quijote de la Mancha',
    author: 'Cervantes',
    price: 14,
    category: 'novel'
  },
  {
    name: 'Juego de tronos',
    author: 'George R. Martin',
    price: 32,
    category: 'Fantasy'
  },
  {
    name: 'javascript the good parts',
    author: 'Douglas Crockford',
    price: 40,
    category: 'code'
  }
];

let checkCode = books.filter(str => str.category === 'code');

let result9 = checkCode.reduce((acumulator, value) => acumulator + value.price, 0);
