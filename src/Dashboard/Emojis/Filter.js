import emojiList from "./full-emoji-list.json";

export default function Filter(searchText, maxResults) {
    const flatEmojiList = [...emojiList.Activities, ...emojiList["Animals & Nature"], ...emojiList.Flags, ...emojiList.Objects, ...emojiList["Smileys & People"], ...emojiList.Symbols, ...emojiList["Travel & Places"]];
    return flatEmojiList.filter((emoji) => {
        if (emoji.keywords.includes(searchText.toLocaleLowerCase())) return true;
        else return false;
    }).slice(0, maxResults);
}