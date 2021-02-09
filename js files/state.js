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
      var i=1;
      var distid=document.getElementById('did').value;
      var scid=document.getElementById('sid').value;
      var ref=database.ref().child('/codes/districts/');
      ref.once('value',function(snap){
        snap.forEach(function(childs){
            if(childs.key==distid){
                var num=childs.numChildren();
                for(i=1;i<=num;i++){
                    if(childs.child(i).val()==scid){
                        //localStorage.clear();
                        getSchoolName(scid);
                    }
                }
            }
        });
      });
      function getSchoolName(scid){
        var sname;
        var sref=database.ref().child('/codes/schools/');
        sref.once('value',function(snap){
            sname=snap.child(scid).val();
            localStorage.setItem('schoolname',sname);
            window.location.href="prof.html";
        })
    }
  }