import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineOpenInBrowser } from "react-icons/md";

export default function SoftdevProjects(){
    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-3 gap-12 sm:gap-0 lg:gap-8 pt-4 pb-12'>
                <img src="https://raw.githubusercontent.com/ichsan-frds/Image-Repo/refs/heads/main/HimatifAppsImage" alt="Himatif Apps" 
                    className='bg-slate-200 col-span-1 md:col-span-2 lg:col-span-1 rounded-md object-cover sm:aspect-square sm:w-[256px] sm:h-[256px]'/>
                <div className='flex-col md:col-span-3 lg:col-span-2 space-y-4'>
                    <div className='flex gap-x-6 sm:text-sm md:text-base text-slate-600'>
                        <p className='flex gap-x-2 text-sm text-slate-400'>Present</p>
                        <span className='flex gap-x-2 text-xs self-center'>Next.js</span>
                        <span className='flex gap-x-2 text-xs self-center'>React</span>
                    </div>
                    <h1 className='font-medium text-lg leading-7 tracking-wide'>Himatif Apps</h1>
                    <h2 className='font-medium text-sm'>Front-End Developer</h2>
                    <h2 className='text-sm text-slate-600 tracking-wide'>Himatif Apps is a super app made for Universitas Padjajaran Informatics Engineering Student intended to use for students and alumni internship or work database, learning materials bank, and many more.</h2>
                    <div className="flex gap-8">
                        <a href="https://apps.himatif.org"><MdOutlineOpenInBrowser className="w-8 h-8 sm:w-10 sm:h-10"/></a>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-3 gap-12 sm:gap-0 lg:gap-8 pt-4 pb-12'>
                <img src="https://raw.githubusercontent.com/ichsan-frds/Image-Repo/refs/heads/main/Sobat-Warung-1.png" alt="Sobat Warung" 
                    className='bg-slate-200 col-span-1 md:col-span-2 lg:col-span-1 rounded-md object-cover sm:aspect-square sm:w-[256px] sm:h-[256px]'/>
                <div className='flex-col md:col-span-3 lg:col-span-2 space-y-4'>
                    <div className='flex gap-x-6 sm:text-sm md:text-base text-slate-600'>
                        <time dateTime="2025-06-24" className='flex gap-x-2 text-sm text-slate-400'>August 24, 2025</time>
                        <span className='flex gap-x-2 text-xs self-center'>FastAPI</span>
                        <span className='flex gap-x-2 text-xs self-center'>MongoDB</span>
                        <span className='flex gap-x-2 text-xs self-center'>GCP</span>
                    </div>
                    <h1 className='font-medium text-lg leading-7 tracking-wide'>Sobat Warung</h1>
                    <h2 className='font-medium text-sm'>Team Lead, Back-End Developer, and MLOps Engineer</h2>
                    <h2 className='text-sm text-slate-600 tracking-wide'>Sobat Warung is a WhatsApp Bot–based solution that empowers urban micro-shops (warung) through data-driven insights. By collecting transactional data across locations, it enables features like demand forecasting, smart stock bundling, and collaborative purchasing with nearby warung.</h2>
                    <div className="flex gap-8">
                        <a href="http://wa.me/+14155238886?text=join%20do-tea"><FaWhatsapp className="w-8 h-8 sm:w-10 sm:h-10"/></a>
                        <a href="https://github.com/nrkahfirhmd/aic-14"><FaGithub className="w-8 h-8 sm:w-10 sm:h-10"/></a>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-3 gap-12 sm:gap-0 lg:gap-8 pt-4 pb-12'>
                <img src="https://raw.githubusercontent.com/ichsan-frds/Image-Repo/refs/heads/main/EdusiapImage2" alt="EduSiap" 
                    className='bg-slate-200 col-span-1 md:col-span-2 lg:col-span-1 rounded-md object-cover sm:aspect-square sm:w-[256px] sm:h-[256px]'/>
                <div className='flex-col md:col-span-3 lg:col-span-2 space-y-4'>
                    <div className='flex gap-x-6 sm:text-sm md:text-base text-slate-600'>
                        <time dateTime="2025-06-24" className='flex gap-x-2 text-sm text-slate-400'>June 24, 2025</time>
                        <span className='flex gap-x-2 text-xs self-center'>Express.js</span>
                        <span className='flex gap-x-2 text-xs self-center'>MySQL</span>
                    </div>
                    <h1 className='font-medium text-lg leading-7 tracking-wide'>EduSiap</h1>
                    <h2 className='font-medium text-sm'>Back-End Developer</h2>
                    <h2 className='text-sm text-slate-600 tracking-wide'>EduSiap is an educational video platform designed to support children's learning by providing engaging video content, interactive quizzes, and fun storybooks.</h2>
                    <div className="flex gap-8">
                        <a href="https://edusiap.online"><MdOutlineOpenInBrowser className="w-8 h-8 sm:w-10 sm:h-10"/></a>
                        <a href="https://github.com/muhammad22015/EduSiap-8"><FaGithub className="w-8 h-8 sm:w-10 sm:h-10"/></a>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-3 gap-12 sm:gap-0 lg:gap-8 pt-4 pb-12'>
                <img src="https://raw.githubusercontent.com/ichsan-frds/LittleNest-VR/refs/heads/main/LittleNestImage.png" alt="VR Project" 
                    className='bg-slate-200 col-span-1 md:col-span-2 lg:col-span-1 rounded-md object-cover sm:aspect-square sm:w-[256px] sm:h-[256px]'/>
                <div className='flex-col md:col-span-3 lg:col-span-2 space-y-4'>
                    <div className='flex gap-x-6 sm:text-sm md:text-base text-slate-600'>
                        <time dateTime="2025-06-18" className='flex gap-x-2 text-sm text-slate-400'>June 18, 2025</time>
                        <span className='flex gap-x-2 text-xs self-center'>Unity</span>
                        <span className='flex gap-x-2 text-xs self-center'>C#</span>
                        <span className='flex gap-x-2 text-xs self-center'>Blender</span>
                    </div>
                    <h1 className='font-medium text-lg leading-7 tracking-wide'>LittleNest</h1>
                    <h2 className='font-medium text-sm'>Game Designer & Developer</h2>
                    <h2 className='text-sm text-slate-600 tracking-wide'>LittleNest is an interactive VR simulation game that allows players to experience the challenges and responsibilities of caring for a baby firsthand. Designed with a learning by doing approach, this game immerses players in the role of a caregiver, offering a hands-on learning experience beyond just reading or watching theory.</h2>
                    <div className="flex gap-8">
                        <a href="https://github.com/ichsan-frds/LittleNest-VR"><FaGithub className="w-8 h-8 sm:w-10 sm:h-10"/></a>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-3 gap-12 sm:gap-0 lg:gap-8 pt-4 pb-12'>
                <img src="https://raw.githubusercontent.com/ichsan-frds/Image-Classification-Mediapipe/refs/heads/main/ImageClassificationMediapipeImage.png" alt="Image Classification" 
                    className='bg-slate-200 col-span-1 md:col-span-2 lg:col-span-1 rounded-md object-cover sm:aspect-square sm:w-[256px] sm:h-[256px]'/>
                <div className='flex-col md:col-span-3 lg:col-span-2 space-y-4'>
                    <div className='flex gap-x-6 sm:text-sm md:text-base text-slate-600'>
                        <time dateTime="2025-06-17" className='flex gap-x-2 text-sm text-slate-400'>June 17, 2025</time>
                        <span className='flex gap-x-2 text-xs self-center'>Python</span>
                        <span className='flex gap-x-2 text-xs self-center'>Mediapipe</span>
                    </div>
                    <h1 className='font-medium text-lg leading-7 tracking-wide'>Image Classification Mediapipe</h1>
                    <h2 className='font-medium text-sm'>Developer</h2>
                    <h2 className='text-sm text-slate-600 tracking-wide'>A fun final project of my university course in Digital Image Processing and Analysis that aims to explore image manipulation using Mediapipe, using either static images or live feed as the input.</h2>
                    <div className="flex gap-8">
                        <a href="https://github.com/ichsan-frds/Image-Classification-Mediapipe"><FaGithub className="w-8 h-8 sm:w-10 sm:h-10"/></a>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-3 gap-12 sm:gap-0 lg:gap-8 pt-4 pb-12'>
                <img src="https://raw.githubusercontent.com/ichsan-frds/Image-Repo/refs/heads/main/KamusAksaraSundaImage3.png" alt="Kamus" 
                    className='bg-slate-200 col-span-1 md:col-span-2 lg:col-span-1 rounded-md object-cover sm:aspect-square sm:w-[256px] sm:h-[256px]'/>
                <div className='flex-col md:col-span-3 lg:col-span-2 space-y-4'>
                    <div className='flex gap-x-6 sm:text-sm md:text-base text-slate-600'>
                        <time dateTime="2025-06-17" className='flex gap-x-2 text-sm text-slate-400'>June 17, 2025</time>
                        <span className='flex gap-x-2 text-xs self-center'>Python</span>
                        <span className='flex gap-x-2 text-xs self-center'>Streamlit</span>
                        <span className='flex gap-x-2 text-xs self-center'>GraphDB</span>
                    </div>
                    <h1 className='font-medium text-lg leading-7 tracking-wide'>Kamus Translasi Aksara Sunda</h1>
                    <h2 className='font-medium text-sm'>Developer</h2>
                    <h2 className='text-sm text-slate-600 tracking-wide'>It is a software that serves as a dictionary for translating Old Sundanese script vocabulary into the Indonesian language.</h2>
                    <div className="flex gap-8">
                        <a href="https://github.com/ichsan-frds/Kamus-Translasi-Aksara-Sunda"><FaGithub className="w-8 h-8 sm:w-10 sm:h-10"/></a>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-3 gap-12 sm:gap-0 lg:gap-8 pt-4 pb-12'>
                <img src="https://raw.githubusercontent.com/ichsan-frds/Library-Management-System/refs/heads/main/LibraryManagementSystemImage.jpg" alt="Library Management" 
                    className='bg-slate-200 col-span-1 md:col-span-2 lg:col-span-1 rounded-md object-cover sm:aspect-square sm:w-[256px] sm:h-[256px]'/>
                <div className='flex-col md:col-span-3 lg:col-span-2 space-y-4'>
                    <div className='flex gap-x-6 sm:text-sm md:text-base text-slate-600'>
                        <time dateTime="2023-12-10" className='flex gap-x-2 text-sm text-slate-400'>Dec 10, 2023</time>
                        <span className='flex gap-x-2 text-xs self-center'>Java</span>
                        <span className='flex gap-x-2 text-xs self-center'>Netbeans</span>
                    </div>
                    <h1 className='font-medium text-lg leading-7 tracking-wide'>Library Management System</h1>
                    <h2 className='font-medium text-sm'>Developer</h2>
                    <h2 className='text-sm text-slate-600 tracking-wide'>The application allows users to manage book inventory, member records, and borrowing activities through an interactive desktop interface.</h2>
                    <div className="flex gap-8">
                        <a href="https://github.com/ichsan-frds/Library-Management-System"><FaGithub className="w-8 h-8 sm:w-10 sm:h-10"/></a>
                    </div>
                </div>
            </div>
        </>
    );
}