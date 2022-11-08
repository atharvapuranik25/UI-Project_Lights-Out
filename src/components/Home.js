import React from 'react';
import eventData from './events.json';
import postData from './posts.json';

function Home() {

  return <div>

        <div id="text" className="container my-4" style={{color:"white"}}>
        
            <div className="row">

                <div className="col-md-3 d-none d-sm-none d-md-block">

                    <h2 className="mb-2">Featured Event</h2>

                    <div className="row">
                        {eventData.map((eventDetails) => {

                            return <div className="col-12" key={eventDetails.id}>
                                <div className="card bg-dark my-3 rounded">
                            <img className="card-img-top" src={eventDetails.img} alt={eventDetails.title}/>
                            <div className="card-body">
                                <h4 className="card-title">{eventDetails.title}</h4>
                                <p className="card-text"><small>{eventDetails.description}</small></p>
                                <h6>Dates: {eventDetails.dates}</h6>
                            </div>
                        </div>
                        </div>
                        })[0]}

                        {eventData.map((eventDetails) => {

                        return <div className="col-12" key={eventDetails.id}>
                            <div className="card bg-dark my-3 rounded-3">
                        <img className="card-img-top" src={eventDetails.img} alt={eventDetails.title}/>
                        <div className="card-body">
                            <h4 className="card-title">{eventDetails.title}</h4>
                            <p className="card-text"><small>{eventDetails.description}</small></p>
                            <h6>Dates: {eventDetails.dates}</h6>
                        </div>
                        </div>
                        </div>
                        })[1]}
                        
                    </div>
                    
                </div>

                <div className="col-md-9">

                    <h2 className="mb-2">Feed</h2>

                    <div className="row">
                        {postData.map((postDetails) => { 
                            
                            return <div className="col-12" key={postDetails.id}>
                                <div className="card bg-dark my-3 rounded-3">
                                {postDetails.vid ? <iframe className="rounded-top" width="100%" height="400px" src={postDetails.vid} title={postDetails.title}></iframe> 
                                : postDetails.text ? <iframe className="rounded-top" src={postDetails.text} width="100%" height="450px" title={postDetails.title}></iframe> 
                                : <img src={postDetails.img} alt={postDetails.title} style={{width:"100%"}}/>}
                            <div className="card-body">
                                <h4 className="card-title">{postDetails.title}</h4>
                                <p className="card-text"><small>{postDetails.description}</small></p>
                                <img src={postDetails.profile_img} alt={postDetails.title} className="rounded-circle d-inline" style={{width:"40px", height:"40px"}}/>
                                <h6 className="ms-2 d-inline">{postDetails.user}</h6>
                                <Upvotes key={postDetails.id}/>

                            </div>
                        </div>
                        </div>
                        })}
                        
                    </div>
                    
                </div>

            </div>

        </div>

  </div>;
}







class Upvotes extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
  
    render() {
      return (
        <div className="d-inline ms-2">
            <button type="button" onClick={() => this.setState({ count: this.state.count + 1 })} className="btn btn-danger">
                Upvotes <span className="badge">{this.state.count}</span>
            </button>
        </div>
      );
    }
  }

export default Home;