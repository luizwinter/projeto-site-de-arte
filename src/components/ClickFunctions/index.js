  function homePage(){

    document.getElementById("homearticle1").style.display ='block';
    document.getElementById("homearticle2").style.display ='block';
    document.getElementById("artistpage").style.display = 'none';

  
  };


function artistaPage(){

  document.getElementById("homearticle1").style.display ='none';
  document.getElementById("homearticle2").style.display ='none';
  document.getElementById("artistpage").style.display = 'block';

  };

  export {homePage, artistaPage};