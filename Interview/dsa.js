// function getName() {
//     var status = true;
//     if (status) {
//       const name = "masai";
//     }
//     console.log(name);
//   }
//   getName();


//   let obj = {
//       a: 1,
//       b: () => {
//           console.log(this.a)
//       },
//       c: function(){
//           console.log(this.a)
//       }
//   }

//   let obj2 = {
//       a: 5
//   }


//   obj.c.call(obj2)


class A{
    constructor(b, c){
        this.b = b
        this.c = c
    }

    getB(){
        console.log("object", this.b)
    }
}

class B extends A{
    constructor(b, c) {
        super(b, c)
    }

    getD(){
        super.getB()
    }

    fff(){
        console.log("fff")
    }
}


let b = new B()

b.getD()
// b.fff()