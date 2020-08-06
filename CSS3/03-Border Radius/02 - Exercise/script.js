function myFunction() {
    var str = "The best things in life are free";
    var patt = new RegExp("z");
    var res = patt.test(str);
    document.getElementById("demo").innerHTML = res;
}

var my_canvas = document.getElementById("mycanvas");
var my_context = my_canvas.getContext("2d");


my_context.fillStyle="black";

my_context.fillRect(10, 10, 1290, 50);

my_context.fillStyle = "blue";
my_context.font = "bold 46px chiller";
my_context.fillText("The Mega Store...", 500, 50);
