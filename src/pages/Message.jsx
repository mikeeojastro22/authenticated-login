import { useState } from "react";
import { useData } from "../context/DataProvider";
import axios from 'axios';
import { API_URL } from "../constants/Constants";
import { useNavigate } from "react-router-dom";

function Message() {
    const { userHeaders } = useData();
    const [receiver, setReceiver] = useState();
    const [message, setMessage] = useState();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const messageInfo = {
                receiver_id: Number(receiver),
                receiver_class: "User",
                body: message
            }

            const response = await axios.post(`${API_URL}/messages`, messageInfo, { headers: userHeaders });

            const { data } = response;

            if(data.data) {
                navigate('/dashboard');
                return alert("Successfully sent a message!");
            }

            if(data.errors) {
                console.log(data.errors);
            }
        } catch(error){
            console.log(error);
        }
    };

    return (
        <div className="sendMessage">
            <form onSubmit={handleSubmit}>
                <label>Send to:</label>
                <input
                    type="number"
                    className="input-style"
                    onChange={(event) => setReceiver(event.target.value)}
                >
                </input>
                <label>Message:</label>
                <input
                    type="text"
                    className="input-style"
                    onChange={(event) => setMessage(event.target.value)}
                >
                </input>
                <button type='submit'>Send Message</button>
            </form>
        </div>
    );
};

export default Message;