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

 
 
  //var count=0;
  function submit(){
    console.log("entered");
   var sname=localStorage.getItem('schoolname');
   //document.getElementById("heading").innerHTML=sname;
    var cls=document.getElementById('class').value;
       
  console.log(sname+" "+cls);
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
 
            
  
     
            var fc=0;
            var mc=0;
             var a;
             var b;
            var ref=database.ref().child('/counts/'+sname+'/'+cls+'/gender');
            ref.on('value',function(snap){
                fc=snap.val().female;
                mc=snap.val().male;
                
                a=((fc/(fc+mc))*100);
               b=((mc/(fc+mc))*100);
               console.log("entered"+a+" "+b);
            
            var chart = new CanvasJS.Chart("1", {
                animationEnabled: true,
                title: {
                    text: "ANALYTICS OF GENDER"
                },
                data: [{
                    type: "pie",
                    startAngle: 240,
                    yValueFormatString: "##0.00\"%\"",
                    indexLabel: "{label} {y}",
                    dataPoints: [
                        {y: a, label: "FEMALE"},
                        {y: b, label: "MALE"}
                         
                    ]
                }]
            });

       // document.getElementById('1').innerHTML=<P>FGTYRFTFTFTYFFDXJHHJJGYVGGVGGG</P>
        chart.render();
            });

        getchart2();
        getchart3();
        
    
    }
    function getchart2(){
     
        var sname=localStorage.getItem('schoolname');
  
    var cls=document.getElementById('class').value;
    
     var i=0;
    var j=0;
    var k=0;
    //var m=0;
     var w;
     var x;
     var y1;
     //var z;
     var t=0;
    var aref=database.ref().child('/counts/'+sname+'/'+cls+'/attendance');
    aref.on('value',function(att){
        i=att.val().a1;
        j=att.val().a2;
        k=att.val().a3;
        //m=att.val().a4;
        t=(i+j+k);
       
        w=((i/t)*100);
       x=((j/t)*100);
       y1=((k/t)*100);
       //z=((m/t)*100);

    var chart = new CanvasJS.Chart("2", {
        animationEnabled: true,
        title: {
            text: "ANALYTICS OF ATTENDANCE"
        },
        data: [{
            type: "pie",
            startAngle: 240,
            yValueFormatString: "##0.00\"%\"",
            indexLabel: "{label} {y}",
            dataPoints: [
                {y: w, label: "80-100"},
                {y: x, label: "60-80"},
                {y: y1, label: "40-60"}
                
                 
            ]
        }]
    });
chart.render();
    });
    }
    function getchart3(){
        var sname=localStorage.getItem('schoolname');
  
        var cls=document.getElementById('class').value;
        
        var ii=0;
    var jj=0;
    var kk=0;
    //var mm=0;
     //var wm;
     var xx;
     var yy;
     //var zz;
     var tt=0;
    var mref=database.ref().child('/counts/'+sname+'/'+cls+'/marks');
    mref.once('value',function(score){
        ii=score.val().m1;
        jj=score.val().m2;
        kk=score.val().m3;
        //mm=score.val().m4;
        tt=(ii+jj+kk);
       
        ww=((ii/tt)*100);
       xx=((jj/tt)*100);
       yy=((kk/tt)*100);
       //zz=((mm/tt)*100);

    var chart = new CanvasJS.Chart("3", {
        animationEnabled: true,
        title: {
            text: "ANALYTICS OF MARKS"
        },
        data: [{
            type: "pie",
            startAngle: 240,
            yValueFormatString: "##0.00\"%\"",
            indexLabel: "{label} {y}",
            dataPoints: [
                {y: ww, label: "80-100"},
                {y: xx, label: "60-80"},
                {y: yy, label: "40-60"}
                
                 
            ]
        }]
    });
chart.render();
    });
    }
});
}