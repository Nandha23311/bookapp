import React, { Component } from 'react';
import './App.css';

class Subscribe extends Component{
    constructor(props) {
        super(props);
        this.state = {
            subscribe : '',
            userId:'',
            bookSub :[
                {
                    bookName : ' Sherlock Homes ',
                    authorName : ' Arthur Conan Doyal ',
                    description : ' Sherlock Holmes is a famous fictional detective. Sherlock Holmes is known for his skill at solving hard cases. He has a companion who helps solve the cases, called Dr John Watson. ',
                    url : ' https://images-eu.ssl-images-amazon.com/images/I/51q0Zx4tkjL.jpg '

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
                    url : ' https://img.maximummedia.ie/joe_ie/eyJkYXRhIjoie1widXJsXCI6XCJodHRwOlxcXC9cXFwvbWVkaWEtam9lLm1heGltdW1tZWRpYS5pZS5zMy5hbWF6b25hd3MuY29tXFxcL3dwLWNvbnRlbnRcXFwvdXBsb2Fkc1xcXC8yMDE3XFxcLzEyXFxcLzIwMDkzNTMyXFxcL2dhbWVvZnRocm9uZXMuanBnXCIsXCJ3aWR0aFwiOjY0MCxcImhlaWdodFwiOjM2MCxcImRlZmF1bHRcIjpcImh0dHBzOlxcXC9cXFwvd3d3LmpvZS5pZVxcXC9hc3NldHNcXFwvaW1hZ2VzXFxcL2pvZVxcXC9uby1pbWFnZS5wbmc_dj01XCJ9IiwiaGFzaCI6ImViNWJlNzcwYzVjNWFjNzBkMzBhOGFmNjVjNzkwOGUzYTkyOTgyYTgifQ==/gameofthrones.jpg '
                },
                {
                    bookName : ' Game of Thrones ',
                    authorName : 'George  Martin',
                    description : ' Sherlock Holmes is a famous fictional detective. Sherlock Holmes is known for his skill at solving hard cases. He has a companion who helps solve the cases, called Dr John Watson. ',
                    url : ' https://img.maximummedia.ie/joe_ie/eyJkYXRhIjoie1widXJsXCI6XCJodHRwOlxcXC9cXFwvbWVkaWEtam9lLm1heGltdW1tZWRpYS5pZS5zMy5hbWF6b25hd3MuY29tXFxcL3dwLWNvbnRlbnRcXFwvdXBsb2Fkc1xcXC8yMDE3XFxcLzEyXFxcLzIwMDkzNTMyXFxcL2dhbWVvZnRocm9uZXMuanBnXCIsXCJ3aWR0aFwiOjY0MCxcImhlaWdodFwiOjM2MCxcImRlZmF1bHRcIjpcImh0dHBzOlxcXC9cXFwvd3d3LmpvZS5pZVxcXC9hc3NldHNcXFwvaW1hZ2VzXFxcL2pvZVxcXC9uby1pbWFnZS5wbmc_dj01XCJ9IiwiaGFzaCI6ImViNWJlNzcwYzVjNWFjNzBkMzBhOGFmNjVjNzkwOGUzYTkyOTgyYTgifQ==/gameofthrones.jpg '
                },
            ]
        };
    }



render() {
    return(
        <div>
            <div className = 'fullscreen'>
                <div className = 'subscribe-top'>
                    <center><h1> Kalki Book Shop </h1></center>
                </div>
                <div className = 'subscribe-body'>
                    {this.state.bookSub.map( (item) =>{
                        return(
                            <ListView obj = {item}></ListView> 
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

        }
        
    }

render() {

    return(
        <div className = 'listview'>
            <div className = 'listview-fullscreen'>
                <center>{this.props.state.bookname}</center>
            </div>
                <div className = 'listview-body'>
                    <div className = 'listview-body-left'>
                        <img className = 'listview-body-left' src = {this.props.state.url} alt = 'Sherlock Holmes'></img>
                    </div>
                    <div className = 'listview-body-right'>
                        <text>Title</text>
                    </div>
                </div>
        </div>

    );
}
}

export default Subscribe;