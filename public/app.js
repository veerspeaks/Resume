document.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add the animation class if not already present
            if (!entry.target.classList.contains('zoom-out') && !entry.target.classList.contains('slide-in-left') && !entry.target.classList.contains('slide-in-right')) {
              if (entry.target.classList.contains('animate-zoom-out')) {
                entry.target.classList.add('zoom-out');
              } else if (entry.target.classList.contains('animate-slide-in-left')) {
                entry.target.classList.add('slide-in-left');
              } else if (entry.target.classList.contains('animate-slide-in-right')) {
                entry.target.classList.add('slide-in-right');
              }
            }
          }
        });
      },
      { threshold: 0.1 }
    );
  
    // Observe elements with initial animation classes
    document.querySelectorAll('.animate-zoom-out, .animate-slide-in-left, .animate-slide-in-right').forEach((el) => {
      observer.observe(el);
    });
  });

  // for the welcome page Hello text change 
  document.addEventListener('DOMContentLoaded', function () {
    const typingText = document.getElementById('typing-text');
    const texts = ['Hello!', 'Hola!', 'Bonjour!', 'Ciao!', 'Hallo!'];
    let index = 0;
    let isFirstErase = true; // Flag to track if it's the first erase

    function type() {
        const currentText = texts[index];
        typingText.textContent = '';
        let i = 0;

        function typingLoop() {
            if (i < currentText.length) {
                const newSpan = document.createElement('span');
                newSpan.textContent = currentText.charAt(i);
                newSpan.className = 'fade-in';
                typingText.appendChild(newSpan);
                i++;
                setTimeout(typingLoop, 100); // Adjust typing speed
            } else {
                const pauseDuration = isFirstErase ? 1000 : 3650;
                setTimeout(() => {
                    erase();
                }, pauseDuration); // Pause before erasing
            }
        }

        function erase() {
            const spans = typingText.querySelectorAll('span');
            let j = spans.length;
            function eraseLoop() {
                if (j > 0) {
                    typingText.removeChild(spans[j - 1]);
                    j--;
                    setTimeout(eraseLoop, 100); // Adjust erasing speed
                } else {
                    index = (index + 1) % texts.length;
                    isFirstErase = false; // Set the flag to false after the first erase
                    setTimeout(type, 500); // Pause before starting to type the next text
                }
            }
            eraseLoop();
        }

        typingLoop();
    }

    type();
});

//for navigation for the navbar about section

document.addEventListener("DOMContentLoaded", () =>{
const about = document.getElementById("about");
const aboutSection = document.getElementById("about-section");
about.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor behavior
    aboutSection.scrollIntoView({ behavior: 'smooth' });

})
})

//for navigation for the navbar skill section
document.addEventListener("DOMContentLoaded", () =>{
    const about = document.getElementById("skill");
    const aboutSection = document.getElementById("skill-section");
    about.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    
    })
    })

  //for project section navigation

    document.addEventListener("DOMContentLoaded", () =>{
      const about = document.getElementById("project");
      const aboutSection = document.getElementById("project-section");
      about.addEventListener('click', function (e) {
          e.preventDefault(); // Prevent default anchor behavior
          aboutSection.scrollIntoView({ behavior: 'smooth' });
      
      })
      })
//for navigation to contact page
      document.addEventListener("DOMContentLoaded", () =>{
        const about = document.getElementById("contact");
        const aboutSection = document.getElementById("contact-section");
        about.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor behavior
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        
        })
        })
    
    const cards = document.getElementsByClassName("card");

    for (let i = 0; i < cards.length; i++) {
      cards[i].addEventListener('mouseover', () => {
        cards[i].style.backgroundColor = '#001F3F';
        cards[i].style.color = 'white';
        cards[i].style.boxShadow = '5px 5px 15px rgba(0, 0, 0, 0.3)'; // Correct the boxShadow property
      });
    
      cards[i].addEventListener('mouseout', () => {
        cards[i].style.backgroundColor = ''; // Reset to default
        cards[i].style.color = ''; // Reset to default
        cards[i].style.boxShadow = ''; // Reset to default
      });
    }


    //homebuttom jump to about
    document.addEventListener("DOMContentLoaded", () =>{
      const hb = document.getElementById("homeButton");
      const aboutSection = document.getElementById("about-section");
      hb.addEventListener('click', function (e) {
          e.preventDefault(); // Prevent default anchor behavior
          aboutSection.scrollIntoView({ behavior: 'smooth' });
      
      })
      })

    // const effect = document.getElementsByClassName('card')
    // const html = document.getElementById('html')
    // for(let i = 0; i < effect.length ; i++){
    //   effect[i].addEventListener('mouseover',(e) =>{
    //     e.target.style.display = "flex";
    //       e.target.style.flexDirection ="column";
    //       html.style.width = "100";
    //       html.style.height = "100";
    //   })
    // }

    //   for(let i = 0; i < effect.length ; i++){
    //     effect[i].addEventListener('mouseout',(e) =>{
    //       e.target.style.display = "flex";
    //       e.target.style.flexDirection ="row";
    //       html.style.width = "";
    //       html.style.height = "";
    //     })
    // }
    
const button = document.getElementsByClassName('send');
button[0].addEventListener('mouseover',() =>{
  
  button[0].style.backgroundColor = "blue";
})
button[0].addEventListener('mouseout',() =>{
  
  button[0].style.backgroundColor = "#212eeb";
})

//to send me email on submission 

// code fragment
// the form id is myForm
const myForm = document.getElementById('myForm');

myForm.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent page reload
  console.log("event triggered!");

  var formData = new FormData(this);
  formData.append('service_id', 'service_es2o7wg');
  formData.append('template_id', 'template_sh20ia7');
  formData.append('user_id', 'fvUhiteRj-Qmtc0i5');
  

  fetch('https://api.emailjs.com/api/v1.0/email/send-form', {
      method: 'POST',
      body: formData,
      headers: {
          'Accept': 'application/json'
      }
  }).then(function(response) {
      if (response.ok) {
          alert('Your mail is sent!');
      } else {
          return response.json().then(function(error) {
              alert('Oops... ' + JSON.stringify(error));
          });
      }
  }).catch(function(error) {
      alert('Oops... ' + JSON.stringify(error));
  });
});

//to check the regex for the email
const mail = document.getElementById('email');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


button[0].addEventListener('click' ,() =>{
  if(!emailRegex.test(mail.value)){
    mail.value = ''
    mail.placeholder = "Please enter a valid email address"
    
    
  }

})
