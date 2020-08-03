import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import uuid from 'uuid';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import {
  Table, Titulo, Container, Conteudo,
} from '../../../components/Tabela';
import './categoria.css';

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
    const URL_TOP_ID = `${URL_TOP}/${target}`;
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

        <Button className="cadastro">
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}
      <Table>
        <Container>
          <Titulo>Titulo</Titulo>
          <Titulo>Descrição</Titulo>
          <Titulo>Editar</Titulo>
          <Titulo className="ultimo">Remover</Titulo>
        </Container>
        {categorias.lenght === 0 && <div>Loading...</div>}
        {categorias.map((categoria) => (
          <Container key={uuid()}>
            <Conteudo>{categoria.titulo}</Conteudo>
            <Conteudo>{categoria.descricao}</Conteudo>
            <Conteudo />
            <Conteudo>
              <Conteudo.Paragrafo
                target={categoria.id}
                onClick={handleRemovecategoria}
              >
                Remover
              </Conteudo.Paragrafo>
            </Conteudo>
          </Container>
        ))}
      </Table>

      <div className="IrHome">
        <Button>
          <Link to="/">
            Go Home
          </Link>
        </Button>
      </div>
    </PageDefault>
  );
}

export default CadastroCategoria;
