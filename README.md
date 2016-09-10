# todo-app

## 1. Why?

The need for developing the millionth todo-app originates from the need to showcase some developing skills.
The task was to create a todo application with Javascript and Bootstrap.
Sounds simple? Well, it would be, if not for my high demand on creating the best todo-app ever made...in approximately 8 hours and without further research on what's already existing!

## 2. What does this app? (work in progess)

This app is intended to help you organize your daily life by allowing you to add quick notes on what to do or remember.

## 3. How does it work? (work in progess)

### 3.1 User interface

In it's most simple form you have a single input field where you can enter any activity or reminder. 
Within the text field you can tag words by prefixing it with *@* or *#*.
These tags allow you to filter your entry in the actual todo-list later.
Furthermore you will have the option to add predefined informations to your entry: *date*, *time*, *location*, *urgency*.
 
Below this input field is a list of all entries.
The list may be filtered and sorted on-the-fly by several attributes and the already mentioned tags.
The tags itself are like links, allowing you to filter other entries with the same tag.

As a supplement to the list view, you'll have the option to display all events in a calendar view.
 
### 3.2 Data Persistence

The app does not (yet) use a traditional database to persist data (e.g. MySQL).
As a matter of simplicity the data is stored in-browser only, which means that every browser has its own database.

## 4. Tribute

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1...which saved me a lot of time bootstrapping the app.

## 5. Development

### 5.1 Installation

After retrieving a fresh project from the repository, don't forget to download all dependencies:

    npm install
    bower install

### 5.2 Build

Run `grunt` for building and `grunt serve` for preview.

In order to compile SASS, you'll need to have Ruby installed.

Refer to https://www.npmjs.com/package/grunt-contrib-compass#compass-task for more information.

### 5.3 Testing

Running `grunt test` will run the unit tests with karma.

### 5.4 Bower

When adding modules to bower.json, don't forget to include them in the following sources:

    app/index.html
    test/karma.conf.js
