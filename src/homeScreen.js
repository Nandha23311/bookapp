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
                discription: " Ponniyin Selvan Author	Kalki Krishnamurthy Country	India Language	Tamil Genre	Historical, Romance, Espionage, Thriller, Novel Published	1951–1954 (Kalki) Ponniyin Selvan (English: The Son of Kaveri) is a historical novel by Kalki Krishnamurthy, written in Tamil. In five volumes, or about 2400 pages, it tells the story of Arulmozhivarman, who later became the Chola king Rajaraja Chola I). The book took more than three years to write Kalki visited Sri Lanka three times to gather information for it."
            },
            {
                bookName: "Parthiban kanavu",
                authorName: "Kalki",
                discription: "In the seventh century the Cholas are vassals of the Pallavas. Parthiban conveys his dream of the Chola dynasty regaining its glory – which he believes is lost since they are no longer the independent rulers – to his young son Vikraman"
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
            <h2>{this.props.obj.bookName}</h2>
            <h2>{this.props.obj.authorName}</h2>
        </div>
      );
    }
  }

export default HomeScreen;
