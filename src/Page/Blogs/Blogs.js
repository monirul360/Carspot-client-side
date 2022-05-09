import React from 'react';
import './Blogs.css';
const Blogs = () => {
    return (
        <div>
            <div className="container">
                <div className="blogs">
                    <h2 id='blogs-title'><span style={{ color: 'red' }}>1 /</span> Difference between javascript and nodejs</h2>
                    <p>Main differences between JavaScript and Node.js
                        Here, we are going to discuss the main differences between JavaScript and Node.js:.JavaScript is a lightweight, cross-platform, interpreted scripting programming language that is primarily used for client-side scripting. It's built into both Java and HTML. On the other hand, Node.js is a server-side scripting language based on the Google Chrome V8 engine. As a result, it's used to build network-centric applications. It is a distributed system that is used for data-intensive real-time applications.</p>
                </div>
                <div className="blogs">
                    <h2 id='blogs-title'><span style={{ color: 'red' }}>2/</span> When should you use nodejs and when should you use mongodb</h2>
                    <h4>Nodejs</h4>
                    <p>Shortly we can say, NodeJS is a JavaScript runtime environment. It's actually helps JavaScript to run outside of server. It's used in server side development.</p>
                    <h4>MongoDB</h4>
                    <p>But, MongoDB is NoSQL database which is document oriented. It represents data as of JSON documents. It's used for store data.</p>
                    <hr />
                    <p>The summary is MongoDB is a database where we can store data and NodeJS helps us to to connect our client site to database by it's server site.</p>
                </div>
                <div className="blogs">
                    <h2 id='blogs-title'><span style={{ color: 'red' }}>3/</span> Differences between sql and nosql databases</h2>
                    <h4>SQL</h4>
                    <ul>
                        <li>Databases are categorized as Relational Database Management System (RDBMS).</li>
                        <li>SQL databases have fixed or static or predefined schema.</li>
                        <li>SQL databases display data in form of tables so it is known as table-based database.</li>
                    </ul>
                    <h4>NoSQL</h4>
                    <ul>
                        <li>
                            NoSQL databases are categorized as Non-relational or distributed database system.
                        </li>
                        <li>NoSQL databases have dynamic schema.</li>
                        <li>NoSQL databases display data as collection of key-value pair, documents, graph databases or wide-column stores.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Blogs;