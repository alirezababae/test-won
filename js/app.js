// require('../sw')
self.addEventListener('load' , e => {
console.log('load is app');


})

if('serviceWorker' in navigator){
  navigator.serviceWorker.register('/sw.js')
    .then(reg => console.log('service worker registered'))
    .catch(err => console.log('service worker not registered', err));
}


// if('serviceWorker' in navigator && 'PushManager' in window){

//   Notification.requestPermission().then(results => {
//     console.log(results);
    
//   })
// }

if('serviceWorker' in navigator && 'PushManager' in window){

  Notification.requestPermission()
  .then(result => {
console.log(result);

  })
  

  function displayNotification() {
    if (Notification.permission == 'granted') {
      navigator.serviceWorker.getRegistration().then(function(reg) {
        var options = {
          body: 'Here is a notification body!',
          icon: 'https://cdn.vox-cdn.com/thumbor/rgnZj-wJtFBWeGIq4beR04GU-8M=/1400x788/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/19700731/googlemaps.png',
          vibrate: [100, 50, 100],
          data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
          },
          actions: [
            {action: 'explore', title: 'Explore this new world'},
            {action: 'close', title: 'Close notification'},
          ]
        };
        reg.showNotification('Hello world!', options);
      });
    }
  }

  displayNotification()
  

}





if ('serviceWorker' in navigator) {

  console.log('supports');
  
navigator.serviceWorker.register('/sw.js').then(response => {

  console.log('yes files ' ,  response);
  
}).catch(err => {

  console.log('error files');
  
})




}else{

console.log('no servise worker');


}



fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(res => {

    res.forEach(element => {
      console.log(element);
      InsertData(element)
    });

  })



  function InsertData(params) {
    

let cards = `

<div class="card-panel recipe white row">
<img src="./img/dish.png" alt="recipe thumb">
<div class="recipe-details">
  <div class="recipe-title">${params.title}</div>
  <div class="recipe-ingredients">${params.body}</div>
</div>
<div class="recipe-delete">
  <i class="material-icons">delete_outline</i>
</div>
</div>

`;


let cardsMains = document.getElementById("cards-main");
cardsMains.innerHTML += cards

  }






  const onGetDevices = function(ports) {
    for (var i=0; i<ports.length; i++) {

      console.log(ports[i].path);
        }
  }
  chrome.serial.getDevices(onGetDevices);
chrome.serial.connect()



