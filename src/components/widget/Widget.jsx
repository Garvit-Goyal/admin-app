import { Link } from "react-router-dom";

import "./widget.scss";
import {KeyboardArrowUp, PersonOutlined, AccountBalanceWalletOutlined, ShoppingCartOutlined, MonetizationOnOutlined}   from "@mui/icons-material";

const Widget = ({ type }) => {
    let data;

    //temporary
    const amount = 12341;
    const percentage = 20;

    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                desc: "SEE ALL USERS",
                icon: <PersonOutlined className="icon" />,
                link: "/users",
            };
            break;
        case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                desc: "VIEW ALL ORDERS",
                icon: <ShoppingCartOutlined className="icon" />,
            };
            break;
        case "earning":
            data = {
                title: "EARNINGS",
                isMoney: true,
                desc: "VIEW NET EARNING",
                icon: <MonetizationOnOutlined className="icon" />,
            };
            break;
        case "balance":
            data = {
                title: "BALANCE",
                isMoney: true,
                desc: "SEE DETAILS",
                icon: <AccountBalanceWalletOutlined className="icon" />,
            };
            break;
        default:
            break;
    }

    return (
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">
                    {data.isMoney && "Rs"} {amount}
                </span>
                <Link to={data.link} style={{ textDecoration: "none", cursor: "pointer", color: "black" }}>
                    <span className="link">{data.desc}</span>
                </Link>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUp />
                    {percentage}
                    {"%"}
                </div>
                {data.icon}
            </div>
        </div>
    );
};

export default Widget;
