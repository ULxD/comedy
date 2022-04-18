import styled from 'styled-components';

export const Container = styled.div`
    height: 60vh;
    background-color: #ffffff;
    width: 100%;

    .container-box{
        width: 100%;
        height: 100%;
        max-width: 85rem;
        margin: 0 auto;

        display: flex;
        justify-content: space-between;
        align-items: center;

        img{
            width: 50%;
            height: 100%;
            object-fit: contain;
        }

        .details{
            width: 50%;

            h4{
                color: #BB331B;
                font-weight: 400;
            }

            h1{
                font-size: 2rem;
                font-weight: 400;

            }

            p{
                width: 70%;
                line-height: 1.3rem;
            }
        }

    }
`