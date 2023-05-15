<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>SAATA newsletter</title>
<style type="text/css">
body {
	margin-left: 0px;
	margin-top: 0px;
	margin-right: 0px;
	margin-bottom: 0px;
}
</style>
<script src="js/script.js"></script>
</head>

<body>
<table width="920" border="0" align="center" cellpadding="0" cellspacing="0" style="border:1px #d1d1d1 solid;">
  <tr>
    <td align="center" valign="top"><table width="900" border="0" align="center" cellpadding="0" cellspacing="0">
      <tr>
        <td width="448" height="60" align="left" valign="middle"><a href="http://www.saata.org/" title="saata" target="_blank"><img src="img/saata-logo.png" alt="saata" width="101" height="45" border="0" /></a></td>
            <td width="422" align="right" valign="middle" style="font-family:Arial, Helvetica, sans-serif; font-size:10px; color:#41504f;"><strong>VOL: 5, ISSUE: 1 - May 2021</strong></td>
        <td width="30" align="right" valign="middle"><a href="https://www.facebook.com/saataworld"><img src="img/social-facebook-wite.png" alt="facebook" width="8" height="16" border="0" /></a></td>
      </tr>
    </table>
      <table width="900" border="0" align="center" cellpadding="0" cellspacing="0">
        <tr>
          <td><img src="img/banner.jpg" width="900" height="122" alt="banner" /></td>
        </tr>
    </table>
    <br/>
      <table width="800" height="400" border="0" align="center" cellpadding="0" cellspacing="0">
        <tr>
          <td width="585" height="150" align="left" valign="top"> <table width="585" border="0" cellpadding="0" cellspacing="0">
            <tr>
              <td height="35" align="center" valign="middle"><a href="TA-News.html" title="TA News"><img src="img/TA-News.png" alt="TA News" width="135" height="40" border="0" /></a></td>
              <td align="center" valign="middle"><a href="PK-Saru/index.html"><img src="img/PK-Saru.png" alt="PK Saru" width="282" height="40" border="0" /></a></td>
              <td align="center" valign="middle"><a href="team.html" title="team"><img src="img/team.png" alt="team" width="135" height="40" border="0" /></a></td>
            </tr>
          </table>            
          <div w3-include-html="include-menu.html"></div>
           <table width="585" border="0" cellpadding="0" cellspacing="0">
            <tr>
              <td width="200" height="35" style="font-family:Arial, Helvetica, sans-serif; font-size:14px; color:#41504f; border-bottom:#999 1px solid;"><strong>Thank you.</strong></td>
              <td width="385" align="right" valign="middle" style="font-family:Arial, Helvetica, sans-serif; font-size:14px; color:#41504f; border-bottom:#999 1px solid;"><a href="index.html"><img src="img/home.png" alt="home" width="18" height="18" border="0" /></a></td>
            </tr>
          </table>
         <table width="585" border="0" cellpadding="0" cellspacing="0">
          <?php if( isset($_GET['flag']) && $_GET['flag']!="") $flag=$_GET['flag'];
		  if( isset($_GET['form_type']) && $_GET['form_type']!="") $form_type=$_GET['form_type'];
		  
		  		 $message=""; 
				if ($flag=="true" && $form_type=="poll"){$message="Your poll has been Submitted.";}
				else if ($flag=="true" && $form_type=="feedback"){$message="Your feedback has been Submitted.";}
				else if ($flag=="false" && $form_type=="poll"){$message="Error while sending your poll. Please try again later.";}
				else if ($flag=="true" && $form_type=="newsletter"){$message="You have subscribed to our news letter.";}				
				else if ($flag=="false" && $form_type=="newsletter"){$message="Error while subscribing. Please try again later.";}								
				else if ($flag=="emailexists" && $form_type=="newsletter"){$message="Your email id is already in our list.";}												
					  ?>
            <tr>
              <td height="35" style="font-family:Arial, Helvetica, sans-serif; font-size:14px; color:#41504f; border-bottom:#edeeee 1px solid;"><strong><?php echo $message?></strong></td>
            </tr>
			            
          </table>
          <br/>
          
          </td>
          <td width="25" align="center" valign="middle">&nbsp;</td>
          <td width="190" align="left" valign="top">
            <table width="200" border="0" cellpadding="0" cellspacing="0">
            <tr>
              <td align="left" valign="top"><a href="Feedback.html" title="Feedback"><img src="img/Feedback.jpg" alt="feedback" width="190" height="42" border="0" /></a></td>
            </tr>
          </table>
            <!--<table width="190" border="0" cellpadding="0" cellspacing="0">
              <tr>
                <td align="left" valign="top" bgcolor="#1ABF89" style="font-family:Arial, Helvetica, sans-serif; font-size:12px; color:#333; line-height:20px; text-align:justify; padding:10px;">
                SAATA News letter is right now called "SAATA Newsletter" <img src="img/smiley.png" width="16" height="16" alt="smiley" /> Do you want to change the Newsletter's name?<br/>
                <input name="Yes" type="radio" value="Yes" /> Yes <input name="No" type="radio" value="No" /> No<br/>
                <strong>Your Suggestions</strong><br/>
                <textarea cols="20" rows="" style="width:160px;"></textarea><br/>
                <input type="submit" name="Subscribe" id="button" value="Submit" style="background:#F66; color:#ffffff; height:35; border:0; padding:4px; cursor:default"/>
                </td>
              </tr>
            </table>-->
            <br/>
            <table width="200" border="0" cellpadding="0" cellspacing="0">
              <tr>
                <td align="left" valign="top"><a href="Copyright-policy.html" target="_self" title="Previous Issues"><img src="img/Copyright-policy.jpg" alt="Copyright policy" width="190" height="42" border="0" /></a></td>
              </tr>
            </table>
            
            
            
            <br/>
            
            <!--<table width="190" border="0" cellpadding="0" cellspacing="0">
              <tr>
                <td align="left" valign="top" bgcolor="#1ABF89" style="font-family:Arial, Helvetica, sans-serif; font-size:12px; color:#333; line-height:20px; text-align:justify; padding:10px;">
                SAATA News letter is right now called "SAATA Newsletter" <img src="img/smiley.png" width="16" height="16" alt="smiley" /> Do you want to change the Newsletter's name?<br/>
                <input name="Yes" type="radio" value="Yes" /> Yes <input name="No" type="radio" value="No" /> No<br/>
                <strong>Your Suggestions</strong><br/>
                <textarea cols="20" rows="" style="width:160px;"></textarea><br/>
                <input type="submit" name="Subscribe" id="button" value="Submit" style="background:#F66; color:#ffffff; height:35; border:0; padding:4px; cursor:default"/>
                </td>
              </tr>
            </table>-->
            
            
            
            </td>
        </tr>
    </table>
    
    <br/>
    <table width="900" border="0" align="center" cellpadding="0" cellspacing="0">
        <tr>
          <td width="10" align="left" valign="middle" bgcolor="#38CAC0" style="font-family:Arial, Helvetica, sans-serif; font-size:11px; color:#ffffff;">&nbsp;</td>
          <td width="660" height="50" align="left" valign="middle" bgcolor="#38CAC0" style="font-family:Arial, Helvetica, sans-serif; font-size:11px; color:#ffffff;"><a href="http://www.saata.org/" title="saata" target="_blank" style="color:#ffffff; text-decoration:none;">SAATA</a> &copy; 2021</td>
          <td width="190" align="right" valign="middle" bgcolor="#38CAC0" style="font-family:Arial, Helvetica, sans-serif; font-size:11px; color:#ffffff"><a href="http://www.saata.org/membership-details/" title="saata" target="_blank" style="color:#ffffff; text-decoration:none;">Membership</a> | <a href="http://www.saata.org/" title="saata" target="_blank" style="color:#ffffff; text-decoration:none;">Email</a></td>
          <td width="30" align="right" valign="middle" bgcolor="#38CAC0"><a href="#"><img src="img/social-facebook.png" alt="facebook" width="8" height="16" border="0" /></a></td>
          <td width="10" align="right" valign="middle" bgcolor="#38CAC0">&nbsp;</td>
        </tr>
    </table>      <br/></td>
  </tr>
</table>
<script>
w3IncludeHTML();
</script>
</body>
</html>
