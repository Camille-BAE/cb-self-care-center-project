let affirmMessage = [`La vie mettra des pierres sur ta route. A toi de décider d’en faire des murs ou des ponts.`, `Accepte ce qui est, laisse aller ce qui était, aie confiance en ce qui sera.`, `S’il y a un problème, il y a une solution. S’il n’y a pas de solution, alors ce n’est pas un problème.`, `Ils ne savaient pas que c’était impossible, alors ils l’ont fait.`, `Quand on ose, on se trompe souvent. Quand on n’ose pas, on se trompe toujours.`, `Mieux vaut fait que parfait.`, `Ne t’inquiète pas de l’échec. Inquiète-toi de ce que tu manques si tu n’essayes même pas.`, `On a toujours le choix. On est même la somme de ses choix.`, `Fais de ta vie un rêve et d’un rêve une réalité.`, `N’attendez pas d’être heureux pour sourire. Souriez plutôt afin d’être heureux.`];

let mantraMessage = [`Fais de ton mieux et n’oublie pas d’être heureux.`, `Je m’alimente de mots et de pensées positives.`, `Le bonheur est possible et il vaut mieux aller à sa rencontre qu'en écouter le récit.`, `Soyez heureux, agissez dans le bonheur, sentez-vous heureux, sans aucune raison.`, `Faites que le rêve dévore votre vie, afin que la vie ne dévore pas votre rêve.`, `La vie heureuse est celle qui est en accord avec sa propre nature.`, `Le vrai bonheur ne dépend d’aucun être, d’aucun objet extérieur. Il ne dépend que de nous.`, `Je suis maître de mes émotions.`, `Ce qui te manque, cherche-le dans ce que tu as.`, `Chaque jour apparaissent de nouvelles occasions dans ma vie.`];

document.getElementById('btnMessage').onclick = function () {
  let affirmMessage = document.getElementById('affirmCitation');
  let mantraMessage = document.getElementById('mantraCitation');

  if (affirmMessage.checked || mantraMessage.checked) {
    randomMessage();
    boxMessage.style.display = 'block';
  }else {
    alert(`Choisi d'abord quel type de message tu veux recevoir =)`);
  }
};

let getRandomIndex = Math.floor(Maths.random() * n);
function randomMessage (n) {
  let randomAffirmation = getRandomIndex(affirmMessage.length);
  let randomMantra = getRandomIndex(mantraMessage.length);

  if (affirmMessage.checked) {
    boxMessage.innerHTML = affirmMessage[randomAffirmation];
  };
  if (mantraMessage.checked) {
    boxMessage.innerHTML = mantraMessage[randomMantra];
  };
};




// Math.random();



////////////////////////////////////////////////////////////////////////////
//ce que je veux :
// 1) je veux que lorsque je sélectionne mantra et que je clique sur le bouton, qu'un message de mantra s'affiche de manière aléatoire et fait disparaître l'image.
// 2) si je clique de nouveau sur le bouton, un autre message aléatoire de mantra apparaît et vient remplacer l'ancien message.
// 3) si je décice de changer et de sélectionner affirmation, et que je clique sur le bouton, un message de affirmation doit apparaître et remplacer le message de mantra.
// Et Vice-Versa
// 1) je veux que lorsque je séléctionne affirmation et que je clique sur le bouton, qu'un message de affirmation s'affiche de manière aléatoire et fait disparaître l'image.
// 2) si je clique de nouveau sur le bouton, un autre message aléatoire de affirmation apparaît et vient remplacer l'ancien message.
// 3) si je décide de changer et de sélectionner mantra et que je clique sur le bouton, un message de mantra doit apparaître et remplacer le message de affirmation.