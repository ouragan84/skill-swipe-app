# Skill Swipe App

Skill Swipe is a mobile app built with **React Native, Node.js, Express.js, and MongoDB** as the database/backend. 

This repository contains the React Native Client.

Recruiters can use Skill Swipe to streamline the hiring process and find the best talent for their organization. They can post job openings and receive applications from qualified candidates who match their requirements.

As a user of Skill Swipe, the experience is straightforward and user-friendly. Users create a profile with their work experience, education, and other relevant information, and the platform matches them with job openings that match their skills and experience.

Our implementation is an mobile web app running on both IOS/Android

## Preview:

#### Business view:

<img width="957" alt="image" src="https://github.com/ouragan84/skill-swipe-app/assets/77756530/78b61d42-023e-4a62-bcc2-5ad0be9c4cce">

#### User view:

<img width="959" alt="image" src="https://github.com/ouragan84/skill-swipe-app/assets/77756530/f83e5ce4-2f07-493d-8dc9-cbf62fd2a4ee">


## Before Starting

Add a `.env` file at the root of the directory containing the web url of the backend server. To run using the delpoyed backend, add:

```
API_URL=https://skill-swipe-backend.onrender.com
```

To instead use the local server, add:

```
API_URL=http://localhost:3000
```

Note: you might have to restart your node environement after making changes to the `.env` because of limitations of the `dotenv` library.

Please make sure to have `npm` and `node` installed with version `18.x.x` or greater (`node -v` to check version).

To install node, please visit [nodejs.org](https://www.nodejs.org/)

Then, run the following code to install dependencies:

```
npm config set legacy-peer-deps true
npm install expo-cli -g
npm install
```

 - The first line installs the expo client
 - The second line installs all other dependencies

## To Run

```
npm start
```

## Quick Set Up for IOS / Android
Install the Expo App on your IPhone / Android Device<br />

In order to run it,<br />
Scan the QR code in the camera app, and it should redirect you to the expo app

Note: make sure that your phone is on the same wifi as your computer (where you inputted npm start). Also, you cannot use a local server while using your phone (because your phone is separate from your computer and cannot access local resources)

## Set Up Android Emulation

https://www.youtube.com/watch?v=L-EhHG3kfKM

## Set Up IOS Emulation

https://www.youtube.com/watch?v=BZ0P3K_8HaY
