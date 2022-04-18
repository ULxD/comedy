import { Container } from "./styles";

export function NextShows(){

    return(
        <Container>
            <h1>Próximas Atrações</h1>
            <ul className="next-list">
                <li className="next-item">
                    <img src="/banner.png" alt="" />

                </li>

                <li className="next-item">
                    <img src="/banner2.png" alt="" />

                </li>

                <li className="next-item">
                    <img src="/banner3.png" alt="" />

                </li>

                <li className="next-item">
                    <img src="/banner4.png" alt="" />
                </li>
                

            </ul>

        </Container>
    )
}