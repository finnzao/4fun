<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=$, initial-scale=1.0">
    <title>Matriz</title>
</head>
<body>
    <?php
     $n=array(1,5,3,4,9);
     $n1=array(1,5,3,4,9);
     $n2=array(1,5,3,4,9);
     $n3=array(4=>"A",1=>"B",2=>"C",3=>"D");
    /* 
    shif |adiciona começo| unshit ->|retirar começo|
    array_push -> |adiciona final| array_pop  -> |remover final|
    
    
    
   
    foreach ($n as $valor){
        echo " $valor ";
    };
    array_push($n,10);#adicionando valor no array 
    array_pop($n);#elimando ultimo elemento
    print_r($n);#imprimindo coleção ,formatação focada no programador
    echo " o vetor tem ".count($n);*/
    ?>




     <pre>
         <?php 
             #print_r($n);#imprimindo coleção ,formatação focada no programador
            # var_dump($n)
             ?>
     </pre>

    <?php 
    #array_push($n,10)#adicionando valor no array 
    ?>

    
    <pre>
    <?php 
    print_r(rsort($n));
    sort($n);#ordem crescente 

    print_r($n);


    ?>
    </pre> 
    
    <pre>
    <?php 
        #ordenação associativa
    print_r($n1);
    asort($n1);#alterando até mesmo indice
    print_r($n1)
    ?>

<?php 
    print_r($n2);
    arsort($n2);#alterando até mesmo indice ,de forma reversa
    print_r($n2)
    ?>

<?php 
#ordenado por chaves
print_r($n3);
ksort($n3);
print_r($n3);
krsort($n3);
print_r($n3)
?>




</pre>
</body>
</html>