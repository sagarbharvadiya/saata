<?php
session_start();

$width  = 120;
$height =  40;
$length =   4;

$baseList = '123456789ABCDEFGHIJKLMNPQRSTUVWXYZ';

$code    = "";
$counter = 0;

$image = @imagecreate($width, $height) or die('Cannot initialize GD!');

//Blue - 1, 69, 140
//Red - 219, 36, 28

for( $i=0; $i<10; $i++ ) {
   imageline($image, 
	     mt_rand(0,$width), mt_rand(0,$height), 
	     mt_rand(0,$width), mt_rand(0,$height), 
	     imagecolorallocate($image, 252, 250, 237));
}

for( $i=0, $x=0; $i<$length; $i++ ) {
   $actChar = substr($baseList, rand(0, strlen($baseList)-1), 1);
   $x += 10 + mt_rand(0,10);
   
      if (mt_rand(1,10)>5)
      {
      $R=1;$G=69;$B=140;
      }
      else
      {
      $R=219;$G=36;$B=28;
      }


   imagechar($image, mt_rand(10,15), $x, mt_rand(15,20), $actChar, 
      imagecolorallocate($image, $R, $G, $B));
      
   $code .= $actChar;
}
 
header('Content-Type: image/jpeg');
imagejpeg($image);
imagedestroy($image);

$_SESSION['sess_security_code'] = $code;
echo $_SESSION['sess_security_code'];
?>