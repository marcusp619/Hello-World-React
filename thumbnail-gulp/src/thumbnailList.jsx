var React = require('react');
var Thumbnail = require('./thumbnail');
// ThumbnailList Class
module.exports = React.createClass({
  render: function() {
    //points at the ThumbnailData array and maps through it
    var list = this.props.ThumbnailData.map(function(thumbnailProps) {
      // making multiple thumbnails
      //... passes in all the objects properties
      return <Thumbnail {...thumbnailProps} />
    });
    // rendering to page..
    return <div>
      {list}
    </div>
  }
});
