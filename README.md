# todo

---

A simple todo app in HTML, CSS, and JavaScript.

![Image of App](/assets/images/todoapp.png "Todo App")

## Functionality

This app allows for adding, removing, and marking done todo items added in the provided text box. Todo items are stored in local storage in an array, and JSON methods (parse and stringify) are used to load that content back onto the DOM in the event of a refresh.

## Possible Improvements

In the future I might fix the bug in which the "done" status is not saved between sessions, only the text. However I believe it would require another, more complicated data structure, so I'd have to look into that more.

Additionally, there is some repeat code in my JavaScript that I'd like to refactor into their own functions, but the functionality as it stands works right now.
