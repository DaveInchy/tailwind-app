import React from 'react';

import Wrapper, { Container, Section } from '../@Components/Modules/Containers';
import Phone from '../@Components/Phone';

export default class Main extends React.Component {
    render() {
        return (
            <>
                <Section class="bg-light">
                    <Container class="relative h-screen overflow-hidden">
                        <Wrapper class="absolute top-0 w-full p-5">
                            <h1 class="text-4xl text-center">TailwindCSS & HeadlessUI</h1>
                        </Wrapper>
                        <Wrapper class="flex flex-col items-center justify-center h-screen">
                            <Phone/>
                        </Wrapper>
                    </Container>
                </Section>
            </>
        );
    }
}