
interface Props{
    children: string;
    color?: 'primary' | 'secondary' | 'success';
    onClick: ()=> void;
}

const Button= ({children, onClick, color}: Props)=> {

    return (
        <div>
            <button onClick={onClick} className={"btn btn-"+color}>
                {children}
            </button>
        </div>
    );

}

export default Button;