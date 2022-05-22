import moment from "moment";
import React from "react";
import CardStyle from "./style";

const CardUser = ({ item }) => {
    return (
        <CardStyle>
            <div className="card-header">
                <div className="card-header__id">
                    Driver ID <span>{item.cell}</span>
                </div>
                <div className="card-header__action">
                    <i className="fa fa-ellipsis-h"></i>
                </div>
            </div>
            <div className="card-body ">
                <div className="card-body__section">
                    <img
                        src={item.picture.large}
                        alt={`${item.name.first} ${item.name.last}`}
                        className="img-fluid card-avatar"
                    />
                    <div className="card-section">
                        <div className="card-section__group">
                            <label className="card-section__group-label">
                                Nama Driver
                            </label>
                            <div className="card-section__group-value">
                                {item.name.first} {item.name.last}
                            </div>
                        </div>
                        <div className="card-section__group">
                            <label className="card-section__group-label">
                                Telepon
                            </label>
                            <div className="card-section__group-value">
                                {item.phone}
                            </div>
                        </div>
                        <div className="card-section__group">
                            <label className="card-section__group-label">
                                Email
                            </label>
                            <div className="card-section__group-value">
                                {item.email}
                            </div>
                        </div>
                        <div className="card-section__group">
                            <label className="card-section__group-label">
                                Tanggal Lahir
                            </label>
                            <div className="card-section__group-value">
                                {moment(item.dob.date).format("DD-MM-YYYY")}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </CardStyle>
    );
};
export default CardUser;
