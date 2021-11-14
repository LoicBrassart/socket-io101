import styled from "styled-components"

const SApp = styled.div`
    font-family: 'Roboto', sans-serif;

    ul, form, .options {
        margin:auto;
        width:50em;
    }

    ul {
        height:90vh;
        background-color: #303030;
        display: flex;
        flex-flow: column nowrap;
        align-items:center;
        justify-content: flex-end;
        overflow-y: auto;

        li {
            width:60%;
            padding:.3em;
            margin:.1em 1em;;
            border-radius:.2em;
            position:relative;

            time {
                position: absolute;
                padding:.3em;
                right: 0;
                bottom: 0;
                color: #AAA;
            }
        }

        .notice {
            background-color: #444;
            color: #FFF;
            width: fit-content;
            margin:auto;

            time, address {
                display:none;
            }
        }
        .ownMsg {
            background-color: #080;
            color: #FFF;
            align-self:flex-end;

            address {
                display:none;
            }
        }
        .alienMsg {
            background-color: #444;
            color: #FFF;
            align-self:flex-start;

            address {
                color: orange;
            }

        }
    }
`

export default SApp