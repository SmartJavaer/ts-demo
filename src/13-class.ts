// 类(Class)

export {};

class Person {
  public name: string; // =''
  private age: number; // = 0
  protected readonly gender: boolean;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.gender = true;
  }

  sayHi(msg: string): void {
    console.log(`I am ${this.name}, ${msg}`);
  }
}

const tom = new Person("gezc", 18);

console.log(tom.name);

class Student extends Person {
  private constructor(name: string, age: number) {
    super(name, age);
    console.log(this.gender);
  }

  static create(name: string, age: number) {
    return new Student(name, age);
  }
}

// const student = new Student('gezc',18);
const student = Student.create("gezc", 18);
console.log(student.name);

interface EatAndRun {
  eat(food: string): void;
  run(distance: number): void;
}

class PersonClass implements EatAndRun {
  eat(food: string): void {
    console.log(`优雅地进餐:${food}`);
  }
  run(distance: number): void {
    console.log(`直立行走:${distance}`);
  }
}

class AnimalClass implements EatAndRun {
  eat(food: string): void {
    console.log(`呼噜呼噜的吃:${food}`);
  }
  run(distance: number): void {
    console.log(`爬行:${distance}`);
  }
}

//抽象类

abstract class Animal {
  eat(food: string): void {
    console.log(`呼噜呼噜的吃:${food}`);
  }

  abstract run(distance: number): void;
}

class Dog extends Animal {
  run(distance: number): void {
    console.log(`四脚爬行:${distance}`);
  }
}

const dog = new Dog();

dog.eat('kk');
dog.run(8);

