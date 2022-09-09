import styled from "styled-components";

export const Container = styled.section`
    padding: 4rem 0;
    display: flex;
    align-items: center;
    

    figure {
        display: flex;
        flex-direction: row;
        margin: 0 auto;

        div.image {
        position: relative;
        width: 35rem;
        height: 25rem;
        margin-right: -50px;
    }

        div.text {
            width: 35rem;
            height: 25rem;
            background-color: #fff;
            margin-left: -50px;
            margin-top: 150px;
            z-index: 1;

            padding: 3rem;
        
            h1 {
                font-family: 'Josefin Sans', sans-serif;
                font-size: 4rem;
                margin-bottom: 1rem;
            }

            p {
                line-height: 150%;
                color: var(--dark-gray);
            }
        }
    }

    
`;