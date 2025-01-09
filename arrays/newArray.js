// Construct a new array
class Array {
  constructor() {
    this.length = 0
    this.data = {}
  }

  push(item){
    this.data[this.length] = item;
    this.length++
    return this.length
  }

  get(index){
    return this.data[index]
  }

  pop(){
    const lastItem = this.data[this.length - 1]
    delete this.data[this.length - 1]
    this.length--
    return lastItem
  }
}

const newArray = new Array()
newArray.push("Mango")
newArray.push("Ball")
newArray.push("Watch")

newArray.pop();
console.log(newArray)