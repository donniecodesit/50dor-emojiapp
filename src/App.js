import { PureComponent } from "react";
import Header from "./Dashboard/Header/Header.jsx";
import SearchBar from "./Dashboard/SearchBar/SearchBar.jsx"
import EmojiResults from "./Dashboard/Emojis/EmojiResults.jsx";
import Filter from "./Dashboard/Emojis/Filter.js"

export default class App extends PureComponent {
  state = { filteredEmojis: Filter("smile", 20) }

  handleChange = (event) => {
    this.setState({
      filteredEmojis: Filter(event.target.value, 20)
    })
  }

  render() {
    return (
      <div>
        <Header />
        <SearchBar handleChange={this.handleChange} />
        <EmojiResults emojiData={this.state.filteredEmojis} />
      </div>
    )
  }
}