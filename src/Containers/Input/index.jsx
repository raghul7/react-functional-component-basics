function Input({name , value , type, labelName , onChangeFunction}) {
    return (<div>
        <label> {labelName} : 
            <input type={type} name={name} value={value} onChange={(e) => onChangeFunction(e)}></input>
        </label>
    </div>  );
}

export default Input;