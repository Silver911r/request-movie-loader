# Simple Movie Search Using OMDB

Uses the omdpapi.com to search for a term, then displays the response.

This project uses an express server, but there is also a standalone.html, that will make the movie search from your browser without any server set up.  Just put your api key in the html where marked and you are good to go.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them

```
You will need to install Node from https://nodejs.org/en/download/
```

If you have Homebrew you can run brew install node

```
You will also need an api key from http://www.omdbapi.com/apikey.aspx
```

### Installing

A step by step series of examples that tell you how to get a development env running

Download repo to your computer

```
Run NPM install command in the folder that contains the package.json file.
```

Create .env file with MOVIE_API_KEY=YOURKEY

```
Run the command 'npm start'
```


## Built With

* [Express](https://expressjs.com) - Used for WebServer
* [Request](https://github.com/request/request) - Handles the API call
 

## Authors

* **RJ Simpson** - *Initial work* - [silver911r](https://github.com/silver911r)

## Acknowledgments

* Thank you Pak for presenting this project idea in class

