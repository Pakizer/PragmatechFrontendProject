setInterval(createSnowFlake, 50);


function createSnowFlake() {
  const snowflake = document.createElement('i');
  
  snowflake.classList.add('fas');
  snowflake.classList.add('fa-snowflake');
  snowflake.style.left = Math.random() * window.innerWidth + 'px';
  snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
  
  snowflake.style.opacity = Math.random();
  
  snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
   document.body.appendChild(snowflake);
  
  
   setTimeout(() => {
     snowflake.remove();
   }, 5000)
 }
 
 