import React, { useContext, useEffect , useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import CharContext from "../utils/CharContext";
import API from "../utils/API";
import Header from "../components/Header";

//import character 

// import { Container } from "react-bootstrap/lib/Tab";

function Battle() {
    //activates button and sets turn over should be false while dialogue is displaying
    const [turnbase, setTurnbase] = useState(false);
    const [screentext, setScreentext] = useState("");    
    const [enemyState, setEnemystats]= useState({
        name: "",
        level: 0,
        strength: 0,
        maxHealth: 0,
        currentHealth: 0,
    });
    const {characterState,setCharacterState} = useContext(CharContext);

    // const slime = new Character("Nice Slime", 1, 10, 50, 50);
    // const rogue = new Character("Dodger", 1, 20, 100, 100);

    // function Character(name, age, strength, hitpoints) {
    //     this.name = name;
    //     this.age = age;
    //     this.strength = strength;
    //     this.hitpoints = hitpoints;
    //     // //hitpoints is the value that changes out of total health
    //     this.maxHealth = hitpoints;
    // }
    useEffect(() => {

        //this could be redundant
        // API.getCharacter(characterState.uid
            /*...characterState, name: characterState.name,
            level: characterState.level,
            strength: characterState.strength,
            maxHealth: characterState.maxHealth,
            currentHealth: characterState.currentHealth,*/
        // ).then((res) => {
        //     setCharacterState(res);
        //     // window.location.href="/overworld"
        // }).catch((error) => {
        //     console.log(error)
        // });

        setEnemystats({
            name: "Slime",
            level: 1,
            strength: 10,
            maxHealth: 50,
            currentHealth: 50,
        });
        console.log(enemyState);
        speedRead(screentext, `A ${enemyState.name} appears to block your path Click on the options to initiate combat. `)
            .then((res) => {
                setTurnbase(res);
                console.log(turnbase);
            });
        // setScreentext(`A ${slime.name} appears to block your path Click on the options to initiate combat. `);
    }, []);

    useEffect(() =>{
        //does this update all stats if current is only changed
        API.update({...characterState, currentHealth: characterState.currentHealth})
        .then(() => {
            // window.location.href="/overworld"
         }).catch((error) => {
           console.log(error)
         })
    }, [characterState.currentHealth]);

    // useEffect(() => {
    //     speedRead(screentext)
    //         .then((res) => {
    //             setScreentext("");
    //             setTurnbase(res);
    //             console.log(turnbase);
    //         });
    // }, [screentext]);

    async function speedRead(screentext,params) {
        // setTurnbase(false);
        let i =0;
        // setScreentext("");
        let words = params.split("");
        let textInterval = setInterval(function () {
                if (words[i] === undefined) {
                    clearInterval(textInterval);
                }
                if (i === (words.length)) {
                    console.log("done with dialogue");
                    console.log(turnbase);
                    return true;
                }
                else {
                    setScreentext(screentext += words[i]);
                    i++;
                }
            }, 80);
    }

        // method which takes in a second object and decreases their "hitpoints" by this character's strength
    function attack() {
        // console.log(`${this.name} attacks ${character2.name}`)
        let dialogue = (characterState.name + " readies an attack at " + enemyState.name + "! " + characterState.name + " does " + characterState.strength + " damage to " + enemyState.name + "! ");
        // console.log(character2.currentHealth);
        // setScreentext(dialogue);
        console.log(`${enemyState.currentHealth} after damage`);
        setEnemystats.currentHealth -= characterState.strength;
        if (isAlive(enemyState) === false /*&& isAlive(characterState) === true*/){
            levelUp();
            dialogue +=( " You have defeated Slime! You feel a new found power growing within you! " + 
            characterState.name + " is now level " + characterState.age + ". Your Strength is now " + characterState.strength + 
            ". Your Health is now " +  characterState.hitpoints + " out of " + characterState.maxHealth + " total. ");
            speedRead(screentext,dialogue).then(() => {
                // setScreentext(screentext, "");
                API.update({...characterState, currentHealth: characterState.currentHealth})
                .then(() => {
                    window.location.href="/overworld"
                 }).catch((error) => {
                   console.log(error)
                 });
                // window.location.href="localhost:3000/overworld";
            });
        }
        // if (isAlive(characterState) === false) {
        //     dialogue += ("You have been defeated GAME OVER");
        //     speedRead(dialogue).then(() => {
        //         // speedRead(screentext, "You have been defeated GAME OVER")setScreentext(screentext, "You have been defeated GAME OVER");
        //         window.location.href="localhost:3000/signin";
        //     });
        // }
        else{
            //continue the fight
            dialogue += (enemyState.name + " readies an attack at " + characterState.name + " " + enemyState.name + " does " + enemyState.strength + " damage to " + characterState.name + ". ");
            setCharacterState.currentHealth -= enemyState.strength;
            // console.log(`${characterState.currentHealth} after damage`);
            if (isAlive(characterState) === false) {
                dialogue += ("You have been defeated GAME OVER");
                speedRead(screentext,dialogue).then(() => {
                    // speedRead(screentext, "You have been defeated GAME OVER")setScreentext(screentext, "You have been defeated GAME OVER");
                    window.location.href="/landing";
                });
            }
        }; 
        speedRead(screentext,dialogue).then((res) => {
            setTurnbase(res);
            console.log(turnbase);
        });
        // console.log(`${characterState.currentHealth} after damage`);
        // return Promise;
        // setScreentext("")
    };
      
    // method which increases this character's stats when called
    function levelUp() {
        setCharacterState.level += 1;
        setCharacterState.strength += 5;
        setCharacterState.maxHealth += 25;
        setCharacterState.currentHealth += 25;
        // speedRead(screentext, dialogue).then(() => {
            // setScreentext(screentext, "");
            // window.location.href="localhost:3000/overworld";
        // });
        // setScreentext(dialogue).then(() => {
        //     // setScreentext(screentext, "");
        //     window.location.href="localhost:3000/overworld";
        // });
    };
        
    // method which determines whether or not a character's "hitpoints" are less than zero
    // and returns true or false depending upon the outcome
    function isAlive(state) {
        if (state.currentHealth> 0) {
            // setScreentext(this.name + " is still alive!");
            // console.log(this.name + " is still alive!");
            return true;
        }
        // setScreentext(this.name + " has died!");
        // console.log(this.name + " has died!");
        return false;
    };

    // function combat() {
    //     console.log("combat starts");
    //     setScreentext("");
    //         rogue.attack(slime).then(() =>{
    //             setScreentext("");
    //             if (slime.isAlive() === false && rogue.isAlive() === true){
    //                 //continue the fight
    //                 rogue.levelUp();
    //             }
    //             if (rogue.isAlive() === false) {
    //                 setScreentext("You have been defeated GAME OVER").then(() => {
    //                     // speedRead(screentext, "You have been defeated GAME OVER")setScreentext(screentext, "You have been defeated GAME OVER");
    //                     window.location.href="localhost:3000/signin";
    //                 });
    //             }
    //             else{
    //                 slime.attack(rogue);
    //             };
    //             console.log(`Your hitpoints ${rogue.hitpoints}`);
    //             setTurnbase(true);
    //         });  
    // }
    function handleBtnClick(event) {
        // Get the title of the clicked button
                const btnName = event.target.getAttribute("data-value");
        if (turnbase === true){
            setScreentext("");
            setTurnbase(false);
            //turn order is run
            if (btnName === "Fight") {
                attack();
            } 
            else {
                speedRead(screentext,"You would like to run away").then((res)=>{
                    if (res === true){
                        if (Math.floor(Math.random()*2)>0){
                            setScreentext("You ran away successfully");
                            window.location.href="/overworld";
                        };
                    };
                });
            };
        }
        else {
            console.log("wait your turn");
        };
    };

    return (
        <div>
            <Row>
                <Header />
            </Row>
          <Row height = "400px">
            <p className="text-center h3">{screentext}</p>
          </Row>
          <Row height = "200px">
            <Col left-align>
                <Button variant="primary" size="lg" data-value="Fight" onClick={handleBtnClick} >Fight</Button>
            </Col>
            <Col center-align>
                <Button variant="primary" size="lg" data-value="Fight" onClick={handleBtnClick} >Fight</Button>
            </Col>
            <Col right-align>
                <Button variant="secondary" size="lg" data-value="Run" onClick={handleBtnClick} >Run</Button>
            </Col>
          </Row>
        </div>
      );
}

export default Battle;
