import React, { useContext, useState } from "react";
import { ThemeContext } from "../Contexts/ThemeContext";
import { CharacterContext } from "../Contexts/CharacterContext";
import { Modal } from "react-bootstrap";
import CharacterCard from "./CharacterCard";

const Search = () => {
  const { theme } = useContext(ThemeContext);
  const { characters } = useContext(CharacterContext);
  const [searchText, setSearchText] = useState("");
  const [show, setShow] = useState(false);
  const [modalContent, setModalContent] = useState({ character: false });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchText(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let regex = new RegExp(searchText, "i");
    let match = characters.find((character) => character.name.match(regex));
    setModalContent({ ...modalContent, character: match });
    handleShow();
  };

  return (
    <div
      className={`search-container ${
        theme.isDarkTheme ? theme.dark : theme.light
      }`}
    >
      <form onSubmit={handleSubmit}>
        <input
          className="search-bar"
          type="text"
          placeholder="Enter character name..."
          autoComplete="off"
          value={searchText}
          onChange={handleChange}
        />
      </form>
      <Modal show={show} onHide={handleClose}>
        {modalContent.character ? (
          <CharacterCard character={modalContent.character} />
        ) : (
          <Modal.Body>No match found!</Modal.Body>
        )}
      </Modal>
    </div>
  );
};

export default Search;
