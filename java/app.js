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
      const addBtn = item.querySelector('.add-btn');
      
      // Only attach listener if both exist
      if (commentBtn && commentInput) {
        commentBtn.addEventListener('click', () => {
          commentInput.classList.toggle('show');
          addBtn.classList.toggle('hidden')
        });
      }
    });
  });

 






document.addEventListener('DOMContentLoaded', () => {
  const blogItems = document.querySelectorAll('.blog-item');

  // Selecting elements from the Recent Post section
  const recentPostThumbnail = document.querySelector('.recent-posts .thumb img'); // The image in Recent Posts
  const recentPostTitle = document.querySelector('.recent-posts .content h4'); // The h4 in Recent Posts
  const recentPostComment = document.querySelector('.recent-posts .content p'); // The paragraph for recent comments
  
  blogItems.forEach((item) => {
      const addBtn = item.querySelector('.add-btn'); // "Add Comment" button inside the blog post
      const inputElement = item.querySelector('.comment'); // Comment input field inside the blog post
      const thumbnail = item.querySelector('.thumbnail img'); // Blog post thumbnail image
      const strongText = item.querySelector('p strong'); // The text inside the <strong> tag of the blog post

      if (addBtn && inputElement && thumbnail && strongText) {
          addBtn.addEventListener('click', () => {
              const commentText = inputElement.value.trim();

              if (commentText) {
                  // Update Recent Post Comment section
                  recentPostComment.innerHTML = commentText;

                  // Update Recent Post Thumbnail
                  if (recentPostThumbnail) {
                      recentPostThumbnail.src = thumbnail.src;
                  }

                  // Update Recent Post Title with <strong> text from the blog post
                  if (recentPostTitle) {
                      recentPostTitle.innerHTML = strongText.innerHTML;
                  }

                  // Clear the input field after adding the comment
                  inputElement.value = '';
              }
          });
      }
  });
});


  

console.log(likeButtons);
likeButtons.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        console.log('here Iam i')
        
    })
})
  