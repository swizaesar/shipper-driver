import styled from "styled-components";
import { color, width } from "../../helpers/variable";

const Style = styled.aside`
    height: 100%;
    background-color: #fff;
    position: absolute;
    width: ${width.sidebar}px;
    left: 0;
    .btn-close {
        display: none;
        opacity: 1;
        padding: 10px;
        @media (max-width: ${width.tablet}px) {
            display: block;
            position: absolute;
            right: 0;
        }
    }
    .sidebar {
        &-menu {
            padding-top: 30px;
            padding-left: 0;
            list-style: none;
            &__list {
                margin-bottom: 15px;
                &-name {
                    color: #000000;
                    padding: 5px 0;
                    width: 100%;
                    display: block;
                    transition: all 0.25s ease;
                    font-weight: 400;
                    padding-left: 25px;
                    font-size: 14px;
                    &:hover {
                        color: ${color.primary};
                        transition: all 0.25s ease;
                    }
                    i {
                        margin-right: 10px;
                        font-size: 18px;
                    }
                    &.active {
                        color: ${color.primary};
                        padding-left: 20px;
                        font-weight: 500;
                        border-left: 5px solid ${color.primary};
                    }
                }
            }
        }
    }
`;
export default Style;
