- [x] Why would you use class component over function components (removing hooks from the question)?

    The main reason I’d use a class component instead of a function component is because I had to for business reasons (company standards, working with old code, cranky old boss, etc.). Another reason would be to use react component lifecycle methods to control how my components work. 

- [x] Name three lifecycle methods and their purposes.

    `render()` method is one of the React lifecycle methods that is used to tell React, to return some piece of DOM
    `componentDidMount()` method gets called as soon as the render method is called the first time
    `componentDidUpdate()` is invoked immediately after updating occurs, but is not called for the initial render

- [x] What is the purpose of a custom hook?

    The purpose is to apply non-visual behavior and stateful logic in a reusable way. Custom hooks help support the D.R.Y. principal. 

- [x] Why is it important to test our apps?

    Testing is important because it helps prevent bugs from making it into production code. Testing can help us think about edge cases and act as a safety net when making changes or refactoring our code. By NOT testing, you might save a little time up front, but that can lead to costly/time-consuming issues down the road. 