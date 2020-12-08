import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import API from "../utils/API";
import CharContext from "../utils/CharContext";
import Header from "../components/Header";
import "./Battle.css";
import enemy from "./Overworld/images/evilClippy.png";
import { useHistory } from "react-router-dom";


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
        currentHealth: 0,
    });
    const {characterState,setCharacterState} = useContext(CharContext);
    let history = useHistory();
    const returnState = {...characterState,
        location: "/overworld",
    };
    
    const damageState = {...characterState,
        currentHealth: characterState.currentHealth-=enemyState.strength,
    };

    const levelupState = {...characterState,
        level: characterState.level+=1,
        strength: characterState.strength+=5,
        maxHealth: characterState.maxHealth+=25,
        currentHealth: characterState.hitpoints,
        location: "/overworld", 
    };
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
        // API.getCharacter(characterState.uid)
        // .then((res) => {
        //     setCharacterState({...characterState,
        //         level: res.level,
        //         strength: res.strength,
        //         maxHealth: res.maxHealth,
        //         currentHealth: res.currentHealth});
        // }).catch((error) => {
        //     console.log(error)
        // });

        setEnemystats({
            currentHealth: 50,
        });
        console.log(enemyState);
        speedRead(screentext, `A ${enemyState.name} appears to block your path Click on the options to initiate combat. `)
            .then((res) => {
                console.log(res);
                do {
                    setTimeout(() => {
                        console.log("wait for dialogue")
                    }, 100);
                } while (res === false);
                setTurnbase(true);
                console.log(turnbase);
            });
        // setScreentext(`A ${slime.name} appears to block your path Click on the options to initiate combat. `);
    }, []);

    useEffect(() =>{
        //does this update all stats if current is only changed
        API.updateCharacter(characterState.uid)
        .then((res) => {
            console.log("update based on health change")
            console.log(res)
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
        console.log(`${enemyState.currentHealth} after damage`);
        setEnemystats.currentHealth -= characterState.strength;
        if (isAlive(enemyState) === false){
            //enemy foe is defeated
            levelUp();
            dialogue +=( " You have defeated Slime! You feel a new found power growing within you! " + 
            characterState.name + " is now level " + characterState.age + ". Your Strength is now " + characterState.strength + 
            ". Your Health is now " +  characterState.hitpoints + " out of " + characterState.maxHealth + " total. ");
            speedRead(screentext,dialogue).then((res) => {
                do {
                    setTimeout(() => {
                        console.log("wait for dialogue")
                    }, 100);
                } while (res === false);
                API.updateCharacter(characterState.uid)
                .then(() => {
                    setCharacterState(returnState);
                    history.push(characterState.location);
                }).catch((error) => {
                    console.log(error)
                });
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
            setCharacterState(damageState); 
            console.log(`${characterState.currentHealth} after damage`);
            if (isAlive(characterState) === false) {

                dialogue += ("You have been defeated GAME OVER");
                speedRead(screentext,dialogue).then((res) => {
                    do {
                        setTimeout(() => {
                            console.log("wait for dialogue")
                        }, 100);
                    } while (res === false);
                    // speedRead(screentext, "You have been defeated GAME OVER")setScreentext(screentext, "You have been defeated GAME OVER");
                    window.location.href="/landing";
                });
            }
        }; 
        speedRead(screentext,dialogue).then((res) => {
            do {
                setTimeout(() => {
                    console.log("wait for dialogue")
                }, 100);
            } while (res === false);
            setTurnbase(true);
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
                    do {
                        setTimeout(() => {
                            console.log("wait your turn")
                        }, 100);
                    } while (res === false);
                    if (Math.floor(Math.random()*2)>0){
                        speedRead(screentext,"You ran away successfully").then((res) => {
                            do {
                                setTimeout(() => {
                                    console.log("wait your turn")
                                }, 100);
                            } while (res === false);
                            window.location.href="/overworld";
                        })
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
                <br/>
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
