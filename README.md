## Overview

A comprehensive React Native application for exploring movies, featuring text based search for movies. Utilizes the TMDB API, styled with styled-components, and built with Expo and Javascript. This app allows users to browse movies, view detailed information on the cast and crew.

## Preview

![Screenshot 2024-09-25 at 12 49 11 AM](https://github.com/user-attachments/assets/80189c56-263b-45ac-89bf-b821e7d9cc00)


## Features
- Explore Movies: Browse through a list of movies fetched from the TMDB API.
- Movie Details: View detailed information about the movies, including synopsis, cast and crew, year, runtime, and similar movies.
- Search Functionality: Search for movies using the TMDB API.

## Tech Stack 
Framework: React Native (Expo)
Programming Language: Javascript
Styling: Styled-Components
API Integration: Axios for TMDB API requests
UI Components: React Native Paper

## Getting Started

### Prerequisites
Node.js installed on your machine
An API access token from TMDB for fetching movies
Expo Go installed on your phone or an Android/iOS emulator

### Installation
1. Clone the Repository
```
git clone https://github.com/gaurav7557/ReactSampleMovieApp.git
```
2. Install dependencies
```
npm install
```
3. Add your TMDB API access token in `config/const.js`
```
const ACCESS_TOKEN = "place_your_access_token_here";
```
4. Start the app
```
npm start
```

## Project Structure
- `/services` - Contains the service files, with API Handling
- `/screens` - Contains the Screens for the app, Home and Movie
- `/config` - Contains the configuration files for the project
- `/components` - Contains the React Native Components reused throughout the app
- `/assets` - Contains images and other resources
- `/__tests__/mock` - Contins the mocked tests for the api Calls

## Notes
Although there is a possibility of adding rendering based UTs with react, as of now the rendering libraries' support for react 18.2.0 is a bit flaky, which is causing conflict on adding the same. Can cover it post stabilization
