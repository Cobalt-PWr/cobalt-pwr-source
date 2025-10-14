import { useState, useEffect } from "react";
import { MapPin, Beaker, Zap, GraduationCap, Mail, ChevronDown, Send, BatteryPlus } from "lucide-react";
import placeholderImage from "@/assets/placeholder.svg";
import logoImage from "@/assets/logo.png";
import { cn } from "./lib/utils";
import { Suspense, lazy } from "react";

const MapSection = lazy(() => import("./components/MapSection"));

const GOOGLE_MAPS_URL = "https://maps.google.com/maps?q=51.108056,17.063917&z=16";
const USOS_CLUB_SUPERVISOR_URL = "https://web.usos.pwr.edu.pl/kontroler.php?_action=katalog2/osoby/pokazOsobe&os_id=72006";

const CleanerText = ({ className, text }: { className?: string; text: string }) => {
	return (
		<span className={cn("text-pretty", className)}>
			{text
				.split(" ")
				.map((word) => {
					if (word.length < 3) {
						return word + "\u00A0"; // non-breaking space
					}

					return word + " ";
				})
				.join("")}
		</span>
	);
};

export default function App() {
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => setScrollY(window.scrollY);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navItems = [
		{ name: "Projekty", id: "projects" },
		{ name: "Cele", id: "goals" },
		{ name: "Zarząd", id: "minutka" },
		{ name: "Lokalizacja", id: "location" },
		{ name: "Założyciele", id: "founders" },
		{ name: "Kontakt", id: "contact" },
	];

	return (
		<div className="min-h-screen bg-gray-900 text-gray-100">
			{/* Header */}
			<header className="fixed w-full z-1001 bg-opacity-90 bg-gray-900 backdrop-blur-md transition-all duration-300" style={{ padding: `${Math.max(16, 32 - scrollY / 5)}px 0` }}>
				<div className="container mx-auto px-4 flex justify-between items-center">
					<div className="flex items-center space-x-4">
						<img
							src="/favicon-96x96.png"
							alt="Cobalt Logo"
							className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-1"
							loading="lazy"
							onError={(e) => {
								e.currentTarget.src = placeholderImage;
							}}
						/>
						<div>
							<h1 className="text-xl font-bold">Koło Naukowe Cobalt</h1>
							<p className="text-sm text-blue-300">Politechnika Wrocławska</p>
						</div>
					</div>
					<nav className="hidden md:flex space-x-6">
						{navItems.map((item) => (
							<a
								key={item.id}
								href={`#${item.id}`}
								className={`text-sm font-medium transition-colors hover:text-blue-300`}
								onClick={(e) => {
									e.preventDefault();
									document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
								}}
							>
								{item.name}
							</a>
						))}
					</nav>
				</div>
			</header>

			{/* Hero Section */}
			<section className="pt-48 pb-20 px-4 bg-gradient-to-b from-[#0047ab] to-gray-900 flex flex-col items-center justify-center h-screen md:h-full">
				<div className="container mx-auto text-center">
					<h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">Odkrywamy Przyszłość Chemii</h2>
					<p className="text-xl md:text-2xl mb-12 animate-fade-in-up animation-delay-200">
						<CleanerText text={"Łączymy naukę z innowacją w Politechnice Wrocławskiej"} />
					</p>
					<span
						className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white animate-bounce cursor-pointer"
						onClick={(e) => {
							e.preventDefault();
							document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
						}}
					>
						<ChevronDown className="w-6 h-6" />
					</span>
				</div>
			</section>

			{/* Projects Section */}
			<section id="projects" className="py-20 px-4 bg-gray-900">
				<div className="container mx-auto">
					<h2 className="text-3xl font-bold text-center text-blue-300 mb-12">Aktualne Projekty</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{[
							{
								title: "Elektroosadzanie miedzi",
								coordinator: "Klim Averkin",
								icon: Zap,
								description:
									"Projekt skupia się na badaniu procesu elektroosadzania miedzi na różnych podłożach. Celem jest optymalizacja parametrów procesu oraz analiza właściwości otrzymanych powłok miedzianych, które mogą znaleźć zastosowanie w elektronice i ochronie przed korozją.",
							},
							{
								title: "Czarna masa",
								coordinator: "Barbara Kasprzak",
								icon: BatteryPlus,
								description:
									"Projekt dotyczy odzysku i analizy tzw. czarnej masy, będącej pozostałością po recyklingu zużytych baterii alkalicznych cynkowo-manganowych. Celem jest opracowanie efektywnych metod odzysku i oczyszczania składników czarnej masy, co pozwoli na ich ponowne wykorzystanie w produkcji nowych ogniw oraz ograniczenie negatywnego wpływu na środowisko.",
							},
						].map((project, index) => (
							<div key={index} className="bg-gray-800 rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105 hover:bg-blue-900">
								{project.icon && <project.icon className="w-12 h-12 text-blue-300 mb-4" />}
								<p className="text-xl font-semibold mb-2">{project.title}</p>
								<p className="text-xl font-semibold mb-2">Koordynator: {project.coordinator}</p>
								<p className="text-gray-300 text-pretty">
									<CleanerText text={project.description} />
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Goals Section */}
			<section id="goals" className="py-20 px-4 bg-gray-800">
				<div className="container mx-auto">
					<h2 className="text-3xl font-bold text-center text-blue-300 mb-12">Cel Działalności Koła</h2>
					<div className="space-y-8">
						{[
							{ icon: Beaker, text: "Integracja Chemii i Elektroniki" },
							{ icon: Zap, text: "Projektowanie Nowoczesnych Systemów Magazynowania Energii" },
							{ icon: GraduationCap, text: "Edukacja i Szkolenia" },
						].map(({ icon: Icon, text }) => (
							<div key={text} className="flex items-center space-x-4 bg-gray-700 p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105 hover:bg-blue-900">
								<Icon className="w-12 h-12 text-blue-300 flex-shrink-0" />
								<CleanerText className="text-lg text-pretty" text={text} />
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Management Section */}
			<section id="minutka" className="py-20 px-4 bg-gray-900">
				<div className="container mx-auto space-y-4">
					<h2 className="text-3xl font-bold text-center mb-12 text-blue-300">Zarząd</h2>
					<div>
						<a className="group cursor-pointer" href={USOS_CLUB_SUPERVISOR_URL} target="_blank" rel="noopener noreferrer">
							<div className="bg-gray-800 rounded-lg shadow-lg p-6 text-center transform transition duration-500 group-hover:scale-105 group-hover:bg-blue-900">
								<div className="w-24 h-24 bg-[#0047ab] rounded-full mx-auto mb-4 flex items-center justify-center border-4 border-blue-300 transition-all duration-300 group-hover:border-white">
									<span className="text-white text-2xl font-bold">ICH</span>
								</div>
								<p className="text-xl font-semibold text-blue-300 group-hover:text-white">dr. inż. Ida Chojnacka</p>
								<p className="text-xl font-semibold text-blue-300 group-hover:text-white">Opiekun koła</p>
								<span className="underline text-blue-300">Przejdź do USOS</span>
							</div>
						</a>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{[
							{ name: "Klim Averkin", role: "Prezes" },
							{ name: "Karolina Pijacka", role: "Wiceprezes" },
							{ name: "Maksymilian Maćkiewicz", role: "Lider ds. finansów" },
							{ name: "Grażyna Witek", role: "Sekretarz" },
						].map((member) => (
							<div key={`${member.name}-${member.role}`} className="group">
								<div className="bg-gray-800 rounded-lg shadow-lg p-6 text-center transform transition duration-500 group-hover:scale-105 group-hover:bg-blue-900">
									<div className="w-24 h-24 bg-[#0047ab] rounded-full mx-auto mb-4 flex items-center justify-center border-4 border-blue-300 transition-all duration-300 group-hover:border-white">
										<span className="text-white text-2xl font-bold">
											{member.name
												.split(" ")
												.map((i) => i[0])
												.join("")}
										</span>
									</div>
									<p className="text-xl font-semibold text-blue-300 group-hover:text-white">{member.name}</p>
									<p className="text-xl font-semibold text-blue-300 group-hover:text-white">{member.role}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Location Section */}
			<section id="location" className="py-20 px-4 bg-gray-800">
				<div className="container mx-auto text-center">
					<h2 className="text-3xl font-bold mb-12 text-blue-300">Miejsce Działania Koła</h2>
					<a
						href={GOOGLE_MAPS_URL}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center justify-center text-xl bg-gray-700 px-8 py-4 rounded-full shadow-lg hover:bg-blue-900 transition duration-300 cursor-pointer"
					>
						<MapPin className="w-8 h-8 mr-4 text-blue-300" />
						<CleanerText text={"Wydział Chemiczny, 2.24 A3"} />
					</a>
					<Suspense fallback={<div className="mt-12 w-full h-96 flex items-center justify-center bg-gray-700 rounded-lg">Ładowanie mapy...</div>}>
						<MapSection />
					</Suspense>
				</div>
			</section>

			{/* Founders Section */}
			<section id="founders" className="py-20 px-4 bg-gray-900">
				<div className="container mx-auto space-y-4">
					<h2 className="text-3xl font-bold text-center mb-12 text-blue-300">Założyciele</h2>
					<div>
						<a className="group cursor-pointer" href={USOS_CLUB_SUPERVISOR_URL} target="_blank" rel="noopener noreferrer">
							<div className="bg-gray-800 rounded-lg shadow-lg p-6 text-center transform transition duration-500 group-hover:scale-105 group-hover:bg-blue-900">
								<div className="w-24 h-24 bg-[#0047ab] rounded-full mx-auto mb-4 flex items-center justify-center border-4 border-blue-300 transition-all duration-300 group-hover:border-white">
									<span className="text-white text-2xl font-bold">ICH</span>
								</div>
								<h3 className="text-xl font-semibold text-blue-300 group-hover:text-white">dr. inż. Ida Chojnacka</h3>
								<span className="underline text-blue-300">Przejdź do USOS</span>
							</div>
						</a>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{["Marcin Grzeszczak", "Karolina Pijacka", "Maksymilian Maćkiewicz", "Grażyna Witek"].map((founder) => (
							<div key={founder} className="group">
								<div className="bg-gray-800 rounded-lg shadow-lg p-6 text-center transform transition duration-500 group-hover:scale-105 group-hover:bg-blue-900">
									<div className="w-24 h-24 bg-[#0047ab] rounded-full mx-auto mb-4 flex items-center justify-center border-4 border-blue-300 transition-all duration-300 group-hover:border-white">
										<span className="text-white text-2xl font-bold">
											{founder
												.split(" ")
												.map((i) => i[0])
												.join("")}
										</span>
									</div>
									<h3 className="text-xl font-semibold text-blue-300 group-hover:text-white">{founder}</h3>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Contact Form Section */}
			<section id="contact" className="py-20 px-4 bg-gray-800">
				<div className="container mx-auto max-w-md">
					<h2 className="text-3xl font-bold text-center text-blue-300 mb-12">Skontaktuj się z nami</h2>
					<a
						href="mailto:cobalt.pwr@gmail.com"
						className="w-full flex justify-center items-center px-4 py-3 bg-[#0047ab] text-white rounded-md hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 text-lg font-semibold transition"
					>
						<Send className="w-5 h-5 mr-2" />
						Napisz do nas maila
					</a>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-[#0047ab] text-white py-12 px-4">
				<div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
					<div className="mb-8 md:mb-0 flex items-center flex-col">
						<img
							src={logoImage}
							alt="Politechnika Wrocławska Logo"
							className="mb-4 h-[120px] bg-white rounded-2xl py-2 object-contain"
							loading="lazy"
							onError={(e) => {
								e.currentTarget.src = placeholderImage;
							}}
						/>
						<p className="text-sm opacity-75">© 2024 Koło Naukowe Cobalt.</p>
						<p className="text-sm opacity-75">Wszelkie prawa zastrzeżone.</p>
						<p className="text-sm opacity-75">Autor strony: Kacper Pijacki</p>
					</div>
					<div className="text-center md:text-right space-y-4">
						<h3 className="text-2xl font-bold mb-4">Kontakt</h3>
						<a className="flex items-center justify-center md:justify-end space-x-2" href="mailto:cobalt.pwr@gmail.com">
							<Mail className="w-5 h-5" />
							<p className="underline">cobalt.pwr@gmail.com</p>
						</a>
						<a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-end space-x-2">
							<MapPin className="w-5 h-5 " />
							<p className="underline">Wydział Chemiczny, 2.24 A3</p>
						</a>
					</div>
				</div>
			</footer>
		</div>
	);
}
