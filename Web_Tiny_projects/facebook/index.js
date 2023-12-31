let form = document.querySelector("form"),
  email = document.querySelector(".email"),
  text = document.querySelector(".text"),
  password = document.querySelector(".password");

//console.log(email);
// console.log(error);
// console.log(password);
// console.log(subm);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  //   let pattern = /^[^a-z]{6}@[gmail]\.com /;

  form.classList.add("error");
  form.classList.remove("valid");

  if (email.value == "") {
    text.innerText = "where email";
  } else if (!email.value.match(pattern)) {
    text.innerText = "please, enter a valid email";
  } else {
    form.classList.replace("error", "valid");
    text.innerText = "valid";
  }
});

if (email.validity.valueMissing) {
  text.innerText = "where email";
}
