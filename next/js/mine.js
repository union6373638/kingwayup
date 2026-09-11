function thankyou_message() {
    var thankyouMessage = document.querySelector('.thankyou_message');

    // Always reveal the thank you panel when called, without assessing form state
    if (thankyouMessage) {
        thankyouMessage.style.display = "block";
    }
}

// REMOVED: Form tag scanning triggers 
// REMOVED: Form value verification conditions (.value != null)
