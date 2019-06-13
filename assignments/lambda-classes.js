// CODE here for your Lambda Classes

class Person {
    constructor(attrs) {
        this.name = attrs.name
        this.age = attrs.age
        this.location = attrs.location
    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}

class Instructor extends Person {
    constructor(attrs) {
        super(attrs)
        this.specialty = attrs.specialty
        this.favLanguage = attrs.favLanguage
        this.catchPhrase = attrs.catchPhrase
    }

    demo(subject) {
        console.log(`Today we are learning about ${subject}`)
    }

    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`)
    }
}

class Student extends Person {
    constructor(attrs) {
        super(attrs)
        this.previousBackground = attrs.previousBackground
        this.className = attrs.className
        this.favSubjects = attrs.favSubjects
    }

    listSubjects() {
        this.favSubjects.forEach((subject) => console.log(subject))
    }

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`)
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`)
    }
}

class ProjectManager extends Instructor {
    constructor(attrs) {
        super(attrs)
        this.gradClassName = attrs.gradClassName
        this.favInstructor = attrs.favInstructor
    }

    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`)
    }

    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
}

// Tests:

const personMan = new Person({
    name: 'Person Man',
    age: 35,
    location: 'Nowhere'
})

const universeMan = new Person({
    name: 'Universe Man',
    age: 13772747717,
    location: 'spaaaaaaace'
})

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'front-end',
    catchPhrase: `Don't forget the homies`
})

const ugg = new Instructor({
    name: 'Ugg',
    location: 'The Cave Of Altamira',
    age: 36123,
    favLanguage: 'proto-proto-proto-indo-european',
    specialty: 'bug-crushing',
    catchPhrase: 'My grammar is perfectly fine, thank you very much. Kids today think they invented definite articles.'
})

const me = new Student({
    name: 'Catherine Stewart',
    location: 'California',
    age: 25,
    previousBackground: 'student',
    className: 'WEB21',
    favSubjects: ['recursion', 'functional programming', 'back-end']
})

const aristotle = new Student({
    name: 'Aristotle',
    location: 'Ancient Greece',
    age: 2403,
    previousBackground: 'philosopher',
    className: 'WEB21',
    favSubjects: ['ethics', 'ancient greek']
})

const scarecrow = new ProjectManager({
    name: 'The Scarecrow',
    location: 'Oz',
    age: 2,
    favLanguage: 'Avian',
    specialty: 'organ harvesting',
    catchPhrase: 'if I only had a brain!',
    gradClassName: 'WEB20',
    favInstructor: 'Dan Levy'
})

const ozma = new ProjectManager({
    name: 'Princess Ozma',
    location: 'Oz',
    age: 123,
    favLanguage: '',
    specialty: 'magic',
    catchPhrase: "This doesn't change anything",
    gradClassName: 'WEB19',
    favInstructor: "Dan's cat"
})

personMan.speak()
universeMan.speak()
fred.speak()
fred.demo('recursion')
ugg.demo('inheritance')
ugg.grade(aristotle, 'oversimplification')
me.speak()
me.listSubjects()
aristotle.PRAssignment('CSS')
aristotle.sprintChallenge('React')
scarecrow.speak()
scarecrow.standUp("WEB20_crow")
ozma.demo('pointers')
ozma.debugsCode(me, 'life')