import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-areas: 'leftside middleside rightside';
    grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
    column-gap: 25px;
    row-gap: 25px;
    grid-template-rows: auto;
    margin: 25px 0;

    @media(max-width: 768px) {
        display: flex;
        flex-direction: column;
        padding: 0 5px;
    }
`;