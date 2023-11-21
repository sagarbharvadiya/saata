window.onload = validatecomments;

function validatecomments(){
document.getElementById('comment1').onkeyup = function () {
  document.getElementById('counter_comment1').innerHTML = "Characters left: " + (500 - this.value.length);
};

document.getElementById('comment2').onkeyup = function () {
  document.getElementById('counter_comment2').innerHTML = "Characters left: " + (500 - this.value.length);
};

document.getElementById('comment3').onkeyup = function () {
  document.getElementById('counter_comment3').innerHTML = "Characters left: " + (500 - this.value.length);
};
}


function isproper(formField,fieldLabel)
{
var result;
var string = document.getElementById(formField).value;

var iChars = "*|\":<>[]{}`\';()@&$%";

if (fieldLabel=='description' && string.length > 500)
{
alert("Description should have maximum of 500 characters.")
document.getElementById(formField).value="";
document.getElementById(formField).focus();
return false;
}

for (var i = 0; i < string.length; i++)
{
if (iChars.indexOf(string.charAt(i)) != -1)
result = false;
}

if (result == false)
{
alert("Enter valid "+fieldLabel+".")
document.getElementById(formField).value="";
document.getElementById(formField).focus();
return false;
}

}
function showdesc(param1)
{
	if (param1=='y')
	{
	document.getElementById("description_div").style.display="";
	document.getElementById("txt_tochange").value="y";
	}
	else if (param1=='n')
	{
	document.getElementById("description_div").style.display="none";
	document.getElementById("txt_tochange").value="n";
	}

}

function validate_poll()
{
var message="";
var headmsg="Enter/Select the following field(s) \n";
var flag=0;

var scode=document.getElementById("security_code").value;
var txt_tochange=document.getElementById("txt_tochange").value;

if (txt_tochange=='y')
{
if(document.getElementById("description").value=="")
{
message+="Suggesstion \n";
flag=document.getElementById("description");
}
}
if(document.getElementById("security_code").value=="")
{
message+="Security Code \n";
flag=document.getElementById("security_code");
}

 if(message.length>1)
	{
		message=headmsg+""+message;
    	alert(message);
    	flag.focus();
    	return false;
	}

if (flag==0)
{
	
var scode_trim=scode.trim();
if (scode_trim!="")
{
checkfun();

var url="check-captcha.php?scode="+scode;
xmlhttp.onreadystatechange=stateChanged;
xmlhttp.open("GET",url,true);
xmlhttp.send(null);
return false;
}
}

}

function validate_nl()
{
var message="";
var headmsg="Enter following field \n";
var flag=0;

if(document.getElementById("email_nl").value=="")
{
message+="Email to subscribe news letter \n";
flag=document.getElementById("email_nl");
}

 if(message.length>1)
	{
		message=headmsg+""+message;
    	alert(message);
    	flag.focus();
    	return false;
	}

var action_page="capture-inputs.php"; 
	
document.form_nl.action=action_page;
document.form_nl.submit();

}

function validate_fb()
{
var message="";
var headmsg="Enter / Select following field(s) \n";
var flag=0;

if(document.getElementById("user_name").value=="")
{
message+="Name \n";
flag=document.getElementById("user_name");
}
if(document.getElementById("email_fb").value=="")
{
message+="Email Id\n";
flag=document.getElementById("email_fb");
}
if(document.getElementById("comment1").value=="")
{
message+="What did you enjoy about the SAATA Newsletter?\n";
flag=document.getElementById("comment1");
}
if(document.getElementById("comment2").value=="")
{
message+="What else would you like to see in the newsletter?\n";
flag=document.getElementById("comment2");
}

if(grecaptcha.getResponse() == ''){
    //reCaptcha not verified
	message+="I'm not a robot Verification\n";
	flag=document.getElementById("g-recaptcha");
}
 if(message.length>1)
	{
		message=headmsg+""+message;
    	alert(message);
    	flag.focus();
    	return false;
	}


}

function check_entry(str,str1,str2)
{
var filter="";
var namef=/^([a-z]+(\'|-|\.\s|\s)?[a-z]*){1,5}$/i;
var emailf=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

if (str!="")
{
if (str1=='email_nl' || str1=='email_fb') var filter=emailf;
if (str1=='name') var filter=namef;

if (filter!="")
{
if (!filter.test(str))
{
alert("Enter valid "+str2+".");
//alert(str1);
document.getElementById(str1).value="";
document.getElementById(str1).focus();
return false;
}
}
}

}