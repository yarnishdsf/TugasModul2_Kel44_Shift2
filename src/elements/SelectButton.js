import styled, {css} from 'styled-components';

export default styled.select`

    font-family: 'roboto';
    font-size:1 rem;
    border:none;
    border-radius:5px;
    padding:7px 10px;
    background:white;
    margin:20px 10px;
    ${(props) =>
        props.background &&
        css`
        background:${(props) =>props.background};
        `}
    color:black;
`;

