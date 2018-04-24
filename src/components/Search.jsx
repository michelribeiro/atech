import React from "react";
import { Glyphicon } from "react-bootstrap";
import {
    Form,
    FormGroup,
    ControlLabel,
    FormControl,
    InputGroup } from "react-bootstrap";

require("./search-style")

const Search = () => {
    return (
        <div className="searchForm">
            <form action="#">
                <FormGroup bsSize="large">
                    <InputGroup>
                        <InputGroup.Addon>
                        <Glyphicon glyph="search" />
                        </InputGroup.Addon>
                        <FormControl type="text" placeholder="Buscar por um Filme, Série ou Pessoa" />
                    </InputGroup>
                </FormGroup>
            </form>
        </div>
    )
}

export default Search;