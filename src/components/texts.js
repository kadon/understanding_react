export const textWhatIsJsx = 'It is called JSX, and it is a syntax extension to JavaScript. We recommend using it with React to describe what the UI should looks like. JSX may remind you of a template language, but it comes with the full power of JavaScript.';

export const codeJsx = `// JSX produces React "elements"
const element = <h1>Hello, world</h1>;
ReactDOM.render(
    element,
    document.getElementById('root')
);`;

export const codeJsxChildren = `// JSX tags may contain children
const element = (
    <div>
        <h1>Hello!</h1>
        <h2>Good to see you here.</h2>
    </div>
);`;

export const jsxFeatures = [
    'You can embed any JavaScript expression in JSX by wrapping it in curly braces. For example, 2 + 2, user.firstName, and formatName(user) are all valid expressions.',
    'JSX is an Expression Too. After compilation, JSX expressions become regular JavaScript objects. This means that you can use JSX inside of if statements and for loops, assign it to variables, accept it as arguments, and return it from functions',
    'If a tag is empty, you may close it immediately with />, like XML: const element = <img src={user.avatarUrl} />;',
    'Babel compiles JSX down to React.createElement() calls.'
];
