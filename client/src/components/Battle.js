import React, { useEffect , useState } from "react";
import { Button, Col, Row } from "react-bootstrap";

// import { Container } from "react-bootstrap/lib/Tab";

function Battle() {
    //activates button and sets turn over should be false while dialogue is displaying
    const [turnbase, setTurnbase] = useState(false);
    const [screentext, setScreentext] =useState("");    

    useEffect(() => {
        speedRead(screentext, "A Slime appears to block your path Click on the options to initiate combat")
        .then(() => {
            setScreentext(screentext, "");
            setTurnbase(true);
        });
    }, []);

    async function speedRead(screentext,params) {
        let i =0;
        setScreentext(screentext, "");
        let words = params.split(" ");
        let textInterval = setInterval(function() {
            if (words[i] === undefined) {
            clearInterval(textInterval);
            } 
            if (i === words.length) {
                return Promise;
            }
            else {
                setScreentext(screentext += " " + words[i]);
                i++;
            }
        }, 300);
    }

    function Character(name, age, strength, hitpoints) {
        this.name = name;
        this.age = age;
        this.strength = strength;
        this.hitpoints = hitpoints;
        // //hitpoints is the value that changes out of total health
        // this.health = hitpoints;
    }
    
        // method which takes in a second object and decreases their "hitpoints" by this character's strength
    Character.prototype.attack = async function(character2) {
        let dialogue = this.name + " readies an attack at " + character2.name + " " + this.name + " does " + this.strength + " damage to " + character2.name
        character2.hitpoints -= this.strength;
        speedRead(screentext, dialogue).then(
            setScreentext(screentext, ""));
        
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
        // this.health += 25;
        let dialogue = " You have defeated Slime! You feel a new found power growing within you! " + 
            this.name + " is now level " + this.age + ". Your Strength is now " + this.strength + 
            ". Your Health is now " +  this.hitpoints;
        speedRead(screentext, dialogue).then(() => {
            setScreentext(screentext, "");
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
            };
        } 
        else {
            console.log("You would like to run away");
            if (Math.floor(Math.random()*2)>0){
                console.log("You ran away successfully");
                window.location.href="/overworld";
            };
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
            <Col></Col>
            <Col>
                <Button variant="secondary" size="lg" data-value="Run" onClick={handleBtnClick} >Run</Button>
            </Col>
          </Row>
        </div>
      );
}

export default Battle;