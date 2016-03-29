## My notes:
1. I used 'yo' to generate a new Angular app with built in gulp tasks because I wanted to spend my time working the problems rather than configuring builds and whatnot.
  - That may have been a mistake as I found I didn't like the structure of the app (and others I searched) and I found the gulp tasks unnecessarily overly-complicated.
  - I believe that the structure had to do with most of the hiccups I encountered in the code challenge.
  - This has encouraged me to set up my on boilerplate for Angular projects (I have one for React ones).
2. The stuff that was pretty fast for me was:
  - Setting up the service to get info from the API and then storing that in localStorage for offline.
  - Getting the toggling of the list vs. grid views along with the tiles for the grid and list respectively.
3. The stuff where I encountered issues:
  - I spent way too much time worrying about the grid layout. I chose to go with a flexbox layout, which was fine, but I was overly concerned with it matching exactly to design provided.
  - The modal. In our Holland app, we created a service to handle them. Here, I tried to take a faster route that didn't pan out. I believe that it has to do with dependency injection issues with the structure/build of the generator I chose.
  - I believe that for that same reason, I couldn't get the filter working properly either.
4. Because I didn't get the modal or filter working, I didn't have time to start on unit or e2e tests. The ones that exist are the generic ones from the yo-generated app.
5. Had I more time I believe that I could get the dependency injection working properly and the tests written. I'd also add in media queries and an appCache manifest using the pngs provided, so that the app would perform mobile and offline first (in addition to the working localStorage).

To run the project locally, in your terminal, run 'gulp serve'.

# Rover Coding Project

The goal of this project is to create a simple page showing a list of dogs, with the ability to find out more about each dog.

The work you create here should be representative of code that we'd expect to receive from you if you were hired tomorrow. Our expectation is that you'll write production quality code including tests.

While not required, we encourage you to to add a readme (or update the existing one) to help us understand your approach work and thought process...design choices, trade-offs, dependencies, etc.

Typically, the project takes 2-4 hours to complete. There is no time limit, although we don't want to take too much of your time, so we advise people to not spend more than 5 hours on the project.

Finally, this is not a trick project, so if you have any questions, don't hesitate to ask.

### Requirements

Create a single web page for website that lists dogs and some information about them, using the following specification:

1. Fetch the collection of dogs at http://interview.rover.com/dogs.json.

2. The JSON object will contain a number of dog objects, one for each dog. In a grid on the page, display a card including the avatar image, name of the dog, name of the owner and city.

3. Implement the interface to match the mockup that our designers have provided.

4. When the user clicks on a dog in the grid, show a modal dialog with all of the dog information
  - The dog's name
  - The dog owner's name and city
  - The dog avatar

5. The page should include a control to toggle the list between grid mode and list mode.

6. As can be the case sometimes, our designer didn't have time to provide a mockup for the list view, so we are going to rely on your design judgement for the design of the list view, and the location of the toggle control.  The list view should include all the same information as in the grid card.

7. Allow a user to live-filter the list of dogs with a search bar. For example, when a user types 'Fid', it should show the dog 'Fido', as well as a dog with the owner 'Fidalgo', and any dogs living in the city 'Fidelia'

Complete this project and push your solution back to this repository. When you're finished up, email your Rover contact and let them know.