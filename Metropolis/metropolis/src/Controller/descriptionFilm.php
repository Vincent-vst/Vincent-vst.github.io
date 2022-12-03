<?php


namespace App\Controller;

use App\Entity\Film;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\HttpFoundation\Response;


   class descriptionFilm extends AbstractController
   {
     /**
     * @Route("/details/{id}", name="description")
     * @Route("/", name="home")
     */


    public function show( ManagerRegistry $doctrine, $id, Request $request, EntityManagerInterface $em): Response 
    {
        $film = $doctrine->getRepository(Film::class)->find($id);

        $form = $this->createFormBuilder()
            ->add('password', TextType::class) 
             ->add('submitForm', SubmitType::class, ['label'=>'delete film '])
             ->getForm()
        ; 


        $form ->handleRequest($request);

        if($form->isSubmitted() && $form->isValid())
        {
            $data=$form->getData(); 

            //delete film if password is set to 1234
            if($data['password']==$this->getParameter('code')) // move password to symfony parameter
            {
               $em->remove($film); 
               $em ->flush(); 
               return $this->redirectToRoute('home');
            } 
         }

        return $this->render('details/description.html.twig', ['film' => $film, 'deleteFilm' => $form->createView()]);


    }


   }

?>
