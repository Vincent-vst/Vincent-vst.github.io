<?php


namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class uploadFilm extends AbstractController
{

    /**
     * @Route("/upload", name="upload")
     */

    public function upload(Request $request) : Response
    {

        $form = $this->createFormBuilder()
            ->add('email', EmailType::class)
            ->add ('submit', SubmitType::class, ['label'=>'upload'])
            ->getForm(); 
            ;

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid())
        {
            return $this->redirectToRoute('home');
        }


        return $this->render('upload/upload.html.twig', [
            'uploadFilm'=>$form->createView()
        ]);

    }


}


?>
