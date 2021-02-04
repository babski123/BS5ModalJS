//Generates a Boostrap Modal Element / Node
class BSModal {
//id - Element ID of the Modal
//title - Title of the Modal
//message - Message of the Modal
//callBack - function to call when the confirm button of modal is clicked
    constructor(id, title, message, callBack) {
        //parent element
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
                    
        this.modalElement = pElem;
                    
        }
    }