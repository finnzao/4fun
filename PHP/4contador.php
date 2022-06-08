<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contador</title>
</head>
<body>
    <?php

    #$value=isset($_GET["value$i"])?$_GET["value$i"]:1;
    $B=isset($_GET['B'])?$_GET['B']:10;
    $S=isset($_GET['S'])?$_GET['S']:0;
    $F=isset($_GET['F'])?$_GET['F']:2;
    while($B>$F){
        echo  "$B<br>";
        $B=$B-$S;
    };
    echo "$B"
    ?>
</body>
</html>