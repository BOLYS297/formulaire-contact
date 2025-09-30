// Validation prénom
document.getElementById("firstname").addEventListener("input", function() {
  let val = this.value;
  let regex = /^[A-Z][a-zA-Z]+$/;
  let errorMsg = document.getElementById("firstname-error");
  if (regex.test(val)) {
    errorMsg.textContent = "";
  } else {
    errorMsg.textContent = "First name must start with a capital letter and contain only letters.";
  }
});

// Validation nom
document.getElementById("lastname").addEventListener("input", function() {
  let val = this.value;
  let regex = /^[A-Z][a-zA-Z]+$/;
  let errorMsg = document.getElementById("lastname-error");
  if (regex.test(val)) {
    errorMsg.textContent = "";
  } else {
    errorMsg.textContent = "Last name must start with a capital letter and contain only letters.";
  }
});

// Validation email
document.getElementById("email").addEventListener("input", function() {
  let val = this.value;
  let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let errorMsg = document.getElementById("email-error");
  if (regex.test(val)) {
    errorMsg.textContent = "";
  } else {
    errorMsg.textContent = "Please enter a valid email address.";
  }
});

// Validation téléphone (commence par 6, 9 chiffres)
document.getElementById("phone").addEventListener("input", function() {
  let val = this.value.replace(/\\s+/g, ''); // supprime les espaces
  let regex = /^6\d{8}$/;
  let errorMsg = document.getElementById("phone-error");
  if (regex.test(val)) {
    errorMsg.textContent = "";
  } else {
    errorMsg.textContent = "Phone must start with 6 and have exactly 9 digits.";
  }
});

// Validation à la soumission
document.getElementById("contactForm").addEventListener("submit", function(event) {
  let errors = [
    document.getElementById("firstname-error").textContent,
    document.getElementById("lastname-error").textContent,
    document.getElementById("email-error").textContent,
    document.getElementById("phone-error").textContent
  ];
  let formError = document.getElementById("form-error");
  if (errors.some(e => e)) {
    formError.textContent = "Please correct the errors before submitting the form.";
    event.preventDefault();
  } else {
    formError.textContent = "";
    alert("Message sent successfully!");
  }
});