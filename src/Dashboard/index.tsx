import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../assets/logo.svg';
import { Title, Form, Repository } from './styled';

const Dashboard: React.FC = () => {
  return (
    // eslint-disable-next-line react/jsx-wrap-multilines
    <>
      <img src={logoImg} alt="GitHub Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pequisar</button>
      </Form>

      <Repository>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/72585274?s=460&u=00d8532d63251b36aaab5f81fd1c7422603fa031&v=4"
            alt="Joel Luis"
          />
        </a>

        <div>
          <strong>Joel Luis Rockseat</strong>
          <p>Curso GoStack Botcamp</p>
        </div>
        <FiChevronRight size={20} />
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/72585274?s=460&u=00d8532d63251b36aaab5f81fd1c7422603fa031&v=4"
            alt="Joel Luis"
          />
          <FiChevronRight size={20} />
        </a>
      </Repository>
    </>
  );
};

export default Dashboard;
