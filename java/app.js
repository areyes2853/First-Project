const handBurger = document.querySelector('.mobile-menu');
handBurger.addEventListener("click",()=>{
    document.querySelector('.menu').classList.toggle('show')
})

// Select all "like" buttons
const likeButtons = document.querySelectorAll('.like-btn');

// Select all "dislike" buttons
const dislikeButtons = document.querySelectorAll('.dislike-btn');