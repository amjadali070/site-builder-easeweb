import { GoogleMap, InfoWindow, Marker, useJsApiLoader } from '@react-google-maps/api'
import { useRef } from 'react'

export type MapOptions = google.maps.MapOptions
export type LatLngLiteral = google.maps.LatLngLiteral

const options: MapOptions = {
  disableDefaultUI: true,
  clickableIcons: false,
  minZoom: 10,
}

interface MapProps {
  position: LatLngLiteral
  address: string
}

export default function Map({ position, address }: MapProps) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyDH1ZvlXU5u62_D7GBI6wVKTTQFa1cgNyc',
    libraries: ['places'],
  })

  const mapRef = useRef<GoogleMap>(null)

  if (!isLoaded) {
    return null
  }

  return (
    <GoogleMap
      ref={mapRef}
      mapContainerStyle={{ width: '100%', height: '100%' }}
      {...{ options }}
      center={position}
      zoom={15}
    >
      <Marker position={position} title={address} />
      <InfoWindow position={position}>
        <h1>{address}</h1>
      </InfoWindow>
    </GoogleMap>
  )
}
