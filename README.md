#  Jerome’s Bookshop

## Synopsis

This site is based on the Everyman’s Library and gives users information regarding a large collection of classic books, featuring a *Wikipedia* API.

## Motivation

During the later part of the 19th century and the early 20th century, several publishing houses came across the idea of making, what was known at the time as the Western canon of books (a collection of books that that scholars generally accept as the most important and influential in shaping the Western culture), available to everyone in society. The Everyman’s Library is one of the most prominent series, and this site is made to introduce users to the books and authors in this catalogue of classical texts, via an open platform API. 

## Initial UX

The initial mobile and desktop wireframes can be seen below:
![jerome](https://cloud.githubusercontent.com/assets/22433378/23317255/8588e0ae-fac5-11e6-94ac-abd2fa382467.JPG)

## Functionality

The site's functionality includes:

* A database of over 80 classical books from the Everyman’s Library.
* Summaries of the relevant information of the books.
* A Favourites option. 
* Listing of all callable data via *Wikipedia* on any given search query with links to the requested data.

## Technical

The site is built with HTML, CSS, JavaScript, jQuery and Node.js. It makes use of JSON calls to the *Wikipedia* Open Platform API to return the data. All data is held in memory during the user's session. It has been built to be fully responsive across mobile, tablet and desktop screen resolutions.

## Development Roadmap

This is v1.0 of the site, future enhancements are expected to include:
* Expanding the database to include the full Everyman’s Library catalogue and other classical books series such as the Oxford World Classics and the Penguin Classics. 
* Increasing the level of detail and optionality for each book.
* Enabling the list of books marked as Favourites to be exportable to a PDF or as an email attachment. 

## User Stories

* As a student I want to find out more about classical books, in particular in philosophy. 
* As an educator I want to show students a list of seminal texts on an interactive platform. 
* As someone with a casual interest in reading I want to be able to find out what's so special about this type of books.

