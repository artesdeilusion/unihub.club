import { Instagram, LinkedIn } from "@mui/icons-material";
import Link from "next/link";
 
export default function Footer() {

return (
<div className="bg-white border-t">
  <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="flex justify-center h-10 ">
      <img src="/unihub.club.png"></img>
    </div>

    <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
    Geleceğini Bugünden Keşfet, UniHub ile Yüksel!
    </p>

    <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
      <li>
        <a className="text-gray-700 transition hover:text-gray-700/75" href="mailto:contact_unihub@gmail.com"> İletişim </a>
      </li>
      
      <li>
        <Link className="text-gray-700 transition hover:text-gray-700/75" href="/events"> Etkinlikler </Link>
      </li>
      <li>
        <a className="text-gray-700 transition hover:text-gray-700/75" href="https://apply.unihub.club"> Üye Ol </a>
      </li>

      <li>
        <a className="text-gray-700 transition hover:text-gray-700/75" href="https://sponsor.unihub.club"> Sponsorluk </a>
      </li>
 
    </ul>

    <ul className="mt-12 flex justify-center gap-6 md:gap-8">
      <li>
        <a
          href="https://linkedin.unihub.club"
          rel="noreferrer"
          target="_blank"
          className="text-gray-700 transition hover:text-gray-700/75"
        >
          <span className="sr-only">LinkedIn</span>
          <LinkedIn></LinkedIn>
        </a>
      </li>

      <li>
        <a
          href="https://instagram.unihub.club"
          rel="noreferrer"
          target="_blank"
          className="text-gray-700 transition hover:text-gray-700/75"
        >
          <span className="sr-only">Instagram</span>
          <Instagram></Instagram>
        </a>
      </li>

     
    
 
    </ul>
  </div>
</div>

);
}