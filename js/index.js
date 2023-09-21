const formElement = document.querySelector(".form-data");
const nameInputElement = formElement.querySelector("#name");
const birthdateInputElement = formElement.querySelector("#birthdate");
const pictureInputElement = formElement.querySelector("#picture");
const javascriptInputElement = formElement.querySelector("#javascript");
const sufferingInputElement = formElement.querySelector("#suffering");

const setName = (name) => {
  const deleteOffClass = document.querySelector("h2");
  deleteOffClass.classList.remove("off");

  const printName = document.querySelector(".name");
  printName.textContent = name;

  const addAttribute = document.querySelector("img");
  addAttribute.setAttribute("alt", name);
};

formElement.addEventListener("change", (event) => {
  switch (event.target) {
    case nameInputElement:
      setName(event.target.value);

      break;
    case birthdateInputElement:
      // Invoca a la función para poner la edad
      break;
    case pictureInputElement:
      break;
    case javascriptInputElement:
      // Invoca a la función para poner si ha programado previamente JS o no
      break;
    case sufferingInputElement:
      // Invoca a la función para poner el grado de sufrimiento
      break;
  }
});
