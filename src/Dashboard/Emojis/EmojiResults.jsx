import { PureComponent } from "react";
import EmojiResultRow from "./EmojiResultRow.jsx";
import ClipboardJS from "clipboard";

export default class EmojiResults extends PureComponent {
    componentDidMount() {
        this.clipboard = new ClipboardJS(".copy-it");
    }

    componentWillUnmount() {
        this.clipboard.destroy();
    }

    render() {
        const {emojiData} = this.props;
        return (
            <div className="component-emoji-results">
                {
                    emojiData.map((emoji) => (
                        <EmojiResultRow key={emoji.no} emoji={emoji.emoji} description={emoji.description} />
                    ))
                }
            </div>
        )
    }

}