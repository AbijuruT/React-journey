import { useState } from 'react'
import { EXAMPLES } from '../data';
import Section from './Section';
import TabButtons from './TabButtons';
export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();
	function handleSelect(selectedBtn) {
		setSelectedTopic(selectedBtn);
		console.log(selectedTopic);
	}
  return (
		<Section title='Examples' id='examples'>
			<menu>
				<TabButtons
					isSelected={selectedTopic === 'components'}
					onClick={() => handleSelect('components')}>
					Components
				</TabButtons>
				<TabButtons
					isSelected={selectedTopic === 'jsx'}
					onClick={() => handleSelect('jsx')}>
					JSX
				</TabButtons>
				<TabButtons
					isSelected={selectedTopic === 'props'}
					onClick={() => handleSelect('props')}>
					Props
				</TabButtons>
				<TabButtons
					isSelected={selectedTopic === 'state'}
					onClick={() => handleSelect('state')}>
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
		</Section>
	);
}