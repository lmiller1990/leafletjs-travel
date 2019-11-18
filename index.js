const token = 'pk.eyJ1IjoiYjF1ZW00b200byIsImEiOiJjazMyeXo5aTgwcDduM2hwYTViOGc1eXpnIn0.vn-7blnnys3Xp0DrOpLWvg'

const tasmania = {
  lat: -42,
  lon: 146.5
}

const destinations = [
  // launceston
  {
    name: 'launceston',
    coords: {
      lat: -41.4332,
      lon: 147.1441,
    }
  },
  // wineglass bay
  {
    name: 'wineglass bay',
    coords: {
      lat: -42.1,
      lon:  148.31,
    }
  },
  // hobart
  {
    name: 'hobart',
    coords: {
      lat: -42.8821,
      lon:  147.3272,
    }
  },
]

document.addEventListener('DOMContentLoaded', () => {
  const mymap = L.map('mapid').setView(tasmania, 7)

  L.tileLayer(`https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=${token}`, {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 14,
    id: 'mapbox.streets',
    accessToken: token
  }).addTo(mymap);


  var m = new L.marker([39.5, -77.3], { opacity: 0.01 }); //opacity may be set to zero
  m.bindTooltip("My Label", {permanent: true, className: "my-label", offset: [0, 0] });

  var greenIcon = L.icon({
    iconUrl: 'marker.png',
    iconSize:     [38, 38], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [19, 40], // point of the icon which will correspond to marker's location
  });

  for (const d of destinations) {
    const marker = L.marker(d.coords).addTo(mymap)
    marker.setIcon(greenIcon)

    marker.bindTooltip(`${d.name}`, {
      opacity: 1
    }).openTooltip();
  }
})
