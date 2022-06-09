<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Funções em Sring</title>
</head>
<body>

    <?php 
    $produte="Apple";
    $price=1.2555;
    #printf("The %s cust %.2f or %u",$produte,$price,$price)
    #%s = sritng ;%f= valor real; %u=valor decimal sem sinal(positivos) ; %d=valor decimal
    ?>

    <?php 
    $v[0]=2;
    $v[1]=3;
    $v[2]=4;
    #print_r($v);#testar vetores
    $v2=array(3,6,2,1,5,5);
    #var_dump($v2)
    #var_export($v2);
    #print_r($v2);
    ?>

    <?php
    #Quebrar texto
    $txt="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit beatae voluptatum in totam expedita doloremque nihil ab asperiores? Minima blanditiis fugit, itaque molestias laboriosam error qui nobis. Laudantium facilis cum, cumque perspiciatis molestiae delectus eaque dignissimos enim, illum consectetur, officiis autem sint adipisci ut suscipit culpa vel alias amet fugiat!";
    $res=wordwrap($txt,20,"<br>\n",false);
    #echo($res)
    ?>

    <?php
    #numero de caracteres
    $txt2="Hi friend,how are you ?";
    $size=strlen($txt2);
    #echo($size);
    ?>

    <?php 
    #REMOVER ESPAÇO
    $txt3="  NAME            WITH    SPACE   ";
    #echo(strlen($txt3));
    $new_txt3=trim($txt3);
    #echo($new_txt3);

    ?>

    <?php
    #eliminar espaços no inicio e final
    $txt4="    NAME   WITH SPACE    ";
   # echo(strlen($txt4));
    $new_txt4=ltrim($txt4);
    #echo($new_txt4);
    #echo(rtrim($txt4));
    ?>

    <?php 
    $count_word=str_word_count($txt,0);
    #echo $count_word;
    ?>

    <?php

    $site="FRAse com texto";
    $vetor=explode(" ",$site);
    #print_r($vetor);

    ?>


    <?php 
    #cada letra em um indice separado
    $nome2="Maria";
    $vetor2=str_split($nome2);
    #$print_r($vetor2)
    ?>

    <?php 
    $vetor3[0]="Curso";
    $vetor3[1]="em";
    $vetor3[2]="Video";
    $tex3=implode("#",$vetor3);
   # print($text3)
    ?>

    <?php 
    #codigo da letra
    $letra=chr(100);
    echo $letra;
    ?>

    <?php 
    #mostrando codigo da letra
    $cod=ord("l")

    ?>
</body>
</html>