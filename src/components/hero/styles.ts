import styled from 'styled-components';

export const Container = styled.div`
    height: 92vh;
    background-color: #000;
    width: 100%;

    .container-box{
        width: 100%;
        height: 100%;
        max-width: 85rem;
        margin: 0 auto;

        display: flex;
        justify-content: space-between;
        align-items: center;

        .infos{
            width: 50%;
            height: 50%;
            display: flex;
            flex-direction: column;
            color: #ffffff;
            

            h1{
                font-size: 2.1rem;
            }

            p{
                font-size: 1.1rem;
                font-weight: 400;
            }

            button{
                height: 4rem;
                width: 20rem;
                border: none;
                background-color: #BB331B;
                color: #ffffff;
                font-size: 1.4rem;
                font-weight: 600;
                border-radius: 0.6rem;
                margin-top: 2rem;
                

                &:hover{
                    filter: brightness(0.8);
                }
            }
        }

        .banner{
            width: 50%;
            height: 50%;

            img{
                height:100%;
                width:100%;
                object-fit: contain;
            }

        }
    }
`