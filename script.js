function getFormvalue() {
    //Write your code here
	const form=document.forms["form1"];
	const fname=form["fname"].value;
	const lname=form["lname"].value;
	alert(`First Name: ${fname}\nLast Name: ${lname}`);
}
