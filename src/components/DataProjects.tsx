import { FaGithub } from "react-icons/fa";
import { HiOutlinePresentationChartLine } from "react-icons/hi";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function DataProjects(){
    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-3 gap-12 sm:gap-0 lg:gap-8 pt-4 pb-12'>
                <img src="https://raw.githubusercontent.com/ichsan-frds/Olist-Data-Warehouse/refs/heads/main/OlistDataWarehouseImage.png" alt="Data Warehouse" 
                    className='bg-slate-200 col-span-1 md:col-span-2 lg:col-span-1 rounded-md object-cover sm:aspect-square sm:w-[256px] sm:h-[256px]'/>
                <div className='flex-col md:col-span-3 lg:col-span-2 space-y-4'>
                    <div className='flex gap-x-6 sm:text-sm md:text-base text-slate-600'>
                        <time dateTime="2025-06-22" className='flex gap-x-2 text-sm text-slate-400'>June 22, 2025</time>
                        <span className='flex gap-x-2 text-xs self-center'>SSIS</span>
                        <span className='flex gap-x-2 text-xs self-center'>Python</span>
                        <span className='flex gap-x-2 text-xs self-center'>Power BI</span>
                        <span className='flex gap-x-2 text-xs self-center'>SQL</span>
                    </div>
                    <h1 className='font-medium text-lg leading-7 tracking-wide'>Olist Data Warehouse</h1>
                    <h2 className='text-sm text-slate-600 tracking-wide'>This project aims to implement a data warehouse pipeline for a Brazillian E-Commerce platform Olist by performing ETL processes and creating visualizations for deeper analytical insights.</h2>
                    <div className="flex gap-8">
                        <a href="https://github.com/ichsan-frds/Olist-Data-Warehouse"><FaGithub className="w-8 h-8 sm:w-10 sm:h-10"/></a>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-3 gap-12 sm:gap-0 lg:gap-8 pt-4 pb-12'>
                <img src="https://raw.githubusercontent.com/ichsan-frds/Image-Repo/refs/heads/main/BankCustomerImage.png" alt="Bank Customer" 
                    className='bg-slate-200 col-span-1 md:col-span-2 lg:col-span-1 rounded-md object-cover sm:aspect-square sm:w-[256px] sm:h-[256px]'/>
                <div className='flex-col md:col-span-3 lg:col-span-2 space-y-4'>
                    <div className='flex gap-x-6 sm:text-sm md:text-base text-slate-600'>
                        <time dateTime="2025-06-04" className='flex gap-x-2 text-sm text-slate-400'>June 04, 2025</time>
                        <span className='flex gap-x-2 text-xs self-center'>Python</span>
                    </div>
                    <h1 className='font-medium text-lg leading-7 tracking-wide'>Bank Customer Deposit Classification</h1>
                    <h2 className='text-sm text-slate-600 tracking-wide'>This Project aims to develop a machine learning model that predicts whether a bank customer will subscribe to a term deposit, based on a wide range of features.</h2>
                    <div className="flex gap-8">
                        <a href="https://github.com/ichsan-frds/Bank-Customer-Deposit-Classification"><FaGithub className="w-8 h-8 sm:w-10 sm:h-10"/></a>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-3 gap-12 sm:gap-0 lg:gap-8 pt-4 pb-12'>
                <img src="https://raw.githubusercontent.com/ichsan-frds/Freshwater-Quality-Classification/refs/heads/main/FreshwaterQualityClassificationImage.jpg" alt="Freshwater Quality" 
                    className='bg-slate-200 col-span-1 md:col-span-2 lg:col-span-1 rounded-md object-cover sm:aspect-square sm:w-[256px] sm:h-[256px]'/>
                <div className='flex-col md:col-span-3 lg:col-span-2 space-y-4'>
                    <div className='flex gap-x-6 sm:text-sm md:text-base text-slate-600'>
                        <time dateTime="2025-05-15" className='flex gap-x-2 text-sm text-slate-400'>May 15, 2025</time>
                        <span className='flex gap-x-2 text-xs self-center'>Python</span>
                    </div>
                    <h1 className='font-medium text-lg leading-7 tracking-wide'>Freshwater Quality Classification</h1>
                    <h2 className='text-sm text-slate-600 tracking-wide'>This project aims to develop a machine learning model that predicts the quality grade of freshwater measurements based on various features such as in-situ readings, lab workflows, ecological context, and regulatory standards.</h2>
                    <div className="flex gap-8">
                        <a href="https://github.com/ichsan-frds/Freshwater-Quality-Classification"><FaGithub className="w-8 h-8 sm:w-10 sm:h-10"/></a>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-3 gap-12 sm:gap-0 lg:gap-8 pt-4 pb-12'>
                <img src="https://raw.githubusercontent.com/ichsan-frds/Coppa-Risk-Classification/refs/heads/main/CoppaRiskPredictionImage.png" alt="Coppa Risk" 
                    className='bg-slate-200 col-span-1 md:col-span-2 lg:col-span-1 rounded-md object-cover sm:aspect-square sm:w-[256px] sm:h-[256px]'/>
                <div className='flex-col md:col-span-3 lg:col-span-2 space-y-4'>
                    <div className='flex gap-x-6 sm:text-sm md:text-base text-slate-600'>
                        <time dateTime="2025-04-23" className='flex gap-x-2 text-sm text-slate-400'>April 23, 2025</time>
                        <span className='flex gap-x-2 text-xs self-center'>Python</span>
                    </div>
                    <h1 className='font-medium text-lg leading-7 tracking-wide'>Coppa Risk Classification</h1>
                    <h2 className='text-sm text-slate-600 tracking-wide'>This project aims to develop a machine learning model that predicts whether a mobile application is at risk of violating the Children’s Online Privacy Protection Act (COPPA), based on various app-level features.</h2>
                    <div className="flex gap-8">
                        <a href="https://github.com/ichsan-frds/Coppa-Risk-Classification"><FaGithub className="w-8 h-8 sm:w-10 sm:h-10"/></a>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-3 gap-12 sm:gap-0 lg:gap-8 pt-4 pb-12'>
                <img src="https://raw.githubusercontent.com/ichsan-frds/IDX-Credit-Risk-Prediction/refs/heads/main/CreditRiskImage.png" alt="Credit Risk" 
                    className='bg-slate-200 col-span-1 md:col-span-2 lg:col-span-1 rounded-md object-cover sm:aspect-square sm:w-[256px] sm:h-[256px]'/>
                <div className='flex-col md:col-span-3 lg:col-span-2 space-y-4'>
                    <div className='flex gap-x-6 sm:text-sm md:text-base text-slate-600'>
                        <time dateTime="2025-02-03" className='flex gap-x-2 text-sm text-slate-400'>Feb 03, 2025</time>
                        <span className='flex gap-x-2 text-xs self-center'>Python</span>
                    </div>
                    <h1 className='font-medium text-lg leading-7 tracking-wide'>Credit Risk Prediction</h1>
                    <h2 className='text-sm text-slate-600 tracking-wide'>This project aims to create a predictive model to assist lending companies in their decision making to either accept or reject a loan, in hope to reduce error and increase company profits.</h2>
                    <div className="flex gap-8">
                        <a href="https://github.com/ichsan-frds/IDX-Credit-Risk-Prediction"><FaGithub className="w-8 h-8 sm:w-10 sm:h-10 cursor-pointer"/></a>
                        <Dialog>
                            <DialogTrigger asChild>
                                <HiOutlinePresentationChartLine className="w-8 h-8 sm:w-10 sm:h-10 cursor-pointer"/>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl h-[90vh] p-6">
                                <DialogHeader>
                                    <DialogTitle className="text-2xl">Presentation Deck</DialogTitle>
                                        </DialogHeader>
                                            <div className=" w-full h-[70vh]">
                                                <iframe
                                                    src="https://drive.google.com/file/d/1Jy8JJkeBpkoxR08WJx7GWlmI26si4HBr/preview"
                                                    className="w-full h-full border rounded-md"
                                                    title="CV PDF"
                                                />
                                            </div>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-3 gap-12 sm:gap-0 lg:gap-8 pt-4 pb-12'>
                <img src="https://raw.githubusercontent.com/ichsan-frds/Image-Repo/refs/heads/main/AgriclimeImage.jpg" alt="Agriclime" 
                    className='bg-slate-200 col-span-1 md:col-span-2 lg:col-span-1 rounded-md object-cover sm:aspect-square sm:w-[256px] sm:h-[256px]'/>
                <div className='flex-col md:col-span-3 lg:col-span-2 space-y-4'>
                    <div className='flex gap-x-6 sm:text-sm md:text-base text-slate-600'>
                        <time dateTime="2025-02-03" className='flex gap-x-2 text-sm text-slate-400'>Dec 11, 2024</time>
                        <span className='flex gap-x-2 text-xs self-center'>Python</span>
                        <span className='flex gap-x-2 text-xs self-center'>Tensorflow</span>
                    </div>
                    <h1 className='font-medium text-lg leading-7 tracking-wide'>Agriclime</h1>
                    <h2 className='text-sm text-slate-600 tracking-wide'>AgriClime is a weather-based application designed to help Indonesian farmers manage weather uncertainty through early warnings and tailored farming recommendations. By improving decision-making and offering predictive insights, it supports short-term productivity and long-term agricultural sustainabilityw.</h2>
                    <div className="flex gap-8">
                        <a href="https://github.com/nrkahfirhmd/agriclime-ml"><FaGithub className="w-8 h-8 sm:w-10 sm:h-10"/></a>
                    </div>
                </div>
            </div>
        </>
    );
}