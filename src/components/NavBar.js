// import { useState, useEffect } from "react";
// import { Navbar, Nav, Container } from "react-bootstrap";
// import logo from "../assets/images/logo.png";

// export const NavBar = () => {
//   const [activeLink, setActiveLink] = useState("home");
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", onScroll);

//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const onUpdateActiveLink = (value) => {
//     setActiveLink(value);
//   };

//   return (
//     <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
//       <Container>
//         <Navbar.Brand href="/">
//           <div className="logoText">
//             <img className="astroHuntingLogo" src={logo} alt="Logo" />
//             <div>AstroHunting</div>
//           </div>
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav">
//           <span className="navbar-toggler-icon"></span>
//         </Navbar.Toggle>
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto">
//             <Nav.Link
//               href="#browse"
//               className={
//                 activeLink === "browse" ? "active navbar-link" : "navbar-link"
//               }
//               onClick={() => onUpdateActiveLink("browse")}
//             >
//               BROWSE
//             </Nav.Link>
//             <Nav.Link
//               href="#createPost"
//               className={
//                 activeLink === "createPost"
//                   ? "active navbar-link"
//                   : "navbar-link"
//               }
//               onClick={() => onUpdateActiveLink("createPost")}
//             >
//               CREATE POST
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };
