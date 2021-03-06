import React, { Component } from 'react';
// import ReactGA from 'react-ga';
import FloatingWhatsApp from 'react-floating-whatsapp';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';
import logo1 from '../src/logo1.png';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

  }

  getResumeData(){
    $.ajax({
      url:'/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Portfolio data={this.state.resumeData.portfolio}/>
        <Contact data={this.state.resumeData.main}/>
        <Footer data={this.state.resumeData.main}/>
        <FloatingWhatsApp
        phoneNumber="+27607874083"
        accountName="Goitsebofeloo"
        height={360}
        avatar={logo1}
        statusMessage="Typically replies within 2-5 minutes"
        className="custom-class"
        allowClickAway={false}
        notification
        notificationDelay={60000} // 1 minute
        notificationSound
      />
      </div>
    );
  }
}

export default App;
