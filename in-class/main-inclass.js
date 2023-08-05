console.log('Matrix JS Day 2')

const today = new Date()
console.log(today)

// Parsing (indexing) Exercise:

const person2 = {
    name: "Max",
    age:31,
    progLanguages:['JavaScript','Python','C++', 'Java'],
    favColor: "Blue",
    teams:[
        {
            baseball: 'Chicago White Sox',
            football: 'Chicago Bears',
            hockey: 'Chicago Blackhawks',
            basketball:['Chicago Bulls','Chicago Sky'],
            soccer:['Chicago Fire', 'Naperville Yellowjacks']
        },
        {
            baseball:'Toronto Bluejays',
            football: 'LA Rams',
            basketball: 'Milwalkee Bucks',
            soccer: ['Manchester United','Liverpool']
        }
    ]
}


console.log(person2.favColor)
console.log(person2.progLanguages[2])
console.log(person2.teams[1].football)
console.log(person2.teams[0].soccer[0])
console.log(person2.teams[1].soccer[1])

const { name, age, progLanguages } = person2

console.log(name, age, progLanguages)

firstObject.age = 26

function displayInfo(person){
    return `${person.name} is ${person.age} years old`
}

console.log(displayInfo(firstObject))

const displayInfoArrow = ({name, age, favcolor}) => `${name} is ${age} years old fav color: ${favcolor}`
console.log(displayInfoArrow(person2))

function displayWithQuote(quote, { name, favoriteColor }){
    return `${name} fav color: ${favoriteColor} ${quote}`
}

const quote = 'I know kung foo'

console.log(displayWithQuote)

// Exercise 2: Destructuring

const destructMe={
    title: "Intro to JavaScript",
    body: "I really wish JavaScript had static type checking",
    createdOn: new Date(),
    author: "Kevin Beier",
    topic: "Programming",
    tags: ["JS", "Async", "Dynamic Types"]
}

function destructed({ title, body, author, ...others }) {
    console.log("Title:", title)
    console.log("Body:", body)
    console.log("Author:", author)
    console.log("Others:", others)
}
 destructed(destructMe)

 console.log(seanObject)

 const displayFriendInfo = (person) => {
    const friends = person.friends ?? ['dylan']
    console.log(`${person.name} is friends with `)
    friends.map((friend) => console.log(friend))
 }

 console.log(seanObject.friends)

 // more
 console.log(Object.keys({1:'a'}))

const emptyObject = {}

console.log(Object.keys(emptyObject).length > 0 ? 'object is not empty' : 'object is empty')
console.log([].length > 0 ? 'array is not empty' : 'array is empty')

// iterating over objects
console.log(Object.keys(seanObject))

const seanObjectKeys = Object.keys(seanObject)

for(let i=0; i< seanObjectKeys.length; i++){
  console.log(`Value of ${seanObjectKeys[i]}: ${seanObject[seanObjectKeys[i]]} test`)
}

for(let k of Object.keys(seanObject)){
  console.log(`Value of ${k}: ${seanObject[k]}`)
}

console.log(Object.entries(seanObject))

for(const [k, v] of Object.entries(seanObject)){
  console.log('ENTRIES')
  console.log(`Value of ${k}: ${v}`)
}

const seanObjectValues = Object.values(seanObject)

for(let i = 0; i<seanObjectValues.length; i++){
  console.log('Values')
  console.log(seanObjectValues[i])
}

for(const k in seanObject){
  console.log(k, seanObject[k])
}

console.log((() => ({ 1:'a' }))())

// this

const comedian = {
  firstName : "Chris",
  lastName : "Rock",
  displayFullName : function() { return `${this.firstName} ${this.lastName}`},
  displayFullNameArrow : () => `${this.firstName} ${this.lastName}`
}

console.log(comedian.displayFullName())

console.log(typeof [])
console.log([] instanceof Array)
console.log(Array.isArray(seanObject.friends))
console.log(typeof {})
console.log({} instanceof Object)
console.log([] instanceof Object)
console.log(typeof 'abc')
console.log(typeof 123)
console.log(typeof null)
console.log(null instanceof Object)

const Person = function(name, age) {
  this.name = name
  this.age = age

  this.displayInfo= function(){console.log(`${this.name} ${this.age}`)}
}

const person = new Person('dylan', '33')

console.log(person.name)
person.displayInfo()

// Classes es6

class Human{
  constructor(name, age, gender){
    this.name = name
    this.age = age
    this.gender = gender
  }

  displayInfo(){ 
    return `${this.name} ${this.age} ${this.gender}`
  }
}

const human = new Human('janis joplin', 24, 'female')

console.log(human.name)
console.log(human.displayInfo())

console.table(human)

class Child extends Human{
  constructor(name, age, gender, talking){
    super(name, age, gender)
    this.talking = talking
  }

  isTalking(){
    console.log( this.talking ? 'Is talking' : 'Not Talking') 
  }

  displayInfo(){ 
    return `${this.name} ${this.age} ${this.gender} ${this.talking?'talking': 'not talking'}`
  }
}

const child = new Child('bam bam', 3, 'male', true)

console.log(child)
child.isTalking()
console.log(child.displayInfo())

// In-class exercise:

// Create car class with make, model year and color attributes. Add at least two methods: displayInfo & paintJob

class Car{
    constructor(make, model, year, color){
        this.make = make
        this.model = model
        this.year = year
        this.color = color
    }
    displayInfo(){
        return `${this.name} ${this.model} ${this.year} ${this.color}`
    }
    paintJob(){
        
    }
}