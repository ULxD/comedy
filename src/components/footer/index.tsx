import { Container } from "./styles";
import { AiFillInstagram, AiFillYoutube,AiOutlineWhatsApp } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';

export function Footer(){


    return(
        <Container>
            <img src="./logo-header.svg" alt="" />
            <ul className="infos">
                <li><AiFillInstagram/></li>
                <li><BsFacebook/></li>
                <li><AiFillYoutube/></li>
                <li><AiOutlineWhatsApp/></li>

            </ul>
            <h3>Todos os direitos reservados</h3>    
        </Container>
    )
}