// this js is for client side validation(checking if emails match)
// also stores data temporary for session storage
// no submission to a server

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    const email = document.getElementById("email").value;
    const confirmEmail = document.getElementById("confirmEmail").value;
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const question = document.getElementById("question").value;

    // Prevent the form from actually submitting
    event.preventDefault();

    // Check if emails match
    if (email !== confirmEmail) {
      alert("Email addresses do not match. Please try again.");
    } else {
      // storing form data in sessionStorage(temporary)
      sessionStorage.setItem("firstName", firstName);
      sessionStorage.setItem("lastName", lastName);
      sessionStorage.setItem("email", email);
      sessionStorage.setItem("question", question);

      // Log sessionStorage contents to the console
      console.log("First Name:", sessionStorage.getItem("firstName"));
      console.log("Last Name:", sessionStorage.getItem("lastName"));
      console.log("Email:", sessionStorage.getItem("email"));

      // Show success message
      document.getElementById("successMessage").style.display = "block";

      //  hide the form and heading because success
      document.getElementById("contactForm").style.display = "none";
      document.getElementById("contactHeader").style.display = "none";
      l;
    }
  });
