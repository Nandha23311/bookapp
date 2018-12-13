import React, { Component } from 'react'
import './App.css';

class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
        userId: "",
        bookList:[
            {
                bookName: "Ponniyin Selvan",
                authorName: "Kalki",
                discription: " Ponniyin Selvan Author	Kalki Krishnamurthy Country	India Language	Tamil Genre	Historical, Romance, Espionage, Thriller, Novel Published	1951–1954 (Kalki) Ponniyin Selvan (English: The Son of Kaveri) is a historical novel by Kalki Krishnamurthy, written in Tamil. In five volumes, or about 2400 pages, it tells the story of Arulmozhivarman, who later became the Chola king Rajaraja Chola I). The book took more than three years to write Kalki visited Sri Lanka three times to gather information for it.",
                url: "https://n3.sdlcdn.com/imgs/d/n/3/Ponniyin-Selvan-Vol-1-5-SDL892179572-1-81398.jpg"
            },
            {
                bookName: "Parthiban kanavu",
                authorName: "Kalki",
                discription: "In the seventh century the Cholas are vassals of the Pallavas. Parthiban conveys his dream of the Chola dynasty regaining its glory – which he believes is lost since they are no longer the independent rulers – to his young son Vikraman",
                url: "https://images-eu.ssl-images-amazon.com/images/I/61L-m7FSsWL.jpg"
            },
            {
                bookName: "Ponniyin Selvan",
                authorName: "Kalki",
                discription: " Ponniyin Selvan Author	Kalki Krishnamurthy Country	India Language	Tamil Genre	Historical, Romance, Espionage, Thriller, Novel Published	1951–1954 (Kalki) Ponniyin Selvan (English: The Son of Kaveri) is a historical novel by Kalki Krishnamurthy, written in Tamil. In five volumes, or about 2400 pages, it tells the story of Arulmozhivarman, who later became the Chola king Rajaraja Chola I). The book took more than three years to write Kalki visited Sri Lanka three times to gather information for it.",
                url: "https://n3.sdlcdn.com/imgs/d/n/3/Ponniyin-Selvan-Vol-1-5-SDL892179572-1-81398.jpg"
            },
            {
                bookName: "Parthiban kanavu",
                authorName: "Kalki",
                discription: "In the seventh century the Cholas are vassals of the Pallavas. Parthiban conveys his dream of the Chola dynasty regaining its glory – which he believes is lost since they are no longer the independent rulers – to his young son Vikraman",
                url: "https://images-eu.ssl-images-amazon.com/images/I/61L-m7FSsWL.jpg"
            }
        ]
      }
  }
  render() {
    return (
        <div>
          <div className= "full_screen">

            <div className = "home_screen_top">
                <center><h1> Kalki Books Shop</h1></center>
            </div>

            <div className = "home_screen_body">
                {this.state.bookList.map((eachBook)=>{
                  return(
                    <ListView obj= {eachBook}/>
                  )
                })}
            </div>

            <div className = "home_screen_bottom">
                <text>_</text>
            </div>

          </div>
        </div>
    );
  }
}


class ListView extends Component {
    constructor(props) {
      super(props);
      this.state = {

        }
    }
    render() {
      return (
        <div className = "listview">
            <div className = "listview_top">
                <center>{this.props.obj.bookName}</center>
            </div>
            <div className = "listview_body">
                <div className = "listview_body_left">
                    <img className= "listview_body_left_img" src={this.props.obj.url} alt="PONNIYIN SELVAN" ></img>
                </div>
                <div className = "listview_body_right">
                    <text>Title</text>
                </div>
            </div>
        </div>
      );
    }
  }

export default HomeScreen;
