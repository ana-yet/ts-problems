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

function getLength(value: string | (string | number)[]): number {
  if (Array.isArray(value)) {
    return value.length;
  }
  return value.length;
}

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

type RatedItem = {
  title: string;
  rating: 1 | 2 | 3 | 4 | 5;
};

function filterByRating(arr: RatedItem[]): RatedItem[] {
  return arr.filter((item) => item.rating >= 4);
}

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

function filterActiveUsers(arr: User[]): User[] {
  return arr.filter((user) => user.isActive);
}

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): string {
  const availableStatus = book.isAvailable ? "Yes" : "No";
  return `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availableStatus}`;
}

function getUniqueValues(
  array1: (number | string)[],
  array2: (number | string)[]
): (number | string)[] {
  const result: (number | string)[] = [];

  function exists(arr: (number | string)[], value: number | string): boolean {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === value) return true;
    }
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (!exists(result, array1[i])) {
      result[result.length] = array1[i];
    }
  }

  for (let i = 0; i < array2.length; i++) {
    if (!exists(result, array2[i])) {
      result[result.length] = array2[i];
    }
  }

  return result;
}

type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

function calculateTotalPrice(products: Product[]): number {
  return products
    .map((product) => {
      const total = product.price * product.quantity;
      const discountAmount = product.discount
        ? (total * product.discount) / 100
        : 0;
      return total - discountAmount;
    })
    .reduce((sum, current) => sum + current, 0);
}
