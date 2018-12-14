import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class Subscribe extends Component{
    constructor(props) {
        super(props);
        this.state = {
            subscribe : '',
            userId:'',
            user:"",
            bookSub :[],
            bookSub1 :[
                {
                    bookName : ' Sherlock Homes ',
                    authorName : ' Arthur Conan Doyal ',
                    description : ' Sherlock Holmes is a famous fictional detective. Sherlock Holmes is known for his skill at solving hard cases. He has a companion who helps solve the cases, called Dr John Watson. ',
                    url : 'https://images.penguinrandomhouse.com/cover/9780553212419'

                },
                {
                    bookName : ' Sherlock Homes ',
                    authorName : ' Arthur Conan Doyal ',
                    description : ' Sherlock Holmes is a famous fictional detective. Sherlock Holmes is known for his skill at solving hard cases. He has a companion who helps solve the cases, called Dr John Watson. ',
                    url : ' https://images-eu.ssl-images-amazon.com/images/I/51q0Zx4tkjL.jpg '

                },
                {
                    bookName : ' Game of Thrones ',
                    authorName : 'George  Martin',
                    description : ' Sherlock Holmes is a famous fictional detective. Sherlock Holmes is known for his skill at solving hard cases. He has a companion who helps solve the cases, called Dr John Watson. ',
                    url : ' https://images.penguinrandomhouse.com/cover/9781101965870 '
                },
                {
                    bookName : ' Game of Thrones ',
                    authorName : 'George  Martin',
                    description : ' Sherlock Holmes is a famous fictional detective. Sherlock Holmes is known for his skill at solving hard cases. He has a companion who helps solve the cases, called Dr John Watson. ',
                    url : ' https://images.penguinrandomhouse.com/cover/9781101965870'
                },
            ]
        };
    }

    componentDidMount() {
        this.updateUser(this.props.user)
        axios.get('http://localhost:1996/getbooks',).then( (success) => {
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
        this.setState({bookSub: value})
      }

    render() {
        return(
            <div>
                <div className = 'full_screen'>
                    <div className = 'subscribe-top'>
                        <center><h1> Kalki Book Shop </h1></center>
                    </div>
                    <div className = 'subscribe-body'>
                        {this.state.bookSub.map( (item) =>{
                            return(
                                <ListView obj = {{user: this.state.user, book: item}}></ListView>
                            );
                        })}
                    </div>
                    <div className = 'subscribe-bottom'>
                        <text>_</text>
                    </div>
                </div>
            </div>
        );
    }
}

class ListView extends Component{
    constructor(){
        super();
        this.state = {
            user: ""
        }

    }
    handleSubscribe(){
        bookId = this.props.obj.book._id;
        userId = this.props.obj.user._id
    }
render() {

    return(
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
                <button className = "button" onClick={this.handleSubscribe.bind(this)}><span> Subscribe </span></button>
            </div>
        </div>
    </div>
    );
}
}

export default Subscribe;