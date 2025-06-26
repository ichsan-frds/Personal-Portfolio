import { Avatar, AvatarImage } from "../components/ui/avatar"

export default function OrganizationalExperience(){
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 pb-8 gap-y-4">
                <div className="flex items-center gap-4 md:block">
                    <Avatar className="h-12 w-12 bg-slate-200 md:hidden">
                        <AvatarImage src="https://raw.githubusercontent.com/ichsan-frds/Image-Repo/refs/heads/main/Kadinyi_50px.png" />
                    </Avatar>
                    <div>
                        <h3 className='font-bold'>KADIN YI Bandung</h3>
                        <h3 className='text-slate-600'>Staff of Research & Innovation</h3>
                    </div>
                </div>
                    <Avatar className="h-12 w-12 bg-slate-200 justify-self-center self-center hidden md:block">
                        <AvatarImage src="https://raw.githubusercontent.com/ichsan-frds/Image-Repo/refs/heads/main/Kadinyi_50px.png" />
                    </Avatar>
                    <h3 className="md:justify-self-end self-center text-slate-600">April 2025 - Present</h3>
                    <p className="md:col-span-3 text-sm text-slate-400 leading-7">
                        Responsible for gathering both primary and secondary data to provide comprehensive analysis of various issues—either regularly or upon request
                    </p>
                    </div>
            <div className="grid grid-cols-1 md:grid-cols-3 pb-8 gap-y-4">
                <div className="flex items-center gap-4 md:block">
                    <Avatar className="h-12 w-12 bg-slate-200 md:hidden">
                        <AvatarImage src="https://raw.githubusercontent.com/ichsan-frds/Image-Repo/refs/heads/main/Himatif_50px.png" />
                    </Avatar>
                    <div>
                        <h3 className='font-bold'>Himatif FMIPA Unpad</h3>
                        <h3 className='text-slate-600'>Head of Cadre Department</h3>
                    </div>
                </div>
                <Avatar className="h-12 w-12 bg-slate-200 justify-self-center self-center hidden md:block">
                    <AvatarImage src="https://raw.githubusercontent.com/ichsan-frds/Image-Repo/refs/heads/main/Himatif_50px.png" />
                </Avatar>
                <h3 className="md:justify-self-end self-center text-slate-600">January 2024 - December 2024</h3>
                <p className="md:col-span-3 text-sm text-slate-400 leading-7">
                    Led a team of 7 People to : <br />
                    • Train 90+ new students at Computer Science at Universitas Padjadjaran to prepare them for college life both in terms of soft skills and hard skills <br />
                    • Train 80+ second-year students at Computer Science at Universitas Padjadjaran to prepare them for managing the organization next year
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 pb-8 gap-y-4">
                <div className="flex items-center gap-4 md:block">
                    <Avatar className="h-12 w-12 bg-slate-200 md:hidden">
                        <AvatarImage src="https://raw.githubusercontent.com/ichsan-frds/Image-Repo/refs/heads/main/Himatif_50px.png" />
                    </Avatar>
                    <div>
                        <h3 className='font-bold'>Himatif FMIPA Unpad</h3>
                        <h3 className='text-slate-600'>Staff of Cadre Department</h3>
                    </div>
                </div>
                <Avatar className="h-12 w-12 bg-slate-200 justify-self-center self-center hidden md:block">
                    <AvatarImage src="https://raw.githubusercontent.com/ichsan-frds/Image-Repo/refs/heads/main/Himatif_50px.png" />
                </Avatar>
                <h3 className="md:justify-self-end self-center text-slate-600">February 2023 - December 2023</h3>
                <p className="md:col-span-3 text-sm text-slate-400 leading-7">
                    • Worked together as a team to train 80+ new students at Computer Science at Universitas Padjadjaran to prepare them for college life both in terms of soft skills and hard skills <br />
                    • In charge of supervising the organization's Leadership Training program targeted towards second-year students to prepare them for managing the organization next year
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 pb-8 gap-y-4">
                <div className="flex items-center gap-4 md:block">
                    <Avatar className="h-12 w-12 bg-slate-200 md:hidden">
                        <AvatarImage src="https://raw.githubusercontent.com/ichsan-frds/Image-Repo/refs/heads/main/BEMF_50px.png" />
                    </Avatar>
                    <div>
                        <h3 className='font-bold'>BEM FMIPA Unpad</h3>
                        <h3 className='text-slate-600'>Staff of External Relations Department</h3>
                    </div>
                </div>
                <Avatar className="h-12 w-12 bg-slate-200 justify-self-center self-center hidden md:block">
                    <AvatarImage src="https://raw.githubusercontent.com/ichsan-frds/Image-Repo/refs/heads/main/BEMF_50px.png" />
                </Avatar>
                <h3 className="md:justify-self-end self-center text-slate-600">February 2023 - December 2023</h3>
                <p className="md:col-span-3 text-sm text-slate-400 leading-7">
                    • Worked together as a team to increase the organization existence and make a good branding to the outside parties <br />
                    • In charge of supervising the organization's Comparative Study program to both enhance the organization's presence and provide opportunities for its members to grow and learn from other organizations across the country.
                </p>
            </div>
        </>
    );
}