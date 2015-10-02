// options Object of arrays
// This object is what props is inside the Badge class
var options = {

  ThumbnailData: [{
    title: 'JS-Enables Members',
    number: 13,
    header: 'Members Contributed',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imageUrl: 'http://formatjs.io/img/react.svg'
},{
    title: 'Gulp',
    number: 2,
    header: 'Learn About Gulp.js',
    description: 'Automate and enhance your workflow',
    imageUrl: 'https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png'
}]
};

// Ask react to render this class
var element = React.createElement(ThumbnailList, options);

// After render class place it in body tag.
React.render(element, document.querySelector('.container'));

// Badge Class
var Badge = React.createClass({displayName: "Badge",
  //Must have render
  render: function() {
    return (
      React.createElement("button", {className: "btn btn-primary", type: "button"}, 
        this.props.title, " ", React.createElement("span", {className: "badge"}, this.props.number)
      )
    );
  }
});

// Thumbnail Class
var Thumbnail = React.createClass({displayName: "Thumbnail",
  render: function() {
    return (
      React.createElement("div", {className: "col-sm-6 col-md-4"}, 
        React.createElement("div", {className: "thumbnail"}, 
          React.createElement("img", {src: this.props.imageUrl}), 
          React.createElement("div", {className: "caption"}, 
            React.createElement("h3", null, this.props.header), 
            React.createElement("p", null, this.props.description), 
            React.createElement("p", null, 
              React.createElement(Badge, {title: this.props.title, number: this.props.number})
            )
          )
        )
      )
    );
  }
});

var ThumbnailList = React.createClass({displayName: "ThumbnailList",
  render: function() {
    //points at the ThumbnailData array and maps through it
    var list = this.props.ThumbnailData.map(function(thumbnailProps) {
      // making multiple thumbnails
      //... passes in all the objects properties
      return React.createElement(Thumbnail, React.__spread({},  thumbnailProps))
    });
    // rendering to page..
    return React.createElement("div", null, 
      list
    )
  }
});
