const redPandaLocationData = [
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

const convertDegreesToRadians = (degrees) => {
  return degrees * Math.PI / 180
}

const PythagorasEquirectangular = (lat1, lon1, lat2, lon2) => {
  lat1 = convertDegreesToRadians(lat1)
  lat2 = convertDegreesToRadians(lat2)
  lon1 = convertDegreesToRadians(lon1)
  lon2 = convertDegreesToRadians(lon2)
  const R = 6371 // km
  const x = (lon2-lon1) * Math.cos((lat1+lat2)/2)
  const y = (lat2-lat1)
  const d = Math.sqrt(x*x + y*y) * R
  return d
}

const sortRedPandaLocationsByDistance = (latitude, longitude, locations) => {
  const distances = []
  for (index = 0; index < locations.length; ++index) {
    const dif = PythagorasEquirectangular(latitude, longitude, locations[index][1], locations[index][2])
    distances.push([locations[index], dif])
  }
  distances.sort((a, b) => {
    return a[1] - b[1]
  })
  return distances
}

const createPandaLocationsList = (pandaLocations) => {
  pandaLocations.forEach(
    (location) => {
      const pandaLocationsList = document.querySelector('.panda-locations-list')
      const pandaLocationListItem = document.createElement('li')
      const zooName = location[0][0]
      const distanceToZoo = Math.ceil(location[1])
      pandaLocationListItem.appendChild(document.createTextNode(`${zooName} (${distanceToZoo}km)`))
      pandaLocationsList.appendChild(pandaLocationListItem)
    }
  )
}

const success = (position) => {
  document.querySelector('.loading').style.display = 'none'
  const { latitude, longitude } = position.coords
  const fiveNearestRedPandaLocations = sortRedPandaLocationsByDistance(latitude, longitude, redPandaLocationData).slice(0, 5)
  createPandaLocationsList(fiveNearestRedPandaLocations)
}

const error = () => {
  console.error(err)
}

const options = {}

navigator.geolocation.getCurrentPosition(success, error, options)
