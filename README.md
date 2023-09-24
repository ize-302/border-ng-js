# 🗺️ border-ng-js

A JavaScript package that provides a boolean result, `true` or `false`, indicating whether a provided coordinate falls within the borders of Nigeria 🇳🇬

#### Installation:

```bash
npm i border-ng-js
```

#### Usage:

```bash
// example.js
import checkBoundary from border-ng-js

checkBoundary(lat, lng) // PS: Latitude must come before longitude

// Practical example

const check1 = await checkBoundary(2.743751673926603, 7.322015625519072)
console.log(check1) // false

const check2 = await checkBoundary(6.762809634090966, 3.2435282387767383)
console.log(check2) // true
```
