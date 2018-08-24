import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      fontSize: 15
    };
    window.addEventListener('wheel', this.handleScroll.bind(this));
  }

  handleScroll(event){
    if(event.deltaY<1){
      this.setState({
        fontSize: this.state.fontSize+1
      });
    }else if((event.deltaY>1)){
      this.setState({
        fontSize: this.state.fontSize-1
      });
    }
    
  }

  render() {
    return (
      <div className="App">
        <p style={this.state}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat pellentesque mi, in porttitor ligula sagittis sit amet. Phasellus ut lorem id purus egestas imperdiet et non elit. Donec eleifend turpis et fringilla condimentum. Donec id nibh in lorem sollicitudin bibendum in eu lacus. Maecenas in metus sit amet elit convallis elementum. Suspendisse venenatis, metus in tempor dapibus, eros ligula vulputate ipsum, sed consequat dui ex non dui. Suspendisse viverra eros et urna blandit, tristique lacinia ex lobortis. Duis nec pulvinar arcu, et interdum diam. Ut non vestibulum odio. Ut iaculis elit non libero dictum, ut ultricies justo maximus. In purus magna, pretium a iaculis sed, rutrum porta libero. Quisque volutpat, est in tempus elementum, leo elit auctor nunc, vitae vestibulum quam arcu euismod dui. Integer mi felis, fringilla sit amet elit ac, dignissim maximus est. Duis consectetur sit amet ligula id varius.

Etiam odio ligula, eleifend et lacinia eget, imperdiet sed augue. Nam nisl ex, feugiat a dapibus et, iaculis nec est. Nam commodo nibh vel arcu elementum, eget convallis turpis tempor. Pellentesque gravida aliquam lacinia. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur nulla libero, placerat at pellentesque porttitor, posuere id ante. Aliquam et lectus a dui facilisis blandit.

Aliquam porttitor bibendum tempus. Praesent ut dignissim est. Nullam quis porttitor ligula. Praesent at tristique urna. Sed porttitor turpis et arcu viverra, quis sollicitudin nulla pharetra. Donec varius eu quam molestie accumsan. Sed faucibus, velit sed ullamcorper lobortis, lorem purus feugiat nibh, nec commodo dolor urna in turpis. Donec nisl orci, varius ac dapibus scelerisque, ornare et mi. Nam dolor nunc, dictum vitae molestie sit amet, blandit ac ligula. Aliquam rutrum ex et velit cursus finibus. Aenean aliquam eros in sapien varius, in volutpat elit placerat.

Donec vehicula pellentesque eros. Donec mattis urna odio, nec malesuada ante aliquam ac. Nullam dapibus, nisi sed sollicitudin tincidunt, augue nunc consectetur nibh, nec dictum odio eros sed magna. Maecenas condimentum diam sed tortor semper, non vulputate leo sagittis. Morbi nec velit quis lectus facilisis volutpat. Nullam euismod bibendum varius. Aenean posuere dolor sed quam tincidunt, non rhoncus est iaculis. Morbi mattis, dolor sed ullamcorper semper, neque elit porta lectus, ut tincidunt sem nibh ac odio. Pellentesque mollis purus lorem, eu vestibulum mauris porttitor a. In in risus eu ante sollicitudin venenatis eget volutpat purus. In pretium erat id ligula mollis sodales. Integer consectetur, ipsum et finibus malesuada, mi lectus dignissim tortor, et posuere lectus ante et enim. Morbi vel nulla purus. In hac habitasse platea dictumst. Nam auctor ligula eu sapien maximus tincidunt. Nam vel felis a metus porttitor viverra.

Etiam ante ante, faucibus ut gravida sed, rutrum eu ex. Etiam nisl nisi, pulvinar non maximus sed, consequat sit amet justo. Etiam eget erat euismod, pulvinar lectus ut, lobortis metus. Proin finibus accumsan augue nec ullamcorper. Aliquam nunc nibh, luctus vitae justo mattis, sollicitudin tempor orci. Nunc suscipit sapien eu felis tincidunt, non pulvinar odio vulputate. Fusce convallis molestie lectus a rutrum. Pellentesque volutpat at nunc non rhoncus. Ut eget tellus augue. Nulla facilisi. Aenean suscipit euismod suscipit. Pellentesque tincidunt tortor eu est pellentesque, ac cursus ex congue. Etiam rhoncus aliquam neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat pellentesque mi, in porttitor ligula sagittis sit amet. Phasellus ut lorem id purus egestas imperdiet et non elit. Donec eleifend turpis et fringilla condimentum. Donec id nibh in lorem sollicitudin bibendum in eu lacus. Maecenas in metus sit amet elit convallis elementum. Suspendisse venenatis, metus in tempor dapibus, eros ligula vulputate ipsum, sed consequat dui ex non dui. Suspendisse viverra eros et urna blandit, tristique lacinia ex lobortis. Duis nec pulvinar arcu, et interdum diam. Ut non vestibulum odio. Ut iaculis elit non libero dictum, ut ultricies justo maximus. In purus magna, pretium a iaculis sed, rutrum porta libero. Quisque volutpat, est in tempus elementum, leo elit auctor nunc, vitae vestibulum quam arcu euismod dui. Integer mi felis, fringilla sit amet elit ac, dignissim maximus est. Duis consectetur sit amet ligula id varius.

Etiam odio ligula, eleifend et lacinia eget, imperdiet sed augue. Nam nisl ex, feugiat a dapibus et, iaculis nec est. Nam commodo nibh vel arcu elementum, eget convallis turpis tempor. Pellentesque gravida aliquam lacinia. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur nulla libero, placerat at pellentesque porttitor, posuere id ante. Aliquam et lectus a dui facilisis blandit.

Aliquam porttitor bibendum tempus. Praesent ut dignissim est. Nullam quis porttitor ligula. Praesent at tristique urna. Sed porttitor turpis et arcu viverra, quis sollicitudin nulla pharetra. Donec varius eu quam molestie accumsan. Sed faucibus, velit sed ullamcorper lobortis, lorem purus feugiat nibh, nec commodo dolor urna in turpis. Donec nisl orci, varius ac dapibus scelerisque, ornare et mi. Nam dolor nunc, dictum vitae molestie sit amet, blandit ac ligula. Aliquam rutrum ex et velit cursus finibus. Aenean aliquam eros in sapien varius, in volutpat elit placerat.

Donec vehicula pellentesque eros. Donec mattis urna odio, nec malesuada ante aliquam ac. Nullam dapibus, nisi sed sollicitudin tincidunt, augue nunc consectetur nibh, nec dictum odio eros sed magna. Maecenas condimentum diam sed tortor semper, non vulputate leo sagittis. Morbi nec velit quis lectus facilisis volutpat. Nullam euismod bibendum varius. Aenean posuere dolor sed quam tincidunt, non rhoncus est iaculis. Morbi mattis, dolor sed ullamcorper semper, neque elit porta lectus, ut tincidunt sem nibh ac odio. Pellentesque mollis purus lorem, eu vestibulum mauris porttitor a. In in risus eu ante sollicitudin venenatis eget volutpat purus. In pretium erat id ligula mollis sodales. Integer consectetur, ipsum et finibus malesuada, mi lectus dignissim tortor, et posuere lectus ante et enim. Morbi vel nulla purus. In hac habitasse platea dictumst. Nam auctor ligula eu sapien maximus tincidunt. Nam vel felis a metus porttitor viverra.

Etiam ante ante, faucibus ut gravida sed, rutrum eu ex. Etiam nisl nisi, pulvinar non maximus sed, consequat sit amet justo. Etiam eget erat euismod, pulvinar lectus ut, lobortis metus. Proin finibus accumsan augue nec ullamcorper. Aliquam nunc nibh, luctus vitae justo mattis, sollicitudin tempor orci. Nunc suscipit sapien eu felis tincidunt, non pulvinar odio vulputate. Fusce convallis molestie lectus a rutrum. Pellentesque volutpat at nunc non rhoncus. Ut eget tellus augue. Nulla facilisi. Aenean suscipit euismod suscipit. Pellentesque tincidunt tortor eu est pellentesque, ac cursus ex congue. Etiam rhoncus aliquam neque.</p>
      </div>
    );
  }
}

export default App;
