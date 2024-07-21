import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import "./home.scss"
import Widget from "../../components/widget/Widget"
import Featured from "../../components/featured/Featured"
import Chart from "../../components/chart/Chart"
import List from "../../components/table/Table"

const Home = () => {
    return(
        <div className="home">
            <Sidebar/>
            <div className="homeContainer">
                <Navbar />
                <div className="widgets">
                    <Widget type="user"/>
                    <Widget type="order"/>
                    <Widget type="earning"/>
                    <Widget type="balance"/>
                </div>
                <div className="charts">
                    <Featured/>
                    <Chart title={"LAST 6 MONTHS PROGRESS (REVENUE)"} aspect={2/0.8}/>
                </div>
                <div className="listContainer">
                    <div className="listTitle">LATEST TRANSACTIONS</div>
                    <List />
                </div>
            </div>
        </div>
    )
}

export default Home