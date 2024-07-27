import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
    collection,
    getDocs,
    deleteDoc,
    doc,
    onSnapshot,
} from "firebase/firestore";
import { db } from "../../firebase";

const Datatable = ({ headTitle }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try{
                let list = []
                const querySnapshot = await getDocs(collection(db, "users"));
                querySnapshot.forEach((doc) => {
                    list.push({id: doc.id, ...doc.data()})
                });
                setData(list)
            }
            catch(error){
                console.log(error)
            }

        };
        fetchData()
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteDoc(doc(db, "users", id));
            setData(data.filter((item) => item.id !== id));
        } catch (err) {
            console.log(err);
        }
    };

    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <Link to="/users/test" style={{ textDecoration: "none" }}>
                            <div className="viewButton">View</div>
                        </Link>
                        <div
                            className="deleteButton"
                            onClick={() => handleDelete(params.row.id)}
                        >
                            Delete
                        </div>
                    </div>
                );
            },
        },
    ];

    return (
        <div className="datatable">
            <Link to={"/users/new"} style={{ textDecoration: "none", color: "black" }}>
                <div className="addNewUser">
                    {headTitle}
                </div>
            </Link>
            <DataGrid
                rows={data}
                columns={userColumns.concat(actionColumn)}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </div>
    )
}

export default Datatable