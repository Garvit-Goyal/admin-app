import "./datatable.scss"
import { userRows, userColumns } from "../../datatablesource";
import { DataGrid } from '@mui/x-data-grid';
import { Height, WidthFull } from "@mui/icons-material";

const Datatable = () => {

    const actionColumn = [{
        field: "action", headerName: "Action", width: 200, renderCell: () => {
            return (
                <div className="cellAction">
                    <div className="viewButton">View</div>
                    <div className="deleteButton">Delete</div>
                </div>

            );
        },
    },];

    return (
        <div className="datatable">
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