import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import JoinAs from "@/components/JoinAs";
import CleanerText from "./CleanerText";

import image3 from "@/assets/projects/czarna-masa/image3.jpg";
import image4 from "@/assets/projects/czarna-masa/image4.png";
import image5 from "@/assets/projects/czarna-masa/image5.jpg";
import image6 from "@/assets/projects/czarna-masa/image6.jpg";
import image7 from "@/assets/projects/czarna-masa/image7.jpg";
import image8 from "@/assets/projects/czarna-masa/image8.jpg";
import image9 from "@/assets/projects/czarna-masa/image9.jpg";


const CzarnaMasaProject = () => {
	const [expandedStages, setExpandedStages] = useState<Record<string, boolean>>({});
	const [zoomedImage, setZoomedImage] = useState<{ src: string; alt: string } | null>(null);

	const toggleStage = (stageId: string) => {
		setExpandedStages((prev) => ({
			...prev,
			[stageId]: !prev[stageId],
		}));
	};

	const openImage = (src: string, alt: string) => {
		setZoomedImage({ src, alt });
	};

	const closeImage = () => {
		setZoomedImage(null);
	};

	return (
		<section id="czarna-masa" className="py-20 px-4 bg-gray-800">
			<div className="container mx-auto max-w-4xl">
				{/* Header */}
				<h2 className="text-4xl font-bold mb-4 text-blue-300">Czarna Masa</h2>
				<p className="text-gray-300 mb-8 text-lg leading-relaxed">
					<CleanerText>
						Projekt dotyczy odzysku i analizy tzw. czarnej masy, będącej pozostałością po recyklingu
						zużytych baterii alkalicznych cynkowo-manganowych. Celem jest opracowanie efektywnych
						metod odzysku i oczyszczania składników czarnej masy, co pozwoli na ich ponowne
						wykorzystanie w produkcji nowych ogniw oraz ograniczenie negatywnego wpływu na środowisko.
					</CleanerText>
				</p>

				{/* Intro Section */}
				<div className="mb-12 p-6 bg-gray-700 rounded-lg border-l-4 border-blue-500">
					<h3 className="text-2xl font-bold mb-4 text-blue-300">
						Czarna Masa, czyli odzysk surowców z zużytych baterii
					</h3>
					<p className="text-gray-300 mb-4 leading-relaxed">
						<CleanerText>
							Każdego dnia zużywamy ogromne ilości baterii – w pilotach, zabawkach, latarkach czy
							sprzęcie elektronicznym. Po ich zużyciu większość osób wyrzuca je do specjalnych
							pojemników, ale co właściwie dzieje się z nimi później?
						</CleanerText>
					</p>
					<img
						src={image3}
						alt="Zużyte baterie – punkt wyjścia do procesu odzysku"
						className="w-full rounded-lg mb-4 cursor-zoom-in"
						onClick={() =>
							openImage(
								image3,
								"Zużyte baterie – punkt wyjścia do procesu odzysku"
							)
						}
					/>
					<p className="text-gray-400 text-sm italic">
						<CleanerText>
							Zużyte baterie – punkt wyjścia do procesu odzysku cennych surowców.
						</CleanerText>
					</p>
					<p className="text-gray-300 mt-4 leading-relaxed">
						<CleanerText>
							W projekcie <span className="font-bold">Czarna Masa</span>, realizowanym przez
							członków <span className="font-bold">KN Cobalt</span>, zaglądamy właśnie do tego
							etapu życia baterii. Badamy materiał powstający podczas ich recyklingu i sprawdzamy,
							jak odziskać z niego cenne pierwiastki, które można ponownie wykorzystać w produkcji
							nowych ogniw.
						</CleanerText>
					</p>
				</div>

				{/* Why Important */}
				<div className="mb-12 p-6 bg-gray-700 rounded-lg">
					<h3 className="text-2xl font-bold mb-4 text-blue-300">Dlaczego ten projekt jest ważny?</h3>
					<p className="text-gray-300 mb-4 leading-relaxed">
						<CleanerText>
							Projekt „Czarna Masa” pokazuje, że{" "}
							<span className="font-bold">chemia może realnie wspierać zrównoważony rozwój</span>.
							Dzięki badaniom nad odzyskiem metali z odpadów możemy:
						</CleanerText>
					</p>
					<ul className="space-y-2 mb-6 text-gray-300">
						<li className="flex items-start">
							<span className="mr-3 text-blue-400">•</span>
							<span>zmniejszyć zużycie surowców naturalnych</span>
						</li>
						<li className="flex items-start">
							<span className="mr-3 text-blue-400">•</span>
							<span>ograniczyć ilość odpadów niebezpiecznych</span>
						</li>
						<li className="flex items-start">
							<span className="mr-3 text-blue-400">•</span>
							<span>rozwijać technologie recyklingu przyszłości</span>
						</li>
					</ul>
					<p className="text-gray-300 leading-relaxed">
						<CleanerText>
							To także świetna okazja dla studentów, aby zdobyć doświadczenie w pracy laboratoryjnej,
							poznać nowoczesne techniki analityczne i uczestniczyć w realnych projektach badawczych.
							Nasz projekt to połączenie{" "}
							<span className="font-bold">
								chemii analitycznej, inżynierii materiałowej i ochrony środowiska
							</span>
							, które pokazuje, że odpady mogą stać się wartościowym surowcem.
						</CleanerText>
					</p>
				</div>

				{/* Process Stages */}
				<div className="mb-12">
					<h3 className="text-2xl font-bold mb-8 text-blue-300">Schemat Procesu</h3>

					{/* Grid of expandable stages */}
					<div className="grid grid-cols-1 gap-4">
						{/* Stage 1: Zużyte baterie */}
						<div className="bg-gray-700 rounded-lg overflow-hidden border border-gray-600">
							<button
								onClick={() => toggleStage("stage1")}
								className="w-full p-4 flex items-center justify-between hover:bg-gray-650 transition-colors"
							>
								<span className="font-bold text-lg text-blue-300">1. Zużyte baterie</span>
								{expandedStages["stage1"] ? (
									<ChevronUp className="text-blue-400" />
								) : (
									<ChevronDown className="text-gray-400" />
								)}
							</button>
							{expandedStages["stage1"] && (
								<div className="border-t border-gray-600 p-4 bg-gray-750">
									<img
										src={image6}
										alt="Zużyte baterie"
										className="w-full rounded-lg mb-3 cursor-zoom-in"
										onClick={() => openImage(image6, "Zużyte baterie")}
									/>
									<p className="text-gray-300 text-sm leading-relaxed">
										<CleanerText>
											Punkt wyjścia całego procesu – zużyte baterie zawierają wiele cennych
											pierwiastków, które mogą zostać odzyskane.
										</CleanerText>
									</p>
								</div>
							)}
						</div>

						{/* Stage 2: Rozładowanie i rozłożenie */}
						<div className="bg-gray-700 rounded-lg overflow-hidden border border-gray-600">
							<button
								onClick={() => toggleStage("stage2")}
								className="w-full p-4 flex items-center justify-between hover:bg-gray-650 transition-colors"
							>
								<span className="font-bold text-lg text-blue-300">2. Rozładowanie i Rozłożenie</span>
								{expandedStages["stage2"] ? (
									<ChevronUp className="text-blue-400" />
								) : (
									<ChevronDown className="text-gray-400" />
								)}
							</button>
							{expandedStages["stage2"] && (
								<div className="border-t border-gray-600 p-4 bg-gray-750">
									<p className="text-gray-300 text-sm leading-relaxed mb-3">
										<CleanerText>
											Zanim zużyte baterie zostaną poddane dalszym etapom badań, konieczne jest
											ich <span className="font-bold">bezpieczne przygotowanie do demontażu</span>.
											Baterie zawierają energię elektryczną oraz reaktywne materiały chemiczne,
											dlatego nie można ich od razu rozkładać.
										</CleanerText>
									</p>
									<p className="text-gray-300 text-sm leading-relaxed mb-3">
										<CleanerText>
											Pierwszym krokiem jest{" "}
											<span className="font-bold">całkowite rozładowanie baterii</span>. Pozwala to
											usunąć pozostałą energię elektryczną z ogniwa i zmniejszyć ryzyko zwarcia i
											eksplozji baterii. W warunkach laboratoryjnych baterie są rozładowywane w
											kontrolowany sposób, poprzez podłączenie ich do odpowiedniego obciążenia
											elektrycznego.
										</CleanerText>
									</p>
									<p className="text-gray-300 text-sm leading-relaxed mb-3">
										<CleanerText>
											Po rozładowaniu baterii są one mechanicznie rozbierane na poszczególne elementy:
										</CleanerText>
									</p>
									<ul className="space-y-1 mb-3 text-gray-300 text-sm">
										<li className="flex items-start">
											<span className="mr-2 text-blue-400">•</span>
											<span>metalowa obudowa</span>
										</li>
										<li className="flex items-start">
											<span className="mr-2 text-blue-400">•</span>
											<span>elektrody</span>
										</li>
										<li className="flex items-start">
											<span className="mr-2 text-blue-400">•</span>
											<span>separator</span>
										</li>
										<li className="flex items-start">
											<span className="mr-2 text-blue-400">•</span>
											<span>materiał aktywny znajdujący się wewnątrz baterii</span>
										</li>
									</ul>
									<img
										src={image5}
										alt="Elementy uzyskane po mechanicznym rozłożeniu baterii"
										className="w-full rounded-lg cursor-zoom-in"
										onClick={() =>
											openImage(
												image5,
												"Elementy uzyskane po mechanicznym rozłożeniu baterii"
											)
										}
									/>
									<p className="text-gray-400 text-sm italic mt-2">
										<CleanerText>
											Elementy uzyskane po mechanicznym rozłożeniu baterii.
										</CleanerText>
									</p>
								</div>
							)}
						</div>

						{/* Stage 3: Separacja czarnej masy */}
						<div className="bg-gray-700 rounded-lg overflow-hidden border border-gray-600">
							<button
								onClick={() => toggleStage("stage3")}
								className="w-full p-4 flex items-center justify-between hover:bg-gray-650 transition-colors"
							>
								<span className="font-bold text-lg text-blue-300">3. Separacja czarnej masy</span>
								{expandedStages["stage3"] ? (
									<ChevronUp className="text-blue-400" />
								) : (
									<ChevronDown className="text-gray-400" />
								)}
							</button>
							{expandedStages["stage3"] && (
								<div className="border-t border-gray-600 p-4 bg-gray-750">
									<h4 className="font-bold text-blue-300 mb-3">Czym jest czarna masa?</h4>
									<p className="text-gray-300 text-sm leading-relaxed mb-3">
										<CleanerText>
											Podczas recyklingu zużytych baterii powstaje charakterystyczny proszek – tzw.{" "}
											<span className="font-bold">czarna masa</span>. Jest to mieszanina różnych
											związków chemicznych zawierających m.in. mangan, cynk, kobalt i inne metale
											obecne w materiałach elektrodowych.
										</CleanerText>
									</p>
									<div className="grid grid-cols-3 gap-2 mb-4">
										<img
												src={image7}
												alt="Czarna masa - proszek"
												className="w-full rounded-lg cursor-zoom-in"
												onClick={() => openImage(image7, "Czarna masa - proszek")}
										/>
										<img
												src={image9}
												alt="Czarna masa - różne kadry"
												className="w-full rounded-lg cursor-zoom-in"
												onClick={() => openImage(image9, "Czarna masa - różne kadry")}
										/>
										<img
												src={image8}
												alt="Czarna masa - różne kadry"
												className="w-full rounded-lg cursor-zoom-in"
												onClick={() => openImage(image8, "Czarna masa - różne kadry")}
										/>
									</div>
									<p className="text-gray-400 text-sm italic mb-3">
										<CleanerText>
											Czarna masa – drobny proszek zawierający cenne metale możliwe do odzysku.
										</CleanerText>
									</p>
									<p className="text-gray-300 text-sm leading-relaxed mb-3">
										<CleanerText>
											Czarna masa, choć wygląda niepozornie, w rzeczywistości jest{" "}
											<span className="font-bold">cennym źródłem surowców</span>, które można odziskać
											i ponownie wykorzystać w przemyśle.
										</CleanerText>
									</p>
									<p className="text-gray-300 text-sm leading-relaxed mb-3">
										<CleanerText>
											Problem polega na tym, że skład czarnej masy nie jest stały. Może się różnić w
											zależności od typu baterii oraz technologii ich produkcji. Dlatego jednym z
											pierwszych etapów pracy jest{" "}
											<span className="font-bold">dokładna analiza jej składu chemicznego</span>.
										</CleanerText>
									</p>
									<p className="text-gray-300 text-sm leading-relaxed mb-3">
										<CleanerText>
											Odzysk tych pierwiastków ma ogromne znaczenie, ponieważ:
										</CleanerText>
									</p>
									<ul className="space-y-1 text-gray-300 text-sm">
										<li className="flex items-start">
											<span className="mr-2 text-blue-400">●</span>
											<span>zmniejsza potrzebę wydobycia nowych surowców</span>
										</li>
										<li className="flex items-start">
											<span className="mr-2 text-blue-400">●</span>
											<span>ogranicza ilość odpadów</span>
										</li>
										<li className="flex items-start">
											<span className="mr-2 text-blue-400">●</span>
											<span>redukuje emisję CO₂</span>
										</li>
										<li className="flex items-start">
											<span className="mr-2 text-blue-400">●</span>
											<span>wspiera rozwój gospodarki o obiegu zamkniętym</span>
										</li>
									</ul>
								</div>
							)}
						</div>

						{/* Stage 4: Ługowanie */}
						<div className="bg-gray-700 rounded-lg overflow-hidden border border-gray-600">
							<button
								onClick={() => toggleStage("stage4")}
								className="w-full p-4 flex items-center justify-between hover:bg-gray-650 transition-colors"
							>
								<span className="font-bold text-lg text-blue-300">4. Ługowanie</span>
								{expandedStages["stage4"] ? (
									<ChevronUp className="text-blue-400" />
								) : (
									<ChevronDown className="text-gray-400" />
								)}
							</button>
							{expandedStages["stage4"] && (
								<div className="border-t border-gray-600 p-4 bg-gray-750">
									<p className="text-gray-300 text-sm leading-relaxed mb-3">
										<CleanerText>
											Kolejnym etapem jest <span className="font-bold">łużowanie</span> – proces
											polegający na rozpuszczaniu wybranych składników materiału w odpowiednim
											roztworze (najczęściej kwasu). Podczas tego procesu:
										</CleanerText>
									</p>
									<ul className="space-y-1 mb-4 text-gray-300 text-sm">
										<li className="flex items-start">
											<span className="mr-2 text-blue-400">•</span>
											<span>część składników przechodzi do roztworu,</span>
										</li>
										<li className="flex items-start">
											<span className="mr-2 text-blue-400">•</span>
											<span>nierozpuszczalne pozostałości pozostają w postaci osadu.</span>
										</li>
									</ul>

									<h4 className="font-bold text-blue-300 mb-3">Kinetyka ługowania</h4>
									<p className="text-gray-300 text-sm leading-relaxed mb-3">
										<CleanerText>
											Aby ocenić skuteczność procesu, analizuje się{" "}
											<span className="font-bold">kinetkę łużowania</span>, czyli szybkość
											przechodzenia metali do roztworu w czasie. Na podstawie wyników eksperymentów
											sporządza się wykresy przedstawiające{" "}
											<span className="font-bold">stopień wyłużowania metalu w funkcji czasu procesu</span>.
											Takie wykresy pozwalają określić:
										</CleanerText>
									</p>
									<ul className="space-y-1 mb-4 text-gray-300 text-sm">
										<li className="flex items-start">
											<span className="mr-2 text-blue-400">•</span>
											<span>jak szybko metale przechodzą do roztworu,</span>
										</li>
										<li className="flex items-start">
											<span className="mr-2 text-blue-400">•</span>
											<span>po jakim czasie proces osiąga równowagę,</span>
										</li>
										<li className="flex items-start">
											<span className="mr-2 text-blue-400">•</span>
											<span>jakie warunki zapewniają najwyższą wydajność odzysku.</span>
										</li>
									</ul>
									<p className="text-gray-300 text-sm leading-relaxed mb-4">
										<CleanerText>
											Dzięki analizie kinetyki łużowania wiemy, że przy zastosowaniu reduktora w
											trakcie łużowania stopień odzysku manganu wzrasta z 30% do 80%.
										</CleanerText>
									</p>
									<img
										src={image4}
										alt="Wykres kinetyki ługowania"
										className="w-full rounded-lg mb-3 cursor-zoom-in"
										onClick={() => openImage(image4, "Wykres kinetyki ługowania")}
									/>
									<p className="text-gray-300 text-sm leading-relaxed">
										<CleanerText>
											Skuteczność łużowania zależy od wielu czynników, takich jak:
										</CleanerText>
									</p>
									<ul className="space-y-1 mt-2 text-gray-300 text-sm">
										<li className="flex items-start">
											<span className="mr-2 text-blue-400">•</span>
											<span>temperatura</span>
										</li>
										<li className="flex items-start">
											<span className="mr-2 text-blue-400">•</span>
											<span>czas trwania procesu</span>
										</li>
										<li className="flex items-start">
											<span className="mr-2 text-blue-400">•</span>
											<span>stopień rozdrobnienia materiału</span>
										</li>
										<li className="flex items-start">
											<span className="mr-2 text-blue-400">•</span>
											<span>intensywność mieszania</span>
										</li>
									</ul>
									<p className="text-gray-300 text-sm leading-relaxed mt-4">
										<CleanerText>
											Dzięki odpowiedniemu dobraniu warunków można{" "}
											<span className="font-bold">selektywnie wydzielać poszczególne metale</span>.
										</CleanerText>
									</p>
								</div>
							)}
						</div>

						{/* Stage 5: Elektroliza */}
						<div className="bg-gray-700 rounded-lg overflow-hidden border border-gray-600">
							<button
								onClick={() => toggleStage("stage5")}
								className="w-full p-4 flex items-center justify-between hover:bg-gray-650 transition-colors"
							>
								<span className="font-bold text-lg text-blue-300">5. Elektroliza</span>
								{expandedStages["stage5"] ? (
									<ChevronUp className="text-blue-400" />
								) : (
									<ChevronDown className="text-gray-400" />
								)}
							</button>
							{expandedStages["stage5"] && (
								<div className="border-t border-gray-600 p-4 bg-gray-750">
									<h4 className="font-bold text-blue-300 mb-3">Elektroliza – odzysk metali przy pomocy prądu</h4>
									<p className="text-gray-300 text-sm leading-relaxed mb-3">
										<CleanerText>
											Elektroliza jest jedną z kluczowych metod stosowanych w projekcie{" "}
											<span className="font-bold">Czarna Masa</span> do odzysku metali z roztworu
											powstałego po łużowaniu czarnej masy.
										</CleanerText>
									</p>
									<p className="text-gray-300 text-sm leading-relaxed mb-3">
										<CleanerText>
											Proces polega na przepływie prądu elektrycznego przez roztwór (elektrolit), co
											wymusza <span className="font-bold">reakcje chemiczne, które w naturalnych warunkach nie zachodzą samorzutnie</span>.
											W wyniku tych reakcji metale mogą być selektywnie osadzane na elektrodach i
											oddzielane od reszty substancji chemicznych.
										</CleanerText>
									</p>

									<h4 className="font-bold text-blue-300 mb-3">Budowa układu elektrolitycznego</h4>
									<p className="text-gray-300 text-sm leading-relaxed mb-3">
										<CleanerText>
											Elektrolizer składa się z:
										</CleanerText>
									</p>
									<ul className="space-y-2 mb-4 text-gray-300 text-sm">
										<li className="flex items-start">
											<span className="mr-2 text-blue-400">•</span>
											<div>
												<span className="font-bold">Anody</span>
												<span> – elektrody dodatniej, na której zachodzi </span>
												<span className="font-bold">utlenianie</span>
												<span>. Tutaj atomy metali tracą elektrony i przechodzą do roztworu w postaci jonów.</span>
											</div>
										</li>
										<li className="flex items-start">
											<span className="mr-2 text-blue-400">•</span>
											<div>
												<span className="font-bold">Katody</span>
												<span> – elektrody ujemnej, na której zachodzi </span>
												<span className="font-bold">redukcja</span>
												<span>. Jonowe formy metali przyjmują elektrony i osadzają się na powierzchni elektrody jako czyste pierwiastki.</span>
											</div>
										</li>
									</ul>

									<h4 className="font-bold text-blue-300 mb-3">Co można odziskać?</h4>
									<p className="text-gray-300 text-sm leading-relaxed mb-3">
										<CleanerText>
											Dzięki elektrolizie możliwe jest wydzielenie m.in.:
										</CleanerText>
									</p>
									<ul className="space-y-1 mb-4 text-gray-300 text-sm">
										<li className="flex items-start">
											<span className="mr-2 text-blue-400">•</span>
											<div>
												<span className="font-bold">[Zn] cynku</span>
												<span> – często osadza się jako pierwsza, dzięki niższemu potencjałowi redukcyjnemu</span>
											</div>
										</li>
										<li className="flex items-start">
											<span className="mr-2 text-blue-400">•</span>
											<div>
												<span className="font-bold">[Mn] manganu</span>
												<span> – wymaga precyzyjnego doboru warunków</span>
											</div>
										</li>
										<li className="flex items-start">
											<span className="mr-2 text-blue-400">•</span>
											<div>
												<span className="font-bold">[Co] kobaltu</span>
												<span> – wartościowy metal do produkcji nowych baterii</span>
											</div>
										</li>
									</ul>

									<p className="text-gray-300 text-sm leading-relaxed mb-3">
										<CleanerText>
											Proces jest więc <span className="font-bold">selektywny</span> – odpowiednie
											napięcie i natężenie prądu pozwalają odzyskiwać konkretne metale, pozostawiając
											pozostałe w roztworze do dalszej obróbki.
										</CleanerText>
									</p>

									<h4 className="font-bold text-blue-300 mb-3">Dlaczego elektroliza jest tak ważna?</h4>
									<ul className="space-y-2 text-gray-300 text-sm">
										<li className="flex items-start">
											<span className="mr-2 text-blue-400">•</span>
											<div>
												<span className="font-bold">Efektywność</span>
												<span> – pozwala odziskać metale w wysokiej czystości, gotowe do ponownego użytku.</span>
											</div>
										</li>
										<li className="flex items-start">
											<span className="mr-2 text-blue-400">•</span>
											<div>
												<span className="font-bold">Ochrona środowiska</span>
												<span> – redukuje potrzebę wydobycia pierwiastków z naturalnych złóż.</span>
											</div>
										</li>
										<li className="flex items-start">
											<span className="mr-2 text-blue-400">•</span>
											<div>
												<span className="font-bold">Wsparcie gospodarki o obiegu zamkniętym</span>
												<span> – odzyskane metale mogą trafiać bezpośrednio do produkcji nowych baterii.</span>
											</div>
										</li>
										<li className="flex items-start">
											<span className="mr-2 text-blue-400">•</span>
											<div>
												<span className="font-bold">Doświadczenie laboratoryjne dla studentów</span>
												<span> – nauka pracy z elektrolizerem, monitorowania parametrów i analizowania wyników w praktyce.</span>
											</div>
										</li>
									</ul>

									<h4 className="font-bold text-blue-300 mb-3 mt-4">Jak przebiega proces w praktyce?</h4>
									<ol className="space-y-2 text-gray-300 text-sm list-decimal list-inside">
										<li>Roztwór zawierający metale powstałe po ługowaniu wlewany jest do elektrolizera.</li>
										<li>Elektrody są zanurzone w elektrolicie i podłączone do źródła prądu stałego.</li>
										<li>Metale osadzają się na katodzie w postaci cienkiej, metalicznej warstwy.</li>
										<li>Osadzony metal jest następnie odłączany i oczyszczany do dalszego wykorzystania.</li>
										<li>Roztwór po procesie może być ponownie wykorzystany lub poddany kolejnym etapom odzysku innych metali.</li>
									</ol>
								</div>
							)}
						</div>

						{/* Stage 6: Analiza */}
						<div className="bg-gray-700 rounded-lg overflow-hidden border border-gray-600">
							<button
								onClick={() => toggleStage("stage6")}
								className="w-full p-4 flex items-center justify-between hover:bg-gray-650 transition-colors"
							>
								<span className="font-bold text-lg text-blue-300">6. Analiza Składu Materiałów</span>
								{expandedStages["stage6"] ? (
									<ChevronUp className="text-blue-400" />
								) : (
									<ChevronDown className="text-gray-400" />
								)}
							</button>
							{expandedStages["stage6"] && (
								<div className="border-t border-gray-600 p-4 bg-gray-750">
									<p className="text-gray-300 text-sm leading-relaxed mb-3">
										<CleanerText>
											Aby sprawdzić, jakie pierwiastki znajdują się w badanych próbkach oraz w jakiej
											ilości, wykorzystujemy nowoczesne{" "}
											<span className="font-bold">metody spektroskopowe</span>, między innymi:
										</CleanerText>
									</p>
									<ul className="space-y-1 text-gray-300 text-sm">
										<li className="flex items-start">
											<span className="mr-2 text-blue-400">•</span>
											<div>
												<span className="font-bold">ASA</span>
												<span> – atomowa spektrometria absorpcyjna</span>
											</div>
										</li>
										<li className="flex items-start">
											<span className="mr-2 text-blue-400">•</span>
											<div>
												<span className="font-bold">XRF</span>
												<span> – fluorescencja rentgenowska</span>
											</div>
										</li>
										<li className="flex items-start">
											<span className="mr-2 text-blue-400">•</span>
											<div>
												<span className="font-bold">ICP</span>
												<span> – spektrometria emisyjna z plazmą sprężoną indukcyjnie</span>
											</div>
										</li>
										<li className="flex items-start">
											<span className="mr-2 text-blue-400">•</span>
											<div>
												<span className="font-bold">XRD</span>
												<span> – dyfrakcja promieniowania rentgenowskiego</span>
											</div>
										</li>
									</ul>
								</div>
							)}
						</div>
					</div>
				</div>

				{/* Applications */}
				<div className="mb-12 p-6 bg-gray-700 rounded-lg">
					<h3 className="text-2xl font-bold mb-4 text-blue-300">Zastosowania</h3>
					<p className="text-gray-300 mb-4 leading-relaxed">
						<CleanerText>
							Odzysk metali z zużytych baterii pozwala ponownie wykorzystywać cenne pierwiastki w
							nowych technologiach, między innymi w:
						</CleanerText>
					</p>
					<ul className="space-y-2 text-gray-300">
						<li className="flex items-start">
							<span className="mr-3 text-blue-400">•</span>
							<span>produkcji nowych baterii</span>
						</li>
						<li className="flex items-start">
							<span className="mr-3 text-blue-400">•</span>
							<span>technologiach magazynowania energii</span>
						</li>
						<li className="flex items-start">
							<span className="mr-3 text-blue-400">•</span>
							<span>przemyśle materiałowym</span>
						</li>
					</ul>
				</div>

				{/* Call to action */}
				<JoinAs />

				{zoomedImage && (
					<div
						className="fixed inset-0 z-[1200] bg-black/85 flex items-center justify-center p-4"
						onClick={closeImage}
					>
						<div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
							<img
								src={zoomedImage.src}
								alt={zoomedImage.alt}
								className="w-full max-h-[85vh] object-contain rounded-lg"
							/>
							<p className="text-gray-200 text-sm mt-3 text-center">Kliknij poza zdjęciem, aby zamknąć</p>
						</div>
					</div>
				)}
			</div>
		</section>
	);
};

export default CzarnaMasaProject;
