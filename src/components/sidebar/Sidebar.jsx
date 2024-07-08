import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
    return(
        <div className="sidebar">
            <div className="top">
                <span className="logo">StalkCash</span>
            </div>
            <hr/>
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className="icon"/>
                        <span>Dashboard</span>
                    </li>
                    <p className="title">LISTS</p>
                    <li>
                        <GroupIcon className="icon"/>
                        <span>Users</span>
                    </li>
                    <li>
                        <StorefrontIcon className="icon"/>
                        <span>Products</span>
                    </li>
                    <li>
                        <AllInboxIcon className="icon"/>
                        <span>Orders</span>
                    </li>
                    <li>
                        <DeliveryDiningIcon className="icon"/>
                        <span>Delivery</span>
                    </li>
                    <p className="title">INFO</p>
                    <li>
                        <QueryStatsIcon className="icon"/>
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsActiveIcon className="icon"/>
                        <span>Notifications</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <SettingsSystemDaydreamIcon className="icon"/>
                        <span>System Health</span>
                    </li>
                    <li>
                        <PsychologyIcon className="icon"/>
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsIcon className="icon"/>
                        <span>Settings</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <AccountCircleRoundedIcon className="icon"/>
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutIcon className="icon"/>
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div>
    )
}

export default Sidebar