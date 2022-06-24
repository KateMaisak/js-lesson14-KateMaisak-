//1.1


class Creator {
    constructor(options) {
        this.name = options.name,
            this.language = options.language
    }

    sayHi() {
        console.log(`${this.name} работает с ${this.language}`);
    }
}

const user = new Creator({ name: "Екатерина", language: "JS" })


//1.2


class Student extends Creator {
    constructor(options) {
        super(options)

        this.groupe = options.groupe
  }

  greet() {
     super.greet()
        console.log(`${this.name} работает с ${this.language} из группы ${this.groupe}`);
  }
}

const student = new Student ({ name: "Екатерина", language: "JS", groupe: 5})

//2

const str = new String("string")

String.prototype.addPoint = function() {
    return `${this}!`
}

console.log(str.addPoint());


//3

const num = new Number(10)

Number.prototype.toNumber = function() {
     return this / 2
}

console.log(num.toNumber());


