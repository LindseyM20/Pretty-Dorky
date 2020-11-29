import React, { useEffect , useState } from "react";

function Dialogue() {
    const [screentext, setScreentext] =useState("");

    useEffect(() => {
        speedRead();
    }, []);

    var i = 0;
    var poem = "Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.";
    var words = poem.split(" ");

    async function speedRead(screentext) {
        // console.log(`${words} at start`);
        var textInterval = await setInterval(function() {
         if (words[i] === undefined) {
           clearInterval(textInterval);
        //    console.log(`${words} should be undefined`);
         } else {
           setScreentext(screentext += " " + words[i]);
        //    console.log(`${words} in loop at ${i}`);
           i++;
        }
    
        }, 500);
    }

    return (
        <p>
        {screentext}
        </p>
    );
}

export default Dialogue;