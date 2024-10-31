import styles from "./sidebar.module.css";
import MenuLink from "./menuLink/menuLink";
import Image from "next/image";
import {  MdDashboard,
MdSupervisedUserCircle,
MdShoppingBag,
MdAttachMoney,
MdWork,
MdAnalytics,
MdPeople,
MdOutlineSettings,
MdHelpCenter,
MdLogout,
} from "react-icons/md";
const menuItems = [
    {
        title: "Pages",
        list: [
            {
                title: "Dashboard",
                path: "/dashboard",
                icon: <MdDashboard />,
            },
        ],
    },
    {
        title: "Operations",
        list: [
            {
                title: "Opening",
                path: "/opening",
                icon: <MdWork />,
            },
            {
                title: "Closing",
                path: "/closing",
                icon: <MdAnalytics />,
            },
        ],
    },
];

const Sidebar = () => { 
    return (
        <div className={styles.container}>
            <div className={styles.user}>
                <Image className={styles.userImage} src="" alt="" width={50} height={50} />
                <div className={styles.userDetail}>
                    <span className={styles.username}>Garrett Pearson</span>
                    <span className={styles.usertitle}>Dev</span>
                </div>
            </div>
            <ul className={styles.list}>
                {menuItems.map(cat=>(
                    <li key={cat.title}>
                        <span className={styles.cat}>{cat.title}</span>
                        {cat.list.map((item)=>(
                            <MenuLink item={item} key={item.title} />
                        ))}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Sidebar;