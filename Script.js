$(document).ready(function() {
    // Open the modal when the 'Contact Us' button is clicked
    $('#contact-us-btn').click(function() {
        $('#contactUsModal').modal('show');
    });

    // Close the modal
    $('.close').click(function() {
        $('#contactUsModal').modal('hide');
    });

    // Change project image on click
    $('#project-list a').click(function(event) {
        event.preventDefault();
        var newImage = $(this).data('image');
        $('#project-image').attr('src', newImage);
    });
});
