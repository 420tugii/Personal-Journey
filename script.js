function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill out all fields.");
    return false;
  }

  // Simple email format check
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  alert("Message sent successfully!");
  return true;
}

window.onload = function () {
  const hours = new Date().getHours();
  const greeting = document.createElement('p');
  if (hours < 12) greeting.textContent = "Wagwan Wadau!!";
  else if (hours < 18) greeting.textContent = "Wagwan Genz!!";
  else greeting.textContent = "Wagwan Wadau!!";

  document.querySelector("main").prepend(greeting);
};
