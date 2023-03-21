import { setLocalStream, setRemoteStream } from "../store/actions/roomAction";
import store from "../store/store";
import Peer from "simple-peer";
import { signalPeerData } from "./connectSocketServer";
const onlyAudioConstraint = {
  video: false,
  audio: true,
};
const defaultConstraint = {
  video: true,
  audio: true,
};

export const getLocalStream = (onlyAudio = false, callback) => {
  const contraints = onlyAudio ? onlyAudioConstraint : defaultConstraint;

  navigator.mediaDevices
    .getUserMedia(contraints)
    .then((stream) => {
      
          store.dispatch(setLocalStream(stream));
      callback();
    })
    .catch((er) => {
      console.log(er, "Cannot get an access to local stream");
    });
};

let peers = {};
export const prepareNewPeerConnection = (conUserSocketId, isInitiator) => {
  const localStream = store.getState().room.localStream;
  if (isInitiator) {
    console.log("isInitiator");
  } else {
    console.log("not initiator");
  }
  peers[conUserSocketId] = new Peer({
    initiator: isInitiator,
    stream: localStream,
  });
  //these event will be emitted by peer object

  peers[conUserSocketId].on("signal", (data) => {
    const signalData = {
      signal: data,
      conUserSocketId: conUserSocketId,
    };

    signalPeerData(signalData);
  });

  peers[conUserSocketId].on("stream", (remoteStream) => {
    remoteStream.conUserSocketId = conUserSocketId;
    addRemoteStream(remoteStream);
  });
};

export const handleSignalingData = (data) => {
  const { conUserSocketId, signal } = data;
  if (peers[conUserSocketId]) {
    peers[conUserSocketId].signal(signal);
  }
};

const addRemoteStream = (remoteStream) => {
  let remoteStreams = store.getState().room.remoteStream;

  remoteStreams = [...remoteStreams, remoteStream];
  store.dispatch(setRemoteStream(remoteStreams));
};

export const closeAllConnections = () => {
  for (let key in peers) {
    peers[key].destroy();
    delete peers[key];
  }
};

export const closeConnection = ({ leftUserSocketId }) => {
  if (peers[leftUserSocketId]) {
    peers[leftUserSocketId].destroy();
    delete peers[leftUserSocketId];

    const remoteStream = store.getState().room.remoteStream;

    const newRemoteStream = remoteStream.filter((stream) => {
      return stream.conUserSocketId !== leftUserSocketId;
    });
  
    store.dispatch(setRemoteStream(newRemoteStream));
  }
};

export const switchOutgoingTracks = (stream) => {
  for (let socket_id in peers) {
    for (let index in peers[socket_id].streams[0].getTracks()) {
      for (let index2 in stream.getTracks()) {
        if (
          peers[socket_id].streams[0].getTracks()[index].kind ===
          stream.getTracks()[index2].kind
        ) {
          peers[socket_id].replaceTrack(
            peers[socket_id].streams[0].getTracks()[index],
            stream.getTracks()[index2],
            peers[socket_id].streams[0]
          );
          break;
        }
      }
    }
  }
};