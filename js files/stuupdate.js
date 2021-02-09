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
  
    function update() {
        var sname=localStorage.getItem('schoolname');
        var cls=document.getElementById('Class').value;
        var ref=database.ref().child('/school'+'/'+sname+'/'+cls);
        var href=database.ref().child('/counts/'+sname);
        var rno=document.getElementById('RollNumber').value;
        var field=document.getElementById('Field').value;
        console.log(typeof field+ field);
        var value=document.getElementById('value').value;
        var nocls=[];
        var rno1=[];
        var flag;
        var flag1;
        href.once('value', function(snapshot) {
          snapshot.forEach(function(childSnapshot) {
            var childKey = childSnapshot.key;
              nocls.push(childKey);               
          });
          if (nocls.indexOf(cls)==-1)
            flag=false;
          else 
            flag=true;
            ref.once('value', function(snap) {
              snap.forEach(function(childSnap) {
                var key = childSnap.key;
                  rno1.push(key);               
              });
              if (rno1.indexOf(rno)==-1)
                flag1=false;
              else
                flag1=true;
              if(flag == true && flag1 == true){
                var x= parseInt(value);
                if(field=="dob")
                ref.child('/'+rno+'/'+field).set(value);
                else if (isNaN(x))
                ref.child('/'+rno+'/'+field).set(value);
                else
                ref.child('/'+rno+'/'+field).set(x);
                alert("changes have been made")
              }
              else
              alert("verify your entries")
            });
        });
    }