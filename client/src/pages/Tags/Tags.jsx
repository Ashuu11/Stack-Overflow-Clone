import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import TagsList from './TagsList'
import './Tags.css';

const Tags = () => {
 
    const tagsList = [{
        id:1,
        tagName: "javascript",
        tagDesc: "For questions regarding programming in ECMAScript (JavaScript/JS) and its various dialects/implementations (excluding ActionScript). Note JavaScript is NOT the same as Java! Please include all relevant tags on your question; e.g., [node.js], [jquery], [json] etc." 
    },{
        id:2,
        tagName: "python",
        tagDesc: "Python is a multi-paradigm, dynamically typed, multi-purpose programming language. It is designed to be quick to learn, understand, and use, and enforces a clean and uniform syntax."
    },{
        id:3,
        tagName: "java",
        tagDesc: "Java is a high-level object oriented programming language. Use this tag when you're having problems using or understanding the language itself."
    },{
        id:4,
        tagName: "c#",
        tagDesc: "C# (pronounced 'see sharp') is a high level, statically typed, multi-paradigm programming language developed by Microsoft."
    },{
        id:5,
        tagName: "php",
        tagDesc: "PHP is a widely used, open source, general-purpose, multi-paradigm, dynamically typed and interpreted scripting language originally designed for server-side web development."
    },{
        id:6,
        tagName: "android",
        tagDesc: "Android is Google's mobile operating system, used for programming or developing digital devices (Smartphones, Tablets, Automobiles, TVs, Wear, Glass, IoT)." 
    },{
        id:7,
        tagName: "html",
        tagDesc: "HTML (HyperText Markup Language) is the markup language for creating web pages and other information to be displayed in a web browser."
    },{
        id:8,
        tagName: "jquery",
        tagDesc: "jQuery is a JavaScript library, consider also adding the JavaScript tag. jQuery is a popular cross-browser JavaScript library that facilitates Document Object Model (DOM) traversal, event handling, animations and AJAX interactions by minimizing the discrepancies across browsers."
    },{
        id:9,
        tagName: "c++",
        tagDesc: "C++ is a general-purpose programming language. It was originally designed as an extension to C and has a similar syntax, but it is now a completely different language."
    },{
        id:10,
        tagName: "css",
        tagDesc: "CSS (Cascading Style Sheets) is a representation style sheet language used for describing the look and formatting of HTML (HyperText Markup Language), XML (Extensible Markup Language) documents and SVG elements including (but not limited to) colors, layout, fonts, and animations."
    },{
        id:11,
        tagName: "reactjs",
        tagDesc: "React is a JavaScript library for building user interfaces. It uses a declarative, component-based paradigm and aims to be both efficient and flexible."
    },{
        id:12,
        tagName: "node.js",
        tagDesc: "Node.js is an event-based, non-blocking, asynchronous I/O runtime that uses Google's V8 JavaScript engine and libuv library."
    }]



  return (
    <div className='home-container-1'>
       <LeftSidebar/>
       <div className='home-container-2'>
           <h1 className='tags-h1'>Tags</h1>
            <p className='tags-p'>A tag is a keyword or label that categorizes your question with other, similar questions. </p>
            <p className='tags-p'>Using the right tags makes it easier for others to find and answer your question.</p>
            <div className='tags-list-container'>
                {
                  tagsList.map((tag) => (
                      <TagsList tag={tag} key={tagsList.id}/>
                  ))  
                }
            </div>
       </div>
    </div>
  )
}

export default Tags