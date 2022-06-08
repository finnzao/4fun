<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
$n=isset($_GET['n1'])?$_GET['n1']:0;
$op=isset($_GET['op'])?$_GET['op']:1;
$d=isset($_GET['dw'])?$_GET['dw']:2;
switch($op){
    case 1:
        $r= $n*2;
        break;
    case 2:
        $r= pow($n,2);
        break;
    case 3:
        $r= sqrt($n);

        break;
    default:
        $r= "";
        break;
}
echo "<p>$r</p>"
?>

<?php
switch($d){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        echo "DIA DA SEMANA";
        break;
    case 8:
    case 9:
        echo "FIM DE SEMANA";
        break;
    default:
    echo "INVALIDO";
}
?>

<button>

<a href="javascript:history.go(-1)" >VOLTAR</a>
<br>
</button>
</body>
</html>

