Notes for WDYWE web app:

-Statement: WDYWE aims to solve the age old question of, what do you wanna eat tonight? (eventually to be what do you wanna do tonight? potentially) 

-UX: A user visits the site and is welcomed with a splash screen that allows an unregistered user to get a random request after providing their zipcode.

Additionally they will be presented with a login/sign up box

A user will need to create an account to make the most of the app.

During the signup process, a user is asked to designate a username, email, password, zipcode. After an account is created the user will then be asked to answer several questions about their cuisine preferences (mexican, italian, etc..) 

The homepage will have a get started box with a series of choices related to food to give them a preferable random recommendation. A user can then accept or pass for another option. OR a user can just pick to have a completely random suggestion with no input. 

A result will present limited info from yelp API, a picture for the business, the title, rating (yelp rating for now). A few of the most recent reviews (5 for now). There will also be a map leveraging Google Maps API that will show the location and give the options to get directions (show travel time?).

React Layout:
    App
        +Nav
            -logo
            -Burgermenu (top right)
        +Map
        +Reviews (Index-5 most recent?)
            -Reviews List
            -Review popup (li on click display)
        +ChoicesMenu
        +Recommendation

Rails API:
    -User model
        -username, email, password, zipcode
    -Preferences model
        -cuisines array

