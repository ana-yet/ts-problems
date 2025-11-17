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

type RatedItem = {
  title: string;
  rating: 1 | 2 | 3 | 4 | 5;
};

function filterByRating(arr: RatedItem[]): RatedItem[] {
  return arr.filter((item) => item.rating >= 4.0);
}

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

function filterActiveUsers(arr: User[]): User[] {
  return arr.filter((item) => item.isActive);
}
