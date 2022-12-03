<?php

namespace App\Controller;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use CMEN\GoogleChartsBundle\GoogleCharts\Charts\PieChart;
use Doctrine\Persistence\ManagerRegistry;
use App\Entity\Film;
use Doctrine\ORM\EntityManager;
use Symfony\Component\HttpFoundation\Response;

class statsFilm extends AbstractController
{

    /**
     * @Route("/stats", name="stats")
     */

    public function show(ManagerRegistry $doctrine, EntityManager $em): Response
    {

        //At first, i wanted to use https://packagist.org/packages/cmen/google-charts-bundle 
        // but for some reason, it didn't want to import correctly.

        //I also tried chart.js but it didn't work as well

        $film = $doctrine->getRepository(Film::class)->findBy([], ['note' => 'DESC','nom' => 'ASC']);  
        return $this->render('stats/stats.html.twig', ['films' => $film]);
    }


}


?>