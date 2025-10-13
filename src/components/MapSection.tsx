import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "@/leaflet-fix.css";
import L from "leaflet";

// Fix for marker icon issues
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
	iconUrl: icon,
	shadowUrl: iconShadow,
	iconSize: [25, 41],
	iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

const GOOGLE_MAPS_URL = "https://maps.google.com/maps?q=51.108056,17.063917&z=16";

export default function MapSection() {
	return (
		<div className="mt-12">
			<div className="w-full h-96 bg-gray-700 rounded-lg overflow-hidden">
				<MapContainer center={[51.108056, 17.063917]} zoom={18} doubleClickZoom={false} dragging={false} scrollWheelZoom={false} style={{ width: "100%", height: "100%" }}>
					<TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
					<Marker position={[51.108056, 17.063917]}>
						<Popup>
							<div>
								<p>
									Wydział Chemiczny, 2.24 A3
									<br />
									Politechnika Wrocławska
								</p>
								<a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-2 inline-block">
									Otwórz w Google Maps
								</a>
							</div>
						</Popup>
					</Marker>
				</MapContainer>
			</div>
		</div>
	);
}
