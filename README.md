# Lendsqr Client Magagement Application

This project is a prototype and a submission to `Lendsqr Frontend Engineer Assesment`

## Live Demo

You can preview a live demo of this application at [sanni-habib-lendsqr-fe-test.vercel.app](https://sanni-habib-lendsqr-fe-test.vercel.app)

## Technology stacks

This project was creating using:

- [React](https://reactjs.org/)
- [Sass](https://sass-lang.com)
- [Redux](https://redux.js.org/)
- [AgGrid](https://www.ag-grid.com/)

## Overview

This application UI has been created based on the provided `figma`
design, responsiveness and functionalities have been provided by developer's descretion. I have also applied some logics for better app optimization and provided suitable messages in error cases.

### Responsiveness

This application is also as responsive as it should and also provide functionalities for all illustrated ideas in the given design. I have used `mixin` in `Sass` to create templates for my media queries and adopted nested styling in `Sass` to avoid class naming confilcts. All screen sizes have also been taken account of.

### Functionality and Optimization

I have created this project by writing functional codes using efficient algorithms. I have also adopted some optimization techniques including `useCallback`, `Lazy Loading` or components using `Suspense` and `Fallbacks`, `Caching Techniques` which has improved the app performance for better user experience.

## Application Pages

This mock-up was created having a four pages:

- [Login](#login) `/auth/login`
- [Dashboard](#dashboard) `/dashboard`
- [Users](#users) `/users`
- [User Details](#user-details) `/users/details`

### Login

This mock authentication page allows user to enter their email and password for authorization. The validation provided at the moment is to prevent empty fields, we may update this when the api rules are ready. It also uses a `useEffect` hook to prevent authenticated user from retrying. On successful login, user is navigated to the `intended location` if there is any and it defaults to the dashbaord.

### Dashboard

This pages contains a section for an overall overview of users data in cards, and also a table section that renders the data of all these users.

### Users

This page contains everything just like the dashoard but with an open filter modal which allows user to filter user data by searching with parameter for individual columns.
The user status was also appended to the response data at random for design representation

### User Details

A page that renders the users full information and allows for account settings management. It uses the `ID` property of the selected user in the user details page to fetch users data.
I have used `localStorage` to implement caching for this page. Here when the selected user data is present in the `localStorage`, the page is rendered with this data, and then the data is updated afterward in background with a loader to indicate this proccess to the user.

## Component and Features

Here are some of the reusable components features that have been created/modified for this project:

- Table Pagination controls
- Table Filters
- Custom Icons
- Custom Inputs and Selects
- Spinners and Loaders
- Overview Cards
- Status Label

## Probable Future Changes

If there there was room to add to app design, I would have a button on the table components that will optionally toggle the custom filters modal that has been created.
It there was also a status field associated with the user data received from the `API`, It would have been better and would improve the app performance.
