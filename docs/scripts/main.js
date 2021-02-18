// Convert Degress to Radians
function Deg2Rad( deg ) {
  return deg * Math.PI / 180;
}

function PythagorasEquirectangular( lat1, lon1, lat2, lon2 ) {
  lat1 = Deg2Rad(lat1);
  lat2 = Deg2Rad(lat2);
  lon1 = Deg2Rad(lon1);
  lon2 = Deg2Rad(lon2);
  var R = 6371; // km
  var x = (lon2-lon1) * Math.cos((lat1+lat2)/2);
  var y = (lat2-lat1);
  var d = Math.sqrt(x*x + y*y) * R;
  return d;
}

function NearestLocations(latitude, longitude, locations) {
  var mindif=99999;
  var distances = [];
  for (index = 0; index < locations.length; ++index) {
    var dif =  PythagorasEquirectangular(latitude, longitude, locations[ index ][ 1 ], locations[ index ][ 2 ]);
    distances.push([locations[index], dif])
  }
  // return the nearest location
  distances.sort(function(a, b) {
    return a[1] - b[1]
  })
  return distances;
}

const redPandaData = [
 ['Welsh Mountain Zoo', 53.27415428, -3.699849602],
 ['Banham Zoo', 52.44479919, 1.075228087],
 ['Folly Farm, Pembrokeshire', 51.7437438, -4.732819568],
 ['Edinburgh Zoo', 55.94272648, -3.267564685],
 ['Highland Wildlife Park', 57.10973138, -3.965497267],
 ['Chester Zoo', 53.22683731, -2.883382348],
 ['Belfast Zoo', 54.658159, -5.942979938],
 ['Colchester Zoo', 51.86262047, 0.8339362763],
 ['Cotswold Wildlife Park', 51.77387345, -1.653257479],
 ['Yorkshire Wildlife Park', 53.50441743, -1.039960373],
 ['Newquay Zoo', 50.41126832, -5.069944231],
 ['Drayton Manor', 52.61240251, -1.714459875],
 ['Drusillas', 50.82347303, 0.1642421616],
 ['Woburn Safari Park', 52.01122717, 0.5825231774],
 ['Dudley Zoo', 52.51328909, -2.077673859],
 ['Wingham Wildlife Park', 51.280386, 1.227871],
 ['Flamingo Land', 54.206171, -0.810176],
 ['Howletts Wild Animal Park', 51.269885, 1.156616898],
 ['Whipsnade Zoo', 51.8505239, -0.5443716063],
 ['Longleat', 51.18872062, -2.263062251],
 ['Marwell Zoo', 50.99109199, -1.283356788],
 ['Port Lympne', 51.07846075, 1.00073147],
 ['Paradise Wildlife Park', 51.74410104, -0.0622571039],
 ['Paradise Park', 50.17984057, -5.425152269],
 ['Paignton Zoo', 50.42793735, -3.582619569]
]

let latitude = 55.8642
let longitude = 4.2518

const success = (position) => {
  latitude  = position.coords.latitude;
  longitude = position.coords.longitude;
  pandas = findNearestRedPanda({ latitude, longitude })
  createListOfPandas(pandas)
}
const error = () => {
  console.log(err)
}
const options = {}

navigator.geolocation.getCurrentPosition(success, error, options)

const distances = [{

}]

function findNearestRedPanda({ latitude, longitude }) {
  const nearestRedPandas = NearestLocations(latitude, longitude, redPandaData).slice(0, 5)
}


const createListOfPandas = (pandas) => {
  pandas.forEach(
    () => {
      const listOfPandas = document.querySelector('.list-of-pandas')
      const pandaListItem = document.createElement('li')
      pandaListItem.appendChild(document.createTextNode(pandas[0]))
      listOfPandas.appendChild(pandaListItem)
    }
  )
}