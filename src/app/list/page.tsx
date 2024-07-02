import { MapProvider } from "@/providers/map-provider";
import MapComponent from "@/components/map";

const List = () => {
  return (
    <MapProvider>
      <MapComponent />

      <div className="md:flex p-6" id="address"></div>
    </MapProvider>
  )
}

export default List;
