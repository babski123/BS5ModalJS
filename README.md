# BS5ModalJS
A JavaScript class for creating Bootstrap 5 Modals
## Why BS5ModalJS?
BS5ModalJS removes the hassle of writing the bootstrap 5 modal html elements manually in your document. It will create those elements for you automatically when you instantiate it and prepends to your document's `<body>`. Useful if you intend to add modals throughout your website.
## Prerequisite
In order for BS5ModalJS to work, you must refer bootstrap 5 main framework in your document.
```
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
```

You may also include bootstrap 5 javascript library if you prefer to use javascript in toggling your modals.
```
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
```

## Usage
To use BS5ModalJS, just instantiate `BSModal` class and pass the required parameters. The constructor will create the necessary elements and prepends the created modal in your document's `<body>` automatically. The modal will be hidden by default and must be toggled to be visible.

#### Constructor Parameters
The parameters must be in the following order:
1. `id` {string} required
    - Unique identifier of the modal. BSModal will use this parameter to toggle the visibility of the modal.
2. `title` {string} required
    - The header of the modal.
3. `message` {string} required
    - The main message of the modal. This parameter accepts HTML strings. String escaping is a must when passing html tags with attribute values.
4. `callBack` {function} optional
    - A callback function to be executed when the user clicks the confirm button of the modal. This is where you should execute the necessary actions when the user clicks confirm.
    
#### Properties
##### modalElement {node}
    A reference to the created modal element.
##### elementId {string}
    Stores the unique identifier of the modal element.
##### elementTitle {string}
    Stores the title of the modal element.
##### elementMessage {string}
    Stores the message of the modal element.
##### modalDialog {node}
    A reference to the modal dialog element.
##### cancelBtn {node}
    A reference to the modal's cancel button element.
    You can change the cancel button's text by changing the `innerText` property of this element
##### confirmBtn {node}
    A reference to the modal's confirm button element.
    You can change the confirm button's text by changing the `innerText` property of this element
#### Methods
##### toggleButton(innerText, classes)
  Creates and returns a `<button>` element that toggles the modal when clicked. You must append this element manually in your document to be visible.
  ###### Parameters
  Parameters must be in order:
  1. `innerText` {string} optional<br>
    The text displayed in the button. Default is "Submit".
  2. `classes` {string} optional<br>
    Specifies the class of the button. Can accept space-separated class names.
    Default is "btn btn-btn-outline-primary".
##### staticBackdrop()
  Call this method if you don't want the modal to dismiss when clicking the background.
##### scrollableDialog()
  Call this method to turn the modal's dialog into a scorallable dialog.
  This means that the header and footer will not scroll with the modal's content.
##### verticallyCentered()
  Call this method to center the modal vertically
##### changeSize(size)
  Call this method if you want to change the modal's size.
  ###### Parameters
  `size` {string} required
  * xl - Extra large 1140px
  * lg - Large 800px
  * sm - Small 300px
##### removeAnimation()
  Removes the animation (fade effect). The modal will simply appear / disappear insteading of fading to view.


#### Example
Here is an example of instantiating the class.
```
let myModal = new BSModal("myModal", "Test Modal", "Hi. I am a test modal! Are you sure you want to test me?", function() {
    console.log("Modal is working!");
});
```
The code above generates modal element that becomes the first child of your document's `body`. Now, let's create a toggle button.
```
let toggleBtn = myModal.toggleButton("Try me!");
```
Then, just append the `toggleBtn` element anywhere in the document. In this example, we'll append it to the document's `body`.
```
document.body.appendChild(toggleBtn);
```
### Important Notes
BS5ModalJS works only with Bootstrap v5.0

### Live Demo
Here is a [live demo](http://ababagaming.com/bs5modal_demo.html) of this class in action.

### Author
Written by: Eleazer Jr. Ababa<br>
Email: eleazer@ababagaming.com<br>
Website: http://ababagaming.com	