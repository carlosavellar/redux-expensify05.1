
import React from "react";
import ReactDOM from "react-dom";
import { Component } from 'react'
 
// import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

// const Child = ({ match }) => {

//     return (
//         <div>ID: {match.params.id}</div>
//     )
// };

// class AppRouter extends React.Component {
//     render() {
//         return (
//             <Router>
//                 <ul>
//                     <li><Link to="Amazon">Amazon</Link></li>
//                     <li><Link to="Bolsonaro">Bolsonaro</Link></li>
//                     <li><Link to="Zeeland">Zeeland</Link></li>
//                     <li><Link to="MaterPeace">Master Peace</Link></li>
//                     <li><Link to="Depression">Depressão</Link></li>
//                 </ul>
//                 <Route path="/:id" component={Child} />
//             </Router>
//         )
//     }
// };

// const app = document.querySelector("#app");
// ReactDOM.render(<AppRouter />, app);
//////////////////////////////////////////////////////////





// class App extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     meulocal = () => {
//         window.navigator.geolocation.getCurrentPosition(
//             (position) => console.log("Posikao", position),
//             (err) => console.log("Posikao", err),
//         );
//     }
//     render() {
//         return (

//             <div>
//                 {this.meulocal()}
//             </div>
//         )
//     }
// }

// ReactDOM.render(<App />, document.querySelector("#app"));
//////////////////////////////////////////////////////////

// class App extends React.Component {
//     render() {
//         const greeting = {
//             subject: 'React',
//             description: 'Your component library for ...',
//             local: 'Sampaulo',
//         };

//         return (
//             <div>
//                 <Greeting {...greeting} />
//             </div>
//         );
//     }
// }

// class App extends Component {
//     state = {
//         subject: 'React',
//         description: 'Your component library for ...',
//         local: 'Sao Paulo',
//     }

//     render() {
//         const greeting = {
//             subject: this.state.subject,
//             description: this.state.description,
//             local: this.state.local
//         };
//         return (
//             <div>
//                 <Greeting {...greeting} />
//             </div>
//         );
//     }
// }

// const Greeting = ({ subject, ...other }) => (
//     <div>
//         <Title title={`Welcome to ${subject}`} />
//         <Description {...other} />
//         <GetRest {...other} />
//     </div>
// );

// class GetRest extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     gGreeting = () => {
//         console.log(this.props.local);
//     }
//     render() {
//         const { getGreeting } = this.props;

//         return (
//             <div onMouseOver={this.gGreeting}>
//                 WWW
//             </div>
//         );
//     }
// }

// const Title = ({ title }) => <h1>{title}</h1>;

// const Description = ({ description }) => <p>{description}</p>;

// function FancyBorder(props) {
//     return (
//         <div className={'FancyBorder FancyBorder-' + props.color}>
//             {props.children}
//         </div>
//     );
// }

// const Contact = () => (<div className="Ilha">tets</div>);

// const Post = () => (<div className="News" />);

// function WelcomeDialog() {
//     return (
//         <FancyBorder color="blue" className="Dialog-title">
//             <h1 className="Dialog-title">
//                 Welcome
//             </h1>
//             <p className="Dialog-message">
//                 Thank you for visiting our spacecraft!
//             </p>

//         </FancyBorder >
//     );
// }

// const SplitPane = (props) => (
//     <div>
//         <div>
//             {props.left}
//         </div>
//         <div>
//             {props.right}
//         </div>
//     </div>
// );


// const App = () => (
//     <div>
//         <div>
//             <SplitPane
//                 left={<Contact />}
//                 right={<Post />}
//             />
//         </div>
//     </div>
// )

const User = ({ user }) => (
    <Profile
        name="Carlos"
        user={user}
        avatar={<AvatarRound user={user} />}
        biography={<BiographyFat user={user} />}
    />
);

const Profile = ({ name, user, avatar, biography }) => (
    <div className="profile">
        <div>{avatar}</div>
        <div>
            <p>{name}</p>
            {biography}
        </div>
    </div>
);

const AvatarRound = ({ user }) => (
    <img className="round" alt="avatar" src={user.avatarUrl} />
);

const BiographyFat = ({ user }) => (
    <p className="fat">{user.biography}</p>
);

ReactDOM.render(<User />, document.querySelector("#app"));


        //////////////////////////////////////////////////////////

