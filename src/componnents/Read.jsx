import { getDatabase,ref,get,remove} from "firebase/database";
import app from "../FirebaseConfig";
import { useEffect, useState } from "react";

const Read = () => {
    let [fruitArray, setFruitArray] = useState([]);
    
 useEffect(() =>{
    fetchData()
 },[])
  
    const fetchData = async () =>{
        const db = getDatabase(app);
        const dbref = ref(db, "ocd/reactJs");
        const snapshot = await get(dbref);
        if(snapshot.exists()){
            setFruitArray(Object.values(snapshot.val()));
    
        } else {
            alert("error");
        }
    }
    const handleDelete = async (index) => {
        const db = getDatabase(app);
        const dbref = `ocd/reactJs/${index}`;
        await remove(ref(db, dbref)); // Supprimer l'élément de la base de données
        fetchData();
    }

    return (
        <div>
           <h1> les datas de firebase</h1>
           <button onClick={fetchData}> Afficher les donnees</button>
           <ul>
            {console.log(fruitArray)}
            {fruitArray.map((item, index) => (
                <li key={index}>
                    {item.fruitName} : {item.fruitDefinition}
                    <button style={{ backgroundColor:'red', color:'white', margin:10}}
                     onClick={() => handleDelete(index)}>sup</button>
                </li>
            ))}
            
           </ul>
        </div>
    );
}

export default Read;
