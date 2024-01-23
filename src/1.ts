/*
  Клас Student, який містить три властивості: name, age та grade. 
  Замість того, щоб оголошувати ці властивості в тілі класу, потім у конструкторі, і нарешті надавати їм значення, 
  напишіть скорочену ініціалізацію.
*/

// class Student {

//   public name: string;
//   public age: number;
//   public grade: string;

//   constructor(name: string, age: number, grade: string) {
//     this.name = name;
//     this.age = age;
//     this.grade = grade;
//   }
// }

class Student {
  constructor(public name: string, public age: number, public grade: string) {}

  public set setStudenAge(value: number) {
    this.age = value;
  }
}

const anna = new Student("Anna", 0, "school");
console.log(anna.name);
console.log("starting age: ", anna.age);
anna.setStudenAge = 18;
console.log("new age: ", anna.age);
export {};
