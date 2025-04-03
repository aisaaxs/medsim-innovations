import spinnerIcon from '../../public/icons/spinner-solid.svg';
import Image from 'next/image';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
    weight: '600',
    subsets: ['latin'],
});

export default function Loading({ text, theme }: { text: string, theme: string | undefined }) {
    const bgColor = theme === "light" ? "bg-white" : "bg-black";
    const spinnerStyle = theme === "light" ? "invert-0" : "invert-100";
  
    return (
      <div className={`absolute top-0 left-0 z-50 w-screen h-screen ${bgColor} flex flex-col justify-center items-center gap-8`}>
        <Image src={spinnerIcon} alt="Loading Spinner" className={`w-12 h-12 animate-spin ${spinnerStyle}`} />
        <h1 className={`text-2xl font-bold capitalize ${roboto.className}`}>
          {text}...
        </h1>
      </div>
    );
}  