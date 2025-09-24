# 🌐 Integração Front-End e Back-End

[🔗 Projeto Live](https://integracao-backend-frontend.vercel.app/)

## 📝 Overview

Este projeto consiste em uma aplicação simples de integração entre **Frontend** (HTML5, CSS3 e JavaScript) e **Backend** (Java com Spring Boot). O frontend envia e recebe dados do backend por meio de endpoints **GET** e **POST**, exibindo respostas diretamente na interface de usuário de forma responsiva e moderna.  

A aplicação conta ainda com uma **hero image**, efeitos de opacidade, botões estilizados, responsividade para dispositivos móveis e um **footer com ícones sociais**. O backend está hospedado no **Render**, enquanto o frontend está no **Vercel**, permitindo uma arquitetura distribuída moderna.

## 🤔 Por que este projeto?

O objetivo principal foi ter contato prático com tecnologias novas para mim, como **Docker, Spring Boot e Render** e integração completa entre front e back-end.  

Além disso, o projeto permitiu aprender sobre:

- 🏗 Estrutura de projetos Java com Spring Boot  
- 🔄 Configuração de endpoints RESTful (GET/POST)  
- 🎨 Boas práticas de CSS moderno e responsivo  
- ☁️ Deploy de aplicações front-end e back-end separadas  
- 🐳 Uso de **Docker** para containerização  

Trata-se de um projeto simples, mas que exigiu dedicação para entender como cada tecnologia se comunica, como manter a aplicação modular, e como preparar para deploy real.

## 📂 Organização do Projeto
```
root/
├─ frontend/
│ ├─ css/style.css
│ ├─ img/
│ │ ├─ icons/
│ │ ├─ favicon.ico
│ │ └─ arte.jpg
│ ├─ js/app.js
│ └─ index.html
├─ src/
│ └─ main/
│ ├─ java/
│ │ ├─ controller/APIController.java
│ │ ├─ IntegracaoApplication.java
│ │ └─ ServletInitializer.java
│ └─ resources/
│ ├─ static/
│ ├─ templates/
│ └─ application.properties
├─ Dockerfile
├─ pom.xml
├─ mvnw / mvnw.cmd
├─ help.md
├─ license
└─ reademe.md
```

## 🛠 Tecnologias Utilizadas

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)  
- **Backend:** Java 21, Spring Boot  
- **Containerização:** Docker  
- **Deploy Frontend:** Vercel  
- **Deploy Backend:** Render  
- **Controle de Versão:** Git / GitHub  

## ⚙️ Como Rodar

Se alguém quiser testar o projeto localmente, siga os passos:

### 🖥 Backend

```bash
# Entrar na pasta do projeto
cd src/main/java

# Build com Maven
mvn clean package

# Rodar a aplicação Spring Boot
java -jar target/integracao-0.0.1-SNAPSHOT.jar
```

### 🌐 Frontend

- Abrir `frontend/index.html` diretamente no navegador ou rodar via Vercel.

### 🐳 Com Docker

```bash
# Build do container
docker build -t integracao-app .

# Rodar o container
docker run -p 8080:8080 integracao-app
```
- O backend estará disponível em `http://localhost:8080` e o frontend em `index.html` localmente ou via Vercel.

## 👨‍💻 Sobre Mim
* 🎓 Estudante de Ciência da Computação | 5º Semestre
* 💻 Aspirante a Full Stack Developer
* 🌍 Morando na Alemanha, vindo do Rio de Janeiro (Brasil)

## 📫 Conecte-se Comigo

- 🌐 [Portfolio](https://my-portfolio-flame-mu-xxis8wes4p.vercel.app/)  
- 🔗 [LinkedIn](https://www.linkedin.com/in/piter-gomes-4a39281a1/)  
- ✉️ [Email](mailto:piterg.bio@gmail.com)  
- 🐙 [GitHub](https://github.com/pitercoding)  

## 📚 Aprendizados

- ⚙️ Como criar uma **API RESTful** com Spring Boot  
- 🎨 Boas práticas de **frontend moderno e responsivo**  
- 🔄 Integração real entre **frontend e backend separados**  
- 🌍 Configuração de **CORS** e comunicação entre domínios diferentes  
- ☁️ Deploy em **Render** e **Vercel**, incluindo gerenciamento de variáveis de ambiente  
- 🐳 Uso de **Docker** para build e deploy consistentes  

## 🚀 Deploy

- 🔹 **Backend:** [Render](https://render.com/)  
- 🔹 **Frontend:** [Vercel](https://vercel.com/)

## 🤝 Contribuições

Este projeto é inicial e pessoal. Contribuições são bem-vindas via **pull request**. Para bugs ou melhorias, abra **issues** no repositório GitHub.

## 📝 Licença

Este projeto está licenciado sob a **MIT License** – veja o arquivo [LICENSE](./license) para detalhes.

