import React from 'react'


export default function Cards({ ride, distance }) {
    
    var paths = ride.station_path.toString()

  return (
      <div className='pb-5'>
          <div className='h-80 bg-gray-900 rounded-xl p-10 flex justify-between'>
              <div className='flex space-x-10'>
                  <img src="/image.jpg" className='rounded-lg' />
                  <div className='flex flex-col justify-around'>
                      <h2>Ride id: {ride.id}</h2>
                      <h2>Origin station: {ride.origin_station_code}</h2>
                      <h2>Station_path: [{paths}]</h2>
                      <h2>Date: {ride.date}</h2>
                      <h2>Distance: {distance}</h2>
                  </div>
              </div>
              <div className='flex space-x-8'>
                  <p className='px-4 bg-black h-7 rounded-full'>{ride.state}</p>
                  <p className='px-4 bg-black h-7 rounded-full'>{ride.city}</p>
              </div>
          </div>
    </div>
  )
}
