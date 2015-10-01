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
