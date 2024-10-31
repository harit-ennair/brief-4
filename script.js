
let stoc=[];


function add(){
  var mytitle = document.getElementById('title').value;
  var mydate = document.getElementById('date').value;
  var mydescription = document.getElementById('description').value;
  var mychos =  document.getElementById('chos').value;


  stoc.push([mytitle,mydate,mydescription,mychos]);


    if (mytitle === '' || mydate === '' || mydescription === '' || mychos === '') {
     alert("You must write something!");
    }else{
      let table = document.getElementById('table');
      let newRow =table.insertRow();
      newRow.classList.add("border-bottom","brd_btm");


      let cel = newRow.insertCell(0);
      let cel1 = newRow.insertCell(1);
      let cel2 = newRow.insertCell(2);
      let cel3 = newRow.insertCell(3);
      let cel4 = newRow.insertCell(4);


      cel.textContent=mytitle;
      cel1.textContent=mydate;
      cel2.textContent=mydescription;
      cel3.textContent=mychos;


      cel.classList.add("text","text-center");
      cel1.classList.add("text","text-center");
      cel2.classList.add("text","text-center","col-5");
      cel3.classList.add("text","text-center");


      let button=document.createElement('button');
      button.textContent="EDIT";
      cel4.appendChild(button);
      button.classList.add("btn","btn-warning","m-2");


      let button1=document.createElement('button');
      button1.textContent="DELITE";
      cel4.appendChild(button1);
      button1.classList.add("btn","btn-danger","m-2");


      button1.addEventListener('click', () => {
        table.deleteRow(newRow.rowIndex);
      });


      if (mychos === "DONE") {
        newRow.style.backgroundColor = '#d4edda';
      } else if (mychos === "IN PROGRESS") {
        newRow.style.backgroundColor = '#fff3cd';
      } else {
        newRow.style.backgroundColor = '#f8d7da'; 
      }


      button.addEventListener('click', () => { 
        document.getElementById('title').value = mytitle;
        document.getElementById('date').value = mydate;
        document.getElementById('description').value = mydescription;
        document.getElementById('chos').value = mychos;
        table.deleteRow(newRow.rowIndex);
      });


    }


  document.getElementById("title").value = "";
  document.getElementById("date").value = "";
  document.getElementById("description").value = "";
  document.getElementById("chos").value = "TO DO";
  console.log(stoc);
}