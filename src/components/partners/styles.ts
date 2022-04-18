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
            width: 24%;
            height: 10rem;
            display: flex;

            align-items: center;
            margin: 0 0.5rem;
            padding: 0 1rem;
            border-radius: 0.6rem;

           
            img{
                height:100%;
                width: 100%;

                object-fit: contain;
            }
        }
    }
`