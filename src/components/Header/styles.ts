import styled from "styled-components";

type HeaderProps = {
    isMenuVisible: boolean;
}

export const Container = styled.header<HeaderProps>`
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;

    div.logo-container {
        width: 192px;
        height: 32px;
        position: relative;
    }

    nav.desktop-menu ul {
        li {
            display: inline-block;
            margin-left: 1rem;

            a {
                color: #fff;
            }
        }
    }

    nav.mobile-menu {
        display: none;

        position: absolute;
        top: 0;
        right: 0;
        /* width: 100vh; */
        /* height: 100vh; */
        /* background-color: rgba(0,0,0,0.8); */
        padding: 1rem;

        ul {
            margin-top: 4.5rem;
            width: 300px;
            margin-left: auto;
            background-color: #fff;
            position: relative;
            border-radius: 0.5rem;
            display: ${props => props.isMenuVisible ? 'block' : 'none'};

            li {
                padding: 1rem;
            
                a {
                    color: var(--very-dark-gray);
                }
            }
        }
    }
    
    .menu-bar {
        color: #fff;
        font-size: 2rem;
        position: absolute;
        top: 3rem;
        right: 1rem;
        cursor: pointer;
    }

    

    @media (max-width: 530px){
        nav.desktop-menu ul {
            display: none;
        }

        nav.mobile-menu {
            display: block;
        }
    }
`;