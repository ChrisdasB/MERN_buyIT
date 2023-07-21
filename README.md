# Buy IT - Full-Stack MERN e-commerce application

This project is a educational piece and not ment for production.
My target on this project was, to create a technically and visually solid working application.
I put extrem focus on the functionality of this app.
This project is an original and was planned, designed and implemented by myself.


[This Project is hosted on Render.com](https://buy-it-oggx.onrender.com/)

## Description

This project is split in two main part:

### Client (Frontend):
Used Tech:
- React.js
- Tailwind.css

Used packages:
- react-router-dom
- react-slick
- redux-toolkit
- redux-persist
- dotenv

The frontend contains 5 custom scenes, populated by 10 custom components.
Even though im aware, that the data-flow is not optimal, i want to describe it anyway:

- The whole store gets fetched on the HomePage and than stored in a redux-state.
  - The idea was, to accelerate the website, by having all needed data stored locally. 

- The CategoryPage is reliant on this store data and filters it locally
- The item page is more dynamic, since i need to access it from various places
  - It takes in a state, attached to the useNavigation hook
- The Shopping Cart data gets stored in a seperat, local redux-state
  - Since i use redux-persist, the cart will not get lost, even if the user leaves the site and comes back later
- The Shopping Cart always updates the given, local data from the backend, to ensure the correct pricing is beeing displayed
- The Shopping Cart calls the sprite-route in the backend, only offering IDs and quantitys

### Server (Backend):
Used Tech:
- Node.js
- Express.js

Used packages:
- body-parser
- cors
- dotenv
- helmet
- mongoose
- stripe

The backend offers 3 routes, protected by an API-Key to restrict access.
The backend is connected to a MongoDB collection.

### My Takeaway
#### Lessons learned:
A brief planning phase enabled me to actually build this. Even though it is, in the grand scheme of WebDev, a small App, without a plan i would get lost mid way.
I first attempted to use MaterialUI for the frontend, but it felt a little too much for an App this size.
I switched to Tailwind.css instead and learned the usage along the way.
I learned a lot about error handling. To show the user the all-red error screen of React would be traumatizing i guess ...
Because i carefully planned out my DB schmema in the beginning, the integration of stripe was pretty straight forward.

#### Not so good
My data-flow on the frontend is lacking. I first thought its a great idea to have only one, big API call.
For a static store like this, this might be ok. But on an actual store, prices and products can change every minute.
So for an actual production-ready store, this attempt is really not the best.
Because of the way i implemented all this, i had to ensure a solid error handling.

#### What will i change next time
- The data-flow on the frontend has to be more flexible and i need more frequent updates from the backend.
- I would store all item realted data in the backend. In this example, i stored the images in the frontend.
- I need to plan the design and UI more detailed before starting a project like this. Designing a lot 'on the fly' takes too much time.
