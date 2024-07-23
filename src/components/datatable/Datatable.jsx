import "./datatable.scss"
import { userRows, userColumns } from "../../datatablesource";
import { DataGrid } from '@mui/x-data-grid';
import { Height, WidthFull } from "@mui/icons-material";

import { Link } from "react-router-dom";

const Datatable = () => {

    const actionColumn = [{
        field: "action", headerName: "Action", width: 200, renderCell: () => {
            return (
                <div className="cellAction">
                    <Link to={"/users/test"} style={{ textDecoration: "none", color: "black" }}>
                        <div className="viewButton">View</div>
                    </Link>
                    <div className="deleteButton">Delete</div>
                </div>

            );
        },
    },];

    return (
        <div className="datatable">
            <Link to={"/users/new"} style={{ textDecoration: "none", color: "black" }}>
                <div className="addNewUser">
                    ADD NEW USER
                </div>
            </Link>
            <DataGrid
                rows={userRows}
                columns={userColumns.concat(actionColumn)}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 10 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </div>
    )
}

export default Datatable