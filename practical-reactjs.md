# Practical React Js

## What is React JS?
React was developed by Facebook, released to open source community on 2013. Since then, it has been maintained by them and its use has increased. Companies like Facebook, Netflix, Uber, Airbnb and Platzi use it.

## DOM, Virtual DOM and React DOM
The Virtual DOM is an exact copy of the original site's DOM, made to improve performance and experience.
Currently, the real DOM needs to be completely updated when the site has to update some section(s). On the other hand, with React's virtual DOM, it is capable of recognizing which components are the ones that must be updated, and it will update only those components without needing to reload the whole DOM.

## Creating a first App with React

### Initializing the App
The easiest way to initialize a React project is using the npx command:

```bash
npx create-react-app <project_name>
```

Once the project is created, the following command can be used to start a dev server in port 3000:
```bash
npm run start 
```

### What does a React app contain?
The directory structure of a React app is very typical of a JS project.
- It contains a `package.json` that states the manifest of all the dependencies of the project.
- It contains a `node_modules` directory that contains all the dependencies' code of the project.
- There is also a `public`directory that contains all the production files.
- There is a `src` directory that contains all the development files of the project.

## React Components
React is based on components. A component is an object that is meant to represent a section of the page view, gathering both its logic and its HTML. There are three types of components:

### Stateful Components
A stateful component is the most robust component type of React. It holds both the HTML, the state and the lifecycle of a React component. These objects have:
- A `render` method, which takes care of holding the HTML code that needs to be rendered during the  component's lifecycle.
- A state: A JSON that contains all the attributes that the component depends on.

```javascript
import React, { Component } from 'react';

class Stateful extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: "Hello World"
    };
  }

  render() {
    return (
      <h1>this.state.hello</h1>
    )
  }
}
export default Stateful;
```

### Stateless Components
A stateless component is a component that doesn't contain a state and therefore doesn't have a lifecycle. It just contains some static HTML that needs to be rendered.

```javascript
import React, { Component } from 'react';

const Stateless = (props) => {
  return (
    <h1>Hello World</h1>
  )
}

export default Stateless;
```

### Presentational Components
A presentational component is a small abstraction of the stateless component.
```javascript
import React, { Component } from 'react';

const Presentational = () => <h1>Hello World</h1>;

export default Presentational;
```

## Props
In a similar way as functions receive arguments, components receive props. Those are read-only values that can be transferred to the component when it is being called.

## Component's Lifecycle
All react components go through a process of specific events where some methods are called.

### Mounting
Here the component is created along with the logic, and it gets inserted in the DOM. This is the order at which the methods are being called:

- `constructor()`, which intializes the controllers methods, state events.
- `getDerivedStateFromProps()`, which is called before inserting the component to the DOM, and there we can update the internal state in response to a property change. It's not recomended to use this method.
- `render()`, which is called to read the html related to the component and insert it to the DOM.
- `componentDidMount()`, is kind of a callback that can be used to execute additional actions on the component after all the mounting has been completed.

### Updating
Here the component is listening for changes, which may come from the `state` or from the `props`.

- `getDerivedStateFromProps()` works in the same way as mounting.
- `shouldComponentUpdate()` works as a callback to manually decide wether the component should update or not. It's useful for optimization.
- `render()` works the same way as mounting.
- `componentDidUpdate()` is a callback that is called after the update finished.

### Unmounting
Here the component dies when it is no longer needed on the DOM.

- `componentWillUnmount()` is a callback before the component is unmounted.

### Error Handling
When an error is thrown, the component will start this phase, made to get details on the error.

- `getDerivedStateFromError()`
- `componentDidCatch()`

## A State
A state is an object inside the compoentn, which contains variables and can be accessed inside the compoennt.

## Implementing a professional environment

### Babel
Babel is used to provide browser support for JS. It takes all the React components and translates them into an ES version that all browsers support.
To install Babel:
```bash
npm install @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
```

Then all Babel configuration can be added in a file called `.babelrc`
```javascript
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ]
}
```

### Webpack
Webpack is a tool that takes care of managing all the assets (js, html, css, multimedia) having them ready for production.
To install Webpack:
```bash
npm install webpack webpack-cli html-webpack-plugin html-loader --save-dev
```
All webpack configuration can be added in a file called `webpack.config.js`
```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
  ],
};
```

The bundle can be compiled using the command
```bash
webpack --mode production
```

Webpack also has another tool: Webpack Dev Server, which can be used to run a development server that watches for changes in the project and updates the browser view automatically.

Installation
```bash
npm install webpack-dev-server --save-dev
```

The dev server can be run using the command
```bash
webpack-dev-server --open --mode development
```

### SASS
Using SASS as a CSS pre-processor and making it work with Webpack.
Installation:
```bash
npm install mini-css-extract-plugin css-loader node-sass sass-loader --save-dev
```

- `css-loader`, `node-sass` and `sass-loader` are webpack loaders that compile sass files and return css styles. These styles are inserted into the JS bundle when called with `import`.
- `mini-css-extract-plugin` takes this generated CSS and saves it in a separate CSS file.

In the `webpack.config.js` file:
1. Require the plugin
```javascript
//...
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//...
```

2. Add the rule
```javascript
//...
module.exports = {
  //...
  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader',
        ],
      }
    ]
  }
}
//...
```

3. Pass the plugin config params
```javascript
//...
module.exports = {
  //...
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css',
    }),
  ]
}
//...
```

### ESLint

```bash
npm install eslint babel-eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y --save-dev
```

### Images

```bash
npm install file-loader --save-dev
```

In the webpack config file, addin a new rule:
```javascript
{
  test: /\.(png|gif|jpg|jpeg)/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: 'assets/[hash].[ext]',
      },
    },
  ],
},
```
