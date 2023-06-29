import React from 'react'
import Paths from '../Routes/Paths'
import { Select } from '@mantine/core';
import { FaAngleDown} from 'react-icons/fa'
import HomeChart from './HomeChart';
import meal1 from '../img/meal1.svg'
import meal2 from '../img/meal2.svg'
import meal3 from '../img/meal3.svg'
import user1 from '../img/user1.svg'
import gym from '../img/gymIcon.svg'
import therapy from '../img/therapyIcon.svg'
import statis from '../img/statis.svg'
import upgrade from '../img/upgrade.svg'
import heatred from '../img/heartRed.svg'
import heatyellow from '../img/heartYellow.svg'
import heatTeal from '../img/heartTeal.svg'
import heatViolet from '../img/heartViolet.svg'
import {AiFillHeart} from 'react-icons/ai'

// const Home = () => {
//   return (
//   <div className="flex font-poppins w-full h-full">
//     <h1 className=' w-[20%] text-center bg-white'>App</h1>
//     <Paths/>
//   </div>



const Home = () => {
  return (
    <section className=' tw-h-full tw-flex tw-flex-col'>
      <main className='tw-pt-[24px] tw-pb-[50px] tw-px-[24px] bgColor tw-flex tw-flex-col'>
        <div className=' tw-mb-[24px]'>
          <h1 className=' tw-text-xl tw-font-semibold tw-ms-3'>Dashboard</h1>
        </div>
        <div className=' tw-flex tw-flex-col md:tw-flex-row bgColor'>
          {/* activities & meal */}
          <div className=" tw-w-full md:tw-w-2/3">
            <div className=' tw-flex tw-flex-col md:tw-flex-row'>
              {/* activities */}
              <div className=' tw-w-full  md:tw-w-1/2 tw-px-3 tw-mb-6'>
                <div className=' bgWhite tw-rounded-xl '>
                    <div className=' tw-flex  tw-justify-between tw-items-center tw-p-7'>
                      <p className=' tw-font-semibold'>Your activity</p>
                        <div className=' tw-w-24'>
                        <Select
                          defaultValue={"Weekly"}
                          classNames={{input : 'week-input',dropdown: 'home-dropdown'}}
                          rightSection={<FaAngleDown size="1rem" color='#948C9E' />}
                          rightSectionWidth={30}
                          styles= {{dropdown : {top : '138px'}}}
                          data={['Weekly', 'Daily', 'Monthly']}
                        />
                        </div>
                      
                    </div>
                    <div className=' tw-h-[275px]'>
                      <HomeChart/>
                    </div>
                </div>
              </div>
              {/* meals */}
              <div className=' tw-w-full md:tw-w-1/2 tw-px-3 tw-mb-6'>
                <div className=' bgWhite tw-rounded-xl tw-p-7'>
                    <div className=' tw-flex  tw-justify-between tw-items-center '>
                      <p className=' tw-font-semibold'>Your meal</p>
                      <div className=' tw-w-24'>
                      <Select
                          defaultValue={"Weekly"}
                          classNames={{input : 'week-input',dropdown: 'home-dropdown'}}
                          rightSection={<FaAngleDown size="1rem" color='#948C9E' />}
                          rightSectionWidth={30}
                          styles= {{dropdown : {top : '138px'}}}
                          data={['Weekly', 'Daily', 'Monthly']}
                        
                        />
                      </div>
                    </div>
                    <div className=' tw-mt-6'>
                      <div className=' tw-flex tw-justify-between tw-items-center tw-px-4 tw-py-3  bgColor tw-rounded-xl'>
                        <div className=' tw-flex'>
                        <img src={meal1} alt="" />
                        <div className=' tw-ms-3'>
                          <p className=' tw-font-semibold text-fs1'>Salmon Salad</p>
                          <span className=' text-muted text-fs1 tw-font-fw--2'>300 g</span>
                        </div>
                        </div>
                        <p className=' text-muted text-fs1 tw-font-fw--2'>175 cal</p>
                      </div>
                      <div className=' tw-flex tw-justify-between tw-items-center tw-px-4 tw-py-3 tw-my-4 bgColor tw-rounded-xl'>
                        <div className=' tw-flex'>
                        <img src={meal2} alt="" />
                        <div className=' tw-ms-3'>
                          <p className=' tw-font-semibold text-fs1'>Salmon Salad</p>
                          <span className=' text-muted text-fs1 tw-font-fw--2'>300 g</span>
                        </div>
                        </div>
                        <p className=' text-muted text-fs1 tw-font-fw--2'>175 cal</p>
                      </div>
                      <div className=' tw-flex tw-justify-between tw-items-center tw-px-4 tw-py-3 m bgColor tw-rounded-xl'>
                        <div className=' tw-flex'>
                        <img src={meal3} alt="" />
                        <div className=' tw-ms-3'>
                          <p className=' tw-font-semibold text-fs1'>Salmon Salad</p>
                          <span className=' text-muted text-fs1 tw-font-fw--2'>300 g</span>
                        </div>
                        </div>
                        <p className=' text-muted text-fs1 tw-font-fw--2'>175 cal</p>
                      </div>
                    </div>
                </div>
              </div>
            </div>
            {/* upgrade plan*/}
            <div className='  tw-px-3 tw-mb-6 md:tw-mb-0'>
                <div className=' tw-bg-white tw-rounded-xl tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-justify-between'>
                  <div className=' tw-p-4 md:p-7'>
                    <p className=' head3'>Upgrade your plan</p>
                    <p className=' tw-font-normal text-fs1'>So how did the classical Latin become so</p>
                    <div className=' tw-mt-7 tw-flex'>
                      <button className=' tw-px-7 tw-me-4 tw-py-3 bgPrimary hover-primary-btn tw-text-white tw-rounded-full tw-text-sm'>Go Premium</button>
                      <button className=' tw-px-7 tw-py-3 tw-border upgrade-btn tw-border-slate-600 tw-rounded-full tw-text-sm'>Try for free</button>
                    </div>
                  </div>
                  {/* upgrade img */}
                  <div className=' tw-px-4'>
                      <img src={upgrade} alt="" />
                  </div>
                </div>
            </div>
            {/* Text cards */}
            <div className=' tw-flex tw-items-center tw-px-3 tw-mt-6 tw-rounded tw-flex-wrap'>
              <div className=' tw-w-1/2 md:tw-w-1/4 tw-pe-3 tw-pb-3 md:tw-pb-0'>
                <div className=' tw-bg-white tw-px-5 tw-py-10 tw-rounded-xl'>
                  <div className=' tw-flex tw-items-center'>
                    <div>
                      <img src={heatred} alt="" />
                    </div>
                    <div className=' tw-ms-3'>
                      <p className=' text-fs1 tw-font-semibold'>Text</p>
                      <span className=' text-fs1 tw-font-semibold'>Num <span className=' text-fs1 text-muted tw-font-medium'> /ber</span></span>
                    </div>
                  </div>
                  <div className=' tw-h-[5px] tw-bg-[#E9ECEF] tw-rounded tw-overflow-hidden tw-mt-5'>
                    <div className=' tw-h-full tw-bg-[#FF5668] tw-w-2/3'></div>
                  </div>
                </div>
              </div>
              <div className=' tw-w-1/2 md:tw-w-1/4 tw-px-3 tw-pb-3 md:tw-pb-0'>
                <div className=' tw-bg-white tw-px-5 tw-py-10 tw-rounded-xl'>
                  <div className=' tw-flex tw-items-center'>
                    <div>
                      <img src={heatyellow} alt="" />
                    </div>
                    <div className=' tw-ms-3'>
                      <p className=' text-fs1 tw-font-semibold'>Text</p>
                      <span className=' text-fs1 tw-font-semibold'>Num <span className=' text-fs1 text-muted tw-font-medium'> /ber</span></span>
                    </div>
                  </div>
                  <div className=' tw-h-[5px] tw-bg-[#E9ECEF] tw-rounded tw-overflow-hidden tw-mt-5'>
                    <div className=' tw-h-full tw-bg-[#FFC405] tw-w-2/3'></div>
                  </div>
                </div>
              </div>
              <div className=' tw-w-1/2 md:tw-w-1/4 tw-px-3 tw-pt-3 md:tw-pt-0'>
                <div className=' tw-bg-white tw-px-5 tw-py-10 tw-rounded-xl'>
                  <div className=' tw-flex tw-items-center'>
                    <div>
                      <img src={heatTeal} alt="" />
                    </div>
                    <div className=' tw-ms-3'>
                      <p className=' text-fs1 tw-font-semibold'>Text</p>
                      <span className=' text-fs1 tw-font-semibold'>Num <span className=' text-fs1 text-muted tw-font-medium'> /ber</span></span>
                    </div>
                  </div>
                  <div className=' tw-h-[5px] tw-bg-[#E9ECEF] tw-rounded tw-overflow-hidden tw-mt-5'>
                    <div className=' tw-h-full tw-bg-[#41D5E2] tw-w-2/3'></div>
                  </div>
                </div>
              </div>
              <div className=' tw-w-1/2 md:tw-w-1/4 tw-ps-3 tw-pt-3 md:tw-pt-0'>
                <div className=' tw-bg-white tw-px-5 tw-py-10 tw-rounded-xl'>
                  <div className=' tw-flex tw-items-center'>
                    <div>
                      <img src={heatViolet} alt="" />
                    </div>
                    <div className=' tw-ms-3'>
                      <p className=' text-fs1 tw-font-semibold'>Text</p>
                      <span className=' text-fs1 tw-font-semibold'>Num <span className=' text-fs1 text-muted tw-font-medium'> /ber</span></span>
                    </div>
                  </div>
                  <div className=' tw-h-[5px] tw-bg-[#E9ECEF] tw-rounded tw-overflow-hidden tw-mt-5'>
                    <div className=' tw-h-full tw-bg-[#4D53E0] tw-w-2/3'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* user card */}
          <div className=" tw-w-full md:tw-w-1/3 tw-px-3 tw-my-10 md:tw-mt-0">
            <div className=' bgWhite tw-rounded-xl tw-p-7'>
                <div className=' tw-flex tw-items-center'>
                  <img src={user1} alt="" className=' tw-w-24 tw-h-24 tw-block tw-me-5 ' />
                  <div>
                    <p className=' tw-font-semibold'>Christina Karey</p>
                    <span className=' text-muted text-fs1'>Brasil</span>
                  </div>
                </div>
                <div className=' tw-flex tw-justify-around tw-mt-10'>
                  <div>
                    <p className=' head1 tw-font-semibold'>63 kg</p>
                    <p className=' text-muted text-fs1'>Weight</p>
                  </div>
                  <div>
                    <p className=' head1 tw-font-semibold'>175 cm</p>
                    <p className=' text-muted text-fs1'>Height</p>
                  </div>
                  <div>
                    <p className=' head1 tw-font-semibold'>23 y.</p>
                    <p className=' text-muted text-fs1'>age</p>
                  </div>
                </div>
                <div className=' tw-flex tw-justify-between tw-items-center tw-mt-14 tw-mb-10'>
                  <p className=' head1 tw-font-semibold'>Your Goals</p>
                  <div className=' tw-w-24'>
                  <Select
                    defaultValue={"Weekly"}
                    classNames={{input : 'week-input',dropdown: 'home-dropdown'}}
                    rightSection={<FaAngleDown size="1rem" color='#948C9E' />}
                    rightSectionWidth={30}
                    styles= {{dropdown : {top : '138px'}}}
                    data={['Weekly', 'Daily', 'Monthly']}
                  />
                  </div>
                </div>
                <div className=' tw-mb-12'>
                  <div className=' tw-flex tw-flex-col'>
                    <div className=' tw-flex tw-justify-between tw-items-center tw-mb-3'>
                      <p className=' text-fs1 tw-font-semibold'>Sleep</p>
                      <span className=' text-fs1 tw-font-semibold'>92 <span className=' tw-font-medium text-muted'>/160</span></span>
                    </div>
                    <div className=' tw-bg-[#E9ECEF] tw-h-[6px] tw-rounded-full tw-overflow-hidden'>
                      <div className=' tw-w-2/4 tw-bg-[#FF5668] tw-h-full'></div>
                    </div>
                  </div>
                  <div className=' tw-flex tw-flex-col tw-my-5'>
                    <div className=' tw-flex tw-justify-between tw-items-center tw-mb-3'>
                      <p className=' text-fs1 tw-font-semibold'>Sport</p>
                      <span className=' text-fs1 tw-font-semibold'>40 <span className=' tw-font-medium text-muted'>/50</span></span>
                    </div>
                    <div className=' tw-bg-[#E9ECEF] tw-h-[6px] tw-rounded-full tw-overflow-hidden'>
                      <div className=' tw-w-3/4 tw-bg-[#FFC405] tw-h-full'></div>
                    </div>
                  </div>
                  <div className=' tw-flex tw-flex-col'>
                    <div className=' tw-flex tw-justify-between tw-items-center tw-mb-3'>
                      <p className=' text-fs1 tw-font-semibold'>Water</p>
                      <span className=' text-fs1 tw-font-semibold'>25 <span className=' tw-font-medium text-muted'>/40</span></span>
                    </div>
                    <div className=' tw-bg-[#E9ECEF] tw-h-[6px] tw-rounded-full tw-overflow-hidden'>
                      <div className=' tw-w-1/4 tw-bg-[#41D5E2] tw-h-full'></div>
                    </div>
                  </div>
                </div>
                {/* Appointment */}
                <div>
                  <p className=' head1 tw-font-semibold tw-mb-4'>Appointments</p>
                  <div className=' tw-p-3 tw-flex tw-justify-evenly bgColor tw-items-center tw-mb-4'>
                    <img src={gym} alt="" />
                    <div>
                      <p className=' text-fs1  tw-font-semibold'>02.11 , 12:00 - 13:00</p>
                      <p className=' text-fs1 text-muted'>Yoga, Airplace Gym</p>
                    </div>
                    <div>
                      <input type='checkbox' className=' '/>
                    </div>
                  </div>
                  <div className=' tw-p-3 tw-flex tw-justify-evenly bgColor tw-items-center '>
                    <img src={therapy} alt="" />
                    <div>
                      <p className=' text-fs1  tw-font-semibold'>02.11 , 12:00 - 13:00</p>
                      <p className=' text-fs1 text-muted'>Yoga, Airplace Gym</p>
                    </div>
                    <div>
                      <input type='checkbox' className=' '/>
                    </div>
                  </div>
                </div>
                {/* Download */}
                <div>
                  <div className=' tw-p-3 tw-flex tw-justify-evenly tw-bg-[#FF3046] tw-items-center tw-mt-16 tw-rounded-xl'>
                    <img src={statis} alt="" />
                    <div className=' tw-text-white tw-ms-2'>
                      <p className=' head2'>STATISTIC</p>
                      <p className=' text-fs1 '>Download Your Acitivity</p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </main>
    {/* footer */}
      <div className=' tw-text-end bgColor tw-mt-auto'>
        <p>2021 © Flatlogic. Hand-crafted & Made with <AiFillHeart className=' tw-text-[#FF3046] tw-inline-block'/></p>
      </div>
    </section>
    
  )
}

export default Home