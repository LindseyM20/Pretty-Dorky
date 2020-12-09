import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import CharContext from "../utils/CharContext";
import { useHistory } from "react-router-dom";
import enemy from "./Overworld/images/evilClippy.png";
import hero from "./images/rougeBattle.png";
import Header from "../components/Header";
import "./Battle.css";
import Clippy from "./Overworld/images/evilClippy.png";
import Econ from "./Overworld/images/explorer.png";
import Bugg from "./Overworld/images/moth.png";
import Skinny_Cat from "./Overworld/images/cat.png";
import { UserContext } from "../providers/UserProvider";
import API from "../utils/API";

function Battle() {
    // useContext
    const {characterState,setCharacterState} = useContext(CharContext);
    const battleImage = characterState.battleImage;
    const user = useContext(UserContext);
    //combine into one state
    const [battleState, setBattleState] = useState({
        turnbase: false,
        screentext: "",
        enemyState: {
            name: "",
            strength: 0,
            maxHealth: 0,
            currentHealth: 0,
        }
    });
    const {turnbase, screentext, enemyState} = battleState;
 
    function removeData() {
        API.deleteCharacter(user.uid, {
            ...characterState
            // delete character by current user uid
        }).then(() => {
            console.log("removed " ,characterState)
        }).catch((error) => {
            console.log(error)
        });
    };

    function saveData() {
        API.updateCharacter(user.uid, {
            ...characterState
            // update character by current user uid
        }).then(() => {
            setCharacterState(characterState)
            console.log("saved " + characterState)
        }).catch((error) => {
            console.log(error)
        })
    };

    console.log("rendering battle", turnbase,screentext,enemyState);

    let history = useHistory();
    // if (characterState.location === "/overworld" || battleState.enemyState.currentHealth <0){
    //     history.push("/overworld",{...characterState,location:"/overworld"});
    // }
    useEffect(() => {
        console.log("stats at start of render/battle ", characterState);
        if (characterState.level < 2) {
            setBattleState({
                turnbase: true,
                screentext: `Clippy appears to block your path. The power of 'stache fuels his hatred. `,
                enemyState: {
                    name: "Clippy",
                    img: Clippy,
                    strength: 10,
                    maxHealth: 70,
                    currentHealth: 70,
                },
            });
        }
        else if (characterState.level < 5) {
            setBattleState({
                turnbase: true,
                screentext: `An Econ appears to block your path. This edgy explorer seems ready for a fight. `,
                enemyState: {
                    name: "Econ",
                    img: Econ,
                    strength: 20,
                    maxHealth: 100,
                    currentHealth: 100,
                },
            });
        }
        else if (characterState.level < 7) {
            setBattleState({
                turnbase: true,
                screentext: `A Bugg appears to block your path. How did this moth get in here? `,
                enemyState: {
                    name: "Bugg",
                    img: Bugg,
                    strength: 30,
                    maxHealth: 150,
                    currentHealth: 150,
                },
            });
        }
        else {
            setBattleState({
                turnbase: true,
                screentext: `A Skinned Cat appears to block your path. There are many ways to skin a cat some consider to be... unnatural. `,
                enemyState: {
                    name: "Skinny_Cat",
                    img: Skinny_Cat,
                    strength: 50,
                    maxHealth: 200,
                    currentHealth: 200,
                },
            });
        };
        console.log(enemyState);
        if (battleState.enemyState.currentHealth < 0) {
            history.push("/overworld", characterState);
        }
        setTimeout(function () {
            console.log("wait for turn");
            console.log(turnbase);
        }, 1000);
    }, []);
    const enemyImage = battleState.enemyState.img;
        // method which takes in a second object and decreases their "hitpoints" by this character's strength
    async function attack() {
        let dialogue = characterState.name + " readies an attack at " + enemyState.name + "! " + characterState.name + " does " + characterState.strength + " damage to " + enemyState.name + "! ";
        // player hits foe
        console.log("Enemy health: ", enemyState.currentHealth - characterState.strength);
        if (enemyState.currentHealth - characterState.strength <= 0) {
            //enemy foe is defeated
            dialogue += ` You have defeated ${enemyState.name}. You feel a new found power growing within you! ${characterState.name} is now level ${characterState.level + 1}. Your Strength is now ${characterState.strength + 5}. Your Health is now ${characterState.currentHealth += 25} out of ${characterState.maxHealth + 25} total. `;
            levelUp(dialogue);
            //exit 
        }
        else {
            console.log(enemyState.name + " is still alive! ");
            dialogue += enemyState.name + " is still alive! ";
            //continue the fight
            dialogue += enemyState.name + " readies an attack at " + characterState.name + " " + enemyState.name + " does " + enemyState.strength + " damage to " + characterState.name + ". ";
            //player gets hit
            console.log("Player health: ", characterState.currentHealth - enemyState.strength);
            if (characterState.currentHealth - enemyState.strength <= 0) {
                //player is dead 
                gameOver(dialogue);
                //exit 
            }
            console.log(characterState.name + " is still alive! ");
            dialogue += characterState.name + " is still alive! ";
        };
        //combat is over both parties log damage to state
        console.log(dialogue);
        await setCharacterState({
            ...characterState,
            currentHealth: characterState.currentHealth - enemyState.strength,
        });
        setBattleState({
            turnbase: true, screentext: dialogue, enemyState: {
                ...enemyState,
                currentHealth: enemyState.currentHealth - characterState.strength,
            }
        });
        // new turn 
        setTimeout(function () {
            console.log("wait for turn");
            console.log(turnbase);
        }, 2000);
    };

    async function run() {
        let dialogue = "You would like to run away. ";
        if (Math.floor(Math.random() * 2) > 0) {
            //math checks out no damage return to overworld
            dialogue += "You ran away successfully! ";
            console.log(dialogue);
            setBattleState({ turnbase: turnbase, screentext: dialogue, enemyState: enemyState, });
            saveData();
            if (battleState.enemyState.currentHealth <0){
                history.push("/overworld",characterState);
            }
            setTimeout(function () {
                console.log(characterState);
                history.push("/overworld", characterState);
            }, 2000);
        }
        else {
            //enemy opportunity attack
            dialogue += enemyState.name + " finds an opportunity to attack " + characterState.name + " " + enemyState.name + " does " + enemyState.strength + " damage to " + characterState.name + ". ";
            //player hit by enemy 
            console.log(`${characterState.currentHealth} after damage. `);
            if (characterState.currentHealth - enemyState.strength <= 0) {
                //player is dead
                gameOver(dialogue);
            }
            await setCharacterState({
                ...characterState,
                currentHealth: characterState.currentHealth - enemyState.strength,
            });
            setBattleState({ turnbase: true, screentext: dialogue, enemyState: enemyState, });
            // new turn
            setTimeout(function () {
                console.log("wait for turn");
                console.log(turnbase);
            }, 2000);
        }
    };

    //end route takes back to overworld check character state
     function levelUp(dialogue) {
        console.log(dialogue);
        setCharacterState({
            ...characterState,
            level: characterState.level += 1,
            strength: characterState.strength += 5,
            maxHealth: characterState.maxHealth += 20,
            currentHealth: characterState.currentHealth += 20,
        });
        setBattleState({turnbase:turnbase, screentext: dialogue, enemyState:enemyState,});
        saveData();
        if (battleState.enemyState.currentHealth <0){
            history.push("/overworld",characterState);
        }
        setTimeout(function () {
            console.log("After level-up ", characterState);
            history.push("/overworld", characterState);
        }, 2000);
    };

    //end route leaves you to landing without saving progress
    //no need to change states
    function gameOver(dialogue) {
        console.log(characterState.name + " has died!");
        dialogue += characterState.name + " has died!";
        dialogue += "You have been defeated GAME OVER";
        console.log(dialogue);
        removeData();
        setBattleState({turnbase:turnbase, screentext: dialogue, enemyState:enemyState,});
        setTimeout(function(){ 
            window.location.href="/landing";
        }, 4000);
    };

    function handleBtnClick(event) {
        console.log(turnbase);
        event.preventDefault();
        // Get the title of the clicked button
        const btnName = event.target.getAttribute("data-value");
        if (battleState.enemyState.currentHealth < 0) {
            history.push("/overworld", characterState);
        }
        if (turnbase === true) {
            setBattleState({ turnbase: false, screentext: "", enemyState: enemyState, });
            //turn order is run
            if (btnName === "Fight") {
                attack();
            }
            else {
                run();
            };
        }
        else {
            console.log("wait your turn");
            console.log(turnbase);
        };
    }
    return (
        <Container>
            <div className="header">
                <Header />
            </div>

            <Row>
                <div className="card" id="fight">

                    <div id="characterFight">
                        <img id="hero" src={battleImage} alt="hero"></img>

                    </div>
                    <div id="enemyFight" >
                        <img class="enemy" id={enemy} src={enemyImage} alt="enemy"></img>
                    </div>
                </div>
            </Row>

            <Row>
                <div className="card" id="fightText">
                    <h1 className="text-center">{screentext}</h1>
                    <p className="text-center h3">Click on the options to initiate combat.</p>
                    <div className="buttons">
                        <Button className="button" variant="primary" size="lg" data-value="Fight" onClick={handleBtnClick} >Fight</Button>
                        <Button className="button" variant="secondary" size="lg" data-value="Run" onClick={handleBtnClick} >Run</Button>
                    </div>
                </div>
            </Row>
        </Container>
    );
}

export default Battle;
