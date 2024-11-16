import { useState } from "react";

export default function Textarea() {
	const [text, setText] = useState("");

	const handleTextChange = (e) => {
		const textValue = e.target.value;

		if (textValue.includes("<script>")) {
			console.error("You cannot use <script> in your text!");
			return setText("");
		}
		return setText(textValue);
	};

	return (
		<textarea
			onChange={handleTextChange}
			value={text}
			className="textarea"
			placeholder="Enter your text..."
			spellCheck="false"
		/>
	);
}
