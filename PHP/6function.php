<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Function</title>
</head>
<body>
<?php 

$n1 = isset($_GET['n1']) ? $_GET['n1'] : 0;
$n2= isset($_GET['n2']) ? $_GET['n2'] : 0;

$test=function ($v1,$v2){
    echo"<p>A soma vale ".($v1+$v2)."</p>";
};
function test1($v1,$v2){
    return $v1+$v2;
}

function sum(){
    $p=func_get_args();##make a obj with the number p[0],p[1]...p[n]
    $n=func_num_args();
    $s=0;
    for($i=0;$i<$n;$i++){
        $s+=$p[$i];
    }
    return $s;
}
echo sum(1,1,1,1);
?>

</body>
</html>