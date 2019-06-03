- [1] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

PropTypes are used to ensure that the props that are being passed into a component are exactly what that component expects.  PropTypes helps to make sure that our code is performing exactly as we intended and helps to keep hard to track bugs down.

- [2] Describe a life-cycle event in React?

Life-cycle events in React describe the life-cycle phases of a component.  There is the mounting phase, the update phase, and the unmounting phase.  During each of these phases, React gives us methods where we have an opportunity to take advantage of these stages and perform some operations due to the logic demands of the app.

- [3] Explain the details of a Higher Order Component?

A higher order component is a component that takes in another component as an argument.  This higher order component extends functionality to the component being passed into it.

- [4] What are three different ways to style components in React? Explain some of the benefits of each.

    1. Plain CSS, either inline, or in a separate file.  This is very easy and allows for styling without any new learning curve required; 
    2. ReactStrap, a library which gives us premade components from Bootstrap that we can almost simply drop in to our project.  This is great but it does confine us to their look and feel;
    3. Styled-Components, which allows us to use plain CSS, but does so by allowing us to use prop types to allow us some additional logic when styling, such as conditional styles based on prop types.