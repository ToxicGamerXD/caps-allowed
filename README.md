# caps-allowed

![npm](https://img.shields.io/npm/v/@tgxd/caps-allowed?color=red&logo=npm)
![npm](https://img.shields.io/npm/dt/@tgxd/caps-allowed?color=blue)

## Installation

### npm

```
npm install @tgxd/caps-allowed
```

### git

```
git clone https://github.com/ToxicGamerXD/caps-allowed.git
```

## Example Usage

### Simple usage of the package

```javascript
const caps_allowed = require("@tgxd/caps-allowed")

console.log(caps_allowed("This String hasn't to many Caps", 65))

/* -> Outcome:
{
    string: "This String hasn't to many Caps",
    minStringLength: 0,
    stringLength: 31,
    capsLength: 3,
    capsPercentage: 4.6,
    maxCapsPercentage: 65,
    isMaxCaps: false
}
*/
```

### Simple Example check if the String has to many Caps

```javascript
const caps_allowed = require("@tgxd/caps-allowed")

let object = caps_allowed("This String hasn't to many Caps", 65)

// If the String has too many Caps, it says "Too many Caps in the String"
if(object.isMaxCaps) {
    console.log("Too many Caps in the String")
}
// If the String hasn't too many Caps, it says "Not too many Caps in the String"
else {
    console.log("Not too many Caps in the String")
}
```