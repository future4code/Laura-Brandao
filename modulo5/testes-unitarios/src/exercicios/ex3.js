export function checaItensDuplicados(array) {
  const numerosDuplicados = array.filter((item, index) => array.indexOf(item) !== index)  
  return numerosDuplicados.length ? true : false
}
