import React, {Component} from "react";

class Data extends Component {

  writeNewdate() {
    let date = this.props.data.split("-")
    let months = {
      '01': 'Janeiro',
      '02': 'Fevereiro',
      '03': 'Março',
      '04': 'Abril',
      '05': 'Maio',
      '06': 'Junho',
      '07': 'Julho',
      '08': 'Agosto',
      '09': 'Setembro',
      '10': 'Outubro',
      '11': 'Novembro',
      '12': 'Dezembro'
      }
    return ""+date[2] + ' de ' +months[date[1]]+ ' de ' + date[0]
  }

  render() {

    return (
      <div>
        {this.writeNewdate()}
      </div>
    )
  }
}
export default Data;