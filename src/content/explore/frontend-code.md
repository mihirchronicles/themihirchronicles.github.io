---
title: Frontend Code
date: "2019-02-01"
path: "/explore/frontend-code"
---

### BEM
I keep getting tripped up at work by forgetting to write modular CSS classes. There are so many benefits to a robust CSS architecture that I really want to get it right. BEM is a methodology to achieve this. `Block`, `Element` and `Modifier`. A `Block` is a component or feature than can stand alone and is not dependent on any other code. It can be re-used anywhere. Next, an `Element`. This is always part of a `Block` and has no meaning on its own. Lastly, there is the `Modifier`. This changes the behaviour and/or appearance of a `Block` or `Element`.

Example:

__`.button`__ is a block.

**`.button__label`** is an element.

__`.button--confirm`__ is a modifier.

See resources [here](http://getbem.com/introduction/) and [here](https://zellwk.com/blog/css-architecture-1/).

### Arrow
Also known as a fat arrow, `=>`. This ES6 feature is a fat topic, so I'll concentrate on one aspect today.

```jsx
var elements = [
'Hydrogen',
'Helium',
'Lithium',
'Beryllium'
];

(elements.map(function(element) {return element.length}))
(elements.map(element => {return element.length}))
(elements.map(element => element.length))
(elements.map(({length}) => length))
```

Above is an altered version of the [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) JavaScript Demo, where you will find a wealth of information on what fat arrows can do for you. The first function in the list is written without fat arrows. The last three functions are variations of the first function, showing how fat arrows can be used to write shorter function expressions, and therefore less code. You will need a code compiler like [Babel](https://babeljs.io/) to compile fat arrows into ES5 syntax so older browsers can use your JavaScript.

There are a _lot_ of resources that try explaining this syntax. Try Wes Bos's [introduction](https://wesbos.com/arrow-functions/) for a start. This is complicated subject matter, though, so I suggest searching around for different posts, reading a few and finding ones that make most sense to you.

### Debugging
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

### Psuedo Selectors

I only just found out that `::before` (`:before`) and `::after` (`:after`) are pseudo elements, which are different from pseudo classes. Both of these are grouped under pseudo selectors. I like this quote from MDN ~

> Even the most skilled web developers are still amazed by what's possible using selectors.

pseudo selectors are only two types of selectors. The others are: simple selectors, attribute selectors, multiple selectors and combinators. All of these help us to target and style HTML elements.

So, pseudo selectors include both pseudo elements and pseudo classes. They are added to the end of other selectors, and don't apply to whole elements, only parts of them.

The pseudo classes (e.g. `:hover`, `:focus`, and `:nth-of-type()` - plus 38 others) style elements in a _certain state_.

The pseudo elements (e.g. `::after`, `::before`, and `::first-letter` - plus 3 others, not including experimental ones) apparently need `::` rather than `:`, although I've used them with only one. These don't depend on the state of an element.

See this [MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Pseudo-classes_and_pseudo-elements) page for great examples and to use their awesome active learning playground (I did and it was great for learning)!

### Strings


*   A sequence containing some letters, numbers or symbols.
*   Have available methods and properties.
*   Can be stored in variables.
*   Sit between either single quotes (`' '`), double quotes (`" "`), or backticks ( `` ``).
*   Can be concatenated (stuck together) with the `+` operator, or with backticks (template strings) in ES6.
*   Template strings, or template literals, can take any valid JavaScript expression, allowing dynamic strings.
*   Can contain special characters, such as quotation marks, as long as they are escaped - e.g. `"She'\ll be coming '\round the mountain when she comes"`.
*   There's no need to escape dissimilar quote marks. For example: "This 'is' fine". This is probably why we tend to favour double quotes in HTML attribute values, and singles in JS (since it allows you to create some innerHTML without the need for escaping).
*   When using template literals, you don't need to escape `'` or `"` ... and ``this` `"is"` `'also'` `fine``
*   Is either a _string primitive_ - immutable and more common, e.g. `const stringPrimitive = "Hello, I am a string.";` .
*   Or a _string object_ - `const stringObject = new String("Hello, I am a string.");`
*   The `typeof` operator is used to determine if a string's type is _string_ or _object_.
*   Each character is indexed and can be accessed by an index number using square bracket notation (e.g. "Hello World" - `myString[0]` outputs "H").
*   Similar methods to the one above include: `charAt()`, `indexOf()`, `lastIndexOf()`, `slice()`.
*   Other common methods and properties are: `length`, `toUpperCase()`, `toLowerCase()`, `split()`, `trim()`, `replace()`.

This list is meant as a quick and basic introduction to the magical world of JavaScript strings. If there's something you'd like me to add, let me know!

Many thanks to my good friend <a href="https://twitter.com/qubyte">Mark</a> for suggesting additions :)

### Ternary Operators
This is one of my favourite things in JavaScript. Not only is it simple and easy to use but it's also applicable to lots of situations **and** it can replace more verbose syntax (like `if` statements). It looks something like this:

```js
const hoursOfSleep = 5;
const timeForSleep = (hoursOfSleep < 8) ? 
    "Yup, no more phone for you" : 
    "Ah nah, a few more minutes of phone time won't hurt"; 
```

Notice the **?** and the **:**

These are the important parts.

If the condition (in this case `hoursOfSleep`) in front of the question mark evaluates to true, the value of the first expression before the colon is returned. If the condition in front of the question mark evaluates to false, the value of the second expression after the colon is returned. As you can see, if you have had less than 8 hours of sleep, you shouldn't be using your phone.

Ternary operators are really flexible and can be used in a number of ways. You can stack them together:

```js
const catsRule = true,
const dogsDrool = false,
const catDog = catsRule ? 
    (dogsDrool ? "Let's all live in harmony": "Both cats and dogs drool") :
    (dogsDrool ? "Dogs are cool, nearly as cool as cats" : "Dogs and cats can be friends");
```

This outputs `"Both cats and dogs drool"`, and it's also total nonsense but I hope you had fun staring at it and trying to figure it out. You don't even need to use the parentheses, and can also use multiple statements separated by commas. You can return statements in functions. You can use them in place of bulky `if/else` statements with much nicer-to-read code. The question mark means `if` and the colon means `else`.

I use ternary operators at work all the time. I hope you enjoy them as much as I do. Check out the [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) page for some examples. This [post](https://scotch.io/tutorials/understand-the-javascript-ternary-operator-like-abc) is lovely too.

### Testing
Today at work, we talked about test automation. One of the developers mentioned this quote:

> We cannot rely on mass inspection to improve quality, though there are times when 100 percent inspection is necessary. As Harold S. Dodge said many years ago, ‘You cannot inspect quality into a product.’ The quality is there or it isn’t by the time it’s inspected. - William E. Deming in _Out of the Crisis_

Therefore we cannot rely on creating features in a hurry, throwing them over the fence and then expecting our applications to work well and without bugs. To instil quality from the start of a feature, there should be tests for it.

Automated testing helps with this. Pre-commit hooks can be used when deploying builds so that errors are caught and addressed early. Unit tests can be run using pre-commit hooks - see my post on unit tests [here](https://amberwilson.co.uk/blog/unit-tests/). However, there is a fine line between having too many automated tests, e.g. end-to-end tests that take too long to run with each build, and not having enough. Some companies run quicker unit tests on each build, and then run end-to-end tests as a nightly build.

Please see the image [The Testing Pyramid](http://blog.xebia.com/its-2017-test-automation-is-not-optional-when-building-mobile-apps/) for one of many examples of the testing pyramid if you are confused when I mention unit tests or end-to-end (UI) tests.

Manual testing is important too. It is usually done by QA engineers, and helps reveal edge cases that automated tests do not catch. As one developer at my work said, these tests are like the cherry on top of the testing pyramid.

### Types
JavaScript has six primitive types. These all have default values and can be checked for using the `typeof` operator.

Default values:

```js
'boolean' - false
'null' - null
'number' - 0
'string' - ''
'undefined' - void 0
'symbol' - Symbol() // new in ES6
```

Checking the type of a primitive:

```js
if (typeof myPrimitive !== 'number')
  throw new TypeError('Type must be a number!')
```
