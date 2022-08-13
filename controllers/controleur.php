<?php
$action = $_GET["action"];

switch ($action) {
    case "ajouter":
        include "vue/ajouter.php";
        break;
    case "valideajouter":
        $utilisateur = new Utilisateur();
        $utilisateur->setNom($_POST["nom"]);
        $utilisateur->setPrenom($_POST["prenom"]);
        $utilisateur->setMessage($_POST["message"]);
        $nb = Utilisateur::ajouter($utilisateur);
        header('Location: index.php?uc=contact');
}
