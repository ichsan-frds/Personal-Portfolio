import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function WorkExperience(){
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 pb-8 gap-y-4">
                <div className="flex items-center gap-4 md:block">
                    <Avatar className="h-12 w-12 md:hidden">
                        <AvatarImage src="https://raw.githubusercontent.com/ichsan-frds/Image-Repo/refs/heads/main/Avatar_Ichsan_50px.png" />
                        <AvatarFallback>UP</AvatarFallback>
                    </Avatar>
                    <div>
                        <h3 className='font-bold'>ID/X Partners</h3>
                        <h3 className='text-slate-600'>Project-Based Virtual Intern : Data Scientist ID/X Partners x Rakamin Academy</h3>
                    </div>
                </div>
                    <Avatar className="h-12 w-12 justify-self-center self-center hidden md:block">
                        <AvatarImage src="https://raw.githubusercontent.com/ichsan-frds/Image-Repo/refs/heads/main/Avatar_Ichsan_50px.png" />
                        <AvatarFallback>ID/X</AvatarFallback>
                    </Avatar>
                    <h3 className="md:justify-self-end self-center text-slate-600">January 2025 - February 2025</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 pb-8 gap-y-4">
                <div className="flex items-center gap-4 md:block">
                    <Avatar className="h-12 w-12 md:hidden">
                        <AvatarImage src="https://raw.githubusercontent.com/ichsan-frds/Image-Repo/refs/heads/main/Avatar_Ichsan_50px.png" />
                        <AvatarFallback>UP</AvatarFallback>
                    </Avatar>
                    <div>
                        <h3 className='font-bold'>Bangkit Academy led by Google, Goto, & Traveloka</h3>
                        <h3 className='text-slate-600'>Machine Learning Cohort</h3>
                    </div>
                </div>
                <Avatar className="h-12 w-12 justify-self-center self-center hidden md:block">
                    <AvatarImage src="https://raw.githubusercontent.com/ichsan-frds/Image-Repo/refs/heads/main/Avatar_Ichsan_50px.png" />
                    <AvatarFallback>BA</AvatarFallback>
                </Avatar>
                <h3 className="md:justify-self-end self-center text-slate-600">September 2024 - December 2024</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 pb-8 gap-y-4">
                <div className="flex items-center gap-4 md:block">
                    <Avatar className="h-12 w-12 md:hidden">
                        <AvatarImage src="https://raw.githubusercontent.com/ichsan-frds/Image-Repo/refs/heads/main/Avatar_Ichsan_50px.png" />
                        <AvatarFallback>UP</AvatarFallback>
                    </Avatar>
                    <div>
                        <h3 className="font-bold">Universitas Padjajaran</h3>
                        <h3 className='text-slate-600'>Laboratory Teaching Assistant</h3>
                    </div>
                </div>
                <Avatar className="h-12 w-12 justify-self-center self-center hidden md:block">
                    <AvatarImage src="https://raw.githubusercontent.com/ichsan-frds/Image-Repo/refs/heads/main/Avatar_Ichsan_50px.png" />
                    <AvatarFallback>UP</AvatarFallback>
                </Avatar>
                <h3 className="md:justify-self-end self-center text-slate-600">February 2024 - December 2024</h3>
            </div>
        </>
    );
}