import React, { useContext, useEffect , useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
// import { Link } from "react-router-dom";
import CharContext from "../utils/CharContext";

// import { Container } from "react-bootstrap/lib/Tab";

function Battle() {
    const [turnbase, setTurnbase] = useState(false);
    const [screentext, setScreentext] =useState("");    
    const [enemyState, setEnemystats]= useState({
        name: "Slime",
        level: 1,
        strength: 10,
        maxHealth: 50,
        currentHealth: 50,
    });
    const {characterState,setCharacterState} = useContext(CharContext);
    // const rogue = new Character(characterState);
    // const slime = new Character(enemyState);
    //"Nice Slime", 1, (10*(1+(rogue.level/10))), (50*(1+(rogue.level/10))), (50*(1+(rogue.level/10)))

    useEffect(() => {
        // setCharacterstats(activeCharacter);
        speedRead(screentext, `A ${slime.name} appears to block your path Click on the options to initiate combat. `)
        .then(() => {
            // setScreentext(screentext, "");
            setTurnbase(true);
         console.log(turnbase);
        });
    }, []);
    
    // function Character({ name, level, strength, maxHealth, currentHealth }) {
    //     this.name = name;
    //     this.level = level;
    //     this.strength = strength;
    //     this.maxHealth = maxHealth;
    //     this.currentHealth = currentHealth;
    // }
    
        // method which takes in a second object and decreases their "hitpoints" by this character's strength
    Character.prototype.attack = async function(character2) {
        console.log(`${this.name} attacks ${character2}`)
        let dialogue = (this.name + " readies an attack at " + character2.name + " " + this.name + " does " + this.strength + " damage to " + character2.name + ". ");
        console.log(character2.currentHealth);
        // 
        character2.currentHealth -= this.strength;
        await speedRead(screentext, dialogue);

        console.log(`${character2.currentHealth} after damage`);
        return ;
    };
      
    // method which increases this character's stats when called
    Character.prototype.levelUp = function() {
        this.level += 1;
        this.strength += 5;
        this.maxHealth += 25;
        this.currentHealth += 25;
        let dialogue = " You have defeated Slime! You feel a new found power growing within you! " + 
            this.name + " is now level " + this.level + ". Your Strength is now " + this.strength + 
            ". Your Health is now " +  this.currentHealth + " out of " + this.maxHealth + " total. ";
        speedRead(screentext, dialogue).then(() => {
            // setScreentext(screentext, "");
            // setCharacterstats(this)

            window.location.href="localhost:3000/overworld";
        });
    };
    
    // method which determines whether or not a character's "hitpoints" are less than zero
    // and returns true or false depending upon the outcome
    Character.prototype.isAlive = function() {
        if (this.hitpoints > 0) {
            console.log(this.name + " is still alive!");
            console.log("\n-------------\n");
            return true;
        }
        console.log(this.name + " has died!");
        return false;
    };
    
    // const slime = new Character("Nice Slime", 1, 10, 50);
    // const rogue = new Character("Dodger", 1, 20, 100);
    
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
          <h1 className="text-center">A Slime appears to block your path</h1>
          <p className="text-center h3">Click on the options to initiate combat</p>
          
          
          <Row>
            <Col>
                <Button variant="primary" size="lg" data-value="Fight" onClick={handleBtnClick} >Fight</Button>
            </Col>
            <Col></Col>
            <Col>
                <Button variant="secondary" size="lg" data-value="Run" onClick={handleBtnClick} >Run</Button>
            </Col>
          </Row>
        </div>
      );
}

export default Battle;