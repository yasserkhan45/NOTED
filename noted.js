//JavaScript Code

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  let ctitle = document.getElementById("ctitle");
  let notes = localStorage.getItem("notes");
  if (notes == null)
    notesObj = [];
  else
    notesObj = JSON.parse(notes);  //Converting string into JavaScript Object
  var d = [];
  d.push(ctitle.value);
  d.push(addTxt.value);
  notesObj.push(d);
  localStorage.setItem("notes", JSON.stringify(notesObj));  //Converting JavaScript object into string
  addTxt.value = "";
  ctitle.value = "";
  show();
});

// Function to show elements from localStorage

function show() {
  let notes = localStorage.getItem("notes");
  if (notes == null)
    notesObj = [];
  else
    notesObj = JSON.parse(notes);


  let h = "";
  notesObj.forEach(function (element, index) {
    h += `              <div class="notecard" style="width: 18rem";>
                        <h4 class="card-title" size="3"> ${element[0]}</h4>
                        <div class="card-text"> ${element[1]}</div>
                        <br>
                        <button id="${index}" onclick="deleteNote(this.id)">Delete Note</button>
                        <button id="${index}" onclick="editNote(this.id)">Edit Note</button>
                        </div>
              
                `;
  });
  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = h;
  } else {
    notesElm.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;<b>Notes will be displayed here.</b>`;
  }
}

//Function for Deleting particular note

function deleteNote(index) {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  show();
}

//Function for Editing particular note

function editNote(index) {
  //console.log("Hey, this is for checking!!")
  let notes = localStorage.getItem("notes");
  notesObj = JSON.parse(notes);
  let h = "";
  let e = "";
  notesObj.forEach(function (element, i) {
    if (i == index) {
      e += `${element[0]}`;
      h += `${element[1]}`;
    }
  });
  document.getElementById('ctitle').value = e;
  document.getElementById('addTxt').value = h;
  deleteNote(index);
  show();
}


function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

