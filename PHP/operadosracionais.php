<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>operadosracionais</title>
</head>
<body>
    <h3>Operadors Racionais</h3>


<?php 
$op=$_GET["op"];
$a=$_GET['a'];
$b=2;
echo gettype($a);
$r= $a===$b?"SIM":"NÂO";
//$grade=($a+$b/2)>5?"PASS":"NOT PASS";

$op=="a"?$a+$b:$a*$b;


echo "<br>RESULT OF GRADE: $grade<br>VALOR A:$a VALOR B:$b<br> RESULTADO:$op.<br>SAME NUMBERS:$r<br>";

echo "Situação do aluno é ".(($a+$b/2)>5?"PASS":"NOT PASS")."<br>";//unuario se comporta como operador ,todo operador é entre ()
?>

<?php 
$age=(-$_GET['y']+2022);


$eletion= ($age >= 18 && $age<65)?"OBRIGATORIO":"OPCIONAL";

echo $eletion


?>
</body>
</html>