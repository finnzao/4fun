<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pass Value</title>
</head>
<body>
<?php 
$b=2;
#PASS OF VALUE
function tes($x){
    $x+1;
    echo $x;
}
#$a=1;
#tes($a); ## NUMERO 2
#echho($a) a=1 same value

#PASS OF REFERENCE
echo $b;
function tes1(&$b){
    $b=$b+2;
    echo $b;
}

tes1($b);# 3
echo($b)
# echo($b) b=3 change the value 


?>
</body>
</html>