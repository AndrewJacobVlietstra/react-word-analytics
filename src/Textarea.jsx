import { useState } from "react";
import Warning from "./Warning";

export default function Textarea({ text, setText }) {
	const [warningText, setWarningText] = useState("");

	const handleTextChange = (e) => {
		let textValue = e.target.value;

		if (textValue.includes("<script>")) {
			textValue = textValue.replace("<script>", "");
			setWarningText("No '<script>' tag allowed!");
		} else if (textValue.includes("@")) {
			textValue = textValue.replace("@", "");
			setWarningText("No '@' symbol allowed!");
		} else {
			warningText && setWarningText("");
		}
		return setText(textValue);
	};

	return (
		<div className="textarea">
			<textarea
				onChange={handleTextChange}
				value={text}
				placeholder="Enter your text..."
				spellCheck="false"
			/>
			<Warning warningText={warningText} />
		</div>
	);
}
