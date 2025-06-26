import { Avatar, AvatarImage } from "@/components/ui/avatar"

export default function WorkExperience(){
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 pb-8 gap-y-4">
                <div className="flex items-center gap-4 md:block">
                    <Avatar className="h-12 w-12 bg-slate-200 md:hidden">
                        <AvatarImage src="https://raw.githubusercontent.com/ichsan-frds/Image-Repo/refs/heads/main/IDX_50px.png" />
                    </Avatar>
                    <div>
                        <h3 className='font-bold'>ID/X Partners</h3>
                        <h3 className='text-slate-600'>Project-Based Virtual Intern : Data Scientist ID/X Partners x Rakamin Academy</h3>
                    </div>
                </div>
                    <Avatar className="h-12 w-12 bg-slate-200 justify-self-center self-center hidden md:block">
                        <AvatarImage src="https://raw.githubusercontent.com/ichsan-frds/Image-Repo/refs/heads/main/IDX_50px.png" />
                    </Avatar>
                    <h3 className="md:justify-self-end self-center text-slate-600">January 2025 - February 2025</h3>
                    <p className="md:col-span-3 text-sm text-slate-400 leading-7">
                        • Considered an Excellent Student with overall score of 85.04 <br />
                        • Completed 32+ tasks, which my role involves Data Understanding, Visualizing Exploratory Data Analysis, Preparing the Data for training, making Pipeline for Model Training, Evaluate Trained Model, and has made a Data Credit Risk Prediction Model for Final Project. <br />
                        • Completed the internship remotely, which takes discipline and resiliency.
                    </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 pb-8 gap-y-4">
                <div className="flex items-center gap-4 md:block">
                    <Avatar className="h-12 w-12 bg-slate-200 md:hidden">
                        <AvatarImage src="https://raw.githubusercontent.com/ichsan-frds/Image-Repo/refs/heads/main/Bangkit_Academy_50px.png" />
                    </Avatar>
                    <div>
                        <h3 className='font-bold'>Bangkit Academy led by Google, Goto, & Traveloka</h3>
                        <h3 className='text-slate-600'>Machine Learning Cohort</h3>
                    </div>
                </div>
                <Avatar className="h-12 w-12 bg-slate-200 justify-self-center self-center hidden md:block">
                    <AvatarImage src="https://raw.githubusercontent.com/ichsan-frds/Image-Repo/refs/heads/main/Bangkit_Academy_50px.png" />
                </Avatar>
                <h3 className="md:justify-self-end self-center text-slate-600">September 2024 - December 2024</h3>
                <p className="md:col-span-3 text-sm text-slate-400 leading-7">
                    • Full Graduate with overall score of 87.00 (A) and 100% Student's attendance <br />
                    • Completed 20+ courses and received 20+ certificates in the fields of Data, Machine Learning, Deep Learning, etc. <br />
                    • Completed a Capstone Project with a product output titled Agriclime, an Android-based weather app specifically designed for farmers, in collaboration with 6 other individuals across three Bangkit Academy Learning Paths: Mobile Development, Cloud Computing, and Machine Learning Cohort. <br />
                    • Completed six soft skills mentoring sessions and various assignments throughout the program duration.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 pb-8 gap-y-4">
                <div className="flex items-center gap-4 md:block">
                    <Avatar className="h-12 w-12 bg-slate-200 md:hidden">
                        <AvatarImage src="https://raw.githubusercontent.com/ichsan-frds/Image-Repo/refs/heads/main/Unpad_50px.png" />
                    </Avatar>
                    <div>
                        <h3 className="font-bold">Universitas Padjajaran</h3>
                        <h3 className='text-slate-600'>Laboratory Teaching Assistant</h3>
                    </div>
                </div>
                <Avatar className="h-12 w-12 bg-slate-200 justify-self-center self-center hidden md:block">
                    <AvatarImage src="https://raw.githubusercontent.com/ichsan-frds/Image-Repo/refs/heads/main/Unpad_50px.png" />
                </Avatar>
                <h3 className="md:justify-self-end self-center text-slate-600">February 2024 - December 2024</h3>
                <p className="md:col-span-3 text-sm text-slate-400 leading-7">
                    • Conducted two-hour lecture session per week and ensured the students understand both the theory and practice of the material presented <br />
                    • Created Midterms exam questions and supervise midterms to ensure student fairness <br />
                    • Offered guidance and assistance on class final projects to students and test the final results of their projects as graduation standards <br /><br />
                    Subjects that i taught : <br />
                    - Data Structures (Feb 2024 - June 2024) <br />
                    - Object Oriented Programming (Sept 2024 - Dec 2024)
                </p>
            </div>
        </>
    );
}