setInterval(createRainDrop, 50);


function createRainDrop() {
  const raindrop = document.createElement('i');
  
  raindrop.classList.add('fas');
  raindrop.classList.add('fa-tint');
  raindrop.style.left = Math.random() * window.innerWidth + 'px';
  raindrop.style.animationDuration = Math.random() * 3 + 2 + 's';
  
  raindrop.style.opacity = Math.random();
  
  raindrop.style.fontSize = Math.random() * 10 + 10 + 'px';
   document.body.appendChild(raindrop);
  
  
   setTimeout(() => {
     raindrop.remove();
   }, 5000)
 }
 
 