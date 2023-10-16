import React from "react";
import { AppContainer } from "../AppContainer";
import { Container } from "./styles";

export function Cover({ children }: {children: React.ReactNode}){
    return(
        <Container>
            <AppContainer>
                {children}
                <p>
                    Proporcionando <br/>
                    experiências <br/>
                    Imersivas
                </p>
            </AppContainer>
        </Container>
    )
}