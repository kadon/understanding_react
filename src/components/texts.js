export const whatIsAComponentText1 = 'Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.';
export const whatIsAComponentText2 = 'Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called "props") and return React elements describing what should appear on the screen.';
export const functionalComponentsText = 'This function is a valid React component because it accepts a single "props" object argument with data and returns a React element. We call such components "functional" because they are literally JavaScript functions.';
export const renderingAComponentText = 'When React sees an element representing a user-defined component, it passes JSX attributes to this component as a single object. We call this object "props".';
export const composingComponentsText = 'Components can refer to other components in their output. This lets us use the same component abstraction for any level of detail.';
export const composingComponentsText2 = 'Typically, new React apps have a single App component at the very top.';
export const composingComponentsText3 = 'Components must return a single root element.';
export const propsReadOnlyText = 'Whether you declare a component as a function or a class, it must never modify its own props.';
export const propsReadOnlyText2 = 'React is pretty flexible but it has a single strict rule:';
export const propsReadOnlyText3 = 'All React components must act like pure functions with respect to their props.';
export const pureFunctionsText = 'Such functions are called "pure" because they do not attempt to change their inputs, and always return the same result for the same inputs.';

export const codeFunctionalComponent = `function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`;

