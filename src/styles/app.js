import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: #8B7ECE;

    display: flex;
    justify-content: center;
    align-items: center; 
`;

export const Calculator = styled.div`
    width: 441px;
    height: 773px;

    background: #2D2B38;
    border-radius: 51px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

    div.data{
        width: 351px;
        height: 162px;


        background: transparent;
        border: 1px solid #D9D9D9;
        border-radius: 25px;
    }

    div.special-buttons{
        width: 351px;
        height: 69px;

        background: white;
    }

    hr{
        width: 80%;
        margin: -10px 0px;
    }

    div.pad{
        width: 351px;
        height: 475px;

        background: white;

        div.numbers{

        }

        div.operations{
            
        }
    }
`;

