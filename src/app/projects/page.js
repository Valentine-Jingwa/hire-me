import Image from "next/image";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
import BgManager from '../home/BgManager';


export default function Projects() {
  return (
    <BgManager>
        <Link className="fixed top-4 left-4 text-white p-2 rounded" href="/home">
        <IoArrowBack />
        </Link>
    </BgManager>
  );
}
