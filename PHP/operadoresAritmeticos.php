<!DOCTYPE HTML>
<html>
  <head>
   <title>Exemplo</title>

   <style>
       div{
           background-color:orange ;
       }
   </style>
   </head>
  <body>
    <h1>PHP ABAIXO</h1>
    <div>
      
      
<?php 
function calculation($n1,$n2,$type,$n3)
{
    return (" A $type entre  $n1 e $n2 é $n3 <br> ");
}
?>

 <?php 
$name=$_GET["a"];
$n1=$_GET["n1"];
$n2=10;
$a=$n1+$n2;
$d=$n1/$n2;
$mul=$n1*$n2;
$mol=$n1%$n2;

 ?>




<?php
echo 'Olá ' . $name . '! <br>';
echo calculation($n1,$n2,"Soma",$a);
echo calculation($n1,$n2,"Divisão",$d);
echo calculation($n1,$n2,"Multiplição",$mul);
echo calculation($n1,$n2,"Modelo",$mol);

?>
 </body>
</html>