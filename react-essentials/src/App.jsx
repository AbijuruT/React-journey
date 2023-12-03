import { useState } from 'react';
import { CORE_CONCEPTS } from './data';
import Header from './components/Header';
import CoreConcept from './components/CoreConcept';
import TabButtons from './components/TabButtons';
import { EXAMPLES } from './data';

function App() {
	const [selectedTopic, setSelectedTopic] = useState();
	function handleSelect(selectedBtn) {
		setSelectedTopic(selectedBtn);
		console.log(selectedTopic);
	}
	return (
		<div>
			<Header />
			<main>
				<section id='core-concepts'>
					<h2>Core Concepts</h2>
					<ul>
						{CORE_CONCEPTS.map((conceptItem) => (
							<CoreConcept key={conceptItem.title} {...conceptItem} />
						))}
						{/* <CoreConcept {...CORE_CONCEPTS[0]} />
						<CoreConcept {...CORE_CONCEPTS[1]} />
						<CoreConcept {...CORE_CONCEPTS[2]} />
						<CoreConcept
							title={CORE_CONCEPTS[3].title}
							description={CORE_CONCEPTS[3].description}
							image={CORE_CONCEPTS[3].image}
						/> */}
					</ul>
				</section>
				<section id='examples'>
					<h2>Examples</h2>
					<menu>
						<TabButtons
							isSelected={selectedTopic === 'components'}
							onSelect={() => handleSelect('components')}>
							Components
						</TabButtons>
						<TabButtons
							isSelected={selectedTopic === 'jsx'}
							onSelect={() => handleSelect('jsx')}>
							JSX
						</TabButtons>
						<TabButtons
							isSelected={selectedTopic === 'props'}
							onSelect={() => handleSelect('props')}>
							Props
						</TabButtons>
						<TabButtons
							isSelected={selectedTopic === 'state'}
							onSelect={() => handleSelect('state')}>
							State
						</TabButtons>
					</menu>
					{!selectedTopic && 'Please select a topic!'}
					{selectedTopic && (
						<div id='tab-content'>
							<h3>{EXAMPLES[selectedTopic].title}</h3>
							<p>{EXAMPLES[selectedTopic].description}</p>
							<pre>
								<code>{EXAMPLES[selectedTopic].code}</code>
							</pre>
						</div>
					)}
				</section>
			</main>
		</div>
	);
}

export default App;
