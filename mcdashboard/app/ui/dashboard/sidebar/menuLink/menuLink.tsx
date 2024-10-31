"use client";
import styles from "./menuLink.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Item {
    title: string;
    path: string;
    icon: JSX.Element;
}

interface MenuLinkProps {
    item: Item;
}

const MenuLink = ({ item }: MenuLinkProps) => {
    const pathname = usePathname();

    console.log(pathname);

    return (
        <Link href={item.path} className={`${styles.container} ${pathname === item.path ? styles.active : ''}`}>
            {item.icon}
            {item.title}
        </Link>
    );
}

export default MenuLink;