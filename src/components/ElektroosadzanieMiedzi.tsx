import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import JoinAs from "@/components/JoinAs";
import CleanerText from "./CleanerText";

const ElektroosadzanieMiedzi = () => {
	const [expandedStages, setExpandedStages] = useState<Record<string, boolean>>({});

	const toggleStage = (stageId: string) => {
		setExpandedStages((prev) => ({
			...prev,
			[stageId]: !prev[stageId],
		}));
	};

	return (
		<section id="elektroosadzanie-miedzi" className="py-20 px-4 bg-gray-900">
			<div className="container mx-auto max-w-4xl">
				{/* Header */}
				<h2 className="text-4xl font-bold mb-4 text-blue-300">Elektroosadzanie miedzi</h2>
				<p className="text-gray-300 mb-8 text-lg leading-relaxed">
					<CleanerText>
						Projekt skupia się na badaniu procesu elektroosadzania miedzi na różnych podłożach. Celem jest optymalizacja parametrów procesu oraz analiza właściwości otrzymanych powłok miedzianych, które mogą znaleźć zastosowanie w elektronice i ochronie przed korozją.
					</CleanerText>
				</p>

				{/* Intro Section */}
				<div className="mb-12 p-6 bg-gray-700 rounded-lg border-l-4 border-blue-500">
					<h3 className="text-2xl font-bold mb-4 text-blue-300">
						Folia miedziana z recyklingu
					</h3>
					<p className="text-gray-300 mb-4 leading-relaxed">
						<CleanerText>
							Projekt koncentruje się na opracowaniu laboratoryjnej technologii otrzymywania
							cienkiej folii miedzianej z materiałów wtórnych. Surowcem wykorzystywanym w badaniach
							jest <span className="font-bold">granulat miedzi pochodzący z recyklingu</span>,
							dostarczany przez firmę <span className="font-bold">Royal Bees Recycling</span>.
						</CleanerText>
					</p>
				</div>

				{/* Why Important */}
				<div className="mb-12 p-6 bg-gray-700 rounded-lg">
					<h3 className="text-2xl font-bold mb-4 text-blue-300">Dlaczego ten projekt jest ważny?</h3>
					<p className="text-gray-300 mb-3 leading-relaxed">
						<CleanerText>
							Efektem projektu ma być opracowanie{" "}
							<span className="font-bold">
								koncepcji technologii umożliwiającej wytwarzanie wysokiej jakości folii miedzianej z
								surowców wtórnych
							</span>{" "}
							w sposób powtarzalny i możliwy do dalszego rozwijania.
						</CleanerText>
					</p>
					<p className="text-gray-300 mb-4 leading-relaxed">
						<CleanerText>
							Wykorzystanie surowców wtórnych pozwala ograniczyć zużycie zasobów naturalnych oraz
							wspiera rozwój <span className="font-bold">gospodarki o obiegu zamkniętym</span>, w
							której materiały mogą być ponownie wykorzystywane w kolejnych procesach technologicznych.
						</CleanerText>
					</p>
					<p className="text-gray-300 leading-relaxed">
						<CleanerText>
							Badania prowadzone w projekcie pozwalają nie tylko rozwijać nowe technologie materiałowe,
							ale także zdobywać doświadczenie laboratoryjne i inżynierskie.
						</CleanerText>
					</p>
				</div>

				{/* Process Stages */}
				<div className="mb-12">
					<h3 className="text-2xl font-bold mb-8 text-blue-300">Schemat Procesu</h3>

					{/* Grid of expandable stages */}
					<div className="grid grid-cols-1 gap-4">
						{/* Stage 1: Granulat miedzi */}
						<div className="bg-gray-700 rounded-lg overflow-hidden border border-gray-600">
							<button
								onClick={() => toggleStage("stage1")}
								className="w-full p-4 flex items-center justify-between hover:bg-gray-650 transition-colors"
							>
								<span className="font-bold text-lg text-blue-300">1. Granulat Miedzi</span>
								{expandedStages["stage1"] ? (
									<ChevronUp className="text-blue-400" />
								) : (
									<ChevronDown className="text-gray-400" />
								)}
							</button>
							{expandedStages["stage1"] && (
								<div className="border-t border-gray-600 p-4 bg-gray-750">
									<p className="text-gray-300 text-sm leading-relaxed mb-3">
										<CleanerText>
											Proces rozpoczyna się od <span className="font-bold">surowca wykorzystywanego w badaniach</span>,
											którym jest granulat miedzi pochodzący z recyklingu. Materiał ten dostarczany
											jest przez firmę <span className="font-bold">Royal Bees Recycling</span> i stanowi
											źródło metalu wykorzystywanego w dalszych etapach procesu.
										</CleanerText>
									</p>
									<p className="text-gray-300 text-sm leading-relaxed mb-3">
										<CleanerText>
											Wykorzystanie miedzi pochodzącej z materiałów wtórnych pozwala ograniczyć
											zużycie surowców naturalnych oraz wspiera rozwój{" "}
											<span className="font-bold">gospodarki o obiegu zamkniętym</span>, w której
											materiały mogą być ponownie wykorzystywane w kolejnych procesach technologicznych.
										</CleanerText>
									</p>
									<p className="text-gray-300 text-sm leading-relaxed mb-3">
										<CleanerText>
											Przed rozpoczęciem procesu elektrochemicznego granulat miedzi przygotowywany jest
											do dalszych etapów badań.
										</CleanerText>
									</p>
								</div>
							)}
						</div>

						{/* Stage 2: Rozpuszczanie */}
						<div className="bg-gray-700 rounded-lg overflow-hidden border border-gray-600">
							<button
								onClick={() => toggleStage("stage2")}
								className="w-full p-4 flex items-center justify-between hover:bg-gray-650 transition-colors"
							>
								<span className="font-bold text-lg text-blue-300">2. Rozpuszczanie</span>
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
											Z granulatu miedzi przygotowujemy{" "}
											<span className="font-bold">
												roztwór elektrolitu zawierającego jony miedzi
											</span>
											. Podczas tego procesu miedź przechodzi do roztworu, tworząc środowisko, w którym
											możliwe jest prowadzenie reakcji elektrochemicznych. Odpowiednio przygotowany
											elektrolit jest kluczem do sukcesu dalszych etapów procesu.
										</CleanerText>
									</p>
									<p className="text-gray-300 text-sm leading-relaxed mb-3">
										<CleanerText>
											Skład roztworu oraz jego parametry mają duży wpływ na późniejszą jakość otrzymywanej
											powłoki metalicznej, dlatego członkowie koła zaangażowani w ten projekt stale
											optymalizują warunki jego przygotowania.
										</CleanerText>
									</p>
								</div>
							)}
						</div>

						{/* Stage 3: Elektrorafinacja */}
						<div className="bg-gray-700 rounded-lg overflow-hidden border border-gray-600">
							<button
								onClick={() => toggleStage("stage3")}
								className="w-full p-4 flex items-center justify-between hover:bg-gray-650 transition-colors"
							>
								<span className="font-bold text-lg text-blue-300">3. Elektrorafinacja</span>
								{expandedStages["stage3"] ? (
									<ChevronUp className="text-blue-400" />
								) : (
									<ChevronDown className="text-gray-400" />
								)}
							</button>
							{expandedStages["stage3"] && (
								<div className="border-t border-gray-600 p-4 bg-gray-750">
									<p className="text-gray-300 text-sm leading-relaxed mb-3">
										<CleanerText>
											Kolejnym etapem jest <span className="font-bold">elektrorafinacja</span>, czyli
											elektrochemiczna metoda oczyszczania metalu.
										</CleanerText>
									</p>
									<p className="text-gray-300 text-sm leading-relaxed mb-3">
										<CleanerText>
											Podczas elektrorafinacji miedź znajdująca się w materiale anodowym przechodzi do
											roztworu w postaci jonów. Następnie pod wpływem przepływu prądu elektrycznego jony
											te migrują w kierunku katody. Elektrony przenoszone przez obwód elektryczny
											umożliwiają redukcję jonów miedzi.
										</CleanerText>
									</p>
									<p className="text-gray-300 text-sm leading-relaxed mb-3">
										<CleanerText>
											Proces ten pozwala na oczyszczanie miedzi oraz przygotowanie jej do ponownego
											osadzania w postaci metalicznej.
										</CleanerText>
									</p>
								</div>
							)}
						</div>

						{/* Stage 4: Elektroosadzanie */}
						<div className="bg-gray-700 rounded-lg overflow-hidden border border-gray-600">
							<button
								onClick={() => toggleStage("stage4")}
								className="w-full p-4 flex items-center justify-between hover:bg-gray-650 transition-colors"
							>
								<span className="font-bold text-lg text-blue-300">4. Elektroosadzanie & Folia</span>
								{expandedStages["stage4"] ? (
									<ChevronUp className="text-blue-400" />
								) : (
									<ChevronDown className="text-gray-400" />
								)}
							</button>
							{expandedStages["stage4"] && (
								<div className="border-t border-gray-600 p-4 bg-gray-750">
									<h4 className="font-bold text-blue-300 mb-3">Elektroosadzanie miedzi</h4>
									<p className="text-gray-300 text-sm leading-relaxed mb-3">
										<CleanerText>
											W kolejnym etapie następuje{" "}
											<span className="font-bold">elektroosadzanie miedzi na powierzchni elektrody</span>.
											Pod wpływem przepływu prądu elektrycznego jony miedzi znajdujące się w elektrolicie
											ulegają redukcji i osadzają się na katodzie w postaci metalicznej.
										</CleanerText>
									</p>
									<p className="text-gray-300 text-sm leading-relaxed mb-3">
										<CleanerText>
											Właśnie w tym etapie powstaje <span className="font-bold">cienka, ciągła warstwa miedzi</span>,
											która z czasem może utworzyć folię metaliczną.
										</CleanerText>
									</p>
									<p className="text-gray-300 text-sm leading-relaxed mb-3">
										<CleanerText>
											Na jakość powłoki wpływają różne parametry procesu, takie jak:
										</CleanerText>
									</p>
									<ul className="space-y-1 mb-4 text-gray-300 text-sm">
										<li className="flex items-start">
											<span className="mr-2 text-blue-400">•</span>
											<span>gęstość prądu</span>
										</li>
										<li className="flex items-start">
											<span className="mr-2 text-blue-400">•</span>
											<span>temperatura elektrolitu</span>
										</li>
										<li className="flex items-start">
											<span className="mr-2 text-blue-400">•</span>
											<span>czas procesu elektroosadzania</span>
										</li>
										<li className="flex items-start">
											<span className="mr-2 text-blue-400">•</span>
											<span>skład i stężenie elektrolitu</span>
										</li>
									</ul>

									<h4 className="font-bold text-blue-300 mb-3">Formowanie folii miedzianej</h4>
									<p className="text-gray-300 text-sm leading-relaxed mb-3">
										<CleanerText>
											W miarę trwania procesu elektroosadzania warstwa ta stopniowo się pogrubia, aż powstaje
											<span className="font-bold"> ciągła, cienka folia miedziana o wysokiej czystości</span>.
										</CleanerText>
									</p>
									<p className="text-gray-300 text-sm leading-relaxed mb-3">
										<CleanerText>
											Jednym z głównych celów projektu jest opracowanie metody pozwalającej na wytwarzanie
											<span className="font-bold"> jednorodnej folii o kontrolowanej grubości i dobrej jakości powierzchni</span>.
											Parametry procesu elektroosadzania mają bezpośredni wpływ na strukturę krystaliczną,
											gładkość powierzchni i przyczepność powłoki metalicznej. Ich optymalizacja to kluczowe
											wyzwanie projektu.
										</CleanerText>
									</p>
									<p className="text-gray-300 text-sm leading-relaxed mb-3">
										<CleanerText>
											Po zakończeniu procesu elektroosadzania powstała warstwa miedzi może zostać
											<span className="font-bold"> oddzielona od podłoża</span>, tworząc samonośną folię
											metaliczną. Otrzymany materiał jest następnie wykorzystywany w dalszych badaniach laboratoryjnych.
										</CleanerText>
									</p>
									<p className="text-gray-300 text-sm leading-relaxed mb-3">
										<CleanerText>
											Tak przygotowana folia miedziana może w przyszłości znaleźć zastosowanie m.in. w:
										</CleanerText>
									</p>
									<ul className="space-y-1 mb-4 text-gray-300 text-sm">
										<li className="flex items-start">
											<span className="mr-2 text-blue-400">•</span>
											<span>elektronice i obwodach drukowanych,</span>
										</li>
										<li className="flex items-start">
											<span className="mr-2 text-blue-400">•</span>
											<span>systemach magazynowania energii, takich jak baterie litowo-jonowe,</span>
										</li>
										<li className="flex items-start">
											<span className="mr-2 text-blue-400">•</span>
											<span>technologiach materiałowych wymagających cienkich warstw metali o wysokiej przewodności.</span>
										</li>
									</ul>

								</div>
							)}
						</div>

						{/* Stage 5: Analiza */}
						<div className="bg-gray-700 rounded-lg overflow-hidden border border-gray-600">
							<button
								onClick={() => toggleStage("stage5")}
								className="w-full p-4 flex items-center justify-between hover:bg-gray-650 transition-colors"
							>
								<span className="font-bold text-lg text-blue-300">5. Analiza Materiału</span>
								{expandedStages["stage5"] ? (
									<ChevronUp className="text-blue-400" />
								) : (
									<ChevronDown className="text-gray-400" />
								)}
							</button>
							{expandedStages["stage5"] && (
								<div className="border-t border-gray-600 p-4 bg-gray-750">
									<p className="text-gray-300 text-sm leading-relaxed mb-3">
										<CleanerText>
											Ostatnim etapem projektu jest{" "}
											<span className="font-bold">analiza właściwości otrzymanej folii miedzianej</span>.
											Badania pozwalają określić jakość materiału oraz jego potencjalne zastosowania
											technologiczne. Analizowane są między innymi:
										</CleanerText>
									</p>
									<ul className="space-y-1 mb-4 text-gray-300 text-sm">
										<li className="flex items-start">
											<span className="mr-2 text-blue-400">•</span>
											<span>struktura powierzchni</span>
										</li>
										<li className="flex items-start">
											<span className="mr-2 text-blue-400">•</span>
											<span>jednorodność i grubość warstwy</span>
										</li>
										<li className="flex items-start">
											<span className="mr-2 text-blue-400">•</span>
											<span>właściwości mechaniczne</span>
										</li>
										<li className="flex items-start">
											<span className="mr-2 text-blue-400">•</span>
											<span>właściwości elektryczne</span>
										</li>
									</ul>
									<p className="text-gray-300 text-sm leading-relaxed mb-3">
										<CleanerText>
											Uzyskane wyniki pozwalają lepiej zrozumieć proces elektroosadzania oraz wskazują,
											jakie parametry procesu należy optymalizować, aby otrzymać materiał o pożądanych
											właściwościach.
										</CleanerText>
									</p>
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
							Opracowanie technologii wytwarzania wysokiej jakości folii miedzianej może mieć wiele
							zastosowań w nowoczesnych technologiach. Materiały tego typu wkrótce mogą znaleźć
							zastosowanie w:
						</CleanerText>
					</p>
					<ul className="space-y-2 text-gray-300">
						<li className="flex items-start">
							<span className="mr-3 text-blue-400">•</span>
							<span>bateriach i systemach magazynowania energii</span>
						</li>
						<li className="flex items-start">
							<span className="mr-3 text-blue-400">•</span>
							<span>elektronice i obwodach drukowanych</span>
						</li>
						<li className="flex items-start">
							<span className="mr-3 text-blue-400">•</span>
							<span>powłokach ochronnych i antykorozyjnych</span>
						</li>
					</ul>
				</div>

				{/* Call to action */}
				<JoinAs />
			</div>
		</section>
	);
};

export default ElektroosadzanieMiedzi;
