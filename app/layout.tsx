import type { Metadata } from "next";
import { Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";
const bengali=Noto_Sans_Bengali({subsets:["bengali"],variable:"--font-bengali",display:"swap"});
export const metadata:Metadata={metadataBase:new URL("https://ghiwala.example.com"),title:"ঘি ওয়ালা — খাঁটি গাওয়া ঘি, পরিবারের জন্য নিশ্চিন্ত পছন্দ",description:"বিশুদ্ধ গাওয়া ঘি, নিরাপদ প্যাকেজিং, ক্যাশ অন ডেলিভারি ও বাংলাদেশজুড়ে দ্রুত ডেলিভারি।",openGraph:{title:"ঘি ওয়ালা — খাঁটি গাওয়া ঘি",description:"পরিবারের রান্নায় আসল স্বাদ ও বিশুদ্ধতার নিশ্চয়তা।",type:"website",locale:"bn_BD",images:[{url:"/images/product.jpeg",width:1391,height:1131,alt:"ঘি ওয়ালা গাওয়া ঘি"}]},twitter:{card:"summary_large_image",title:"ঘি ওয়ালা — খাঁটি গাওয়া ঘি",description:"বাংলাদেশজুড়ে ক্যাশ অন ডেলিভারি।",images:["/images/product.jpeg"]}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="bn"><body className={bengali.variable}>{children}</body></html>}
