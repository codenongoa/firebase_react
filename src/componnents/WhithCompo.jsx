import { useState } from "react";
import app from "../FirebaseConfig";
import {getDatabase, ref, set, push} from 'firebase/database';
import { useNavigate } from "react-router-dom";
import React from 'react';

const WhithCompo = () => {f
    const navigate = useNavigate();

    let [inputValue1, setInputValue1] = useState(" ");
    let [inputValue2, setInputValue2] = useState(" ");

    const saveData = async () => {
        const db = getDatabase(app);
        // const newDocRef = push(ref(db, "nature/fruits"));
        const newDocRef = push(ref(db, "ocd/reactJs"));
        set(newDocRef, {
            fruitName: inputValue1,
            fruitDefinition: inputValue2
        }) .then(() => {
            alert("data saved successfully")
        }) .catch((error) => {
            alert("error ", error.message);
        });
    }


    return (
        <div className="" 
        style={{ borderRadius: 10, backgroundColor:'#77B5FE', padding: 8}}>
            <h1>Enregistrement</h1>
            <input type="text" value={inputValue1}
            onChange={(e) => setInputValue1(e.target.value)}
            style={{ borderRadius: 9, fontSize:20,padding:5}}
            />
            <br />
            <input type="text" value={inputValue2}
            onChange={(e) => setInputValue2(e.target.value)}
            style={{ borderRadius: 9, fontSize:20,margin:7, padding:5}}
            />
            <br />
            <button onClick={saveData} style={{backgroundColor:"#039", color:'white'}}> Enregistrer</button>
            <br />
            <br />
            <br />
            <div className="marg">
                <button className="button1" onClick={() => navigate("/updateread")}> Mise a jour</button>
                <br />
                <button onClick={() => navigate("/read")}> Lecture</button>
            </div>
           
        </div>
    );
}

export default WhithCompo;
