function klik(){
	  var card = document.querySelector('.flashcard');
      card.addEventListener('click',function(){
      card.classList.toggle('card-flipped');
  });
}

