import { useEffect, useState } from "react";
import { getProject } from "../../api/project";
import { ProjectObject } from "../../api/interface/project";

const Project = ()=>{
    const [list,setList] = useState<ProjectObject[]>([])
    const getProjectList = async ()=>{
        const res = await getProject();
        const data = res.data;
        setList(data);
    }
    useEffect(()=>{
        getProjectList()
    },[])
    return <>
        <div className="project">
            project
            {
                list.map(item=>{
                    return (<div key={item.id}>{item.name}</div>)
                })
            }
        </div>
    </>
}

export default Project;