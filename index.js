const express = require("express");
const app=express();
let port=3000;
app.listen(port,()=>{
    console.log("server starts");
});
let joke1="I told my computer I needed a break, and now it won’t stop sending me beach wallpapers 😂😂";
let joke2="Parallel lines have so much in common… it’s a shame they’ll never meet.😂😂";
let joke3="I’m reading a book on anti-gravity — it’s impossible to put down!😂😂";
let joke4="I asked the dog what's two minus two. He said nothing.😂😂";
let joke5="I have a fear of speed bumps, but I’m slowly getting over it.😂😂";
let joke6="My math teacher called me average… how mean!😂😂";
let joke7="I only know 25 letters of the alphabet — I don’t know y.😂😂";
let joke8="I used to play piano by ear, but now I use my hands.😂😂";
let joke9="Why did the scarecrow win an award? Because he was outstanding in his field!😂😂";
let joke10="I told my Wi-Fi we needed space — now I’m disconnected.😂😂";
let joke=[joke1,joke2,joke3,joke4,joke5,joke6,joke7,joke8,joke9,joke10];
app.use((req,res)=>{
    let num=Math.floor(Math.random()*9)+0;
    res.send({
        body:joke[num],
        length:joke[num].length
});
});
