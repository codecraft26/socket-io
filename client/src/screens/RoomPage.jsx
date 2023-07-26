import React,{useState,useEffect,useCallback} from 'react'
import { useSocket } from '../context/SocketProvider'

import ReactPlayer from "react-player";

const RoomPage = () => {
  const socket = useSocket();
  const [remoteSocketId, setRemoteSocketId] = useState(null);
  const [myStream, setMyStream] = useState();
  const [remoteStream, setRemoteStream] = useState();
  //  remote socket 
  return (
    <div>
   <h1>Room Page</h1>

   <h4>{remoteSocketId ? "Connected" : "No one in room"}</h4>

  {remoteSocketId && <button>CALL</button>}
    </div>
  )
}

export default RoomPage
