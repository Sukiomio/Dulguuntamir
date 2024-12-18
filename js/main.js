function initMap() {
  const loc = { lat: 47.9197867, lng: 106.9284899 };

  const map = new google.maps.Map(document.querySelector(".map"), {
    zoom: 14,
    center: loc,
  });

  const marker = new google.maps.Marker({ position: loc, map: map });
}
