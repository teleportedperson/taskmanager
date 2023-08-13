import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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

  var DB = firebase.database().ref();
  DB.on("value",function(snapshot){
      console.log(snapshot.val());
  },function(error){
      console.log(error);
  });
  
  
  
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//reference for the database
var DB = firebase.database().ref();
DB.on("value",function(snapshot){
    console.log(snapshot.val());
},function(error){
    console.log(error);
});

function addform(){
    var input= getElementVal("todo_input");
    if(input == "")
    alert("empty");
    else
    {
        console.log(input);
        savedata(input);
    }
    

}


document.getElementById('tasks').addEventListener('add', addform);



const savedata =(input) =>{
    var newTaskForm = tasksDB.push();
    newTaskForm.set(input);

};

const getElementVal = (id) =>{
    return document.getElementById(id).value;

};
