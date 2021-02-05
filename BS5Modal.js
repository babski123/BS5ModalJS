/**
  * BS5ModalJS - A JavaScript class for creating
  * Bootstrap 5 Modals in your document.
  *
  * This removes the hassle of writing the Bootstrap 5
  * HTML elements manually in your document. This class
  * will create those elements for you automatically.
  *
  * @author Eleazer Jr. Ababa
  * @contact eleazer@ababagaming.com
  * 
  * @prerequisite
  * The main bootstrap 5 framework must be referred by
  * your document.
  * @link https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css
  * 
  * You may also include the javascript library of
  * bootstrap 5 if you prefer using javascript to
  * toggle the modals
  * @link https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js
  *
*/


/**
  * @class {class} BSModal
  * this is the main class of BS5Modal
*/
class BSModal { 
    /**
      * @constructs
      * The constructor takes care of creating the
      * nodes/elements and automatically prepends to
      * your document's <body>
      *
      * @param {string} id              unique identifier of the modal
      * @param {string} title           this will be the header of the modal
      * @param {string} message         the main message of the modal
      *                                 accepts html values
      * @param {function} callBack      a function that will be called when
      *                                 the user clicks confirm button in the
      *                                 modal
    */
    constructor(id, title, message, callBack = null) {
        
        //the main container of the element (parent)
        let pElem = document.createElement("div");
        pElem.classList.add("modal");
        pElem.classList.add("fade");
        pElem.setAttribute("id", id);
        pElem.setAttribute("tabindex", "-1");
        pElem.setAttribute("aria-labelledby", id + "Label");
        pElem.setAttribute("aria-hidden", "true");
                    
        //modal dialog
        let mDialog = document.createElement("div");
        mDialog.classList.add("modal-dialog");
                    
        //modal content
        let mContent = document.createElement("div");
        mContent.classList.add("modal-content");
                    
        //modal header
        let mHeader = document.createElement("div");
        mHeader.classList.add("modal-header");
                    
        //modal title
        let mTitle = document.createElement("h5");
        mTitle.classList.add("modal-title");
        mTitle.setAttribute("id", id + "Label");
        mTitle.innerText = title;
                    
        //modal close button
        let mCloseBtn = document.createElement("button");
        mCloseBtn.classList.add("btn-close");
        mCloseBtn.setAttribute("type","button");
        mCloseBtn.setAttribute("data-bs-dismiss", "modal");
        mCloseBtn.setAttribute("aria-label", "Close");
                    
        //modal body
        let mBody = document.createElement("div");
        mBody.classList.add("modal-body");
        mBody.innerHTML = message;
                    
        //modal footer
        let mFooter = document.createElement("div");
        mFooter.classList.add("modal-footer");
                    
        //modal cancel button
        let mCancelBtn = document.createElement("button");
        mCancelBtn.classList.add("btn");
        mCancelBtn.classList.add("btn-secondary");
        mCancelBtn.setAttribute("type", "button");
        mCancelBtn.setAttribute("data-bs-dismiss", "modal");
        mCancelBtn.innerText = "Close";
                    
        //modal confirm button
        let mConfirmBtn = document.createElement("button");
        mConfirmBtn.classList.add("btn");
        mConfirmBtn.classList.add("btn-primary");
        mConfirmBtn.setAttribute("type", "button");
        mConfirmBtn.setAttribute("data-bs-dismiss", "modal");
        mConfirmBtn.innerText = "Confirm";
        
        //execute the callback function once user clicks confirm button
        mConfirmBtn.addEventListener("click", callBack);
                    
        //ASSEMBLE THE NODES
        //append the footer buttons to the footer
        mFooter.appendChild(mCancelBtn);
        mFooter.appendChild(mConfirmBtn);
                    
        //append the title and the close button to the header
        mHeader.appendChild(mTitle);
        mHeader.appendChild(mCloseBtn);
                    
        //append the header, body and footer to modal content
        mContent.appendChild(mHeader);
        mContent.appendChild(mBody);
        mContent.appendChild(mFooter);
                    
        //append the modal content to the modal dialog
        mDialog.appendChild(mContent);
                    
        //append the dialog to the parent element
        pElem.appendChild(mDialog);
                    
        //finally prepend the modal element (pElem) to the document's body
        document.body.prepend(pElem);
        
        
        /**
          * @prop {node} modalElement
          * this property holds the element
          * of the modal
        */
        this.modalElement = pElem;
        
        /**
          * @prop {string} elementId
          * this property stores the element's
          * id attribute value
        */
        this.elementId = id;
        
        /**
          * @prop {string} elementTitle
          * this property stores the element's
          * title
        */
        this.elementTitle = title;
        
        /**
          * @prop {string} elementMessage
          * this property stores the element's
          * message
        */
        this.elementMessage = message;     
        
    }
    
    
    /**
      * @method toggleButton
      * Create and returns a bootstrap 5 button that toggles
      * the modal when you click it
      *
      * @param {string} innerText       the innerText propery of the button
      *                                 default is "Submit"
      * @param {string} classes         specifies the class name of the button
      *                                 if multiple, should be separated by spaces
      *                                 use this parameter to design the button
      *                                 default is "btn btn-outline-primary"
      *
      * @return {node} button           the generated button element
    */
    
    toggleButton(innerText = "Submit", classes = "btn btn-outline-primary") {
        
        let button = document.createElement("button");
        button.setAttribute("type", "button");
        button.setAttribute("data-bs-toggle", "modal");
        button.setAttribute("data-bs-target", "#" + this.elementId);
        button.className = classes;
        button.innerText = innerText;
        
        return button;
        
    }
    
}