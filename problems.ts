function formatValue(
  value: string | number | boolean
): string | number | boolean {
  switch (typeof value) {
    case "string":
      return value.toUpperCase();
    case "number":
      return value * 10;
    case "boolean":
      return !value;
    default:
      return value;
  }
}

function getLength(value: string | any[]): number {
  if (Array.isArray(value)) return value.length;
  else return value.length;
}

class Person {
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
  name: string = "";
  age: number = 0;
}
