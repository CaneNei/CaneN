import bitsvssig from '../images/bitsvssigma.png'
import drones from '../images/drones.png'
import futures from '../images/futures.png'
import vrgame from '../images/vrgame.png'
import ThinkingwithFutures from '../images/ThinkingwithFutures.gif'

export const cardInfo = [
    {image: bitsvssig, gif: '', title: 'Bits Vs Sigma', text: ['A fast paced retro style shmup game',
    'My first unity game',
    'Developed entirely by myself',
    'All original content except for sound'], info: `Bits vs sigma is the first unity game I developed, and 
    it was something I learnt a lot from. The aim for this game was to create a chaotic short shmup that was
     unlike other games in the same genre. It was built for PC and uses the players mouse and keyboard to 
     defeat 4 different enemy types consuming their health on death. Ultimately until the player reached the 
     boss in an intense final battle. I developed all the contents of this game myself, except for music, 
     which I sourced from the unity asset store and edited, to fit the game style better. Developing this 
     game, I found that Unity was an extensive game engine that could be used to create a wide variety of 
     games. In addition to this, I learnt the basics of unity and how the architecture of a game should be 
     built.`, link: 'https://github.com/CaneNei/BitsVsSigma-Game', hashtags: '#Unity\t#Full-game-development\t#C-Sharp'},

    {image: drones, gif:'' , title: 'Drones Demonstration', text: ['An AI game/demonstration for University that used bees and predator/prey algorithm models',
    'Created logic for the bees algorithm',
    'Created logic for the predator/prey behaviour model',
    'Programmed state machines'], info: `The drone’s demonstration was an assignment for university where 
    I had to implement a bee’s algorithm and a predator/prey behaviour model to a project given to us, 
    (Project provided by David Conroy). In the bee’s algorithm I used a State Machine which commanded drones 
    to scout for resources, collect resources and defend the ship. The predator/prey behaviour model handled 
    how the drone’s acted with the player, fleeing or attacking the player based on each drone’s individual 
    fitness variable. The fitness variable considered the drones health, ammunition, fuel, and the number of
     allies around it.`, link:'', hashtags:'#Finite-state-machines\t#Math\t#Unity\t#C-Sharp'},

    {image: futures, gif: ThinkingwithFutures, title: 'Thinking with Futures', text: ['A group university game made to educate regional students about the pathways to university',
    'Programmed the free roam sections',
    'Implemented the dialogue system and UI',
    'Implemented open area animations',
    'Implemented sounds for the open area',], info: `‘Thinking of futures’ was an educational game for 
    Queensland University of Technology that I worked on with a group of people for a university assignment. 
    This game served the purpose to educate regional high-school student about the pathways to university and 
    how they can get there. The game also focused on the psychological issues a regional student might have 
    with enrolling for university like imposter syndrome. When developing this game, I was tasked with the 
    UI and dialogue systems implementation as well as coding the player model animations and movement in the 
    free roaming areas. I also implemented and designed the card collection system and handled the scene transitions.`,
    link:'https://github.com/CaneNei/ThinkingWithFutures-game', hashtags:'#Group-Project  #C-Sharp  #UI-Development  #Educational'},
    
    {image: vrgame, gif:'', title: 'Dish Stacker VR', text: ['My first VR game, a group project for university',
    'Implmeneted the AI and state machine elements',
    'Designed the initial concept and difficulty progression systems',
    'Impemented objects physics and throwing mechanics',
    'Created and implemented partical effects assets'], info: 'hi im info', link:'', hashtags:'#VR  #Group-Project  #AI  #Design  #C-Sharp  #3D-Modelling  #Physics'}
]