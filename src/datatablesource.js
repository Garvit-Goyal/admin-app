export const userColumns = [
    { field: "id", headerName: "ID", width: 60 },
    {
        field: "user",
        headerName: "User",
        width: 230,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar" />
                    {params.row.username}
                </div>
            );
        },
    },
    {
        field: "email",
        headerName: "Email",
        width: 250,
    },

    {
        field: "age",
        headerName: "Age",
        width: 100,
    },
    {
        field: "status",
        headerName: "Status",
        width: 160,
        renderCell: (params) => {
            return (
                <span className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </span>
            );
        },
    },
];

//temporary data
export const userRows = [
    {
        id: 1,
        username: "Garvit Goyal",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status: "active",
        email: "garvitgoyal058@gmail.com",
        age: 21,
    },
    {
        id: 2,
        username: "Sugam Tripathi",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "sugamtripathi0500@gmail.com",
        status: "passive",
        age: 20,
    },
    {
        id: 3,
        username: "Sanyam",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "sanyam@gmail.com",
        status: "pending",
        age: 22,
    },
    {
        id: 4,
        username: "Shrey Agarwal",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "shreyagarwal8sept@gmail.com",
        status: "active",
        age: 22,
    },
    {
        id: 5,
        username: "Parth Gupta",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "parth.daksh2612@gmail.com",
        status: "passive",
        age: 21,
    },
];