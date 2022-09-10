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
                /* border: 1px solid gray; */
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

    @media (max-width: 1000px){
        figure {
            div.image {
                width: 22rem;
                height: 16rem;
            }
            div.text {
                width: 22rem;
                height: 16rem;
                padding: 1rem 1rem;

                h1 {
                    font-size: 2.5rem;
                }

                p {
                    font-size: 1rem;
                }
            }
        }
    }

    @media (max-width: 720px){

        figure {
            flex-direction: column;

            div.image, div.text {
                margin: 0;

                width: 35rem;
                height: 25rem;
            }

            div.text {
                margin: 2rem 0;
                padding: 1rem;
                text-align: center;

                h1 {
                    font-size: 4rem;
                    margin-bottom: 2rem;
                }

                p {
                    font-size: 1.15rem;
                }
            }
        }
    }

    @media (max-width: 540px){
        figure {
            width: 100%;

            div.image {
                width: 100%;
            }

            div.text {
                width: 100%;
            }
        }
    }
`;