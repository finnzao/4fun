<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Média</title>
    <style>
    .box{
        border: 2px solid red;
    }
    .box span{
        text-transform: uppercase;
        color: red;
    }

    </style>
</head>
<body>

<?php 
$x=$_GET["valueA"];
$y=$_GET["valueB"];
$m=($x+$y)/2;



if ($m<=5){
    $r= "reprovado";
}elseif($m<7){
    $r="recuperação";
}else{
    $r="aprovado";
}
?>

<div class="box">
    <?php echo "Suas notas foram ".number_format($x,2,",",".") ." e ". number_format($y,2,",",".") ." com media de $m então você foi <span>$r<span/>"?>
</div>
<form method="get" action="1media.html">
    <input type="submit" value=" Voltar"/>
    </form>


</body>
</html>