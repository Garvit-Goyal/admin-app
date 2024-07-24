import "./chart.scss"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
        Month: "January",
        Total : 18000
    },
    {
        Month: "February",
        Total : 45000
    },
    {
        Month: "March",
        Total : 30000
    },
    {
        Month: "April",
        Total : 55000
    },
    {
        Month: "May",
        Total : 40000
    },
];

const Chart = ({title,aspect}) => {
    return (
        <div className="chart">
            <h1 className="title">{title}</h1>
            <ResponsiveContainer width="100%" aspect={aspect}>
                <AreaChart width={730} height={250} data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="20%" stopColor="rgb(223, 244, 254)" stopOpacity={0.8} />
                            <stop offset="80%" stopColor="#004AAD" stopOpacity={0.6} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="Month" stroke="black"/>
                    <CartesianGrid strokeDasharray="1 1" opacity={0.1} stroke="black"/>
                    <Tooltip />
                    <Area type="monotone" dataKey="Total" stroke="#004AAD" fillOpacity={1} fill="url(#total)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart