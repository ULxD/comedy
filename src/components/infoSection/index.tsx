import { Container } from "./styles";
import { BiAccessibility } from 'react-icons/bi';
import { MdOutlineAir, MdOutlineFastfood } from 'react-icons/md';

export function InfoSection(){


    return(
        <Container>

            <div className="banner">
                
                <div className="infos">
                    <h1>Venha se divertir com a sua familia!</h1>
                    <h4>Todas as quintas-feiras no bier food</h4>
                </div>
            </div>
        
        </Container>
    )
}