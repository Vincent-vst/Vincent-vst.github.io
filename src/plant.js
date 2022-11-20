
plant = ['bardane.jpg', 
        'gaillet-gratteron.jpg', 
        'plantain.jpg']
randomPlant = plant[Math.floor(Math.random() * plant.length)]
console.log(randomPlant)
document.getElementById('image-src').src = '../assets/plants/' + randomPlant




function plantValidate() {
    document.getElementById('result-plant').innerHTML = randomPlant.slice(0, -4).replaceAll('-', ' ') +  ' <a id="bird-next" href="#" onclick="window.location.reload()">next</a>'
}