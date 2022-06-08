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
 $fe=(string)"NAME";
 $fa="NAME2";
 $num=12;
 $num2=10;
$test=12
 ?>

<?php if ($test == true): ?>
  Isto irá aparecer se a expressão for verdadeira.
<?php else: ?>
  Senão isso que aparecerá.
<?php endif; ?>
<br>
   <?php
  echo $fa.' é uma variavel e '.$fe.' tabem é uma ';
  echo "<p> $fa é uma variavel e $fe tabem é uma </p>";
  print "Hello word <br>";
  echo gettype($num);
  echo ($num);

 ?>
 <br>
</div>  

  <h2>SOMA <?= $num+$num2?></h2>

 </body>
</html>