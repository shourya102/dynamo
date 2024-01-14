import React, { useState } from 'react'
import { MdDarkMode, MdKeyboardArrowDown } from "react-icons/md";
import ToggleableComponent from './ToggleableComponent';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Solution() {

  return (
    <div>
        <div className='p-8'>
            <div className='text-title font-semibold  mb-2'><span>Coding Questions name</span></div>
            <div> <span className=' text-[1.5rem]'>Problem - </span> <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet repellat officia, quo qui aliquam odit laboriosam quos natus est voluptates nesciunt dolore repellendus et minus ex, esse dolor! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, odio!</span>
            </div>
            <ToggleableComponent title="Example">
                <div><span>Example 1</span></div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quos ut natus commodi expedita aut velit! Officia praesentium, ullam animi assumenda dolor omnis magni architecto provident vel quas? Libero voluptate sunt quaerat optio eveniet quod labore architecto illo earum exercitationem voluptates expedita doloremque vero modi cupiditate, id, nobis aliquid tempora.</div>
            </ToggleableComponent>
            <ToggleableComponent title ="Brute Force Approach">
            <ToggleableComponent title="Explaination">
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quam. Consectetur corrupti molestiae modi corporis laboriosam a aut vero voluptas nam ullam pariatur itaque, alias placeat aliquam expedita adipisci laudantium mollitia voluptates dolorem quod tenetur esse. Sed et dolorem minima officia nam molestiae. Atque, repellat. Excepturi, voluptate. Ipsum, fugiat non!
                    </div>
                </ToggleableComponent>
                <ToggleableComponent title ="Code">                    
                    <SyntaxHighlighter language="cpp" >
                        {`
            class Student{  
                int id;  
                String name;  
            }  
            class TestStudent3{  
                public static void main(String args[]){  
                //Creating objects  
                Student s1=new Student();  
                Student s2=new Student();  
                //Initializing objects  
                s1.id=101;  
                s1.name="Sonoo";  
                s2.id=102;  
                s2.name="Amit";  
                //Printing data  
                System.out.println(s1.id+" "+s1.name);  
                System.out.println(s2.id+" "+s2.name);  
                }  
            }  
                        
                        `}
                    </SyntaxHighlighter>
                </ToggleableComponent>

            </ToggleableComponent>
            <ToggleableComponent title ="Better Approach">
                <ToggleableComponent title="Explaination">
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quam. Consectetur corrupti molestiae modi corporis laboriosam a aut vero voluptas nam ullam pariatur itaque, alias placeat aliquam expedita adipisci laudantium mollitia voluptates dolorem quod tenetur esse. Sed et dolorem minima officia nam molestiae. Atque, repellat. Excepturi, voluptate. Ipsum, fugiat non!
                    </div>
                </ToggleableComponent>
                <ToggleableComponent title ="Code">                    
                    <SyntaxHighlighter language="cpp" >
                        {`
            class Student{  
                int id;  
                String name;  
            }  
            class TestStudent3{  
                public static void main(String args[]){  
                //Creating objects  
                Student s1=new Student();  
                Student s2=new Student();  
                //Initializing objects  
                s1.id=101;  
                s1.name="Sonoo";  
                s2.id=102;  
                s2.name="Amit";  
                //Printing data  
                System.out.println(s1.id+" "+s1.name);  
                System.out.println(s2.id+" "+s2.name);  
                }  
            }  
                        
                        `}
                    </SyntaxHighlighter>
                </ToggleableComponent>

            </ToggleableComponent>
            <ToggleableComponent title ="Optimal Approach">
            <ToggleableComponent title="Explaination">
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quam. Consectetur corrupti molestiae modi corporis laboriosam a aut vero voluptas nam ullam pariatur itaque, alias placeat aliquam expedita adipisci laudantium mollitia voluptates dolorem quod tenetur esse. Sed et dolorem minima officia nam molestiae. Atque, repellat. Excepturi, voluptate. Ipsum, fugiat non!
                    </div>
                </ToggleableComponent>
                <ToggleableComponent title ="Code">                    
                    <SyntaxHighlighter language="cpp" style={atomDark}>
                        {`
            class Student{  
                int id;  
                String name;  
            }  
            class TestStudent3{  
                public static void main(String args[]){  
                //Creating objects  
                Student s1=new Student();  
                Student s2=new Student();  
                //Initializing objects  
                s1.id=101;  
                s1.name="Sonoo";  
                s2.id=102;  
                s2.name="Amit";  
                //Printing data  
                System.out.println(s1.id+" "+s1.name);  
                System.out.println(s2.id+" "+s2.name);  
                }  
            }                      
                        `}
                    </SyntaxHighlighter>
                </ToggleableComponent>
            </ToggleableComponent>
            <ToggleableComponent title ="Comment">
                <div className='flex flex-col justify-center items-center '>
                    <div className='flex flex-col justify-center w-[70%] shadow-md bg-skin-base-4 rounded-2xl p-6 items-center'>
                        <div className='w-[85%]  rounded-lg  h-[12rem] '>           
                            
                                <textarea cols={50} rows={14} type="text"  className='h-[70%] bg-skin-base-3 resize-none shadow-lg w-[100%] rounded-2xl  p-4' placeholder='Comment here' name="" id="" />
                                <div className=' h-[20%] w-[100%] flex flex-row md:justify-end pr-3 items-center'>
                                    <button className='p-2 px-3 rounded-2xl text-black bg-white'>Comment</button>
                                </div>
                        </div>
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </ToggleableComponent>            
        </div>
    </div>
  )
}
