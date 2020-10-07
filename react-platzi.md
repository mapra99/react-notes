# React.js - Platzi

## ReactDOM and React classes
`ReactDOM`and `ReactDOM.render` does something pretty similar to what `document.appendChild` does in vanilla JS. It takes a node as an argument and appends it to an existing one in the DOM.

On the other hand, `React` is analogous to what `document.createElement` does. It creates a new element (except that React adds some additional functionality such as state and lifecycle), and has it ready for `ReactDOM.render` to append it.

So, in a common and simple `index.js` file, what is written in vanilla js like this:
```javascript
const element = document.createElement('h1');
element.innerText = 'Hello, World';

const container = document.getElementById('app');
container.appendChild(element);
```

Using `React` and `ReactDOM` this can be translated into this:
```javascript
import React from 'react';
import ReactDOM from 'react-dom';

const element = React.createElement('h1', {}, 'Hello, World');

const container = document.getElementById('app');
ReactDOM.render(element, container);
```

### JSX
Going one step further, JSX can be treated just as syntactic sugar (and a really really sweet one), to make things easier when using `React.createElement`.

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

const element = <h1>Hello, World</h1>;

const container = document.getElementById('app');
ReactDOM.render(element, container);
```
