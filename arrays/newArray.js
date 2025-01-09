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

  shift(){
    const firstEl = this.data[0]
    for(let i = 0; i < this.length; i++){
      this.data[i] = this.data[i+1]
    }
    delete this.data[this.length - 1]
    this.length--
    return firstEl
  }

  delete(index){
    const item = this.data[index];
    for(let i=index; i<this.length - 1; i++){
      this.data[i] = this.data[i+1]
    }

    delete this.data[this.length - 1]
    this.length--
    return item
  }
}

const newArray = new Array()
newArray.push("Mango")
newArray.push("Ball")
newArray.push("Watch")
newArray.push("Car")
newArray.push("Page")
newArray.push("Pen")

newArray.delete(3);
console.log(newArray)
