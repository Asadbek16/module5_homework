let value = prompt("Введите значение:");
let number = +value;
let type = typeof number;

if (type === "number") {
  console.log("Значение принадлежит к множеству Number");
} else {
  console.log("Упс, кажется, вы ошиблись");
}