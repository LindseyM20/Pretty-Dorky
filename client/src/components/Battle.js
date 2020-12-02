import React, { useEffect , useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
//import character 

// import { Container } from "react-bootstrap/lib/Tab";

function Battle() {
    //activates button and sets turn over should be false while dialogue is displaying
    const [turnbase, setTurnbase] = useState(false);
    const [screentext, setScreentext] =useState("");    
    // const [player, setTurnbase] = useState();
    // const [playerState, setDeveloperState] = useState({
    //     maxHealth: 1000,
    //     hitpoints: true,
    //     age: true,
    //     lifeLongLearner: true,
    //     name: "Riley",
    //   });
    //   const [foeState, setDeveloperState] = useState({
    //     maxHealth: 1000,
    //     hitpoints: true,
    //     age: true,
    //     lifeLongLearner: true,
    //     name: "Riley",
    //   });

    const slime = new Character("Nice Slime", 1, 10, 50);
    const rogue = new Character("Dodger", 1, 20, 100);

    function Character(name, age, strength, hitpoints) {
        this.name = name;
        this.age = age;
        this.strength = strength;
        this.hitpoints = hitpoints;
        // //hitpoints is the value that changes out of total health
        this.maxHealth = hitpoints;
    }

    useEffect(() => {
        speedRead(screentext, `A ${slime.name} appears to block your path Click on the options to initiate combat. `)
        // .then(() => {
            // setScreentext(screentext, "");
        //     setTurnbase(turnbase,true);
        //  console.log(turnbase);
        // });
    }, []);

    async function speedRead(screentext,params) {
        let i =0;
        setScreentext("");
        let words = params.split("");
        let textInterval = setInterval(await function() {
            if (words[i] === undefined) {
            clearInterval(textInterval);
            } 
            if (i === words.length) {
                console.log("done with dialogue");
                // setScreentext("");
                setTurnbase(true);
                return Promise;
            }
            else {
                setScreentext(screentext += words[i]);
                i++;
            }
        }, 80);
    }


    
        // method which takes in a second object and decreases their "hitpoints" by this character's strength
    Character.prototype.attack =  async function(character2) {
        console.log(`${this.name} attacks ${character2}`)
        let dialogue = (this.name + " readies an attack at " + character2.name + " " + this.name + " does " + this.strength + " damage to " + character2.name + ". ");
        console.log(character2.hitpoints);
        //


        character2.hitpoints -= this.strength;
        await speedRead(screentext, dialogue);
        console.log(`${character2.hitpoints} after damage`);
        return ;
        // setScreentext(screentext, "")
    };
      
    // method which increases this character's stats when called
    Character.prototype.levelUp = function() {
        this.age += 1;
        this.strength += 5;
        this.hitpoints += 25;
        // this.health += 25;
        let dialogue = " You have defeated Slime! You feel a new found power growing within you! " + 
            this.name + " is now level " + this.age + ". Your Strength is now " + this.strength + 
            ". Your Health is now " +  this.hitpoints;
        speedRead(screentext, dialogue).then(() => {
            // setScreentext(screentext, "");
            window.location.href="localhost:3000/overworld";
        });
    };
    
    // method which determines whether or not a character's "hitpoints" are less than zero
    // and returns true or false depending upon the outcome
    Character.prototype.isAlive = function() {
        if (this.hitpoints > 0) {
            console.log(this.name + " is still alive!");
            return true;
        }
        console.log(this.name + " has died!");
        return false;
    };
    
    async function combat() {
        console.log("combat starts");
        try {
            await rogue.attack(slime).then(() =>{

                if (slime.isAlive() === false && rogue.isAlive() === true){
                    //continue the fight
                    rogue.levelUp();
                }
                if (rogue.isAlive() === false) {
                    speedRead(screentext, "You have been defeated GAME OVER").then(() => {
                        // setScreentext(screentext, "");
                        window.location.href="localhost:3000/signin";
                    });
                }
                else{
                    slime.attack(rogue);
                };
            });
            console.log(`Your hitpoints ${rogue.hitpoints}`);
            setTurnbase(true);
        }
        catch(error) {
            console.log(error);
        };
    }
    function handleBtnClick(event) {
        // Get the title of the clicked button
        
        const btnName = event.target.getAttribute("data-value");
        if (turnbase === true){
            //turn order is run
            if (btnName === "Fight") {
                setScreentext("");
                setTurnbase(false);
                combat();
            } 
            else {
                speedRead(screentext, "You would like to run away");
                if (Math.floor(Math.random()*2)>0){
                    speedRead(screentext, "You ran away successfully");
                    window.location.href="/overworld";
                };
            };
        }
        else {
            console.log("wait your turn");
        };
    };

    return (
        <div>
          <Row>
            <p className="text-center h3">{screentext}</p>
          </Row>
          <Row>
            <Col>
                <Button variant="primary" size="lg" data-value="Fight" onClick={handleBtnClick} >Fight</Button>
            </Col>
            <Col><br/></Col>
            <Col>
                <Button variant="secondary" size="lg" data-value="Run" onClick={handleBtnClick} >Run</Button>
            </Col>
          </Row>
        </div>
      );
}

export default Battle;