import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function OrganizationalExperience(){
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 pb-8 gap-y-4">
                <div className="flex items-center gap-4 md:block">
                    <Avatar className="h-12 w-12 md:hidden">
                        <AvatarImage src="https://raw.githubusercontent.com/ichsan-frds/Image-Repo/refs/heads/main/Avatar_Ichsan_50px.png" />
                        <AvatarFallback>KAYI</AvatarFallback>
                    </Avatar>
                    <div>
                        <h3 className='font-bold'>KADIN YI Bandung</h3>
                        <h3 className='text-slate-600'>Staff of Research & Innovation</h3>
                    </div>
                </div>
                    <Avatar className="h-12 w-12 justify-self-center self-center hidden md:block">
                        <AvatarImage src="https://raw.githubusercontent.com/ichsan-frds/Image-Repo/refs/heads/main/Avatar_Ichsan_50px.png" />
                        <AvatarFallback>KAYI</AvatarFallback>
                    </Avatar>
                    <h3 className="md:justify-self-end self-center text-slate-600">April 2025 - Present</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 pb-8 gap-y-4">
                <div className="flex items-center gap-4 md:block">
                    <Avatar className="h-12 w-12 md:hidden">
                        <AvatarImage src="https://raw.githubusercontent.com/ichsan-frds/Image-Repo/refs/heads/main/Avatar_Ichsan_50px.png" />
                        <AvatarFallback>HI</AvatarFallback>
                    </Avatar>
                    <div>
                        <h3 className='font-bold'>Himatif FMIPA Unpad</h3>
                        <h3 className='text-slate-600'>Head of Cadre Department</h3>
                    </div>
                </div>
                <Avatar className="h-12 w-12 justify-self-center self-center hidden md:block">
                    <AvatarImage src="https://raw.githubusercontent.com/ichsan-frds/Image-Repo/refs/heads/main/Avatar_Ichsan_50px.png" />
                    <AvatarFallback>HI</AvatarFallback>
                </Avatar>
                <h3 className="md:justify-self-end self-center text-slate-600">January 2024 - December 2024</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 pb-8 gap-y-4">
                <div className="flex items-center gap-4 md:block">
                    <Avatar className="h-12 w-12 md:hidden">
                        <AvatarImage src="https://raw.githubusercontent.com/ichsan-frds/Image-Repo/refs/heads/main/Avatar_Ichsan_50px.png" />
                        <AvatarFallback>HI</AvatarFallback>
                    </Avatar>
                    <div>
                        <h3 className='font-bold'>Himatif FMIPA Unpad</h3>
                        <h3 className='text-slate-600'>Staff of Cadre Department</h3>
                    </div>
                </div>
                <Avatar className="h-12 w-12 justify-self-center self-center hidden md:block">
                    <AvatarImage src="https://raw.githubusercontent.com/ichsan-frds/Image-Repo/refs/heads/main/Avatar_Ichsan_50px.png" />
                    <AvatarFallback>HI</AvatarFallback>
                </Avatar>
                <h3 className="md:justify-self-end self-center text-slate-600">February 2023 - December 2023</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 pb-8 gap-y-4">
                <div className="flex items-center gap-4 md:block">
                    <Avatar className="h-12 w-12 md:hidden">
                        <AvatarImage src="https://raw.githubusercontent.com/ichsan-frds/Image-Repo/refs/heads/main/Avatar_Ichsan_50px.png" />
                        <AvatarFallback>BEM</AvatarFallback>
                    </Avatar>
                    <div>
                        <h3 className='font-bold'>BEM FMIPA Unpad</h3>
                        <h3 className='text-slate-600'>Staff of External Relations Department</h3>
                    </div>
                </div>
                <Avatar className="h-12 w-12 justify-self-center self-center hidden md:block">
                    <AvatarImage src="https://raw.githubusercontent.com/ichsan-frds/Image-Repo/refs/heads/main/Avatar_Ichsan_50px.png" />
                    <AvatarFallback>BEM</AvatarFallback>
                </Avatar>
                <h3 className="md:justify-self-end self-center text-slate-600">February 2023 - December 2023</h3>
            </div>
        </>
    );
}