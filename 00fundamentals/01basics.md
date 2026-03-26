_-Babel_

_-Virtual DOM_  
_--Diffing (Reconciliation)_  
_--createRoot()_  
_--React Fiber_  
_--Hydration_    

_-React.createElement()_  

>## Babel
Babel is a JavaScript compiler (or transpiler) that converts modern JavaScript and JSX into older, browser-compatible JavaScript.  
Babel makes modern JS & React code run in all browsers.  

---
#### Why Babel Is Needed
Browsers do not understand:  
-JSX  
-Latest JavaScript features (depending on browser)  
#### Example(browser cannot run this directly):
```js
const element = <h1>Hello React</h1>;
```
Babel converts it into:
```js
const element = React.createElement("h1", null, "Hello React");
```

---
#### Babel in React
JSX → `React.createElement()`
```js
<h1 className="title">Hi</h1>
```
Babel output:
```js
React.createElement(
  "h1",
  { className: "title" },
  "Hi"
);
```
This is why JSX works in React  

---
#### What Babel Actually Does
Babel can:
- Convert JSX → JavaScript
- Convert ES6+ → ES5
- Add polyfills (with help)
- Make code browser-compatible
  
#### Example: Modern JS Conversion
Input (ES6):
```js
const add = (a, b) => a + b;
```
Babel Output:
```js
var add = function (a, b) {
  return a + b;
};
```
So even old browsers can run it.

---
#### How Babel Works (Internally)
- Parsing
   - JS → Abstract Syntax Tree (AST)
- Transforming
   - Modify AST (JSX → JS, ES6 → ES5)
- Code Generation
   - AST → Browser-compatible JS  

---
#### Babel vs JavaScript Engine
| Babel                  | JS Engine               |
| ---------------------- | ----------------------- |
| Runs at **build time** | Runs at **runtime**     |
| Converts code          | Executes code           |
| Handles JSX            | Does not understand JSX |
  
_Babel is a JavaScript compiler that transforms JSX and modern JavaScript into browser-compatible JavaScript._

---
>## Virtual DOM
The Virtual DOM (VDOM) is one of the core concepts that makes React fast and efficient.  
The Virtual DOM is a lightweight, in-memory JavaScript object that is a copy of the real DOM.  
React does not directly update the real DOM every time data changes.  
Instead, it:  
- Updates the Virtual DOM
- Compares it with the previous Virtual DOM
- Updates only the changed parts in the real DOM  

_def - Virtual DOM is a lightweight JavaScript representation of the real DOM that allows React to update the UI efficiently by minimizing direct DOM manipulation._

#### Why Virtual DOM needed-
- Updating the real DOM is expensive and slow.
- Frequent DOM updates degrade performance.
-Virtual DOM reduces:
   - Unnecessary DOM manipulations
   - Re-rendering of unchanged elements  
     
#### How Virtual DOM works-
- 1-Initial Render
    - React creates a Virtual DOM tree
    - Renders it to the real DOM
- 2-State / Props Change
    - A new Virtual DOM is created
- 3-Diffing (Reconciliation)
   - React compares old VDOM vs new VDOM
   - Finds minimum changes
- 4-Batch Update
   - Only changed nodes are updated in real DOM

_This process is called `Reconciliation`_  

---
>### createRoot() 
`createRoot()` is directly connected to how React manages the Virtual DOM and updates the real DOM.
```javascript
import { createRoot } from 'react-dom/client';
const root = createRoot(document.getElementById('root'));
root.render(<App />);
```
`createRoot()` creates a React Root  
This root is where React controls the DOM using the Virtual DOM  
#### Role of createRoot() in Virtual DOM
`createRoot()`:  
- Connects React’s Virtual DOM system to the real DOM
- Enables React 18’s new rendering engine
- Manages VDOM → Diffing → Real DOM updates  

Without `createRoot()`, React cannot mount or update the Virtual DOM tree.  
`createRoot()` is the bridge between Virtual DOM and Real DOM  
#### What happens when state changes?
- State updates inside a component
- React creates a new Virtual DOM tree
- React compares old vs new VDOM
- React determines minimum changes
- `createRoot()` applies those changes to the real DOM  
#### Why createRoot() replaced ReactDOM.render()?
| ReactDOM.render()      | createRoot()           |
| ---------------------- | ---------------------- |
| Legacy rendering       | Modern rendering       |
| Synchronous only       | Concurrent rendering   |
| Less efficient updates | Optimized VDOM updates |
| Deprecated             | Recommended            |  

_`createRoot()` creates the root container that allows React to manage the Virtual DOM, perform reconciliation, and efficiently update the real DOM using React 18’s concurrent rendering._  

---  
>### React Fiber
React Fiber is React’s internal rendering engine (introduced in React 16) that controls how the Virtual DOM work is scheduled, paused, resumed, and applied to the real DOM.

Simple definition:  
_React Fiber is a reimplementation of React’s reconciliation algorithm that makes rendering incremental and interruptible._   

React Fiber is React’s core reconciliation engine that enables incremental rendering and concurrent features.  
Fiber architecture breaks rendering into units of work that can be paused and prioritized.  

---

>### Hydration
Hydration is the process where React attaches event listeners and internal logic to server-rendered HTML instead of creating the DOM from scratch.  
Hydration makes a static HTML page interactive by connecting it with React’s Virtual DOM and Fiber tree.  
#### Why Hydration is needed?
- When using SSR (Server-Side Rendering):
- Server sends already-rendered HTML
- Browser shows content immediately 
- But HTML is not interactive 
- Hydration fixes this by:
   - Connecting React logic
   - Enabling events (onClick, onChange, etc.)
   - Syncing Virtual DOM with existing DOM  
     

#### Normal Rendering vs Hydration
-Normal client rendering
```javascript
createRoot(container).render(<App />);
```
React creates new DOM  
Slower first paint

-Hydration (SSR)  
```javascript
import { hydrateRoot } from "react-dom/client";
hydrateRoot(container, <App />);
```

---

>## React.createElement()
`React.createElement()` is the core function React uses to create elements.  
JSX is just a syntactic sugar that gets compiled into `React.createElement()` calls.  

---   
#### Basic Syntax
```javascript
React.createElement(type, props, children)
```
#### Parameters

- type
   - HTML tag ('div', 'h1', 'span')
   - OR a React component (MyComponent)
- props
   - An object containing attributes, events, styles, etc.
   - Use null if there are no props
- children
   - Text
   - Another React element
   - Or an array of elements  

---
#### Simple Example (Without JSX)
```js
const element = React.createElement(
  'h1',
  { className: 'title' },
  'Hello React'
);
```
This creates a React element object, not actual HTML.  

---
#### Same Example Using JSX
```js
const element = <h1 className="title">Hello React</h1>;
```
JSX is converted to `createElement()` behind the scenes  

---
#### What Does createElement() Return?
It returns a plain JavaScript object:
```js
{
  type: 'h1',
  props: {
    className: 'title',
    children: 'Hello React'
  }
}
```
React uses this object to build the Virtual DOM  

---  
#### Why createElement() Is Important
Foundation of JSX  
Used internally by React   
Helps understand how React works behind the scenes   
Useful when:   
- Writing React without JSX
- Learning React internals
- Creating libraries or custom renderers  

---
#### Key Points
-`createElement()` is the lowest-level API in React  
-JSX → `React.createElement()`  
-It does not create real DOM  
-It creates Virtual DOM elements  
-JSX makes code cleaner, but `createElement()` does the real work  

---

>## Complete Flow in One Diagram
```scss
JSX
 ↓ (Babel)
React.createElement()
 ↓
React Elements (Virtual DOM)
 ↓
Fiber Tree
 ↓
Reconciliation (Diffing)
 ↓
Commit Phase
 ↓
Real DOM Updated
```

