import React from "react";

export default function Experience() {
	return (
		<section id="experience" className="py-12 px-4 sm:px-8 max-w-3xl mx-auto">
			<h2 className="text-2xl sm:text-3xl font-bold mb-4">Experience & Leadership</h2>
			<div className="border-l-4 border-blue-600 pl-6">
				{/* Timeline Item */}
				<div className="mb-8 relative">
					<div className="absolute -left-8 top-0 w-6 h-6 bg-blue-600 rounded-full border-4 border-white"></div>
					<div className="mb-2 text-lg font-semibold">DAMS Lab | Research Assistant | UMBC</div>
					<div className="text-sm text-gray-600 dark:text-gray-300 mb-1">July 2025 - Present</div>
					<ul className="list-disc pl-6 text-base mb-2">
						<li>Deployed IoT-based system for campus parking spot detection</li>
						<li>Integrated sensor data into UMBC’s Smart Campus initiative</li>
					</ul>
				</div>
				<div className="mb-8 relative">
					<div className="absolute -left-8 top-0 w-6 h-6 bg-blue-600 rounded-full border-4 border-white"></div>
					<div className="mb-2 text-lg font-semibold">Systems Operations Lead | Rite Aid</div>
					<div className="text-sm text-gray-600 dark:text-gray-300 mb-1">March 2023 – August 2025</div>
					<ul className="list-disc pl-6 text-base mb-2">
						<li>Supported and troubleshot POS terminals, back-office software, and inventory systems</li>
						<li>Optimized digital workflows and trained staff on technical solutions</li>
					</ul>
				</div>
			</div>
		</section>
	);
}
