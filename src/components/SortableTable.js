import Table from "./Table";
// import { useState } from "react";
import {GoArrowSmallDown,GoArrowSmallUp,GoArrowSmallup} from 'react-icons/go';
import useSort from "../hooks/use-sort";

function SortableTable(props){
    
    const {config,data} = props;
    const {
        sortOrder,
        sortBy,
        sortedData,
        setSortColumn
    } = useSort(data,config); 
    console.log("SortTable.js",sortedData);
    
    
    const updatedConfig = config.map((column)=>{
        if(!column.sortValue){
            return column;
        }

        return {
            ...column,
            header:()=>(
                <th className="cursor-pointer hover:bg-gray-100" onClick={()=>setSortColumn(column.label)}>
                    <div className="flex items-center">
                        
                        {getIcons(column.label,sortBy,sortOrder)}
                        {column.label}
                    </div>
                </th>
            )
        }
    })

    
    return <div>
            {sortBy}-{sortOrder}
            <Table {...props} data= {sortedData} config={updatedConfig}/>
        </div>

    function getIcons(label,sortBy,sortOrder){
        if(label != sortBy){
            return <div>
                <GoArrowSmallUp />
                <GoArrowSmallDown /> 
            </div>
        }
        else if(sortOrder == 'asc'){
            return <div>
                <GoArrowSmallUp />
                
            </div>
        }
        else if(sortOrder == 'desc'){
            return <div>
                
                <GoArrowSmallDown /> 
            </div>
        }
    }
}

export default SortableTable;
