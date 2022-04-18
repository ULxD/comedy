import { Container } from './styles';

export function Header(){

    return(
        <Container>
            <div className="container-box">
                <img src="./logo-header.svg" alt="" />
                <nav>
                    <div className="nav-item">Home</div>
                    <div className="nav-item">Sobre</div>
                    <div className="nav-item">Agenda</div>
                    <div className="nav-item">Shows</div>
                    <div className="nav-item">Parceiros</div>
                    <div className="nav-item">Contato</div>
                </nav>

            </div>
        </Container>
    )
}