# Ionic SPA Ironhack Challenge

This is a SPA build for a fictional cat shelter using [Angular CLI](https://github.com/angular/angular-cli), [Ionic](https://ionicframework.com/) and [Firebase](https://firebase.google.com/). The page offers the user the opportunity to browse, add, delete and update cats from a made-up shelter database of homeless cats.

<code>Warning!</code>

As of 09/02/24 the deployed page won't let users perform any HTTP requests, and therefore won't be able to properly access the main page functionalities (you'd still be able to auth and view the homepage, though). The reason behind this decision is that I have tweaked Firebase's rules so the database can't be accessed due to some security reasons related to Google API keys. However, the demo video could still show you the main page's functionality. Nonetheless, please do not hesitate to drop me a message if you're keen to check it out live so I activate the DB for you - it's still possible, and the page is completely secured for users to use.

<br>
<p align="center">
  <img src="/src/assets/images/cat-shelter-logo.png" style="width:150px;"/>
</p>
<p align="center">
<a href="https://trello.com/b/eRTb7466/ionic-project">Trello board</a>
|
<a href="https://docs.google.com/presentation/d/1cdWIT_RsuIMqxIgxhD6Xyk1BGv26i3Lt9HPK-9Ys9jM/edit?usp=sharing">Presentation</a>
|
<a href="https://cat-shelter-ionic.web.app/">Deployed page</a>
</p>

## Table of Contents

- [Wireframes and Project Management](#wireframes-and-project-management)
- [Setup](#setup)
- [Technologies Used](#technologies-used)
- [Components and Pages Structure](#components-and-pages-structure)
- [Main Functionalities and Characteristics](#main-functionalities-and-characteristics)
- [Demo](#demo)
- [Future Work](#future-work)
- [Resources](#resources)
- [Team Members](#team-members)

## Wireframes and Project Management

Besides using some breathtaking amount of pen and paper, I used Miro and Trello to create wireframes and to project manage. This significantly aided me in getting this project done in less than 45h.

**Wireframe**

<p align="center">
  <img src="/src/assets/images/miro-wireframe.png">
</p>

<br>

**Task management**

<p align="center">
  <img src="/src/assets/images/trello.png"/>
</p>

## Setup

### Clone this repository

Open Git Bash in your local machine, change the current working directory to the location where you want the cloned directory. Type `git clone https://github.com/asm-dev/ionic-final-project.git`, press enter and voilà.

### Install NPM and run Ionic serve

Go to the directory of this project. You can do this by using `cd` and the name of the cloned repo directory or by manually finding the directory and running Git Bash there. You'd then need to run `npm install`, and once that NPM is installed you're good to use `ionic serve`. Once Ionic serve is done, you shall be able to view the project here `http://localhost:8100/`

## Technologies Used

**Languages and frameworks**

- TypeScript
- JavaScript
- HTML
- SCSS
- Angular
- Ionic

**Deployment and control system**

- Git
- GitHub

**Additional tools**

- Miro
- Trello
- Firebase
- Google API
- VSC

## Components and Pages Structure

The main folder you should take a look at to understand how the app is structured is `/src`. There you will find:

- `/app` stores the pages and components. `/auth` contains the files to set up the authentication system, `/cats` the pages and components that refer to "Browse Cats" and "Your Cats", including the "Cat Details" page. `home` refers to the homepage, `error` to the error page, `/shared/models` stores our cat.model.ts file and lastly in `utils` you'll find the custom validators used in the page's forms.
- `/assets` contains the images, audios and icons.
- `/environments` here you can find our API keys.
- `/theme` includes some styling settings.

## Main Functionalities and Characteristics

- Clean, modular and efficient code.
- State Management. RxJS Subjects are dynamic and store data generated both locally and from API calls.
- Users can perform a variety of CRUD operations thanks to Observables and RXJS.
- Efficient storage and retrieval of the data. The app communicates with a Firebase Realtime Database that acts as REST API.
- Frontend validation with robust error handling.
- Highly curated, logical and well-thought-out component architecture.
- Ease of navigation. Refined routing with greatly connected components. Available menu and tabs to navigate between pages.
- Responsive layout. Consistent and pleasant UI that follows a mobile first approach, pages feel like parts of a whole.
- Enhanced experience. Filtration, Authentication with Firebase, Google Maps integration and web app deployment using Firebase Hosting.

## Demo

[Demo video](https://www.youtube.com/watch?v=Jwn_5P8g9Vk&t=9s)

## Future Work

- Replace the placeholder maps with and the actual stored cats' location
- Create a model that would allow users to display and interact with a bigger map
- Implement a search bar
- Move tabs to the top of the page for large screens
- Improve data handling and experience with virtual scrolling
- Require extra confirmation before deleting a cat from the database

## Resources

- [Ionic documentation](https://ionicframework.com/docs)
- [Capacitor documentation](https://capacitorjs.com/docs)
- [Colour palette generator](https://coolors.co/4c8577-a6ece0-7adfbb-9d44b5-32322c)
- [Cat API](https://thecatapi.com/)

## Team Members

I built this project with the advice and assistance of my Ironhack mentors:

- [Shaun](https://github.com/IronhackShaun)
- [Raymond](https://github.com/RaymondMaroun)
