import React, { useContext, useEffect , useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import CharContext from "../utils/CharContext";
// import Healthbar from "../components/Healthbar";
import { useHistory } from "react-router-dom";
import "./Battle.css";
import enemy from "./Overworld/images/evilClippy.png";
import Header from "../components/Header";

// import { Container } from "react-bootstrap/lib/Tab";

function Battle() {
    const [turnbase, setTurnbase] = useState(true);
    let history = useHistory();
    const slime = new Character("Nice Slime", 1, 10, 50);
    const rogue = new Character("Dodger", 1, 20, 100);
  

    // useContext
    const {characterState,setCharacterState} = useContext(CharContext);

    const returnState = {...characterState,
        currentHealth: rogue.hitpoints,
        location: "/overworld",
    };

    const levelupState = {...characterState,
        level: characterState.level+=1,
        strength: characterState.strength+=5,
        maxHealth: characterState.maxHealth+=25,
        currentHealth: rogue.hitpoints+=25,
        location: "/overworld", 
    };

    function Character(name, age, strength, hitpoints) {
        this.name = name;
        this.age = age;
        this.strength = strength;
        this.hitpoints = hitpoints;
    }

        // method which takes in a second object and decreases their "hitpoints" by this character's strength
    Character.prototype.attack = function(character2) {
        console.log(`${this.name} readies an attack at ${character2.name}`);
        character2.hitpoints -= this.strength;
        console.log(`${this.name} does ${this.strength} damage to ${character2.name}`);
    };
      
    // method which increases this character's stats when called
    Character.prototype.levelUp = function() {
        this.age += 1;
        this.strength += 5;
        this.hitpoints += 25;
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
      
    function handleBtnClick(event) {
        // Get the title of the clicked button
        const btnName = event.target.getAttribute("data-value");
        if (btnName === "Fight") {
            if (turnbase === true){
                setTurnbase(false);
                //turn order is run
                
                if (rogue.isAlive() === true && slime.isAlive() === true){
                    //continue the fight
                    rogue.attack(slime);
                    if(slime.isAlive() === true){
                        rogue.levelUp();
                        setCharacterState(levelupState);
                        history.push(characterState.location);                        
                    }
                    else{slime.attack(rogue);

                    }
                }
                
                console.log(`Your hitpoints ${rogue.hitpoints}`);
                setTurnbase(true);

            }
            else {
                console.log("wait your turn");
            }
        } 
        else {
                if (Math.floor(Math.random()*2)>0){
                console.log("You would like to run away");
                setCharacterState(returnState);
                history.push(characterState.location);
            };
        }
    }
    return (
        <div>
            <Header />
            <Row>
                <div className="card" id="fight">

                    <div id="characterFight"></div>
                    <div id="enemyFight">
                        <img id="enemy" src={enemy} alt="enemy"></img>
                    </div>


                </div>
            </Row>


            <Row>
                <div className="card" id="fightText">
                    <h1 className="text-center">A Slime appears to block your path</h1>
                    <p className="text-center h3">Click on the options to initiate combat</p>
                </div>
            </Row>

            <Row>
                <Col className="col-6">
                    <Button variant="primary" size="lg" data-value="Fight" onClick={handleBtnClick} >Fight</Button>
                </Col>
                <Col></Col>
                <Col className="col-6">
                    <Button variant="secondary" size="lg" data-value="Run" onClick={handleBtnClick} >Run</Button>
                </Col>
            </Row>
        </div>
    );
}

export default Battle;
