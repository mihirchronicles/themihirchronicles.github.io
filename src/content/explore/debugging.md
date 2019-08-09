---
title: Debugging
date: "2019-03-01"
path: "/explore/debugging"
---

Recently at work, I've watched other developers use `console.log` a lot in code to find desired values given by certain functions. I am often still confused where to put `console.log`, and it is definitely not the only way to debug, so I've also begun to use the developer tools JavaScript debugger in Firefox and Chrome. These tools allow you to pause the execution of your code, and walk through it to help you find bugs.

The debugger can do a lot, and it'd take a much longer post to walk through this tool's UI, so I'll mention four of the most commonly used debugging methods here.

1. Step over code, steps over a function that doesn't contain a bug and runs its code
2. Step into code, steps inside a function and allows you to run each part separately
3. Step out of code, steps out of a function you are inside, and runs its code
4. Resume execution of code

Debugging is something developers have to be really good at. So don't be scared to do it! Or, be scared but do it anyway, you'll get better :)

Check out the docs on the [Firefox](https://developer.mozilla.org/en-US/docs/Tools/Debugger) debugger and the [Chrome](https://developers.google.com/web/tools/chrome-devtools/javascript/reference#breakpoints) debugger. Lots of great info there to help you get started. Also check out [this article](https://peterlyons.com/js-debug) from Peter Lyons. He explains debugging of both front-end and back-end JavaScript code.

Also, check [this](https://daverupert.com/2018/05/my-struggle-with-testing-code/) out - an honest post about how even experienced devs find it hard to debug.

A lot of people use `console.log` to debug in the console.

The `log()` method of `console` logs things to the web console. What some people may not know is that you can log things in nice ways! Here are three:

**1. Computed property names -**

The following objects could be logged one at a time:

```js
const cat = { name: 'Fluffy', colour: 'orange', specialSkill: 'staring' }
const dog = { name: 'Thor', colour: 'brown', specialSkill: 'running' }
const fish = { name: 'Glub', colour: 'blue', specialSkill: 'blowing bubbles' }
```

And the results would be as follows:

```js
console.log(cat) // {name: "Fluffy", colour: "orange", specialSkill: "staring"}
console.log(dog) // {name: "Thor", colour: "brown", specialSkill: "running"}
console.log(fish) // {name: "Glub", colour: "blue", specialSkill: "blowing bubbles"}
```

Or, they could be logged with a name label using 'computed property names'. To do this, create an object with the variables as keys:

```js
console.log({ cat, dog, fish }) // {cat: {…}, dog: {…}, fish: {…}}
```

Inside this object, there will be the details of each variable with its corresponding key:

```js
cat: {name: "Fluffy", colour: "orange", specialSkill: "staring"}
dog: {name: "Thor", colour: "brown", specialSkill: "running"}
fish: {name: "Glub", colour: "blue", specialSkill: "blowing bubbles"}
```

**2. CSS in the console -**

Define styles like this in the console:

```js
var styles = [
  'background: linear-gradient(#21618C, #5DADE2)',
  'padding: 5px',
  'border-radius: 8px',
  'text-align: center',
  'color: white',
  'display: block',
].join(';')
```

Then prefix console log with the `%c` flag, adding the `styles` variable to the end:

```js
console.log(
  `%c My cat is ${cat.name}, ${cat.colour}, ${cat.specialSkill}`,
  styles
)
```

Try it in your console or look at [this](https://codesandbox.io/embed/determined-wozniak-4lt93) example on CodeSandbox!

**3. Tables in the console**

To display objects in a table in order to more easily compare them, try using `console.table`. You can do so with the animal objects above by running:

```js
console.table([cat, dog, fish])
```

Not only will there be a nicely-formatted table to see in the console, but the (unlabeled) objects will also be displayed as well.

**Note**

All of these things make console logging a little better. Not sure how many I will start using myself, but I'll give them a go to see whether I like them :)
