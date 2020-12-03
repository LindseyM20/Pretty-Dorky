import React, { useContext, useEffect , useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import CharContext from "../utils/CharContext";
//import character 

// import { Container } from "react-bootstrap/lib/Tab";

function Battle() {
    //activates button and sets turn over should be false while dialogue is displaying
    const [turnbase, setTurnbase] = useState(false);
    const [screentext, setScreentext] = useState("");    
    const [enemyState, setEnemystats]= useState({
        name: "Slime",
        level: 1,
        strength: 10,
        maxHealth: 50,
        currentHealth: 50,
    });
    const {characterState,setCharacterState} = useContext(CharContext);

    const slime = new Character("Nice Slime", 1, 10, 50, 50);
    const rogue = new Character("Dodger", 1, 20, 100, 100);

    function Character(name, age, strength, hitpoints) {
        this.name = name;
        this.age = age;
        this.strength = strength;
        this.hitpoints = hitpoints;
        // //hitpoints is the value that changes out of total health
        this.maxHealth = hitpoints;
    }

    useEffect(() => {
        setScreentext(`A ${slime.name} appears to block your path Click on the options to initiate combat. `);
        setTurnbase(true);
        // speedRead(screentext, `A ${slime.name} appears to block your path Click on the options to initiate combat. `)
        //     .then(() => {
                // setScreentext(screentext, "");
                // setTurnbase(true);
            //     console.log(turnbase);
            // });
    }, []);

    // async function speedRead(screentext,params) {
    //     setTurnbase(false);
    //     let i =0;
    //     setScreentext("");
    //     let words = params.split("");
    //     let textInterval = setInterval(await function() {
    //         if (words[i] === undefined) {
    //         clearInterval(textInterval);
    //         } 
    //         if (i === (words.length)) {
    //             console.log("done with dialogue");
    //             // setScreentext("");
    //             setTurnbase(true);
    //             console.log(turnbase);
    //             return Promise;
    //         }
    //         else {
    //             setScreentext(screentext += words[i]);
    //             i++;
    //         }
    //     }, 80);
    // }

        // method which takes in a second object and decreases their "hitpoints" by this character's strength
    Character.prototype.attack = function(character2) {
        console.log(`${this.name} attacks ${character2.name}`)
        let dialogue = (this.name + " readies an attack at " + character2.name + " " + this.name + " does " + this.strength + " damage to " + character2.name + ". ");
        console.log(character2.currentHealth);
        setScreentext(dialogue);
        character2.currentHealth -= this.strength;

        // await speedRead(screentext, dialogue);
        console.log(`${character2.currentHealth} after damage`);
        // return Promise;
        // setScreentext("")
    };
      
    // method which increases this character's stats when called
    Character.prototype.levelUp = function() {
        this.level += 1;
        this.strength += 5;
        this.maxHealth += 25;
        this.currentHealth += 25;
        let dialogue = " You have defeated Slime! You feel a new found power growing within you! " + 
            this.name + " is now level " + this.age + ". Your Strength is now " + this.strength + 
            ". Your Health is now " +  this.hitpoints;
        // speedRead(screentext, dialogue).then(() => {
            // setScreentext(screentext, "");
        //     window.location.href="localhost:3000/overworld";
        // });
        setScreentext(dialogue).then(() => {
            // setScreentext(screentext, "");
            window.location.href="localhost:3000/overworld";
        });
    };
    
    // method which determines whether or not a character's "hitpoints" are less than zero
    // and returns true or false depending upon the outcome
    Character.prototype.isAlive = async function() {
        if (this.currentHealth> 0) {
            setScreentext(this.name + " is still alive!");
            console.log(this.name + " is still alive!");
            return true;
        }
        setScreentext(this.name + " has died!");
        console.log(this.name + " has died!");
        return false;
    };
    
    // function secondPhase()


    function combat() {
        console.log("combat starts");
        setScreentext("");
            rogue.attack(slime).then(() =>{
                setScreentext("");
                if (slime.isAlive() === false && rogue.isAlive() === true){
                    //continue the fight
                    rogue.levelUp();
                }
                if (rogue.isAlive() === false) {
                    setScreentext("You have been defeated GAME OVER").then(() => {
                        // speedRead(screentext, "You have been defeated GAME OVER")setScreentext(screentext, "You have been defeated GAME OVER");
                        window.location.href="localhost:3000/signin";
                    });
                }
                else{
                    slime.attack(rogue);
                };
                console.log(`Your hitpoints ${rogue.hitpoints}`);
                setTurnbase(true);
            });  
    }
    function handleBtnClick(event) {
        // Get the title of the clicked button
        
        const btnName = event.target.getAttribute("data-value");
        if (turnbase === true){
            setScreentext("");
            setTurnbase(false);
            //turn order is run
            if (btnName === "Fight") {
                
                combat();
            } 
            else {
                setScreentext("You would like to run away");
                if (Math.floor(Math.random()*2)>0){
                    setScreentext("You ran away successfully");
                    window.location.href="/overworld";
                };
                // speedRead(screentext, "You would like to run away");
                // if (Math.floor(Math.random()*2)>0){
                //     speedRead(screentext, "You ran away successfully");
                //     window.location.href="/overworld";
                // };
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
