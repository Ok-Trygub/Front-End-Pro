const elementsList = document.querySelectorAll("li");
console.log(elementsList);

const ul = document.body.firstElementChild;

const ulAttrs = ul.attributes;
console.log(ulAttrs);


const ulObj = {
  attrNamesArr: [],
  attrValueArr: [],

  getUlProperties(attrs) {
    for (let attr of attrs) {
      this.attrNamesArr.push(attr);
      this.attrValueArr.push(attr.textContent);
    }
    console.log(this.attrNamesArr);
    console.log(this.attrValueArr);
  }
};

ulObj.getUlProperties(ulAttrs);



const myName = 'Ksenia';

function changeElemContent(elem, name){
elem.lastElementChild.innerHTML = `Hi, my name is ${name}`;
console.log(elem.lastElementChild.textContent);
}

changeElemContent(ul, myName);


function setAttr(elem, attrName, attrValue){
    elem.setAttribute(attrName, attrValue);
    console.log(elem);
    console.log(elem.getAttribute('data-my-name'));
  }

  setAttr(ul, 'data-my-name', myName);


  
 function removeAttr(elem, attrName){
    elem.removeAttribute(attrName);
    console.log(elem);
    console.log(elem.getAttribute('data-dog-tail'));
  }

  removeAttr(ul, 'data-dog-tail');