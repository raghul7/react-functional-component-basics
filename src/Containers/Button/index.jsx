function Button({buttonName,onClickFunction}) {
    return ( <div>
        <button onClick={() => onClickFunction()}>{buttonName}</button>
    </div> );
}

export default Button;