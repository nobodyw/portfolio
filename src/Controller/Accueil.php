<?php


namespace App\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class Accueil extends AbstractController
{

    /**
     * @Route("/", name="home")
     */
    public function Home(){
        return $this->render('base.html.twig');
    }
}
