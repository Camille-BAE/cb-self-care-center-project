//document.querySelector('#name' (or '.name')); => pour sélectionner un élément dans le html

//document.getElementsById('#name'); => pour aller chercher l'Id d'un élément dans le html
//document.getElementsByClassName('.name'); => pour aller chercher le class d'un élément dans le html

const messageAff = document.querySelector('#affirmCitation');
const messageMan = document.querySelector('#mantraCitation');
const buttonMessage = document.querySelector('#btnMessage');

messageAff.addEventListener('click', () =>{
  const affirmRandom = [];
// document.getElementsByClassName('.affirmCitation')



// Pour faire apparaître et réapparaître les messages
//   if (affirmCitation.style.display == 'block') {
//     affirmCitation.style.display == 'none';
//   }else {
//     affirmCitation.style.display == 'block';
//   }
// });

// messageMan.addEventListener('click', () =>{
//   const mantraRandom = [];

//   if (mantraCitation.style.display == 'block') {
//     mantraCitation.style.display =='none';
//   }else {
//     mantraCitation.style.display =='block'
//   }
});






//ce que je veux :
// 1) je veux que lorsque je sélectionne mantra et que je clique sur le bouton, qu'un message de mantra s'affiche de manière aléatoire et fait disparaître l'image.
// 2) si je clique de nouveau sur le bouton, un autre message aléatoire de mantra apparaît et vient remplacer l'ancien message.
// 3) si je décice de changer et de sélectionner affirmation, et que je clique sur le bouton, un message de affirmation doit apparaître et remplacer le message de mantra.
// Et Vice-Versa
// 1) je veux que lorsque je séléctionne affirmation et que je clique sur le bouton, qu'un message de affirmation s'affiche de manière aléatoire et fait disparaître l'image.
// 2) si je clique de nouveau sur le bouton, un autre message aléatoire de affirmation apparaît et vient remplacer l'ancien message.
// 3) si je décide de changer et de sélectionner mantra et que je clique sur le bouton, un message de mantra doit apparaître et remplacer le message de affirmation.