import { useState } from 'react';

const StudentBanner = () => {
	const [dismissed, setDismissed] = useState(false);

	if (dismissed) return null;

	return (
		<div className="relative z-50 w-full bg-amber-500 text-black text-[0.8125rem] font-medium">
			{/* Changed gap to gap-4 to separate icon, text, and button */}
			<div className="max-w-[1600px] mx-auto px-4 py-2.5 flex items-center gap-4">
                
                {/* 1. Icon on the Left */}
				<svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="shrink-0" aria-hidden="true">
					<circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2" />
					<path d="M12 8v4m0 4h.01" stroke="black" strokeWidth="2.2" strokeLinecap="round" />
				</svg>

                {/* 2. Text in the Middle (flex-1 makes it expand, text-center centers it) */}
				<span className="flex-1 text-center leading-5">
					<strong>Student Project &mdash; Not affiliated with Coinbase.</strong>{' '}
					This is a demo built for academic purposes. Please do not enter real personal information.
				</span>

                {/* 3. Button on the Right */}
				<button
					onClick={() => setDismissed(true)}
					aria-label="Dismiss banner"
					className="shrink-0 rounded-full hover:bg-black/10 transition-colors p-1 leading-none"
				>
					<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
						<path d="M18 6L6 18M6 6l12 12" />
					</svg>
				</button>
			</div>
		</div>
	);
};

export default StudentBanner;