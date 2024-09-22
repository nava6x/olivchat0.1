import { useEffect, useState } from "react";
import { addDoc, collection, serverTimestamp, onSnapshot, query, where, orderBy, updateDoc, doc} from "firebase/firestore";
import { db } from "../firebase-config";
import Cookies from "universal-cookie";

const cookies = new Cookies()
const uname = cookies.get("usname")
export const Chat = (props) => {
    const {room} = props
    const [newMessage, setNewMessage] = useState("")
    const [messages, setMessages] = useState([])

    const messagesRef = collection(db,"messages")
    let date = new Date();
    let options = {timeZone: 'Australia/Canberra'};
    let eastCoastTime = date.toLocaleTimeString('en-US', options);
    let times = String(eastCoastTime).replace(eastCoastTime[0],"").replace(eastCoastTime[1],"").replace(eastCoastTime[2],"").replace(eastCoastTime[3],"").replace(eastCoastTime[4],"").replace(eastCoastTime[5],"").replace(eastCoastTime[6],"").replace(eastCoastTime[7],"")
    let times2 = String(eastCoastTime[0])
    let time3 = String([times2,times])
    let time4 = time3.replace(","," ")
    useEffect(() => {
        const queryMessages = query(messagesRef, where("room", "==", room), orderBy("createdAt"))
        const unsubscribe = onSnapshot(queryMessages, (snapshot)=>{
            let messages = [];        
            snapshot.forEach((doc) => {
                messages.push({ ...doc.data(), id: doc.id})
           });
           setMessages(messages);
        });
        return () => unsubscribe();
    }, []);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (newMessage === "") return;
        await addDoc(messagesRef, {
            text: newMessage,
            createdAt:serverTimestamp(),
            user:uname,
            time:time4,
            room,
        })
        setNewMessage("")
    }
return<div className="room">
    <div className="messages">
        {messages.map((message) => (
            <div className="message" key={message.id}>
            <span className="user">{message.user}</span>
            <p className="message">{message.text}</p>
            <span className="time">{message.time}</span>
            </div>
        ))}
        </div>
    <form onSubmit={handleSubmit} className="new-message-form">
        <input
        placeholder="Type your message here..."
        onChange={(e) => setNewMessage(e.target.value)}
        value={newMessage}
        />
        <button type="submit">Send</button>
    </form>
    </div>
}
