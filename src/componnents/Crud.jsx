import { useEffect, useState } from "react";
import {db} from '../FirebaseConfig'
import {collection, doc, addDoc, getDocs, 
    deleteDoc, updateDoc} from 'firebase/firestore'


const Crud = () => {
 
    const [ nom, setNom] = useState(" ");
    const [ fetchData, setFetchData] = useState([]);
    const [ id, setId] = useState();

    const dbRef = collection(db, 'CRUD');

    // envoyer les donnees
    const add = async () => {
        const adData = await addDoc(dbRef, {Nom: nom})
        if (adData) {
            alert ( 'Envoyer avec succes')
            window.location.reload()
        } else {
            alert(" erreur")
        }
    }

    // recuperer les donnees
    const fetch = async () =>{
        const snapshot = await getDocs(dbRef)
        const fetchdata = snapshot.docs.map(doc =>({id:doc.id, ...doc.data()}))
        setFetchData(fetchdata)
        console.log(fetchData)
    };

    useEffect(() =>{
        fetch()
    }, []);
// afficher les informations sur le champ input
    const passData = async (id) =>{
        const matchId = fetchData.find((data) =>{
            return data.id == id
        })

        setNom(matchId.Nom)
        setId(matchId.id)
    }

    // valider les donnees modifiers

    const update = async () => {
        const updateref = doc(dbRef, id)

        try {
            await updateDoc(updateref, {Nom: nom})
            alert(" modification effectuee")
            window.location.reload()
        } catch(error) {
            alert(error, " modification non effectuer")
        }
    }
    const deleted = async (id) => {
        const deletedref = doc(dbRef, id)

        try {
            await deleteDoc(deletedref)
            alert("suppression effectuee")
            window.location.reload()
        } catch(error) {
            alert(error, " suppression non effectuer")
        }
    }
    return (
        <div style={{backgroundColor:'#7db4f9',padding:15,borderRadius: 8, width: 807}}>
            <h2> Ajouter </h2>
            <input type="text" placeholder="nom" autoComplete="off" 
            value={nom} onChange={(e) =>setNom(e.target.value)} 
            style={{margin:2, borderRadius: 5, height:30, width:200}}/>
            <button onClick={add} 
            style={{ margin: 15, backgroundColor: "gray", color:"white"}}>Ajouter</button>
            <button onClick={update} 
            style={{ margin: 15, backgroundColor: "green", color:"white"}}>valider</button>
           
            {
                fetchData.map((data) => {
                    return (
                        <div key={data.id} 
                        style={{display:"flex", alignItems:"center",justifyContent:"space-between", margin: 23}}>
                            <h4> Nom:{data.Nom} </h4>
                            <div style={{display: "flex",justifyContent: "space-between" , alignItems:"center"}}>
                            <button onClick={() =>passData(data.id)} style={{backgroundColor:"#96D1EE"}}>Modifier</button>
                            <button onClick={() => deleted(data.id) } 
            style={{ margin: 5, backgroundColor: "red", color:"white"}}>delete </button>
                            </div>
                            
                        </div>
                    )
                })
            }
    
        </div>
    );
}

export default Crud;
