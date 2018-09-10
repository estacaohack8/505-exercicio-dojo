import React from 'react';
import FazerPedidoStyle from './fazerPedidoStyle';

class FazerPedido extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            nome:"",
            pedido: ""
        }
    }
    
atualizarNome = event => {
    this.setState({
        nome:event.target.value
    });
}

mudarSelect = event => {
    this.setState({pedido: event.target.value});

}

submit = () => {
    fetch('http://localhost:5000/lanches/novo', {
        method:'POST',
        body: JSON.stringify(this.state),
        headers: {'content-type':'application/json'}
}).then()
}
    render() {
        return (
            <div style={FazerPedidoStyle.divDeFora}>
            
            <form action="POST">
            <input type="text"onChange = {this.atualizarNome} value={this.state.nome} placeholder="Digite seu nominho.."></input>
            <h2>Faça seu pedido</h2>
            <select>
            <option value="Mc Melt " style={FazerPedidoStyle.divDeFora}>Mc Melt</option>
            <option value="Mc Zovo ">Mc Zovo</option>
            <option value="Mc Popai ">Mc Popai</option></select>

            <button value="enviar">Fazer pedido!</button>
            </form>
            </div>
        );
    }
}
export default FazerPedido;