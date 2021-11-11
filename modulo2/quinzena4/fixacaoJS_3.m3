```function calculaNota(ex, p1, p2) {
  let notaP1 = p1 * 2 
  let notaP2 = p2 * 3
  let notaEx = ex * 1 
 
  
  let mediaDasProvas = (notaEx + notaP1 + notaP2) / 6
  
    if(mediaDasProvas >= 9){
      return "A"
    }else if(mediaDasProvas < 9 && mediaDasProvas >= 7.5){
      return "B"
    }else if(mediaDasProvas < 7.5 && mediaDasProvas >= 6){
      return "C"
    }else {return "D"}```
