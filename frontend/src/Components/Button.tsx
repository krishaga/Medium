import { useNavigate } from "react-router-dom";

interface ButtonProps {
    data: string;
    css? : string;
    nav? : string;
}

export const Button = ({ data, css = '', nav }: ButtonProps) => {
    const navigate = useNavigate()
    return (
        <div>
            <button className={`bg-black rounded-full text-white px-4 py-2 font-semibold font-montserrat ${css}`} onClick={()=>{
                navigate(`${nav}`)
            }}>{data}</button>
        </div>
    );
};
