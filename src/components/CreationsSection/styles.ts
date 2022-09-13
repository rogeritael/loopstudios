import styled from "styled-components";

export const Container = styled.section`
    padding: 1rem 0;

    div.title {
        display: flex;
        justify-content: space-between;

        h1 {
            font-size: 2.5rem;
            font-weight: normal;
            text-transform: uppercase;
            font-family: 'Josefin Sans', sans-serif;
        }
        
    }

    .card-container {
        padding: 3rem 0;
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }

    button.mobile-btn {
        margin-left: 50%;
        transform: translateX(-50%);
        margin-bottom: 2rem;
        height: 3.5rem;
        width: 13rem;
        font-size: 1.5rem;
        display: none;
    }

    @media (max-width: 450px){
        div.title {
            display: flex;
            justify-content: center;

            button {
                display: none;
            }
        }

        button.mobile-btn {
            display: block;
        }
    }
`;