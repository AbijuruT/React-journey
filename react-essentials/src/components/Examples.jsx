import { useState } from 'react'
import { EXAMPLES } from '../data';
import TabButtons from './TabButtons';
export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();
	function handleSelect(selectedBtn) {
		setSelectedTopic(selectedBtn);
		console.log(selectedTopic);
	}
  return (
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
	);
}