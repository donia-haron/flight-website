


var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}


function topp() {
document.getElementById("inner").style.display = "block";

document.getElementById("inner1").style.display = "none";
}
function offeer(){

document.getElementById("inner").style.display = "none";

document.getElementById("inner1").style.display = "block";
}

function form1(){
var name=document.getElementById("name");
var email=document.getElementById("email");
var comments=document.getElementById("comments");
if (name.value=="") {
alert("please enter name");
}
else if (email.value=="") {
alert("please enter your email");
}
else if (comments.value=="") {
alert("please enter your comment");
}
else{
alert("your comment has been send thank you");

}

}
function ValidateEmail()
{

        var email = document.getElementById("email");
        var pos=email.value.search(
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

if(pos !=0){
alert("you have entered InValid email address!");
email.focus();
email.select();
return true;
}
else
{
alert("valid email address!");
document.form1.text1.focus();
return false;
}
}
  function chkName() {
        var myName = document.getElementById("fullName");
       var pos = myName.value.search(/^[A-Z][a-z]+, ?[A-Z][a-z]+$/);

        if (pos != 0) {
          alert("The name you entered (" + myName.value + 
                ") is not in the correct form. but your name in form First, Last \n");
          myName.focus();
          myName.select();
          return false;
        } else
        alert("validd");
          return true;
      }

// The event handler function for the phone number text box

      function chkPhone() {
        var myPhone = document.getElementById("phoneNumber");


        var pos = myPhone.value.search(/^\d{3}-\d{3}-\d{4}$/);

        if (pos != 0) {
          alert("The phone number you entered (" + myPhone.value +
                ") is not in the correct form. \n" +
                "The correct form is: ddd-ddd-dddd \n" +
                "Please go back and fix your phone number");
          myPhone.focus();
          myPhone.select();
          return false;
        } else
          return true;
      }

addcity();
function addcity(){
var country_list = ["select","Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
var sc=document.getElementById("select1");
for (var i = 0; i <country_list.length; i++) {
  var optn = document.createElement("OPTION");
console.log("xdddddddd");
optn.innerHTML=country_list[i];

  optn.value=country_list[i];
  sc.add(optn);
  console.log(sc);
}
}

document.getElementById("dii").style.display = "none";


function backs(){

document.getElementById("tbl").style.display = "block";
document.getElementById("tbl").style="width:100%";

document.getElementById("dii").style.display = "none";
}
function nexts(){

var n=document.getElementById("fullName").value;
var e=document.getElementById("email").value;
var p=document.getElementById("phoneNumber").value;

if (n=="") {
alert("please enter your name");
}
else if (e=="") {
alert("please enter your email");
}
else if (p=="") {
alert("please enter your phoneNumber");
}
else{
document.getElementById("tbl").style.display = "none";
document.getElementById("dii").style.display = "block";  
}

}

var arr=[{name:"",
email:"",
distination:"",
datein:"",
dateout:""
}]

function don1(){
var n=document.getElementById("fullName").value;
var e=document.getElementById("email").value;
var dis=document.getElementById("distination1").value;
var date1=document.getElementById("leaving1").value;

console.log(date1);
var myhome=document.getElementById("myhome1").value;
today = new Date();
var tod= today.getDate();
var mo= today.getMonth();
var yy=today.getFullYear();
var total=yy+"-"+mo+"-"+tod;
console.log(total);
var tim=today.getTime();
var timd1= new Date(date1).getTime();

if(dis==""){
 alert("please enter your distination");
dis.focus();
}
else if(myhome==""){
 alert("please enter your location");
myhome.focus();
}
else if(date1==""){
 alert("please enter your leaving date");
date1.focus();
}

else if (timd1<tim) {


alert("the date you enter is before today please enter a valid date");
date1.focus();
}

else{
alert("congratulations your order has been submited for one way ticket \n Name:"+n+"\n Email: "+e);
alert("Your distination: "+dis+"\n your location: "+myhome+"\n Your leaving date : "+date1);
document.getElementById("flight1").style.display="none";
document.getElementById("flight3").style.display="block";
document.getElementById("head1").innerHTML="One way Trip";
document.getElementById("nameo1").innerHTML="Name: "+n;
document.getElementById("emaily1").innerHTML="Email "+e;
document.getElementById("destin1").innerHTML="distination: "+dis;
var x=Math.floor((timd1-tim)/86400000);
document.getElementById("leftt1").innerHTML="time left to your flight: "+ x;
document.getElementById("location1").innerHTML="Home: "+myhome;
document.getElementById("leavdate1").innerHTML="leaving date: "+date1;

}

}



function don(){
var n=document.getElementById("fullName").value;
var e=document.getElementById("email").value;
var dis=document.getElementById("distination").value;
var date1=document.getElementById("leaving").value;
var date2=document.getElementById("arriving").value;
console.log(date1);
console.log(date2);
var myhome=document.getElementById("myhome").value;
var today = new Date();
var tod= today.getDate();
var mo= today.getMonth();
var yy=today.getFullYear();
var total=yy+"-"+mo+"-"+tod;
var tim=today.getTime();
var timd1= new Date(date1).getTime();
var timd2= new Date(date2).getTime();
console.log(total);
console.log(timd2);
console.log(timd1);
console.log(tim);

if(dis==""){
 alert("please enter your distination");
dis.focus();
}
else if(myhome==""){
 alert("please enter your location");
myhome.focus();
}
else if(date1==""){
 alert("please enter your leaving date");
date1.focus();
}
else if(date2==""){
 alert("please enter your arriving date");
date2.focus();
}

else if(timd1<tim){
alert("the date in leaving date  you entered is before today please enter a valid date");
date1.focus();

}
else if (timd2<tim) {
alert("the date in arriving date you entered is before today please enter a valid date");
date2.focus();
}


else if (timd2<timd1) {
alert("the arriving date is before leaving date check your order");
date2.focus();
}
else{
alert("congratulations your order has been submited for round ticket \n Name:"+n+"\n Email: "+e);
alert("Your distination: "+dis+"\n your location: "+myhome+"\n Your leaving date : "+date1 +"\n your arriving date :"+date2);
document.getElementById("flight1").style.display="none";
document.getElementById("flight2").style.display="block";
document.getElementById("head").innerHTML="Round Trip";
document.getElementById("nameo").innerHTML="Name: "+n;
document.getElementById("emaily").innerHTML="Email: "+e;
document.getElementById("destin").innerHTML="distination: "+dis;
document.getElementById("location").innerHTML="location: "+myhome;
document.getElementById("leavdate").innerHTML="leaving date: "+date1;
document.getElementById("arrdate").innerHTML="arriving date: "+date2;
var x=Math.floor((timd1-tim)/86400000);
document.getElementById("leftt").innerHTML="time left to your flight "+ x;
}
}

function done(){
var x=document.getElementById("way").checked;

var w=document.getElementById("roundd").checked;
if(x){
document.getElementById("distination1").value=document.getElementById("input1").value;
document.getElementById("myhome1").value=document.getElementById("input2").value;
document.getElementById("leaving1").value=document.getElementById("dat1").value;
alert("go to complete the form ");
}
else if(w){
document.getElementById("distination").value=document.getElementById("input1").value;
document.getElementById("myhome").value=document.getElementById("input2").value;
document.getElementById("leaving").value=document.getElementById("dat1").value;
document.getElementById("arriving").value=document.getElementById("dat2").value;
alert("go to complete the form ");

}

}
function dateCompare(date1, date2){
var x=new Date();

    return new Date(date2) > new Date(date1);
}


document.getElementById("a1").addEventListener("click", function() {
    document.getElementById("aa").innerHTML =" ";
    document.getElementById("a1").style = "background-color: #E2495B; border-radius: 25px;";
    document.getElementById("a3").style = "background-color:#F3E8EB; border:2px solid black";
    document.getElementById("a2").style = "background-color:#F3E8EB; border:2px solid black";
    document.getElementById("aa").innerHTML = document.getElementById("a11").innerHTML;
});

    document.getElementById("a2").addEventListener("click", function() {
    document.getElementById("aa").innerHTML =" ";
    document.getElementById("aa").innerHTML = document.getElementById("a22").innerHTML;
   document.getElementById("a2").style = "background-color: #E2495B; border-radius: 25px;";
    document.getElementById("a1").style = "background-color:#F3E8EB; border:2px solid black";
 
    document.getElementById("a3").style = "background-color:#F3E8EB; border:2px solid black";
});
document.getElementById("a3").addEventListener("click", function() {
  document.getElementById("aa").innerHTML =" ";
  document.getElementById("aa").innerHTML = document.getElementById("a33").innerHTML;
   document.getElementById("a3").style = "background-color: #E2495B; border-radius: 25px;";

    document.getElementById("a1").style = "background-color:#F3E8EB; border:2px solid black";
    document.getElementById("a2").style = "background-color:#F3E8EB; border:2px solid black";
});
