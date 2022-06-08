<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Funções </title>
</head>
<body>

    <?php
    $v1=$_GET['x'];
    $v2=$_GET['y'];
    echo "<h2>Valores recebidos: $v1 e $v2</h2>";
    echo " Valor absoluto $v2 é ".abs($v2) ;
    
    echo "<br> O valor de $v1<sup>$v2</sup> = ". pow($v1,$v2);
    echo "<br> Square root $v1 =".sqrt($v1);
    echo "<br> Round Number $v2 =".round($v2) ;//ceil floor
    echo "<br> Int val $v2 =".intval($v2);
    echo "<br> Format=  R$$v1 =".number_format($v1,2,",",".");
    ?>
</body>
</html>