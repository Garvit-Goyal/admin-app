import "./widget.scss"

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined'

const Widget = ({ type }) => {

    let data;

    //temporary
    const amount = 12341
    const percentage = 20

    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "SEE ALL USERS",
                icon: <PersonOutlinedIcon className="icon" />
                // For separate styling of each logo icon: <PersonOutlinedIcon className="icon" style={background-color:"",color: ""}/>
            };
            break;
        case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "VIEW ALL ORDERS",
                icon: <ShoppingCartOutlinedIcon className="icon" />
            };
            break;
        case "earning":
            data = {
                title: "EARNINGS",
                isMoney: true,
                link: "VIEW NET EARNING",
                icon: <MonetizationOnOutlinedIcon className="icon" />
            };
            break;
        case "balance":
            data = {
                title: "BALANCE",
                isMoney: false,
                link: "SEE DETAILS",
                icon: <AccountBalanceWalletOutlinedIcon className="icon" />
            };
            break;
        default:
            break;

    }

    return (
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && "Rs"} {amount}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpIcon />
                    {percentage}{"%"}
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget