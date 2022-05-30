import React, { useState } from "react";
import BookDetails from "./BookDetails";
import axios from "axios";

function App() {
    const [input, setInput] = useState("book");
    const [books, setBooks] = useState([]);

    const [openModal, setOpenModal] = useState(false);
    const [modalData, setModalData] = useState(null);

    const handleSubmit = () => {
        axios
            .get(`https://gnikdroy.pythonanywhere.com/api/book?search=${input}`)
            .then((response) => {
                setBooks(response.data.results);
                console.log(response.data.results);
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="list">
            <div className="list__bar">

                <div>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    ></input>
                    <button className="list__button" onClick={handleSubmit}>search</button>
                </div>
            </div>

            <div className="list__books">
                {books &&
                    books.map((item, id) => (
                        <div className="list__book" key={item.id}>
                            <p>{item.agents[0].person}</p>
                            <p>{(item.title).substring(0,50)}</p>
                            <img
                                src={`https://www.gutenberg.org/cache/epub/${item.id}/pg${item.id}.cover.small.jpg`}
                                alt="thumbnail"
                            />
                            <button
                                className="list__button"
                                onClick={() => {
                                    setModalData(item);
                                    setOpenModal(true);
                                    console.log(item);
                                }}
                            >
                                Add to Favourites
                            </button>
                            <button
                                className="list__button"
                                onClick={() => {
                                    console.log(item);
                                }}
                            >
                                Add to my shelf
                            </button>
                        </div>
                    ))}
            </div>

            {openModal && (
                <BookDetails
                    closeModal={() => setOpenModal(true)}
                    key={modalData.id}
                    id={modalData.id}
                    author={modalData.agents[0].person}
                    title={modalData.title}
                    description={`https://www.gutenberg.org/files/${modalData.id}/${modalData.id}-h/${modalData.id}-h.htm`}
                    uri={`https://www.gutenberg.org/cache/epub/${modalData.id}/pg${modalData.id}.cover.medium.jpg`}
                />
            )}
        </div>
    );
}

export default App;
