<?php
namespace App\Service;
// namespace App\Controller;


class searchFilm  {


    // return a film description using the omdbAPI
    public static function search ($nomFilm) 
    {
        $descriptionFilm = NULL;
        $apiKey = '3830c4bd'; 

        // remove blank space from film name 
        $nomFilm = str_replace(' ', '', $nomFilm);

        $url = "http://www.omdbapi.com/?apikey=" . $apiKey . "&t=" . $nomFilm;
         
        $response = file_get_contents($url);

        try
        {
            $descriptionFilm = json_decode($response,true)["Plot"];
        }catch (\Exception $e)
        {
            error_log($e->getMessage());
        }


        return $descriptionFilm;
    }


}

?>
