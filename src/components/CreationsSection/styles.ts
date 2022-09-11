import styled from "styled-components";

export const Container = styled.section`
    padding: 1rem 0;
   

    div.title {
        display: flex;
        justify-content: space-between;
        align-items: center;

        h1, button {
            font-family: 'Josefin Sans', sans-serif;
            text-transform: uppercase;
        }

        h1 {
            font-size: 2.5rem;
            font-weight: normal;
        }


        button {
            height: 2rem;
            border: 2px solid #000;
            padding: 0 1.5rem;
            background-color: transparent;
            font-weight: bold;

            &:hover {
                background-color: #000;
                color: #fff;
            }
        }
    }

    .card-container {
        padding: 3rem 0;
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }
`;