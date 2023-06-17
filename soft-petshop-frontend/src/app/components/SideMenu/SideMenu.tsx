import Logo from "../../../../public/logo.png";
import Dashboard from "../../../../public/grid.svg";
import Pet from "../../../../public/pet.svg";
import Owner from "../../../../public/user.svg";

import Link from "next/link"
import Image from "next/image";

import './sideMenu.css'

export default function SideMenu() {
    return(
        <div className="container">
            <Image 
                src={Logo}
                width={100}
                height={60}
                alt="Soft PetShop Logo"
            />

            <ul className="list">
                <Link href="/">
                    <li className="listItem">
                        <Image 
                            src={Dashboard}
                            width={24}
                            height={24}
                            alt="cubics forms representing an dashboard"
                        />
                        <p className="itemText">Dashboard</p>
                    </li>
                </Link>

                <Link href="/pets">
                    <li className="listItem">
                        <Image 
                            src={Pet}
                            width={24}
                            height={24}
                            alt="dog paw representing pets"
                        />
                        <p className="itemText">Pets</p>
                    </li>
                </Link>

                <Link href="/owners">
                    <li className="listItem">
                        <Image 
                            src={Owner}
                            width={24}
                            height={24}
                            alt="a simple draw of a human form representing owners"
                        />
                        <p className="itemText">Owners</p>
                    </li>
                </Link>

            </ul>
        </div>
    )
}