import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '#F5DE03',
  };

  const URL_TOP = window.location.hostname.includes('localhost')
    ? 'http://localhost:8080/categorias/'
    : 'https://alemflix.herokuapp.com/categorias';

  const { values, handleChange, clearForm } = useForm(valoresIniciais);
  const [categorias, setCategorias] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch(URL_TOP)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });
  }, []);

  async function handleNewcategoria(e) {
    e.preventDefault();

    try {
      await fetch(URL_TOP, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
    } catch (err) {
      // eslint-disable-next-line no-alert
      alert('Erro ao cadastrar caso, tente novamente');
    }
    setCategorias([...categorias, values]);
    history.push('/');
    clearForm();
  }

  async function handleRemovecategoria(e) {
    const target = String(e.target.getAttribute('target'));
    e.preventDefault();
    const URL_TOP_ID = `${URL_TOP}/${target}`
    try {
      await fetch(URL_TOP_ID, {
        method: 'DELETE',
      });
    } catch (err) {
      // eslint-disable-next-line no-alert
      alert('Erro ao deletar caso, tente novamente');
    }
    setCategorias([...categorias, values]);
    history.push('/');
    clearForm();
  }

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.titulo}
      </h1>

      <form onSubmit={handleNewcategoria}>

        <FormField
          label="Titulo da Categoria"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.titulo}`}>
            {`${categoria.titulo} / ${categoria.descricao} / ${categoria.id} `}
            <button
              target={categoria.id}
              onClick={handleRemovecategoria}
            >
              Remover
            </button>
          </li>
        ))}
      </ul>

      <Button>
        <Link to="/">
          Go Home
        </Link>
      </Button>
    </PageDefault>
  );
}

export default CadastroCategoria;
