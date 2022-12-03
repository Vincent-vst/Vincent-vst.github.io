<?php

namespace App\Controller;

use Doctrine\Persistence\ManagerRegistry;
use App\Entity\Film;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Task;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\HttpFoundation\Request;

class homeFilm extends AbstractController
{

    /**
     * @Route("/", name="home")
     */

    // return all films of the database, sorting them by name and note
    public function show(ManagerRegistry $doctrine): Response
    {

        $film = $doctrine->getRepository(Film::class)->findBy([], ['note' => 'DESC','nom' => 'ASC']);
        

        return $this->render('base.html.twig', ['films' => $film]);
    }


}
