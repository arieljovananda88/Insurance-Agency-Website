import Image from "next/image";
import Link from "next/link";

// Component imports
import PhoneLogo from "@/../public/footer/phone-logo.svg";
import MailLogo from "@/../public/footer/mail-logo.svg";

export default function Footer(): JSX.Element {
  const links = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Blog",
      link: "/",
    },
    {
      title: "About",
      link: "/",
    },
    {
      title: "Contact Us",
      link: "/",
    },
    {
      title: "Office Branch",
      link: "/",
    },
  ];

  return (
    <footer className="bg-[#246BD6] px-11 pt-8 pb-[110px] lg:py-7 xl:px-[90px]">
      <div className="lg:flex lg:justify-between">
        <div className="lg:min-w-[196px] lg:mt-7">
          <div className="w-[34px] h-auto aspect-[34/26] rounded-[11px] bg-white lg:w-[67px] lg:rounded-[30px]"></div>
          <h3 className="text-white font-inter text-3xl font-semibold mt-3">
            Slogan Logo.
          </h3>
        </div>

        <div className="mt-20 lg:mt-0 lg:max-w-[365px]">
          <h3 className="text-white font-bold text-2xl font-inter">
            Kontak Kami
          </h3>
          <p className="text-white font-inter font-bold mt-4 text-sm">
            Sebuah Nama Gedung
          </p>
          <p className="text-white font-inter mr-3.5 mt-1 text-sm">
            Alamat Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>

          <div className="flex gap-5 mt-7 items-center">
            <div className="w-[23px] h-auto aspect-square relative">
              <Image src={PhoneLogo} fill={true} alt="" />
            </div>
            <p className="text-white text-sm font-inter">+62 123 456 789</p>
          </div>
          <div className="flex gap-5 mt-2.5 items-center">
            <div className="w-[23px] h-auto aspect-square relative">
              <Image src={MailLogo} fill={true} alt="" />
            </div>
            <p className="text-white text-sm font-inter">
              info@perusahaan.co.id
            </p>
          </div>
        </div>

        <div className="mt-[90px] lg:mt-0">
          <h3 className="text-white text-2xl font-inter font-bold">
            Akses Cepat
          </h3>
          <ul className="grid grid-cols-2 gap-x-[75px] gap-y-5 w-full mt-4">
            {links.map((link, idx) => (
              <li key={idx}>
                <Link href={link.link}>
                  <p className="text-white text-sm font-inter">{link.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-white w-full h-[1px] hidden mt-11 lg:block" />
      <p className="text-white text-sm font-inter mt-3.5 hidden lg:block">
        2023 Nama Asuransi Temennya Jovan
      </p>
    </footer>
  );
}
