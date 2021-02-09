// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcJAty-qsr1_jWa7uy8raq71_WXLcazFY",
  authDomain: "ak13-c74e2.firebaseapp.com",
  databaseURL: "https://ak13-c74e2-default-rtdb.firebaseio.com",
  projectId: "ak13-c74e2",
  storageBucket: "ak13-c74e2.appspot.com",
  messagingSenderId: "88738477785",
  appId: "1:88738477785:web:8a5793e7e1e40e53fd30c8",
  measurementId: "G-0KTNWLGSHD"
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);
var database=firebase.database();
function verifydetails(){
    console.log("entered");
    var email=document.getElementById("email").value;
    var pwd=document.getElementById("pwd").value;
    console.log(email+pwd);
    var name=email.split("@");
    var ref=database.ref().child('/dtpusers');
    var ok=0;
    ref.once("value").then(function(snapshot){
        snapshot.forEach(function(childSnapshot) {
          if(name[0] == childSnapshot.key && pwd == childSnapshot.child("pwd").val()){
            localStorage.setItem('schoolname',childSnapshot.val().sname);
            window.location.href="dtp.html";
            ok=1;
          } 
        });
        if(ok==0) window.alert("verify your credentials");
    });
  }