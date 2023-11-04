var head = document.getElementById('head1');
head.style.color='red';
// head.setAttribute("hidden",true);
head.innerText="Changed";

var head = document.getElementById('head2');
head.style.color='blue';

var text = document.getElementById("text");
text.innerHTML=`<h1> I have created a h1 tag.</h1>`

var tp = document.getElementsByClassName("cont");
tp[0].style.color='green';

// var q = document.querySelector(".list");
// q.style.backgroundColor="blue";

var q = document.getElementsByClassName("list");
q[0].style.backgroundColor="lavender";

var fc = document.getElementsByTagName('li');
fc[0].style.color = "red";
fc[1].style.color = "violet";
fc[2].style.color = "purple";

// var pf = document.getElementsByTagName('p');
// pf[0].style.color ="blue";
// var pf = document.getElementsByTagName("button");
// pf[0].style.color ="lightblue";

var btn = document.getElementById("val")
function popup(){
    // alert("button clicked");
    btn.style.color ="red";
}

var bn = document.getElementById("bl");
bn.addEventListener("click",function display(){
    alert("eventlistener works")
})

var bx = document.getElementById("email");
bx.style.color = "purple";
function show(){
    bx.style.backgroundColor ="lightgreen"
}

var em = document.getElementById("name");
function capval(event){
    console.log(event.target.value);
}

var hd = document.getElementById("h4")
function changeColor(){
    hd.style.color ="red"
}
function backcolor(){
    hd.style.color ="green"
}