<?php
if($_SERVER["REQUEST_METHOD"] == "GET"){
    $nome = $_GET['nome'];
    $email = $_GET['email'];
    $mensagem = $_GET['mensagem'];

    $to = "gregorytrajano289@gmail.com"; // coloque seu e-mail aqui
    $subject = "Mensagem do Portfólio";
    $body = "Nome: $nome\nEmail: $email\nMensagem:\n$mensagem";

    if(mail($to, $subject, $body)){
        echo "Muito obrigado, Mensagem enviada com sucesso!";
        echo "Entraremos em contato com você em breve.";
        echo "<br><a href='../index.html'>Voltar ao site</a>";
    } else {
        echo "Erro ao enviar mensagem.";
    }
}
?>
