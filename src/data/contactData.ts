import type {ContactType} from "@/types";
import {FaSquareWhatsapp} from "react-icons/fa6";
import {FaInstagramSquare} from "react-icons/fa";
import {ImFacebook2} from "react-icons/im";
import {AiFillTikTok} from "react-icons/ai";
import {FaYoutubeSquare} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";

export const contactData: ContactType[] = [
  {id: 1, title: "whatsApp", path: "/wa", icon: FaSquareWhatsapp},
  {id: 2, title: "instagram", path: "/ig", icon: FaInstagramSquare},
  {id: 3, title: "facebook", path: "/fb", icon: ImFacebook2},
  {id: 4, title: "tiktok", path: "/tt", icon: AiFillTikTok},
  {id: 4, title: "youtube", path: "/yt", icon: FaYoutubeSquare},
  {id: 4, title: "X", path: "/x", icon: FaSquareXTwitter},
];
