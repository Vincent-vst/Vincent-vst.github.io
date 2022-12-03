
tree = ['bouleau.jpg', 
        'feuille-charme.jpg', 
        'feuille-chataigner.jpg', 
        'feuille-chene.jpg',
        'feuille-frene.jpg',
        'feuille-hetre.jpg', 
        'feuille-noyer.jpg',
        'feuille-saule.webp',
        'fruit-erable.jpg',
        'fruit-liquidambar.jpg',
        'fruit-platane.webp',
        'tronc-peuplier.jpg']
randomTree = tree[Math.floor(Math.random() * tree.length)]
// document.getElementById("audio-source").setAttribute('src', '../assets/birds/' + randomBird);
console.log(randomTree)
document.getElementById('image-src').src = '../assets/trees/' + randomTree




function treeValidate() {
    document.getElementById('result-tree').innerHTML = randomTree.slice(0, -4).replaceAll('-', ' ') +  ' <a id="bird-next" href="#" onclick="window.location.reload()">next</a>'
}