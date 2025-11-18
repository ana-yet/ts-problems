## 1. Interfaces এবং Types এর পার্থক্য

TypeScript এ interface এবং type alias দুটোই অবজেক্টের গঠন নির্ধারণে ব্যবহৃত হয়।

#### Declaration Merging

- Interface একাধিকবার ঘোষণা করলে সেগুলো merge হয়ে যায়।

- Type alias একবারই ঘোষণা করা যায়।

```
ts
interface User {
name: string;
}
interface User {
age: number;
}
// এখন User এ name এবং age দুটোই থাকবে

type User = { name: string };
// আবার একই নামে type ঘোষণা করলে error হবে
```

Extending

Interface সহজে extend করা যায়।

Type alias এ union (|) এবং intersection (&) ব্যবহার করতে হয়।

```
ts
interface Admin extends User {
role: string;
}

type Admin = User & { role: string };
```

## Interface অবজেক্টের গঠন নির্ধারণে বেশি উপযোগী, আর type alias জটিল টাইপ তৈরিতে কার্যকর।

## 2, any, unknown, এবং never এর পার্থক্য

### any

যেকোনো টাইপ গ্রহণ করে।

টাইপ-চেকিং বন্ধ হয়ে যায়।

```
ts
let value: any = 42;
value = "Hello"; // কোনো error নেই
```

### unknown

যেকোনো মান রাখতে পারে, কিন্তু ব্যবহার করার আগে টাইপ চেক করতে হয়।

```
ts
let input: unknown = "Hello";
if (typeof input === "string") {
  console.log(input.toUpperCase());
}
```

### never

এমন টাইপ যা কখনো ঘটে না। সাধারণত error বা infinite loop এর ক্ষেত্রে ব্যবহৃত হয়।

```
ts
function throwError(message: string): never {
  throw new Error(message);
}
```

any ঝুঁকিপূর্ণ, unknown নিরাপদ, আর never অসম্ভব পরিস্থিতি বোঝায়।
