import { PureComponent } from "react";
import "./EmojiResultRow.css";

export default class EmojiResultRow extends PureComponent {
    render() {
        const { emoji, description } = this.props;
        const codePointHex = emoji.codePointAt(0).toString(16);
        const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;

        return (
            <div className="component-emoji-result-row copy-it" data-clipboard-text={emoji} >
                <img src={src} alt={description} />
                <span className="description">{description}</span>
                <span className="INFO">Click to Copy</span>
            </div>
        )
    }
}