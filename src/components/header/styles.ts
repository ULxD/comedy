import styled from 'styled-components';

export const Container = styled.div`
    height: 9vh;
    width: 100%;
    background-color: #000;

    .container-box{
        width: 100%;
        height: 100%;
        max-width: 85rem;
        margin: 0 auto;

        display: flex;
        justify-content: space-between;
        align-items: center;

        img{
            object-fit: contain;
            width: 14rem;
            height: 100%;
        }

        nav{
            display: flex;
            
            .nav-item{
                width: 7rem;
                color: #ffffff;
                font-size: 1.05rem;
                font-weight: 600;
                margin: 0 0.3rem;
                text-align: center;
                cursor: pointer;
                transition: filter 0.5s;

                &:hover{
                    filter: brightness(0.7);
                }
            }
        }
    }
`