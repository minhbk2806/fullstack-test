# Full Stack test

## Goal

Assess the technical ease and knowledge of developers for backend and frontend

## Approach

Take existing issues at Castor:

- problems we faced and for which we designed a solution
- balanced between backend and frontend topics
- cover Typing craft

## Resources

Two routines to implement one for backend one for frontend

### getUrlParams

**Usage**: parse routes dynamically in the frontend

**Goal**

Design a **typescript** function taking

- a `pathString` extracted from a URL with static portions and parameters
  in the form `staticOne/one/staticTwo/staticThree/two`
- a `patternString` specified from a string which defines **static portions** and **params** with `:` in the form `staticOne/:paramOne/staticTwo/staticThree/:paramTwo`

The function should return:

- empty record `{}` if no parameters are found (string with extra content is ok)
- record with parameters name (such as `paramTwo` above) as keys and value as extracted from the path (such as `two` above)

The parameters are extracted from left to right and stops if

- static part between path and pattern differ
- path shape is shorter than the pattern's

**Example**

```tsx
const pattern = "staticOne/:paramOne/staticTwo/staticThree/:paramTwo";

// does not match the first static part: staticOne <> staticZero, returns {}
console.log(getUrlParams("staticZero/one", pattern));

// matched the first static and param part, returns {paramOne: 'one'}
console.log(getUrlParams("staticOne/one", pattern));

// matched the first static and param part with extra, returns {paramOne: 'one'}
console.log(getUrlParams("staticOne/one/staticThree/three", pattern));

// matched the first, second and third static + param parts
// returns {paramOne: 'one', paramTwo: 'two'}
console.log(getUrlParams("staticOne/one/staticTwo/staticThree/two", pattern));
```

### objectLiteral

**Usage:** detect and track changes upon database update of a resource

**Goal**

Design a **generic** function taking:

- `source` an object of type `T` as source
- `target` an object of type `T` as target

The function should return a record where

- the keys are within T's keys
- the values as objects of the shape `{source: oldValue, target: newValue}`
  corresponding to the `source[key]` for `oldValue` and `target[key]` for the `newValue` only if value **differ** between source and target

**Remark**

Keys should only be present in the returned record if changes occurred for that key between source and target

**Example**

```tsx
type Data = { id: string; name?: string; count: number };

const before: Data = { id: "1", count: 0 };
const after: Data = { id: "1", name: "khan", count: 1 };

// should read {name: {old: undefined, new: 'khan'}, count: {old: 0, new: 1}}
console.log(objectLiteral(before, after));
```

### Collaboration tools

- vscode and screen share
- [https://jsfiddle.net/](https://jsfiddle.net/)
- [https://www.typescriptlang.org/](https://www.typescriptlang.org/play)
