import { MapProvider } from "@/providers/map-provider";
import MapComponent from "@/components/map";

const List = () => {
  return (
    <MapProvider>
      <MapComponent />
    </MapProvider>
  )
}

export default List;
