# Punch List Map
This repository contains a simple frontend-only implementation of a [Punch List](https://en.wikipedia.org/wiki/Punch_list) that also has an interactive map to display tasks.

## Technologies Used
  - [ReactJS](https://reactjs.org/)
  - [Google Map React](https://github.com/google-map-react/google-map-react#readme)
  - [RamdaJS](https://ramdajs.com/)
  - [Redux](https://redux.js.org/) and [React-Redux](https://github.com/reduxjs/react-redux)
  - [Styled Components](https://styled-components.com/)
  - and [Jest](https://jestjs.io/) for testing

## Trade-Offs
In the interest of time rather than setting up a RESTful service to interact with for seed data I hydrate the redux store synchronously on startup with some sample data. One feature that I had wanted to add but ran out of time was the ability to create new tasks as well as the ability to update the status of tasks rather than just moving through them. If you want a non-development version of the google map you'll need to provide your own API Key to `Google-Map-React`.

## Design Decisions
I decided to implement a single list of tasks that is filterable and allows you to expand tasks to inspect them on demand. In addition, all tasks have markers on the map that can be clicked on to bring focus to the task in the drawer. When running or accessing the site you can provide query parameters like: `http://localhost:1234/punch-list?discipline=P&status=COMPLETE` to get all completed plumbing tasks. You can also use the filters from the drawer directly.