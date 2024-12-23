import { Quote } from "../Components/Quote"
import { InputBox } from "../Components/InputBox"
import { Button } from "../Components/Button"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export const Singup = () => {
    const navigate = useNavigate();
    const handleSingup = async () => {
        const response = await axios.post("http://localhost:3000/api/v1/user/signup",{
            
        })
    }
    return<div className = "grid grid-cols-2">
        <div className = "flex flex-col items-center justify-center">     
            <div className="flex flex-col items-center justify-center">
                <div className="text-4xl font-bold">
                    Create an account
                </div>
                <div className="flex text-lg text-gray-500 pt-2 gap-2">
                    <div>
                        Already have an account?
                    </div>
                    <div className="underline cursor-pointer" onClick={()=> {
                        navigate('../signin')
                    }}>
                        Signin
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2 pt-4" >
                <InputBox 
                    data="Name" 
                    placeholder="Enter your Name" 
                    css_name="block mb-2 font-medium" 
                    css_input="border border-gray-300 w-[344px] rounded-lg p-2"
                />
                <InputBox 
                    data="Email" 
                    placeholder="Enter your Email" 
                    css_name="block mb-2 font-medium"
                    css_input="border border-gray-300 w-[344px] rounded-lg p-2" 
                />
                <InputBox 
                    data="Password" 
                    placeholder="Enter your Password" 
                    css_name="block mb-2 font-medium"
                    css_input="border border-gray-300 w-[344px] rounded-lg p-2"
                />
            </div>
            <div className="pt-8">
                <Button data="Signup" css=" px-36 w-[344px] rounded-md "/>
            </div>
        </div>
        <div className = "invisible lg:visible">
            <Quote/>
        </div>
    </div>
}