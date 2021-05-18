function Abc(){
    this.hh = 89
}

const obj = {
    ggg: 4
}

const obj1 = {
    fff: 2
}

obj.__proto__ = obj1

console.log(obj)


