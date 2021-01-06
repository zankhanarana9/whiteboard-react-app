import React from 'react';
import TopicPill from './TopicPill';
import './CourseEditor.css';
import Widget from './Widget';
<<<<<<< HEAD

const Topic = function() {
    return (
        <div className="col-md-9" >
            <div className="row mt-3">
              <div className="col-sm-4">  
=======
import CourseService from '../../services/CourseService';

class Topic extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        Topics: this.props.Topics,
        newTopicTitle: 'New Topic'
      }
    }

    addTopic = () => {
      let newTopic = {
        id:(new Date()).getTime(),
        title: this.state.newTopicTitle,
      };  
      CourseService.addTopic(this.props.CourseId, 
          this.props.SelectedModule.id, 
          this.props.SelectedLesson.id, 
          newTopic).then(topics => {
            this.setState({
              Topics: topics
            })
          });                
    }

    formChanged = (event) => {
      this.setState({
        newTopicTitle: event.target.value
      })
    }

    
    render() {
      return (
        <div className="col-md-9" >
            <div className="row mt-3">
              <div className="col-sm-3">  
>>>>>>> react
                <div className="input-group">
                  <input type="text" 
                    id="newTopicName" 
                    className="form-control" 
<<<<<<< HEAD
                    placeholder="Topic Name" /> 
                  <span className="input-group-append" 
                    style={{marginLeft: "5px"}}>
                    <button className="btn topic-list-item bg-secondary" 
                        id="addTopic">
=======
                    value = {this.state.newTopicTitle} 
                      onChange={this.formChanged}
                    /> 
                  <span className="input-group-append" 
                    style={{marginLeft: "5px"}}>
                    <button className="btn topic-list-item bg-secondary" 
                        id="addTopic"
                        onClick={this.addTopic}>
>>>>>>> react
                            <i className="fa fa-plus"></i>
                    </button>               
                  </span>
                </div>                                                
              </div>             
            </div> 
            <div className="row mt-3">
                <div className="col-12">
<<<<<<< HEAD
                    <ul className="nav nav-pils pull-left topic-list">
                       <TopicPill />
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-12" style={{textAlign: "right!important"}}>
                <button type="button" className="btn btn-success mr-2">Save</button>
                <label htmlFor="btnPreview">Preview</label>
                <input type="checkbox" 
                    id="btnPreview" 
=======
                    <ul className="nav nav-pils pull-left topic-list">                       
                       {
                         
                        this.props.Topics.map(topic => {
                          return(
                              <TopicPill 
                                IsSelectedTopic = {this.props.SelectedTopic === topic}
                                SelectTopic={this.props.SelectTopic}
                                Topic={topic}
                                key={topic.id}
                              />
                          )
                        })
                       }
                    </ul>
                </div>
            </div>
            <div className="row pr-2">
                <div className="col-12 text-right">
                <button type="button" className="btn btn-success mr-2">Save</button>
                <label htmlFor="btnPreview" className="mr-2">Preview</label>
                <input type="checkbox" 
                    id="btnPreview" 
                    className="m  t-1"
>>>>>>> react
                    data-toggle="toggle" 
                    data-style="ios" />
                </div>
            </div>
            <Widget />
        </div>
<<<<<<< HEAD
    )
=======
      )
    }
>>>>>>> react
}

export default Topic;