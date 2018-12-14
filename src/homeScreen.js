import React, { Component } from 'react'
import './App.css';
import axios from 'axios';
import Subscribe from './subscribe'
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        userId: "",
        user:{},
        goto:false,
        bookList:[],
        bookList1:[
            {
                bookName: "Ponniyin Selvan",
                authorName: "Kalki",
                description: " Ponniyin Selvan Author	Kalki Krishnamurthy Country	India Language	Tamil Genre	Historical, Romance, Espionage, Thriller, Novel Published	1951–1954 (Kalki) Ponniyin Selvan (English: The Son of Kaveri) is a historical novel by Kalki Krishnamurthy, written in Tamil. In five volumes, or about 2400 pages, it tells the story of Arulmozhivarman, who later became the Chola king Rajaraja Chola I). The book took more than three years to write Kalki visited Sri Lanka three times to gather information for it.",
                url: "https://n3.sdlcdn.com/imgs/d/n/3/Ponniyin-Selvan-Vol-1-5-SDL892179572-1-81398.jpg"
            },
            {
                bookName: "Parthiban kanavu",
                authorName: "Kalki",
                description: "In the seventh century the Cholas are vassals of the Pallavas. Parthiban conveys his dream of the Chola dynasty regaining its glory – which he believes is lost since they are no longer the independent rulers – to his young son Vikraman",
                url: "https://images-eu.ssl-images-amazon.com/images/I/61L-m7FSsWL.jpg"
            },
            {
                bookName: "Ponniyin Selvan",
                authorName: "Kalki",
                description: " Ponniyin Selvan Author	Kalki Krishnamurthy Country	India Language	Tamil Genre	Historical, Romance, Espionage, Thriller, Novel Published	1951–1954 (Kalki) Ponniyin Selvan (English: The Son of Kaveri) is a historical novel by Kalki Krishnamurthy, written in Tamil. In five volumes, or about 2400 pages, it tells the story of Arulmozhivarman, who later became the Chola king Rajaraja Chola I). The book took more than three years to write Kalki visited Sri Lanka three times to gather information for it.",
                url: "https://n3.sdlcdn.com/imgs/d/n/3/Ponniyin-Selvan-Vol-1-5-SDL892179572-1-81398.jpg"
            },
            {
                bookName: "Parthiban kanavu",
                authorName: "Kalki",
                description: "In the seventh century the Cholas are vassals of the Pallavas. Parthiban conveys his dream of the Chola dynasty regaining its glory – which he believes is lost since they are no longer the independent rulers – to his young son Vikraman",
                url: "https://images-eu.ssl-images-amazon.com/images/I/61L-m7FSsWL.jpg"
            }
        ]
      }
  }
  componentDidMount() {
    this.updateUser(this.props.user.data)
    var reqBody = {
        userId: this.props.user.data._id
    }
    axios.post('http://localhost:1996/getsubscribedbook', reqBody).then( (success) => {
        if(success){

          this.updateBooks(success.data.data)

        }
      })
      .catch( (error) => {
        alert("invalid user")
        console.log('error');
      })
  }

  updateUser(value){
    this.setState({user: value})
  }
  updateBooks(value){
    this.setState({bookList: value})
  }
  subscribeNewBooks(){
    this.setState({goto: true})
  }

  render() {
    console.log("this.state.bookList-->",this.state.bookList)
    if(this.state.goto){
        return(
            <Subscribe user = {this.state.user}/>
        )
    }else{
        return (
            <div>
              <div className= "full_screen">

                <div className = "home_screen_top">
                    <center><h1> Kalki Books Shop</h1></center>
                </div>
                <button className = "button" onClick ={this.subscribeNewBooks.bind(this)}><span> Subscribe new books </span></button>
                <div className = "home_screen_body">
                <text className = "username-text">Hi {this.state.user.userName}, </text>
                    {this.state.bookList.map((eachBook)=>{
                      return(
                        <ListView obj= {{user: this.state.user, book: eachBook}}/>
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
}


class ListView extends Component {
    constructor(props) {
      super(props);
      this.state = {

        }
    }

    handleUnsubscribe(){
        let data = {
            _id :this.props.obj.book._id
        }
        axios.post('http://localhost:1996/unsubscribe',data).then( ( success) => {
           if(success){
               console.log('success');
           }
       })
       .catch( (error) =>{
            if(error){
                console.log('error')
            }
       })

    }

    render() {
      return (
        <div className = "listview">
            <div className = "listview_top">
                <center className =" header-text">{this.props.obj.book.bookName}</center>
            </div>
            <div className = "listview_body">
                <div className = "listview_body_left">
                    <img className= "listview_body_left_img" src={this.props.obj.book.url} alt="PONNIYIN SELVAN" ></img>
                </div>
                <div className = "listview_body_right">
                    <div className = "text-key-css">
                    Title :<text className ="text-value-css"> {this.props.obj.book.bookName}</text>
                    </div>
                    <div className = "text-key-css">
                    Author Name :<text className ="text-value-css">{this.props.obj.book.authorName}</text>
                    </div>
                    <div className = "text-key-css">
                    Description :<text className ="text-value-css">{this.props.obj.book.description}</text>
                    </div>
                    <div className ="read-and-subs-row_align">
                        <button className = "button"><span> Read </span></button>
                        <button className = "button" onClick = {this.handleUnsubscribe.bind(this)}><span> Unsubscribe </span></button>
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }

export default HomeScreen;
