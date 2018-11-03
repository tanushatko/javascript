/* Exersice 1 */
document.write("Exersice 1"+ "<br>"+"<br>");
for (var i=1; i<51; i++){
	document.write(i+ "<br>");
}

/* Exercise 2 */
document.write("<br>"+"Exersice 2"+ "<br>"+"<br>");
for (var j=11; j<34; j++){
	document.write(j+ "<br>");
}

/* Exercise 3 */
document.write("<br>"+"Exersice 3"+ "<br>"+"<br>");
for (var k=0; k<101; ++k){
	if(k%2==0){
	document.write(k+ "<br>");}
}

/*Exercise 4 */
document.write("<br>"+"Exersice 4"+ "<br>"+"<br>");
var sum=0;
for (var k=0; k<101; k++){

	sum+=k;
}
document.write(sum);

/*Exercise 5 */
document.write("<br>"+"Exersice 5"+ "<br>"+"<br>");
var a=[1,2,3,4,5];
for (var i=0; i<a.length; i++){
	document.write(a[i]+"<br>");
}

/*Exercise 6 */
document.write("<br>"+"Exersice 6"+ "<br>"+"<br>");
var a=[-1,22,3,44,5];
	Math.max(a);
	document.write(	Math.max(...a));


/*Exercise 7 */
document.write("<br>"+"Exersice 7"+ "<br>"+"<br>");
var a=5;
var b=-6;
document.write(	Math.min(a, b));

/*Exercise 8 */
document.write("<br>"+"Exersice 8"+ "<br>"+"<br>");

var b=40;
do {
	var a=prompt("enter the number bigger than 40:");
}
while(a<=b);

if (a>b){
	alert("Okey");
} else if( a==null){
	alert("go away");
}

/*Exercise 9 */
document.write("<br>"+"Exersice 9"+ "<br>"+"<br>");
for (var i=1; i<10; i++){

	document.write(i+" * 7 = " +(i*7)+ "<br>");
}







