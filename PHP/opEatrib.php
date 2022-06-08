<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Operation and Attributes</title>
    <style>
        .row{
            width: 100%;
            height: 5px;
            background-color: yellowgreen;
        }
    </style>
</head>
<body>
    
    <?php
    $num=$_GET["n"];
    function desc($n)
    {
        return ($n-$n*0.1);
    };
    /*COMENTARIO APARECE NO CODIGO FONTE  */
    #APENAS NO PHP
    echo "10% of  $num is ".number_format(desc($num),2)
    //PRE-INCRIMENTO :INCREMENTA ANTES DE QUALQUER COISA -> ++$A
    //POS-INCRIMENTO : PRIMEIRO USA DE DEPOIS FAZ A OPERAÇÃO -> $A++
    ?>

<div class="row"></div>
    <?php 
    $year=$_GET["year"];
    echo "The pass year of $year is ".--$year 
    ?>

<div class="row"></div>

    <?php 
    $a=3;
    $b=$a;
    $b+=5;
    echo "$a e $b";

    $c=10;
    $d=&$c;
    $c=20;
    echo "<br>$c";
    echo "<br>$d";
    ?>

    <div class="row"></div>

    <?php 
    $site="curso";
    $$site="SubCurso";
    echo $site;
    echo "<br>$curso";
    ?>
</body>
</html>