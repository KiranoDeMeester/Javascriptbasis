// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
// ---------------------------------------------
// Mini-opdracht: Animal base + Dog child (bonus: Cat)
// ---------------------------------------------

class Animal {
    constructor(naam, soort){
        this.naam = naam;
        this.soort = soort;
    }

    speak(){
        return `${this.naam} is een ${this.soort}`;
    }
}

class Dog extends Animal {
    constructor(naam){
        super(naam, "hond");
    }

    speak(){
        return `🐕 ${this.naam} blaft!`;
    }
}

class Cat extends Animal {
    constructor(naam){
        super(naam, "kat");
    }

    speak() {
        return `🐈 ${this.naam} miauwt!`;
    }
}

const clsAnimals = [];

function handleAddAnimal(){
    const naam = document.getElementById('pet_name').value.trim();
    const soort = document.getElementById('pet_type').value;
    const list = document.getElementById('pet_list');

    if (!naam || !soort) return;

    let animal
    switch(soort){
        case "hond": animal = new Dog(naam); break;
        case "kat": animal = new Cat(naam); break;
        default: return animal = new Animal(naam, soort);
    }

    clsAnimals.push(animal);

    list.innerHTML = clsAnimals
        .map(a => `<li class="list-group-item">${a.speak()}</li>`)
        .join("");
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('pet_btn')
        ?.addEventListener("click", handleAddAnimal);
    document.getElementById('pet_name')
        ?.addEventListener("keydown", (e) =>{
            if (e.key === 'Enter'){
                 handleAddAnimal();
            };
        });
});