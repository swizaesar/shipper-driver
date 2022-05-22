import styled from "styled-components";
import { color, width } from "../../helpers/variable";

const CardStyle = styled.div`
    background-color: #fff;
    margin-bottom: 15px;
    .card {
        &-header {
            background-color: #fff;
            display: flex;
            justify-content: space-between;
            align-items: center;
            &__id {
                font-size: 14px;
                color: #bbb;
                span {
                    color: ${color.primary};
                }
                @media (max-width: ${width.mobile}px) {
                    font-size: 12px;
                }
            }
            &__action {
                color: #aaa;
                cursor: pointer;
            }
        }
        &-avatar {
            border-radius: 50%;
            margin-bottom: 25px;
            @media (max-width: ${width.mobile}px) {
                width: 40%;
                margin-right: 25px;
            }
        }
        &-section {
            &__group {
                line-height: 1.4;
                margin-bottom: 15px;
                &-label {
                    font-size: 12px;
                    font-weight: 500;
                    color: #aaa;
                    @media (max-width: ${width.tablet}px) {
                        font-size: 10px;
                    }
                    @media (max-width: ${width.mobile}px) {
                        font-size: 8px;
                    }
                }
                &-value {
                    font-weight: 500;
                    font-size: 14px;
                    overflow-wrap: break-word;
                    @media (max-width: ${width.tablet}px) {
                        font-size: 12px;
                    }
                    @media (max-width: ${width.mobile}px) {
                        font-size: 10px;
                    }
                }
            }
        }
        &-body {
            @media (max-width: ${width.mobile}px) {
                &__section {
                    display: flex;
                    align-items: center;
                    width: 100%;
                }
            }
        }
    }
`;
export default CardStyle;
