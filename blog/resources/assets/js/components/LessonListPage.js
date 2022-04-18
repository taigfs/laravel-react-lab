import React, { Component, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';

const LessonListPage = (props) => {

    const [lessons, setLessons] = useState([]);

    useEffect(() => {
      const parsedData = JSON.parse(props.data);
      setLessons(parsedData.lessons);
      console.log(parsedData.lessons);
    }, []);
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <div className="panel panel-default">
                        <div className="panel-heading">Lesson List Page Component</div>

                        <div className="panel-body">
                            I'm an lesson list page component!
                            <div>
                            <Carousel>
                              {
                                lessons.map((lesson) => (
                                  <Carousel.Item>
                                    <img
                                      className="d-block w-100"
                                      src="https://via.placeholder.com/500x360"
                                      alt="First slide"
                                    />
                                    <Carousel.Caption>
                                      <h3>{lesson}</h3>
                                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                  </Carousel.Item>
                                ))
                              }
                            </Carousel>
                            </div>
                            <div>
                                <Button href="/">Return to Home</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

if (document.getElementById('lesson-list-page')) {
  var data = document.getElementById('lesson-list-page').getAttribute('data');
  ReactDOM.render(<LessonListPage data={data} />, document.getElementById('lesson-list-page'));
}

export default LessonListPage;