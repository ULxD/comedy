import styled from 'styled-components';

export const Container = styled.div`
    height: 40vh;
    background: #ffffff;

    ul{
        height: 100%;
        width: 100%;
        max-width: 85rem;
        margin: 0 auto;

        display: flex;
        align-items: center;
        justify-content: center;

        li{
            width: 32%;
            display: flex;
            background-color: #dedede;
            align-items: center;
            margin: 0 0.5rem;
            padding: 0 1rem;
            border-radius: 0.6rem;

            .icon{
                height:100%;
                width: 20%;
                font-size: 2.5rem;
                color: #BB331B;
            }

            .details{
                width: 80%;

                h1{
                    font-size: 1.6rem;
                    color: #BB331B;
                }

                p{
                    font-size: 1rem;
                    
                }
            }
        }
    }
`