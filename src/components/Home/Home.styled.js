import styled from 'styled-components'

export const Container = styled.div`
    padding-top: 52px;
    max-width: 100%;
`;

export const Content = styled.div`
    max-width: 1128px;
    margin-left: auto;
    margin-right: auto;
`;

export const Section = styled.section`
    min-height: 50px;
    padding: 16px;
    box-sizing: content-box;
    text-align: center;
    text-decoration: underline;
    display: flex;
    justify-content: center;

    h5 {
        color: #0a66c2;
        font-size: 14px;
        a {
            font-weight: 700;
        }
    }

    p {
        font-size: 14px;
        color: #434649;
        font-weight: 600;
    }

    @media (max-height: 768px) {
        flex-direction: column;
        padding: 0 5px;
    }
`;
