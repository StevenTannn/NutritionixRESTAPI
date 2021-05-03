# Nutritionix REST API

## Overview

Nutrition based on Food and Exercises Calories Burn Estimation API.
Build using NodeJS.
API Source from : Nutritionix API V2 https://developer.nutritionix.com/docs/v2

## Features

-   Get nutrition data based on what you eat
-   Search food nutrition data
-   Search food nutrition data based on branded item
-   Calculate calories burned when doing exercises
-   Get nearby restaurant based on latitude and longitude

## Docs

-   API Documentation : https://stevenputratanoto.docs.apiary.io/#
-   Architeture Documentation :

## Requirement

The system requirement for running this project:

-   Nodejs
-   yarn

## Running this project locally

-   ### Prepare .env
    -   Create .env file using .env.example as a template
        -   API_URL : API URL (https://trackapi.nutritionix.com/v2)
        -   PORT : Server running port
        -   JWT_KEY : JWT secret key
        -   API_KEY : Nutritionix API key
        -   API_APP_ID : Nutritionix API APP ID

-   ### Using yarn :
    -   Clone this repo
    -   Install dependencies with console
        -   `yarn install`
    -   Using console start the server
        -   `yarn start`

## Before You Start

-   To get API_KEY and API_APP_ID from Nutritionix API you must register first at (https://developer.nutritionix.com/signup)
-   To get AccessKey you must first call /login endpoint with request body {"user":"anythingyouwant"}

## Dependencies Used in this Application

-   Axios
-   CORS
-   dotenv
-   Express
-   Faker
-   JSONWebToken
-   Morgan
-   Nodemon