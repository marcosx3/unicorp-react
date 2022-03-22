import './about.css';
function About(){

    return (
        <section className="container-fluid about" id="about">
        <div className="about-title">
            <h2>Inscreva-se agora!</h2>
              <h6>Receba novidades, dicas e muito mais.</h6>
        </div>
        <div className="about-form">
            <input type="text" placeholder="Seu email"/>
            <button className="btn btn-sucess">Cadastrar</button>
        </div>
    </section>

    )
}
export default About