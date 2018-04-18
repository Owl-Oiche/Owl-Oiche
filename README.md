[Imgur](https://i.imgur.com/J6tzLXh.png?1)

# Welcome to Owl Oiche
Soon to be deployed on iTunes App store and Google Play store!

Use the Yelp API to retrieve information and images of various businesses that are open after midnight. 
This app was created for folks who like to keep theatrical hours AKA night owls. 

## Instructions for setup
The app is built with [Expo](https://expo.io/) and [React-Native](https://facebook.github.io/react-native/)

#### iOS
- Download the Epxo app [here](https://itunes.apple.com/app/apple-store/id982107779)
- Clone the Owl Oiche repository [here](https://github.com/Owl-Oiche/Owl-Oiche.git)
- Run the following commands in your terminal
``` 
 $ npm install 
 $ exp start
 ```
 Open a new tab in your terminal and run 
 ```
  $ exp send -s <your-phone-number-or-email>
  ```
 
#### Android
- Download the Epxo app [here](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www)
- Clone the Owl Oiche repository [here](https://github.com/Owl-Oiche/Owl-Oiche.git)
- Run the following commands in your terminal
``` 
 $ npm install 
 $ exp start
 ```
- Scan the QR code in the terminal using the Expo app. 


## What is Owl Oiche?
This app was built to showcase the benifits of React Native and hopefully help some friends out along the way. Have you ever been out late at night, way past your bedtime and needed to put somthing in your tummy? What about needing to get gas for your morning commute or Advil for that headache that you are 80% sure will hit you at 7am? Owl Oiche is here for you! From restaurants to wifi, we will show you only whats open after midnight. 
To get started type a city in the search bar and chose a tab that interests you:
- Restaurants
- Pharmacies
- WIFI
- Miscellaneous(gas stations, laundromats, and grocery stores)

You can switch tabs at any time and pull down to refresh. Tap on any business and you will be directed to the details page. From the details page just tap the arrow top left to go back to your search. Tap on a tab to search in that catagory.


## Licensing
Licensed under the AGPL license. for mor info look at our license.md file. 
We are using the [Yelp API](https://www.yelp.com/developers/documentation/v3) to fetch data.


## Known Bugs
- iOS pull to refresh
- time at midnight is parsed incorrectly

## Features comming soon!
- Image caching
- ask user for current location
- authentication for reviews and rating
- swipe to change tabs
