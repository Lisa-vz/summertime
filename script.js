var yesBtn = document.getElementById("yes");
var noBtn = document.getElementById("no");

yesBtn.addEventListener("click", function yesBtn() {
   alert("Hell Yeah!! Lets Gooooo");
   window.open('https://wa.me/27610911367', '_self');
});

const confirmAction = () => {
                const response = confirm("I ASKED DO YOU WANT TO GO TO THE BEACH?? PRESS OK TO GO!!!!     IF YOU PRESS CANCEL THEN F YOU");

                if (response) {
                    alert("Yayyy you picked the correct answer. Lets Go");
                    window.open('https://wa.me/27610911367', '_self');

                   } else {
                    alert("What Whyyyyyyyyyy")
                }
            }



