export const textWhatIsReact = 'React is "a declarative, efficient and flexible library for building user interfaces". Its single role is to manage and render your user interface. On its own it does nothing more... no communication with your API, no central state manage, and no extra logic.';


export const textElements = 'Elements are the smallest building blocks of React apps, an Element describes what you want to see on the screen. Unlike browser DOM elements, React elements are plain objects, and are cheap to create. (React DOM takes care of updating the DOM to match the React elements)';

export const codeElement = `const element = React.createElement( // React elements are plain objects
    'div', // Type
    {className: 'div-class'}, // Props
    Text to show
);`;

export const codeRenderingElement = `// To render a React element into a root DOM node, pass both to ReactDOM.render():
ReactDOM.render(element, document.getElementById('root') ) //Let's say there is a <div id="root"></div> somewhere in your HTML file
`;
