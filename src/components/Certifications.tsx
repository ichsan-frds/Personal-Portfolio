export default function Certifications(){
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
            <div 
            className='justify-between rounded-lg border bg-card text-card-foreground h-full flex flex-col items-center gap-y-4 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 group'>
                <div className="space-y-4">
                    <a href="https://www.coursera.org/account/accomplishments/verify/TJRFLXD4BEOT">
                        <img src="https://raw.githubusercontent.com/ichsan-frds/Image-Repo/refs/heads/main/Advanced_Computer_Vision" alt="Computer Vision" 
                        className="bg-slate-200"/>
                    </a>
                    <div className='text-center p-2'>
                        <h1 className='font-medium text-base sm:text-lg leading-7 tracking-wide'>Advanced Computer Vision with TensorFlow</h1>
                        <h2 className='text-slate-600 text-sm sm:text-base leading-7 tracking-wide'>DeepLearning.ai</h2>
                    </div>
                    <div className='flex w-full px-2'>
                        <time dateTime="2024-11-09" className='gap-x-2 text-sm sm:text-base text-slate-400'>Dec 16, 2024</time>
                        <p className='gap-x-2 text-sm text-slate-400 ml-auto'>Forever</p>
                    </div>
                </div>
                <a href="https://www.coursera.org/account/accomplishments/verify/TJRFLXD4BEOT" className='text-red-300 pb-4 cursor-pointer hover:underline justify-self-end'>View Credential</a>
            </div>
            <div 
            className='justify-between rounded-lg border bg-card text-card-foreground h-full flex flex-col items-center gap-y-4 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 group'>
                <div className="space-y-4">
                    <a href="https://www.coursera.org/account/accomplishments/verify/5HY70ZX3OE4V">
                        <img src="https://raw.githubusercontent.com/ichsan-frds/Image-Repo/refs/heads/main/Browser_Based_Models" alt="Model Deployment" 
                        className="bg-slate-200"/>
                    </a>
                    <div className='text-center p-2'>
                        <h1 className='font-medium text-base sm:text-lg leading-7 tracking-wide'>Browser-based Models with TensorFlow.js</h1>
                        <h2 className='text-slate-600 text-sm sm:text-base leading-7 tracking-wide'>DeepLearning.ai</h2>
                    </div>
                    <div className='flex w-full px-2'>
                        <time dateTime="2024-11-09" className='gap-x-2 text-sm sm:text-base text-slate-400'>Dec 04, 2024</time>
                        <p className='gap-x-2 text-sm text-slate-400 ml-auto'>Forever</p>
                    </div>
                </div>
                <a href="https://www.coursera.org/account/accomplishments/verify/5HY70ZX3OE4V" className='text-red-300 pb-4 cursor-pointer hover:underline justify-self-end'>View Credential</a>
            </div>
            <div 
            className='justify-between rounded-lg border bg-card text-card-foreground h-full flex flex-col items-center gap-y-4 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 group'>
                <div className="space-y-4">
                    <a href="https://www.coursera.org/account/accomplishments/specialization/XLWSWO19FD2I" className="cursor-pointer">
                        <img src="https://raw.githubusercontent.com/ichsan-frds/Image-Repo/refs/heads/main/Deep_Learning_Specialization" alt="Deep Learning" 
                        className="bg-slate-200"/>
                    </a>
                    <div className='text-center p-2'>
                        <h1 className='font-medium text-base sm:text-lg leading-7 tracking-wide'>DeepLearning.AI TensorFlow Developer Specialization</h1>
                        <h2 className='text-slate-600 text-sm sm:text-base leading-7 tracking-wide'>DeepLearning.ai</h2>
                    </div>
                    <div className='flex w-full px-2'>
                        <time dateTime="2024-11-09" className='gap-x-2 text-sm sm:text-base text-slate-400'>Nov 08, 2024</time>
                        <p className='gap-x-2 text-sm text-slate-400 ml-auto'>Forever</p>
                    </div>
                </div>
                <a href="https://www.coursera.org/account/accomplishments/specialization/XLWSWO19FD2I" className='text-red-300 pb-4 cursor-pointer hover:underline justify-self-end'>View Credential</a>
            </div>
            <div 
                className='justify-between rounded-lg border bg-card text-card-foreground h-full flex flex-col items-center gap-y-4 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 group'>
                <div className="space-y-4">
                    <a href="https://www.coursera.org/account/accomplishments/specialization/HNUMXCOBEB6T">
                        <img src="https://raw.githubusercontent.com/ichsan-frds/Image-Repo/refs/heads/main/Machine_Learning_Specialization" alt="Machine Learning"
                        className="bg-slate-200"/>
                    </a>
                    <div className='text-center p-2'>
                        <h1 className='font-medium text-base sm:text-lg leading-7 tracking-wide'>Machine Learning Specialization</h1>
                        <h2 className='text-slate-600 text-sm sm:text-base leading-7 tracking-wide'>DeepLearning.ai</h2>
                    </div>
                    <div className='flex w-full px-2'>
                        <time dateTime="2024-11-09" className='gap-x-2 text-sm sm:text-base text-slate-400'>Oct 09, 2024</time>
                        <p className='gap-x-2 text-sm text-slate-400 ml-auto'>Forever</p>
                    </div>
                </div>
                <a href="https://www.coursera.org/account/accomplishments/specialization/HNUMXCOBEB6T" className='text-red-300 pb-4 cursor-pointer hover:underline justify-self-end'>View Credential</a>
            </div>
        </div>
    );
}