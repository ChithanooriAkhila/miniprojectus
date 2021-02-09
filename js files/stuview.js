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
  
    function viewData(){
        document.getElementsByTagName('tbody').innerHTML="";
        var cls=document.getElementById('class').value;
        var sname=localStorage.getItem('schoolname');
        console.log(cls+" "+sname);
        var ref=database.ref().child('/school/'+sname+'/'+cls);
        var href=database.ref().child('/counts/'+sname);
        var nocls=[];
        href.once('value', function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
              var childKey = childSnapshot.key;
                nocls.push(childKey);               
            });
            if (nocls.indexOf(cls)==-1)
              alert("check the class entered");
            else{
        ref.once('value',(function(snapshot){
          snapshot.forEach(function(child){
            var content="";
            var rno=child.key;
            var attendance=child.val().attendance;
            var cast=child.val().cast;
            var dob=child.val().dob;
            var fname=child.val().father_name;
            var gender=child.val().gender;
            var marks=child.val().marks;
            var mobno=child.val().mobileno;
            var mname=child.val().mother_name;
            var sname=child.val().student_name;
            content+='<tr>';
            content+='<td>'+rno+'</td>';
            content+='<td>'+sname+'</td>';
            content+='<td>'+dob+'</td>';
            content+='<td>'+gender+'</td>';
            content+='<td>'+cast+'</td>';
            content+='<td>'+fname+'</td>';
            content+='<td>'+mname+'</td>';
            content+='<td>'+mobno+'</td>';
            content+='<td>'+attendance+'</td>';
            content+='<td>'+marks+'</td>';
            content+='</tr>';
            $('table tbody').append(content);
            
          });
        }));
       // viewData();//document.getElementById('btn').disabled="true";
    }
});
    }