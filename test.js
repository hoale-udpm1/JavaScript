//var a = 2;
//var b = 3;
//var total = a+b;
//document.getElementById("total").innerHTML = total;
//console.log("total");
//alert(total)

function do_something(){
  var selectedValue = document.getElementById("myselect").value;
  alert(selectedValue);
}

  var demo = document.getElementById("demo");
  demo.addEventListener("mouseover",mouseover);
  demo.addEventListener("mouseout",mouseout);

  function mouseover() {
    document.getElementById("demo").style.color = "red";
  }
function mouseout() {
  document.getElementById("demo").style.color = "black";
}

