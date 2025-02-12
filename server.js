const WebSocket = require("ws");
const PORT = process.env.PORT || 8080;

const server = new WebSocket.Server({ port: PORT });

server.on("connection", (ws) => {
    console.log("✅ New Client Connected");

    ws.on("message", (message) => {
        console.log("📩 Received:", message);
        ws.send("Echo: " + message); // Sends response back to client
    });

    ws.on("close", () => {
        console.log("❌ Client Disconnected");
    });

    ws.on("error", (error) => {
        console.log("⚠️ WebSocket Error:", error);
    });
});

console.log(`🚀 WebSocket Server Running on Port ${PORT}`);
