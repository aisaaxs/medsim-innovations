import { Oswald } from 'next/font/google';

const oswald = Oswald({
    weight: '500',
    subsets: ['latin'],
});

export default function Footer() {
    return (
        <div className="w-full h-full max-h-[26px] bg-white flex justify-center items-center">
            <p className={`text-primaryTextColor text-xs ${oswald.className}`}>Copyright &copy; 2024 <a href='https://www.medsiminnovations.com' className='underline'>www.medsiminnovations.com</a> - All Rights Reserved.</p>
        </div>
    );
}