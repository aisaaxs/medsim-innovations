import { Oswald } from 'next/font/google';

const oswald = Oswald({
    weight: '500',
    subsets: ['latin'],
});

export default function Footer() {
    return (
        <div className="w-full h-[70px] flex justify-center items-end bg-white pb-2 px-2">
            <p className={`text-primaryTextColor text-sm ${oswald.className} text-center`}>Copyright &copy; 2024 <a href='https://www.medsiminnovations.com' target='__blank' className='underline'>www.medsiminnovations.com</a> - All Rights Reserved.</p>
        </div>
    );
}