import React from "react";

const Genres = () => {
  // handles the genre change
  const handleClick = event => {
    event.persist();
    let tab = event.target.parentNode;
    removeActiveTab();
    addActiveTab(tab);
  };

  const removeActiveTab = () => {
    const tabs = document.querySelectorAll(".tabs li");
    tabs.forEach(tab => {
      tab.classList.remove("is-active");
    });
  };

  const addActiveTab = tab => {
    tab.classList.add("is-active");
  };

  const ListOfGenres = () => {
    let list = [
      "All Genres",
      "Business",
      "Science",
      "Fiction",
      "Philosophy",
      "Biography"
    ];

    // Sets the initial active class to All Genres
    let genreClass = "is-active genre-tab";

    return list.map((genre, idx) => {
      if (idx !== 0) {
        genreClass = "genre-tab";
      }
      return (
        <li
          className={genreClass}
          onClick={event => {
            event.preventDefault(), handleClick(event);
          }}
        >
          <a href="">{genre}</a>
        </li>
      );
    });
  };
  return (
    <div className="genre-nav-container">
      <h4>Popular by Genre</h4>
      <nav className="tabs">
        <ul>
          <ListOfGenres />
        </ul>
      </nav>
    </div>
  );
};

export default Genres;
