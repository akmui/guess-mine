const socket = io("/");
setTimeout(() => socket.emit("helloGuys"), 4000);