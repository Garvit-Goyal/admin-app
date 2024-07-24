import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"

const List = ({titleH}) => {
    return(
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Datatable headTitle={titleH}/>
            </div>
        </div>
    )
}

export default List