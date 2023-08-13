const firebaseConfig = {
    apiKey: "AIzaSyBH62kGNEGntvCkDTUe1O07Q8NMHQDdDvs",
    authDomain: "sticky-notes-c5ab9.firebaseapp.com",
    databaseURL: "https://sticky-notes-c5ab9-default-rtdb.firebaseio.com",
    projectId: "sticky-notes-c5ab9",
    storageBucket: "sticky-notes-c5ab9.appspot.com",
    messagingSenderId: "1052536797764",
    appId: "1:1052536797764:web:e0003b9be0fae2c98c1a11",
    measurementId: "G-RE50KDKCPQ"
  };
  
firebase.initializeApp(firebaseConfig); //to initialize firebase
//reference for the database
var tasksDB = firebase.database().ref('tasks');

document.getElementById('tasks').addEventListener('add', addform);

function addform(e){
    e.preventDefault();

    var input= getElementVal("todo_input");
    console.log(input);
    savedata(input);

}

const savedata =(input) =>{
    var newTaskForm = tasksDB.push();
    newTaskForm.set(input);

};

const getElementVal = (id) =>{
    return document.getElementById(id).value;

};
