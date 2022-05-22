import styled from "styled-components";
import { width } from "../../helpers/variable";

const Style = styled.div`
    display: flex;
    justify-content: end;
    .section {
        width: calc(100% - ${width.sidebar}px);
        padding: 30px;

        @media (max-width: ${width.mobile}px) {
            padding: 10px;
        }
    }
    @media (max-width: ${width.tablet}px) {
        #sidebar {
            width: ${(props) => (props.isSidebar ? `100%` : `0px`)};
            left: ${(props) => (props.isSidebar ? 0 : `-${width.sidebar}px`)};
            right: 0;
            position: fixed;
            top: 0;
            bottom: 0;
            transition: all 0.25s ease;
            background-color: #fff;
            z-index: 9;
        }
        .section {
            width: 100%;
        }
    }
`;
export default Style;
