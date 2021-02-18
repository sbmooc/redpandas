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

function NearestLocation(latitude, longitude, locations) {
  var mindif=99999;
  var closest;

  for (index = 0; index < locations.length; ++index) {
    var dif =  PythagorasEquirectangular(latitude, longitude, locations[ index ][ 1 ], locations[ index ][ 2 ]);
    if ( dif < mindif ) {
      closest=index;
      mindif = dif;
    }
  }

  // return the nearest location
  var closestLocation = (locations[ closest ]);
  return closestLocation;
}


const redPandaData = [
  [
    'stephens house', 123, 12321
  ]
  // {
  //   "lat": 123,
  //   "lng": 12321,
  //   "name": "stephens house",
  //   "n_pandas": 1
  // }
]

const success = (position) => {
  const latitude  = position.coords.latitude;
  const longitude = position.coords.longitude;
  findNearestRedPanda({ latitude, longitude })
}
const error = () => {
  console.log(err)
  debugger
}
const options = {}

navigator.geolocation.getCurrentPosition(success, error, options)

function findNearestRedPanda({ latitude, longitude }) {

}

function calculateDistance() {
  
}

const latitude = 55.8642
const longitude = 4.2518

const nearestRedPanda = NearestLocation(latitude, longitude, redPandaData);