import React, { Component } from "react";
import axios from "axios";

export default class App extends Component {
  state = {
    quote: {
      id: "",
      tags: [],
      content: "",
      author: "",
      authorSlug: "",
      length: 0,
      dateAdded: "",
      dateModified: "",
    },
  };

  componentDidMount() {
    this.getQuote();
  }

  getQuote = async () => {
    const { data: quote } = await axios.get("https://api.quotable.io/random");
    this.setState({ quote });
  };

  handleClick = () => {
    this.getQuote();
  };

  render() {
    const { quote } = this.state;
    return (
      <React.Fragment>
        <div id='container'>
          <div className='card'>
            <div className='content'>
              <p className='sentence'>{quote.content}</p>
              <p className='author'>——{quote.author}</p>
              <div className='details'>
                <p className='detail-items'>
                  <span>Tags:[{quote.tags}]</span>
                  <span>Words:[{quote.length}]</span>
                </p>
                <p className='detail-items'>
                  <span>dateAdded:[{quote.dateAdded}]</span>
                  <span>dateModified:[{quote.dateModified}]</span>
                </p>
                <p className='detail-items'></p>
              </div>
            </div>
            <div className='btns'>
              <div className='sm-i'>
                <span className='material-icons'>
                  <a
                    href='https://nickk.cn'
                    target='_blank'
                    rel='noopener noreferrer'>
                    public
                  </a>
                </span>

                <span className='material-icons'>
                  <a
                    href='https://github.com/n1ckzhao'
                    target='_blank'
                    rel='noopener noreferrer'>
                    whatsapp
                  </a>
                </span>
              </div>
              <div className='new'>
                <button onClick={this.handleClick}>New</button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
