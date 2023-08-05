// Queston 1:
// Use the array of shop items provided and present the the information in the following format

// ```
// =======================================
// Name: 	 Air Max 97
// Price: 	 130
// About: 	 The design of the shoe is commonly thought to be inspired by the bullet trains of Japan, but the design was inspired by mountain bikes. 
// Category: shoes
// =======================================
// Name: 	 Adidas NMD R1
// Price: 	 128
// About: 	 New-wave classics, with a timeless vintage design: men’s NMD R1 gear is the ultimate go-anywhere shoe. Vibrant styles and soft cushioning will have you gliding through life, wherever it may take you.
// Category: shoes
// =======================================
// Name: 	 Gucci Oversize T-shirt with Interlocking G
// Price: 	 580
// About: 	 The now recognizable oversize Gucci T-shirt continues to evolve with each new collection, the Interlocking G print is influenced by an '80s design from the archives. Streetwear continues to be a defining feature of Gucci's collections and is often juxtaposed by tailored separates.
// Category: shirts
// =======================================
// Name: 	 Nike Sportswear Club
// Price: 	 18.97
// About: 	 The Nike Sportswear Club T-Shirt is made with our everyday cotton fabric and a classic fit for a familiar feel right out of the bag. An embroidered Futura logo on the chest provides a signature Nike look.
// Category: shirts
// =======================================
// Name: 	 Spanx Flare Jeans, Vintage Indigo
// Price: 	 148
// About: 	 These 70s inspired flare jeans are the perfect wear everywhere with anything style. Designed with premium stretch denim, high-rise coverage and hidden core shaping technology, this jean puts a new twist on a retro silhouette.
// Category: pants
// =======================================
// Name: 	 Bonobos Premium Stretch Jeans
// Price: 	 69
// About: 	 Resilient stretch denim made incredibly soft. Yes, jeans can be unbelievably comfortable.
// Category: pants
// ```

const shopItems=[{
    id:1,
    name:"Air Max 97",
    price:130.00,
    desc:"The design of the shoe is commonly thought to be inspired by the bullet trains of Japan, but the design was inspired by mountain bikes. ",
    category:"shoes"
},{
    id:2,
    name:"Adidas NMD R1",
    price:128,
    desc:"New-wave classics, with a timeless vintage design: men’s NMD R1 gear is the ultimate go-anywhere shoe. Vibrant styles and soft cushioning will have you gliding through life, wherever it may take you.",
    category:"shoes"
},{
    id:3,
    name:"Gucci Oversize T-shirt with Interlocking G",
    price:580,
    desc:"The now recognizable oversize Gucci T-shirt continues to evolve with each new collection, the Interlocking G print is influenced by an '80s design from the archives. Streetwear continues to be a defining feature of Gucci's collections and is often juxtaposed by tailored separates.",
    category:"shirts"
},{
    id:4,
    name:"Nike Sportswear Club",
    price:18.97,
    desc:"The Nike Sportswear Club T-Shirt is made with our everyday cotton fabric and a classic fit for a familiar feel right out of the bag. An embroidered Futura logo on the chest provides a signature Nike look.",
    category:"shirts"
},{
    id:5,
    name:"Spanx Flare Jeans, Vintage Indigo",
    price:148,
    desc:"These 70s inspired flare jeans are the perfect wear everywhere with anything style. Designed with premium stretch denim, high-rise coverage and hidden core shaping technology, this jean puts a new twist on a retro silhouette.",
    category:"pants"
},{
    id:6,
    name:"Bonobos Premium Stretch Jeans",
    price:69,
    desc:"Resilient stretch denim made incredibly soft. Yes, jeans can be unbelievably comfortable.",
    category:"pants"
}]

// create function that takes in the array and prints each item out
function printItems(items) {
    for (const item of items) {
        console.log("=======================================")
        console.log("Name: ", item.name)
        console.log("Price: ", item.price)
        console.log("About: ", item.desc)
        console.log("Category: ", item.category)
    }
}

printItems(shopItems)





// Question 2:
// Write a function that parses through the below object and displays all of their
// favorite food dishes as shown:
// ```
// pizza contains:
// Deep Dish
// South Side Thin Crust
// tacos contains:
// Anything not from Taco bell
// burgers contains:
// Portillos Burgers
// ice_cream contains:
// Chocolate
// Vanilla
// Oreo
// shakes contains:
// oberwise contains:
// Chocolate
// dunkin contains:
// Vanilla
// culvers contains:
// All of them
// mcDonalds contains:
// Sham-rock-shake
// cupids_candies contains:
// Chocolate Malt
// ```
// Note:  The solution should work on any object with values of strings, numbers, objects, and arrays not just this specific object

const hwPerson = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

// use for loop to iterate over each property of object (obj)
// create variable to assign key
// check to see if variable is an array
// if it is, print everything in the array
// if value is string, print it
// if value is object 
// use nested for loop to iterate over each key in first index object of array
// print the key and the joined values
// 

function showFavFoods(obj) {
    for (const key in obj) {
        console.log(key + " contains:")
        const value = obj[key];
        if (Array.isArray(value)) {
            value.forEach(item => {
                console.log(item)
            })
        } else if (typeof value === 'string') {
            console.log(value)
        } else if (typeof value === 'object') {
            for (const nestedKey in value[0]) {
                console.log(nestedKey + ":")
                console.log(value[0][nestedKey].join('\n'))
            }
        }
        console.log('')
    }
}

console.log(showFavFoods(hwPerson))






// Question 3:

// Create a Promised based function that will check a string to determine if it's length is greater than 10.
// If the length is greater than 10 then resolve it and console log "Big word". 
// If the length of the string is less than 10 then reject it and  console log "Small String"

// Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
function stringLength (string) {
    return new Promise((resolve, reject) => {
        if (string.length > 10) {
            resolve(console.log("Big Word"))
        } else {
            reject(console.log("Small String"))
        }
    })
}

stringLength("What is my name")
stringLength("Hey")






// Question 4:
// Create a base class of GameMember and 2 children classes of Dealer, Player
// both dealer and player have:
// hand : array of 2 numbers (1-13) ex: [5, 12] which starts with 2 random numbers
// hit() : ability to add  a random number [1-13] to their hand
// When a Dealer trys to hit he can only hit if he has his hand adds up to less than a total of 17 (so 16 and under)
// When a Player hits they can hit as long as their total is under 21
// Use the randomNumber function provided below to gernerate a random number 1-12


// function gernerates random number 1-12
// Math allows for math operations, .floor rounds down to nearest number
// use .random to generate the random number, + 1 makes sure that it is between 1 and 12 instead of 0
function randomNumber() {
    return Math.floor(Math.random() * 12) + 1
}

// create GameMember class (base class)
// constuctor is left empty since no specific parameters are being passed in 
// use this.hand to create the hand and declares that it is going to be a two random number array
// call the randomNumber function as both numbers to make sure theyre both random nums
class GameMember {
    constructor() {
        this.hand = [randomNumber(), randomNumber()]
    }
    hit() {
        this.hand.push(randomNumber())
    }
}

// create Dealer subclass
// use extends to inherit GameMember properties
class Dealer extends GameMember {
    // create method to calculate the total card value in the hand
    // use .reduce() to iterate over each array item and return single value
    // use arrow function to add the current card value (total) and add the new card to that value
    // has to start from 0
    calculateTotal() {
        return this.hand.reduce((total, card) => total + card, 0)
    }
    // call hit method and if total hand value is 16 or less (use calculateTotal), add new card
    hit() {
        if (this.calculateTotal() <= 16) {
            super.hit()
        }
    }
}

// create Player subclass
// use extends to inherit GameMember properties
// similar to Dealer class
// instead of <= 16, player can continue to hit as long as hand value is under 21
class Player extends GameMember {
    calculateTotal() {
        return this.hand.reduce((total, card) => total + card, 0)
    }
    hit() {
        if (this.calculateTotal() < 21) {
            super.hit()
        }
    }
}

const dealer = new Player
const player = new Dealer

console.log('Dealer hand: ', dealer.hand)
console.log('Player hand: ', player.hand)

dealer.hit()
player.hit()

console.log('\nDealer hand: ', dealer.hand)
console.log('Player hand: ', player.hand)






// Question 5:

// Complete 3 Codewars problems using JavaScript, start with ones you have already solved in python.  Paste a link here to the 3 questions you completed



// Solution 1:
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// create an empty array
// use for loop to iterate through each char in word
// loop needs to continue as long as i is < length of string
// try using ++ to keep increasing counter by 1
// make if statement if word is uppercase (use .toUpperCase built in funcion),
// add its index to the array
var capitals = function (word) {
	const upperIndex = []
  for (let i=0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      upperIndex.push(i)
    }
  }
  return upperIndex
};

const wrd = "CodEWaRs"
console.log(capitals(wrd))




// Solution 2:
// Your job is to write a function, which takes three integers a, b, and c as arguments, and returns True if exactly two of of the three integers are positive numbers (greater than zero), and False otherwise.

// in js, use ++ instead of += to add to counter, === instead of ==

function twoArePositive(a, b, c) {
    let positiveNums = 0
    
    if (a > 0) {
      positiveNums++
    }
      if (b > 0) {
      positiveNums++
    }
      if (c > 0) {
      positiveNums++
    }
    return positiveNums === 2
  }
    
  console.log(twoArePositive(-5,7,2))
  console.log(twoArePositive(-4,-66,40))




// Solution 3:
// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// use const when defining constant variable
// word.length instead of len(word)
// === instead of ==
// use floor math (Math.floor) when doing math
// slice method is .slice instead of :
// everythong else pretty much the same

function getMiddle(s) {
    const length = s.length
    const middleLetter = Math.floor(length / 2)
    
    if (length % 2 === 0) {
      const even1 = middleLetter - 1
      const even2 = middleLetter + 1
      return s.slice(even1,even2)
    } else {
      return s[middleLetter] 
    }
  }
  
  console.log(getMiddle("middle"))
  console.log(getMiddle("hello"))
  console.log(getMiddle("test"))


