import React from 'react';

const BookDetails = ({ closeModal, uri, author, title, description }) => {

    return (
        <div>
            <div >
                <button onClick={() => closeModal(false)}> X </button>
                <div>
                    <h2>{title} </h2>
                    <p>{author}</p>
                </div>
                <div>
                    <img src={uri} alt="thumbnail" />
                    <p><iframe src={description}></iframe></p>
                    <button>Add To Favourites</button>
                </div>
            </div>
        </div>
    );
}

export default BookDetails;