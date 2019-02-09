import React, {Component} from 'react';
import Rainbow from '../hoc/Rainbow';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Home extends Component{

    state = {
        posts :[]
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res)
                this.setState({
                    posts : res.data.slice(0,100)
                })
            })
    }
    
    render(){

        const {posts} = this.state;
        const postList = posts.length ? 
            (
                posts.map(post => {
                    return(
                        <div className="post card" key={post.id}>
                            <div className="card-content">
                                <Link to = {'/' + post.id}>
                                    <span className="card-title">{post.title}</span>
                                </Link>
                                <p>{post.body}</p>
                            </div>
                        </div>
                    )
                })
        ) : (
            <div>
                <h1>You Have No Posts</h1>
            </div>
        ) 
        

        return (
            <div className="container">
                {postList}
            </div>
        )
    }
}

export default Rainbow(Home)