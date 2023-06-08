<?php
require_once("connection.php");

$flag="true";

$txt_tochange=""; $description=""; $form_type=""; $email_nl="";
if ( isset($_POST['txt_tochange']) && $_POST['txt_tochange']!="" ) $txt_tochange=$_POST['txt_tochange'];
if ( isset($_POST['description']) && $_POST['description']!="" ) $description=$_POST['description'];
if ( isset($_POST['form_type']) && $_POST['form_type']!="" ) $form_type=$_POST['form_type'];
if ( isset($_POST['email_nl']) && $_POST['email_nl']!="" ) $email_nl=$_POST['email_nl'];

if ( isset($_POST['user_name']) && $_POST['user_name']!="" ) $name=$_POST['user_name'];
if ( isset($_POST['email_fb']) && $_POST['email_fb']!="" ) $email_fb=$_POST['email_fb'];
if ( isset($_POST['comment1']) && $_POST['comment1']!="" ) $comment1=$_POST['comment1'];
if ( isset($_POST['comment2']) && $_POST['comment2']!="" ) $comment2=$_POST['comment2'];
if ( isset($_POST['comment3']) && $_POST['comment3']!="" ) $comment3=$_POST['comment3'];

if ($form_type=="feedback")
{
$insert_fb="insert into custom_feedback set name = '$name', email = '$email_fb', comment1 = '$comment1', comment2 = '$comment2', comment3 = '$comment3' ";
if (!mysqli_query($con,$insert_fb)) {$flag="false"; die("Error while inserting into custom_feedback ".mysqli_error());}
}
else if ($form_type=="poll")
{
$insert_poll="insert into custom_poll set change_needed = '$txt_tochange', description = '$description'";
if (!mysqli_query($con,$insert_poll)) {$flag="false"; die("Error while inserting into custom_poll ".mysqli_error());}
}
else if ($form_type=="newsletter")
{
	if (mysqli_num_rows(mysqli_query($con,"select email from custom_newsletter_subscription where email = '$email_nl'"))==0)
	{
		$insert_subscription="insert into custom_newsletter_subscription set email = '$email_nl'";
		if (!mysqli_query($con,$insert_subscription)) {$flag="false"; die("Error while inserting into custom_newsletter_subscription ".mysqli_error());} 
	}
	else 
	{
		$flag="emailexists";
	}
} 

header("location:thankyou.php?flag=$flag&form_type=$form_type");
?>