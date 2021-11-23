import React from "react";
import "./Search.css";

class Search extends React.Component {
  state = {
    search: "",
    type: "all",
  };

  handleKey = (e) => {
    if (e.key === "Enter") {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  };

  handlerFilter = (e) => {
    this.setState(
      () => ({ type: e.target.dataset.type }),
      () => {
        this.props.searchMovies(this.state.search, this.state.type);
      }
    );
  };
  render() {
    return (
      <>
        <div className="search">
          <input
            type="search"
            placeholder="Type movie here"
            value={this.state.search}
            onChange={(e) => this.setState({ search: e.target.value })}
            onKeyDown={this.handleKey}
          />
          <button
            className="btn"
            onClick={() =>
              this.props.searchMovies(this.state.search, this.state.type)
            }
          >
            Search
          </button>
        </div>
        <div className="radio">
          <input
            type="radio"
            name="type"
            data-type="all"
            checked={this.state.type === "all"}
            onChange={this.handlerFilter}
          />
          <span>All</span>
          <input
            type="radio"
            name="type"
            data-type="movie"
            checked={this.state.type === "movie"}
            onChange={this.handlerFilter}
          />
          <span>Movies Only</span>
          <input
            type="radio"
            name="type"
            data-type="series"
            checked={this.state.type === "series"}
            onChange={this.handlerFilter}
          />
          <span>Series Only</span>
          <input
            type="radio"
            name="type"
            data-type="game"
            checked={this.state.type === "game"}
            onChange={this.handlerFilter}
          />
          <span>Games Only</span>
        </div>
      </>
    );
  }
}

export default Search;
