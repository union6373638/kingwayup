document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('');
    
    if (form) {
        form.addEventListener('submit', function (event) {
            // Stops the form from submitting or refreshing the page
            event.preventDefault(); 
            alert("Form submission is disabled.");
        });
    }
});
