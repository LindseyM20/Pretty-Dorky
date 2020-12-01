import React, { useEffect , useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

// import { Container } from "react-bootstrap/lib/Tab";

function Battle() {
    const [turnbase, setTurnbase] = useState(true);

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
        if (character2.isAlive() === true && this.isAlive() === true){
            //continue the fight
            setTurnbase(true);
        }
        else{this.levelUp()};
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
    
    const slime = new Character("Nice Slime", 1, 10, 50);
    const rogue = new Character("Dodger", 1, 20, 100);
    
    function handleBtnClick(event) {
        // Get the title of the clicked button
        const btnName = event.target.getAttribute("data-value");
        if (btnName === "Fight") {
            if (turnbase === true){
                setTurnbase(false);
                //turn order is run
                rogue.attack(slime);
                slime.attack(rogue);
                console.log(`Your hitpoints ${rogue.hitpoints}`);
            }
            else {
                console.log("wait your turn");
            }
        } 
        else {
            console.log("You would like to run away")
        }
    }

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
