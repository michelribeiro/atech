import React, {Component} from "react";
import {
    FormGroup,
    ControlLabel,
    FormControl
} from "react-bootstrap";
// import Select from 'react-select';

require('./formFilter-style')


class FormFilter extends Component {
    constructor(props) {
        super(props);
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Selected: ${selectedOption.label}`);
    }
    getSelectedFilter(e){
        let options = e.target.options;
        let value = [];
        for (let i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
            value.push(options[i].value);
            }
        }
        this.props.filterGenre(value)
    }
    render() {
        const {genres, selectedOption} = this.props;
        
        return (
            <div className="form-filter">
                {}
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
                        <FormControl onChange={this.getSelectedFilter.bind(this)} componentClass="select" multiple>
                            {
                                genres.genres.map((item, key) => {
                                    return (
                                        <option value={item.id} key={key}>{item.name}</option>
                                    )
                                })
                            }
                        </FormControl>
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