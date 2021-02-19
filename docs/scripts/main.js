import {hello, redPandaLocationData} from './locations.mjs';
hello()
const convertDegreesToRadians = (degrees) => {
  return degrees * Math.PI / 180
}

const calculatePythagorasEquirectangular = (lat1, lon1, lat2, lon2) => {
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
    const dif = calculatePythagorasEquirectangular(latitude, longitude, locations[index][1], locations[index][2])
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
