<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Repetidor</title>
</head>
<body>
    <?php 

    $number = isset($_GET['n']) ? $_GET['n'] : '0';
    $v=$number;
    $multiplos=0;

    echo "Esses são os divsores:";
    for($i=2;$i<$v;$v--){
        if($number%$v==0){
            echo" $v ";
            $multiplos+=1;
        }
    }

    echo "<br>Total de Multiplos $multiplos";

    if($d>2){
        echo "<br> Então $number não é Primo";
    }else{
        echo "<br> Então $number é Primo";
    }
    ?>
</body>
</html>