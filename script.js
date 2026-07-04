const questions = document.querySelectorAll(".faq-question");

questions.forEach((question) => {

    question.addEventListener("click", () => {

        const answer = question.nextElementSibling;

        if(answer.style.maxHeight){

            answer.style.maxHeight = null;
            question.querySelector("span").textContent = "+";

        }else{

            answer.style.maxHeight = answer.scrollHeight + "px";
            question.querySelector("span").textContent = "−";

        }

    });

});

const menu = document.getElementById("menu-toggle");
const nav = document.querySelector(".nav-links");

menu.onclick = () => {
    nav.classList.toggle("active");
};
