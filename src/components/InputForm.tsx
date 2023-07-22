import { useState } from "react";

interface Props{
    handleSubmit : (title:string, date: string)=>void;
}
// const handleClick = () => console.log('clicked');

function InputForm({ handleSubmit}:Props) {
    const date = new Date();
    const today = date.getFullYear() + '-0' + (date.getMonth()+1)+ '-'+ date.getDate();

    const [inputTitle,setInputTitle]= useState('');
    const [inputDate,setInputDate] = useState(today);
    return (
        <div>
            <div  className="input-group mb-3 container-sm"  id="">
                <input onChange={(e)=>setInputTitle(e.target.value)}  type="text" className="form-control" placeholder="待辦事項" aria-label="Username" aria-describedby="basic-addon1" />
                <input onChange={(e)=>setInputDate(e.target.value)} defaultValue={today} type="date" className="form-control" placeholder="" aria-label="Date" aria-describedby="basic-addon1" />
                <button onClick={()=>handleSubmit(inputTitle,inputDate)}  type="button" className="btn btn-primary">push</button>
            </div>
        </div>
    )
};

export default InputForm;