window.onload = function() {
  console.log("loadForm");
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // these IDs from the previous steps
    emailjs.sendForm('service_w7pl1do', 'template_ryhatlh', this)
      .then(function() {
        location.replace("contact-sent.html")
        console.log('Change page!');
        console.log('SUCCESS!');

      }, function(error) {
        console.log('FAILED...', error);
      });
  });
}
