// const anchor: HTMLAnchorElement = document.querySelector("a")!;

// console.log(anchor.href);

// const form: HTMLFormElement = document.querySelector("form")!;

// public,private,readonly
// class Invoice {
//   client: string;
//   details: string;
//   amount: number;

//   constructor(c: string, d: string, a: number) {
//     this.client = c;
//     this.details = d;
//     this.amount = a;
//   }
//   format() {
//     return `${this.client} owes ${this.amount} for ${this.details}`;
//   }
// }

//interface
interface isPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: isPerson = {
  name: "shaun",
  age: 30,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log("i spent", amount);
    return amount;
  },
};

import { Invoice } from "./classes/Invoice.js"; //js로해야함
import { ListTemplate } from "./classes/ListTemlates.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice("yoshi", "webwork", 50);
docTwo = new Payment("mario", "plumbing work", 200);

let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);

console.log(docs);

const invOne = new Invoice("mario", "work on website", 250);
const invTwo = new Invoice("kim", "work on website", 300);
let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);
// console.log(invoices);

// console.log(invOne, invTwo);

invoices.forEach((inv) => {
  console.log(inv.format());
});

const form = document.querySelector(".new-item-form") as HTMLFormElement;
// console.log(form.children);

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// list template instance
const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event): void => {
  e.preventDefault();
  let doc: HasFormatter;
  if (type.value === "invoice") {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }

  list.render(doc, type.value, "end");
  // console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});

// Enums
enum ResourceType {
  Book,
  AUTHOR,
  FILE,
  DIRECTOR,
  PERSON,
}
interface Resource<T> {
  uid: number;
  resourceType: ResourceType;
  data: T;
}

const Four: Resource<object> = {
  uid: 1,
  resourceType: ResourceType.Book,
  data: { title: "name of the wind" },
};

console.log(Four);

// GENERICS

// const addUID = <T extends {name:string} >(obj: T) => {
//   let uid = Math.floor(Math.random() * 100);
//   return { ...obj, uid };
// };

// let docthw = addUID({ name: "kiki", age: 40 });

// interface Resource<T>{
//     uid:number;
//     resourceName:string;
//     data: T;
// }

//T를 패싱하면 배열이든 객체든 무엇이든 가능

//tuples
let arr = ["ryu", 0, true];
