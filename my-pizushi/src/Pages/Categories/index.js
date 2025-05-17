import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {BASE_URL} from "../../api/apiConfig";
import axiosInstance from "../../api/axiosInstance";

const CategoriesPage = () => {
    
    const [list, setList] = useState([])

    useEffect(() => {
        axiosInstance.get("/api/Categories")
        .then(res => {
            const {data} = res;
            console.log("Get list of Categories", res.data);
            setList(data);
        })
        .catch(err => console.log("Problem", err))
        console.log('UseEffect APP', "Викликаємо після рендера");
    }, [])
    
    return (
        <>
        <h1 className={"text-center"}>Категорії</h1>
        <Link to={"Create"} className={"btn btn-primary"}>Додати</Link>

        {list.length === 0 ? <h1>Список пустий</h1> :
        <table className="table">
            <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Image</th>
            </tr>
            </thead>
            <tbody>
            {
            list.map((item) => (
                <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td><img src={`${BASE_URL}/images/200_${item.image}`} alt={item.name} width={75}/></td>
            </tr>
            ))
            }
            </tbody>
        </table>
        }
        </>        
    )
}

export default CategoriesPage;