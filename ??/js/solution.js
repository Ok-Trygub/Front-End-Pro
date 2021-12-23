const ul = document.body.firstElementChild;
console.log(ul.attributes);

const myName = "Ksenia";

ul.setAttribute("animal", "cat");
    console.log(ul);
    console.log(ul.getAttribute("animal"));

ul.removeAttribute("data-custom");
    console.log(ul);
    console.log(ul.getAttribute("data-custom"));
