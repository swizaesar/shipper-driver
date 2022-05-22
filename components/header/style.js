import styled from "styled-components";
import { color, width } from "../../helpers/variable";

const Style = styled.header`
    padding: 20px 25px;
    position: relative;
    z-index: 3;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    @media (max-width: ${width.mobile}px) {
        padding: 5px 10px;
    }
    .btn-sidebar {
        display: none;
        margin-right: 10px;
        font-size: 22px;
        @media (max-width: ${width.tablet}px) {
            display: inline;
        }
    }
    .logo {
        max-width: 150px;
        @media (max-width: ${width.mobile}px) {
            max-width: 100px;
        }
    }

    .user {
        font-size: 14px;
        display: flex;
        align-items: center;
        span {
            margin-right: 7px;
            @media (max-width: ${width.tablet}px) {
                display: none;
            }
        }
        &-name {
            color: ${color.primary};
        }
        .avatar {
            width: 35px;
            border-radius: 50%;
            object-fit: contain;
        }
    }
`;
export default Style;
