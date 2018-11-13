
list = [1,3,4,5,6,7,7,8,10,11];
/*for (ik in list){
    console.log(ik);
}*/
let o = 2;
do 
    {console.log("yay!!!!");
    o++;}
while (o>4);

function varlet(){
    // define some fruits
var orange = 'orange';
var apple = 'red';
if (orange === 'orange') {
  var orange = 'blue'; // the scope is global
  let apple = 'green'; // the scope is inside the if-block

  console.log(orange);  // blue
  console.log(apple);  // green
} 
          
console.log(orange); // blue
console.log(apple); // red
}

function nummethod(){
    let num = document.getElementById("num").value ;
    let op = document.getElementById("op").value ;
    let m = new Function("return ("+num+")."+op+";");
    //console.log(m());
      document.getElementById("out").innerHTML = m();
}
function strmethod(){
    let num = document.getElementById("numstr").value ;
    let op = document.getElementById("opstr").value ;
    let m = new Function("return ('"+num+"')."+op+";");
    document.getElementById("outstr").innerHTML = m();
}

function lol(){
    let i =11;
    console.log(i);

    setInterval(function(){
        console.log("It was before the loop.");
    }, 5000);
    
    for (i =0; i< 9; i++){
        console.log(i);
    }

    
    /*for (i =0; i< 10; i++){
        console.log(i);
    }*/
    
}