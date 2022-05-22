import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Input, Row } from "reactstrap";
import { LocalStorage } from "../../../helpers/localStorage";
import fetchApi from "../../../services/fetchApi";
import CardUser from "../../card";
import Style from "./style";
import SkeletonLoading from "../../skeleton";

const DriverManagement = () => {
    const [data, setData] = React.useState(false);
    const [inputValue, setInputValue] = React.useState("");
    const [showData, setShowData] = React.useState({
        start: 0,
        end: 4,
    });
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    const isFirstGet = true;
    const handleInputValue = (e) => {
        let value = e.target.value;
        setInputValue(value);
    };
    const handleSearchDriver = (e) => {
        e.preventDefault();
        let pagination = {
            start: 0,
            end: 4,
        };
        setData(
            state.users.data.results.filter(
                (item) =>
                    item.name.first
                        .toUpperCase()
                        .indexOf(inputValue.toUpperCase()) > -1
            )
        );
        setShowData(pagination);
        LocalStorage().save("page", pagination);
    };
    const handleNextPage = () => {
        let dataPage = {
            start: showData.start + 5,
            end: showData.end + 5,
        };
        setShowData(dataPage);
        LocalStorage().save("page", dataPage);
    };
    const handlePreviousPage = () => {
        let dataPage = {
            start: showData.start - 5,
            end: showData.end - 5,
        };
        setShowData(dataPage);
        LocalStorage().save("page", dataPage);
    };
    React.useEffect(() => {
        if (state?.users?.isSuccess) {
            setData(state.users.data.results);
        }
        if (state?.users === false) {
            let params = {
                results: 30,
            };
            fetchApi.getUsersList({ dispatch, params });
        }
    }, [state]);
    React.useEffect(() => {
        setShowData(
            LocalStorage().get("page") || {
                start: 0,
                end: 4,
            }
        );
    }, []);
    return (
        <Style>
            <div className="section-top">
                <Row className="justify-content-between align-items-center">
                    <Col lg={7}>
                        <h2 className="section-top__title">
                            DRIVER MANAGEMENT
                        </h2>
                        <div className="section-top__subtitle">
                            Data driver yang bekerja dengan Anda.
                        </div>
                    </Col>
                    <Col lg={5}>
                        <Row>
                            <Col lg={6}>
                                <form action="" onSubmit={handleSearchDriver}>
                                    <div className="section-top__search">
                                        <i
                                            className="fas fa-search"
                                            onClick={handleSearchDriver}
                                        ></i>
                                        <Input
                                            onChange={handleInputValue}
                                            type="text"
                                            placeholder="Cari Driver"
                                        />
                                    </div>
                                </form>
                            </Col>
                            <Col lg={6}>
                                <Button
                                    type="button"
                                    className="section-top__button"
                                >
                                    TAMBAH DRIVER{" "}
                                    <i className="fas fa-plus"></i>
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
            <div className="section-content">
                <div className="section-content__card">
                    <div>
                        {data ? (
                            data.map((item, key) => {
                                return (
                                    key >= showData.start &&
                                    key <= showData.end && (
                                        <div
                                            className="section-content__card-col"
                                            key={key}
                                        >
                                            <CardUser item={item} />
                                        </div>
                                    )
                                );
                            })
                        ) : (
                            <React.Fragment>
                                <div className="section-content__card-col">
                                    <SkeletonLoading
                                        width="100%"
                                        height="250px"
                                    />
                                </div>
                                <div className="section-content__card-col">
                                    <SkeletonLoading
                                        width="100%"
                                        height="250px"
                                    />
                                </div>
                                <div className="section-content__card-col">
                                    <SkeletonLoading
                                        width="100%"
                                        height="250px"
                                    />
                                </div>
                                <div className="section-content__card-col">
                                    <SkeletonLoading
                                        width="100%"
                                        height="250px"
                                    />
                                </div>
                            </React.Fragment>
                        )}
                    </div>
                </div>
                <div className="section-content__button">
                    <Button
                        onClick={handlePreviousPage}
                        className="section-content__button-action"
                        disabled={showData.start === 0}
                    >
                        <i className="fas fa-angle-left"></i> Previous Page
                    </Button>
                    <Button
                        onClick={handleNextPage}
                        className="section-content__button-action"
                        disabled={showData.end + 1 === data.length}
                    >
                        Next Page <i className="fas fa-angle-right"></i>
                    </Button>
                </div>
            </div>
        </Style>
    );
};
export default DriverManagement;
