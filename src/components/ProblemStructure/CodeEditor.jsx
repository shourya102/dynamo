import React from 'react'
import ProblemDescriptio from './ProblemDescription/ProblemDescriptio';
import {GrRefresh} from 'react-icons/gr'
import {RxReset} from 'react-icons/rx'
import { Link , useLocation } from 'react-router-dom';


export default function CodeEditor(props) {
  const location = useLocation();

  const state = location.state;
  console.log(state);
  const cntstyle = {  height: `${870.875}px`
                      };
                     
  return (
        <div>
          <div>
          </div>
          <div className='flex  gap-2'>
            <div >
              
            </div>
            <ProblemDescriptio />
                      <div className={`w-[73%] flex flex-col gap-3 relative top-0 right-0` } style={cntstyle}>
                  <div className='bg-skin-base-2 h-[70%]  overflow-auto'>
                    <div className='flex justify-between p-3 mt-2  ps-6 bg-skin-base-3'>
                        <select name="lang" id="" className='focus:outline-none p-1 bg-transparent'>
                          <option value="C++">C++</option>
                          <option value="C">C</option>
                          <option value="GO">GO</option>
                          <option value="JavaScript">JavaScript</option>
                          <option value="python">python</option>
                        </select> 
                        <div className='flex gap-4'>
                        <RxReset size={30}  opacity={'100%'}></RxReset>
                          <GrRefresh size={30} opacity={'60%'} />
                        </div>
                    </div>
                    <div>

                    </div>

                  </div>
                  <div className='bg-skin-base-2 h-[29%]'>
                    <div className='flex gap-4 p-2 ps-6 bg-skin-base-3'>
                      <span className='ps-6'>TestCase</span>
                      <span className='ps-6'>Result</span> 
                      
                    </div>

                  </div>
              </div>

          </div>
        </div>
  )
}
