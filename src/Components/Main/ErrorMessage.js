
export const ErrorMessage = () => {
  const paginationRef = document.querySelector('#pagination');
 if(paginationRef){
   paginationRef.style.display = 'none'
 }
  const eventListRef = document.querySelector('.event-list')
  if (!eventListRef){
    return;
  }
  eventListRef.innerHTML = ''
  const textAlert = `<p class="errorMessage">Sorry but you have entered wrong request. :( Please, fill the correct request or you will die! HA-HA-HA:)</p>`
  eventListRef.insertAdjacentHTML('beforeend', textAlert)
  return
}