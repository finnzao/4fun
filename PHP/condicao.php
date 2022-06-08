<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Condição</title>
</head>
<body>


    <form method="get" action="condicao.php">
        <h3>IDade</h3>
        <input type="number" name='year'/>
        <input type="submit" value="Verificar"/>
    </form> 
    <?php 
    
    $a=isset($_GET['year'])?$_GET['year']:1995;
    $age=date("Y")-$a;
    if($age < 16){
        $v="Não vota";
        $d="Não pode dirigir";
    }elseif($age>=16 && $age<18 || $age>65){
        $v="Voto Opcional";
        $d='não pode dirigir';  
    }else{
            $d="pode dirigir";
            $v="voto obrigatorio";

    }
    echo "Você nasceu em $a,atualmente com $age,então $v e $d " ;   
  
    
    ?>
</body>
</html>