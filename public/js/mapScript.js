

    var map = L.map('map').setView([latitude, longitude], 9); // Set your latitude and longitude
  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  
    L.marker([latitude, longitude]).addTo(map); // Add a marker



   
   
