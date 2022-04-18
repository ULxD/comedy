import { Container } from "./styles";
import { BiAccessibility } from 'react-icons/bi';
import { MdOutlineAir, MdOutlineFastfood } from 'react-icons/md';

export function Infos(){


    return(
        <Container>
            <ul>
                <li>
                    <div className="icon">
                        <BiAccessibility/>
                    </div>
                    <div className="details">
                        <h1>Acessebilidade</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </li>
                <li>
                    <div className="icon">
                        <MdOutlineAir/>
                    </div>
                    <div className="details">
                        <h1>Ambiente Climatizado</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </li>
                <li>
                    <div className="icon">
                        <MdOutlineFastfood/>
                    </div>
                    <div className="details">
                        <h1>Alimentação</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </li>
            </ul>

            
        </Container>
    )
}