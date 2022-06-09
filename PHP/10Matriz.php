<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Matriz e Vetores</title>
</head>
<body>
<pre>
    <?php 
    $n=(array(1,2,3,4));
    $n[]=10;#criando novo valor para a array
    print_r($n);

    $r=range(5,20,5);
    print_r( $r);

    foreach($r as $valor){
        echo  " $valor ";
    };
    $n1=array(1=>"a",4=>"b",3=>"c");
    $n1[]=2;
    unset($n1[4 ]);#alocar (remover) o indice
    print_r($n1);
    
    $cad= array("nome"=>"Ana",
    "idade"=>23,
    "peso"=>69.5);
    
    $cad["boley"]=true;

    foreach($cad as $c=>$v){
        echo "$c=$v ";
    }

    $matriz=array(array(3,1),
                array(3,5),
                array(9,5));

    $matriz[0][1]=$matriz[1][1]; # 1 recebe 5
    print_r($matriz)

    ?>
</pre>
</body>
</html>