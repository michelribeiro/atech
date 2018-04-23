import React, {Component} from "react";
import {
    FormGroup,
    ControlLabel,
    FormControl
} from "react-bootstrap";

require('./formFilter')


class FormFilter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="form-filter">
                <form>
                    <FormGroup controlId="formControlsSelect" bsSize="large">
                        <ControlLabel>Ano</ControlLabel>
                        <FormControl componentClass="select" placeholder="select">
                            <option value="select">Nenhum</option>
                            <option value="2017">2017</option>
                        </FormControl>
                    </FormGroup>
                    <FormGroup controlId="formControlsSelect" bsSize="large">
                        <ControlLabel>Ordenar por</ControlLabel>
                        <FormControl componentClass="select" placeholder="select">
                            <option value="select">Popularidade (maior)</option>
                            <option value="2017">2017</option>
                        </FormControl>
                    </FormGroup>
                    <FormGroup controlId="formControlsSelect" bsSize="large">
                        <ControlLabel>Gêneros</ControlLabel>
                        <FormControl type="text" placeholder="Filtrar por gêneros" />
                    </FormGroup>
                    <FormGroup controlId="formControlsSelect" bsSize="large">
                        <ControlLabel>Palavras-chave</ControlLabel>
                        <FormControl type="text" placeholder="Filtrar por gêneros..." />
                    </FormGroup>
                </form>
            </div>
        )
    }
}

export default FormFilter;