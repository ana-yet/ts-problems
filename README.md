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

Interface অবজেক্টের গঠন নির্ধারণে বেশি উপযোগী, আর type alias জটিল টাইপ তৈরিতে কার্যকর।
