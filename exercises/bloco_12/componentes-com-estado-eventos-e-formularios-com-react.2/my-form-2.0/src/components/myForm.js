import React from 'react';
import Curriculo from './Curriculo'

const states = ['Rio de Janeiro', 'Minas Gerais', 'Amapá', 'Amazonas', 'São Paulo', 'Ceará', 'Distrito Federal'];

class MyForm extends React.Component {

  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)
    this.validateField = this.validateField.bind(this)

    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      countryState: '',
      checkalert: '',
      submitted: false,
      addressType: '', 
      resume: '',
      role: '',
      roleDescription: '', 
      validate: '',
    }
  }

  
  handleChange({ target }) {
    let { name } = target;
    let value = target.type === 'checkbox' ? target.checked : target.value;

    this.validateField(name, value)

    if (name === 'name') value = value.toUpperCase();
    if (name === 'address') value = this.validateAddress(value);

    this.setState({
      [name]: value,
    });
    
  }

  validateAddress = address => address.replace(/[^\w\s]/gi, '')

  onBlurHandler = event => {
    let { name, value } = event.target;

    if (name === 'city') value = value.match(/^\d/) ? '' : value;

    this.setState({
      city: value,
    });

  }

  validateField(fieldName, value) {
    switch (fieldName) {
      case 'email':
        const isValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{3})$/i)
        return isValid ? this.setState({ validate: '' }) : this.setState({ validate: 1 });
      default:
        break;
    }
    return '';
  }

  sendForm = (event) => {
    event.preventDefault();

    if(this.state.validate === '') {
      this.setState({ submitted: true }) 
    } else {
      alert('Email inválido.')
    }
  };

  resetForm = () => { 
    this.setState({
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      countryState: '',
      checkalert: '',
      submitted: false,
      addressType: '', 
      resume: '',
      role: '',
      roleDescription: '', 
    }) 
  };

  render() {
      return (
        <form onSubmit={this.sendForm}>
          <fieldset>
            <legend>Dados pessoais</legend>
            <div className="container">
              Nome:
              <input
                type="text"
                name="name"
                value={this.state.name}
                maxLength="40"
                required
                onChange={this.handleChange}
              />
            </div>
            <div className="container">
              Email:
              <input
                type="text"
                name="email"
                maxLength="50"
                required
                onChange={this.handleChange}
              />
            </div>
            <div className="container">
              CPF:
              <input
                type="text"
                name="cpf"
                maxLength="11"
                required
                onChange={this.handleChange}
              />
            </div>
            <div className="container">
              Endereço:
              <input
                type="text"
                name="address"
                value={this.state.address}
                maxLength="200"
                required
                onChange={this.handleChange}
              />
            </div>
            <div className="container">
              Cidade:
              <input
                type="text"
                name="city"
                value={this.state.city}
                maxLength="28"
                required
                onBlur={this.onBlurHandler}
                onChange={this.handleChange}
              />
            </div>
            <div className="container">
              Estado:
              <select
                name="countryState"
                required
                onChange={this.handleChange}
                defaultValue=""
              >
                <option value="">Selecione</option>
                {
                  states.map((value, key) => (
                    <option key={ key }>{ value }</option>
                  ))
                }
              </select>
            </div>
            <div className="container">
              <label htmlFor="house">
                <input
                  type="radio"
                  id="house"
                  name="addressType"
                  value="Casa"
                  required
                  onChange={this.handleChange}
                />
                Casa
              </label>
              <label htmlFor="apart">
                <input
                  type="radio"
                  id="apart"
                  name="addressType"
                  value="Apartamento"
                  required
                  onChange={this.handleChange}
                />
                Apartamento
              </label>
            </div>
          </fieldset>
          <fieldset>
            <legend>Dados último emprego</legend>
              <div className="container">
                Resumo do currículo:
                <textarea
                  type="text"
                  name="resume"
                  maxLength="1000"
                  required
                  onChange={this.handleChange}
                />
              </div>
              <div className="container">
                Cargo:
                <textarea
                  type="text"
                  name="role"
                  maxLength="40"
                  required
                  onChange={this.handleChange}
                  onMouseEnter={() => {
                    if (this.state.checkalert === '') {
                      alert('Preencha com cuidado esta informação.');

                      this.setState({
                        checkalert: 1,
                      });
                    }
                  }}
                />
              </div>
              <div className="container">
                Descrição do cargo:
                <textarea
                  type="text"
                  name="roleDescription"
                  maxLength="500"
                  required
                  onChange={this.handleChange}
                />
              </div>
          </fieldset>
            <button type="submit">Enviar</button>
            <input
              type="reset"
              onClick={ this.resetForm }
              value="Limpar"
            />
            { this.state.submitted && <Curriculo currentState={ this.state } /> }
        </form>
      );
  }
}

export default MyForm;