interface InputProps {
    data: string;
    placeholder : string;
    css_name? : string;
    css_input? : string;
    nav? : string;
}


export const InputBox = ({data, css_name='',css_input = '', placeholder }: InputProps) => {
    // return <div>
    //     <div className={`${css_name}`}>{data}</div>
    //     <input 
    //         className={`${css_input}`}
    //         type="text" 
    //         name="" 
    //         id=""
    //         placeholder = {placeholder} 
    //         />
    // </div>
    return <div>
        <label htmlFor={data} className={`${css_name}`}>{data}</label>
        <input type="text" id="first_name" className={`${css_input}`} placeholder="John" required />
    </div>
}