// const handBurger = document.querySelector('.mobile-menu');
// handBurger.addEventListener("click",()=>{
//     document.querySelector('.menu').classList.toggle('show')
// })

// Select all "like" buttons
// const likeButtons = document.querySelector('.like-btn');

// Select all "dislike" buttons
const dislikeButtons = document.querySelectorAll('.dislike-btn');
const likeButtons = document.querySelectorAll('.like-btn');
const addButtons = document.querySelectorAll(".add-btn")
const paragraphComment = document.querySelector(".recent-posts p")
const inputElement = document.querySelector('input')
// console.log(inputElement)

document.addEventListener('DOMContentLoaded', () => {

    
    // Loop over every blog item
    const blogItems = document.querySelectorAll('.blog-item');
    blogItems.forEach((item) => {
      // Select the comment button and comment input within this blog item
      const commentBtn = item.querySelector('.comment-btn');
      const commentInput = item.querySelector('.comment');
      
      // Only attach listener if both exist
      if (commentBtn && commentInput) {
        commentBtn.addEventListener('click', () => {
          commentInput.classList.toggle('show');
        });
      }
    });
  });

 

addButtons.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        const commentElement = document.createElement('p');
        commentElement.innerHTML = inputElement.value;
        paragraphComment.appendChild(commentElement)
       
    })
})

  

console.log(likeButtons);
likeButtons.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        console.log('here Iam i')
        
    })
})
  