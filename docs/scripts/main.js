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
 {'lat': '53.27415428',
  'lng': '-3.699849602',
  'name': 'Welsh Mountain Zoo',
  'website': 'https://www.welshmountainzoo.org/'},
 {'lat': '52.44479919',
  'lng': '1.075228087',
  'name': 'Banham Zoo',
  'website': 'https://www.banhamzoo.co.uk/'},
 {'lat': '51.7437438',
  'lng': '-4.732819568',
  'name': 'Folly Farm, Pembrokeshire',
  'website': 'https://www.folly-farm.co.uk/'},
 {'lat': '55.94272648',
  'lng': '-3.267564685',
  'name': 'Edinburgh Zoo',
  'website': 'https://www.edinburghzoo.org.uk/'},
 {'lat': '57.10973138',
  'lng': '-3.965497267',
  'name': 'Highland Wildlife Park',
  'website': 'https://www.highlandwildlifepark.org.uk/'},
 {'lat': '53.22683731',
  'lng': '-2.883382348',
  'name': 'Chester Zoo',
  'website': 'https://www.chesterzoo.org/our-zoo/animals/red-panda/'},
 {'lat': '54.658159',
  'lng': '-5.942979938',
  'name': 'Belfast Zoo',
  'website': 'http://www.belfastzoo.co.uk/'},
 {'lat': '51.86262047',
  'lng': '0.8339362763',
  'name': 'Colchester Zoo',
  'website': 'https://www.colchester-zoo.com/'},
 {'lat': '51.77387345',
  'lng': '-1.653257479',
  'name': 'Cotswold Wildlife Park',
  'website': 'https://www.cotswoldwildlifepark.co.uk/'},
 {'lat': '53.50441743',
  'lng': '-1.039960373',
  'name': 'Yorkshire Wildlife Park',
  'website': 'https://www.yorkshirewildlifepark.com/'},
 {'lat': '50.41126832',
  'lng': '-5.069944231',
  'name': 'Newquay Zoo',
  'website': 'https://www.newquayzoo.org.uk/'},
 {'lat': '52.61240251',
  'lng': '-1.714459875',
  'name': 'Drayton Manor',
  'website': 'https://www.draytonmanor.co.uk/zoo/'},
 {'lat': '50.82347303',
  'lng': '0.1642421616',
  'name': 'Drusillas',
  'website': 'https://www.drusillas.co.uk/zoo/animals/red-panda'},
 {'lat': '52.01122717',
  'lng': '0.5825231774',
  'name': 'Woburn Safari Park',
  'website': 'https://www.woburnsafari.co.uk/'},
 {'lat': '52.51328909',
  'lng': '-2.077673859',
  'name': 'Dudley Zoo',
  'website': 'https://www.dudleyzoo.org.uk/animal/panda-red/'},
 {'lat': '51.280386',
  'lng': '1.227871',
  'name': 'Wingham Wildlife Park',
  'website': 'https://winghamwildlifepark.co.uk/'},
 {'lat': '54.206171',
  'lng': '-0.810176',
  'name': 'Flamingo Land',
  'website': 'https://www.flamingoland.co.uk/zoo/animals/mammals/red-panda/'},
 {'lat': '51.269885',
  'lng': '1.156616898',
  'name': 'Howletts Wild Animal Park',
  'website': 'https://www.aspinallfoundation.org/port-lympne/wildlife-park/animals/red-panda/?_ga=2.169794788.455045825.1613657571-338416550.1613657571'},
 {'lat': '51.8505239',
  'lng': '-0.5443716063',
  'name': 'Whipsnade Zoo',
  'website': 'https://www.zsl.org/zsl-whipsnade-zoo/exhibits/red-panda'},
 {'lat': '51.18872062',
  'lng': '-2.263062251',
  'name': 'Longleat',
  'website': 'https://www.longleat.co.uk/'},
 {'lat': '50.99109199',
  'lng': '-1.283356788',
  'name': 'Marwell Zoo',
  'website': 'https://www.marwell.org.uk/zoo/explore/animals/10/red-panda'},
 {'lat': '51.07846075',
  'lng': '1.00073147',
  'name': 'Port Lympne',
  'website': 'https://www.aspinallfoundation.org/port-lympne/?_ga=2.41524001.20117271.1613658396-976390789.1613658396'},
 {'lat': '51.74410104',
  'lng': '-0.0622571039',
  'name': 'Paradise Wildlife Park',
  'website': 'https://www.pwpark.com/map/'},
 {'lat': '50.17984057',
  'lng': '-5.425152269',
  'name': 'Paradise Park',
  'website': 'https://paradisepark.org.uk/'},
 {'lat': '50.42793735',
  'lng': '-3.582619569',
  'name': 'Paignton Zoo',
  'website': 'https://www.paigntonzoo.org.uk/'}]


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
