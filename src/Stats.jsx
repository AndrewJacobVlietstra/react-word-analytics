export default function Stats({ textStats }) {
	return (
		<section className="stats">
			<Stat statNumber={textStats.numberOfWords} label="Words" />
			<Stat statNumber={textStats.numberOfCharacters} label="Characters" />
			<Stat statNumber={textStats.instagramCharactersLeft} label="Instagram" />
			<Stat statNumber={textStats.facebookCharactersLeft} label="Facebook" />
		</section>
	);
}

function Stat({ statNumber, label }) {
	return (
		<section className="stat">
			<span
				className={`stat__number ${statNumber < 0 && "stat__number--limit"}`}
			>
				{statNumber}
			</span>
			<h2 className="second-heading">{label}</h2>
		</section>
	);
}
