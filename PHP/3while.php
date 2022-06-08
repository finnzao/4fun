<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>While</title>
</head>
<body>


</body>

<?php


##echo "<form action='3while.php' method='post'>";
$i=1;
while ($i<6){

    $value=isset($_GET["value$i"])?$_GET["value$i"]:1;
    echo "

    Valor de $i = $value
";
  $i++;
}
##echo"<input type='submit' value=' Confirmar'/></form>";
?>
</html>