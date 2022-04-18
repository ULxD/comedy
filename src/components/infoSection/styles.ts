import styled from 'styled-components';

export const Container = styled.div`
    height: 40vh;
    background: #ffffff;

    display: flex;
    align-items: center;
    justify-content: center;

    .banner{
        width: 90%;
        max-width: 85rem;
        height: 80%;
        background-color: #BB331B;

        display: flex;
        justify-content: center;
        border-radius: 0.8rem;

        img{
            height: 100%;
            width: 15rem;
            object-fit: contain;
        }

        .infos{
            color: #fff;
            height: 100%;

            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;

            h1{
                text-align: center;
                font-weight: 400;
            }

            h4{
                text-align: center;
                font-family: 'Roboto';
                font-weight: 400;
            }
        }

    }

`