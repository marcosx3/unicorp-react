import './servicesComponent.css'
import md from '../img/md.jpg';
import csites from '../img/csites.jpg';
import criacoes from "../img/criacoes.jpg";
function ServicesComponent() {

    return (
        <section className="container-fluid services" id="services">

        <div className="card card-services">
            <img src={criacoes} className="card-img-top" alt="campanhas publicitarias"/>
            <div className="card-body">
              <h5 className="card-title">Campanhas Publicitárias </h5>
              <h6 className="card-subtitle mb-2 text-muted">Impressos, VT's e Jingles</h6>
              <p className="card-text">Se você está precisando de criação de algum material em específico, conte com a nossa equipe de profissionais. Eles farão toda campanha publicitária. VT, outdoor, folder, anúncio e muito mais pela sua empresa no mais alto padrão de qualidade.</p>
            </div>
          </div>

          <div className="card card-services">
            <img src={md}className="card-img-top" alt="marketing digital"/>
            <div className="card-body">
              <h5 className="card-title">Marketing Digital</h5>
              <h6 className="card-subtitle mb-2 text-muted">Administração de Redes Sociais</h6>
              <p className="card-text">Como agência de publicidade aplicamos estratégias nos meios digitais para que o seu negócio seja visto por milhões de usuário. O Brasil é o 5º páís mais conectado do mundo. Por este motivo, o seu negócio não pode ficar fora do mercado digital.</p>
            </div>
          </div>

          <div className="card card-services">
            <img src={csites} className="card-img-top" alt="criacao de sites"/>
            <div className="card-body">
              <h5 className="card-title">Criação de Sites</h5>
              <h6 className="card-subtitle mb-2 text-muted">Sites Administráveis</h6>
              <p className="card-text">Agora você pode administrar seu site quando e como quiser. E melhor ainda pois você pode pagar por este serviço, pois desenvolvemos de forma que seu site sempre esteja atualizado com seus últimos produtos, integrado com as redes sociais, tudo isso agora é possível para você e sua empresa.</p>
            </div>
          </div>
    </section>
    )
}
export default ServicesComponent;