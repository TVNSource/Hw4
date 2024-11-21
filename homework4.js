/*
    Name: Thinh Nguyen
    Name of file: homework4.js
    Date created: 09/09/2024
    Date last edited: 11/07/2024
    Description: Assignment 4 Javascript
*/

 //display Today Date on screen
 document.getElementById("today").innerHTML = 'Today date is: '+new Date().toLocaleDateString();
 
 
 //code for slider
 let slider = document.getElementById("healthBar");
 let output = document.getElementById("healthBarVal");
	output.innerHTML = slider.value;
	slider.oninput = function() {output.innerHTML = this.value;}	 
 
 let error_flag = 0;
 
//don't allow dates in the future or more than 120 years ago
function checkDate(){
	
	let inputDate = document.getElementById("DOB").value;		
	let [year, month, day] = inputDate.split('-');
	let myDate = new Date(year, month - 1, day);  // Month is zero-based in JS Date
	
	const currentDate = new Date();		
    let minDate = new Date();	
	minDate.setFullYear(minDate.getFullYear() - 120);	
	
	const msgLabel = document.getElementById("dobError");
	
	if(inputDate === "" ){
		msgLabel.className = 'errorMsg';
		msgLabel.innerHTML = "Please enter a Date";
		error_flag = 1;			
	}	
	else if(myDate > currentDate){		
		msgLabel.className = 'errorMsg';
		msgLabel.innerHTML = "Invalid Date. Date in future.";
		error_flag = 1;	
	}
	else if( myDate < minDate){		
		msgLabel.className = 'errorMsg';
		msgLabel.innerHTML = "Invalid Date. The date is older than 120 years.";
		error_flag = 1;
	}
	else{
		msgLabel.className = 'validMsg';
		msgLabel.innerHTML = "&#10003;";		
		//error_flag = 0;
	}		
}



function checkZip() {
    let zipCode = document.getElementById("Zip").value;
    const zipError = document.getElementById("zipError");
    zipError.className = 'validMsg';
    
    // Regular expression for validating 5-digit or 5-4 digit format
    const zipPattern = /^\d{5}(-\d{4})?$/;
    
    if (zipPattern.test(zipCode)) {
        // If the full 10-digit format is entered, return only the first 5 digits
        if (zipCode.length === 10) {
            zipCode = zipCode.substring(0, 5);
        }
        zipError.innerHTML = "&#10003;";
        zipError.className = 'validMsg';
		//error_flag = 0;
    } else {
        zipError.innerHTML = "Invalid zip code";
        zipError.className = 'errorMsg';
		error_flag = 1;
    }

}

function checkUserID() {
	let userID = document.getElementById("userID").value;
	const useridError = document.getElementById("useridError");
    // Convert the input to lowercase
    userID = userID.toLowerCase();    
    const idPattern = /^[a-z][a-z0-9_-]{4,29}$/;
	
    // Check if the userID matches the criteria
    if (idPattern.test(userID)) {        
		useridError.innerHTML = "&#10003;";
        useridError.className = 'validMsg';		
		//error_flag = 0;
    } else {
		useridError.innerHTML = "5 to 30 characters, start with a letter, contain only letters, numbers, underscores, or dashes";
        useridError.className = 'errorMsg';   
		error_flag = 1;		
    }
}


function checkPasswordMatch() {
	let p = document.getElementById("pwd").value;
	let rp = document.getElementById("rePwd").value;
	let msg = document.getElementById("rePwdError");
	if(p ==""){
		msg.innerHTML = "Passwords cannot be blank";	
		msg.className = 'errorMsg';	
		error_flag = 1;		
	}else if ( p==rp ){
		msg.innerHTML = "Passwords match!";
		msg.className = 'validMsg';			
		//error_flag = 0; 
	} else{
		msg.innerHTML = "Passwords DO NOT match!";	
		msg.className = 'errorMsg';	
		error_flag = 1;
	}
}

function checkPassword() {
    let passOutput = "";
	let passMsg = document.getElementById("pwdError");
    let passInput = document.getElementById("pwd").value;	
	let userID = document.getElementById("userID").value;
    //let //error_flag = 0;

    // Validate lowercase letters
    if (passInput.search(/[a-z]/) < 0) {
        passOutput += "Enter at least 1 lowercase letter.<br>";
        error_flag = 1;
    }

    // Validate capital letters
    if (passInput.search(/[A-Z]/) < 0) {
        passOutput += "Enter at least 1 uppercase letter.<br>";
        error_flag = 1;
    }

    // Validate numbers
    if (passInput.search(/[0-9]/) < 0) {
        passOutput += "Enter at least 1 number.<br>";
        error_flag = 1;
    }

    // Validate special characters
    if (passInput.search(/[!\@#\$%&*\-_\\.+\(\)]/) < 0) {
        passOutput += "Enter at least 1 special character.<br>";
        error_flag = 1;
    }

    // Validate length
    if (passInput.length < 8) {
        passOutput += "Password must be at least 8 characters long.<br>";
        error_flag = 1;
    }
	
	 if (passInput.toLowerCase().includes(userID)) {
        passOutput += "Password cannot contain your userID.<br>";
        error_flag = 1;
    }

    // If no errors, show success message
    if (!error_flag) {
        passOutput = "Password is valid!";
		passMsg.className = 'validMsg';
		//error_flag = 0;
    }else{
		passMsg.className = 'errorMsg';
		error_flag = 1;
	}

    // Display all messages in a single element
    passMsg.innerHTML = passOutput;
}

//MODAL POP UP 
let modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the Review button, open the modal 
function reviewData() {
  modal.style.display = "block";
   
  let fname = document.getElementById("FirstName").value;
  let mname = document.getElementById("MidName").value;
  let lname = document.getElementById("LastName").value;
  let dob = document.getElementById("DOB").value;
  let dobMsg =  document.getElementById("dobError");  
  
  let ssn = document.getElementById("SSN").value;

  let genderElement = document.querySelector('input[name="gender"]:checked');
  if (genderElement){
	 let gender = genderElement.value;	 
  }
  let addr1 = document.getElementById("Address1").value;
  let addr2 = document.getElementById("Address2").value;
  let city = document.getElementById("City").value;
  let state = document.getElementById("State").value;
  
  let zipCode = document.getElementById("Zip").value;
  const zipError = document.getElementById("zipError");
  const zipPattern = /^\d{5}(-\d{4})?$/;
  if (zipPattern.test(zipCode)) {
       // If the full 10-digit format is entered, return only the first 5 digits
        if (zipCode.length === 10) {
            zipCode = zipCode.substring(0, 5);
        }      
  } 
    
   
  let phone = document.getElementById("Phone").value;
  let email = document.getElementById("Email").value;
  let symptom = document.getElementById("Symptom").value;
   
  let chicken = "N";  	
  if(document.getElementById("vaccine1").checked){
	  chicken = "Y"; 
  }
  
  let measles = "N";  	
  if(document.getElementById("vaccine2").checked){
	  measles = "Y"; 
  } 
  
  let covid = "N";
  if(document.getElementById("vaccine3").checked){
	  covid = "Y"; 
  } 

  let smallpox = "N";
  if(document.getElementById("vaccine4").checked){
	  smallpox = "Y"; 
  } 
 
  let tetanus = "N";
  if(document.getElementById("vaccine5").checked){
	  tetanus = "Y"; 
  } 
  let flu = "";
  let fluElement = document.querySelector('input[name="flushot"]:checked');
  if (fluElement){
	 flu = fluElement.value;	 
  }
  
  let insurance = "";
  let insuranceElement = document.querySelector('input[name="insurance"]:checked');
  if (insuranceElement){
	 insurance = insuranceElement.value;	 
  }
  
  let userID = document.getElementById("userID").value;
  let useridError = document.getElementById("useridError");
  userID = userID.toLowerCase();    
  const idPattern = /^[a-z][a-z0-9_-]{4,29}$/;	
  if (idPattern.test(userID)) {        
		userID = userID;
  } 
    
  let pwd = document.getElementById("pwd").value;
  let passMsg = document.getElementById("pwdError");
      
  let outText = "";  
  outText = `<table id="reviewForm" style="width: 100%">
   <colgroup>
       <col span="1" style="width: 30%;">
       <col span="1" style="width: 30%;">
       <col span="1" style="width: 40%;">
    </colgroup>
     <tbody>
	   <tr><th colspan="3">Please Review Your Information: </th></tr>
      <tr> <td align="right"><br/> Name (First, MI, Last):</td><td>${fname} ${mname} ${lname}</td> <td></td></tr>
      <tr><td align="right">Date of Birth:</td><td>${dob}</td><td>${dobMsg.innerHTML}</td></tr>
      <tr><td align="right">Address:</td><td>${addr1} <br> ${addr2} <br> ${city}, ${state} ${zipCode}</td><td>${zipError.innerHTML}</td></tr>
      <tr><td align="right">Email:</td><td>${email}</td><td></td></tr>
      <tr><td align="right">Phone:</td><td>${phone}</td><td></td></tr>
	  <tr><td align="right">My Current Symptoms:</td><td>${symptom}</td><td></td></tr>
      <tr><td align="right">Chicken Pox:</td><td>${chicken}</td><td></td></tr>
	  <tr><td align="right">Measles:</td><td>${measles}</td><td></td></tr>
	  <tr><td align="right">Covid-19:</td><td>${covid}</td><td></td></tr>
	  <tr><td align="right">Small Pox:</td><td>${smallpox}</td><td></td></tr>
	  <tr><td align="right">Tetanus:</td><td>${tetanus}</td><td></td></tr>
	  <tr><td align="right">My Health Score:</td><td>${slider.value}</td><td></td></tr>
      <tr><td align="right">Flushot today?</td><td>${flu}</td><td></td></tr>
	  <tr><td align="right">Has insurance?</td><td>${insurance}</td><td></td></tr>
	  <tr><td align="right">UserID</td><td>${userID}</td><td>${useridError.innerHTML}</td></tr>
	  <tr><td align="right">Password</td><td>${pwd}</td><td>${passMsg.innerHTML}</td></tr>
	 <tbody>
    </table>`;
 
  let content = document.getElementById("content");   
  content.innerHTML = outText; 
  
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function checkFirstName() {
	let firstName = document.getElementById("FirstName").value;
	const fnErr = document.getElementById("firstnameError");   
    const idPattern = /^[a-zA-Z'-]{1,30}$/;	
    //check if the name matches the criteria
    if (idPattern.test(firstName)) {        
		fnErr.innerHTML = "&#10003;";
        fnErr.className = 'validMsg';		
		//error_flag = 0;
    } else {
		fnErr.innerHTML = "1 to 30 characters, only letters, &quot-&quot and ' allowed.";
        fnErr.className = 'errorMsg';
		error_flag = 1;		
    }
}

function checkMidName() {
	let midName = document.getElementById("MidName").value;
	const err = document.getElementById("midnameError");   
    const idPattern = /^[a-zA-Z]?$/;	
    //check if the name matches the criteria
    if (idPattern.test(midName)) {        
		err.innerHTML = "&#10003;";
        err.className = 'validMsg';		
		//error_flag = 0;
    } else {
		err.innerHTML = "Optional 1 letter, no numbers";
        err.className = 'errorMsg';
		error_flag = 1;		
    }
}

function checkLastName() {
	let lastName = document.getElementById("LastName").value;
	const err = document.getElementById("lastnameError");   
    const idPattern = /^[a-zA-Z2-5\s'-]{1,30}$/;	
    // Check if the name matches the criteria
    if (idPattern.test(lastName)) {        
		err.innerHTML = "&#10003;";
        err.className = 'validMsg';		
		//error_flag = 0;
    } else {
		err.innerHTML = "1 to 30 characters; only letters, number 2 to 5, spaces, &quot-&quot and ' allowed";
        err.className = 'errorMsg';       
		error_flag = 1;
    }
}

function checkSSN() {
    let ssn = document.getElementById("SSN").value;
    const err = document.getElementById("ssnError");

    if (ssn.match(/^\d{3}-\d{2}-\d{4}$/)) {
        err.innerHTML = "&#10003;";
        err.className = 'validMsg';
        //error_flag = 0;
    } else {
        err.innerHTML = "must match xxx-xx-xxxx, number and dash only";
        err.className = 'errorMsg';
        error_flag = 1;
    }
}


function checkAddress() {
	let address = document.getElementById("Address1").value;
	const err = document.getElementById("add1Error");   
    if (address.length < 2  || address.length > 30 ) {  
		err.innerHTML = "Min 2 characters, max 30 characters";
        err.className = 'errorMsg';       
		error_flag = 1;
	}else {
		err.innerHTML = "&#10003;";
        err.className = 'validMsg';		
		//error_flag = 0;		
	}    
	
}

function checkCity() {
	let city = document.getElementById("City").value;
	const err = document.getElementById("cityError");   
     if (city.length < 2  || city.length > 30) {  
		err.innerHTML = "Min 2 characters, max 30 characters";
        err.className = 'errorMsg';       
		error_flag = 1;
	}else {
		err.innerHTML = "&#10003;";
        err.className = 'validMsg';		
		//error_flag = 0;		
	}    
}

function checkPhone() {
	let phone = document.getElementById("Phone").value;
	const err = document.getElementById("phoneError");   
    
	// Remove non-numeric characters for formatting
    let cleaned = phone.replace(/\D/g, "");

    // Apply formatting: (123) 456-7890
    if (cleaned.length <= 3) {
        phone = cleaned;
    } else if (cleaned.length <= 6) {
        phone = `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
    } else {
        phone = `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
    }
	
    // Update the input field with the formatted value
    document.getElementById("Phone").value = phone;
	
	const idPattern = /^\(\d{3}\) \d{3}-\d{4}$/;	
    // Check if the name matches the criteria
    if (idPattern.test(phone)) {        
		err.innerHTML = "&#10003;";
        err.className = 'validMsg';		
		//error_flag = 0;
    } else {
		err.innerHTML = "enter number only";
        err.className = 'errorMsg'; 
		error_flag = 1;		
    }	
	
	
}

function checkEmail() {
	let email = document.getElementById("Email").value;
	const err = document.getElementById("emailError");   
   
    if (email.match(/^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/i)) {           
		err.innerHTML = "&#10003;";
        err.className = 'validMsg';		
		//error_flag = 0;
    } else {
		err.innerHTML = "email must follow format: name@domain.tld";
        err.className = 'errorMsg'; 
		error_flag = 1;		
    }
}

function validateInput(){
	error_flag = 0;
	checkFirstName();	
	checkMidName();
	checkLastName();
	checkDate();
	checkSSN();
	checkAddress();
	checkCity();
	checkZip();
	checkPhone();
	checkEmail();
	checkUserID();
	checkPassword();
	checkPasswordMatch();
	
	if (error_flag != "1"){		
		document.getElementById("btnSubmit").disabled = false;
	} else {
		alert("Please correct the error(s) on page to continue.");
	}
	
}
 
 

 
 


 