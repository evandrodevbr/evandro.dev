import Image from "next/image";
import Evandro from "../assets/image/evandro.jpeg";
import UndrawProgramming from "../assets/image/undraw_programming.png";
import Projeto from "../assets/image/projeto_arduino.jpg";
import "./index.scss";

export default function Home() {
  return (
    <div className="index-page">
      <div className="container01">
        <div className="sub-container">
          <div className="dev-name">
            <h3>Fullstack Developer</h3>
            <h1>Evandro</h1>
          </div>
          <div className="container02-paragraph">
            <p>
              Estou constantemente buscando aprender e aplicar novos
              conhecimentos para desenvolver soluções que não sejam apenas
              funcionais, mas também visualmente atraentes.
            </p>
            <button className="button-linkedin">Linkedin</button>
          </div>
        </div>
        <div className="container02-image">
          <Image
            className="dev-image"
            src={UndrawProgramming}
            alt="qualquer coisa"
          ></Image>
        </div>
      </div>
      <div className="sobre-mim">
        <h2>Sobre mim</h2>

        {/* <Image src={Evandro} className="evandro-dev"></Image> */}
        <div className="sobre-mim_paragrafo">
          <p>
            Sou Evandro Fonseca Junior, um entusiasta da tecnologia e atualmente
            estou no 3º período do curso de <b>Engenharia da Computação</b>. Com
            21 anos de idade e {""}
            <b>
              dois anos de experiência sólida no desenvolvimento de software,
            </b>{" "}
            estou comprometido com um contínuo aprimoramento.
            <br />
            Minha paixão pela tecnologia remonta à infância e hoje meu interesse
            está voltado para áreas como engenharia reversa e desenvolvimento
            mobile nas quais busco especialização. Cresci em um ambiente
            familiar conservador, onde os valores cristãos foram fundamentais na
            minha formação. Essa ética acompanha minha jornada profissional,
            guiando-me em um caminho de integridade e responsabilidade. Desde
            cedo, dediquei-me a aprimorar meu conhecimento técnico no mundo da
            tecnologia. Tenho habilidades suficientes de comunicação e
            capacidade de expressar ideias com confiança, o que me torna apto a
            falar em público com destreza. <br />
            Além do meu comprometimento profissional, reconheço a importância do
            equilíbrio entre vida pessoal e profissional. Por isso, pratico
            esportes regularmente e cuido da minha saúde, acreditando que o
            bem-estar é fundamental para o sucesso em todas as áreas da vida.
            <br />
            Estou sempre em busca de novos desafios que me permitam crescer e
            contribuir de forma significativa para o campo da tecnologia.{" "}
            <b>
              Estou entusiasmado para explorar oportunidades e fazer parte de
              projetos inovadores neste universo dinâmico e em constante
              evolução.
            </b>
          </p>
        </div>
      </div>
      <div className="container-projetos">
        <div className="projetos-titulo">
          <h2>Projeto</h2>
        </div>
        <div className="card-container">
          <a href="/" className="hero-image-container">
            <Image
              className="hero-image"
              src={Projeto}
              alt="Spinning glass cube"
            ></Image>
          </a>
          <main className="main-content">
            <h1>
              <b>Arduino Leitor de Temperatura e Humidade</b>
            </h1>
            <p>
              Projeto de um leitor de temperatura e humidade com Arduino e
              sensor DHT11.
            </p>
          </main>
          <div className="card-attribute">
            <Image src={Evandro} alt="avatar" className="small-avatar"></Image>
            <p>
              Creation of{" Evandro "}
              <span>
                <a href="#">Jules Wyvern</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
