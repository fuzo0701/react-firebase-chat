import React from 'react';
import './detail.css';
import {auth, db} from "../../lib/firebase.js";
import {useChatStore} from "../../lib/chatStore.js";
import {useUserStore} from "../../lib/userStore.js";
import {arrayRemove, arrayUnion, doc, updateDoc} from "firebase/firestore";

function Detail() {

    const { chatId, user, isCurrentUserBlocked, isReceiverBlocked, chaneBlock} = useChatStore();
    const {currentUser} = useUserStore();

    const handleBlockUser = async () => {
        if(!user) return;

        const userDocRef = doc(db, "users", currentUser.id);

        try {

            await updateDoc(userDocRef, {
                blocked: isReceiverBlocked ? arrayRemove(user.id) : arrayUnion(user.id),
            });

            chaneBlock();

        }catch (e) {
            console.log(e);
        }
    }

    return (
        <div className={'detail'}>
            <div className="user">
                <img src={user?.avatar || './avatar.png'} alt=""/>
                <h2>{user?.username}</h2>
                <p>Loren ipsum dolor sit amet.</p>
            </div>
            <div className="info">
                <div className="option">
                    <div className="title">
                        <span>Chat Setting</span>
                        <img src="./arrowUp.png" alt=""/>
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Privacy % help</span>
                        <img src="./arrowUp.png" alt=""/>
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared photos</span>
                        <img src="./arrowDown.png" alt=""/>
                    </div>
                    <div className="photos">
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://d2v80xjmx68n4w.cloudfront.net/gigs/EwczA1697528766.jpg" alt=""/>
                                <span>photo_2024_2.png</span>
                            </div>
                            <img src="./download.png" alt="" className='icon'/>
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://d2v80xjmx68n4w.cloudfront.net/gigs/EwczA1697528766.jpg" alt=""/>
                                <span>photo_2024_2.png</span>
                            </div>
                            <img src="./download.png" alt="" className='icon'/>
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://d2v80xjmx68n4w.cloudfront.net/gigs/EwczA1697528766.jpg" alt=""/>
                                <span>photo_2024_2.png</span>
                            </div>
                            <img src="./download.png" alt="" className='icon'/>
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://d2v80xjmx68n4w.cloudfront.net/gigs/EwczA1697528766.jpg" alt=""/>
                                <span>photo_2024_2.png</span>
                            </div>
                            <img src="./download.png" alt="" className='icon'/>
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://d2v80xjmx68n4w.cloudfront.net/gigs/EwczA1697528766.jpg" alt=""/>
                                <span>photo_2024_2.png</span>
                            </div>
                            <img src="./download.png" alt="" className='icon'/>
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://d2v80xjmx68n4w.cloudfront.net/gigs/EwczA1697528766.jpg" alt=""/>
                                <span>photo_2024_2.png</span>
                            </div>
                            <img src="./download.png" alt="" className='icon'/>
                        </div>
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared Files</span>
                        <img src="./arrowUp.png" alt=""/>
                    </div>
                </div>
                <button onClick={handleBlockUser}>
                    {
                        isCurrentUserBlocked ? "You are Blocked!" : isReceiverBlocked ? "User blocked" : "Block User"
                    }
                </button>
                <button className='logout' onClick={() => auth.signOut()}>Logout</button>
            </div>
        </div>
    );
}

export default Detail;