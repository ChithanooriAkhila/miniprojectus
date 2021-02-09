// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
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
  

  function storeDetails(){
        var sname=localStorage.getItem('schoolname');
        var rcls=document.getElementById('class').value;
        var rrno=parseInt(document.getElementById('RollNumber').value);
        var rname=document.getElementById('Name').value;
        var rdob=document.getElementById('dob').value;
        var rgender=document.getElementById('Gender').value;
        var rcast=document.getElementById('Cast').value;
        var rfname=document.getElementById('FathersName').value;
        var rmname=document.getElementById('MotherName').value;
        var rmobnum=parseInt(document.getElementById('MoblieNumber').value);
        var ratten=parseInt(document.getElementById('Attendance').value);
        var rmarks=parseInt(document.getElementById('Marks').value);
        var ref=database.ref().child('/school/'+sname+'/'+rcls+'/'+rrno);
        var gref=database.ref().child('/counts');
        var href=database.ref().child('/counts/'+sname);
        var fc=-1;
        var mc=-1;
        var nocls=[];
        href.once('value', function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
              var childKey = childSnapshot.key;
                nocls.push(childKey);               
            });
            if (nocls.indexOf(rcls)==-1){
              alert("check the selected class");
            }
            else{
              gref.once('value',function(snap){
                fc=snap.val().female;
                mc=snap.val().male;
                if(rgender=="female"){
                    gref.child('/female').set(fc+1);
                }
                else{
                  mc=mc+1;
                  gref.child('male').set(mc);
                }
            });
              ref.set({
                student_name:rname,
                dob:rdob,
                gender:rgender,
                cast:rcast,
                father_name:rfname,
                mother_name:rmname,
                mobileno:rmobnum,
                attendance:ratten,
                marks:rmarks,
            })
              alert('information is submitted');
            }
            });
  
  }