# Pretty Dorky (Team-RPG)

## Summary
- Pretty dorky is a simple combination runner/RPG that pokes fun at developer themes.

# Authors
- [Amanda Anderson](https://github.com/aanderson120 "Amanda's Github")
- [Brooklynne Audette](https://github.com/Izzle "Brooklynne's Github")
- [Lindsey Bordner](https://github.com/LindseyM20 "Lindsey's Github")
- [Violet](https://github.com/violettaval "Violet's Github")

## Endpoints
### Firebase/Firestore

We used this [walkthrough](https://blog.logrocket.com/user-authentication-firebase-react-apps/) from the [LogRocket Blog](https://logrocket.com/) as a guideline to build a firebase athentication.
We chose to use `react-router-dom` in place of `@reach/router`
The signin generates a unnique UID that will be passed to Mongo to retrieve the character for the signed in user.

### MongoDB 
* POST Creates a collection with character data.

* GET reads the character data.

* PUT will update when the state changes for a character during gameplay.

## Set up

Complete the following steps to start a new project (YOUR-APP-NAME):

1. Clone this repository to your local machine `git clone git@github.com:LindseyM20/team-rpg.git YOUR-APP-NAME`
2. `cd` into the cloned repository
3. Install the node dependencies `npm install`

## Scripts

Start the application `npm start`

## Deploying

When your new project is ready for deployment, add a new Heroku application with `heroku create`. This will make a new git remote called "heroku" and you can then `npm run deploy` which will push to this remote's master branch.
