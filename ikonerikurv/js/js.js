sum = 0 

test.addEventListener('click',
  function(){
    bestillinger.innerHTML += test.innerHTML + "<br>"
    //bestillinger.innerHTML +=  parseInt( sessionStorage.getItem("make")) + parseInt( sessionStorage.getItem("make"))
    sum = sum + 70
    ialt.innerHTML = sum;
  })

  prove.addEventListener('click',
  function(){
    bestillinger.innerHTML += prove.innerHTML + "<br>"
    sum = sum + 80
    ialt.innerHTML = sum;
  })


  provekylling.addEventListener('click',
  function(){
   bestillinger.innerHTML += provekylling.innerHTML + "<br>"
   sum = sum + 100
   ialt.innerHTML = sum;
  })

  betal.addEventListener('click', function(){
      localStorage.setItem("liste", bestillinger.innerHTML)
    
  })

  //let gem = sessionStorage.setItem("make", 23)


  //local storage gemmer sig selv i browseren. De kan få information fra andre dokumenter ved at bruge localStorage.getItem("navn")
  //localStorage.setItem("navn", "Sif")


  //provekylling.addEventListener('click',
  //function(){
    //bestillinger.innerHTML += "<p>kyllingelår</p>"
  //})