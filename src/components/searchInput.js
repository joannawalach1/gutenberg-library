import React from 'react'

const SearchInput = () => {
    return (
        <div className="search">
            <div className="search__wrapper">
                <div className="search__input">
                    <label htmlFor="text">Text</label>
                    <input className="search__input" type="text" name="text"></input>
                </div>
                <div className="search__radio">
                <fieldset>
                    <legend>Choose language: </legend>
                    <div>
                        <input type="radio" id="html" name="language" value="english" defaultChecked />
                        <label htmlFor="english">English</label>  
                    </div>
                    <div> 
                        <input type="radio" id="html" name="language" value="polish" />
                        <label htmlFor="polish">Polish</label>
                    </div>
                    <div> 
                        <input type="radio" id="html" name="language" value="deutsch" />
                        <label htmlFor="deutsch">Deutsch</label>
                    </div>
                </fieldset></div>
            </div></div>
    )
}
export default SearchInput