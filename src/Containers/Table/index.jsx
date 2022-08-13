import omit from "lodash/omit";
function Table({heading,data}) {
    
   const getTableData = value => {
        const filter = omit(value, "id");
        return Object.values(filter).map((val, index) => (
          <td key={index}>            
              {val}             
          </td>
        ));
      };

    return ( <div>
        <table>
            <tr>
              {heading.map(tableHeading =>(<th>{tableHeading}</th> ))}  
            </tr>
            
               {data.map((item,index)   =>( <tr key={index}>{getTableData(item)}</tr> ))} 
            
        </table>
    </div> );
}

export default Table;