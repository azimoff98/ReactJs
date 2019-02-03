import React, {Component} from 'react';
import Rainbow from '../hoc/Rainbow'
import axios from 'axios'

class Home extends Component{

    state = {
        posts :[]
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res)
                this.setState({
                    posts : res.data.slice(0,10)
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
                            <div className="card content">
                                <span className="card title">{post.title}</span>
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
                <h4 className="center">HOME</h4>
                {postList}
            </div>
        )
    }
}

export default Rainbow(Home)