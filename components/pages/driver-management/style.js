import styled from "styled-components";
import { color, width } from "../../../helpers/variable";
const Style = styled.div`
    .section {
        &-top {
            background-color: #fff;
            padding: 20px;
            border-radius: 3px;
            margin-bottom: 50px;
            &__title {
                color: ${color.primary};
                margin-bottom: 0;
                font-size: 26px;
                font-weight: 600;
                @media (max-width: ${width.mobile}px) {
                    font-size: 20px;
                }
            }
            &__subtitle {
                color: #4a4a4a;
                font-size: 12px;
                @media (max-width: ${width.tablet}px) {
                    margin-bottom: 20px;
                }
            }
            &__search {
                border: 1px solid #ddd;
                border-radius: 5px;
                display: flex;
                align-items: center;
                background-color: #fff;
                @media (max-width: ${width.tablet}px) {
                    margin-bottom: 15px;
                }
                .fas {
                    color: ${color.primary};
                    cursor: pointer;
                    padding: 10px;
                    padding-right: 0;
                }
                input {
                    background-color: transparent;
                    border: unset;
                    font-size: 14px;
                    @media (max-width: ${width.mobile}px) {
                        font-size: 12px;
                    }
                    &:focus {
                        outline: unset;
                        box-shadow: unset;
                    }
                }
            }
            &__button {
                background-color: ${color.primary};
                border-color: ${color.primary};
                width: 100%;
                font-size: 14px;
                @media (max-width: ${width.mobile}px) {
                    font-size: 12px;
                }
                .fas {
                    margin-left: 5px;
                }
            }
        }
        &-content {
            &__card {
                width: 100%;
                overflow: auto;
                margin-bottom: 15px;
                @media (max-width: ${width.mobile}px) {
                    overflow: hidden;
                }
                > div {
                    display: flex;
                    margin-right: -15px;
                    margin-left: -15px;
                    width: 1400px;
                    @media (max-width: ${width.mobile}px) {
                        width: 100%;
                        margin: 0;
                        display: block;
                    }
                }
                &-col {
                    padding: 0 15px;
                    width: 280px;
                    @media (max-width: ${width.mobile}px) {
                        width: 100%;
                        padding: 0;
                    }
                }
            }
            &__button {
                display: flex;
                justify-content: center;
                align-items: center;
                &-action {
                    margin: 0 25px;
                    background-color: transparent;
                    border: unset;
                    padding: 5px;
                    color: #000000;
                    display: flex;
                    align-items: center;
                    @media (max-width: ${width.mobile}px) {
                        font-size: 12px;
                    }
                    .fa-angle-right {
                        margin-left: 7px;
                    }
                    .fa-angle-left {
                        margin-right: 7px;
                    }
                    &:focus {
                        box-shadow: unset;
                    }
                }
            }
        }
    }
`;
export default Style;
