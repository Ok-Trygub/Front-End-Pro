function generateList(array){
  let ul = document.createElement('ul');
let li = null;

for(let i = 0; i < array.length; i++){
    let list;
    
    if (Array.isArray(array[i])) {
        childElement = generateList(arr[i]);
      } else {
        childElement = document.createTextNode(arr[i])
      }
      li.appendChild(childElement);
ul.appendChild(li);

}
return ul
//   console.log(ul.textContent)
}











