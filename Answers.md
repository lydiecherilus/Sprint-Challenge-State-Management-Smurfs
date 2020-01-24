1. What problem does the context API help solve?

With Context API we no longer need to pass props down from component to component. We can store data on a context object, and retrieve that data in the necessary components from the context object.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. 
What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

- actions are used to send information from the application to the store.
- reducers are functions that take the current application state and an action object and return a new application state:
-  store is the central object that holds the state of the application. 
Which is why is known as a 'single source of truth' in a redux application?

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is the "global" state that all components in the component tree can access.
Component state however, lives within that specific component.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Async Redux - it manages state through a single object (data store) where all of your application’s state is located. Which makes the application is easier to debug and test.