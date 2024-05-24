import './chat.css';
import EmojiPicker from "emoji-picker-react";
import {useState} from "react";

function Chat() {
    const [open, setOpen] = useState(false);
    const [text, setText] = useState("");
    const handleEmoji = e => {
        setText(prev => prev + e.emoji);
        setOpen(false);
    }

    return (
        <div className={'chat'}>
            <div className="top">
                <div className="user">
                    <img src="./avatar.png" alt=""/>
                    <div className="texts">
                        <span>Jane Doe</span>
                        <p>Lorem ipsum dolor, sit amet,</p>
                    </div>
                </div>
                <div className='icons'>
                    <img src="./more.png" alt=""/>
                    <img src="./video.png" alt=""/>
                    <img src="./edit.png" alt=""/>
                </div>
            </div>
            <div className="center"></div>
            <div className="bottom">
                <div className="icons">
                    <img src="./img.png" alt=""/>
                    <img src="./camera.png" alt=""/>
                    <img src="./mic.png" alt=""/>
                </div>
                <input type="text" placeholder='Type a message...' onChange={(e) => setText(e.target.value)} value={text}/>
                <div className='emoji'>
                    <img src="./emoji.png" alt="" onClick={() => setOpen(prev=> !prev)}/>
                    <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
                </div>
                <button className='sendButton'>Send</button>
            </div>
        </div>
    );
}

export default Chat;