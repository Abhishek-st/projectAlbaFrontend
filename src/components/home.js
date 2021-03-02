
import React,{ Component } from 'react';
import '../css/home.css'

class Home extends Component {


  render() {

        return (
            <div className="container" >
                <h1 class="tex">Hello I am Abhishek Tiwari</h1>
                <br />
                <br />
                <p class="tex" id="asd">
                Currently, I am a 3rd-year B.Tech CSE student at VIT(Chennai). I am interested in
machine learning, competitive coding, web development, and game development. I always try to apply my knowledge in solving real-world problems. Secured first position in four hackathons. I also made a game named SpaceJump and published it on play store.
I have won SIH 2020 under the problem statement NS270 in which my main task was to build API using Flask so that it can be used within the flutter app. Apart from that, I have won four more hackathons. 
I have also made many college projects using python like a university management system, All Utility app which solves tasks like compiling code, document conversion, etc. I have work on many more technologies like Firebase, React-Native, ReactJs, RASA for making a chatbot, and Godot. 
                </p>
            </div>
        );

  }
}

export default Home