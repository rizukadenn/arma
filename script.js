/* =====================================================
   ELEGANT BLUSH PINK
   31ST BIRTHDAY MOM
===================================================== */


/* ===============================
   LOADING SCREEN
================================ */

window.addEventListener("load", () => {

  setTimeout(() => {

    const loader =
      document.getElementById("loader");

    loader.classList.add("hide");

  }, 2300);

});


/* ===============================
   PARTICLES
================================ */

const particleContainer =
  document.getElementById("particles");

const particleSymbols = [
  "♡",
  "✦",
  "✧",
  "✿",
  "·"
];

function createParticle() {

  const particle =
    document.createElement("div");

  particle.classList.add("particle");

  particle.innerText =
    particleSymbols[
      Math.floor(
        Math.random() *
        particleSymbols.length
      )
    ];

  particle.style.left =
    Math.random() * 100 + "%";

  particle.style.fontSize =
    (Math.random() * 14 + 8) + "px";

  particle.style.animationDuration =
    (Math.random() * 8 + 8) + "s";

  particle.style.animationDelay =
    Math.random() * 2 + "s";

  particleContainer.appendChild(
    particle
  );

  setTimeout(() => {

    particle.remove();

  }, 18000);

}

setInterval(createParticle, 700);


/* ===============================
   ENVELOPE
================================ */

const envelope =
  document.getElementById("envelope");

const intro =
  document.getElementById("intro");

const mainContent =
  document.getElementById("main-content");

envelope.addEventListener(
  "click",
  () => {

    if (
      envelope.classList.contains("open")
    ) {
      return;
    }

    envelope.classList.add("open");

    setTimeout(() => {

      intro.style.transition =
        "opacity 1.2s ease";

      intro.style.opacity = "0";

    }, 1800);

    setTimeout(() => {

      intro.style.display = "none";

      mainContent.classList.remove(
        "hidden"
      );

      setTimeout(() => {

        mainContent.classList.add(
          "visible"
        );

        initializeReveal();

      }, 100);

      window.scrollTo({
        top: 0,
        behavior: "instant"
      });

    }, 3000);

  }
);


/* ===============================
   SCROLL
================================ */

function scrollToSection(id) {

  const section =
    document.getElementById(id);

  if (!section) return;

  section.scrollIntoView({
    behavior: "smooth"
  });

}


/* ===============================
   31 WISHES
================================ */

const wishes = [

  {
    title: "More Happiness",
    text: "May your days be filled with the kind of happiness that quietly stays in your heart."
  },

  {
    title: "Beautiful Moments",
    text: "May this year give you countless little moments that become beautiful memories."
  },

  {
    title: "Peace",
    text: "May your heart always find peace, even when life gets a little busy."
  },

  {
    title: "Good Health",
    text: "May you always be surrounded by good health, energy and wonderful days."
  },

  {
    title: "More Smiles",
    text: "May you have a thousand reasons to smile, laugh and enjoy the little things."
  },

  {
    title: "New Adventures",
    text: "May this year bring exciting places, new experiences and stories worth remembering."
  },

  {
    title: "Self Love",
    text: "May you remember to love yourself just as much as you love everyone around you."
  },

  {
    title: "Dreams",
    text: "May the dreams you've been quietly carrying finally find their way toward you."
  },

  {
    title: "Confidence",
    text: "May you always know your worth and walk through life with confidence."
  },

  {
    title: "Warm Days",
    text: "May your days feel warm, soft and comforting like your favorite morning."
  },

  {
    title: "Little Surprises",
    text: "May beautiful surprises find you when you least expect them."
  },

  {
    title: "Lovely People",
    text: "May you always be surrounded by people who genuinely appreciate your heart."
  },

  {
    title: "Successful Days",
    text: "May every effort you make slowly bloom into something you're proud of."
  },

  {
    title: "More Rest",
    text: "May you have more moments where you can simply breathe, rest and enjoy life."
  },

  {
    title: "Sweet Memories",
    text: "May this chapter be filled with memories that make you smile years from now."
  },

  {
    title: "Courage",
    text: "May you always have the courage to choose what makes your heart happy."
  },

  {
    title: "Freedom",
    text: "May you feel free to become whoever you want to be."
  },

  {
    title: "Good Luck",
    text: "May luck gently follow you wherever life takes you."
  },

  {
    title: "Beautiful Growth",
    text: "May every challenge turn into a lesson and every lesson help you bloom."
  },

  {
    title: "Cozy Nights",
    text: "May you have peaceful nights, comfortable evenings and a heart full of gratitude."
  },

  {
    title: "More Love",
    text: "May love find you in unexpected places and in the smallest moments."
  },

  {
    title: "Bright Future",
    text: "May everything ahead of you feel brighter than everything you've left behind."
  },

  {
    title: "Gentle Days",
    text: "May life be gentle with you this year."
  },

  {
    title: "Your Favorite Things",
    text: "May you have more time for all the people, places and things you truly love."
  },

  {
    title: "Wonderful News",
    text: "May this year bring you many reasons to say, 'I am so happy this happened.'"
  },

  {
    title: "A Happy Heart",
    text: "May your heart stay soft, hopeful and full of beautiful things."
  },

  {
    title: "Endless Flowers",
    text: "May your life keep blooming in ways you never expected."
  },

  {
    title: "More Time",
    text: "May you have more time to slow down and appreciate how far you've come."
  },

  {
    title: "Magic",
    text: "May ordinary days occasionally surprise you with a little bit of magic."
  },

  {
    title: "Everything You Deserve",
    text: "May life return all the kindness, love and warmth you have given to others."
  },

  {
    title: "A Beautiful 31",
    text: "And most importantly, may 31 be the beginning of one of your most beautiful chapters yet."
  }

];


const wishesGrid =
  document.getElementById(
    "wishesGrid"
  );


wishes.forEach(
  (wish, index) => {

    const item =
      document.createElement("div");

    item.classList.add(
      "wish-item",
      "reveal"
    );

    item.innerHTML = `

      <div class="wish-number">
        ${index + 1}
      </div>

      <div class="wish-flower">
        ✿
      </div>

    `;

    item.addEventListener(
      "click",
      () => {

        openWishModal(
          index + 1,
          wish.title,
          wish.text
        );

      }
    );

    wishesGrid.appendChild(item);

  }
);


/* ===============================
   WISH MODAL
================================ */

const wishModal =
  document.getElementById(
    "wishModal"
  );

const wishNumber =
  document.getElementById(
    "wishNumber"
  );

const wishTitle =
  document.getElementById(
    "wishTitle"
  );

const wishText =
  document.getElementById(
    "wishText"
  );


function openWishModal(
  number,
  title,
  text
) {

  wishNumber.textContent =
    number;

  wishTitle.textContent =
    title;

  wishText.textContent =
    text;

  wishModal.classList.add(
    "active"
  );

  document.body.style.overflow =
    "hidden";
}


function closeWishModal() {

  wishModal.classList.remove(
    "active"
  );

  document.body.style.overflow =
    "";

}


wishModal
  .querySelector(".modal-overlay")
  .addEventListener(
    "click",
    closeWishModal
  );


/* ===============================
   MESSAGE MODAL
================================ */

const messageButton =
  document.getElementById(
    "messageButton"
  );

const messageModal =
  document.getElementById(
    "messageModal"
  );

const closeMessage =
  document.getElementById(
    "closeMessage"
  );


messageButton.addEventListener(
  "click",
  () => {

    messageModal.classList.add(
      "active"
    );

    document.body.style.overflow =
      "hidden";

  }
);


closeMessage.addEventListener(
  "click",
  () => {

    messageModal.classList.remove(
      "active"
    );

    document.body.style.overflow =
      "";

  }
);


messageModal
  .querySelector(".modal-overlay")
  .addEventListener(
    "click",
    () => {

      messageModal.classList.remove(
        "active"
      );

      document.body.style.overflow =
        "";

    }
  );


/* ===============================
   FLOWER GARDEN
================================ */

const bloomButton =
  document.getElementById(
    "bloomButton"
  );

const garden =
  document.querySelector(
    ".garden"
  );


bloomButton.addEventListener(
  "click",
  () => {

    garden.classList.add(
      "bloomed"
    );

    bloomButton.innerHTML =
      "✿ Your garden is blooming ♡";

    bloomButton.disabled = true;

    createBloomParticles();

  }
);


/* ===============================
   BLOOM PARTICLES
================================ */

function createBloomParticles() {

  for (
    let i = 0;
    i < 35;
    i++
  ) {

    const flower =
      document.createElement("div");

    flower.innerText =
      Math.random() > .5
        ? "✿"
        : "♡";

    flower.style.position =
      "fixed";

    flower.style.left =
      Math.random() * 100 + "%";

    flower.style.top =
      "60%";

    flower.style.zIndex =
      "100";

    flower.style.pointerEvents =
      "none";

    flower.style.color =
      "#ffe0e7";

    flower.style.fontSize =
      Math.random() * 15 + 10 + "px";

    document.body.appendChild(
      flower
    );

    const animation =
      flower.animate(

        [
          {
            transform:
              "translateY(0) scale(.3)",
            opacity: 0
          },

          {
            transform:
              `translateY(-${
                Math.random() * 300 + 150
              }px)
               translateX(${
                 Math.random() * 100 - 50
               }px)
               rotate(180deg)
               scale(1)`,
            opacity: 1
          },

          {
            transform:
              `translateY(-${
                Math.random() * 500 + 300
              }px)
               translateX(${
                 Math.random() * 200 - 100
               }px)
               rotate(360deg)
               scale(.5)`,
            opacity: 0
          }

        ],

        {
          duration:
            Math.random() * 1800 + 1800,

          easing:
            "cubic-bezier(.2,.8,.2,1)"
        }

      );

    animation.onfinish = () => {

      flower.remove();

    };

  }

}


/* ===============================
   SCROLL REVEAL
================================ */

function initializeReveal() {

  const revealElements =
    document.querySelectorAll(
      ".reveal"
    );

  const observer =
    new IntersectionObserver(

      (entries) => {

        entries.forEach(
          (entry) => {

            if (
              entry.isIntersecting
            ) {

              entry.target.classList.add(
                "show"
              );

              observer.unobserve(
                entry.target
              );

            }

          }
        );

      },

      {
        threshold: .12
      }

    );


  revealElements.forEach(
    (element) => {

      observer.observe(
        element
      );

    }
  );

}


/* ===============================
   ESCAPE KEY
================================ */

document.addEventListener(
  "keydown",
  (event) => {

    if (
      event.key === "Escape"
    ) {

      closeWishModal();

      messageModal.classList.remove(
        "active"
      );

      document.body.style.overflow =
        "";

    }

  }
);
