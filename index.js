///set variables
let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth = 0;
let inventory = ["stick"];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

const text = document.querySelector("#text");

const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");

const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

const weapons = [
  {
    name: "stick",
    power: 5,
  },
  {
    name: "dagger",
    power: 30,
  },
  {
    name: "claw hammer",
    power: 50,
  },
  {
    name: "sword",
    power: 100,
  },
];

const monsters = [
  {
    name: "slime",
    level: 2,
    health: 15,
  },
  {
    name: "fanged beast",
    level: 8,
    health: 60,
  },
  {
    name: "dragon",
    level: 20,
    health: 300,
  },
];

const locations = [
  {
    name: "town square",
    buttonText: ["Go to store", "Go to cave", "Fight dragon"],
    buttonFunction: [goStore, goCave, fightDragon],
    text: 'You are in the town square. You see a sign that says "Store".',
    pic: "e671ee4fbb7ad2339be802d54585df8a.jpg",
  },
  {
    name: "store",
    buttonText: [
      "Buy 10 health (10 gold)",
      "Buy weapon (30 gold)",
      "Go town square",
    ],
    buttonFunction: [byHealth, byWeapon, goTown],
    text: "You enter the store.",
    pic: "4bc680b108f0697a0c246c62c20731a8.jpg",
  },
  {
    name: "cave",
    buttonText: ["Fight slime", "Fight fanged beast", "Go town square"],
    buttonFunction: [fightSlime, fightBeast, goTown],
    text: "You enter the cave. You see some monsters!",
    pic: "4bc680b108f0697a0c246c62c20731a8.jpg",
  },
];

/// functions
function update(location) {
  button1.innerHTML = location.buttonText[0];
  button2.innerHTML = location.buttonText[1];
  button3.innerHTML = location.buttonText[2];
  text.innerHTML = location.text;

  button1.onclick = location.buttonFunction[0];
  button2.onclick = location.buttonFunction[1];
  button3.onclick = location.buttonFunction[2];
}

function goTown() {
  update(locations[0]);
}

function goStore() {
  update(locations[1]);
}

function goCave() {
  update(locations[2]);
}

function byHealth() {
  if (gold >= 10) {
    gold -= 10;
    health += 10;
    goldText.innerText = gold;
    healthText.innerText = health;
  } else {
    text.innerText = "You do not have enough gold to buy health!";
  }
}

function byWeapon() {
  const numberWeapon = weapons.length - 1;
  if (currentWeapon < numberWeapon) {
    if (gold >= 30) {
      gold -= 30;
      currentWeapon += 1;
      goldText.innerHTML = gold;
      let newWeapon = weapons[currentWeapon].name;
      text.innerText = "You now have a " + newWeapon + "!";
      inventory.push(newWeapon);
      text.innerText = "In Your inventory, you have: " + inventory;
    } else {
      text.innerText = "You do not have enough gold to buy weapon!";
    }
  } else {
    text.innerText = "You already have most powerful weapon!";
    button2.innerText = "Sell weapon for 15 gold.";
    button2.onclick = sellWeapon;
  }
}

function sellWeapon() {
  if (inventory.length > 1) {
    gold += 15;
    goldText.innerText = gold;
    let currentWeapon = inventory.shift();
    text.innerText = "You sold a " + currentWeapon + ".";
    text.innerText = "In Your inventory, you have: " + inventory;
  } else {
    text.innerText = "Do not sell your only weapon!";
  }
}

function fightSlime() {}

function fightBeast() {}

function fightDragon() {
  
}
