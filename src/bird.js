birds = ['fauvette-a-tete-noire.wav', 'geai-des-chenes.wav', 'mesange-charbonniere.wav', 'pinson-des-arbres.wav',
    'pouillot-veloce.wav', 'rouge-gorge.wav', 'sitelle-torchepot.mp3', 'troglodyte-mignon.wav']
randomBird = birds[Math.floor(Math.random() * birds.length)]
document.getElementById("audio-source").setAttribute('src', '../assets/birds/' + randomBird);

function birdValidate() {
    let answer = document.getElementById('bird-input').value
    // randomBird = randomBird.slice(0, -4).replace('-', ' ')
    document.getElementById('result-bird').innerHTML = randomBird.slice(0, -4).replaceAll('-', ' ') + ' <a id="bird-next" href="#" onclick="window.location.reload()">next</a>'
}

