export default function Square({value,onSquareClick}:{value:any,onSquareClick:()=>void}) {

    return(
        <button className="square hover:bg-teal-500 hover:cursor-pointer "
        onClick={onSquareClick}
        >
            {value}
        </button>
    )
}
