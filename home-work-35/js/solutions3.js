function createTable(){
  let tableStart = document.createElement('table');
  document.body.append(tableStart);
    console.log(document.body.childNodes);

for(let a = 0; a < 10; a++){
    let tr = document.createElement('tr');
    document.body.append(a);
    
    for (let b = 0; b < 10; b++){
        let td = document.createElement('td');
        document.body.append(b);
    }
  



}


}

createTable();
