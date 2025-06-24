const form = document.getElementById('sinForm');
const evil = document.getElementById('evil');
const judgement = document.getElementById('judgement');

const punishments = [
  "You shall bathe forever in molten lava while demons sing lullabies.",
  "You will wander endlessly in a maze of mirrors, seeing every version of your failure.",
  "Cursed to write bug-free code… but never compile it!",
  "You will roll a giant rock up a hill for eternity… and it always rolls back down.!",
  "A paradoxical punishment — you’ll burn from frost and freeze from flame.!",
  "You are absorbed into a wall where tormented souls cry out eternally—your face among them.!",
  "Every breath draws in fire — but you cannot stop breathing.."
];

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const sin = document.getElementById('sinInput').value;
  const randomPunishment = punishments[Math.floor(Math.random() * punishments.length)];

  evil.style.display = 'block';
  judgement.innerHTML = `
    <p><strong>The Evil One speaks:</strong></p>
    <p>You admitted: "${sin}"</p>
    <p>Your punishment: <em>${randomPunishment}</em></p>
  `;
});
// const form = document.getElementById('sinForm');
// const evil = document.getElementById('evil');
// const judgement = document.getElementById('judgement');
// const judgementSound = new Audio('assets/judgement.mp3');

// const punishments = [
//   "Dragged across burning coals for eternity.",
//   "Hung by your lies on a tree of knives.",
//   "Your soul will scream endlessly in the echo pits.",
//   "Fed to hounds with the scent of your regrets.",
//   "Your spine will be the archway of the damned.",
//   "Eternally crushed under the weight of broken promises.",
//   "Flayed by the wind, rebuilt by spiders, and flayed again."
// ];

// form.addEventListener('submit', function (e) {
//   e.preventDefault();
//   const sin = document.getElementById('sinInput').value;
//   const randomPunishment = punishments[Math.floor(Math.random() * punishments.length)];

//   // Show evil & play sound
//   evil.style.display = 'block';
//   judgementSound.play();

//   // Animate judgement text
//   gsap.to(judgement, {
//     duration: 0.5,
//     text: `You confessed: "${sin}"\nYour punishment: ${randomPunishment}`,
//     ease: "power2.inOut"
//   });

//   // Evil rise animation
//   gsap.fromTo("#evil img", { y: 200, opacity: 0 }, { y: 0, opacity: 1, duration: 2 });
// });
   
