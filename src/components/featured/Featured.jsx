import { CircularProgressbar } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

import "./featured.scss"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined"


const Featured = () => {
    return(
        <div className="featured">
            <div className="top">
                <h1 className="title">TOTAL REVENUE</h1>
                <MoreVertIcon fontSize="small" className="icon"/>
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
                </div>
                <p className="title">TOTAL SALES TODAY</p>
                <p className="amount">Rs. 7248</p>
                <p className="description">Some transactions are still processing.</p>
                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">TARGET</div>
                        <div className="itemResult negative">
                            <KeyboardArrowDownIcon fontSize="small"/>
                            <div className="resultAmount">Rs. 50000</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">LAST WEEK</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpOutlinedIcon fontSize="small"/>
                            <div className="resultAmount">Rs. 50000</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">MONTH</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpOutlinedIcon fontSize="small"/>
                            <div className="resultAmount">Rs. 50000</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured